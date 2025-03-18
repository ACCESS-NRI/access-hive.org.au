{% set model = "ACCESS-rAM3" %}
{% set ras_id = "u-dg767" %}
{% set rns_id = "u-dg768" %}
{% set mosrs_config_ras = "https://code.metoffice.gov.uk/trac/roses-u/browser/d/g/7/6/7/trunk" %}
{% set mosrs_config_rns = "https://code.metoffice.gov.uk/trac/roses-u/browser/d/g/7/6/8/trunk" %}
{% set release_notes = "https://forum.access-hive.org.au/t/access-ram3-release-information/4308" %}
[PBS job]: https://opus.nci.org.au/display/Help/4.+PBS+Jobs
[model components]: /models/configurations/access-ram/#model-components
[model configurations]: /models/configurations/access-ram
[gadi]: https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview

[:notepad_spiral:{: class="twemoji icon-before-text"} {{ model }} release notes]({{release_notes}}){: class="text-card"}
[![Met Office](/assets/met_office_logo.png){: class="icon-before-text  white-background"} RAS configuration]({{mosrs_config_ras}}){: class="text-card" style=""}
[![Met Office](/assets/met_office_logo.png){: class="icon-before-text  white-background"} RNS configuration]({{mosrs_config_rns}}){: class="text-card"}

# Run {{ model }}

## About

{{ model }} is an ACCESS-NRI-supported configuration of the [UK Met Office (UKMO)](https://www.metoffice.gov.uk/) regional nesting suite for high-resolution regional atmosphere modelling.<br>
A description of the model and its components is available in the [{{ model }} overview][model configurations].

{{ model }} comprises two suites: a [Regional Ancillary Suite (RAS)](#ras), which generates ancillary files (input files; e.g.: initial conditions, lateral boundary conditions, forcing conditions, etc.) for the domain of interest, and a [Regional Nesting Suite (RNS)](#rns) which runs the regional forecast.

The instructions below outline how to run {{ model }} using ACCESS-NRI's supported configuration, specifically designed to run on the [National Computating Infrastructure (NCI)](https://nci.org.au/about-us/who-we-are) supercomputer [_Gadi_][gadi].

If you are unsure whether {{ model }} is the right choice for your experiment, take a look at the overview of [ACCESS Models](/models).

All {{model}} configurations are open source, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1")![CC icon](https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1){: style="height:1em;margin-left:0.2em;vertical-align:text-top;"}![BY icon](https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1){: style="height:1em;margin-left:0.2em;vertical-align:text-top;"} and available on [ACCESS-NRI GitHub]({{github_configs}}).

[{{ model }} release notes]({{release_notes}}) are available on the ACCESS-Hive Forum and are updated when new releases are made available.

## Prerequisites

- **NCI Account**<br> 
    Before running {{ model }}, you need to [Set Up your NCI Account](/getting_started/set_up_nci_account).

- **_MOSRS_ account**<br>
    The [Met Office Science Repository Service (MOSRS)](https://code.metoffice.gov.uk) is a server run by the UK Met Office (UKMO) to support collaborative development with other partners organisations. MOSRS contains the source code and configurations for some model components in {{ model }} (e.g., the [UM](/models/model_components/atmosphere/#unified-model-um)).<br>
    To apply for a _MOSRS_ account, please contact your [local institutional sponsor](https://opus.nci.org.au/display/DAE/Prerequisites).
    {: id='mosrs-account'}

- **Join NCI projects**<br>
    Join the following projects by requesting membership on their respective NCI project pages:

    - [access](https://my.nci.org.au/mancini/project/access/join)
    - [hr22](https://my.nci.org.au/mancini/project/hr22/join)
    - [ki32](https://my.nci.org.au/mancini/project/ki32/join)
    - [ki32_mosrs](https://my.nci.org.au/mancini/project/ki32_mosrs/join)
    - [rt52](https://my.nci.org.au/mancini/project/rt52/join)
    - [zz93](https://my.nci.org.au/mancini/project/zz93/join)
    - [vk83](https://my.nci.org.au/mancini/project/vk83/join)

    !!! tip
        To request membership for the _ki32_mosrs_ subproject, you need to:
        
        - already be member of the _ki32_ project
        {: style="list-style-type: disc"}
        - have a [MOSRS account](#mosrs-account)
        {: style="list-style-type: disc"}

    For more information on joining specific NCI projects, refer to [How to connect to a project](https://opus.nci.org.au/display/Help/How+to+connect+to+a+project).

- **Connection to an ARE VDI Desktop (optional)**<br>
    To run {{ model }}, start an [Australian Research Environment (ARE) VDI Desktop](https://are.nci.org.au/pun/sys/dashboard/batch_connect/sys/desktop_vnc/ncigadi/session_contexts/new) session.<br>
    If you are not familiar with ARE, check out the [Getting Started on ARE](/getting_started/are) section.

!!! warning
    Please note that the waiting time for some of the prerequisites mentioned above could take 2-3 weeks.

## Quick Start guide

The following *Quick Start* guide is aimed at experienced users wanting to run {{ model }}. For more detailed instructions, please refer to the [Detailed guide](#detailed-guide).

### Required setup for running {{ model }} {: .no-toc }

- **Start a new [_persistent session_](https://opus.nci.org.au/display/Help/Persistent+Sessions)**<br> 
    using a *Gadi* login node or an ARE terminal instance:
    ```
    persistent-sessions start <name>
    ```
    This will use your default project.

    For further instructions on starting a _persistent session_, refer to the [detailed guide](#start-a-new-persistent-session).

- **Assign the _persistent session_ to Rose/Cylc workflows**<br>
    Run the following command:
    ```
    echo "<name>.${USER}.<project>.ps.gadi.nci.org.au" > ~/.persistent-sessions/cylc-session
    ```
    substituting `<name>` with the name given to your _persistent session_, and `<project>` with the project assigned to it.

    !!! tip
        This step should only be done once

    For further instructions on assigning the target _persistent session_, refer to the [detailed guide](#specify-target-persistent-session).

- **Rose/Cylc setup**<br>
    To get the required _Rose/Cylc_ setup, run:
    ```
    module use /g/data/hr22/modulefiles
    module load cylc7
    ```

    For further instructions on getting the _Rose/Cylc_ setup, refer to the [detailed guide](#rosecylcmosrs-setup).

- **MOSRS authentication**<br>
    Authenticate using your MOSRS credentials:
    ```
    mosrs-auth
    ```

    For further instructions on MOSRS authentication, refer to the [detailed guide](#mosrs-authentication).

### Regional Ancillary Suite (RAS) {: .no-toc }
1. **Copy the RAS from UKMO**<br>
    ```
    rosie checkout {{ ras_id }}
    ```

    For further instructions on getting the RAS configuration, refer to the [detailed guide](#get-the-ras-configuration).

2. **Run the RAS**<br>
    From within the RAS directory:
    ```
    rose suite-run
    ```

    For further instructions on running the RAS configuration, refer to the [detailed guide](#run-the-suite).

### Regional Nesting Suite (RNS) {: .no-toc }
1. **Copy the RNS from UKMO**<br>
    ```
    rosie checkout {{ rns_id }}
    ```

    For further instructions on getting the RNS configuration, refer to the [detailed guide](#get-and-run-rns-configuration).

2. **Run the RNS**<br>
    From within the RNS directory:
    ```
    rose suite-run
    ```

    For further instructions on getting the RNS configuration, refer to the [detailed guide](#get-and-run-rns-configuration).

---

## Detailed guide

### Set up an ARE VDI Desktop (optional)
!!! info 
    If you want to skip this step and run {{ model }} from _Gadi_ login node instead, refer directly to the instructions on how to [Set up _persistent session_](#set-up-persistent-session).

#### Launch ARE VDI Session  {: .no-toc }
Go to the [ARE VDI](https://are.nci.org.au/pun/sys/dashboard/batch_connect/sys/desktop_vnc/ncigadi/session_contexts/new) page and launch a session with the following entries:

- **Walltime (hours)** &rarr; `2`<br>
    This is the amount of time the ARE VDI session will stay active for.<br>
    {{ model }} does not run directly on ARE.<br>
    This means that the ARE VDI session only needs to carry out setup steps as well as starting the run itself. All these tasks can be done within 2 hours.
    
- **Queue** &rarr; `normalbw`
    
- **Compute Size** &rarr; `tiny` (1 CPU)<br>
    As mentioned above, the ARE VDI session is only needed for setup and startup tasks, which can be easily accomplished with 1 CPU.

- **Project** &rarr; a project of which you are a member.<br>
    The project must have allocated _Service Units (SU)_ to run your simulation. Usually, but not always, this corresponds to your `$PROJECT`.<br>
    For more information, refer to [Join relevant NCI projects](/getting_started/set_up_nci_account#join-relevant-nci-projects).

- **Storage** &rarr; `gdata/access+gdata/hr22+gdata/ki32+gdata/rt52+gdata/zz93+gdata/vk83` (minimum)<br>
    This is a list of all project data storage, joined by plus (`+`) signs, needed for the {{ model }} simulation. In ARE, storage locations need to be explicitly defined to access data from within a VDI instance.<br>
    Every {{ model }} simulation can be unique and input data can originate from various sources. Hence, if your simulation requires data stored in project folders other than the ones listed in the minimum storage above, you need to add those projects to the storage path.<br>
    For example, if your {{ model }} simulation requires data stored in `/g/data/gx60` and `/scratch/gx60`, the following should be added to the minimum storage above: `+gdata/gx60+scratch/gx60`
    
Launch the ARE session and, once it starts, click on _Launch VDI Desktop_.

![Launch ARE VDI session example](/assets/run_access_cm/launch_are_vdi.gif){: class="example-img" loading="lazy"}

#### Open the terminal in the VDI Desktop {: .no-toc }
Once the new tab opens, you will see a Desktop with a few folders on the left.<br>
To open the terminal, click on the black terminal icon at the top of the window. You should now be connected to a _Gadi_ computing node.

![Open ARE VDI terminal example](/assets/run_access_cm/open_are_vdi_terminal.gif){: class="example-img" loading="lazy"}

### Set up _persistent session_ 
To support the use of long-running processes, such as ACCESS model runs, NCI provides a service on _Gadi_ called [_persistent sessions_](https://opus.nci.org.au/display/Help/Persistent+Sessions).

To run {{ model }}, you need to start a _persistent session_ and set it as the target session for the model run.

#### Start a new _persistent session_ {: .no-toc }
To start a new _persistent session_ on _Gadi_, using either a login node or an ARE terminal instance, run the following command:
```
persistent-sessions start <name>
```

This will start a _persistent session_ with the given `name` that runs under your [default project](/getting_started/set_up_nci_account#change-default-project-on-gadi).<br>
If you want to assign a different project to the _persistent session_, use the option `-p`:
```
persistent-sessions start -p <project> <name>
```

!!! tip
    While the project assigned to a _persistent session_ does not have to be the same as the project used to run the {{ model }} configuration, it does need to have allocated _Service Units (SU)_.<br>
    For more information, check how to [Join relevant NCI projects](/getting_started/set_up_nci_account#join-relevant-nci-projects).

<terminal-window data="input">
    <terminal-line>persistent-sessions start &lt;name&gt;</terminal-line>
    <terminal-line data="output">session &lt;persistent-session-uuid&gt; running - connect using</terminal-line>
    <terminal-line data="output">&emsp;ssh &lt;name&gt;.&lt;$USER&gt;.&lt;project&gt;.ps.gadi.nci.org.au</terminal-line>
</terminal-window>

To list all active _persistent sessions_ run:
```
persistent-sessions list
```

<terminal-window data="input">
    <terminal-line>persistent-sessions list</terminal-line>
    <terminal-line data="output">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;UUID&emsp;&emsp;PROJECT&emsp;&ensp;&ensp;ADDRESS&emsp;&emsp;&emsp;&emsp;CPUTIME&emsp;MEMORY</terminal-line>
    <terminal-line data="output">&lt;persistent-session-uuid&gt;&emsp;&lt;project&gt;&emsp;10.9.0.62&emsp;00:00:05.213&emsp;30.5M</terminal-line>
</terminal-window>


The label of a newly-created _persistent session_ has the following format: <br>
`<name>.<$USER>.<project>.ps.gadi.nci.org.au`.

#### Specify target _persistent session_ {: .no-toc }

After starting the _persistent session_, it is essential to assign it to the {{ model }} run.<br>
The easiest way to create a file `~/.persistent-sessions/cylc-session` that contains the target of the _persistent session_.<br>
You can do it manually, or by running the following command (by substituting `<name>` with the name given to the _persistent session_, and `<project>` with the project assigned to it):

```
echo "<name>.${USER}.<project>.ps.gadi.nci.org.au" > ~/.persistent-sessions/cylc-session
```

For example, if the user `abc123` started a _persistent session_ named `cylc` under the project `xy00`, the command will be:

<terminal-window data="input">
    <terminal-line>echo "cylc.abc123.xy00.ps.gadi.nci.org.au" > ~/.persistent-sessions/cylc-session
    </terminal-line>
    <terminal-line data="input" linedelay="1000">cat ~/.persistent-sessions/cylc-session</terminal-line>
    <terminal-line data="output">cylc.abc123.xy00.ps.gadi.nci.org.au</terminal-line>
</terminal-window>

For more information on how to specify the target session, refer to [Specify Target Session with Cylc7 Suites](https://opus.nci.org.au/display/DAE/Run+Cylc7+Suites#RunCylc7Suites-SpecifyTargetSession).

!!! tip
    You can simultaneously submit multiple {{ model }} runs using the same _persistent session_ without needing to start a new one. Hence, the process of specifying the target _persistent session_ for {{ model }} should only be done once. Then, to run {{ model }}, you just need to ensure that you have an active _persistent session_ named like the target one you specified above. If the _persistent session_ is not active, simply [start one](#start-a-new-persistent-session).

#### Terminate a _persistent session_ {: .no-toc }
!!! tip
    Logging out of a *Gadi* login node or an ARE terminal instance will not affect your _persistent session_. 

To stop a _persistent session_, run:
```
persistent-sessions kill <persistent-session-uuid>
```
!!! warning
    When you terminate a _persistent session_, any model running on that session will stop. Therefore, you should check whether you have any active model runs before terminating a _persistent session_.

### Rose/Cylc/MOSRS setup

To run {{ model }}, access to multiple software and MOSRS authentication is needed.

#### Cylc setup {: id="cylc" .no-toc }

[_Cylc_](https://cylc.github.io/cylc-doc/7.8.8/html/index.html) (pronounced ‘silk’) is a workflow manager that automatically executes tasks according to the model's main cycle script `suite.rc`. _Cylc_ controls how the job will be run and manages the time steps of each model component. It also monitors all tasks, reporting any errors that may occur.

To get the _Cylc_ setup required to run {{ model }}, execute the following commands:
```
module use /g/data/hr22/modulefiles
module load cylc7
```
<terminal-window data="input">
    <terminal-line>module use /g/data/hr22/modulefiles</terminal-line>
    <terminal-line>module load cylc7</terminal-line>
    <terminal-line data="output">Using the cylc session &lt;name&gt;.&lt;$USER&gt;.&lt;project&gt;.ps.gadi.nci.org.au</terminal-line>
    <terminal-line data="output"></terminal-line>
    <terminal-line data="output">Loading cylc7/24.03</terminal-line>
    <terminal-line data="output">&emsp;Loading requirement: mosrs-setup/2.0.1</terminal-line>
</terminal-window>

!!! warning
    _Cylc_ version >= `cylc7/24.03` required.<br>
    
    Also, before loading the _Cylc_ module, make sure to have started a _persistent session_ and have assigned it to the {{ model }} workflow. For more information about these steps, refer to [Set up _persistent session_](#set-up-persistent-session).

#### Rose setup {: id="rose" .no-toc }
[Rose](http://metomi.github.io/rose/doc/html/index.html) is a toolkit that can be used to view, edit, or run an ACCESS modelling suite.

By completing the [_Cylc_ setup](#cylc), also _Rose_ will be automatically available. Therefore, there is no additional step required.

#### MOSRS authentication {: .no-toc }
To authenticate using your _MOSRS_ credentials, run:
```
mosrs-auth
```
<terminal-window>
    <terminal-line data="input">mosrs-auth</terminal-line>
    <terminal-line lineDelay=500><span style="color: #559cd5;">INFO</span>: You need to enter your MOSRS credentials here so that GPG can cache your password.</terminal-line>
    <terminal-line>Please enter the MOSRS password for &lt;MOSRS-username&gt;:</terminal-line>
    <terminal-line lineDelay=1500>Checking your credentials using Subversion. Please wait.</terminal-line>
    <terminal-line lineDelay=500><span style="color: #559cd5;">INFO</span>: Successfully accessed Subversion with your credentials.</terminal-line>
    <terminal-line lineDelay=100><span style="color: #559cd5;">INFO</span>: Checking your credentials using rosie. Please wait.</terminal-line>
    <terminal-line lineDelay=500><span style="color: #559cd5;">INFO</span>: Successfully accessed rosie with your credentials.</terminal-line>
</terminal-window>

!!! warning
    This step needs to be done once for each new session (e.g.: _Gadi_ login, _ARE_ terminal window)

### {{ model }} configuration
{{ model }} is comprised of 2 different suites: a [Regional Ancillary Suite (RAS)](#ras) and a [Regional Nesting Suite (RNS)](#rns).

Each {{ model }} suite has a `suite-ID` in the format `u-<suite-name>`, where `<suite-name>` is a unique identifier.<br>
Typically, an existing suite is copied and then edited as needed for a particular run.

For more information on {{ model }}, refer to the [{{model}} configuration][model configurations] page.

!!! info 
    Many of the steps that follow are to be repeated almost identically for the RAS and RNS. For this reason, details on these steps will be provided only within the RAS section below, whereas in the following RNS section they will only be linked for reference.

### Regional Ancillary Suite (RAS) {: id="ras"}

The RAS produces a set of input (ancillary) files, which are then used by the RNS.

The `suite-ID` of the RAS is `{{ ras_id }}`.
<!--
TODO
{: style="color:red"}
<!-- Add short description of what the RAS does -->

#### Get the RAS configuration
[Rosie](http://metomi.github.io/rose/doc/html/tutorial/rose/rosie.html) is an [SVN](https://subversion.apache.org) repository wrapper with a set of options specific for ACCESS modelling suites. It is automatically available within the [_Rose_ setup](#rose).

The RAS configuration can be obtained as a copy of the MOSRS one, following 2 approaches:

- [Local-only copy](#local-copy)
- [Remote and local copy](#remote-copy)

Suites are, by default, created in the user's home directory on _Gadi_ under `~/roses/<suite-ID>`.
This path will be referred to as the *suite directory*.
{: id="suitedir" }

The suite directory contains multiple subdirectories and files, including:

- `app` &rarr; directory containing the configuration files for various tasks within the suite.
- `meta` &rarr; directory containing the GUI metadata.
- `rose-suite.conf` &rarr; main suite configuration file.
- `rose-suite.info` &rarr; suite information file.
- `suite.rc` &rarr; _Cylc_ control script file (Jinja2 language).

##### Local-only copy {: id="local-copy" .no-toc }
To create a _local copy_ of the RAS from the UKMO repository, run:
```
rosie checkout {{ ras_id }}
```
<terminal-window>
    <terminal-line data="input">rosie checkout {{ ras_id }}</terminal-line>
    <terminal-line>[INFO] create: /home/565/&lt;$USER&gt;/roses</terminal-line>
    <terminal-line>[INFO] &lt;suite-ID&gt;: local copy created at /home/565/&lt;$USER&gt;/roses/{{ ras_id }}</terminal-line>
</terminal-window>
This option is mostly used for testing and examining existing suites.
    
##### Remote and local copy {: id="remote-copy" .no-toc }
To create a new copy of the RAS both _locally_ and _remotely_ in the UKMO repository, run: 
```
rosie copy {{ ras_id }}
```
<terminal-window>
    <terminal-line data="input">rosie copy {{ ras_id }}</terminal-line>
    <terminal-line>Copy "{{ ras_id }}/trunk@&lt;trunk-ID&gt;" to "u-?????"? [y or n (default)]</terminal-line> <terminal-line data="input">y</terminal-line>
    <terminal-line>[INFO] &lt;new-suite-ID&gt;: created at https://code.metoffice.gov.uk/svn/roses-u/&lt;suite-n/a/m/e/&gt;</terminal-line>
    <terminal-line>[INFO] &lt;new-suite-ID&gt;: copied items from {{ ras_id }}/trunk@&lt;trunk-ID&gt;</terminal-line>
    <terminal-line>[INFO] {{ ras_id }}: local copy created at /home/565/&lt;$USER&gt;/roses/&lt;new-suite-ID&gt;</terminal-line>
</terminal-window>
When a new suite is created in this way, a _unique_ `<suite-ID>` is generated within the repository and populated with descriptive information about the suite and its initial configuration.

For additional `rosie` options, run:
```
rosie help
```

#### Run the suite
{{ model }} suites run on [_Gadi_](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview) through a [PBS job] submission.<br>
When a suite runs, its configuration files are copied on _Gadi_ inside `/scratch/$PROJECT/$USER/cylc-run/<suite-ID>` and a symbolic link to this directory is also created in the `$USER`'s home directory under `~/cylc-run/<suite-ID>`.<br>
{{ model }} suites comprise several tasks, such as checking out code repositories, compiling and building the different model components, running the model, etc. The workflow of these tasks is controlled by [_Cylc_](#cylc).

To run the RAS, execute the following command from within the [suite directory](#suitedir):
```
rose suite-run
```

After the initial tasks are executed, the _Cylc_ GUI will open. You can now view and control the different tasks in the suite as they are run. <!--<img src="/assets/run&UnderBar;access_cm/Cylc_GUI_are.png" alt="Cylc GUI" imageTime="inf" loading="lazy"> -->
<!--
TODO
{: style="color:red"}
<!-- Replace image with RAS one -->

You are done!

If you do not get any errors, you can check the suite output files after the run is complete.<br>
You can now close the _Cylc_ GUI. To open it again, run the following command from within the [suite directory](#suitedir):
```
rose suite-gcontrol
```

#### Check suite logs

It is quite common, especially at the beginning, to experience errors and job failures.<br>
When a suite task fails, a red icon appears next to the respective task name in the _Cylc_ GUI.<br>

To investigate the cause of a failure, or to monitor the progress of a suite, it can be useful to look at the suite logs.

Suite logs are stored in the directory `~/cylc-run/<suite-ID>` within a folder named `log.<TIMESTAMP>`, which is also symlinked as `log` (referred to as _logs folder_ below). Logs from previous runs of the same suite are archived as compressed files with the naming pattern `log.<TIMESTAMP>.tar.gz`.

Inside the logs folder, various files and subfolders can be found. The most relevant logs are typically:

- [Suite execution log](#suite-execution-log)
- [Task-specific logs](#task-specific-logs)

##### Suite execution log {: id='suite-execution-log' .no-toc }

The primary suite execution log is located at:
```
`~/cylc-run/<suite-ID>/log/suite/log`
```

This file contains a chronological record of the suite's run history. Each line is a distinct log entry, generally formatted as:
```
<TIMESTAMP> <LOG-TYPE> - [<task-name>.<cylc-cycle-point>] <status>
```

??? code "Example of a suite execution log file (click to enlarge)"
    ```
    2025-03-14T04:11:56Z INFO - Suite server: url=https://cylc.$USER$.$PROJECT.ps.gadi.nci.org.au:PORT/ pid=PID
    2025-03-14T04:11:56Z INFO - Run: (re)start=0 log=1
    2025-03-14T04:11:56Z INFO - Cylc version: 7.9.9
    2025-03-14T04:11:56Z INFO - Run mode: live
    2025-03-14T04:11:56Z INFO - Initial point: 01000101T0000Z
    2025-03-14T04:11:56Z INFO - Final point: 01000328T2359Z
    2025-03-14T04:11:56Z INFO - Cold Start 01000101T0000Z
    2025-03-14T04:11:56Z INFO - [make_drivers.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:11:56Z INFO - [install_cold.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:11:56Z INFO - [make_cice.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:11:56Z INFO - [make_mom.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:11:56Z INFO - [install_ancil.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:11:56Z INFO - [fcm_make_um.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:11:58Z INFO - [fcm_make_um.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:11:57Z for job(01)
    2025-03-14T04:11:58Z INFO - [fcm_make_um.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:11:58Z INFO - [install_ancil.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:11:57Z for job(01)
    2025-03-14T04:11:58Z INFO - [install_ancil.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:11:58Z INFO - [install_cold.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:11:57Z for job(01)
    2025-03-14T04:11:58Z INFO - [install_cold.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:11:58Z INFO - [make_cice.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:11:57Z for job(01)
    2025-03-14T04:11:58Z INFO - [make_cice.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:11:58Z INFO - [make_drivers.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:11:57Z for job(01)
    2025-03-14T04:11:58Z INFO - [make_drivers.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:11:58Z INFO - [make_mom.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:11:57Z for job(01)
    2025-03-14T04:11:58Z INFO - [make_mom.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:12:04Z INFO - [make_drivers.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:12:02Z for job(01)
    2025-03-14T04:12:04Z INFO - [make_drivers.01000101T0000Z] -health check settings: execution timeout=PT12H
    2025-03-14T04:12:04Z INFO - [install_cold.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:12:02Z for job(01)
    2025-03-14T04:12:04Z INFO - [install_cold.01000101T0000Z] -health check settings: execution timeout=PT12H
    2025-03-14T04:12:04Z INFO - [make_cice.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:12:02Z for job(01)
    2025-03-14T04:12:04Z INFO - [make_cice.01000101T0000Z] -health check settings: execution timeout=PT12H
    2025-03-14T04:12:04Z INFO - [make_mom.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:12:02Z for job(01)
    2025-03-14T04:12:04Z INFO - [make_mom.01000101T0000Z] -health check settings: execution timeout=PT12H
    2025-03-14T04:12:04Z INFO - [install_ancil.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:12:02Z for job(01)
    2025-03-14T04:12:04Z INFO - [install_ancil.01000101T0000Z] -health check settings: execution timeout=PT12H
    2025-03-14T04:12:04Z INFO - [client-command] get_latest_state dm5220@gadi-login-08.gadi.nci.org.au:cylc-gui c842e8fb-017a-47ec-8706-7fef0af6d5f5
    2025-03-14T04:12:06Z INFO - [make_drivers.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:12:05Z for job(01)
    2025-03-14T04:12:09Z INFO - [make_cice.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:12:07Z for job(01)
    2025-03-14T04:12:09Z INFO - [install_ancil.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:12:07Z for job(01)
    2025-03-14T04:12:10Z INFO - [make2_cice.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:12:11Z INFO - [make2_cice.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:12:10Z for job(01)
    2025-03-14T04:12:11Z INFO - [make2_cice.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:12:14Z INFO - [make_mom.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:12:12Z for job(01)
    2025-03-14T04:12:15Z INFO - [make2_mom.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:12:18Z INFO - [make2_mom.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:12:15Z for job(01)
    2025-03-14T04:12:18Z INFO - [make2_mom.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:12:37Z INFO - [install_cold.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:12:35Z for job(01)
    2025-03-14T04:12:48Z INFO - [make2_mom.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:12:45Z for job(01)
    2025-03-14T04:12:48Z INFO - [make2_mom.01000101T0000Z] -health check settings: execution timeout=PT40M, polling intervals=PT31M,PT2M,PT7M,...
    2025-03-14T04:12:59Z INFO - [fcm_make_um.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:12:57Z for job(01)
    2025-03-14T04:12:59Z INFO - [fcm_make_um.01000101T0000Z] -health check settings: execution timeout=PT1H10M, polling intervals=PT1H1M,PT2M,PT7M,...
    2025-03-14T04:13:00Z INFO - [make2_cice.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:12:58Z for job(01)
    2025-03-14T04:13:00Z INFO - [make2_cice.01000101T0000Z] -health check settings: execution timeout=PT30M, polling intervals=PT21M,PT2M,PT7M,...
    2025-03-14T04:15:58Z INFO - [make2_cice.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:15:57Z for job(01)
    2025-03-14T04:18:19Z INFO - [make2_mom.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:18:17Z for job(01)
    2025-03-14T04:20:10Z INFO - [fcm_make_um.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:20:08Z for job(01)
    2025-03-14T04:20:11Z INFO - [fcm_make2_um.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:20:13Z INFO - [fcm_make2_um.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:20:12Z for job(01)
    2025-03-14T04:20:13Z INFO - [fcm_make2_um.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:20:37Z INFO - [fcm_make2_um.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:20:35Z for job(01)
    2025-03-14T04:20:37Z INFO - [fcm_make2_um.01000101T0000Z] -health check settings: execution timeout=PT1H10M, polling intervals=PT1H1M,PT2M,PT7M,...
    2025-03-14T04:37:11Z INFO - [fcm_make2_um.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:37:09Z for job(01)
    2025-03-14T04:37:12Z INFO - [recon.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:37:19Z INFO - [recon.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:37:14Z for job(01)
    2025-03-14T04:37:19Z INFO - [recon.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:37:53Z INFO - [recon.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:37:52Z for job(01)
    2025-03-14T04:37:53Z INFO - [recon.01000101T0000Z] -health check settings: execution timeout=PT30M, polling intervals=PT21M,PT2M,PT7M,...
    2025-03-14T04:38:28Z INFO - [recon.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:38:28Z for job(01)
    2025-03-14T04:38:29Z INFO - [coupled.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:38:30Z INFO - [coupled.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:38:30Z for job(01)
    2025-03-14T04:38:30Z INFO - [coupled.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:42:00Z INFO - [coupled.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:41:59Z for job(01)
    2025-03-14T04:42:00Z INFO - [coupled.01000101T0000Z] -health check settings: execution timeout=PT2H10M, polling intervals=PT2H1M,PT2M,PT7M,...
    2025-03-14T04:45:28Z INFO - [coupled.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:45:27Z for job(01)
    2025-03-14T04:45:29Z INFO - [filemove.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:45:30Z INFO - [filemove.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:45:30Z for job(01)
    2025-03-14T04:45:30Z INFO - [filemove.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:46:12Z INFO - [filemove.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:46:11Z for job(01)
    2025-03-14T04:46:12Z INFO - [filemove.01000101T0000Z] -health check settings: execution timeout=PT15M, polling intervals=PT6M,PT2M,PT7M,...
    2025-03-14T04:46:26Z INFO - [filemove.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:46:25Z for job(01)
    2025-03-14T04:46:27Z INFO - [history_postprocess.01000101T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:46:27Z INFO - [coupled.01000201T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:46:28Z INFO - [coupled.01000201T0000Z] status=ready: (internal)submitted at 2025-03-14T04:46:28Z for job(01)
    2025-03-14T04:46:28Z INFO - [coupled.01000201T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:46:28Z INFO - [history_postprocess.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:46:28Z for job(01)
    2025-03-14T04:46:28Z INFO - [history_postprocess.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:46:58Z INFO - [history_postprocess.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:46:57Z for job(01)
    2025-03-14T04:46:58Z INFO - [history_postprocess.01000101T0000Z] -health check settings: execution timeout=PT1H40M, polling intervals=PT1H31M,PT2M,PT7M,...
    2025-03-14T04:47:09Z INFO - [coupled.01000201T0000Z] status=submitted: (received)started at 2025-03-14T04:47:09Z for job(01)
    2025-03-14T04:47:09Z INFO - [coupled.01000201T0000Z] -health check settings: execution timeout=PT2H10M, polling intervals=PT2H1M,PT2M,PT7M,...
    2025-03-14T04:47:11Z INFO - [history_postprocess.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:47:10Z for job(01)
    2025-03-14T04:47:12Z INFO - [housekeep.01000101T0000Z] -submit-num=01, owner@host=cylc.dm5220.tm70.ps.gadi.nci.org.au
    2025-03-14T04:47:13Z INFO - [housekeep.01000101T0000Z] status=ready: (internal)submitted at 2025-03-14T04:47:13Z for job(01)
    2025-03-14T04:47:13Z INFO - [housekeep.01000101T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:47:18Z INFO - [housekeep.01000101T0000Z] status=submitted: (received)started at 2025-03-14T04:47:17Z for job(01)
    2025-03-14T04:47:18Z INFO - [housekeep.01000101T0000Z] -health check settings: execution timeout=PT12H
    2025-03-14T04:47:21Z INFO - [housekeep.01000101T0000Z] status=running: (received)succeeded at 2025-03-14T04:47:20Z for job(01)
    2025-03-14T04:50:13Z INFO - [coupled.01000201T0000Z] status=running: (received)succeeded at 2025-03-14T04:50:11Z for job(01)
    2025-03-14T04:50:14Z INFO - [filemove.01000201T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:50:15Z INFO - [filemove.01000201T0000Z] status=ready: (internal)submitted at 2025-03-14T04:50:14Z for job(01)
    2025-03-14T04:50:15Z INFO - [filemove.01000201T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:50:54Z INFO - [filemove.01000201T0000Z] status=submitted: (received)started at 2025-03-14T04:50:52Z for job(01)
    2025-03-14T04:50:54Z INFO - [filemove.01000201T0000Z] -health check settings: execution timeout=PT15M, polling intervals=PT6M,PT2M,PT7M,...
    2025-03-14T04:51:08Z INFO - [filemove.01000201T0000Z] status=running: (received)succeeded at 2025-03-14T04:51:06Z for job(01)
    2025-03-14T04:51:09Z INFO - [history_postprocess.01000201T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:51:09Z INFO - [coupled.01000301T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T04:51:10Z INFO - [coupled.01000301T0000Z] status=ready: (internal)submitted at 2025-03-14T04:51:09Z for job(01)
    2025-03-14T04:51:10Z INFO - [coupled.01000301T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:51:10Z INFO - [history_postprocess.01000201T0000Z] status=ready: (internal)submitted at 2025-03-14T04:51:09Z for job(01)
    2025-03-14T04:51:10Z INFO - [history_postprocess.01000201T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:51:23Z INFO - [history_postprocess.01000201T0000Z] status=submitted: (received)started at 2025-03-14T04:51:22Z for job(01)
    2025-03-14T04:51:23Z INFO - [history_postprocess.01000201T0000Z] -health check settings: execution timeout=PT1H40M, polling intervals=PT1H31M,PT2M,PT7M,...
    2025-03-14T04:51:35Z INFO - [history_postprocess.01000201T0000Z] status=running: (received)succeeded at 2025-03-14T04:51:34Z for job(01)
    2025-03-14T04:51:36Z INFO - [housekeep.01000201T0000Z] -submit-num=01, owner@host=cylc.dm5220.tm70.ps.gadi.nci.org.au
    2025-03-14T04:51:37Z INFO - [housekeep.01000201T0000Z] status=ready: (internal)submitted at 2025-03-14T04:51:37Z for job(01)
    2025-03-14T04:51:37Z INFO - [housekeep.01000201T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T04:51:41Z INFO - [housekeep.01000201T0000Z] status=submitted: (received)started at 2025-03-14T04:51:40Z for job(01)
    2025-03-14T04:51:41Z INFO - [housekeep.01000201T0000Z] -health check settings: execution timeout=PT12H
    2025-03-14T04:51:45Z INFO - [housekeep.01000201T0000Z] status=running: (received)succeeded at 2025-03-14T04:51:43Z for job(01)
    2025-03-14T05:01:00Z INFO - [coupled.01000301T0000Z] status=submitted: (received)started at 2025-03-14T05:00:59Z for job(01)
    2025-03-14T05:01:00Z INFO - [coupled.01000301T0000Z] -health check settings: execution timeout=PT2H10M, polling intervals=PT2H1M,PT2M,PT7M,...
    2025-03-14T05:04:40Z INFO - [coupled.01000301T0000Z] status=running: (received)succeeded at 2025-03-14T05:04:39Z for job(01)
    2025-03-14T05:04:41Z INFO - [filemove.01000301T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T05:04:43Z INFO - [filemove.01000301T0000Z] status=ready: (internal)submitted at 2025-03-14T05:04:43Z for job(01)
    2025-03-14T05:04:43Z INFO - [filemove.01000301T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T05:05:25Z INFO - [filemove.01000301T0000Z] status=submitted: (received)started at 2025-03-14T05:05:24Z for job(01)
    2025-03-14T05:05:25Z INFO - [filemove.01000301T0000Z] -health check settings: execution timeout=PT15M, polling intervals=PT6M,PT2M,PT7M,...
    2025-03-14T05:05:40Z INFO - [filemove.01000301T0000Z] status=running: (received)succeeded at 2025-03-14T05:05:39Z for job(01)
    2025-03-14T05:05:41Z INFO - [history_postprocess.01000301T0000Z] -submit-num=01, owner@host=localhost
    2025-03-14T05:05:42Z INFO - [history_postprocess.01000301T0000Z] status=ready: (internal)submitted at 2025-03-14T05:05:42Z for job(01)
    2025-03-14T05:05:42Z INFO - [history_postprocess.01000301T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T05:05:57Z INFO - [history_postprocess.01000301T0000Z] status=submitted: (received)started at 2025-03-14T05:05:56Z for job(01)
    2025-03-14T05:05:57Z INFO - [history_postprocess.01000301T0000Z] -health check settings: execution timeout=PT1H40M, polling intervals=PT1H31M,PT2M,PT7M,...
    2025-03-14T05:06:08Z INFO - [history_postprocess.01000301T0000Z] status=running: (received)succeeded at 2025-03-14T05:06:07Z for job(01)
    2025-03-14T05:06:09Z INFO - [housekeep.01000301T0000Z] -submit-num=01, owner@host=cylc.dm5220.tm70.ps.gadi.nci.org.au
    2025-03-14T05:06:10Z INFO - [housekeep.01000301T0000Z] status=ready: (internal)submitted at 2025-03-14T05:06:10Z for job(01)
    2025-03-14T05:06:10Z INFO - [housekeep.01000301T0000Z] -health check settings: submission timeout=P3D
    2025-03-14T05:06:18Z INFO - [housekeep.01000301T0000Z] status=submitted: (received)started at 2025-03-14T05:06:16Z for job(01)
    2025-03-14T05:06:18Z INFO - [housekeep.01000301T0000Z] -health check settings: execution timeout=PT12H
    2025-03-14T05:06:20Z INFO - [housekeep.01000301T0000Z] status=running: (received)succeeded at 2025-03-14T05:06:19Z for job(01)
    2025-03-14T05:06:20Z INFO - Suite shutting down - AUTOMATIC
    2025-03-14T05:06:28Z INFO - DONE
    ``` 

This file helps identify specific tasks that failed during the suite run.

!!! tip
    When a task fails, the `LOG-TYPE` will tipically be `ERROR` or `CRITICAL`, instead of the more common `INFO`.

Once a specific task and _Cylc_ cycle point are identified, the task-specific logs can be inspected.

##### Task-specific logs {: .no-toc }

Logs for individual tasks are located in subfolders within the logs folder, following this path structure:
```
~/cylc-run/<suite-ID>/log/job/<cylc-cycle-point>/<task-name>/<retry-number>
```
The `<retry-number>` indicates the number of retries for the same task, with the latest retry symlinked to `NN`.

For example, the logs for the latest retry of a task named `Lismore_d1000_GAL9_um_recon` at _Cylc_ cycle point `20220226T0000Z` can be in the following folder:
```
~/cylc-run/<suite-ID>/log/job/20220226T0000Z/Lismore_d1000_GAL9_um_recon/NN
```

Within this directory, the `job.out` and `job.err` files (representing `STDOUT` and `STDERR`, respectively) can be found, along with other related log files.

!!! tip
    Within the _Cylc_ GUI, logs for a specific task can be viewed by right-clicking on the task and selecting the desired log from the _View Job Logs (Viewer)_ menu.

#### Stop, restart, reload and clean suites
In some cases, you may want to control the running state of a suite.<br>
If your _Cylc_ GUI has been closed and you are unsure whether your suite is still running, you can scan for active suites and reopen the GUI if desired.<br>
To scan for active suites, run:
```
cylc scan
```
To reopen the _Cylc_ GUI, run the following command from within the [suite directory](#suitedir):
```
rose suite-gcontrol
```
<!--
<terminal-window>
    <terminal-line data="input">cylc scan</terminal-line>
    <terminal-line>&lt;suite-ID&gt; &lt;$USER&gt;@&lt;gadi-cpu&gt;.nci.org.au:&lt;port&gt;</terminal-line>
    <terminal-line data="input">cd ~/roses/&lt;suite-ID&gt;</terminal-line>
    <terminal-line data="input" directory="~/roses/&lt;suite-ID&gt;">rose suite-gcontrol</terminal-line>
    <img src="/assets/run_access_cm/Cylc_GUI_are.png" alt="Cylc GUI" imageTime="inf" loading="lazy">
</terminal-window>

TODO
{: style="color:red"}
<!-- Replace with a RAS video/gif -->

##### STOP a suite {: .no-toc }
To shutdown a suite in a safe manner, run the following command from within the [suite directory](#suitedir):
```
rose suite-stop -y
```
Alternatively, you can directly kill the [PBS jobs][PBS job] connected to your run. To do so:

1. Check the status of all your PBS jobs:
```
qstat -u $USER
```

1. Delete any job related to your run:
```
qdel <job-ID>
```

##### RESTART a suite {: .no-toc }
There are two main ways to restart a suite:

- **_SOFT_ restart**<br>
    To reinstall the suite and reopen _Cylc_ in the same state it was prior to being stopped, run the following command from within the [suite directory](#suitedir):
    ```
    rose suite-run --restart
    ```

    !!! warning
        You may need to manually trigger failed tasks from the _Cylc_ GUI.

<!--
<terminal-window lineDelay="50">
    <terminal-line data="input" lineDelay="300">cylc</terminal-line>
    <terminal-line data="input" lineDelay="300">cd ~/roses/&lt;suite-ID&gt;</terminal-line>
    <terminal-line data="input" directory="~/roses/&lt;suite-ID&gt;" lineDelay="300">rose suite-run --restart</terminal-line>
    <terminal-line>[INFO] export CYLC_VERSION=7.9.7</terminal-line>
    <terminal-line>[INFO] export ROSE_ORIG_HOST=&lt;gadi-cpu&gt;.nci.org.au</terminal-line>
    <terminal-line>[INFO] export ROSE_SITE=nci</terminal-line>
    <terminal-line>[INFO] export ROSE_VERSION=2019.01.2</terminal-line>
    <terminal-line>[INFO] delete: log/rose-suite-run.conf</terminal-line>
    <terminal-line>[INFO] symlink: rose-conf/&lt;timestamp&gt;-restart.conf <= log/rose-suite-run.conf</terminal-line>
    <terminal-line>[INFO] delete: log/rose-suite-run.version</terminal-line>
    <terminal-line>[INFO] symlink: rose-conf/&lt;timestamp&gt;-restart.version <= log/rose-suite-run.version</terminal-line>
    <terminal-line>[INFO] chdir: log/</terminal-line>
    <terminal-line>[WARN] Using the cylc session &lt;persistent-session-full-name&gt;</terminal-line>
    <terminal-line>[WARN]</terminal-line>
    <terminal-line>[WARN] Loading cylc7/23.09</terminal-line>
    <terminal-line>[WARN] &emsp;Loading requirement: mosrs-setup/1.0.1</terminal-line>
    <terminal-line>[INFO] &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;._.</terminal-line>
    <terminal-line>[INFO] &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;| |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The Cylc Suite Engine [7.9.7]</terminal-line>
    <terminal-line>[INFO] ._____._. ._| |_____.&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;Copyright (C) 2008-2019 NIWA</terminal-line>
    <terminal-line>[INFO] | .___| | | | | .___|&emsp;& British Crown (Met Office) & Contributors.</terminal-line>
    <terminal-line>[INFO] | !___| !_! | | !___. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</terminal-line>
    <terminal-line>[INFO] !_____!___. |_!_____! This program comes with ABSOLUTELY NO WARRANTY;</terminal-line>
    <terminal-line>[INFO] &emsp;&emsp;&emsp;&thinsp;.___! | &emsp;&emsp;&emsp;&emsp;&emsp;see `cylc warranty`. &thinsp;It is free software, you</terminal-line>
    <terminal-line>[INFO] &emsp;&emsp;&emsp;&thinsp;!_____! &emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;are welcome to redistribute it under certain</terminal-line>
    <terminal-line>[INFO]</terminal-line>
    <terminal-line>[INFO] *** listening on https://&lt;persistent-session-full-name&gt;:&lt;port&gt;/ ***</terminal-line>
    <terminal-line>[INFO]</terminal-line>
    <terminal-line>[INFO] To view suite server program contact information:</terminal-line>
    <terminal-line>[INFO]  $ cylc get-suite-contact &lt;suite-ID&gt;</terminal-line>
    <terminal-line>[INFO]</terminal-line>
    <terminal-line>[INFO] Other ways to see if the suite is still running:</terminal-line>
    <terminal-line>[INFO]  $ cylc scan -n '&lt;suite-ID&gt;' &lt;persistent-session-full-name&gt;</terminal-line>
    <terminal-line>[INFO]  $ cylc ping -v --host=&lt;persistent-session-full-name&gt; &lt;suite-ID&gt;</terminal-line>
    <terminal-line>[INFO]  $ ps -opid,args &lt;PID&gt;  # on &lt;persistent-session-full-name&gt;</terminal-line>
    <img src="/assets/run_access_cm/Cylc_GUI_are.png" alt="Cylc GUI" imageTime="inf" loading="lazy">
</terminal-window>

TODO
{: style="color:red"}
<!-- Replace with a RAS image -->

- **HARD restart**<br>
    To overwrite any previous runs of the suite and start afresh, run the following command from within the [suite directory](#suitedir):
    ```
    rose suite-run --new
    ```

    !!! warning
        This will overwrite all existing model output and logs for the same suite.

##### RELOAD a suite {: .no-toc }
In some cases the suite needs to be updated without necessarily having to stop it (e.g., after fixing a typo in a file). Updating an active suite is called a _reload_, where the suite is _re-installed_ and _Cylc_ is updated with the changes. This is similar to a _SOFT_ restart, except new changes are installed, so you may need to manually trigger failed tasks from the _Cylc_ GUI.

To reload a suite, run the following command from within the [suite directory](#suitedir):
```
rose suite-run --reload
```

##### CLEAN a suite {: .no-toc }
To remove all files and folders created by the suite within the `/scratch/$PROJECT/$USER/cylc-run/<suite-ID>` directory, run the following command from within the [suite directory](#suitedir):
```
rose suite-clean
```

Alternatively, you can achieve the same behaviour within a new submission of an experiment, by appending the `--new` option to the `rose suite-run` command:
```
rose suite-run --new
```

!!! warning
    Cleaning a suite folder will remove any non-archived data (i.e.: output files, logs, executables, etc.) associated with the suite.

#### RAS output files
    
The RAS output ancillary files can be found in `/scratch/$PROJECT/$USER/cylc-run/<suite-ID>/share/data/ancils`.<br>
The ancillaries are divided for each nested region, with each of the region subdivided in directories named according to the nests' names. Therefore, the path of the ancillaries for a specific nest is `/scratch/$PROJECT/$USER/cylc-run/<suite-ID>/share/data/ancils/<nested_region_name>/<nest_name>`.
<!--
TODO
{: style="color:red"}
<!-- There is no information before about nests (e.g., nest structure, what is the difference between nested region name and nest name, etc.) It would be good to add something in the suite description and link it here. -->

In addition to these nests, a subdirectory named according to the driving model data can be found within the `nested_region_name` directory.<br>
The 2-level (i.e., two nests) example above has one `nested_region_name` called `Lismore`. Driven by ERA5 data, the outer and inner nests are named `d1000` and `d0198`, respectively.<br>
Thus, the ancillary files directory `/scratch/$PROJECT/$USER/cylc-run/<suite-ID>/share/data/ancils/` contains the following folders:

- `Lismore/d1000`
- `Lismore/d0198`
- `Lismore/era5`

The ancillary data files in output are typically in the [UM fieldsfile](https://code.metoffice.gov.uk/doc/um/latest/papers/umdp_F03.pdf) format.

#### Edit the RAS configuration
This section describes how to modify the RAS configuration.<br>
The modifications discussed in this section can change the way the RAS is run and, as a result, control the ancillaries that are generated.

In general, ACCESS modelling suites can be edited either by directly modifying the configuration files within the [suite directory](#suitedir), or by using the [_Rose_ GUI](#rosegui).

!!! warning 
    Unless you are an experienced user, direct modification of configuration files is discouraged to avoid errors.

##### Rose GUI {: id="rosegui" .no-toc }
To open the [_Rose_](#rose) GUI, run the following command from within the [suite directory](#suitedir): 
```
rose edit &
```

!!! tip
    The `&` is optional. It allows the terminal prompt to remain active while running the `Rose` GUI as a separate process in the background.
<!--
<terminal-window>
    <terminal-line data="input">cd ~/roses/&lt;suite-ID&gt;</terminal-line>
    <terminal-line data="input" directory="~/roses/&lt;suite-ID&gt;">rose edit &</terminal-line>
    <terminal-line class="ls-output-format">[&lt;N&gt;] &lt;PID&gt;</terminal-line>
    <terminal-line data="input" directory="~/roses/&lt;suite-ID&gt;"></terminal-line>
    <img src="/assets/run_access_cm/Rose_GUI_are.png" alt="Rose GUI" imageTime="inf" loading="lazy">
</terminal-window>

TODO
{: style="color:red"}
<!-- Change image with a RAS one -->

##### Change the region centre and name {: .no-toc }
In {{model}}, it is possible to perform simulations for a specific region on Earth, by setting specific parameters for the region of interest.<br>
In the RAS, the following parameters can be set:

- `rg01_name`<br>
  Name for the region of interest.

- `rg01_centre`<br>
  Set of latitude/longitude coordinates defining the centre of the region of interest.
<!--
TODO
What about the extent of the region? -->

!!! tip
    In `{{ras_id}}` these parameters are set, by default, to the *Lismore Flood* example. 
<!--
TODO
Can we add a link for the Lismore Flood example? Anything that makes it a bit clearer what that is. -->

To change these parameters, within the [Rose GUI](#rosegui) navigate to _suite conf &rarr; Regional Ancillary Suite &rarr; Nested region 1 setup_, edit the `rg01_name` and `rg01_centre` fields and click the _Save_ button ![Save button](/assets/run_access_cm/save_button.png){: style="height:1em"}.

For example, to run an {{ model }} suite for a region with centre (-12.4, 130.8) and name "Darwin":

![Rose change region centre example](/assets/run_access_ras/ras_edit_region_center_and_name.gif){: class="example-img" loading="lazy"}

<!--
TODO
{: style="color:red"}
<!-- Add a gif/video for the exmple -->

### Regional Nesting Suite (RNS) {: id="rns"}
<!--
The RNS is ...
-->
The `suite-ID` of the RNS is `{{ rns_id }}`.

<!--
TODO
{: style="color:red"}
<!-- Add short description of what the RAS does -->

#### Get and run RNS configuration
Steps to obtain and run the RNS configuration, as well as monitoring the logs, are analogous to those listed above for the [RAS](#ras).<br>
The only difference is the `suite-ID`, which for the RNS is `{{ rns_id }}`.

To get the RNS configuration, please follow the steps listed in [Get the RAS configuration](#get-the-ras-configuration), making sure you use the correct RNS `suite-ID` `{{ rns_id }}` when copying the suite.

To run the RNS configuration, please follow the steps listed in [Run the suite](#run-the-suite).

To check the RNS suite logs, please follow the steps listed in [Check suite logs](#check-suite-logs).

#### RNS output files

All the RNS output files are available on _Gadi_ inside `/scratch/$PROJECT/$USER/cylc-run/<suite-ID>`. They are also symlinked in `~/cylc-run/<suite-ID>`.

The RNS output data can be found in the `/scratch/$PROJECT/$USER/cycl-run/<suite-ID>/share/cycle` directory, grouped for each [cycle](#change-run-length-and-cycling-frequency).<br>
Within the cycle directory, outputs are divided into multiple nested subdirectories in the format `<nested_region>/<science_choice>/<nest_name>`, with [nested_region](), [science_choice]() and [nest_name]() referring to the respective configurable options in the [RAS](#edit-the-ras-configuration).

<!--
TODO
{: style="color:red"}
<!-- Use the same names for `nested_region` `science_choice` and `nest_name` as the one used above for the RAS and make sure all of the are referenced in the RAS and there are clear instructions on how to modify them. There is no reference for how to change the `science_choice`. If it cannot be changed, I would call it in a different way. Add links -->

Each `<nest_name>` directory has the following subdirectories:

- `ics` &rarr; initial conditions
- `lbcs` &rarr; lateral boundary conditions
- `um` &rarr; model output data

<!--
TODO
{: style="color:red"}
<!-- Use the same names for `nested_region` `science_choice` and `nest_name` as the one used above for the RAS and make sure all of the are referenced in the RAS and there are clear instructions on how to modify them. Add links -->

The model output data for the `Lismore` `nested_region`, using a `RAL3P2` `science_choice` and `d0198` as a `nest_name`, will be stored in `/scratch/$PROJECT/$USER/cylc-run/<suite-ID>/share/cycle/20220226T0000Z/Lismore/d0198/RAL3P2/um`.

The RNS output data files are typically in the [UM fieldsfile](https://code.metoffice.gov.uk/doc/um/latest/papers/umdp_F03.pdf) format.

#### Edit the RNS configuration

This section describes how to modify the RNS configuration.
The modifications discussed in this section can change the way the RNS is run, or how its specific [model components] are configured and coupled together.

In general, ACCESS modelling suites can be edited either by directly modifying the configuration files within the suite directory, or by using the [_Rose_ GUI](#rosegui).

!!! warning
    Unless you are a very expert user, directly modifying configuration files is usually discouraged to avoid incurring in errors.

To open the _Rose_ GUI, you can follow the steps listed in [Rose GUI](#rosegui).

##### Change where the output from run is stored project {: .no-toc }
To change where the output from the model run is stored, within the [Rose GUI](#rosegui) navigate to _suite conf &rarr; Nesting Suite &rarr; General run options_, edit the `_NCI_STORAGE_` field and click the _Save_ button ![Save button](/assets/run_access_cm/save_button.png){: style="height:1em"}.

<!--
TODO
{: style="color:red"}
<!-- I couldn't restructure this title/text because from them I am not really understanding what `NCI_STORAGE` is. From its default value in the rose-suite.conf (scratch/$PROJECT) and how it's used inside the suite, it seems to be a project folder added to the `storage` option for the PBS jobs submission of many tasks. Therefore is not necessarily related to model outputs (is also related to model input), but to filesystem mounts that the model need to be able to access. Why is the text mentioning changing where the output is stored? -->

#### Change run length and cycling frequency {: .no-toc }
The RNS is run in multiple steps, each one constituting a cycle. The job scheduler resubmits the suite every chosen cycling frequency, until the total run length is reached.

For the RNS:

- `CYCLE_INT_HR` is the cycling frequency (in hours)
- The total run length is the time span between the `INITIAL_CYCLE_POINT` and `FINAL_CYCLE_POINT`

To modify these parameters, within the [Rose GUI](#rosegui) navigate to _suite conf &rarr; Nesting Suite &rarr; Cycling options_, edit the `INITIAL_CYCLE_POINT`, `FINAL_CYCLE_POINT` and the `CYCLE_INT_HR` fields (using [ISO 8601 Duration](https://en.wikipedia.org/wiki/ISO_8601#Durations) format) and click the _Save_ button ![Save button](/assets/run_access_cm/save_button.png){: style="height:1em"}.

<!--
TODO
{: style="color:red"}
<!-- Are there any other options more specific to the RNS that users may want to change here? -->

<!--
## Get Help
If you have questions or need help regarding {{ model }}, consider creating a topic in the [Earth System Model category of the ACCESS-Hive Forum](https://forum.access-hive.org.au/c/esm/earth-system-model/72).<br>
For assistance on how to request help from ACCESS-NRI, follow the [guidelines on how to get help](/about/user_support/#still-need-help).

TODO
{: style="color:red"}
<!-- Check and change link details if needed -->


<custom-references>
- [https://nespclimate.com.au/wp-content/uploads/2020/10/Instruction-document-Getting_started_with_ACCESS.pdf](https://nespclimate.com.au/wp-content/uploads/2020/10/Instruction-document-Getting_started_with_ACCESS.pdf)
- [https://code.metoffice.gov.uk/doc/um/latest/um-training/rose-gui.html](https://code.metoffice.gov.uk/doc/um/latest/um-training/rose-gui.html)
- [https://opus.nci.org.au/display/DAE/Run+Cylc7+Suites](https://opus.nci.org.au/display/DAE/Run+Cylc7+Suites)
- [https://opus.nci.org.au/display/Help/Persistent+Sessions](https://opus.nci.org.au/display/Help/Persistent+Sessions)
</custom-references>
