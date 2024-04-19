{% set model = "ACCESS-OM2" %}
{% set access_om2_configs = "https://github.com/ACCESS-NRI/access-om2-configs" %}
[PBS job]: https://opus.nci.org.au/display/Help/4.+PBS+Jobs
[payu]: https://github.com/payu-org/payu

# Run {{ model }}
<div class="note">
    In this documentation, the same code is sometimes shown in a highlighted code-block and also in a simulated terminal.<br>
    The code-blocks show the commands to be run in a terminal. They can be easily copied by clicking on the icon over the right side of the code block.<br>
    The simulated terminals are examples of the output to expect when the commands are run. Sometimes they might slightly differ from the real outputs.
</div>

## Prerequisites

### General prerequisites

Before running {{ model }}, you need to fulfil general prerequisites outlined in the [First Steps](https://access-hive.org.au/getting_started/first_steps) section.

If you are unsure whether {{ model }} is the right choice for your experiment, take a look at the overview of [ACCESS Models](https://access-hive.org.au/models).

### Model-specific prerequisites

- **Join the _vk83_ and _qv56_ projects at NCI**<br>
    To join these projects, request membership on the respective <a href="https://my.nci.org.au/mancini/project/vk83/join" target="_blank">vk83</a> and <a href="https://my.nci.org.au/mancini/project/qv56/join" target="_blank">qv56</a> NCI project pages.
    <br>
    For more information on joining specific NCI projects, refer to <a href="https://opus.nci.org.au/display/Help/How+to+connect+to+a+project" target="_blank">How to connect to a project</a>.

- **Payu**<br>
    [Payu][payu] is a workflow management tool for running numerical models in supercomputing environments, for which there is extensive <a href="https://payu.readthedocs.io/en/latest/" target="_blank">documentation</a>.
    <br>
    _Payu_ on _Gadi_ is available through a dedicated `conda` environment in the _vk83_ project.
    <br>
    After joining the _vk83_ project, load the `payu` module:
    ```
    module use /g/data/vk83/modules
    module load payu
    ```
    To check that _payu_ is available, run:
    ```
    payu --version
    ```
    <terminal-window>
        <terminal-line data="input">payu --version</terminal-line>
        <terminal-line lineDelay="1000">1.1.3</terminal-line>
    </terminal-window>
    <div class="note">
        <i>payu</i> version >=1.1.3 is required
    </div>

----------------------------------------------------------------------------------------

## {{ model }} configurations

All released {{ model }} configurations are available from the <a href="{{ access_om2_configs }}" target="_blank">ACCESS-OM2 configs</a> GitHub repository.
<br>
Released configurations are tested and supported by ACCESS-NRI, as an adaptation of those originally developed by <a href="https://cosima.org.au" target="_blank">COSIMA</a>.

There are global configurations for <b>three horizontal resolutions</b>: 

- 1°
- 0.25°
- 0.1°

For each resolution there are <b>two options of atmospheric forcing</b>: 

- Repeat Year Forcing (RYF)
- Interannual Forcing (IAF)

Each configuration also has a biogeochemical (BGC) configuration (that uses the <a href="/models/model_components/bgc_ocean">Biogeochemistry Ocean component</a>), if this is required.
<div class="note">
    BGC experiments are slower and generally consume more resources (compute time and disk space).
</div>

Each {{ model }} configuration is stored as a separate specially-named branch in the <a href="{{ access_om2_configs }}" target="_blank">ACCESS-OM2 configs</a> GitHub repository.
<br>
More information about the available experiments and the naming scheme of the branches can be found in the repo.

----------------------------------------------------------------------------------------

## Get {{ model }} configuration

The first step is to choose a configuration from those available.
<br>
For example, if the required configuration is the 1° horizontal resolution with repeat-year <i>JRA55</i> forcing (without BGC), then the branch to select is <a href="https://github.com/ACCESS-NRI/access-om2-configs/tree/release-1deg_jra55_ryf" target="_blank"><code>release-1deg_jra55_ryf</code></a>.

To clone this branch to a location on <i>Gadi</i>, run:
<pre><code>mkdir -p ~/access-om2
cd ~/access-om2
payu clone -b expt -B release-1deg_jra55_ryf {{ access_om2_configs }} 1deg_jra55_ryf</code></pre>
In the example above the `payu clone` command clones the 1° repeat-year JRA55 configuration (` -B release-1deg_jra55_ryf`) 
to a new experiment branch (`-b expt`) to a directory named `1deg_jra55_ryf`.
<div class="note">
    Anyone using a configuration is advised to clone only a single branch (as shown in the example above) and not the entire repository.
</div>

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
    <terminal-line>    cd 1deg_jra55_ryf</terminal-line>
</terminal-window>

<div class="note">
    <i>payu</i> uses branches to differentiate between different experiments in the same local git repository.
    <br>
    For this reason, it is recommended to always set the cloned branch name(<code>expt</code> in the example above) to something meaningful for the planned experiment.
    <br>
    For more information refer to this <a href="https://forum.access-hive.org.au/t/access-om2-payu-tutorial/1750#select-experiment-12" target="_blank">payu tutorial</a>.
</div>

----------------------------------------------------------------------------------------

## Run {{ model }} configuration

If you want to modify your configuration, refer to [Edit {{ model }} configuration](#edit-{{ model.lower() }}-configuration).

{{ model }} configurations run on [_Gadi_](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview) through a [PBS job][PBS job] submission managed by [_payu_][payu].

The general layout of a _payu_-supported model run consists of two main directories:

- The _control_ directory contains the model configuration and serves as the execution directory for running the model (in this example, the cloned directory `~/access-om2/1deg_jra55_ryf`).
- The _laboratory_ directory, where all the model components reside. For {{ model }}, it is typically `/scratch/$PROJECT/$USER/access-om2`.

This separates the small text configuration files from the larger binary outputs and inputs. In this way, the _control_ directory can be in the `$HOME` directory (as it is the only filesystem actively backed-up on _Gadi_). The quotas for `$HOME` are low and strict, which limits what can be stored there, so it is not suitable for larger files.

The _laboratory_ directory is a shared space for all *payu* experiments using the same model.<br>
Inside the _laboratory_ directory there are two subdirectories:

- `work` &rarr; a directory where *payu* automatically creates a temporary subdirectory while the model is run. The temporary subdirectory gets created as part of a run and then removed after the run succeeds.
- `archive` &rarr; the directory where the output is stored following each successful run.

Within each of the above directories *payu* automatically creates subdirectories uniquely named according to the experiment being run.<br>
*Payu* also creates symbolic links in the _control_ directory pointing to the `archive` and `work` directories.

This design allows multiple self-resubmitting experiments that share common executables and input data to be run simultaneously.

### Run configuration

To run {{ model }} configuration execute the following command from within the *control* directory:

    payu run

This will submit a single job to the queue with a run length of `restart_period`.<br>
For information about `restart_period`, refer to [Change run length](#change-run-length).

<terminal-window>
<terminal-line data="input">cd ~/eaccess-om2/1deg_jra55_ryf</terminal-line>
<terminal-line directory="~/eaccess-om2/1deg_jra55_ryf" data="input">payu run</terminal-line>
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
<div class="note">
    You can add the <code>-f</code> option to <code>payu run</code> to let the model run even if there is an existing non-empty <code>work</code> directory, created from a previous failed run or from running <code>payu setup</code>.
</div>

### Run configuration for more than 5 years

As mentioned in the [Change run length](#change-run-length) section, you cannot specify more than 5 years as `restart_period`.<br>
If you want to run a configuration for more than 5 years, you need to use the `-n` option:

    payu run -n <number-of-runs>

This will run {{ model }} `number-of-runs` consecutive times, each with a *run length* equal to `restart_period`.<br>
This way, the *total experiment length* will be `restart_period * number-of-runs`. 

For example, to run a configuration for a total of 50 years with a `restart_period` of 5 years, the `number-of-runs` should be set to `10`:

    payu run -n 10


## Edit {{ model }} configuration

This section describes how to modify {{ model }} configuration.<br>
The modifications discussed in this section can change the way {{ model }} is run by _Payu_, or how its specific model components are configured and coupled together.

The `config.yaml` file located in the _control_ directory, is the _Master Configuration_ file, which controls the general model configuration.<br>
It contains several parts, some of which it is more likely will need modification, and others which are rarely changed without having a deep understanding of how the model is configured.

### Change run length

One of the most common changes is to adjust the duration of the model run.<br>
For example, when debugging changes to a model it is common to reduce the run length to minimise resource consumption and return faster feedback on changes.

The run length is controlled by the `restart_period` field in the `&date_manager_nml` section of the `~/access-om2/1deg_jra55_ryf/accessom2.nml` file:

    &date_manager_nml
        forcing_start_date = '1958-01-01T00:00:00'
        forcing_end_date = '2019-01-01T00:00:00'<br>
        ! Runtime for a single segment/job/submit, format is years, months, seconds,
        ! two of which must be zero.
        restart_period = 5, 0, 0
    &end

The format is `restart_period = <number_of_years>, <number_of_months>, <number_of_days>`.

For example, to make the model run for 1 year, 4 months and 10 days, change `restart_period` to:

    restart_period = 1, 4, 10

<div class="note">
    While <code>restart_period</code> can be reduced, it should not be increased to more than 5 years, to avoid errors.
    <br><br>
    It is also important to differentiate between <i>run length</i> and <i>total experiment length</i>.<br>
    For more information about their difference, or how to run the model for more than 5 years, refer to the section <a href="#run-configuration-for-more-than-5-years">Run configuration for more than 5 years</a>.
</div>

### Modify PBS resources

If the model has been altered and needs longer time to complete, more memory, or needs to be submitted under a different NCI project, you will need to modify the following section in the `config.yaml`:

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

These lines can be edited to change the <a href="https://opus.nci.org.au/display/Help/PBS+Directives+Explained" target="_blank">PBS directives</a> for the [PBS job][PBS job].

For example, to run {{ model }} under the `ol01` project (COSIMA Working Group), uncomment the line beginning with `# project` by deleting the `#` symbol and replace `PROJECT_CODE` wih `ol01`:

```yaml
project: ol01
```

<div class="note">
    If projects other than <code>ol01</code> are used to run {{ model }} configuration, then the <code>shortpath</code> field also needs to be uncommented and the path to the desired <code>/scratch/PROJECT_CODE</code> added.<br>
    Doing this will make sure the same <code>/scratch</code> location is used for the <i>laboratory</i>, regardless of which project is used to run the experiment.
    <br><br>
    To run {{ model }}, you need to be a member of a project with allocated <i>Service Units (SU)</i>. For more information, check <a href="/getting_started/first_steps#join-relevant-nci-projects">how to join relevant NCI projects</a>.
</div>

### Syncing output data

The _laboratory_ directory (more details on it in the section [Run ACCESS-OM2 configuration](#run-access-om2-configuration)) is typically under `/scratch` storage on _Gadi_ where [files are regularly deleted once they have been unaccessed for a period of time](https://opus.nci.org.au/pages/viewpage.action?pageId=156434436). For this reason climate model outputs need to be moved to a location with longer term storage. On _gadi_ this is typically under a project code on `/g/data`.  

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

Each submodel contains additional configuration options that are read in when the submodel is running. These options are specified in the subfolder of the _control_ directory, whose name matches the submodel's _name_ (e.g., configuration options for the `ocean` submodel are in the `~/access-om2/1deg_jra55_ryf/ocean` directory).

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

To find out more about other configuration settings for the `config.yaml` file, refer to [how to configure your experiment with `payu`](https://payu.readthedocs.io/en/latest/config.html).

### Edit a single {{ model }} component configuration

Each of the [model components] contains configuration options specific to that model that are read in when the model component is running. These options are typically useful to modify the physics used in the model, the input data or the model variables saved in the output files. 
These configuration options are are specified in files in a subfolder of the _control_ directory, named the same as the submodel's name in the `config.yaml` `submodel` section (e.g., configuration options for the _ocean_ submodel are in the `~/access-om2/1deg_jra55_ryf/ocean` directory).
To modify these options please refer to the User Guide of each individual model component.

---------------------------------------------------------------------------------------

## Monitor {{ model }} runs

`payu run` reports the PBS `job-ID`, e.g. `110020843.gadi-pbs`, as the last line to the terminal. `qstat` can be used to query the status of the job, e.g.

<terminal-window>
    <terminal-line data="input">qstat 110021035</terminal-line>
    <terminal-line linedelay=500>qstat 110021035</terminal-line>
    <terminal-line linedelay=500>Job id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Use&nbsp;S Queue</terminal-line>
    <terminal-line linedelay=0>---------------------  ---------------- ----------------  -------- - -----</terminal-line>
    <terminal-line linedelay=0>&lt;110021035&gt;.gadi-pbs&nbsp;&nbsp;1deg_jra55_ryf&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-window>

To show the status of all your submitted PBS jobs:

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
- _H_ &rarr; Job on hold

If there are no jobs listed with your `jobname` (or if no job is listed), your run either successfully completed or was terminated due to an error.

A job can be on hold for a number of reasons, see the [NCI documentation for more information](https://opus.nci.org.au/display/Help/FAQ+1%3A+Why+My+Jobs+are+NOT+Running).

### PBS output files

When the model completes PBS writes the standard outout and error streams to two files into the _control_ directory: `jobname.o<job-ID>` and `jobname.e<job-ID>` respectively. This is terminal output that isn't otherwise redirected into model log files.

You can archive these files using payu sweep which moves them to the archive directory.

### Stop a run

If you want to manually terminate a run, you can do so by executing:

    qdel job-ID

Which will kill the current job without waiting for it to complete. If you have used the `-n` option ( e.g., `payu run -n`), but subsequently decide not to keep running after the current process completes, you can create a file called `stop_run` in the _control_ directory, and this will prevent `payu` from submitting another job.

### Error and output log files

While the model is running, _payu_ saves the model standard output and standard error in the `access-om2.out` and `access-om2.err` log files in the _control_ directory. You can examine the contents of these files to check on the status of a run as it progresses.

At the end of a successful run these log files are archived to the `archive` directory and will not be found in the _control_ directory. If they remain in the _control_ directory after the PBS job for a run has completed this is an indication the run has failed.

### Did the model run correctly?

To determine if a model has run correctly it must first be established that it has finished. The `qstat` commands [above](#monitor-access-om2-runs) and the [presence of PBS log files](#pbs-output-files) should be used to determine if the PBS job has ended.

If the model did not run to completion correctly the following will still be in the `control` directory:

    work/
    access-om2.err
    access-om2.out

This is because `payu` will only run the `archive` step when the model runs without error.

## {{ model }} outputs

At the end of a successful model run, output files, restart files and log files are moved from the work directory to the archive directory. A symbolic link in the control directory to a directory in the _laboratory_ (`/scratch/$PROJECT/$USER/access-om2/archive`) is provided for convenience.

If a model run is unsuccessful the `work` directory is left untouched to facilitate "run forensics" to determine the cause of the model failure.

Outputs and restarts are stored in subfolders within the `archive`, subdivided for each run of the model.

Output folders are `outputXXX` and restart folders `restartXXX`, where _XXX_ is the run number starting from `000`.

Model components are separated into subdirectories within the output and restart directories.

<terminal-window>
<terminal-line data="input">cd ~/access-om2/1deg_jra55_ryf</terminal-line>
<terminal-line data="input" directory="~/access-om2/1deg_jra55_yaf<">ls</terminal-line>
<terminal-line class="ls-output-format">output000 pbs_logs restart000</terminal-line>
</terminal-window>

### Model Live Diagnostics

ACCESS-NRI developed the [Model Live Diagnostics](https://access-hive.org.au/model_evaluation/#model-live-diagnostics) framework to check, monitor, visualise, and evaluate model behaviour and progress of ACCESS models currently running on _Gadi_.

For a complete documentation on how to use this framework, check the [Model Diagnostics documentation](https://med-live-diagnostics.readthedocs.io/en/latest/index.html).

### Trouble-shooting

If `payu` doesn't run correctly for some reason a good first step step, from within the _control_ directory, is to run:

    payu setup

This will prepare the model run: create the ephemeral `work` directory based on the experiment configuration, generate manifests and report some useful information to the user, such as the location of the _laboratory_ where the `work` and `archive` directories are located.
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

!!! note

    By default `payu run` will not proceed if there is an existing `work` directory. So after `payu setup` either `payu sweep` before attempting to run the configuration, or use `payu run -f`

----------------------------------------------------------------------------------------
<!-- References -->
<h6>References</h6>
<ul class="references">
    <li>
        <a href="https://cosima.org.au" target="_blank">https://cosima.org.au</a>
    </li>
    <li>
        <a href = "http://doi.org/10.5194/gmd-13-401-2020" target="_blank">Kiss et al. (2020)</a>
    </li>
    <li>
        <a href = "https://payu.readthedocs.io/en/latest/usage.html" target="_blank">https://payu.readthedocs.io/en/latest/usage.html</a>
    </li>
    <li>
        <a href = "https://github.com/access-nri/access-om2/" target="_blank">https://github.com/access-nri/access-om2/</a>
    </li>
    <li>
        <a href = "https://opus.nci.org.au/" target="_blank">https://opus.nci.org.au/</a>
    </li>
</ul>

[model components]: https://access-hive.org.au/models/configurations/access-om/#model-components