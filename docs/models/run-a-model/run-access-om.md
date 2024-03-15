{% set model = "ACCESS-OM2" %}

# Run {{ model }}

## Prerequisites

### General prerequisites

Before running {{ model }}, you need to fulfil general prerequisites outlined in the [First Steps](/getting_started/first_steps) section.

If you are unsure whether {{ model }} is the right choice for your experiment, take a look at the overview of [ACCESS Models](/models).

### Model-specific prerequisites

**Join the _vk83_ and _qv56_ projects at NCI** 

To join these projects request membership on the respective [vk83](https://my.nci.org.au/mancini/project/vk83/join) and [qv56](https://my.nci.org.au/mancini/project/qv56/join) NCI project pages.

For more information on how to join specific NCI projects, please refer to [How to connect to a project](https://opus.nci.org.au/display/Help/How+to+connect+to+a+project").

**Payu**

[_Payu_](https://github.com/payu-org/payu) is a workflow management tool for running numerical models in supercomputing environments for which there is extensive [documentation](https://payu.readthedocs.io/en/latest/). 

_Payu_ on _Gadi_ is available through a dedicated `conda` environment in the _vk83_ project.

After joining the _vk83_ project load the _payu_ environment:

    module use /g/data/vk83/modules
    module load payu

To check that `payu` is available, run:

    payu --version

<terminal-window>
<terminal-line data="input">payu --version</terminal-line>
<terminal-line lineDelay="1000">1.1.1</terminal-line>
</terminal-window>

**Note:** `payu` version >=1.1 is required

----------------------------------------------------------------------------------------

## Get {{ model }} configuration

All released {{ model }} configurations are available from the [ACCESS-OM2 configs] GitHub repository. Released configurations are tested and supported by ACCESS-NRI.  ACCESS-NRI has adapted these model configurations from those originally developed by [COSIMA]. 
 
There are global configurations for three resolutions: 1°, 0.25°, 0.1°. For each resolution there are two options of atmospheric forcing: Repeat Year Forcing (RYF) and Interannual Forcing (IAF). Each configuration also has a biogeochemical (BGC) configuration if this is required. Note the BGC experiments are slower and so consume more resources, both compute time and generally also disk space. 

Each configuration is stored as a separate specially named branch in the [ACCESS-OM2 configs] GitHub repository.
Anyone using a configuration is advised to clone only a single branch and not attempt to keep this structure. 
The [ACCESS-OM2 configs] repo has more information about the available experiments and the naming scheme of the branches.

The first step is to choose a configuration from those available. For example, if the 1° horizontal resolution configuration with repeat-year JRA55 forcing (without bgc) is the required configuration then the [`release-1deg_jra55_ryf`](https://github.com/ACCESS-NRI/access-om2-configs/tree/release-1deg_jra55_ryf) branch is the correct configuration.

The next step is to clone this branch to a location on _Gadi_:

<terminal-window>
    <terminal-line data="input">mkdir -p ~/access-om</terminal-line>
    <terminal-line data="input">cd ~/access-om</terminal-line>
    <terminal-line data="input" directory="~/access-om">payu clone -b expt -B release-1deg_jra55_ryf https://github.com/COSIMA/1deg_jra55_ryf.git 1deg_jra55_ryf</terminal-line>
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
    <terminal-line>    cd 1deg_jra55_ryf</terminal-line>
</terminal-window>

In the example above the `payu clone` command clones the 1° repeat-year JRA55 configuration (` -B release-1deg_jra55_ryf`) 
to a new experiment branch (`-b expt`) to a directory named `1deg_jra55_ryf`: 

    payu clone -b expt -B release-1deg_jra55_ryf https://github.com/ACCESS-NRI/access-om2-configs.git 1deg_jra55_ryf

!!! note

    `payu` uses branches to differentiate between different experiments the same git repository. So it is recommended to always change the branch name you clone into to something meaningful for the planned experiment. See the [`payu` tutorial](https://forum.access-hive.org.au/t/access-om2-payu-tutorial/1750#select-experiment-12) for more information.

----------------------------------------------------------------------------------------

## Running an {{ model }} configuration

{{ model }} configurations run on [_Gadi_](https://opus.nci.org.au/display/Help/How+to+connect+to+a+project) through a [PBS Job][PBS Jobs] submission managed by `payu`.

The general layout of a `payu`-supported model run consists of two main directories:

- The **laboratory** directory, where all the model components reside. For {{ model }}, it is typically `/scratch/$PROJECT/$USER/access-om2`.

- The **control** directory, where the model configuration resides and from where the model is run (in this example, the cloned directory `~/access-om/1deg_jra55_ryf`).

This separates the small text configuration files from the larger binary outputs and inputs. In this way, the _control_ directory can be in the `$HOME` directory (as it is the only filesystem actively backed-up on _Gadi_). The quotas for `$HOME` are low and strict, which limits what can be stored there, so it is not suitable for larger files.

Furthermore, this separation allows multiple self-resubmitting experiments that share common executables and input data to be run simultaneously.

To setup the _laboratory_ directory, from the _control_ directory run:

    payu init

This creates the _laboratory_ directory, together with relevant subdirectories, depending on the configuration. 
The main subdirectories of interest are: 

- `work` &rarr; a temporary directory where the model is run. It gets created as part of a run and then removed after the run succeeds.
- `archive` &rarr; the directory where output is stored after each run.

<terminal-window>
<terminal-line data="input" directory="~/access-om/1deg_jra55_ryf">payu init</terminal-line>
<terminal-line>laboratory path:  /scratch/$PROJECT/$USER/access-om2</terminal-line>
<terminal-line>binary path:  /scratch/$PROJECT/$USER/access-om2/bin</terminal-line>
<terminal-line>input path:  /scratch/$PROJECT/$USER/access-om2/input</terminal-line>
<terminal-line>work path:  /scratch/$PROJECT/$USER/access-om2/work</terminal-line>
<terminal-line>archive path:  /scratch/$PROJECT/$USER/access-om2/archive</terminal-line>
</terminal-window>

### Run configuration

To run an {{ model }} configuration: 

    payu run -f

This will submit a single job to the queue with a run length of `restart_period`.  `restart_period` is defined in the `accessom2.nml` file in the _control_ directory.

!!! note

    The `-f` option ensures that `payu` will run even if there is an existing non-empty `work` directory created from a previous failed run or from running `payu setup`.

### Run configuration multiple times

If you want to run an {{ model }} configuration multiple times automatically use the option `-n`:

    payu run -f -n <number-of-runs>

This will run `number-of-runs` times with a total length of `restart_period * number-of-runs`, where `restart_period` is the length of each model run. 

For example, to run a configuration for a total of 50 years with `restart_period`  of 5 years the `number-of-runs` should be set to `10`:

    payu run -f -n 10

!!! note

    `restart_period` is the configuration option that sets how long the model will run. See [how to change run length](#change-run-length) for a description of where this is set and how to change it. 

## Monitor {{ model }} runs

`payu run` reports the PBS `job-ID`, e.g. `110020843.gadi-pbs`, as the last line to the terminal. `qstat` can be used to query the status of the job, e.g.

<terminal-window>
    <terminal-line data="input">qstat 110021035</terminal-line>
    <terminal-line linedelay=500>qstat 110021035</terminal-line>
    <terminal-line linedelay=500>Job id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Use&nbsp;S Queue</terminal-line>
    <terminal-line linedelay=0>---------------------  ---------------- ----------------  -------- - -----</terminal-line>
    <terminal-line linedelay=0>&lt;110021035&gt;.gadi-pbs&nbsp;&nbsp;1deg_jra55_ryf&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-window>

To show the status of all your submitted [PBS jobs]:

<terminal-window>
    <terminal-line data="input">qstat -u $USER</terminal-line>
    <terminal-line linedelay=500>Job id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Use&nbsp;S Queue</terminal-line>
    <terminal-line linedelay=0>---------------------  ---------------- ----------------  -------- - -----</terminal-line>
    <terminal-line linedelay=0>&lt;110021035&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;1deg_jra55_ryf&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;000000000&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;000000000&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-window>

 The default name of the your job is the name of the _payu_ _control_ directory, in this example `1deg_jra55_ryf`. This can be changed by altering the `jobname` in [set in the `config.yaml`](#modify-pbs-resources).

_S_ indicates the status of your run, where:

- _Q_ &rarr; Job waiting in the queue to start
- _R_ &rarr; Job running
- _E_ &rarr; Job ending

If there are no jobs listed with your `jobname` (or if no job is listed), your run either successfully completed or was terminated due to an error.

### PBS output files

When the model completes PBS writes the standard outout and error streams to two files into the _control_ directory: `jobname.o<job-ID>` and `jobname.e<job-ID>` respectively. This is terminal output that isn't otherwise redirected into model log files.

You can archive these files using payu sweep which moves them to the archive directory.

### Stop a run

If you want to manually terminate a run, you can do so by executing:

    qdel job-ID

Which will kill the current job without waiting for it to complete. If you have used the `-n` option, but decide you no longer wish to keep running after the current process completes, you can create a file called `stop_run` in the _control_ directory, and this will prevent `payu` from submitting another job.

### Error and output log files

While the model is running, _payu_ saves the model standard output and standard error in the `access-om2.out` and `access-om2.err` log files in the _control_ directory. You can examine the contents of these files to check on the status of a run as it progresses.

At the end of a successful run these log files are archived. If they remain in the _control_ directory after the PBS job for a run has completed this is an indication the run has failed.


## {{ model }} outputs

At the end of a successful model run, output files, restart files and log files are moved from the work directory to the archive directory. A symbolic link in the control directory to a directory in the _laboratory_ (`/scratch/$PROJECT/$USER/access-om2/archive`) is provided for convenience.

If a model run is unsuccessful the `work` directory is left untouched to facilitate "run forensics" to determine the cause of the model failure.

Outputs and restarts are stored in subfolders within the `archive`, subdivided for each run of the model.

Output folders are `outputXXX` and restart folders `restartXXX`, where _XXX_ is the run number starting from `000`.

Model components are separated into subdirectories within the output and restart directories.

<terminal-window>
<terminal-line data="input">cd ~/access-om/1deg_jra55_yaf<</terminal-line>
<terminal-line data="input" directory="~/access-om/1deg_jra55_yaf<">ls</terminal-line>
<terminal-line class="ls-output-format">output000 pbs_logs restart000</terminal-line>
</terminal-window>

### Model Live Diagnostics

ACCESS-NRI developed the [Model Live Diagnostics](/model_evaluation/#model-live-diagnostics) framework to check, monitor, visualise, and evaluate model behaviour and progress of ACCESS models currently running on _Gadi_.

For a complete documentation on how to use this framework, check the [Model Diagnostics documentation](https://med-live-diagnostics.readthedocs.io/en/latest/index.html).

### Trouble-shooting

If `payu` doesn't run correctly for some reason a good first step step, from within the _control_ directory, is to run:

    payu setup -f

This will prepare the model run: create the ephemeral `work` directory based on the experiment configuration, generate manifests and report some useful information to the user, such as the location of the _laboratory_ where the `work` and `archive` directories are located.
<terminal-window>
<terminal-line data="input">payu setup -f</terminal-line>
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

!!! note

    By default `payu run` will not proceed if there is an existing `work` directory. So after `payu setup` either `payu sweep` before attempting to run the configuration, or use `payu run -f`

---

## Modifying an {{ model }} configuration

Once you are comfortable that you can clone and run an existing configuration it is often the case that you will want to modify the configuration depending on your science goals.

This section describes the model configuration and how to modify it. 

Modifications can be to the way the model is run by `payu`, or can change the way specific model components are configured, or the coupling between them. Sometimes changes are required to both, if the model component changes require a change to the resources needed for the model to complete.

The `config.yaml` file located in the _control_ directory, is the _Master Configuration_ file, which controls the general model configuration. It contains several parts, some of which it is more likely will need modification, and others are rarely changed without significant understanding of how the model is configured.

### Change run length

One of the most common changes is to how long the model runs. For example it is common when debugging changes to a model to want to reduce the run length to reduce the amount of resources wasted and get faster feedback on changes.

To change the run length, edit the `restart_period` field in the `&date_manager_nml` section of the `~/access-om/1deg_jra55_iaf/accessom2.nml` file:

    &date_manager_nml
        forcing_start_date = '1958-01-01T00:00:00'
        forcing_end_date = '2019-01-01T00:00:00'<br>
        ! Runtime for a single segment/job/submit, format is years, months, seconds,
        ! two of which must be zero.
        restart_period = 5, 0, 0
    &end

For example, to make the model run for only 1 month change `restart_period` to

    restart_period = 0, 1, 0

!!! note

    While `restart_period` can be reduced, it should not be increased to more than 5 years to avoid errors. For more information about the difference between run length and total experiment length, or how to run the model for more than 5 years, refer to the section [Run configuration for multiple years](#run-configuration-for-multiple-years").


### Modify PBS resources

If the model has been altered and needs longer to complete, more memory, or you want to change which queue it uses then this is the part of `config.yaml` you need to modify:

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

These lines can be edited to change the [PBS directives](https://opus.nci.org.au/display/Help/PBS+Directives+Explained") for the [PBS job][PBS jobs].

For example, to run {{ model }} under the `ol01` project (COSIMA Working Group), uncomment the line beginning with `# project` by deleting the `#` symbol and replace `PROJECT_CODE` wih `ol01`:

```yaml
project: ol01
```

If other compute projects will be used to run a configuration then the `shortpath` will also need to be uncommented and the path to the desired `/scratch/PROJECT_CODE` added. Doing this will make sure the same `/scratch` location is used for the _laboratory_ regardless of which project is used to run the experiment.

!!! note

    To run {{ model }}, you need to be a member of a project with allocated _Service Units_ (SU). For more information, check [how to join relevant NCI projects](https://access-hive.org.au/getting_started/first_steps/#join-relevant-nci-projects)

### Syncing output data

As [discussed above](#running-an-access-om2-configuration) the _laboratory_ directory is typically in a directory on ephemeral `/scratch` storage where [files are regularly deleted once they have been unaccessed for a period of time](https://opus.nci.org.au/pages/viewpage.action?pageId=156434436). For this reason climate model outputs need to be moved to a location with longer term storage. On _gadi_ this is typically under a project code on `/g/data`.  

`payu` has in-built support to sync outputs, restarts and a copy of the _control_ directory git history to another location. To do this modify this section of the `config.yaml` shown below: change `enable` to `True`, and set `path` to a location on `/g/data`. 

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

### Saving model restarts

The model outputs restart files after every run so the model can then run again from the saved model state.

Restart files can occupy a significant amount of disk space and it isn't necessary to be able to restart the model at every  point where the model was stopped during a run.  The `restart_freq` specifies a strategy for what restart files are retained. 

This can either be a number, which retains every _nth_ numbered restart, or a pandas style date-time frequency alias. For example to preserve the ability to restart the model every 50 model run years:
```yaml
restart_freq: 50Y
```
The most recent sequential restarts are retained, and only deleted only after a permanently archived restart has been produced.

See the [documentation for more detail](https://payu.readthedocs.io/en/latest/config.html#model).

### Other rarely modified configuration options

#### Model configuration

This tells `payu` which driver to use for the main model configuration (`access-om2`) and the location of all inputs that are common to all the component models, or submodels.

```yaml
name: common
model: access-om2
input: /g/data/ik11/inputs/access-om2/input_20201102/common_1deg_jra55
```
The `name` field here is not actually used for the configuration run so you can safely ignore it.

#### Submodels

{{ model }} is a coupled model deploying multiple submodels (i.e. [model components]).

This section specifies the submodels and configuration options required to execute the model correctly.

Each submodel contains additional configuration options that are read in when the submodel is running. These options are specified in the subfolder of the _control_ directory, whose name matches the submodel's _name_ (e.g., configuration options for the `ocean` submodel are in the `~/access-om/1deg_jra55_iaf/ocean` directory).

??? note "Expand for detail"

    ```yaml
    submodels:
        - name: atmosphere
        model: yatm
        exe: /g/data/vk83/apps/spack/0.20/release/linux-rocky8-x86_64/intel-19.0.5.281/libaccessom2-git.2023.10.26=2023.10.26-ieiy3e7hidn4dzaqly3ly2yu45mecgq4/bin/yatm.exe
        input:
                - /g/data/vk83/experiments/inputs/access-om2/remapping_weights/JRA55/global.1deg/2020.05.30/rmp_jrar_to_cict_CONSERV.nc
                - /g/data/vk83/experiments/inputs/JRA-55/RYF/v1-4/data
        ncpus: 1

        - name: ocean
        model: mom
        exe: /g/data/vk83/apps/spack/0.20/release/linux-rocky8-x86_64/intel-19.0.5.281/mom5-git.2023.11.09=2023.11.09-ewcdbrfukblyjxpkhd3mfkj4yxfolal4/bin/fms_ACCESS-OM.x
        input:
            - /g/data/vk83/experiments/inputs/access-om2/ocean/grids/mosaic/global.1deg/2020.05.30/grid_spec.nc
            - /g/data/vk83/experiments/inputs/access-om2/ocean/grids/mosaic/global.1deg/2020.05.30/ocean_hgrid.nc
            - /g/data/vk83/experiments/inputs/access-om2/ocean/grids/mosaic/global.1deg/2020.05.30/ocean_mosaic.nc
            - /g/data/vk83/experiments/inputs/access-om2/ocean/grids/bathymetry/global.1deg/2020.10.22/topog.nc
            - /g/data/vk83/experiments/inputs/access-om2/ocean/grids/bathymetry/global.1deg/2020.10.22/ocean_mask.nc
            - /g/data/vk83/experiments/inputs/access-om2/ocean/grids/vertical/global.1deg/2020.10.22/ocean_vgrid.nc
            - /g/data/vk83/experiments/inputs/access-om2/ocean/processor_masks/global.1deg/216.16x15/2020.05.30/ocean_mask_table
            - /g/data/vk83/experiments/inputs/access-om2/ocean/chlorophyll/global.1deg/2020.05.30/chl.nc
            - /g/data/vk83/experiments/inputs/access-om2/ocean/initial_conditions/global.1deg/2020.10.22/ocean_temp_salt.res.nc
            - /g/data/vk83/experiments/inputs/access-om2/ocean/tides/global.1deg/2020.05.30/tideamp.nc
            - /g/data/vk83/experiments/inputs/access-om2/ocean/tides/global.1deg/2020.05.30/roughness_amp.nc
            - /g/data/vk83/experiments/inputs/access-om2/ocean/tides/global.1deg/2020.05.30/roughness_cdbot.nc
            - /g/data/vk83/experiments/inputs/access-om2/ocean/surface_salt_restoring/global.1deg/2020.05.30/salt_sfc_restore.nc
        ncpus: 216

        - name: ice
        model: cice5
        exe: /g/data/vk83/apps/spack/0.20/release/linux-rocky8-x86_64/intel-19.0.5.281/cice5-git.2023.10.19=2023.10.19-rh3xfkrgajya3ghtliacuhlx3pgvrzqs/bin/cice_auscom_360x300_24x1_24p.exe
        input:
            - /g/data/vk83/experiments/inputs/access-om2/ice/grids/global.1deg/2020.05.30/grid.nc
            - /g/data/vk83/experiments/inputs/access-om2/ice/grids/global.1deg/2020.10.22/kmt.nc
            - /g/data/vk83/experiments/inputs/access-om2/ice/initial_conditions/global.1deg/2020.05.30/i2o.nc
            - /g/data/vk83/experiments/inputs/access-om2/ice/initial_conditions/global.1deg/2020.05.30/o2i.nc
            - /g/data/vk83/experiments/inputs/access-om2/ice/initial_conditions/global.1deg/2020.05.30/u_star.nc
            - /g/data/vk83/experiments/inputs/access-om2/ice/initial_conditions/global.1deg/2020.05.30/monthly_sstsss.nc
        ncpus: 24
    ```


#### Collation

The MOM model typically outputs model diagnostics as tiles: rather than output a single file it is saved as a number of smaller tiles each of which contain a part of the model grid.

The `collate` process combines a number of these smaller files into a single output file. Restart files are typically tiled in the same way and will also be combined together if the `restart` option is set to `true`.

```yaml
collate:
    restart: true
    walltime: 1:00:00
    mem: 30GB
    ncpus: 4
    queue: normal
    exe: /g/data/ik11/inputs/access-om2/bin/mppnccombine</code></pre>
```

- **runlog**

```yaml
runlog: true
```
When running a new configuration, _payu_ automatically commits changes with `git` if `runlog` is set to `true`.

This should not be changed as it is an essential part of the provenance of an experiment. `payu` updates the manifest files for every run, and relies on `runlog` to save this information in the `git` history so there is a record of all inputs, restarts and executables used in an experiment.

- **Platform-specific defaults**

```yaml
platform: 
nodesize: 48
```

Set platform-specific default parameters.  In this case it sets the default number of cpus per node to 48. This *might* need changing if the configuration is run on hardware with different `nodesize`.

- **User scripts**

```yaml
userscripts:
    error: resub.sh
    run: rm -f resubmit.count
```

A dictionary to run scripts or subcommands at various stages of a _payu_ submission.

`error` gets called if the model does not run correctly and returns an error code.  `run` gets called after the model execution, but prior to model output archive


#### Miscellaneous

There rest of the configuration settings should never need changing: `stacksize`, `mpirun`, `qsub_flags` and `env`.

??? Show configuration details

    ```yaml
    stacksize: unlimited
    mpirun: --mca io ompio --mca io_ompio_num_aggregators 1
    qsub_flags: -W umask=027
    env:
    UCX_LOG_LEVEL: 'error'
    ```

To find out more about other configuration settings for the `config.yaml` file, refer to [how to configure your experiment with `payu`](https://payu.readthedocs.io/en/latest/config.html").

### Edit a single {{ model }} component configuration

Each of the [model components] contains configuration options specific to that model that are read in when the model component is running. These options are typically useful to modify the physics used in the model, the input data or the variables saved in the diagnostic output. 
These configuration options are are specified in files in a subfolder of the _control_ directory, named the same as the submodel's name in the `config.yaml` `submodel` section (e.g., configuration options for the _ocean_ submodel are in the `~/access-om/1deg_jra55_iaf/ocean` directory).
To modify these options please refer to the User Guide of each individual model component.

---

# References

- [COSIMA]
- [Kiss et al. (2020)](http://doi.org/10.5194/gmd-13-401-2020")
- https://github.com/COSIMA/access-om2/
- [Payu documentation](https://payu.readthedocs.io/en/latest/usage.html)


[model components]: https://access-hive.org.au/models/configurations/access-om/#model-components
[COSIMA]: https://cosima.org.au
[ACCESS-OM2 configs]: https://github.com/ACCESS-NRI/access-om2-configs
[PBS Jobs]: https://opus.nci.org.au/display/Help/4.+PBS+Jobs