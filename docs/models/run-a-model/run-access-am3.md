{% set model = "ACCESS-AM3" %}
{% set cylc_module = "cylc7/24.03" %}

# Run {{ model }}

## About

{{ model }} is an ACCESS-NRI-supported atmosphere-land model configuration using the UKMO Unified Model (UM) and CABLE.

A description of the model and its components is available in the [{{ model }} overview]({{ model_configurations }}/#{{ model }}).

The instructions below outline how to run {{ model }} using ACCESS-NRI's supported configuration, specifically designed to run on the [National Computational Infrastructure (NCI)](https://nci.org.au/about-us/who-we-are) supercomputer [_Gadi_][gadi].<br>

If you are unsure whether {{ model }} is the right choice for your experiment, take a look at the overview of [ACCESS Models](/models).

[{{ model }} release notes]({{release_notes}}) are available on the ACCESS-Hive Forum and are updated when new releases are made available.

## Prerequisites

### NCI Account

Before running {{ model }}, you need to [Set Up your NCI Account](/getting_started/set_up_nci_account).

### MOSRS Account

The [Met Office Science Repository Service (MOSRS)](https://code.metoffice.gov.uk) is a server run by the UK Met Office (UKMO) to support collaborative development with other partners organisations. MOSRS contains the source code and configurations for some model components in {{ model }} (e.g., the [UM](/models/model_components/atmosphere/#unified-model-um)).


To apply for a _MOSRS_ account, please contact your [local institutional sponsor](https://opus.nci.org.au/display/DAE/Prerequisites).
{: #mosrs-account}

### Join NCI projects

Join the following projects by requesting membership on their respective NCI project pages:

- [access](https://my.nci.org.au/mancini/project/access/join)
- [hh5](https://my.nci.org.au/mancini/project/hh5/join)
- [hr22](https://my.nci.org.au/mancini/project/hr22/join)
- [ki32](https://my.nci.org.au/mancini/project/ki32/join)
- [ki32_mosrs](https://my.nci.org.au/mancini/project/ki32_mosrs/join)
- [rp23](https://my.nci.org.au/mancini/project/rp23/join)
- [vk83](https://my.nci.org.au/mancini/project/vk83/join)
- [xp65](https://my.nci.org.au/mancini/project/vk65/join)

!!! tip
    To request membership for the _ki32_mosrs_ subproject, you need to:
    
    - already be member of the _ki32_ project
    {: style="list-style-type: disc"}
    - have a [MOSRS account](#mosrs-account)
    {: style="list-style-type: disc"}

For more information on joining specific NCI projects, refer to [How to connect to a project](https://opus.nci.org.au/display/Help/How+to+connect+to+a+project).

### Connection to an ARE VDI Desktop (optional)

This documentation has been written from the perspective of running the model over an SSH connection run from a local terminal, however, the commands are transferable to a terminal session within an ARE session.

To run {{ model }}, start an [Australian Research Environment (ARE) VDI Desktop](https://are.nci.org.au/pun/sys/dashboard/batch_connect/sys/desktop_vnc/ncigadi/session_contexts/new) session.<br>

If you are not familiar with ARE, check out the [Getting Started on ARE](/getting_started/are) section.

## Quick Start guide

The following *Quick Start* guide is aimed at experienced users wanting to run {{ model }}. For more detailed instructions, please refer to the [Detailed guide](#detailed-guide).

### Connect to Gadi

!!! tip
    Skip this step if running via ARE.

You will need to connect to Gadi with X11 Forwarding enabled. One such way is with the following command.

```shell
ssh -Y $NCI_USER@gadi.nci.org.au
```

### Set up a Persistent Session

Persistent sessions are low-memory resident processes that are used to handle workflow execution:

https://opus.nci.org.au/spaces/Help/pages/241926895/Persistent+Sessions

In order to start {{ model }}, you will need to have an active persistent session. While it may be tempting to use a session that has been active for many days, experience suggests that sessions of this age become "stale" and/or sluggish if they are not in active use. In general, it is recommended to kill any unused sessions and start afresh.

One caveat to this is that starting a session with a particular name currently only returns a UUID when listing with `persistent-sessions list`; this takes some effort to back out the original name. As such, it is good practice to capture the UUID somewhere for later use when you want to query the session later.

```shell
# Start a session for project "rp23" named "cylc" and send the resulting UUID to a file you can use later.
persistent-sessions start -p rp23 cylc | cut -d " " -f2 > cylc.ps

# List active sessions
persistent-sessions list

# Kill the session we created (later)
persistent-sessions kill $(cat cylc.ps)
```

Now that you have a persistent session up and running, you can continue towards running the suite.

!!! tip
    {{ model }} will automatically select the appropriate persistent session.

### Load modules

Load the required module files to access the Rose/Cylc configuration on Gadi.

```shell
# Load the cylc modules
module use /g/data/hr22/modulefiles
module load {{ cylc_module }}
```

For further instructions on getting the _Rose/Cylc_ setup, refer to the [Detailed guide](#rosecylcmosrs-setup).

### MOSRS authentication

Ensure that you have authenticated MOSRS credentials with the following command after having loaded the modules above:

```shell
mosrs-auth
```

### Check out the suite

To run {{ model }} you must first check out the suite from the ACCESS-NRI GitHub by running the following commands:

```shell
# Create the roses directory, if you have never run cylc before
mkdir -p $HOME/roses

# Move into it
cd $HOME/roses

# Check out the suite from GitHub
git clone git@github.com:ACCESS-NRI/access-am3-configs.git
```

### Running the suite

To run the suite in it's default configuration, run the following commands:

```shell
# Move into the suite directory
cd $HOME/roses/access-am3-configs

# Run the suite
rose suite-run
```

The suite will now start, logging details to `stdout`. After it completes successfully, it may appear to hang. Please be patient as it will load a GUI window to monitor the suite (assuming you connected with X11 forwarding above). If this does not occur, you can start the cylc GUI with the following command from the suite directory:

```shell
rose suite-gcontrol
```

Once the suite is running, you can safely disconnect from the GUI and/or your terminal session. The suite will continue to run to completion or until it encounters an error.

### Monitoring the suite

There are a number of mechanisms for monitoring a running suite, or to debug a problematic one.

#### Via the GUI

Starting the suite (as above) should trigger the opening of a GUI window from which you can control the execution of a suite and its tasks, and inspect logs etc. You can manually open the GUI window from the suite directory by issuing the following command if it is not already open:

```shell
rose suite-gcontrol
```

#### Via the suite execution log

The primary execution log for a Cylc suite resides in `~/cylc-run/<suite-ID>/log/suite/log`, for the default setup of {{ ACCESS-AM3 }}, this file is `~/cylc-run/access-am3-configs/log/suite/log`.

This file contains a chronological record of the suite's run history. Each line is a distinct log entry, generally formatted as `<TIMESTAMP> <LOG-TYPE> - [<task-name>.<cylc-cycle-point>] <status>`.

This file helps identify specific tasks that failed during the suite run.

!!! tip
    You can follow this file in near-real-time with the following command `tail -f ~/cylc-run/access-am3-configs/log/suite/log`, although there will be a slight delay from the Cylc daemon. This information is also available from the Cylc GUI.

!!! tip
    When a task fails, the `LOG-TYPE` will typically be `ERROR` or `CRITICAL`, instead of the more common `INFO`. You can use this knowledge to `grep` for failures quickly. For example `grep "ERROR" ~/cylc-run/access-am3-configs/log/suite/log`.

Once a specific task and _Cylc_ cycle point are identified, the task-specific logs can be inspected (below).

##### Via task-specific logs

Logs for individual tasks are located in subfolders within the logs folder, following this path structure:

```shell
~/cylc-run/<suite-ID>/log/job/<cylc-cycle-point>/<task-name>/<retry-number>
```
The `<retry-number>` indicates the number of retries for the same task, with the latest retry symlinked to `NN`.

Within this directory, the `job.out` and `job.err` files (representing `STDOUT` and `STDERR`, respectively) can be found, along with other related log files. It is useful to look through both files, as well as the `job.status` file to diagnose any issues. Further, errors may propagate from earlier in the task, so be sure to look to the earliest error messages, as resolving those issues may resolve those later in the log.

### Stopping the suite - 3 ways

There are times when you may need to stop a suite, such as due to error or misconfiguration causing it to overrun and consume resources unecessarily. In these cases, there are several options available to you to stop a running suite.

3 options are listed below in recommended order.

#### Via the GUI

By hitting the "Stop Suite" button. Be advised that the GUI can take some time to respond and may not work at all if your SSH connection is unstable, hence, this is not the most reliable option if you need to stop a suite immediately.

#### From the suite directory

This approach should stop the suite cleanly and cancel any child processes/jobs.

```shell
cd ~/roses/access-am3-configs
rose suite-stop -y
```

#### Cancel any PBS jobs associated with your suite.

This brute-force approach will revoke resources from any running jobs, leaving the suite in an uncertain state that will likely require manual clean up. As such, it is recommended only to use this option if the other two do not work.

```shell
# Check your running jobs
qstat -u $USER

# Cancel any jobs that are associated with your suite
qdel <job-id>
```

### Restart the suite {: .no-toc }

There are two main ways to restart a suite:

#### "Soft" restart
    
To reinstall the suite and reopen _Cylc_ in the same state it was prior to being stopped, run the following command from within the [suite directory](#suitedir):

```shell
rose suite-run --restart
```

!!! warning
    You may need to manually trigger failed tasks from the _Cylc_ GUI.

#### "Hard" restart

To overwrite any previous runs of the suite and start afresh, run the following command from within the [suite directory](#suitedir):

```shell
rose suite-run --new
```

!!! warning
    This will overwrite all existing model output and logs for the same suite.

### Reload the suite

In some cases, the suite needs to be updated without necessarily having to stop it (e.g., after fixing a typo in a file). Updating an active suite is called a _reload_, where the suite is _re-installed_ and _Cylc_ is updated with the changes. This is similar to a _SOFT_ restart, except new changes are installed, so you may need to manually trigger failed tasks from the _Cylc_ GUI.

To reload a suite, run the following command from within the [suite directory](#suitedir):

```shell
rose suite-run --reload
```

#### Clean a suite

To remove all files and folders created by the suite within the `/scratch/$PROJECT/$USER/cylc-run/<suite-ID>` directory, run the following command from within the [suite directory](#suitedir):

```shell
rose suite-clean
```

Alternatively, you can achieve the same behaviour within a new submission of an experiment, by appending the `--new` option to the `rose suite-run` command:

```shell
rose suite-run --new
```

!!! warning
    Cleaning a suite folder will remove any non-archived data (i.e., output files, logs, executables, etc.) associated with the suite.

### {{ model }} output files

All the {{ model }} output files are available in the directory `/scratch/$PROJECT/$USER/cylc-run/<suite-ID>`. They are also symlinked in `~/cylc-run/<suite-ID>`.

The {{ model }} output data can be found in the directory `/scratch/$PROJECT/$USER/cylc-run/<suite-ID>/share/cycle`, grouped for each [cycle](#change-run-length).

**TODO: Further details on the output files.**

#### Cylc setup

[_Cylc_](https://cylc.github.io/cylc-doc/7.8.8/html/index.html) (pronounced ‘silk’) is a workflow manager that automatically executes tasks according to the model's main cycle script `suite.rc`. _Cylc_ controls how the job will be run and manages the time steps of each model component. It also monitors all tasks, reporting any errors that may occur.

To get the _Cylc_ setup required to run {{ model }}, execute the following commands:

```shell
module use /g/data/hr22/modulefiles
module load {{ cylc_module }}
```
<terminal-window data="input">
    <terminal-line>module use /g/data/hr22/modulefiles</terminal-line>
    <terminal-line>module load cylc7</terminal-line>
    <terminal-line data="output">Using the cylc session &lt;name&gt;.&lt;$USER&gt;.&lt;project&gt;.ps.gadi.nci.org.au</terminal-line>
    <terminal-line data="output"></terminal-line>
    <terminal-line data="output">Loading {{ cylc_module }}</terminal-line>
    <terminal-line data="output">&emsp;Loading requirement: mosrs-setup/2.0.1</terminal-line>
</terminal-window>

#### Rose setup {: #rose .no-toc }

[Rose](http://metomi.github.io/rose/doc/html/index.html) is a toolkit that can be used to view, edit, or run an ACCESS modelling suite.

By completing the [_Cylc_ setup](#cylc), also _Rose_ will be automatically available. Hence, no additional step is required.

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
    This step needs to be done once for each new session (e.g., _Gadi_ login, _ARE_ terminal window)

### Edit {{ model }} configuration

This section describes how to modify the {{ model }} configuration.

The modifications discussed in this section can change the way {{ model }} is run, or how specific [model components] are configured and coupled together.

In general, ACCESS modelling suites can be edited either by directly modifying the configuration files within the suite directory, or by using the [_Rose_ GUI](#rosegui).

!!! warning
    Unless you are an experienced user, directly modifying configuration files is usually discouraged to avoid encountering errors.

##### Rose GUI {: #rosegui }

To open the [_Rose_](#rose) GUI, run the following command from within the [suite directory](#suitedir): 
```
rose edit &
```

!!! tip
    The `&` is optional. It allows the terminal prompt to remain active while running the `Rose` GUI as a separate process in the background.

#### Change experiment start date

The experiment start date is controlled via the `EXPT_BASIS` configuration option, which takes an [ISO8601 datetime](https://cylc.github.io/cylc-doc/stable/html/tutorial/scheduling/datetime-cycling.html)

For example, to start the experiment at 00:00 on January 1st 1982, you would use the following configuration.

```
EXPT_BASIS='19820101T0000Z'
```

!!! warning
    Input data (in particular SST) ranges between 1979-2012. You will not be able to set `EXPT_BASIS` outside of this range.

#### Change experiment run length

The experiment run length is controlled via the `EXPT_RUNLEN` configuration option, which takes an [ISO8601 time duration](https://cylc.github.io/cylc-doc/stable/html/tutorial/scheduling/datetime-cycling.html#iso8601). For example, to set the run length to 12 months, you would do the following:

```
EXPT_RUNLEN='P12M'
```

{{ model }} outputs data in daily and monthly mean outputs, with each run chunked into months.

!!! warning
    Input data (in particular SST) ranges between 1979-2012. As such, `EXPT_BASIS + EXPT_RUNLEN` must fall within this range.

#### Change the land-surface initial conditions source

**TODO: Martin to describe**

## Get Help

If you have questions or need help regarding {{ model }}, consider creating a topic on the [ACCESS-Hive Forum](https://forum.access-hive.org.au).

For assistance on how to request help from ACCESS-NRI, follow the [guidelines on how to get help](/about/user_support/#still-need-help).