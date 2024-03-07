{% set model = "ACCESS-OM" %}

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

To check that _payu_ is available, run:

    payu --version

<terminal-window>
<terminal-line data="input">payu --version</terminal-line>
<terminal-line lineDelay="1000">1.1.1</terminal-line>
</terminal-window>

**Note:** _payu_ version >=1.1 is required

----------------------------------------------------------------------------------------

## Get {{ model }} configuration

All {{ model }} configurations are available from the [ACCESS-OM2 configs] GitHub repository.  ACCESS-NRI has adapted model configurations from those originally developed by [COSIMA]. 
 
There are global configurations for three resolutions: 1°, 0.25°, 0.1°. For each resolution there are two options of atmospheric forcing: Repeat Year (RYF) and Interannual (IAF). Each configuration also has a biogeochemical (BGC) configuration if this is required. Note the BGC experiments are slower and so consume more resources, both compute time and generally also disk space. 

Each configuration is stored as a separate specially named branch in the [ACCESS-OM2 configs] GitHub repository. They are organised like this for administrative convenience: they are easier to manage and keep grouped for testing. Anyone using a configuration is advised to just clone a single branch and not attempt to keep this structure.

The first step is to decide which configuration is required from the twelve available. For example, if the 1° horizontal resolution configuration with repeat-year JRA55 forcing (without bgc) is the required configuration then the [`release-1deg_jra55_ryf`](https://github.com/ACCESS-NRI/access-om2-configs/tree/release-1deg_jra55_ryf) branch is the correct configuration.

The next step is to clone this branch to a location on _Gadi_:

    payu clone -b expt -B release-1deg_jra55_ryf https://github.com/COSIMA/1deg_jra55_ryf.git 1deg_jra55_ryf

!!! note
    These instructions use `payu clone` to clone the `release-1deg_jra55_ryf` branch to a new experiment branch `expt` in a directory named `1deg_jra55_ryf` as an example. See the [`payu` tutorial](https://forum.access-hive.org.au/t/access-om2-payu-tutorial/1750#select-experiment-12) for more information.

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
!!! note
   Some modules may interfere with `git` commands (e.g., matlab/R2018a). If you have trouble cloning the repository, run the following command before trying again: `module unload matlab`

----------------------------------------------------------------------------------------

## Running an {{ model }} configuration

{{ model }} configurations run on [_Gadi_](https://opus.nci.org.au/display/Help/How+to+connect+to+a+project) through a [PBS Job][PBS Jobs] submission managed by _payu_.

The general layout of a _payu_-supported model run consists of two main directories:

- The **laboratory** directory, where all the model components reside. For {{ model }}, it is typically `/scratch/$PROJECT/$USER/access-om2`.

- The **control** directory, where the model configuration resides and from where the model is run (in this example, the cloned directory `~/access-om/1deg_jra55_iaf`).

This separates the small text configuration files from the larger binary outputs and inputs. In this way, the _control_ directory can be in the `$HOME` directory (as it is the only filesystem actively backed-up on _Gadi_). The quotas for `$HOME` are low and strict, which limits what can be stored there, so it is not suitable for larger files.

Furthermore, this separation allows multiple self-resubmitting experiments that share common executables and input data to be run simultaneously.

To setup the _laboratory_ directory, from the _control_ directory run the:

    payu init

This creates the _laboratory_ directory, together with relevant subdirectories, depending on the configuration. 
The main subdirectories of interest are: 

- `work` &rarr; a temporary directory where the model is run. It gets created as part of a run and then removed after the run succeeds.
- `archive` &rarr; the directory where output is stored after each run.

<terminal-window>
<terminal-line data="input">cd ~/access-om/1deg_jra55_yaf</terminal-line>
<terminal-line data="input" directory="~/access-om/1deg_jra55_iaf">payu init</terminal-line>
<terminal-line>laboratory path:  /scratch/$PROJECT/$USER/access-om2</terminal-line>
<terminal-line>binary path:  /scratch/$PROJECT/$USER/access-om2/bin</terminal-line>
<terminal-line>input path:  /scratch/$PROJECT/$USER/access-om2/input</terminal-line>
<terminal-line>work path:  /scratch/$PROJECT/$USER/access-om2/work</terminal-line>
<terminal-line>archive path:  /scratch/$PROJECT/$USER/access-om2/archive</terminal-line>
</terminal-window>

### Payu setup (optional)

As a first step, from within the _control_ directory, it is good practice to run:

    payu setup

This will prepare the model run: create the ephemeral `work` directory based on the experiment configuration and report some useful information to the user, such as the location of the laboratory where the `work` and `archive` directories are located.
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

!!! note
    This step can be skipped as it is also included in the run command. However, running it explicitly helps to check for errors and ensure executable and restart directories are accessible.

### Run configuration

To run a {{ model }} configuration 

    payu run -f

This will submit a single job to the queue with a total run length of `restart_period`.  `restart_period` is defined in the `accessom2.nml` file in the `control directory`.

!!! note
    The `-f` option ensures that `payu` will run even if there is an existing non-empty `work` directory created from a previous failed run or from running `payu setup`.

<terminal-window>
    <terminal-line data="input">payu run -f</terminal-line>
    <terminal-line>payu: warning: Job request includes 47 unused CPUs.</terminal-line>
    <terminal-line>payu: warning: CPU request increased from 241 to 288</terminal-line>
    <terminal-line>Loading input manifest: manifests/input.yaml</terminal-line>
    <terminal-line>Loading restart manifest: manifests/restart.yaml</terminal-line>
    <terminal-line>Loading exe manifest: manifests/exe.yaml</terminal-line>
    <terminal-line>payu: Found modules in /opt/Modules/v4.3.0</terminal-line>
    <terminal-line>qsub -q normal -P tm70 -l walltime=10800 -l ncpus=288 -l mem=1000GB -N 1deg_jra55_iaf -l wd -j n -v PYTHONPATH=/g/data3/tm70/dm5220/scripts/python_modules/,PAYU_PATH=/g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin,PAYU_FORCE=True,MODULESHOME=/opt/Modules/v4.3.0,MODULES_CMD=/opt/Modules/v4.3.0/libexec/modulecmd.tcl,MODULEPATH=/g/data3/hh5/public/modules:/etc/scl/modulefiles:/opt/Modules/modulefiles:/opt/Modules/v4.3.0/modulefiles:/apps/Modules/modulefiles -W umask=027 -l storage=gdata/hh5+gdata/ik11+gdata/qv56 -- /g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin/python3.9 /g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin/payu-run</terminal-line>
    <terminal-line>&lt;job-ID&gt;.gadi-pbs</terminal-line>
</terminal-window>

### Run configuration multiple times

If you want to run an {{ model }} configuration multiple times automatically use the option `-n`:

    payu run -f -n <number-of-runs>

This will run `number-of-runs` times with a total run length of `restart_period * number-of-runs`.

For example, to run a configuration for a total of 50 years with `restart_period = 5, 0, 0` (5 years), the `number-of-runs` should be set to `10`:

    payu run -f -n 10

## Monitor {{ model }} runs

Currently, there is no specific tool to monitor {{ model }} runs. However `payu run` reports the PBS `job-ID`, e.g. `110020843.gadi-pbs`, as the last line to the terminal. `qstat` can be used to query the status of the job, e.g.

    qstat 110021035

<terminal-window>
    <terminal-line data="input">qstat 110021035</terminal-line>
    <terminal-line linedelay=500>qstat 110021035</terminal-line>
    <terminal-line linedelay=500>Job id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Use&nbsp;S Queue</terminal-line>
    <terminal-line linedelay=0>---------------------  ---------------- ----------------  -------- - -----</terminal-line>
    <terminal-line linedelay=0>&lt;110021035&gt;.gadi-pbs&nbsp;&nbsp;1deg_jra55_ryf&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-window>

To show the status of all your submitted [PBS jobs]:

    qstat -u $USER

<terminal-window>
    <terminal-line data="input">qstat -u $USER</terminal-line>
    <terminal-line linedelay=500>Job id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Use&nbsp;S Queue</terminal-line>
    <terminal-line linedelay=0>---------------------  ---------------- ----------------  -------- - -----</terminal-line>
    <terminal-line linedelay=0>&lt;110021035&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;1deg_jra55_ryf&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;000000000&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;000000000&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-window>
If  the `jobname` is set in the [_Master Configuration_ file](#edit-the-master-configuration-file) that is what will appear as your job's _Name_ instead of the default, which is the name of the control directory, `1deg_jra55_ryf`.

_S_ indicates the status of your run, where:

- _Q_ &rarr; Job waiting in the queue to start
- _R_ &rarr; Job running
- _E_ &rarr; Job ending

If there are no jobs listed with your `jobname` (or if no job is listed), your run either successfully completed or was terminated due to an error.

### Stop a run

If you want to manually terminate a run, you can do so by executing:

    qdel job-ID

Which will kill the current job without waiting for it to complete. If you have used the `-n` option, but decide you no longer wish to keep running after the current process completes, you can create a file called `stop_run` in the control directory, and this will prevent `payu` from submitting another job.

### Error and output log files

While the model is running, _payu_ saves the model standard output and standard error in the _access-om2.out_ and _access-om2.err_ log files in the _control_ directory. You can examine the contents of these files to check on the status of a run as it progresses.

At the end of a successful run these log files are archived. If they remain in the `control` directory after the PBS job for a run has completed this is an indication the run has failed.

### PBS output files

When the model completes PBS writes the standard outout and error streams to two files into the control directory: `jobname.o<job-ID>` and `jobname.e<job-ID>` respectively. This is terminal output that isn't otherwise redirected into model log files.

## {{ model }} outputs

At the end of a successful model run, output files (and restart files) are moved (archived) from the `work` directory to the `archive` directory which is a symbolic link to a directory in the `laboratory` (`/scratch/$PROJECT/$USER/access-om2/archive`). The model log files are also moved to the `archive` directory. 

If a model run is unsuccessful the `work` directory is left untouched to facilitate "run forensics" to determine the cause of the model failure.

Outputs and restarts are stored in subfolders within the `archive`, subdivided for each internal run.

Output folders are `outputXXX` and restart folders `restartXXX`, where _XXX_ is the internal run number starting from `000`.

Model components are separated into subdirectories within the output and restart directories.

<terminal-window>
<terminal-line data="input">cd /scratch/$PROJECT/$USER/access-om2/archive/1deg_jra55_iaf</terminal-line>
<terminal-line data="input" directory="/scratch/$PROJECT/$USER/access-om2/archive/1deg_jra55_iaf">ls</terminal-line>
<terminal-line class="ls-output-format">output000 pbs_logs restart000</terminal-line>
</terminal-window>

### Model Live Diagnostics

ACCESS-NRI developed the [Model Live Diagnostics](/model_evaluation/#model-live-diagnostics) framework to check, monitor, visualise, and evaluate model behaviour and progress of ACCESS models currently running on _Gadi_.

For a complete documentation on how to use this framework, check the [Model Diagnostics documentation](https://med-live-diagnostics.readthedocs.io/en/latest/index.html).

---

## Edit {{ model }} configuration

Once you are comfortable that you can clone and run an existing configuration it is often the case that you will want to modify the configuration depending on your science goals.

This section describes the model configuration and how to modify it.

### Edit the _Master Configuration_ file

The `config.yaml` file located in the `control` directory, is the `Master Configuration` file.
<br>
This file, which controls the general model configuration, contains several parts:

- **PBS resources**

    queue: normal
    walltime: 3:00:00
    jobname: 1deg_jra55_ryf
    mem: 1000GB

These lines can be edited to change the [PBS directives](https://opus.nci.org.au/display/Help/PBS+Directives+Explained") for the [PBS job][PBS jobs]</a>.

For example, to run {{ model }} under the `ol01` project (COSIMA Working Group), add the following line:

```yaml
    project: ol01
```
!!! note
    To run {{ model }}, you need to be a member of a project with allocated _Service Units_ (SU). For more information, check [how to join relevant NCI projects](https://access-hive.org.au/getting_started/first_steps/#join-relevant-nci-projects)

- **Model configuration**

This tells _payu_ which driver to use for the main model configuration (`access-om2`) and the location of all inputs that are common to all the component models, or submodels.

```yaml
name: common
model: access-om2
input: /g/data/ik11/inputs/access-om2/input_20201102/common_1deg_jra55
```
The `name` field here is not actually used for the configuration run so you can safely ignore it.

- **Submodels

{{ model }} is a coupled model deploying multiple submodels (i.e. [model components](https://access-hive.org.au/models/configurations/access-om/#model-components)).

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


- **Collate**

The <code>collate</code> process combines a number of smaller files, which contain different parts of the model grid, into target output files. Restart files are typically tiled in the same way and will also be combined together if the <code>restart</code> option is set to <code>true</code>.

```yaml
collate:
    restart: true
    walltime: 1:00:00
    mem: 30GB
    ncpus: 4
    queue: normal
    exe: /g/data/ik11/inputs/access-om2/bin/mppnccombine</code></pre>
```
    </li>
    <li>
        <b>Runlog</b>
        <br>
        <pre><code>runlog: true</code></pre>
        When running a new configuration, <i>payu</i> automatically commits changes in git if <code>runlog</code> is set to <code>true</code>.
        <br>
        Should not be changed to avoid losing track of the current experiment.
    </li>
    <li>
        <b>Stack size</b>
        <br>
        <pre><code>stacksize: unlimited</code></pre>
        The <code>stacksize</code> is the maximum size (in KiB) of the per-thread resources allocated for each process. This is often set to <code>unlimited</code> as explicit stacksize values may not be correctly communicated across <i>Gadi</i> nodes.
    </li>
    <li>
        <b>Restart frequency</b>
        <br>
        <pre><code>restart_freq: 1</code></pre>
        The restart frequency specifies the rate of saved restart files. 
        <br>
        For example, to save restart files every fifth run (i.e. restart004, restart009, restart014, etc.), you need to set <code>restart_freq: 5</code>. 
        <br>
        Intermediate restarts are still temporarily saved and deleted only after a permanently archived restart has been produced.
        <br>
    </li>
    <li>
        <b><i>mpirun</i> arguments</b>
        <br>
        <pre><code>mpirun: --mca io ompio --mca io_ompio_num_aggregators 1</code></pre>
        Line to append mpirun arguments to the <code>mpirun</code> call of the model.
    </li>
    <li>
        <b><i>qsub</i> flags</b>
        <br>
        <pre><code>qsub_flags: -W umask=027</code></pre>
        This line is the configuration marker for any additional <i>qsub</i> flags.
    </li>
    <li>
        <b>Environment variables</b>
        <br>
        <pre><code>env:
    UCX_LOG_LEVEL: 'error'</code></pre>
        Line to add the specified variables to the run environment.
    </li>
    <li>
        <b>Platform-specific defaults</b>
        <br>
        <pre><code>platform: 
    nodesize: 48</code></pre>
        Lines to control the platform-specific default parameters.
        <br>
        <code>nodesize: 48</code> sets the default number of cpus per node to 48, to fully utilise nodes regardless of the requested number of cpus.
    </li>
    <li>
        <b>User scripts</b>
        <br>
        <pre><code>userscripts:
    error: resub.sh
    run: rm -f resubmit.count</code></pre>
        A namelist to include separate user scripts or subcommands at various stages of a <i>payu</i> submission.
        <br>
        <code>error</code> gets called if the model does not run correctly and returns an error code;
        <br>
        <code>run</code> gets called after the model execution, but prior to model output archive.
    </li>
</ul>
<br>
To find out more about other configuration settings for the <code>config.yaml</code> file, check out <a href="https://payu.readthedocs.io/en/latest/config.html" target="_blank">how to configure your experiment with <i>payu</i></a>.

### Edit a single {{ model }} component configuration

Each of <a href="/models/configurations/access-om/#model-components">{{ model }} components</a> contains additional configuration options that are read in when the model component is running. These options are typically useful to modify the physics used in the model or the input data.
They are specified in the subfolder of the <i>control</i> directory, whose name matches the submodel's name as specified in the <code>config.yaml</code> <code>submodel</code> section (e.g., configuration options for the <code>ocean</code> submodel are in the <code>~/access-om/1deg_jra55_iaf/ocean</code> directory).
To modify these options please refer to the User Guide of each individual model component.

### Change run length

To change the internal run length, edit the <code>restart_period</code> field in the <code>&date_manager_nml</code> section of the <code>~/access-om/1deg_jra55_iaf/accessom2.nml</code> file:

<pre><code>&date_manager_nml
    forcing_start_date = '1958-01-01T00:00:00'
    forcing_end_date = '2019-01-01T00:00:00'<br>
    ! Runtime for a single segment/job/submit, format is years, months, seconds,
    ! two of which must be zero.
    restart_period = 5, 0, 0
&end</code></pre>
<div class="note">
    The internal run length (controlled by <code>restart_period</code>) can be different from the total run length. Also, while <code>restart_period</code> can be reduced, it should not be increased to more than 5 years to avoid errors. For more information about the difference between internal run and total run lengths, or how to run the model for more than 5 years, refer to the section <a href="#run-configuration-for-multiple-years">Run configuration for multiple years</a>.
</div>

---
<br>
<h6>References</h6>
<ul class="references">
    <li>
        <a href = "http://www.cosima.org.au/" target="_blank">http://www.cosima.org.au</a>
    </li>
    <li>
        <a href = "http://doi.org/10.5194/gmd-13-401-2020" target="_blank">Kiss et al. (2020)</a>
    </li>
    <li>
        <a href = "https://github.com/COSIMA/access-om2/" target="_blank">https://github.com/COSIMA/access-om2</a>
    </li>
    <li>
        <a href = "https://github.com/COSIMA/access-om2/wiki/Getting-started#quick-start" target="_blank">https://github.com/COSIMA/access-om2/wiki/Getting-started#quick-start</a>
    </li>
    <li>
        <a href = "https://payu.readthedocs.io/en/latest/usage.html" target="_blank">https://payu.readthedocs.io/en/latest/usage.html</a>
    </li>
</ul>

[COSIMA]: https://cosima.org.au
[ACCESS-OM2 configs]: https://github.com/ACCESS-NRI/access-om2-configs
[PBS Jobs]: https://opus.nci.org.au/display/Help/4.+PBS+Jobs