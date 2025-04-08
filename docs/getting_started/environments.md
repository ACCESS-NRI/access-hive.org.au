# `conda/analysis3` Python Environment

ACCESS-NRI now supports and maintains the `conda/analysis3` Python environment, housed within the `xp65` NCI project. This environment includes _Python_ libraries commonly used for climate data processing and analysis. This environment allows users to run workflows on Gadi without having to manage package installations themselves. This environment was formerly maintained by CLEX within the `hh5` NCI project.

!!! warning 
    All users are advised to [update their workflows](#update-workflows) to replace the `hh5` `conda/analysis3` environment with the `xp65` `conda/analysis3` environment **by 30 May 2025**. After this date, ACCESS-NRI cannot guarantee functionality of the `hh5` `conda/analysis3` environment.


## How to use the `xp65` `conda/analysis3` environment {: #update-workflows }
 There are 3 main ways in which you may need to update your workflow.

!!! important ""
    To update your workflow from the previous `hh5` `conda/analysis3` environment, follow the steps below. **The only usage difference is to replace instances of `hh5` with `xp65`.**

1. **Command line**  
  For each new session, run:
  ```
  module use /g/data/xp65/public/modules
  module load conda/analysis3
  ```
2. **PBS jobs**  
  Add the `xp65` project to your storage flags:
```
#PBS -l storage=gdata/xp65
```
3. **Australian Research Environment (ARE)**  
  When launching a JupyterLab or Virtual Desktop instance:
  * Under "Storage", add  `gdata/xp65`. If you have other storage locations, use a "+" to add `xp65`: `+gdata/xp65`
  * Under "Advanced options":
    * In "Module directories", add `/g/data/xp65/public/modules/`
    * In "Modules", add `conda/analysis3`

!!! tip
    If you previously added the `hh5` conda environment to your `.bashrc` file, we recommend that you **completely remove those lines**, as programmatically loading environments that way might lead to unforeseen interference with other processes on _Gadi_. We suggest instead that you [manually load the environment](#manually-load-the-environment) for each new session.

## For more advanced usage

### Two Series of Environments: analysis3 and analysis3-edge

We are releasing two parallel series of environments:

1. `analysis3-YY.MM` – A stable environment designed for long-term usability with well-tested, reliable package versions.
2. `analysis3-edge-YY.MM` – A cutting-edge environment with the latest available packages, ideal for those needing the most up-to-date software and features.

These series offer flexibility: use `analysis3` for stability, or `analysis3-edge` for the latest updates.

### Load a specific environment version

The `xp65` `conda/analysis3` environment takes a versioning approach, where users can specify a particular month when loading the modules. 

1. **Command line and PBS**  
If you would like to specify a particular version, you should call it explicitly. E.g. to load the April 2025 environment, specify `conda/analysis3-25.04`. If you do not specify a version, (e.g. using `conda/analysis3` rather than `conda/analysis3-YY.MM`), the latest environment version (the current month) will be loaded. 
2. **ARE**  
When launching an ARE session, you need only include `conda/analysis3`. If you would like to specify a particular environment version, you can do so for each notebook by switching kernels inside the ARE instance.


