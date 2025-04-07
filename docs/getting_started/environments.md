# Conda Python Environment: `conda/analysis3`

ACCESS-NRI supports and maintains the Python environment `conda/analysis3` that is housed in the NCI project `xp65`. This environment includes most of the standard Python processing libraries for climate researchers in Australia.

!!! info
    More detailed information about the conda environment and how to use it will be added soon.

!!! warning 
    This environment was formerly maintained by CLEX on project hh5. All users should update their workflows to use the `xp65` environment **by 30 May 2025**. After this date, ACCESS-NRI cannot guarantee functionality of the `hh5` `conda/analysis3` environment.

## How to update your workflows to use the xp65 `conda/analysis3` environment
**The only usage difference is to replace instances of `hh5` with `xp65`.**  There are several ways in which you may need to update your workflow.

1. On the **command line**, for each new session, run:
```bash
module use /g/data/xp65/public/modules
module load conda/analysis3
```
2. To use the `conda/analysis3` environment for a **PBS job**, add the `xp65` project (or replace `hh5` with `xp65`) to your storage flags:
```
#PBS -l storage=gdata/xp65
```
3. When laucnhing a JupyterLab instance through the Australian Research Environment (ARE):
  - Under "Storage", add  `gdata/xp65`. If you have other storage locations, use a "+" to add `xp65`: `+gdata/xp65`
  - Under "Advanced options":
    - In "Module directories", add `/g/data/xp65/public/modules/`
    - In "Modules", add `conda/analysis3`

> Note that if you previously added the hh5 conda environment to your `.bashrc` file, we recommend that you **remove those lines** rather than replacing with xp65, as this can have some unforeseen interference with other processes you might run on Gadi. We suggest instead that you explicitly load the environment for each new session (the first bullet point above).


## Specifying a particular environment

We are releasing two parallel series of environments:

1. analysis3-YY.MM – A stable environment designed for long-term usability with well-tested, reliable package versions.
2. analysis3-edge-YY.MM – A cutting-edge environment with the latest available packages, ideal for those needing the most up-to-date software and features.

These series offer flexibility: use analysis3 for stability, or analysis3-edge for the latest updates.

By not specifying a date (e.g. using `conda/analysis3` rather than `conda/analysis3-YY.MM`), the current month’s environment will be loaded. When using ARE, users can choose a specific environment for each notebook by switching kernels inside their ARE JupyterLab instance.

