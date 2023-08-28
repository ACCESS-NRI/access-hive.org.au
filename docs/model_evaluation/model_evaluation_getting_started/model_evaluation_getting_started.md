# `conda` Environment for Model Evaluation on Gadi

If you do not yet have `ssh` access to <i>Gadi</i>, refer to instructions on how to <a href="../../getting_started/index.md/#login-to-gadi">login to Gadi</a>.

The following instructions explain how to load the curated `python` environment on NCI, which includes packages and scripts supported by ACCESS-NRI. Once loaded, these can be run directly on <i>Gadi</i> via `ssh`, `PBS` scripts, or in `JupyterLab`.

???+ warning "ACCESS-NRI can provide code and support, but not computing resources"
    You do not automatically have access to all `/g/data/` storage on <i>Gadi</i>. You need to <a href="../../getting_started/#join-relevant-nci-projects">join an NCI project</a> to view files on `/g/data/$PROJECT`. 
    <br>
    For model evaluation and diagnostics, you need to join projects `xp65` and `hh5` for code access and a `$PROJECT` with sufficient compute resources.

## What is the `access-med` environment?

The complete list of dependencies for the `access-med` environment can be found in the [`environment.yml`](https://github.com/ACCESS-NRI/MED-condaenv/blob/main/scripts/environment.yml) file of the [ACCESS-NRI GitHub repository](https://github.com/ACCESS-NRI/MED-condaenv). These include `intake`, `esmvaltool` and `ilamb`:
<div style="text-align: center;">
    <img src="../../../assets/model_evaluation/condaenv_list.png" alt="List of packages that are provided as part of the xp65 access-med environment" width="75%"/>
</div>

## Running the `access-med` environment on Gadi

To avoid running code on <i>Gadi</i> with incompatible packages, a conda environment called `access-med` is provided. 
<br>
To change to this curated environment, run the following commands after logging into <i>Gadi</i> and edit your `PBS` script accordingly:
```
module use /g/data/xp65/public/modules
module load conda/access-med
```

This will load the latest version of `access-med`, e.g. version `access-med-0.3`. 
<br>
To check which `conda` version you are using, run the following command:
```
which python
```

<terminal-window>
    <terminal-line data="input">module use /g/data/xp65/public/modules</terminal-line>
    <terminal-line data="input">module load conda/access-med</terminal-line>
    <terminal-line></terminal-line>
    <terminal-line>Loading conda/access-med-0.3</terminal-line>
    <terminal-line>    Loading requirement: singularity</terminal-line>
    <terminal-line data="input">which python</terminal-line>
    <terminal-line>/g/data/xp65/public/apps/med_conda_scripts/access-med-0.3.d/bin/python</terminal-line>
</terminal-window>

To test everything is working correctly, import the packages in `python3` as follows:

```python
import numpy as np
import xarray
import intake
import esmvaltool
print(np.__version__)
print(xarray.__version__)
print(intake.__version__)
print(esmvaltool.__version__)
```

If you want to run your code on <i>Gadi</i> using a Portable Batch System (`PBS`) job, add the `module use` and `module load` commands to your `PBS` script as shown in the `example_pbs.sh` `PBS` script below:

```
#!/bin/bash
#PBS -N example_pbs
#PBS -P iq82
#PBS -q normalbw
#PBS -l ncpus=1
#PBS -l mem=2GB 
#PBS -l walltime=00:10:00
#PBS -l storage=gdata/xp65
#PBS -l wd

module use /g/data/xp65/public/modules
module load conda/access-med

python3 your_code.py
```

The content of `your_code.py` could simply comprise the `import` and `which version` lines from our above example. 
<br>
To submit this `PBS` job, execute the following command:
```
qsub example_pbs.sh
```

This will submit a job to <i>Gadi</i> with the job name (`#PBS -N`) *example_pbs* under compute project (`#PBS -P`) *iq82* with a </i>normalbw</i> <a href="https://opus.nci.org.au/display/Help/Queue+Limits" target="_blank">normal queue</a> (`#PBS -q`). The </i>number of CPUs</i> requested is 1 CPU (`#PBS -l ncpus=1`) with 2 GB RAM (`#PBS -l mem=2GB`) and a <i>walltime</i> of 10 minutes (`#PBS -l walltime=00:10:00`). The <i>data storage</i> (`#PBS -l storage=gdata/xp65`) is data storage access to project `xp65`. 
<br>
<br>
<i>Note</i>: to run this example, you need to be a <a href="https://my.nci.org.au/mancini/project-search" target="_blank">member of an NCI project</a>, in this case `xp65` and `iq82` projects. 
<br>
Adjust the `#PBS -P` option to match your compute project. 
<br>
When the job starts, it will change to the working directory from where you submitted the job (`#PBS -l wd`) and load the access-med `conda` environment.
<br>
<br>
For more information on running `PBS` jobs on NCI, refer to <a href="https://opus.nci.org.au/display/Help/4.+PBS+Jobs" target="_blank">PBS Jobs</a>. 

## Running the `access-med` environment on ARE 

NCI also supports an interactive coding environment called the Australian Research Environment (<i>ARE</i>). Its use is similar to that for submitting a `PBS` job via `qsub -I`, but with an added bonus of a dedicated graphical user interface for `Jupyter` notebooks. 
<br>
<br>
To use <i>ARE</i>, you must have an NCI account and be a member of a project with computing resources (see section on [getting started](../../getting_started/index.md)).

Once you <a href="https://are.nci.org.au" target="_blank">login to <i>ARE</i></a>, click on <i>JupyterLab</i> in the <i>Featured Apps</i> section to launch a `JupyterLab` instance. 
<br>
Below are some example values that you should change to match your `$PROJECT` and use case:

- **Walltime (hours)** `1` 
- **Queue** `normalbw` 
- **Compute Size** `tiny` 
- **Project** `iq82` (This should match your `$PROJECT` with compute resources)
- **Storage** `gdata/xp65+gdata/hh5` (Select all that match your project's `/g/data` storage)
- *Advanced Options ...* (click button to expand) 
- **Module directories** `/g/data/xp65/public/modules`
- **Modules** `conda/are`
- *Launch* (click to submit) 

This will launch a `JupyterLab` session with a <i>Session ID</i>, which will appear in the list of interactive sessions. (You can also find it under <i>My Interactive Sessions</i> at the top-left of the ARE window).
<br>
The session appears blue while it is loading, yellow or red in case of warnings or errors, and green when it is successfully running:

<div style="text-align: center;">
    <img src="../../../assets/getting_started/are_1.png" alt="Example of a successfully started ARE Session" width="75%"/>
</div>

You can then <i>Open JupyterLab</i> by clicking on the button at the bottom of the session. 
<br>
This will open a window which contains a directory structure on the left and a `Jupyter` notebook on the right, as shown below. 
<br>
If you loaded the modules from `hh5` or `xp65`, you should be able to import python packages such as `numpy`, `xarray` or `intake`, as shown below:

<div style="text-align: center;">
    <img src="../../../assets/getting_started/are_2.png" alt="Example of a JupyterLab session with directory tree to the left and jupyter notebook to the right, showing successfully imported python packages." width="75%" />
</div>

<!-- ## 4 If you need more packages

Simply raise an issue to *add a package* in our [ACCESS-NRI/MED-condaenv GitHub repository](https://github.com/ACCESS-NRI/MED-condaenv/issues):

[![Raise Issue](../../assets/model_evaluation/condaenv_raise_issue.png)](https://github.com/ACCESS-NRI/MED-condaenv/issues) -->

