"""
Soft Industrial Clay — constitutive validation.

Validates the fitted Ogden coefficients (mechanical/fitted-ogden.json) against
the raw tensile curve: does the model reproduce the measured TRUE stress-true
strain data? Reports RMSE / R2 per variant, plus an engineering-stress-at-break
cross-check against the Smooth-On datasheet.

This is a constitutive-level (1D) check, NOT full 3D FEA (which needs
Abaqus/COMSOL/fenics + a mesh). It proves the coefficients are sound and
correctly attributed. Full 3D FEA remains future work.

    python3 mechanical/constitutive_check.py
"""
import os
import sys
import json
import numpy as np
import pandas as pd

HERE = os.path.dirname(os.path.abspath(__file__))
FITTED = os.path.join(HERE, "fitted-ogden.json")
PSI_TO_PA = 6894.757


def ogden_true(mu, al, true_strain):
    lam = np.exp(true_strain)
    s = np.zeros_like(np.asarray(true_strain, dtype=float))
    for i in range(len(mu)):
        s += mu[i] * (lam ** al[i] - lam ** (-al[i] / 2.0))
    return s


def load_csv(path):
    df = pd.read_csv(path, sep=";", skiprows=17)
    df = df[["True Strain", "True Stress (MPa)", "Engineering Strain", "Engineering Stress (MPa)"]]
    return df.apply(pd.to_numeric, errors="coerce").dropna()


def main():
    fitted = json.load(open(FITTED))
    results = []
    for vname, v in fitted["variants"].items():
        if v.get("status") != "fitted":
            results.append({"variant": vname, "status": "blocked", "reason": v.get("status")})
            continue
        mu = v["coefficients"]["mu"]
        al = v["coefficients"]["alpha"]
        assert v["coefficients"]["mu_unit"] == "MPa", "expected MPa"
        df = load_csv(os.path.join(HERE, v["raw_data_file"]))
        strain, stress = df["True Strain"].values, df["True Stress (MPa)"].values
        eng = df["Engineering Stress (MPa)"].values

        pred = ogden_true(mu, al, strain)
        rmse = float(np.sqrt(np.mean((pred - stress) ** 2)))
        r2 = float(1 - np.sum((stress - pred) ** 2) / np.sum((stress - stress.mean()) ** 2))
        lam = float(np.exp(strain[-1]))
        eng_pred = float(pred[-1] / lam)
        eng_meas = float(eng[-1])
        tensile_MPa = v["crosscheck"]["engineering_stress_at_break_MPa"]["smooth_on_tensile"]

        results.append({
            "variant": vname,
            "model": v["model"],
            "N_points": int(len(strain)),
            "stretch_at_break": round(lam, 2),
            "RMSE_MPa": round(rmse, 4),
            "R2": round(r2, 5),
            "curve_reproduction": "PASS" if r2 > 0.99 else "drift",
            "eng_stress_at_break_MPa": {
                "ogden": round(eng_pred, 3),
                "measured": round(eng_meas, 3),
                "smooth_on": round(tensile_MPa, 3),
            },
            "crosscheck_vs_datasheet": v["crosscheck"]["verdict"],
        })

    print(json.dumps({"results": results,
                      "note": "Constitutive (1D) check: R2>0.99 = Ogden reproduces the measured curve. "
                              "eng@break cross-check vs Smooth-On is informational (true vs engineering). "
                              "Full 3D FEA is future work."}, indent=2))

    bad = [r for r in results if r.get("status") == "blocked" or r.get("curve_reproduction") == "drift"]
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
