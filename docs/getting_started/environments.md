# `conda/analysis3` Python Environment

ACCESS-NRI now supports and maintains the `conda/analysis3` Python environment, housed within the `xp65` NCI project. This environment includes most of the standard Python processing libraries for climate researchers in Australia. This environment was formerly maintained by CLEX within the `hh5` NCI project.

!!! warning 
    All users are advised to [update their workflows](#update-workflows) to replace the `hh5` `conda/analysis3` environment with the `xp65` `conda/analysis3` environment **by 30 May 2025**. After this date, ACCESS-NRI cannot guarantee functionality of the `hh5` `conda/analysis3` environment.


!!! info
    More detailed information about this _Python_ environment as well as instructions on how to use it will be added soon.

## How to update your workflows to use the xp65 `conda/analysis3` environment
**The only usage difference is to replace instances of `hh5` with `xp65`.**  There are several ways in which you may need to update your workflow.

1. **Command line** \
  For each new session, run:
  ```bash
  module use /g/data/xp65/public/modules
  module load conda/analysis3
  ```
2. **PBS jobs** \
  Add the `xp65` project (or replace `hh5` with `xp65`) to your storage flags:
```
#PBS -l storage=gdata/xp65
```
3. **Australian Research Environment (ARE)** 
  * Under "Storage", add  `gdata/xp65`. If you have other storage locations, use a "+" to add `xp65`: `+gdata/xp65`
  * Under "Advanced options":
    * In "Module directories", add `/g/data/xp65/public/modules/`
    * In "Modules", add `conda/analysis3`

> Note that if you previously added the hh5 conda environment to your `.bashrc` file, we recommend that you **remove those lines** rather than replacing with xp65, as this can have some unforeseen interference with other processes you might run on Gadi. We suggest instead that you explicitly load the environment for each new session (the first bullet point above).


## Two Series of Environments: Analysis3 and Analysis3-Edge

We are releasing two parallel series of environments:

1. `analysis3-YY.MM` – A stable environment designed for long-term usability with well-tested, reliable package versions.
2. `analysis3-edge-YY.MM` – A cutting-edge environment with the latest available packages, ideal for those needing the most up-to-date software and features.

These series offer flexibility: use `analysis3` for stability, or `analysis3-edge` for the latest updates.

## How to specify a particular environment

The `xp65` `conda/analysis3` environment takes a versioning approach, where users can specify particular months/years when loading the modules. 

1. **Command line and PBS** \
If you would like to specify a particular month's envrionment, you should call it explicitly. E.g. to load the April 2025 environment, specify `conda/analysis3-25.04` instead of `conda/analysis3`. If you do not specify a particular month's environment, (e.g. using `conda/analysis3` rather than `conda/analysis3-YY.MM`), the current month’s environment will be loaded. 
2. **ARE** \
When launching an ARE session, you need only include `conda/analysis3`. If you would like to specify a particular month's environment, you can switch kernels inside your ARE JupyterLab instance. This allows you to choose different environments for different notebooks.

