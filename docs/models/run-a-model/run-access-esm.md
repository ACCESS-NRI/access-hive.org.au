{% set model = "ACCESS-ESM1.5" %}
{% set github_configs = "https://github.com/ACCESS-NRI/access-esm1.5-configs" %}
[PBS job]: https://opus.nci.org.au/display/Help/4.+PBS+Jobs
[gadi]: https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview
[payu]: https://github.com/payu-org/payu
[model components]: /models/configurations/access-esm/#model-components
[model configurations]: /models/configurations/access-esm/#access-esm15

[:fontawesome-brands-github:{: class="twemoji icon-before-text"} {{ model }} configurations]({{github_configs}}){: class="text-card"}

# Run {{ model }}

## About

{{ model }} is a fully-coupled global climate model. More information is available in the [{{ model }} overview][model configurations].

The instructions below outline how to run {{ model }} using ACCESS-NRI's software deployment pipeline, specifically designed to run on the [National Computating Infrastructure (NCI)](https://nci.org.au/about-us/who-we-are) supercomputer [_Gadi_][gadi].

If you are unsure whether {{ model }} is the right choice for your experiment, take a look at the overview of [ACCESS Models](/models).

All {{model}} configurations are open source, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1")![CC icon](https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1){: style="height:1em;margin-left:0.2em;vertical-align:text-top;"}![BY icon](https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1){: style="height:1em;margin-left:0.2em;vertical-align:text-top;"} and available on [ACCESS-NRI GitHub]({{github_configs}}).

{{ model }} release notes are [available on the ACCESS-Hive Forum **TODO change with correct link**](https://forum.access-hive.org.au/t/access-om2-release-information/1602/) and are updated when new releases are made available.

## Prerequisites

### General prerequisites

Before running {{ model }}, you need to fulfil general prerequisites outlined in the [First Steps](/getting_started/first_steps) section.

### Model-specific prerequisites

- **Join the _vk83_ project at NCI**<br>
    To join this project, request membership on the [vk83](https://my.nci.org.au/mancini/project/vk83/join) NCI project page.<br>
    For more information on joining specific NCI projects, refer to [How to connect to a project](https://opus.nci.org.au/display/Help/How+to+connect+to+a+project).

- **Payu**<br>
    [Payu][payu] is a workflow management tool for running numerical models in supercomputing environments, for which there is extensive [documentation](https://payu.readthedocs.io/en/latest/).<br>
    _Payu_ on _Gadi_ is available through a dedicated `conda` environment in the _vk83_ project.<br>
    After joining the _vk83_ project, load the `payu` module:
    
        module use /g/data/vk83/modules
        module load payu

    To check that _payu_ is available, run:

        payu --version
    
    <terminal-window>
        <terminal-line data="input">payu --version</terminal-line>
        <terminal-line lineDelay="1000">1.1.3</terminal-line>
    </terminal-window>
    !!! warning
        _payu_ version >=1.1.3 is required
        TODO: Update this with the next version number for payu when it is released, as ESM1.5 configs will require the latest changes.

----------------------------------------------------------------------------------------

## Get {{ model }} configuration

All released {{ model }} configurations are available from the [{{ model }} configs]({{ github_configs }}) GitHub repository.<br>
Released configurations are tested and supported by ACCESS-NRI, as an adaptation of those originally developed by [CLEX CMS](https://github.com/coecms/access-esm).

For more information on {{ model }} configurations, check [{{model}}][model configurations] page.

More information about the available experiments and the naming scheme of the branches can also be found in the [{{ model }} configs]({{ github_configs }}) GitHub repository.

The first step is to choose a configuration from those available.<br>
TODO: check correct configuration until line 106 - replace with pre-industrial when ready
For example, if the required configuration is the 1° horizontal resolution with repeat-year _JRA55_ forcing (without BGC), then the branch to select is [`release-1deg_jra55_ryf`](https://github.com/ACCESS-NRI/access-om2-configs/tree/release-1deg_jra55_ryf).

To clone this branch to a location on _Gadi_, run:
    
    mkdir -p ~/access-esm1.5
    cd ~/access-esm1.5
    payu clone -b expt -B release-1deg_jra55_ryf {{ github_configs }} 1deg_jra55_ryf

In the example above the `payu clone` command clones the 1° repeat-year JRA55 configuration (` -B release-1deg_jra55_ryf`) 
to a new experiment branch (`-b expt`) to a directory named `1deg_jra55_ryf`.
!!! admonition tip
    Anyone using a configuration is advised to clone only a single branch (as shown in the example above) and not the entire repository.

<terminal-window>
    <terminal-line data="input">mkdir -p ~/access-om2</terminal-line>
    <terminal-line data="input">cd ~/access-om2</terminal-line>
    <terminal-line data="input" directory="~/access-om2">payu clone -b expt -B release-1deg_jra55_ryf https://github.com/ACCESS-NRI/access-om2-configs.git 1deg_jra55_ryf</terminal-line>
    <terminal-line lineDelay=1000>Cloned repository from https://github.com/ACCESS-NRI/access-om2-configs.git to directory: .../access-om/1deg_jra55_ryf</terminal-line>
    <terminal-line>Created and checked out new branch: expt</terminal-line>
    <terminal-line>laboratory path:  /scratch/.../access-om2</terminal-line>
    <terminal-line>binary path:  /scratch/.../access-om2/bin</terminal-line>
    <terminal-line>input path:  /scratch/.../access-om2/input</terminal-line>
    <terminal-line>work path:  /scratch/.../access-om2/work</terminal-line>
    <terminal-line>archive path:  /scratch/.../access-om2/archive</terminal-line>
    <terminal-line>Updated metadata. Experiment UUID: daeee7ff-07e4-4f93-823b-cb7c6e4bdb6e</terminal-line>
    <terminal-line>Added archive symlink to /scratch/.../access-om2/archive/1deg_jra55_ryf-expt-daeee7ff</terminal-line>
    <terminal-line>To change directory to control directory run:</terminal-line>
    <terminal-line data="input">cd 1deg_jra55_ryf</terminal-line>
</terminal-window>

!!! tip
    _payu_ uses branches to differentiate between different experiments in the same local git repository.<br>
    For this reason, it is recommended to always set the cloned branch name (`expt` in the example above) to something meaningful for the planned experiment.<br>
    For more information refer to this [payu tutorial](https://forum.access-hive.org.au/t/access-om2-payu-tutorial/1750#select-experiment-12).

----------------------------------------------------------------------------------------

## Run {{ model }} configuration
TODO: modify file paths for ACCESS-ESM
If you want to modify your configuration, refer to [Edit {{ model }} configuration](#edit-{{ model.lower() }}-configuration).

{{ model }} configurations run on [_Gadi_][gadi] through a [PBS job][PBS job] submission managed by [_payu_][payu].

The general layout of a _payu_-supported model run consists of two main directories:

- The _control_ directory contains the model configuration and serves as the execution directory for running the model (in this example, the cloned directory `~/access-om2/1deg_jra55_ryf`).
- The _laboratory_ directory, where all the model components reside. For {{ model }}, it is typically `/scratch/$PROJECT/$USER/access-om2`.

This separates the small text configuration files from the larger binary outputs and inputs. In this way, the _control_ directory can be in the `$HOME` directory (as it is the only filesystem actively backed-up on _Gadi_). The quotas for `$HOME` are low and strict, which limits what can be stored there, so it is not suitable for larger files.

The _laboratory_ directory is a shared space for all _payu_ experiments using the same model.<br>
Inside the _laboratory_ directory there are two subdirectories:

- `work` &rarr; a directory where _payu_ automatically creates a temporary subdirectory while the model is run. The temporary subdirectory gets created as part of a run and then removed after the run succeeds.
- `archive` &rarr; the directory where the output is stored following each successful run.

Within each of the above directories _payu_ automatically creates subdirectories uniquely named according to the experiment being run.<br>
_Payu_ also creates symbolic links in the _control_ directory pointing to the `archive` and `work` directories.

This design allows multiple self-resubmitting experiments that share common executables and input data to be run simultaneously.

!!! admonition warning
    Files on the `/scratch` drive, such as the _laboratory_ directory, might get deleted if not accessed for several days and the `/scratch` drive is limited in space. For these reasons, all model runs which are to be kept should be moved to `/g/data/` by enabling the _sync_ step in _payu_. To know more refer to [Syncing output data](#syncing-output-data). TODO: find out whether sync will be available at the time of ESM1.5 release.

### Run configuration

To run {{ model }} configuration execute the following command from within the *control* directory:

    payu run

This will submit a single job to the queue with a run length given by [`runtime`](# TODO: ADD LINK) in the `config.yaml` file.<br>



<terminal-window>
    <terminal-line data="input">cd ~/access-om2/1deg_jra55_ryf</terminal-line>
    <terminal-line directory="~/access-om2/1deg_jra55_ryf" data="input">payu run</terminal-line>
    <terminal-line>payu: warning: Job request includes 47 unused CPUs.</terminal-line>
    <terminal-line lineDelay=50>payu: warning: CPU request increased from 241 to 288</terminal-line>
    <terminal-line lineDelay=50>Loading input manifest: manifests/input.yaml</terminal-line>
    <terminal-line lineDelay=50>Loading restart manifest: manifests/restart.yaml</terminal-line>
    <terminal-line lineDelay=50>Loading exe manifest: manifests/exe.yaml</terminal-line>
    <terminal-line lineDelay=50>payu: Found modules in /opt/Modules/v4.3.0</terminal-line>
    <terminal-line lineDelay=50>
        qsub -q normal -P tm70 -l walltime=10800 -l ncpus=288 -l mem=1000GB -N 1deg_jra55_ryf -l wd -j n -v PAYU_PATH=/g/data/hh5/public/apps/miniconda3/envs/analysis3-23.10/bin,MODULESHOME=/opt/Modules/v4.3.0,MODULES_CMD=/opt/Modules/v4.3.0/libexec/modulecmd.tcl,MODULEPATH=/g/data/hr22/modulefiles:/g/data/hh5/public/modules:/etc/scl/modulefiles:/opt/Modules/modulefiles:/opt/Modules/v4.3.0/modulefiles:/apps/Modules/modulefiles -W umask=027 -l storage=gdata/hh5+gdata/vk83 -- /g/data/hh5/public/apps/miniconda3/envs/analysis3-23.10/bin/python3.10 /g/data/hh5/public/apps/miniconda3/envs/analysis3-23.10/bin/payu-run
    </terminal-line>
    <terminal-line lineDelay=50>&lt;job-ID&gt;.gadi-pbs</job-ID>></terminal-line>
</terminal-window>
!!! tip
    You can add the `-f` option to `payu run` to let the model run even if there is an existing non-empty `work` directory, created from a previous failed run or from running `payu setup`.

----------------------------------------------------------------------------------------

## Monitor {{ model }} runs
TODO: REPLACE CONFIG NAMES WITH ESM CONFIG


The `payu run` command prints out the PBS `job-ID` (formatted as `<9-digit-number>.gadi-pbs`), as the last line to the terminal.<br>
To print out information on the status of a specific job, you can execute the following command:
```
qstat <job-ID>
```
<terminal-window>
    <terminal-line data="input">qstat &lt;job-ID&gt;</terminal-line>
    <terminal-line linedelay=500>Job id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Use&nbsp;S Queue</terminal-line>
    <terminal-line linedelay=0>---------------------  ---------------- ----------------  -------- - -----</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID&gt;.gadi-pbs&nbsp;&nbsp;1deg_jra55_ryf&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-window>

To show the status of all your submitted [PBS jobs][PBS job], you can execute the following command:
```
qstat -u $USER
```

<terminal-window>
    <terminal-line data="input">qstat -u $USER</terminal-line>
    <terminal-line linedelay=500>Job id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Use&nbsp;S Queue</terminal-line>
    <terminal-line linedelay=0>---------------------  ---------------- ----------------  -------- - -----</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;1deg_jra55_ryf&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-window>

The default name of your job is the name of the _payu_ _control_ directory (`1deg_jra55_ryf` in the example above).<br>
This can be changed by altering the `jobname` in the [PBS resources section](#modify-pbs-resources) of the `config.yaml` file.

_S_ indicates the status of your run, where:

- _Q_ &rarr; Job waiting in the queue to start
- _R_ &rarr; Job running
- _E_ &rarr; Job ending
- _H_ &rarr; Job on hold

If there are no jobs listed with your `jobname` (or if no job is listed), your run either successfully completed or was terminated due to an error.<br>
For more information, check [NCI documentation](https://opus.nci.org.au/display/Help/FAQ+1%3A+Why+My+Jobs+are+NOT+Running).

### Stop a run

If you want to manually terminate a run, you can do so by executing:
```
qdel <job-ID>
```
which kills the specified job without waiting for it to complete.

!!! tip
    If you started an {{ model }} run using the `-n` option (e.g., to [run the model for more than 5 years](#run-configuration-for-more-than-5-years)), but subsequently decide not to keep running after the current process completes, you can create a file called `stop_run` in the _control_ directory.<br>
    This will prevent _payu_ from submitting another job.

### Error and output log files

#### PBS output files
When the model completes a run, PBS writes the standard output and error streams to two files inside the _control_ directory: `<jobname>.o<job-ID>` and `<jobname>.e<job-ID>`, respectively.

These files usually contain logs about _payu_ tasks, and give an overview of the resources used by the job.<br>
To move these files to the `archive` directory, use the following commmand:
```
payu sweep
```

#### Model log files

While the model is running, _payu_ saves the model standard output and error streams in the `access-om2.out` and `access-om2.err` files inside the _control_ directory, respectively.<br>
You can examine the contents of these files to check on the status of a run as it progresses (or after a failed run has completed).

!!! warning
    At the end of a successful run these log files are archived to the `archive` directory and will no longer be found in the _control_ directory. If they remain in the _control_ directory after the PBS job for a run has completed it means the run has failed.

### Model Live Diagnostics

ACCESS-NRI developed the [Model Live Diagnostics](/model_evaluation/model_diagnostics) framework to check, monitor, visualise, and evaluate model behaviour and progress of ACCESS models currently running on _Gadi_.<br>
For a complete documentation on how to use this framework, check the [Model Diagnostics documentation](https://med-live-diagnostics.readthedocs.io/en/latest/index.html).

### Trouble-shooting

If _payu_ doesn't run correctly for some reason, a good first step is to run the following command from within the _control_ directory:

    payu setup

This command will: 
  
  - create the _laboratory_ and `work` directories based on the experiment configuration
  - generate manifests
  - report useful information to the user, such as the location of the _laboratory_ where the `work` and `archive` directories are located

TODO: UPDATE PATHS FOR ESM

<terminal-window>
    <terminal-line data="input">payu setup</terminal-line>
    <terminal-line>laboratory path: /scratch/$PROJECT/$USER/access-om2</terminal-line>
    <terminal-line>binary path: /scratch/$PROJECT/$USER/access-om2/bin</terminal-line>
    <terminal-line>input path: /scratch/$PROJECT/$USER/access-om2/input</terminal-line>
    <terminal-line>work path: /scratch/$PROJECT/$USER/access-om2/work</terminal-line>
    <terminal-line>archive path: /scratch/$PROJECT/$USER/access-om2/archive</terminal-line>
    <terminal-line>Loading input manifest: manifests/input.yaml</terminal-line>
    <terminal-line>Loading restart manifest: manifests/restart.yaml</terminal-line>
    <terminal-line>Loading exe manifest: manifests/exe.yaml</terminal-line>
    <terminal-line>Setting up atmosphere</terminal-line>
    <terminal-line>Setting up ocean</terminal-line>
    <terminal-line>Setting up ice</terminal-line>
    <terminal-line>Setting up access-om2</terminal-line>
    <terminal-line>Checking exe and input manifests</terminal-line>
    <terminal-line>Updating full hashes for 3 files in manifests/exe.yaml</terminal-line>
    <terminal-line>Creating restart manifest</terminal-line>
    <terminal-line>Writing manifests/restart.yaml</terminal-line>
    <terminal-line>Writing manifests/exe.yaml</terminal-line>
</terminal-window>

This can help to isolate issues such as permissions problems accessing files and directories, missing files or malformed/incorrect paths.

----------------------------------------------------------------------------------------

## {{ model }} outputs

At the end of a successful model run, output files, restart files and log files are moved from the `work` directory to the `archive` directory.<br>
Symbolic links to these directories are also provided in the _control_ directory for convenience.

If a model run is unsuccessful, the `work` directory is left untouched to facilitate the identification of the cause of the model failure.

Outputs and restarts are stored in subfolders within the `archive` directory, subdivided for each run of the model.<br>
Output and restart folders are called `outputXXX` and `restartXXX`, respectively, where _XXX_ is the run number starting from `000`.

Model components are separated into subdirectories within the output and restart directories.

TODO: UPDATE PATH FOR ESM1.5
<terminal-window>
    <terminal-line data="input">cd ~/access-om2/1deg_jra55_ryf</terminal-line>
    <terminal-line data="input" directory="~/access-om2/1deg_jra55_yaf<">ls</terminal-line>
    <terminal-line class="ls-output-format">output000 pbs_logs restart000</terminal-line>
</terminal-window>

----------------------------------------------------------------------------------------

## Edit {{ model }} configuration

This section describes how to modify {{ model }} configuration.<br>
The modifications discussed in this section can change the way {{ model }} is run by _payu_, or how its specific [model components] are configured and coupled together.

The `config.yaml` file located in the _control_ directory is the _Master Configuration_ file, which controls the general model configuration. It contains several parts, some of which it is more likely will need modification, and others which are rarely changed without having a deep understanding of how the model is configured.

To find out more about configuration settings for the `config.yaml` file, refer to [how to configure your experiment with payu](https://payu.readthedocs.io/en/latest/config.html).

### Change run length

One of the most common changes is to adjust the duration of the model run.<br>
For example, when debugging changes to a model, it is common to reduce the run length to minimise resource consumption and return faster feedback on changes.

The length of an {{model}} run is controlled by the `runtime` settings in the `config.yaml` file:

```
    runtime:
        years: 1
        months: 0
        days: 0
```

For example, to make the model run for a single month, change the `runtime` to 
```
    runtime:
        years: 0
        months: 1
        days: 0
```
!!! warning
    The atmospheric component of {{ model }} is configured to produce restart files at the end of each month. To ensure that a valid restart file is produced at the end of a run, `runtime` setting for {{ model }} should total an integer number of months 

!!! warning
    The _run length_ (controlled by [`runtime`](#runtime)) can be different from the _total experiment length_. While `runtime` can be reduced, it should not be increased to more than 1 year to avoid errors. For more information about the difference between _run length_ and _total experiment length_, or how to run the model for more than 1 year, refer to the section [Understand `runtime`, `runspersub`, and `-n` parameters](#run-configuration-for-multiple-years). TODO: UPDATE LINK'

If you want to run {{ model }} configuration for multiple _run lengths_ (controlled by [`runtime`](#runtime) in the `config.yaml` file), use the option `-n`:
TODO: DOES THE RUNTIME LINK WORK?

```
payu run -f -n <number-of-runs>
```

This will run the configuration `number-of-runs` times with a _total experiment length_ of `runtime * number-of-runs`. The number of consecutive [PBS jobs][PBS job] submitted to the queue depends on the [`runspersub`](#runspersub) value specified in the config.yaml file.

### Understand `runtime`, `runspersub`, and `-n` parameters

With the correct use of [`runtime`](#runtime), [`runspersub`](#runspersub) and `-n` parameters, you can have full control of your run.<br>

- `runtime` defines the _run length_.
- `runspersub` defines the maximum number of runs for every [PBS job] submission.
- `-n` sets the number of runs to be performed.

Now some practical examples:

- **Run 20 years of simulation with resubmission every 5 years**<br>
    To have a _total experiment length_ of 20 years with a 5-year resubmission cycle, leave [`runtime`](#runtime) as the default value of `1 year` and set [`runspersub`](#runspersub) to `5`. Then, run the configuration with `-n` set to `20`:
    ```
    payu run-f -n 20
    ```
    This will submit subsequent jobs for the following years: 1 to 5, 6 to 10, 11 to 15, and 16 to 20, which is a total of 4 PBS jobs.

- **Run 7 years of simulation with resubmission every 3 years**<br>
    To have a _total experiment length_ of 7 years with a 3-year resubmission cycle, leave [`runtime`](#runtime) as the default value of `1 year` and set [`runspersub`](#runspersub) to `3`. Then, run the configuration with `-n` set to `7`:
    ```
    payu run -f -n 7
    ```
    This will submit subsequent jobs for the following years: 1 to 3, 4 to 6, and 7, which is a total of 3 PBS jobs.

- **Run 3 months and 10 days of simulation in a single submission**<br>
    To have a _total experiment length_ of 3 months and 10 days in a single submission, set the [`runtime`](#runtime) as follows:
    ```yaml
    years: 0
    months: 3
    days: 10
    ```
    Set [`runspersub`](#runspersub) to `1` (or any value > 1) and run the configuration without `-n` option (or with `-n` set to `1`):
    ```
    payu run -f
    ```

- **Run 1 year and 4 months of simulation with resubmission every 4 months**<br>
    To have a _total experiment length_ of 1 year and 4 months (16 months), you need to split it into multiple runs. For example, 4 runs of 4 months each. In this case, set the [`runtime`](#runtime) as follows:
    ```yaml
    years: 0
    months: 4
    days: 0
    ```
    Since the _run length_ is set to 4 months, set [`runspersub`](#runspersub) to `1` to resubmit your jobs every 4 months (i.e. every run). Then, run the configuration with `-n` set to `4`:
    ```
    payu run -f -n 4
    ```



### Modify PBS resources

If the model has been altered and needs more time to complete, more memory, or needs to be submitted under a different NCI project, you will need to modify the following section in the `config.yaml`:

TODO: update with esm config info

```yaml
# If submitting to a different project to your default, uncomment line below
# and replace PROJECT_CODE with appropriate code. This may require setting shortpath
# project: PROJECT_CODE

# Force payu to always find, and save, files in this scratch project directory
# shortpath: /scratch/PROJECT_CODE

queue: normal
walltime: 3:00:00
jobname: 1deg_jra55_ryf
mem: 1000GB
```

TODO: Update with a relevant project

These lines can be edited to change the [PBS directives](https://opus.nci.org.au/display/Help/PBS+Directives+Explained) for the [PBS job][PBS job].

For example, to run {{ model }} under the `ol01` project (COSIMA Working Group), uncomment the line beginning with `# project` by deleting the `#` symbol and replace `PROJECT_CODE` wih `ol01`:

```yaml
project: ol01
```

!!! warning
    If projects other than `ol01` are used to run {{ model }} configuration, then the `shortpath` field also needs to be uncommented and the path to the desired `/scratch/PROJECT_CODE` added.<br>
    Doing this will make sure the same `/scratch` location is used for the _laboratory_, regardless of which project is used to run the experiment.
    <br><br>
    To run {{ model }}, you need to be a member of a project with allocated _Service Units (SU)_. For more information, check [how to join relevant NCI projects](/getting_started/first_steps#join-relevant-nci-projects).

### Syncing output data
TODO: Wait for decisions/updates on ESM1.5 syncing. If not part of release, delete this section.

The _laboratory_ directory is typically under the `/scratch` storage on _Gadi_, where [files are regularly deleted once they have been unaccessed for a period of time](https://opus.nci.org.au/pages/viewpage.action?pageId=156434436). For this reason climate model outputs need to be moved to a location with longer term storage.<br>
On _Gadi_, this is typically in a folder under a project code on `/g/data`.  

_Payu_ has built-in support to sync outputs, restarts and a copy of the _control_ directory git history to another location.<br>
This feature is controlled by the following section in the `config.yaml` file: 
```yaml
# Sync options for automatically copying data from ephemeral scratch space to 
# longer term storage
sync:
    enable: False # set path below and change to true
    path: none # Set to location on /g/data or a remote server and path (rsync syntax)
    exclude:
      - '*.nc.*'
      - 'iceh.????-??-??.nc'
```
To enable syncing, change `enable` to `True`, and set `path` to a location on `/g/data`, where _payu_ will copy output and restart folders. A sensible `path` could be: `/g/data/$PROJECT/$USER/{{model}}/experiment_name/`.

!!! admonition tip
    The {{model}} default configurations include a [userscript](#userscripts) in the _sync_ step that concatenates daily history/diagnostic output from the Sea-Ice model (CICE5) into monthly files. This speeds up access and saves storage space, but will only run if _sync_ is enabled.

### Saving model restarts

TODO: Wait for finalisation of date based restarts for ESM
{{ model }} outputs restart files after every run to allow for subsequent runs to start from a previously saved model state.<br>
Restart files can occupy a significant amount of disk space, and keeping a lot of them is often not necessary.

The `restart_freq` field in the `config.yaml` file specifies a strategy for retaining restart files.<br>
This can either be a number (in which case every _nth_ restart file is retained), or one of the following pandas-style datetime frequencies:

- `YS` &rarr; start of the year
- `MS` &rarr; start of the month
- `D` &rarr; day
- `H` &rarr; hour
- `T` &rarr; minute
- `S` &rarr; second

For example, to preserve the ability to restart {{ model }} every 50 model-years, set:
```yaml
restart_freq: '50YS'
```

The most recent sequential restarts are retained, and only deleted after a permanently archived restart file has been produced.

For more information, check [_payu_ Configuration Settings documentation](https://payu.readthedocs.io/en/latest/config.html#model).

### Other configuration options

!!! warning
    The following sections in the `config.yaml` file control configuration options that are rarely modified, and often require a deeper understanding of how {{ model }} is structured to be safely changed.

#### Model configuration

This section tells _payu_ which driver to use for the main model (`access` refers to {{ model }}).  

```yaml
model: access
```


#### Submodels

{{ model }} is a coupled model deploying multiple submodels (i.e. [model components]).

This section specifies the submodels and configuration options required to execute {{ model }} correctly.

Each submodel contains additional configuration options that are read in when the submodel is running. These options are specified in the subfolder of the _control_ directory, whose name matches the submodel's `name` (e.g., configuration options for the `atmosphere` submodel are in the `~/access-esm/esm-pre-industrial/atmosphere` directory).

#TODO: UPDATE WITH UPDATED ESM1.5 CONFIG FILE.

??? code "Expand to show the full `submodels` section"

    ```yaml
    submodels:
          - name: atmosphere
            model: um
            ncpus: 192
            exe: /g/data/access/payu/access-esm/bin/coe/um7.3x
            input:
              - /g/data/access/payu/access-esm/input/pre-industrial/atmosphere
              - /g/data/access/payu/access-esm/input/pre-industrial/start_dump<br>
          - name: ocean
            model: mom
            ncpus: 180
            exe: /g/data/access/payu/access-esm/bin/coe/mom5xx
            input:
              - /g/data/access/payu/access-esm/input/pre-industrial/ocean/common
              - /g/data/access/payu/access-esm/input/pre-industrial/ocean/pre-industrial<br>
          - name: ice
            model: cice
            ncpus: 12
            exe: /g/data/access/payu/access-esm/bin/coe/cicexx
            input:
              - /g/data/access/payu/access-esm/input/pre-industrial/ice<br>
          - name: coupler
            model: oasis
            ncpus: 0
            input:
              - /g/data/access/payu/access-esm/input/pre-industrial/coupler
    ```

#### Collate

Rather than outputting a single diagnostic file over the whole model horizontal grid, the ocean component [MOM](/models/model_components/ocean/#modular-ocean-model-mom) typically generates diagnostic outputs as tiles, each of which spans over a portion of the model horizontal grid.

The `collate` section in the `config.yaml` file controls the process that combines these smaller files into a single output file.

TODO: UPDATE WITH CORRECT DATA FOR AN ESM1.5 CONFIG
```yaml
collate:
    restart: true
    walltime: 1:00:00
    mem: 30GB
    ncpus: 4
    queue: normal
    exe: /g/data/ik11/inputs/access-om2/bin/mppnccombine
```
Restart files are typically tiled in the same way and will also be combined together if the `restart` field is set to `true`.

#### Runlog

```yaml
runlog: true
```
When running a new configuration, _payu_ automatically commits changes with `git` if `runlog` is set to `true`.

!!! warning
    This should not be changed as it is an essential part of the provenance of an experiment.<br>
    _payu_ updates the manifest files for every run, and relies on `runlog` to save this information in the `git` history, so there is a record of all inputs, restarts, and executables used in an experiment.

#### Platform

```yaml
platform: 
    nodesize: 48
```
Set platform-specific default parameters.<br>
In the example above, the default number of cpus per node is set to 48. 
!!! warning
    This might need changing if the configuration is run on hardware with different node structure.

#### Userscripts
TODO: UPDATE WITH RELEVANT ESM1.5 USERSCRIPTS... WE PROBABLY WON'T BE CALLING ANY IN THE PI RUN...
```yaml
userscripts:
    error: tools/resub.sh
    run: rm -f resubmit.count
    sync: /g/data/vk83/apps/om2-scripts/concatenate_ice/concat_ice_daily.sh 
```

A dictionary to run scripts or subcommands at various stages of a _payu_ submission.

- `error` gets called if the model does not run correctly and returns an error code.
- `run` gets called after the model execution, but prior to model output archive.
- `sync` gets called at the start of the sync pbs job.

For more information about specific `userscripts` fields, check the relevant section of [_payu_ Configuration Settings documentation](https://payu.readthedocs.io/en/latest/config.html#postprocessing).


### Postscripts
TODO: ADD POSTSCRIPT EXAMPLE ONCE WE MOVE CONVERSION OVER THERE. 

#### Miscellaneous

The following configuration settings should never require changing:

```yaml
stacksize: unlimited
qsub_flags: -W umask=027
```

### Edit a single {{ model }} component configuration

Each of [{{ model }} components][model components] contains additional configuration options that are read in when the model component is running.<br>
These options are typically useful to modify the physics used in the model, the input data, or the model variables saved in the output files.

TODO: UPDATE WITH CORRECT ESM PATH ONCE NAMING SCHEME CHOSEN

These configuration options are specified in files located inside a subfolder of the _control_ directory, named according to the submodel's `name` specified in the `config.yaml` `submodels` section (e.g., configuration options for the _ocean_ component are in the `~/access-om2/1deg_jra55_ryf/ocean` directory).<br>
To modify these options please refer to the User Guide of the respective model component.

## Get Help

If you have questions or need help regarding {{ model }}, consider creating a topic in the [COSIMA category of the ACCESS Hive Forum](https://forum.access-hive.org.au/c/cosima/29).<br>
For assistance on how to request help from ACCESS-NRI, follow the [guidelines on how to get help](/about/user_support/#still-need-help).

<custom-references>
- [https://github.com/access-nri/access-esm1.5](https://github.com/access-nri/access-esm1.5)
- [https://opus.nci.org.au/](https://opus.nci.org.au/)
- [https://github.com/coecms/esm-pre-industrial](https://github.com/coecms/esm-pre-industrial)
- [https://payu.readthedocs.io/en/latest/usage.html](https://payu.readthedocs.io/en/latest/usage.html)
</custom-references>
