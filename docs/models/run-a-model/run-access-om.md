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

[_Payu_](https://payu.readthedocs.io/en/latest/) is a workflow management tool for running numerical models in supercomputing environments.

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

All {{ model }} configurations are available from the [ACCESS-OM2 configs] repository.  ACCESS-NRI has adapted model configurations from those originally developed by [COSIMA]. 
 
There are global configurations for three resolutions: 1°, 0.25°, 0.1°. For each resolution there are two options of atmospheric forcing: Repeat Year (RYF) and Interannual (IAF). Each configuration also has a biogeochemical (BGC) configuration if this is required. Note the BGC experiments are slower and so consume more resources, both compute time and generally also disk space. 

Each configuration is stored as a separate specially named branch in the [ACCESS-OM2 configs] repo. They are organised like this for administrative convenience: they are easier to manage and keep grouped for testing. Anyone using a configuration is advised to just clone a single branch and not attempt to keep this structure.

The first step is to decide which configuration is required from the twelve available. For example, if the 1° horizontal resolution configuration with repeat-year JRA55 forcing (without bgc) is the required configuration then [`release-1deg_jra55_ryf`](https://github.com/ACCESS-NRI/access-om2-configs/tree/release-1deg_jra55_ryf) branch is the correct configuration.

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
<div class="note">
   Some modules may interfere with <code>git</code> commands (e.g., matlab/R2018a). If you have trouble cloning the repository, run the following command before trying again: <pre><code>module unload matlab</code></pre>
</div>
----------------------------------------------------------------------------------------

## Running an {{ model }} configuration

{{ model }} configurations run on [_Gadi_](https://opus.nci.org.au/display/Help/How+to+connect+to+a+project) through a [PBS Job][PBS Jobs] submission managed by _payu_.

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

<div class="note">
    This step can be skipped as it is also included in the run command. However, running it explicitly helps to check for errors and ensure executable and restart directories are accessible.
</div>

### Run configuration

To run {{ model }} configuration for one internal run length (controlled by `restart_period` in the `accessom2.nml` file in the `control directory`), execute:

    payu run -f

This will submit a single job to the queue with a total run length of `restart_period`.

<div class="note">
    The `-f` option ensures that `payu` will run even if there is an existing non-empty `work` directory created from a previous failed run or from running `payu setup`.
</div>
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

If you want to run an {{ model }} configuration for multiple internal run lengths (controlled by `restart_period` in the `accessom2.nml` file), use the option `-n`:

    payu run -f -n <number-of-runs>

This will run the configuration `number-of-runs` times with a total run length of `restart_period * number-of-runs`.

For example, to run the configuration for a total of 50 years with `restart_period = 5, 0, 0` (5 years), the `number-of-runs` should be set to `10`:

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
    <terminal-line linedelay=0>&lt;110021035&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1deg_jra55_ryf&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;000000000&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;000000000&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-window>
If  the `jobname` in the PBS resources of the [_Master Configuration_ file](#edit-the-master-configuration-file) is set that will appear as your job's _Name_ instead of the default, which is the name of the control directory, `1deg_jra55_ryf`.

_S_ indicates the status of your run, where:

- _Q_ &rarr; Job waiting in the queue to start
- _R_ &rarr; Job running
- _E_ &rarr; Job ending

If there are no jobs listed with your `jobname` (or if no job is listed), your run either successfully completed or was terminated due to an error.

### Stop a run

If you want to manually terminate a run, you can do so by executing:

    qdel job-ID

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

ACCESS-NRI developed the [Model Live Diagnostics](/model_evaluation/#model-live-diagnostics) framework to check, monitor, visualise, and evaluate model behaviour and progress of ACCESS models currently running on <i>Gadi</i>.
<br>
For a complete documentation on how to use this framework, check the <a href="https://med-live-diagnostics.readthedocs.io/en/latest/index.html" target="_blank">Model Diagnostics documentation</a>.

---

## Edit {{ model }} configuration

### Payu

<a href="https://payu.readthedocs.io/en/latest/" target="_blank"><i>Payu</i></a> is a workflow management tool for running numerical models in supercomputing environments.
<br>
The general layout of a <i>payu</i>-supported model run consists of two main directories:

<ul>
    <li>
        The <b>laboratory</b> directory, where all the model components reside. For {{ model }}, it is typically <code>/scratch/$PROJECT/$USER/access-om2</code>.
    </li>
    <li>
        The <b>control</b> directory, where the model configuration resides and from where the model is run (in this example, the cloned directory <code>~/access-om/1deg_jra55_iaf</code>.
    </li>
</ul>
This distinction of directories separates the small-size configuration files from the larger binary outputs and inputs. In this way, the configuration files can be placed in the <code>$HOME</code> directory (as it is the only filesystem actively backed-up on <i>Gadi</i>), without overloading it with too much data.
Furthermore, this separation allows multiple self-resubmitting experiments that share common executables and input data to be run simultaneously.
<br>
<br>
To setup the <i>laboratory</i> directory, run the following command from the <i>control</i> directory:
<pre><code>payu init</code></pre> 
This creates the <i>laboratory</i> directory, together with relevant subdirectories, depending on the configuration. The main subdirectories of interest are: 
<ul>
    <li><code>work</code> &rarr; a temporary directory where the model is run. It gets cleaned after each run.</li>
    <li><code>archive</code> &rarr; the directory where output is stored after each run.</li>
    <terminal-window>
        <terminal-line data="input">cd ~/access-om/1deg_jra55_iaf</terminal-line>
        <terminal-line data="input" directory="~/access-om/1deg_jra55_iaf">payu init</terminal-line>
        <terminal-line>laboratory path:  /scratch/$PROJECT/$USER/access-om2</terminal-line>
        <terminal-line>binary path:  /scratch/$PROJECT/$USER/access-om2/bin</terminal-line>
        <terminal-line>input path:  /scratch/$PROJECT/$USER/access-om2/input</terminal-line>
        <terminal-line>work path:  /scratch/$PROJECT/$USER/access-om2/work</terminal-line>
        <terminal-line>archive path:  /scratch/$PROJECT/$USER/access-om2/archive</terminal-line>
    </terminal-window>
</ul>

### Edit the <i>Master Configuration</i> file

The <code>config.yaml</code> file located in the <i>control</i> directory, is the <i>Master Configuration</i> file.
<br>
This file, which controls the general model configuration, contains several parts:

<ul>
    <li>
        <b>PBS resources</b>
        <br>
        <pre><code>queue: normal
walltime: 3:00:00
jobname: 1deg_jra55_iaf
mem: 1000GB</code></pre>
        These lines can be edited to change the <a href="https://opus.nci.org.au/display/Help/PBS+Directives+Explained" target="_blank">PBS directives</a> for the <a href="https://opus.nci.org.au/display/Help/4.+PBS+Jobs" target="_blank">PBS job</a>.
        <br>
        For example, to run {{ model }} under the <code>tm70</code> project (ACCESS-NRI), add the following line:
        <pre><code>project: tm70</code></pre>
        <div class="note">
            To run {{ model }}, you need to be a member of a project with allocated <i>Service Units</i> (SU). For more information, check <a href="/getting_started/first_steps#join-relevant-nci-projects">how to join relevant NCI projects</a>.
        </div>
    </li>
    <li>
        <b>Model configuration</b>
        <br>
        <pre><code>name: common
model: access-om2
input: /g/data/ik11/inputs/access-om2/input_20201102/common_1deg_jra55</code></pre>
        These lines let <i>payu</i> know which driver to use for the main model configuration (<i>access-om</i>).
        <br>
        The <code>name</code> field here is not actually used for the configuration run so you can safely ignore it.
    </li>
    <li>
        <b>Submodels</b>
        <br>
        <pre><code>submodels:
    - name: atmosphere
      model: yatm
      exe: /g/data/access/payu/access-om2/bin/coe/um7.3x
      input:
            - /g/data/ik11/inputs/access-om2/input_20201102/yatm_1deg
            - /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hr/rsds/gr/v20190429
            - /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hr/rlds/gr/v20190429
            - /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hr/prra/gr/v20190429
            - /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hr/prsn/gr/v20190429
            - /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hrPt/psl/gr/v20190429
            - /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/land/day/friver/gr/v20190429
            - /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hrPt/tas/gr/v20190429
            - /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hrPt/huss/gr/v20190429
            - /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hrPt/uas/gr/v20190429
            - /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hrPt/vas/gr/v20190429
            - /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/landIce/day/licalvf/gr/v20190429
      ncpus: 1<br>
    - name: ocean
      model: mom
      exe: /g/data/ik11/inputs/access-om2/bin/fms_ACCESS-OM_730f0bf_libaccessom2_d750b4b.x
      input: /g/data/ik11/inputs/access-om2/input_20201102/mom_1deg
      ncpus: 216<br>
    - name: ice
      model: cice
      exe: /g/data/ik11/inputs/access-om2/bin/cice_auscom_360x300_24p_edcfa6f_libaccessom2_d750b4b.exe
      input: /g/data/ik11/inputs/access-om2/input_20201102/cice_1deg
      ncpus: 24</code></pre>
        {{ model }} is a coupled model deploying multiple submodels (i.e. <a href="/models/configurations/access-om/#model-components">model components</a>).
        This section specifies the submodels and configuration options required to execute the model correctly.
        <br>
        Each submodel contains additional configuration options that are read in when the submodel is running. These options are specified in the subfolder of the <i>control</i> directory, whose name matches the submodel's <i>name</i> (e.g., configuration options for the <code>ocean</code> submodel are in the <code>~/access-om/1deg_jra55_iaf/ocean</code> directory).
    </li>
    <li>
        <b>Collate</b>
        <br>
        <pre><code>collate:
    restart: true
    walltime: 1:00:00
    mem: 30GB
    ncpus: 4
    queue: normal
    exe: /g/data/ik11/inputs/access-om2/bin/mppnccombine</code></pre>
        The <code>collate</code> process combines a number of smaller files, which contain different parts of the model grid, into target output files. Restart files are typically tiled in the same way and will also be combined together if the <code>restart</code> option is set to <code>true</code>.
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