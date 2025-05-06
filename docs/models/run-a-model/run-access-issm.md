{% set model = "ACCESS-ISSM" %}
{% set pps_id = "u-ppppp" %} {# Pre‑Processing Suite ID (placeholder) #}
{% set run_id = "u-rrrrr" %} {# Main Run Suite ID (placeholder) #}
{% set branch = "access_rel_1" %}
{% set pps_config = "https://code.metoffice.gov.uk/trac/roses-u/browser/p/p/p/p/p/trunk" %}
{% set run_config = "https://code.metoffice.gov.uk/trac/roses-u/browser/r/r/r/r/r/trunk" %}
{% set model_configurations = "/models/configurations/access-issm" %}
{% set release_notes = "https://forum.access-hive.org.au/t/access-issm-release-information/XXXX" %}
[PBS job]: https://opus.nci.org.au/display/Help/4.+PBS+Jobs
[model components]: {{ model_configurations }}/#model-components
[gadi]: https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview
[default project]: /getting_started/set_up_nci_account#change-default-project-on-gadi

<div class="text-card-group" markdown>

[![Met Office](/assets/met_office_logo.png){: class="icon-before-text  white-background"} Pre‑processing configuration]({{pps_config}}){: class="text-card"}
[![Met Office](/assets/met_office_logo.png){: class="icon-before-text  white-background"} Run configuration]({{run_config}}){: class="text-card"}
[:notepad_spiral:{: class="twemoji icon-before-text"} Release notes]({{release_notes}}){: class="text-card"}
</div>

# Run {{ model }}

## About

{{ model }} couples the **Ice Sheet System Model (ISSM)** to the ACCESS infrastructure, allowing fully parallel Antarctic and Greenland ice‑sheet simulations on the [NCI _Gadi_ supercomputer][gadi].
It is maintained and supported by **ACCESS‑NRI**.
A high‑level description of model components, including the ISSM core, preprocessing utilities, climate forcings and coupling hooks, is available in the [{{ model }} overview]({{ model_configurations }}/#{{ model }}).

A typical workflow is split into two Rose/Cylc suites:

* **Pre‑Processing Suite (PPS)** – meshes the domain, downloads & interpolates datasets, and writes ISSM‐ready NetCDF/HDF5 input files.
* **Run Suite (RUN)** – compiles ISSM if necessary and executes the transient simulation, handling restart cycles and post‑processing.

The example below reproduces the *MISMIP+* Antarctic benchmark. Adapt the variables to your experiment as needed.

All configurations are hosted on MOSRS; direct links are provided above.

## Prerequisites

* **NCI account & Gadi access** – see [Set Up your NCI Account](/getting_started/set_up_nci_account).
* **MOSRS account** – request via your institutional sponsor if you do not already have one.
* **Project membership** – minimum projects:
  * [access](https://my.nci.org.au/mancini/project/access/join)
  * [ki32](https://my.nci.org.au/mancini/project/ki32/join) / [ki32_mosrs](https://my.nci.org.au/mancini/project/ki32_mosrs/join)
  * [vk83](https://my.nci.org.au/mancini/project/vk83/join) (build & binary cache)
* **Rose/Cylc 7 ≥ 24.03** modules (loaded below).
* Optional: [ARE VDI Desktop](/getting_started/are).

## Quick‑start

```bash
# 1. (Optional) launch an ARE VDI or login to Gadi

# 2. Start a persistent session (replace <name>)
persistent-sessions start <name>

# 3. Register the session for Cylc
echo "<name>.${USER}.<project>.ps.gadi.nci.org.au" > ~/.persistent-sessions/cylc-session

# 4. Load Rose/Cylc and MOSRS helpers
module use /g/data/hr22/modulefiles
module load cylc7            # pulls in mosrs-setup
mosrs-auth                   # enter MOSRS credentials

# 5. Check out the ISSM suites (edit branch/IDs if needed)
rosie checkout {{ pps_id }}/{{ branch }}   # Pre‑processing
rosie checkout {{ run_id }}/{{ branch }}   # Model run

# 6. Run suites
cd ~/roses/{{ pps_id }} && rose suite-run      # generates inputs
# after PPS succeeds, run ISSM
cd ~/roses/{{ run_id }} && rose suite-run
```

For GUI monitoring use `rose suite-gcontrol &` from each suite directory.

## Detailed guide

### Persistent sessions
(identical to ACCESS‑rAM guide – omitted for brevity)

### Rose/Cylc/MOSRS setup
(as above)

### {{ model }} configuration

Key configurable groups (edit via **`rose edit`**):

| Suite | Section | Purpose |
|-------|---------|---------|
| **PPS** | `Domain setup` | Projection, bounds, resolution, MUA/SSA blend law, etc. |
|         | `Datasets` | Surface mass‑balance, basal friction, geothermal heat, geometry DEMs |
| **RUN** | `Time‑stepping` | `INITIAL_CYCLE_POINT`, `FINAL_CYCLE_POINT`, ∆t, adaptive settings |
|         | `Physics options` | Flow law, calving, melting parameterisations |
|         | `Resources` | MPI tasks, OpenMP threads, walltime |

After editing, **reload** a running suite with `rose suite-run --reload`.

### Output locations

* **PPS products** – `/scratch/$PROJECT/$USER/cylc-run/<pps-ID>/share/inputs/` (meshes, datasets).
* **ISSM outputs** – `/scratch/$PROJECT/$USER/cylc-run/<run-ID>/share/cycle/<cycle>/<domain>/results/`.
  NetCDF visualisation files (`*.nc`) and checkpoint dumps (`*.bin`) are produced each cycle.

### Common modifications

* **Change experiment length** – edit `INITIAL_CYCLE_POINT` / `FINAL_CYCLE_POINT` in Run suite.
* **Switch domain (Antarctica vs Greenland)** – change geometry DEM & mask in the PPS, update domain meta in RUN.
* **Enable coupling to ACCESS‑OM3** – set `coupler=true` and supply ocean forcing path.

### Troubleshooting

* **NaNs in solver residual** – try smaller time‑step (`dt`), or increase Picard iterations in `StressbalanceAnalysis`.
* **PETSc convergence error** – ensure `md.stressbalance.reltol` not `NaN`; hardware‑specific builds of PETSc ≥ 3.20 via Spack recommended.
* **Suite hangs in submitted** – mark failed, set waiting, or `rose suite-run --reload`.

## Get help

Ask questions in the [ACCESS‑ISSM category](https://forum.access-hive.org.au/c/cryosphere/access-issm/???) on ACCESS‑Hive, or email **support@access‑nri.org.au** with suite ID and log excerpt.

---

<custom-references>
- ISSM User Guide: https://issm.jpl.nasa.gov/documentation
- ACCESS‑NRI ISSM build recipe: https://github.com/ACCESS-NRI/access-issm
- NCI Cylc docs: https://opus.nci.org.au/display/DAE/Run+Cylc7+Suites
</custom-references>