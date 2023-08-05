# Model Evaluation Environment at NIC's Gadi

At this stage of *Getting Started*, we assume that you already have access to NCI's Gadi. If this is not the case, please go to our instructions on how to get [access to NCI's Gadi](../../get_started/index.md).

Here we describe the additional information to get started with model evaluation that is supported by ACCESS-NRI.

???+ warning "ACCESS-NRI provides code and support, but not computing resources"
    You do not automatically have access to all of Gadi's storage at `/g/data/`, but need to be part of a `$PROJECT` to see files at `/g/data/$PROJECT`. Furthermore, if you use Gadi's job submission system PBS (Portable Batch System), you need to add the relevant storage to the `#PBS -l storage=gdata/xp65+gdata/kj13` (if you want the job to have access to `xp65` and `kj13` in this example).

## 1 `access-med`: Our currated `conda` environment on Gadi

To avoid running multiple (different) versions of code on Gadi, we provide you with a `conda` environment called `access-med` that we actually curate for you (version 0.1 is from June 2023).

In order to change to this environment, please execute the following commands after loggin onto Gadi (and as part of your PBS scripts):
```
module use /g/data/xp65/public/modules
module load conda/access-med
```

If you are planning to run your code through JupyterLab on [NCI's ARE](https://are.nci.org.au), you need to use `/g/data/xp65/public/modules` as **Module directories** and `conda/are` as **Modules** when launching a JupyterLab session.

## 2 What is part of the `access-med` enrivonment?

You are now able to use the scripts of our currated environment, including `python3`, `intake`, `jupyter`, `esmvaltool`, or `ilamb`. The complete list of dependencies can be found in the `environment.yml` file of our [GitHub repository](https://github.com/ACCESS-NRI/MED-condaenv/blob/main/scripts/environment.yml):


<div style="text-align: center;">
    <a href="https://github.com/ACCESS-NRI/MED-condaenv/blob/main/scripts/environment.yml" target="_blank"><img src="../../../assets/model_evaluation/condaenv_list.png" alt="List of packages that are provided as part of the xp65 access-med environment" width="75%"/></a>
</div>

## 3 Interactive computing on NCI via the Australian Research Environment (ARE)

NCI also supports an interactive coding environment called the Australian Research Environment (ARE). It's use is quite similar to submitting a computing job via `qsub -I`, but it comes with dedicated graphical user interfaces for jupyter notebooks. To use it, you need an NCI account and be part of a project that gives you computing resources (see our [getting started](../../get_started/index.md)).

You can then easily go to [https://are.nci.org.au](https://are.nci.org.au) and login. After you are logged in, you can click on the featured app button "JupyterLab" to start a JupyterLab instance. This will progress you to a window with many input fields. You need to at least fill in the following (we show default values, but you need to adjust them for your given use case and projects):  

- **Walltime (hours)** `1` 
- **Queue** `normalbw` 
- **Compute Size** `tiny` 
- **Project** `iq82` (exchange with your project with computing resources) 
- **Storage** `gdata/xp65+gdata/hh5` (exchange with the gdata-project storage that you need access to) 
- *Advanced Options ...* (click button to expand) 
- **Module directories** `/g/data/xp65/public/modules` (exchange with your module directory, like `/g/data/hh5/public/modules/`) 
- **Modules** `conda/are` (exchange with your modules, like `conda/analysis3`) 
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

