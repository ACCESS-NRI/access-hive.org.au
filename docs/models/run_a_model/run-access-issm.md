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

## About

{{ model }} couples the **Ice Sheet System Model (ISSM)** to the ACCESS infrastructure, enabling fully parallel Antarctic and Greenland ice‑sheet simulations on the [NCI _Gadi_ supercomputer][gadi].

It is maintained and supported by **ACCESS‑NRI**.  
A high‑level description of model components—including the ISSM core, pre‑processing utilities, climate forcings, and coupling hooks—is available in the [{{ model }} overview]({{ model_configurations }}/#{{ model }}).

A typical workflow is split into two suites:

* **Pre‑Processing Suite (PPS)** – meshes the domain, downloads & interpolates datasets, and creates ISSM‑ready NetCDF/HDF5 input files.
* **Run Suite (RUN)** – compiles the ISSM code (if needed) and executes the transient simulation, handling restart cycles and post‑processing.

The example below reproduces the *MISMIP+* Antarctic benchmark. Adjust the variables to suit your experiment.

All configurations are hosted on MOSRS; direct links are provided above.

## Prerequisites

* **NCI account & Gadi access** – see [Set Up your NCI Account](/getting_started/set_up_nci_account).
* **Project membership** – minimum projects:
  * [access](https://my.nci.org.au/mancini/project/access/join)
  * [vk83](https://my.nci.org.au/mancini/project/vk83/join) (build & binary cache)
* **Modules for Cylc 7 and dependencies** – load these as needed.
* Optional: [ARE VDI Desktop](/getting_started/are).

## Quick‑start

```bash
# 1. (Optional) launch an ARE VDI or login to Gadi

# 2. Start a persistent session (replace <name> with your session name)
persistent-sessions start <name>

# 3. Register the session for job submission (adjust hostname as needed)
echo "<name>.${USER}.<project>.ps.gadi.nci.org.au" > ~/.persistent-sessions/cylc-session

# 4. Load required modules (e.g., for Python, MPI, etc.)
module use /g/data/hr22/modulefiles
module load cylc7
module load python/3.9  # or your preferred Python module

# 5. Check out the ISSM suites (edit branch/IDs if needed)
git clone --branch {{ branch }} https://github.com/ACCESS-NRI/access-issm.git
# Copy or link the PPS and RUN configurations into separate directories:
mkdir ~/access-issm-pps
mkdir ~/access-issm-run
cp -r access-issm/pps/* ~/access-issm-pps/
cp -r access-issm/run/* ~/access-issm-run/

# 6. Run the Pre‑Processing Suite (PPS)
cd ~/access-issm-pps
./run_pps.sh  # Use the provided script or your own batch submission script.

# 7. Once PPS completes successfully, run the Run Suite (RUN)
cd ~/access-issm-run
./run_model.sh  # This submits the ISSM simulation.
```

For monitoring job progress, you can use standard NCI commands (e.g., `qstat`, `squeue`) depending on your scheduler and check log files in your working directories.

## Detailed guide

### Persistent sessions

Use persistent sessions to reserve compute nodes. This prevents requeueing and improves interactive performance. Instructions vary slightly based on whether you’re using PBS, SLURM, or another scheduler—refer to the NCI documentation.

### Job submission

The PPS and RUN suites now come with simplified submission scripts (e.g., `run_pps.sh` and `run_model.sh`) that do not require Rose. These scripts:
- Set up the environment (load modules, source configuration files).
- Launch Python or compiled ISSM executables.
- Monitor execution and save outputs to NetCDF or binary files.

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

### Output locations

* **PPS products** – typically located at  
  `/scratch/$PROJECT/$USER/access-issm-pps/inputs/`  
  (meshes, datasets, etc.).

* **ISSM outputs** – typically located at  
  `/scratch/$PROJECT/$USER/access-issm-run/results/`  
  (NetCDF visualisation files and checkpoint dumps).

## Troubleshooting

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