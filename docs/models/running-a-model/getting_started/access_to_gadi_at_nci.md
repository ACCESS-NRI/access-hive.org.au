---
hide:
  - toc
---

# <div class="highlight-bg"> Getting Started: Access To Gadi@NCI </div>

Here, we provide you the important information to give you access to the large data that we curate at NCI's storage:

1) [Get an NCI Account](#1-nci-account)  
2) [Join relevant NCI projects](#2-join-relevant-nci-projects)  
3) [Logging in to Gadi@NCI](#3-logging-in-to-gadinci)  
4) [Computing on Gadi](#4-computing-on-gadi)

## 1) NCI Account

To be able to work with our data, you need an NCI account.

If you don't have one yet, [signup here](https://my.nci.org.au/mancini/signup/0).

Note: You will need an institutional email address with an organisation that allows access to NCI (e.g., CSIRO, a university, etc.).

Once you have signed up, you will be allocated a username. We will refer to this username (e.g. `kf1234`) as `$USER`.

## 2) Join relevant NCI projects

There is a plethora of NCI projects that may or may not be relevant for you.

We recommend you have a chat with your supervisor to identify the relevant projects, but in any case suggest to join `xp65` for MED code as well as `kj13` for MED data.

To get this conversation started, we list some possibly relevant projects below:

| Project | Description with link, * indicated compute resource|
|------|---------------------------------------------------------------------------------------------------------------------------------|
| | *ACCESS-NRI projects* |
| tm70 | <a href="https://my.nci.org.au/mancini/project/tm70" target="_blank">ACCESS-NRI Working Project</a> * |
| iq82 | <a href="https://my.nci.org.au/mancini/project/iq82" target="_blank">ACCESS-NRI MED Compute</a> * |
| kj13 | <a href="https://my.nci.org.au/mancini/project/kj13" target="_blank">ACCESS-NRI MED Data Dev</a> |
| ct11 | <a href="https://my.nci.org.au/mancini/project/ct11" target="_blank">ACCESS-NRI Replicated Datasets</a> |
| xp65 | <a href="https://my.nci.org.au/mancini/project/xp65" target="_blank">ACCESS-NRI Analysis Environments</a> |
| | *ACCESS projects* |
| access | <a href="https://my.nci.org.au/mancini/project/access" target="_blank">ACCESS software sharing</a> |
| p66  | <a href="https://my.nci.org.au/mancini/project/p66"  target="_blank">ACCESS - AOGCM / suppport development of the ACCESS modelling system</a> * |
| p73  | <a href="https://my.nci.org.au/mancini/project/p73"  target="_blank">ACCESS Model Output Archive (AOGCM)</a> |
| | *Data projects* |
| hh5  | <a href="https://my.nci.org.au/mancini/project/hh5"  target="_blank">Climate-LIEF Data Storage</a> |
| ub7  | <a href="https://my.nci.org.au/mancini/project/ub7"  target="_blank">Seasonal Prediction ACCESS-S1 Hindcast</a> |
| ux62 | <a href="https://my.nci.org.au/mancini/project/ux62" target="_blank">Seasonal Prediction ACCESS-S2 Hindcast</a> |
| cb20 | <a href="https://my.nci.org.au/mancini/project/cb20" target="_blank">ESGF CMIP3 Replication Data</a> |
| al33 | <a href="https://my.nci.org.au/mancini/project/al33" target="_blank">ESGF CMIP5 Replication Data</a> |
| rr3  | <a href="https://my.nci.org.au/mancini/project/rr3"  target="_blank">ESGF CMIP5 Australian Data Publication</a> |
| oi10 | <a href="https://my.nci.org.au/mancini/project/oi10" target="_blank">ESGF CMIP6 Replication Data</a> |
| fs38 | <a href="https://my.nci.org.au/mancini/project/fs38" target="_blank">ESGF CMIP6 Australian Data Publication</a> |
| rt52 | <a href="https://my.nci.org.au/mancini/project/rt52" target="_blank">ERA5 Replicated Data: Single and pressure-levels data</a> |
| uc16 | <a href="https://my.nci.org.au/mancini/project/uc16" target="_blank">ERA5 Replicated Datasets on Potential Temperature & Vorticity Levels</a> |
| zz93 | <a href="https://my.nci.org.au/mancini/project/zz93" target="_blank">ERA5-Land Replicated Data</a> |
| zv2  | <a href="https://my.nci.org.au/mancini/project/zv2"  target="_blank">Australian Gridded Climate Data (AGCD) Collection</a> |
| qv56 | <a href="https://my.nci.org.au/mancini/project/qv56" target="_blank">Reference Datasets for Climate Model Analysis/Forcing</a> |
| cj50 | <a href="https://my.nci.org.au/mancini/project/cj50" target="_blank">COSIMA Model Output Collection</a> |
| | *Other projects* |
| ik11 | <a href="https://my.nci.org.au/mancini/project/ik11" target="_blank">COSIMA shared working space</a> |
| v45  | <a href="https://my.nci.org.au/mancini/project/v45"  target="_blank">Ocean Extremes</a> * |
| ga6  | <a href="https://my.nci.org.au/mancini/project/ga6"  target="_blank">Modelling the formation of sedimentary basins and continental margins</a> * |
| m18  | <a href="https://my.nci.org.au/mancini/project/m18"  target="_blank">Evolution and dynamics of the Australian lithosphere</a> * |
| q97  | <a href="https://my.nci.org.au/mancini/project/q97"  target="_blank">Earth dynamics and resources over the last billion years</a> * |
| qu79 | <a href="https://my.nci.org.au/mancini/project/qu79" target="_blank">Collaborative REAnalysis Technical Environment Intercomparison Project (CREATE-IP)</a> |

To join a project or find more projects, please use this [NCI website](https://my.nci.org.au/mancini/project-search).

The first project that you join will become your default login project, e.g. `xp65`. We will refer to it as `$PROJECT` and we show you how to change it below.

## 3) Logging in to Gadi@NCI

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

The `-Y` option is needed to run graphical tools by enabling the forwarding of trusted X protocol mesgs between X-Server on local system and X programs on Gadi. 
You need to enable X Windowing system on your local system before running ssh. This can be done by running X-Server like XQuartz (Mac), MobaXterm (MS Windows), startx or similar (Linux).

Again, for more useful information we recommend to check out NCI's [Welcome to Gadi website](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi).

## 4) Computing on Gadi

### Gadi Resources
Coupled climate models like ACCESS-CM involve, among other things, calculation of complex mathematical equations that explain the physics of the atmosphere and oceans. Performed at hundreds of millions of points around the Earth, these calculations require vast computing power to complete them in a reasonable amount of time, thus relying on the power of  high-performance computing (HPC) like Gadi. The [Gadi supercomputer](https://nci.org.au/our-systems/hpc-systems) can handle more than 10 million billion (10 quadrillion) calculations per second and is connected to 100,000 Terabytes of high-performance research data storage.

An overview of [Gadi resources](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-GadiResources) such as compute, storage and PBS jobs are described below. 

Useful NCI commands to check your available compute resources are:

| Command                |   Purpose                  |
| ---------------------- | -------------              |
| `logout` or ++ctrl+"D"++ | To exit a session          |
| `hostname`             | Displays login node details|
| `module list`          | Modules currently loaded   |
| `module avail`         | Available modules          |
| `nci_account -P [proj]`| Compute allocation for [proj]|
| `nqstat -P [proj]`     | Jobs running/queued in [proj]|
| `lquota`               | Storage allocation and usage for all your projects|

#### Compute Hours
Compute allocations are granted to projects instead of directly to users and, hence, you need to be a member of a project in order to use its compute allocation. To run jobs on Gadi, you need to have sufficient allocated [compute hours](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-ComputeHours) available, where the [job cost](https://opus.nci.org.au/display/Help/2.+Compute+Grant+and+Job+Debiting) depends on the resources reserved for the job and the amount of walltime it uses. 

#### Storage 
Each user has a project-independent [`$HOME`](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-TheHomeFolder$HOME) directory, which has a storage limit of 10 GiB. All data on `/home` is backed up.

Through project membership, the user gets access to the storage space within the
[project folders](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-ProjectFolderonLustreFilesystems/scratchand/g/data) `/scratch` and  `/g/data` filesystems for that particular project.

#### PBS Jobs
To run compute tasks such as an ACCESS-CM suite on Gadi, users need to submit them as *jobs* to *queues*. Within a [job submission](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-JobSubmission), you can specify the queue, duration and computational resources needed for your job. When a job submission is accepted, it is assigned a jobID (shown in the return message) that can then be used to monitor the job’s [status](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-QueueStatus). 

On job completion, contents of the job’s standard output/error stream gets copied to a file in the working directory with the respective format: `<jobname>.o<jobid>` and `<jobname>.e<jobid>`. Users should check these two log files before proceeding with post-processing of any output from their corresponding job.
