"""
Soft Industrial Clay — constitutive-model validation.

Validates the fitted hyperelastic coefficients against Smooth-On tensile data
at the CONSTITUTIVE (1D) level: compute the Ogden uniaxial engineering
stress-stretch curve and check that the predicted ultimate stress matches the
datasheet tensile strength at the datasheet elongation-at-break.

This is NOT full 3D FEA (that needs Abaqus/COMSOL/fenics and a mesh). It is an
analytical sanity check that the fitted coefficients reproduce the real
material's force-displacement behavior. Full 3D FEA remains a future task.

Ogden, incompressible, uniaxial tension, engineering (nominal) stress:
    sigma_eng(lambda) = sum_i (2*mu_i/alpha_i) * (lambda^(alpha_i-1) - lambda^(-alpha_i/2 - 1/2))

Run (after fitted-ogden.json exists):
    python3 constitutive_check.py

Exits non-zero if coefficients are not yet available (no fabrication).
"""
import json
import os
import sys

try:
    import numpy as np
except ImportError:
    print("ERROR: numpy required"); sys.exit(2)

HERE = os.path.dirname(os.path.abspath(__file__))
FITTED = os.path.join(HERE, "fitted-ogden.json")
PROFILE = os.path.join(HERE, "profile.json")

PSI_TO_PA = 6894.757


def ogden_eng_stress(lam, mu, alpha):
    s = np.zeros_like(np.asarray(lam, dtype=float))
    for m, a in zip(mu, alpha):
        s += (2 * m / a) * (lam ** (a - 1) - lam ** (-a / 2 - 0.5))
    return s


def variant_check(name, fitted_variant, ds_variant):
    model = fitted_variant.get("model", "Ogden")
    if fitted_variant.get("status") != "fitted":
        return {"variant": name, "status": "blocked", "reason": fitted_variant.get("status", "missing")}
    mu = fitted_variant["coefficients"]["mu"]
    alpha = fitted_variant["coefficients"]["alpha"]
    mu_unit = fitted_variant["coefficients"].get("mu_unit", "Pa")
    scale = 1e6 if mu_unit.lower() == "mpa" else 1.0  # normalize to Pa
    mu = [m * scale for m in mu]

    elong = ds_variant.get("elongation_at_break_pct")
    tensile_psi = ds_variant.get("tensile_strength_psi")
    if elong is None or tensile_psi is None:
        return {"variant": name, "status": "blocked", "reason": "missing datasheet elong/tensile"}

    lam_break = 1.0 + elong / 100.0
    sigma_pred_pa = float(ogden_eng_stress(lam_break, mu, alpha))
    tensile_pa = tensile_psi * PSI_TO_PA
    residual_pct = (sigma_pred_pa - tensile_pa) / tensile_pa * 100.0

    result = {
        "variant": name,
        "model": model,
        "lambda_break": round(lam_break, 3),
        "sigma_eng_at_break_Pa": round(sigma_pred_pa, 1),
        "tensile_strength_Pa": round(tensile_pa, 1),
        "residual_pct": round(residual_pct, 1),
        "verdict": "ok" if abs(residual_pct) < 25.0 else "drift",
    }
    # 100% modulus check if reported
    m100 = ds_variant.get("modulus_100_pct_psi")
    if m100 is not None:
        s100 = float(ogden_eng_stress(2.0, mu, alpha))
        result["sigma_eng_at_100pct_Pa"] = round(s100, 1)
        result["modulus_100_pct_Pa"] = round(m100 * PSI_TO_PA, 1)
    return result


def main():
    if not os.path.exists(FITTED):
        print("BLOCKED: fitted-ogden.json not found — coefficients not available yet (no fabrication).")
        sys.exit(1)
    fitted = json.load(open(FITTED))
    profile = json.load(open(PROFILE))

    results = []
    for vname, fvar in fitted.get("variants", {}).items():
        dsvar = profile["variants"].get(vname, {}).get("datasheet", {})
        results.append(variant_check(vname, fvar, dsvar))

    print(json.dumps({"results": results, "note": "Constitutive (1D) check; residual <25% = ok. Full 3D FEA is future work."}, indent=2))
    blocked = [r for r in results if r.get("status") == "blocked"]
    if blocked:
        sys.exit(1)


if __name__ == "__main__":
    main()
