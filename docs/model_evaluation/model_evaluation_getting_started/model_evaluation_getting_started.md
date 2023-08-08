# `conda` Environment for Model Evaluation on NIC's Gadi

At this stage of *Getting Started*, we assume that you already have access to NCI's Gadi via `ssh`. If this is not the case, please go to our instructions on [how to get access to NCI's Gadi](../../getting_started/index.md).

The instructions below explain how to load our curated `python` environment, with packages and scripts which are supported by ACCESS-NRI. Once these instructions have been followed you will be able to use all pacakges and scripts when running directly on Gadi via `ssh`, in `PBS` scripts, or in JupyterLab.

???+ warning "ACCESS-NRI provides code and support, but not computing resources"
    As mentioned in the [Getting Started pages](../../get_started), you do not automatically have access to all of Gadi's storage at `/g/data/`, but need to be part of a `$PROJECT` to see files at `/g/data/$PROJECT`. For model evaluation and diagnostics, you need to be part of projects `xp65` and `hh5` for code access and a project with compute resources.

## What is part of the `access-med` enrivonment?

The complete list of dependencies can be found in the [`environment.yml`](https://github.com/ACCESS-NRI/MED-condaenv/blob/main/scripts/environment.yml) file of our [GitHub repository](https://github.com/ACCESS-NRI/MED-condaenv) and includes `intake`, `esmvaltool`, and `ilamb`:
<div style="text-align: center;">
    <img src="../../../assets/model_evaluation/condaenv_list.png" alt="List of packages that are provided as part of the xp65 access-med environment" width="75%"/>
</div>

## Running our `access-med` environment on Gadi

To avoid running code on Gadi with incompatible packages we provide you with a conda environment called access-med.
In order to change to this curated environment, please run the following commands everytime after you log into Gadi (and as part of your PBS scripts):
```
module use /g/data/xp65/public/modules
module load conda/access-med
```

This will load the latest version of `access-med` (in this tutorial `0.3`). To check which conda version you are using, you can run `which python`:


<terminal-window>
    <terminal-line data="input">module use /g/data/xp65/public/modules</terminal-line>
    <terminal-line data="input">module load conda/access-med</terminal-line>
    <terminal-line></terminal-line>
    <terminal-line>Loading conda/access-med-0.3</terminal-line>
    <terminal-line>    Loading requirement: singularity</terminal-line>
    <terminal-line data="input">which python</terminal-line>
    <terminal-line>/g/data/xp65/public/apps/med_conda_scripts/access-med-0.3.d/bin/python</terminal-line>
</terminal-window>

To test everything is working correctly, import the packages in `python3`:

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

If you are planning to run your code on Gadi with a Portable Batch System (`PBS`) job, you will need to add in the `module use` and `module load` commands to your PBS script as well. You could for example create an `example_pbs.sh` file with the content:


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

The content of `your_code.py` could be as simple as the import and version print from our example above. submit this job, you then only need to execute
```
qsub example_pbs.sh
```

If you are not familiar with PBS jobs on NCI, you can find the guide [here](https://opus.nci.org.au/display/Help/4.+PBS+Jobs). In brief: this PBS script will submit a job to Gadi with the job name (`#PBS -N`) *example_pbs* under compute project (`#PBS -P`) `iq82` with a [normal queue](https://opus.nci.org.au/display/Help/Queue+Limits) (`#PBS -q normalbw`), for 1 CPU (`#PBS -l ncpus=1`) with 2 GB RAM (`#PBS -l mem=2GB`), a walltime of 10 minutes (`#PBS -l walltime=00:10:00`) and data storage access to projects `xp65`. Note that for this example to work, you have to be [member of the NCI project](https://my.nci.org.au/mancini/project-search) `xp65` and `iq82`. Adjust the `#PBS -P` option to match your compute project. Upon starting the job, it will change into to the working directory that you submitted the job from (`#PBS -l wd`) and load the access-med conda environment.

If you are planning to run your code through JupyterLab on [NCI's ARE](https://are.nci.org.au), you need to use `/g/data/xp65/public/modules` as **Module directories** and `conda/are` as **Modules** when launching a JupyterLab session.

## Running our `access-med` environment on NCI's Interactive ARE (JupyterLab)

NCI also supports an interactive coding environment called the Australian Research Environment (ARE). It's use is quite similar to submitting a computing job via `qsub -I`, but it comes with dedicated graphical user interfaces for jupyter notebooks. To use it, you need an NCI account and be part of a project that gives you computing resources (see our [getting started](../../getting_started/index.md)).

You can then go to [https://are.nci.org.au](https://are.nci.org.au) to log in. In the "Featured Apps" section, click on "JupyterLab" and to a JupyterLab instance. Below we have provided example values, however you must change these values to match your project and use case:

- **Walltime (hours)** `1` 
- **Queue** `normalbw` 
- **Compute Size** `tiny` 
- **Project** `iq82` (This should match your project with computing resources)
- **Storage** `gdata/xp65+gdata/hh5` (Select all which match your project's gdata storage)
- *Advanced Options ...* (click button to expand) 
- **Module directories** `/g/data/xp65/public/modules`
- **Modules** `conda/are`
- *Launch* (click to submit) 

This will launch a JupyterLab session with a Session ID and display it in the list of interactive sessions (you can also find it under **My Interactive Sessions** in the top left of the ARE website).
The session appears blue while it is loading, yellow or red in case of warnings or errors, and green when it is successfully running, as in the following example:

<div style="text-align: center;">
    <img src="../../../assets/getting_started/are_1.png" alt="Example of a successfully started ARE Session" width="75%"/>
</div>

You can then **Open JupyterLab** via a button at the bottom of the session. This will bring you to a window with a directory structure to the left and a jupyter notebook to the right (see the example below). If you have loaded the modules from `hh5` or `xp65`, you should then be able to import python packes like `numpy`, `xarray` or `intake`, as shown in the screenshot below.

<div style="text-align: center;">
    <img src="../../../assets/getting_started/are_2.png" alt="Example of a JupyterLab session with directory tree to the left and jupyter notebook to the right, showing successfully imported python packages." width="75%" />
</div>

<!-- ## 4 If you need more packages

Simply raise an issue to *add a package* in our [ACCESS-NRI/MED-condaenv GitHub repository](https://github.com/ACCESS-NRI/MED-condaenv/issues):

[![Raise Issue](../../assets/model_evaluation/condaenv_raise_issue.png)](https://github.com/ACCESS-NRI/MED-condaenv/issues) -->

