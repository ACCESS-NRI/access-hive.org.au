# Getting Started with Model Evaluation at NCI

Welcome to Model Evaluation and Diagnostics!

Here, we provide you the important information to give you access to the large data that we curate at NCI's storage and show you how you can use it to figure out how fit for purpose specific models are, in particular when you compare them to osbervational data:

1) [Getting Access to NCI and relevant NCI projects](#1-getting-access-to-nci-and-relevant-nci-projects)  
2) [Setting up environments at gadi@NCI to load and evaluate observational and model data](#2-setting-up-your-environments-at-gadinci)

## 1) Getting Access to NCI and relevant NCI projects

### 1.1) NCI Account

To be able to work with our data, you need an NCI account.

If you don't have one yet, [signup here](https://my.nci.org.au/mancini/signup/0).

Note: You will need an institutional email address with an organisation that allows access to NCI (e.g., CSIRO, a university, etc.).

Once you have signed up, you will be allocated a username. We will refer to this username (e.g. `kf1234`) as `$USER`.

### 1.2) Join relevant NCI projects

There is a plethora of NCI projects that may or may not be relevant for you.

We recommend you have a chat with your supervisor to identify the relevant projects, but in any case suggest to join `xp65` for MED code as well as `kj13` for MED data.

To get this conversation started, we list some possibly relevant projects below:

| Project | Project Description |
|-----------|---------------------------|
| al33 | ESGF CMIP5 Replication Data |
| cb20 | ESGF CMIP3 Replication Data |
| cj50 | COSIMA Model Output Collection |
| ct11 | ACCESS-NRI Replicated Datasets |
| fs38 | ESGF CMIP6 Australian Data Publication |
| ga6 | Modelling the formation of sedimentary basins and continental margins |
| hh5 | Climate-LIEF Data Storage |
| ik11 | COSIMA shared working space |
| iq82 | ACCESS-NRI MED Compute |
| kj13 | ACCSS-NRI MED Data Dev |
| m18 | Evolution and dynamics of the Australian lithosphere |
| nf33 | ACCESS Modelling Workshop - AMOS 2022 |
| oi10 | ESGF CMIP6 Replication Data |
| p66 | ACCESS - AOGCM |
| p73 | ACCESS Model Output Archive (AOGCM) |
| q97 | Earth dynamics and resources over the last billion years |
| qu79 | Collaborative REAnalysis Technical Environment Intercomparison Project (CREATE-IP) |
| qv56 | Reference Datasets for Climate Model Analysis/Forcing |
| rr3 | ESGF CMIP5 Australian Data Publication |
| rt52 | ERA5 Replicated Data: Single and pressure-levels data |
| tm70 | ACCESS-NRI Working Project |
| ub7 | Seasonal Prediction ACCESS-S1 hindcast  |
| uc16 | ERA5 Replicated Datasets on Potential Temperature and Potential Vorticity Levels |
| ux62 | Seasonal Prediction ACCESS-S2 Hindcast (1981-2018) and Supporting Data Assimilation and Initial Conditions |
| v45 | Ocean Extremes |
| xp65 | CESS MED Analysis Environments |
| zv2 | Australian Gridded Climate Data (AGCD) Collection |
| zz93 | ERA5-Land Replicated Data |

To join a project or find more projects, please use this [NCI website](https://my.nci.org.au/mancini/project-search).

The first project that you join will become your default login project, e.g. `xp65`. We will refer to it as `$PROJECT` and we show you how to change it below.

### 1.3) Accessing gadi@NCI

If you have never logged onto Gadi before, we recommend to take a look at NCI's [Welcome to Gadi website](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi).
It provides all the important commands and information for logging properly onto Gadi, like the following:
"To run jobs on Gadi, you need to first log in to the system. Users on Mac/Linux can use the built-in terminal. For Windows users, we recommend using [MobaXterm](https://mobaxterm.mobatek.net/) as the local terminal. Logging in to Gadi happens through a Gadi login node."

When you login, via the command
```
ssh -Y $USER@gadi.nci.org.au
```
you will enter your $HOME directory with your default `$PROJECT` and your default SHELL. Both are saved at `$HOME/.config/gadi-login.conf` and you can print them via
```
cat $HOME/.config/gadi-login.conf
```

Again, for more useful information we recommend to check out NCI's [Welcome to Gadi website](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi).

## 2) Setting up your environments at gadi@NCI

Now that you have succesfully logged on to gadi@NCI, here we describe the absolute basic information to find observational and model data as well as the code to evaluate the data.

Note: You do not automatically have access to all of Gadi's storage at `/g/data/`, but need to be part of a `$PROJECT` to see files at `/g/data/$PROJECT`. Furthermore, if you use Gadi's job submission system PBS (Portable Batch System), you need to add the relevant storage to the `#PBS -l storage=gdata/xp65+gdata/kj13` (if you want the job to have access to `xp65` and `kj13` in this example).

### 2.1) `access-med`: Our currated `conda` environment for you on Gadi

To avoid running multiple (different) versions of code on Gadi, we provide you with a `conda` environment called `access-med` that we actually curate for you (version 0.1 is from June 2023).

In order to change to this environment, please execute the following commands after loggin onto Gadi (and as part of your PBS scripts):
```
$ module use /g/data/xp65/public/modules
$ module load conda/access-med-0.1
```

If you are planning to run your code through JupyterLab on [NCI's ARE](https://are.nci.org.au), you need to use `/g/data/xp65/public/modules` as **Module directories** and `conda/are` as **Modules** when launching a JupyterLab session.

You are now able to use the scripts of our currated environment, including `python3`, `intake`, `jupyter`, `esmvaltool`, or `ilamb`. The complete list of dependencies can be found in our dedicated [GitHub repository](https://github.com/ACCESS-NRI/MED-condaenv/blob/main/scripts/environment.yml).

### 2.2) Observational Data

We provide an extensive collection of observational data on Gadi@NCI within the `/g/data/kj13/datasets` directory. 

Please take a look at our [Observational Data Catalog](./model_evaluation_observational_catalogs.md) for an overview.

### 2.3) Model Data

There are many models and data stored on Gadi, as you can imagine from the plethora of projects in [Section 1.2](#12-join-relevant-nci-projects). Downloading this data is hardly practical, so we suggest to work on Gadi instead.

To avoid endless searches within Gadi's storage, we written a useful 'library' tool, called `access-nri-catalog`, that allows to search the Model Catalogs easily and is already loaded as part of our `access-med` `conda` environment. To find out how you can search for Model Data on Gadi, take a look at our [Model Catalog](./model_evaluation_model_catalogs/model_evaluation_search_models.md).

### 2.5) Model Evaluation

Now that you have both [Observational Data](#22-observational-data) and [Model Data](#23-model-data) at the palm of your hand on Gadi@NCI, there are many ways to evaluate this data.

As part of our ACCESS-NRI `conda` environment, we provide several Model Evaluation Tools, like `ilamb` or `esmvaltool`.

Check out [Model Evaluation at Gadi](./model_evaluation_on_gadi/index.md) to find out how you can use them on Gadi.