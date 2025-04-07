# Conda Python Environment: `conda/analysis3`

ACCESS-NRI supports the Python environment `conda/analysis3` that is housed in the NCI project xp65. More detailed information about the conda environment and how to use it will be added soon.

This environment was formerly maintained by CLEX on project hh5. All users should update their workflows to use the xp65 environment that will be regularly maintained and updated by ACCESS-NRI.

## How to update your workflows to use the xp65 `conda/analysis3` environment
**The only usage difference is to replace instances of `hh5` with `xp65`.** By not specifying a date (e.g. using `conda/analysis3` rather than `conda/analysis3-YY.MM`), the current month’s environment will be loaded. Examples of loading the new `conda/analysis3` environment include:
- On the **command line**, for each new session, run:
```bash
module use /g/data/xp65/public/modules
module load conda/analysis3
```
- If you need to use the `conda/analysis3` environment for a **PBS job**, add the `xp65` project (or replace `hh5` with `xp65`) to your storage flags:
```
#PBS -l storage=gdata/xp65
```
- When using **Australian Research Environment (ARE)**, add `gdata/xp65` to "Storage", `/g/data/xp65/public/modules/` to "Module directories" (under "Advanced options"), and add `conda/analysis3` to "Modules". Additionally, users can switch kernels inside their **ARE JupyterLab instance** to select the appropriate environment.

> Note that if you previously added the hh5 conda environment to your `.bashrc` file, we recommend that you **remove those lines** rather than replacing with xp65, as this can have some unforeseen interference with other processes you might run on Gadi. We suggest instead that you explicitly load the environment for each new session (the first bullet point above).
