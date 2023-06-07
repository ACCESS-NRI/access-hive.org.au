# <div class="highlight-bg"> Getting Started to Run a Model </div>

Welcome to the getting started guide to run a model!

Here, we provide you the important information to give you access to the large data that we curate at NCI's storage and show you how you can use it to figure out how fit for purpose specific models are, in particular when you compare them to osbervational data:

1) [Get an NCI Account](#1-nci-account)  
2) [Join relevant NCI projects](#2-join-relevant-nci-projects)  
3) [Join `accessdev`](#3-join-accessdev)  
4) [Accessing gadi@NCI](#4-accessing-gadinci)  

## 1) NCI Account

To be able to work with our data, you need an NCI account.

If you don't have one yet, [signup here](https://my.nci.org.au/mancini/signup/0).

Note: You will need an institutional email address with an organisation that allows access to NCI (e.g., CSIRO, a university, etc.).

Once you have signed up, you will be allocated a username. We will refer to this username (e.g. `kf1234`) as `$USER`.

## 2) Join relevant NCI projects

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

## 3) Join `accessdev`

[Connect to accessdev](https://accessdev.nci.org.au/trac/wiki/GettingConnected) to complete your setup once you have your NCI credentials and are a member of the ACCESS group. 
*Note:* At present, both accessdev and [ARE](https://opus.nci.org.au/display/Help/ARE+User+Guide) run the models on Gadi. However, ARE only supports shorter-running suites (i.e., runs less than 48 hours). Work is currently in progress to fully transition the cylc workflows from accessdev virtual machine to the ARE.

Additional steps relating to the [communication between accessdev and Gadi](https://accessdev.nci.org.au/trac/wiki/gadi) may also be necessary.

## 4) Accessing gadi@NCI

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