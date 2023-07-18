---
hide:
  - navigation
---
# <div class="highlight-bg">Get Started</div>

If you are new to climate science or <a href="../models/">ACCESS models</a>, and you want to:

- Run your own experiment
- Get model outputs
- Evaluate model performance
- Perform other tasks involving ACCESS Models

You will need to follow these steps to get started with any of the tasks above.

## Create an NCI user account
Most of the data and models you will need are available at the <a href="https://nci.org.au/about-us/who-we-are" target="_blank">National Computing Infrastructure (NCI) </a>.
To be able to access them, you need an NCI account.
<br>
<a href="https://my.nci.org.au/mancini/signup/0" target="_blank">Sign up here</a> if you don't have one yet.
<div class="note">
  You will need an institutional email address with an organisation that allows access to NCI (e.g. an Australian university, ACCESS-NRI, CSIRO, CLEX, etc.).
  <br>
  If you don't think you possess an email address with such institution, please <a href="https://www.access-nri.org.au/contact/" target="_blank">get in contact</a>. 
</div>
Once you sign up, you will be assigned a <i>username</i> (e.g. `ab1234`). We will also refer to this <i>username</i> as `$USER`.

## Join relevant NCI projects
To join a project, search for it on <a href="https://my.nci.org.au/mancini/project-search" target="_blank">NCI website</a> and request membership.

Every project has an ID (e.g. `xp65`). This ID is what the term <i>project</i> actually refers to.
<br>
The first project that you join will become your default one. We will also refer to it as `$PROJECT`.
<br>
If you want to change your default project, please check <a href="#change-default-project">how to change your default project on gadi</a>.

There are several NCI projects that may be relevant to you, depending on the tasks you want to carry out.
<br>
Even though we recommend you have a chat with your supervisor to identify the relevant projects for your needs, the table below has a list of some of the most useful climate-related projects at NCI:

| Project | Description | Group | 
|:------- |:----------- |:----- |
| tm70 | <a href="https://my.nci.org.au/mancini/project/tm70" target="_blank">ACCESS-NRI Working Project</a> |ACCESS-NRI |
| iq82 | <a href="https://my.nci.org.au/mancini/project/iq82" target="_blank">ACCESS-NRI MED Compute</a> | ACCESS-NRI |
| kj13 | <a href="https://my.nci.org.au/mancini/project/kj13" target="_blank">ACCESS-NRI MED Data Dev</a> | ACCESS-NRI |
| ct11 | <a href="https://my.nci.org.au/mancini/project/ct11" target="_blank">ACCESS-NRI Replicated Datasets</a> | ACCESS-NRI |
| xp65 | <a href="https://my.nci.org.au/mancini/project/xp65" target="_blank">ACCESS-NRI Analysis Environments</a> | ACCESS-NRI |
| access | <a href="https://my.nci.org.au/mancini/project/access" target="_blank">ACCESS software sharing</a> | ACCESS |
| p66  | <a href="https://my.nci.org.au/mancini/project/p66"  target="_blank">ACCESS - AOGCM / suppport development of the ACCESS modelling system</a> | ACCESS |
| p73  | <a href="https://my.nci.org.au/mancini/project/p73"  target="_blank">ACCESS Model Output Archive (AOGCM)</a> | ACCESS |
| hh5  | <a href="https://my.nci.org.au/mancini/project/hh5"  target="_blank">Climate-LIEF Data Storage</a> | Data output|
| ub7  | <a href="https://my.nci.org.au/mancini/project/ub7"  target="_blank">Seasonal Prediction ACCESS-S1 Hindcast</a> | Data output|
| ux62 | <a href="https://my.nci.org.au/mancini/project/ux62" target="_blank">Seasonal Prediction ACCESS-S2 Hindcast</a> | Data output|
| cb20 | <a href="https://my.nci.org.au/mancini/project/cb20" target="_blank">ESGF CMIP3 Replication Data</a> | Data output|
| al33 | <a href="https://my.nci.org.au/mancini/project/al33" target="_blank">ESGF CMIP5 Replication Data</a> | Data output|
| rr3  | <a href="https://my.nci.org.au/mancini/project/rr3"  target="_blank">ESGF CMIP5 Australian Data Publication</a> | Data output|
| oi10 | <a href="https://my.nci.org.au/mancini/project/oi10" target="_blank">ESGF CMIP6 Replication Data</a> | Data output|
| fs38 | <a href="https://my.nci.org.au/mancini/project/fs38" target="_blank">ESGF CMIP6 Australian Data Publication</a> | Data output|
| rt52 | <a href="https://my.nci.org.au/mancini/project/rt52" target="_blank">ERA5 Replicated Data: Single and pressure-levels data</a> | Data output|
| uc16 | <a href="https://my.nci.org.au/mancini/project/uc16" target="_blank">ERA5 Replicated Datasets on Potential Temperature & Vorticity Levels</a> | Data output|
| zz93 | <a href="https://my.nci.org.au/mancini/project/zz93" target="_blank">ERA5-Land Replicated Data</a> | Data output|
| zv2  | <a href="https://my.nci.org.au/mancini/project/zv2"  target="_blank">Australian Gridded Climate Data (AGCD) Collection</a> | Data output|
| qv56 | <a href="https://my.nci.org.au/mancini/project/qv56" target="_blank">Reference Datasets for Climate Model Analysis/Forcing</a> | Data output|
| cj50 | <a href="https://my.nci.org.au/mancini/project/cj50" target="_blank">COSIMA Model Output Collection</a> | Data output|
| ik11 | <a href="https://my.nci.org.au/mancini/project/ik11" target="_blank">COSIMA shared working space</a> | Other projects |
| v45  | <a href="https://my.nci.org.au/mancini/project/v45"  target="_blank">Ocean Extremes</a> | Other projects |
| ga6  | <a href="https://my.nci.org.au/mancini/project/ga6"  target="_blank">Modelling the formation of sedimentary basins and continental margins</a> | Other projects |
| m18  | <a href="https://my.nci.org.au/mancini/project/m18"  target="_blank">Evolution and dynamics of the Australian lithosphere</a> | Other projects |
| q97  | <a href="https://my.nci.org.au/mancini/project/q97"  target="_blank">Earth dynamics and resources over the last billion years</a> | Other projects |
| qu79 | <a href="https://my.nci.org.au/mancini/project/qu79" target="_blank">Collaborative REAnalysis Technical Environment Intercomparison Project (CREATE-IP)</a> | Other projects |

## Log in to Gadi
Operations such as model runs and output data I/O take place on the <a href="https://nci.org.au/our-systems/hpc-systems" target="_blank">Gadi supercomputer</a>.

To log in to <i>Gadi</i> you need a few pre-requisites:
<ul>
  <li><b>Internet connection</b></li>
  <li>
    <b>UNIX-like terminal</b>
    <br>
    Operative Systems such as Linux or MacOS already have a built-in UNIX-like terminal.
    <br>
    Windows users can get a terminal simulator such as <a href="https://www.cygwin.com/install.html" target="_blank">Cygwin</a>, <a href="https://www.putty.org/" target="_blank">PuTTY</a>, or log in through <a href="https://are.nci.org.au/pun/sys/shell/ssh/gadi.nci.org.au" target="_blank">ARE's Gadi Terminal</a>.
    <div class="note">
      If you choose to log in through <i>ARE's Gadi Terminal</i>, you don't need to follow the next steps as you would already be connected to <i>Gadi</i>.
    </div>
  </li>
</ul>

### Creating an SSH key
To log in to <i>Gadi</i> we use <a href="https://en.wikipedia.org/wiki/Secure_Shell" target="_blank">SSH</a>.
The basic command is:
<pre><code>ssh &lt;NCI-username&gt;@gadi.nci.org.au</code></pre>
<terminal-animation>
  <terminal-line data="input">ssh &lt;NCI-username&gt;@gadi.nci.org.au</terminal-line>
  <terminal-line>&lt;NCI-username&gt;@gadi.nci.org.au's password: </terminal-line>
  <terminal-line lineDelay=3000>Gadi</terminal-line>
</terminal-animation>

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
