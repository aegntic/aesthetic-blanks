"""
Reproduce the fitted Ogden coefficients in mechanical/fitted-ogden.json.

Re-fits a 3-term incompressible Ogden model (TRUE Cauchy stress, uniaxial
tension) to the vendored raw tensile CSVs, using the same method as the source
Soft Robotics Materials Database (Marechal et al.): scipy trust-constr with a
stability constraint mu_i*alpha_i > 0.

    python3 scripts/fit_ogden.py

Reproducible. Confirms fitted-ogden.json is not hand-typed.
"""
import os
import numpy as np
import pandas as pd
from scipy.optimize import minimize
from scipy.optimize import NonlinearConstraint

ORDER = 3
HERE = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(HERE, "..", "mechanical", "raw-tensile")
MATERIALS = [("ecoflex-00-30", "Ecoflex_00-30.csv", 200),
             ("dragon-skin-10", "Dragon_Skin_10_MEDIUM.csv", 475)]


def ogden_true(mu, al, true_strain):
    lam = np.exp(true_strain)
    s = np.zeros_like(np.asarray(true_strain, dtype=float))
    for i in range(ORDER):
        s += mu[i] * (lam ** al[i] - lam ** (-al[i] / 2.0))
    return s


def obj(params, strain, stress):
    mu, al = params[:ORDER], params[ORDER:]
    return np.sqrt(np.sum((ogden_true(mu, al, strain) - stress) ** 2))


def constr(params):
    mu, al = params[:ORDER], params[ORDER:]
    return np.array([mu[i] * al[i] for i in range(ORDER)])


def load(path):
    df = pd.read_csv(path, sep=";", skiprows=17)
    df = df[["True Strain", "True Stress (MPa)", "Engineering Strain", "Engineering Stress (MPa)"]]
    df = df.apply(pd.to_numeric, errors="coerce").dropna()
    return df


for name, fname, tensile_psi in MATERIALS:
    df = load(os.path.join(RAW, fname))
    strain, stress = df["True Strain"].values, df["True Stress (MPa)"].values
    x0 = np.concatenate([np.ones(ORDER), np.ones(ORDER)])
    nc = NonlinearConstraint(constr, 0, np.inf, jac="2-point")
    res = minimize(obj, x0, args=(strain, stress), method="trust-constr",
                   constraints=nc, tol=1e-12, options={"maxiter": 4000})
    mu, al = res.x[:ORDER], res.x[ORDER:]
    pred = ogden_true(mu, al, strain)
    rmse = float(np.sqrt(np.mean((pred - stress) ** 2)))
    r2 = float(1 - np.sum((stress - pred) ** 2) / np.sum((stress - stress.mean()) ** 2))
    lam = float(np.exp(strain[-1]))
    eng_break = float(pred[-1] / lam)
    print(f"### {name}")
    print(f"  mu (MPa)  = {[round(float(m), 4) for m in mu]}")
    print(f"  alpha     = {[round(float(a), 4) for a in al]}")
    print(f"  R2={r2:.5f}  RMSE={rmse:.4f} MPa  eng@break={eng_break:.3f} MPa (Smooth-On {tensile_psi}psi={tensile_psi*6894.757/1e6:.3f}MPa)")
