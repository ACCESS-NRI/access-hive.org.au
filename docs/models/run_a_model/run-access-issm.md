{% set model = "ACCESS-ISSM" %}
{% set pps_id = "u-ppppp" %} {# Pre‑Processing Suite ID (placeholder) #}
{% set run_id = "u-rrrrr" %} {# Main Run Suite ID (placeholder) #}
{% set branch = "access_rel_1" %}
{% set pps_config = "https://github.com/ACCESS-NRI/access-issm/tree/main/pps" %}
{% set run_config = "https://github.com/ACCESS-NRI/access-issm/tree/main/run" %}
{% set model_configurations = "/models/configurations/access-issm" %}
{% set release_notes = "https://forum.access-hive.org.au/t/access-issm-release-information/XXXX" %}
[Cluster job guide]: https://opus.nci.org.au/display/Help/4.+PBS+Jobs
[model components]: {{ model_configurations }}/#model-components
[gadi]: https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview
[default project]: /getting_started/set_up_nci_account#change-default-project-on-gadi

# Run {{ model }}

## 1 About

{{ model }} couples the **Ice Sheet System Model (ISSM)** to the ACCESS infrastructure, enabling fully parallel Antarctic and Greenland ice‑sheet simulations on the [NCI _Gadi_ supercomputer][gadi].

It is maintained and supported by **ACCESS‑NRI**.  
A high‑level description of model components—including the ISSM core, pre‑processing utilities, climate forcings, and coupling hooks—is available in the [{{ model }} overview]({{ model_configurations }}/#{{ model }}).ng.

The example below reproduces the *MISMIP+* benchmark. Adjust the variables to suit your experiment.

## 2 Prerequisites

1. **NCI login + Gadi project** – request `access` and `vk83` memberships if you do not already have them.
2. **Spack ISSM environment** – follow the build recipe in [https://github.com/ACCESS-NRI/access-issm](https://github.com/ACCESS-NRI/access-issm).  You should end up with `ISSM_DIR` and a Spack `issm-env`.
3. **Modules** – at minimum:
   ```bash
   module load python3/3.10.4   # matches the version used for ISSM Python API
   module load git
   ```

---

## 3  Quick‑start (Gadi login node)

```bash
# 0. Choose a working directory for this test
$ mkdir -p ~/experiments/mismip && cd ~/experiments/mismip

# 1. Clone the ACCESS‑ISSM repository (alpha branch)
$ git clone --branch access_rel_1 \
      https://github.com/ACCESS-NRI/access-issm.git

# 2. Activate ISSM Spack environment and point ISSM_DIR
$ source /g/data/au88/$USER/spack/share/spack/setup-env.sh
$ spack env activate issm-env
$ export ISSM_DIR=$(spack location -i issm)

# 3. Pre‑process (mesh + inputs)
$ cp access-issm/examples/mismip/run_pps.sh ./
$ qsub run_pps.sh           # or `bash run_pps.sh` inside a pInteractive job

# 4. When PPS finishes, run the first experiment bundle
$ cp access-issm/examples/mismip/run_mismip_first.sh ./
$ qsub run_mismip_first.sh  # generates SSA vs ESTAR comparison plot
```

Outputs:

- Mesh + forcing NetCDF/HDF5 → `scratch/$PROJECT/$USER/mismip_pps/inputs/`
- ISSM state & plots → `scratch/$PROJECT/$USER/mismip_run/Models_*/*`

---

## 4  Running from ARE Desktop

> ARE provides a GUI VDI plus a terminal already SSH‑tunnelled to *gadi-login*.

1. **Launch VDI** – open [https://are.nci.org.au](https://are.nci.org.au), choose **Gadi Desktop (x64)**, click **Launch**.
2. **Gadi Terminal** – inside the desktop, open **Gadi Remote Terminal**.
3. **Reserve nodes** (optional but recommended):
   ```bash
   persistent-sessions start issm
   echo "issm.${USER}.au88.ps.gadi.nci.org.au" > \
        ~/.persistent-sessions/cylc-session
   ```
4. **Load env + clone** – as in Quick‑start (`module …`, `git clone …`).
5. **Pre‑process & Run** – submit the same `run_pps.sh` / `run_mismip_first.sh` with `qsub`.
6. **Monitor** – `qstat -u $USER`, or `tail -f pps.o<jobid>` in a terminal; use ARE’s Paraview for quick looks.
7. **Release nodes** when finished:
   ```bash
   persistent-sessions stop issm
   ```

*Tips*

- Heavy solves **must** run on the reserved nodes, not on the VDI itself.
- VDI sessions expire after 12 h; jobs keep running.

---

## 5  File structure

```
experiments/mismip/
├── access-issm/                 # git clone (alpha branch)
│   └── examples/mismip/
│       ├── mismip_driver.py     # full driver script (all steps)
│       ├── run_pps.sh           # helper: submits PPS job
│       └── run_mismip_first.sh  # helper: submits early RUN job (steps 1‑7)
├── run_pps.sh                   # copied helper – edit walltime/resources here
└── run_mismip_first.sh          # copied helper – edit nodes/time as needed
```

---

## 6  Editing job scripts

Both helper scripts are standard PBS batch files.  Typical tweaks:

| Directive          | Default    | Change when…                                                       |
| ------------------ | ---------- | ------------------------------------------------------------------ |
| `#PBS -P`          | `au88`     | Running under a different project code                             |
| `#PBS -l ncpus`    | `32`       | Mesh resolution < 1 km → reduce to 8–16 ; very high‑res → increase |
| `#PBS -l walltime` | `48:00:00` | Convergence problems: extend                                       |

For quick interactive debugging you can run the driver directly inside an *ARE* Desktop or `qsub -I` session:

```bash
$ python mismip_driver.py  # uses default steps list
```

### {{ model }} configuration

Key configurable groups (edit the configuration files as needed):
  
| Suite | Section            | Purpose                                                              |
|-------|--------------------|----------------------------------------------------------------------|
| **PPS** | Domain setup      | Projection, bounds, resolution, MUA/SSA blend law, etc.             |
|        | Datasets          | Surface mass balance, basal friction, geothermal heat, geometry DEMs  |
| **RUN** | Time-stepping     | `INITIAL_CYCLE_POINT`, `FINAL_CYCLE_POINT`, dt, adaptive settings      |
|        | Physics options   | Flow law, calving, melting parameterisations                          |
|        | Resources         | MPI tasks, OpenMP threads, walltime                                   |

After editing configurations, simply re-run the corresponding suite’s script.

## 7 Troubleshooting

* **NaNs in solver residuals** – try a smaller time‑step (`dt`) or increase the number of Picard iterations in the StressbalanceAnalysis.
* **PETSc convergence errors** – confirm that `md.stressbalance.reltol` is properly set and not `NaN`; consider using hardware‑specific builds of PETSc ≥ 3.20.
* **Job submission hangs** – check the log files for errors, verify that your module paths and environment variables (e.g., ISSM_DIR) are correctly set, and ensure proper resource allocation in your job scripts.

## Get help

Ask questions in the [ACCESS‑ISSM category](https://forum.access-hive.org.au/c/cryosphere/access-issm/) on ACCESS‑Hive, or email **support@access‑nri.org.au** with your suite ID and a log excerpt.

---

<custom-references>
- ISSM User Guide: https://issm.jpl.nasa.gov/documentation
- ACCESS‑NRI ISSM build recipe: https://github.com/ACCESS-NRI/access-issm
- NCI Cylc docs: https://opus.nci.org.au/display/DAE/Run+Cylc7+Suites
</custom-references>