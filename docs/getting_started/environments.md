{% set release_notes = "https://forum.access-hive.org.au/t/access-nri-analysis3-conda-environments-new-release-announcement/4377" %}

<div class="text-card-group" markdown>
[:notepad_spiral:{: class="twemoji icon-before-text"} Release notes]({{release_notes}}){: class="text-card"}
</div>

# _conda/analysis3_ Python Environment

ACCESS-NRI now supports and maintains the `conda/analysis3` _Python_ environment, housed within the [xp65 NCI project](https://my.nci.org.au/mancini/project/xp65/join). This environment includes _Python_ libraries commonly used for climate data processing and analysis, allowing users to run workflows on _Gadi_ without having to manage package installations themselves. This is the continuation of the environment formerly maintained by CLEX within the `hh5` NCI project.

!!! warning 
    All users are advised to [update their workflows](#update-workflows) to replace the `hh5` `conda/analysis3` environment with the `xp65` `conda/analysis3` environment **by 30 May 2025**. After this date, the functionality of the `hh5` `conda/analysis3` environment will not be guaranteed.


## How to use the _xp65_ _conda/analysis3_ environment
 There are 3 main ways to use the `conda/analysis3` environment:
- [Manually load the environment](#manually-load-the-environment) 
- [Use the environment within a PBS job](#use-the-environment-within-a-pbs-job)
- [Use the environment within ARE](#use-the-environment-within-are)

!!! tip
    If you only want to update your workflows from the previous `hh5` `conda/analysis3` environment, refer to [Update your workflows](#update-your-workflows).

### Manually load the environment
  For each new session within a _Gadi_ login node or [ARE VDI](/getting_started/are/#vdi) terminal, run:
  ```
  module use /g/data/xp65/public/modules
  module load conda/analysis3
  ```
### Use the environment within a PBS job
In a [PBS job submission script](https://opus.nci.org.au/spaces/Help/pages/90308778/0.+Welcome+to+Gadi#id-0.WelcometoGadi-SubmissionScriptExample), add `gdata/xp65` to your storage flag:
```
#PBS -l storage=gdata/xp65
```
!!! tip
    Multiple storage projects are separated by a plus (`+`): 
    ```
    #PBS -l storage=scratch/tm70+gdata/xp65
    ```

### Use the environment within ARE
<div class="tabLabels" label="are">
    <button id="are-vdi">ARE VDI</button>
    <button id="are-jupyterlab">ARE JupyterLab</button>
</div>
<div tabcontentfor='are-vdi' markdown>
When launching an [ARE VDI](/getting_started/are/#vdi) instance:

1. Under "Storage", add  `gdata/xp65`. If you have other storage locations, use a plus sign (`+`) (e.g., `+gdata/xp65`).
</div>
<div tabcontentfor='are-jupyter' markdown>
When launching an [ARE JupyterLab](/getting_started/are/#jupyterlab) instance, under [Advanced options](/getting_started/are/#advanced-options):

1. In "Module directories", add `/g/data/xp65/public/modules/`
2. In "Modules", add `conda/analysis3`
</div>

!!! tip
    If you loaded the `hh5` `conda/analysis3` environment within your `.bashrc` or `.bash_profile` files, we recommend that you **completely remove those lines**, as programmatically loading environments that way might lead to unforeseen interference with other processes on _Gadi_. We suggest instead that you [manually load the environment](#manually-load-the-environment).
## How to switch from the _hh5_ _conda/analysis3_ environment to the _xp65_ _conda/analysis3_ one {: #update-workflows }
If you have workflows that use the `hh5` `conda/analysis3` environment, follow the steps below to update them to use the `xp65` `conda/analysis3` environment instead:
1. **Replace all instances of `hh5` with `xp65`**
2. **Make sure you are loading a correct version**<br>
   The  `xp65` `conda/analysis3` environment versioning might differ from the old `hh5` `conda/analysis3` one. Therefore, if you were loading a specific version (e.g., `conda/analysis3-23.10`), make sure to [specify a valid version](#load-a-specific-environment-version) for the `xp65` `conda/analysis3` environment.
## Advanced usage

### Two Series of Environments: _conda/analysis3_ and _conda/analysis3-edge_

There are two parallel series of environments:

- **_conda/analysis3_**<br>
    A stable environment designed for long-term usability with well-tested, reliable package versions.
- **_conda/analysis3-edge_**<br>
    A cutting-edge environment with the latest available packages, ideal for those needing the most up-to-date software and features.

These series offer flexibility: use `conda/analysis3` for stability, or `conda/analysis3-edge` for the latest updates.

### Load a specific environment version

The `xp65` `conda/analysis3` environment follows the versioning format `conda/analysis3-YY-MM`, where `YY` represents the last two digits of the release year and `MM` indicates the release month.

1. **Command line and PBS**  
If you would like to specify a particular version, you should call it explicitly. E.g. to load the April 2025 environment, specify `conda/analysis3-25.04`. If you do not specify a version, (e.g. using `conda/analysis3` rather than `conda/analysis3-YY.MM`), the latest environment version (the current month) will be loaded. 
2. **ARE**  
When launching an ARE session, you need only include `conda/analysis3`. If you would like to specify a particular environment version, you can do so for each notebook by switching kernels inside the ARE instance.


