
{% set model = "ACCESS-OM" %}
# Run {{ model }}
## Prerequisites
### General prerequisites
Before running {{ model }}, you need to fulfil general prerequisites outlined in the [First Steps](/getting_started/first_steps) section.
### Model-specific prerequisites
<ul>
    <li>
        <b>Join the <i>hh5</i>, <i>qv56</i>, <i>ua8</i> and <i>ik11</i> projects at NCI</i></b>
        <br>
        To join these projects, request membership on the respective <a href="https://my.nci.org.au/mancini/project/hh5/join" target="_blank">hh5</a>, <a href="https://my.nci.org.au/mancini/project/qv56/join" target="_blank">qv56</a>, <a href="https://my.nci.org.au/mancini/project/ua8/join" target="_blank">ua8</a> and <a href="https://my.nci.org.au/mancini/project/ik11/join" target="_blank">ik11</a> NCI project pages.
        <br>
        For more information on how to join specific NCI projects, please refer to <a href="https://opus.nci.org.au/display/Help/How+to+connect+to+a+project" target="_blank">How to connect to a project</a>.
    </li>
    <li>
        <b>Payu</b>
        <br>
        <i>Payu</i> on <i>Gadi</i> is available through the <code>conda/analysis3</code> environment in the <i>hh5</i> project.
        <br>
        After obtaining <i>hh5</i> project membership, load the <code>conda/analysis3</code> environment to automatically retrieve <i>payu</i> as follows:
        <pre><code>module use /g/data/hh5/public/modules
module load conda/analysis3</code></pre> 
        To check that <i>payu</i> is available, run:
        <pre><code>payu --version</code></pre>
        <terminal-window>
            <terminal-line data="input">payu --version</terminal-line>
            <terminal-line lineDelay="1000">1.0.19</terminal-line>
        </terminal-window>
    </li>
</ul>
----------------------------------------------------------------------------------------

## Get {{ model }} configuration

A standard {{ model }} configuration is available on the <a href = "https://github.com/COSIMA/1deg_jra55_iaf/" target="_blank">COSIMA GitHub</a>.
<br>
This is a 1° horizontal resolution configuration with interannual forcing from 1 Jan 1958 to 31 Dec 2018.
<br>
To get it on <i>Gadi</i>, create a directory to store the model configuration.Navigate to this directory and clone the GitHub repo in it by running: 
<pre><code>git clone https://github.com/COSIMA/1deg_jra55_iaf.git</code></pre>
<terminal-window>
    <terminal-line data="input">mkdir -p ~/access-om</terminal-line>
    <terminal-line data="input">cd ~/access-om</terminal-line>
    <terminal-line data="input" directory="~/access-om">git clone https://github.com/COSIMA/1deg_jra55_iaf.git</terminal-line>
    <terminal-line>Cloning into '1deg_jra55_iaf'...</terminal-line>
    <terminal-line lineDelay=1000>remote: Enumerating objects: 14715, done.</terminal-line>
    <terminal-line>remote: Counting objects: 100% (3401/3401), done.</terminal-line>
    <terminal-line>remote: Compressing objects: 100% (24/24), done.</terminal-line>
    <terminal-line>remote: Total 14715 (delta 3383), reused 3379 (delta 3377), pack-reused 11314</terminal-line>
    <terminal-line>Receiving objects: 100% (14715/14715), 35.68 MiB | 18.11 MiB/s, done.</terminal-line>
    <terminal-line>Resolving deltas: 100% (10707/10707), done.</terminal-line>
</terminal-window>
<div class="note">
   Some modules may interfere with <code>git</code> commands (e.g., matlab/R2018a). If you have trouble cloning the repository, run the following command before trying again: <pre><code>module purge</code></pre>
</div>
----------------------------------------------------------------------------------------

## Edit {{ model }} configuration
It is good practice to create a new <i>git branch</i> to store all your modifications for a particular run, so as not to modify the reference configuration. 

To create a local branch called <i>"example_run"</i>, from within the cloned repo execute:
<pre><code>git checkout -b example_run</code></pre>

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
        {{ model }} is a coupled model deploying multiple submodels (i.e. model components).
        This section specifies the submodels and configuration options required to execute the model correctly.
        <br>
        Each submodel contains additional configuration options that are read in when the submodel is running. These options are specified in the subfolder of the <i>control</i> directory, whose name matches the submodel's <i>name</i> (e.g., configuration options for the <code>atmosphere</code> submodel are in the <code>~/access-om/1deg_jra55_iaf/atmosphere</code> directory).
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

----------------------------------------------------------------------------------------

## Run {{ model }} configuration
After editing the configuration, you are ready to run {{ model }}. 
<br>
{{ model }} suites run on <a href="https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview" target="_blank"><i>Gadi</i></a> through a <a href="https://opus.nci.org.au/display/Help/4.+PBS+Jobs" target="_blank">PBS job</a> submission managed by <i>payu</i>.

### Payu setup (optional)
As a first step, from within the <i>control</i> directory, it is good practice to run:
<pre><code>payu setup</code></pre>
This will prepare the model run, based on the experiment configuration.
<terminal-window>
    <terminal-line data="input">payu setup</terminal-line>
    <terminal-line>laboratory path:  /scratch/$PROJECT/$USER/access-om2</terminal-line>
    <terminal-line>binary ppath:  /scratch/$PROJECT/$USER/access-om2/bin</terminal-line>
    <terminal-line>input path:  /scratch/$PROJECT/$USER/access-om2/input</terminal-line>
    <terminal-line>work path:  /scratch/$PROJECT/$USER/access-om2/work</terminal-line>
    <terminal-line>archive path:  /scratch/$PROJECT/$USER/access-om2/archive</terminal-line>
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
    This step can be skipped as it is also included in the run command. However, running it explicitly helps to check for errors and make sure executable and restart directories are accessible.
</div>

### Run configuration
To run {{ model }} configuration for one internal run length (controlled by <code>restart_period</code> in the <code>~/access-om/1deg_jra55_iaf/accessom2.nml</code> file), execute:
<pre><code>payu run -f</code></pre>
This will submit a single job to the queue with a total run length of <code>restart_period</code>.
<br>
<div class="note">
    The <code>-f</code> option ensures that <i>payu</i> will run even if there is an existing non-empty <i>work</i> directory created from a previous failed run.
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

### Run configuration for multiple years
If you want to run {{ model }} configuration for multiple internal run lengths (controlled by <code>restart_period</code> in the <code>~/access-om/1deg_jra55_iaf/accessom2.nml</code> file), use the option <code>-n</code>:
<pre><code>payu run -f -n &lt;number-of-runs&gt;</code></pre>
This will run the configuration <code>number-of-runs</code> times with a total run length of <code>restart_period * number-of-runs</code>. 
<br>
For example, to run the configuration for a total of 50 years with <code>restart_period = 5, 0, 0</code> (5 years), the <code>number-of-runs</code> should be set to <code>10</code>:
<pre><code>payu run -f -n 10</code></pre>
----------------------------------------------------------------------------------------

## Monitor {{ model }} runs
Currently, there is no specific tool to monitor {{ model }} runs. 
<br>
You can execute the following command to show the status of all your submitted <a href="https://opus.nci.org.au/display/Help/4.+PBS+Jobs" target="_blank">PBS jobs</a>:
<pre><code>qstat -u $USER</code></pre>
<terminal-window>
    <terminal-line data="input">qstat -u $USER</terminal-line>
    <terminal-line linedelay=500>Job id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Use&nbsp;S Queue</terminal-line>
    <terminal-line linedelay=0>---------------------  ---------------- ----------------  -------- - -----</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1deg_jra55_iaf&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID-2&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID-3&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-window>
If you changed the <code>jobname</code> in the PBS resources of the <a href="#edit-the-master-configuration-file"><i>Master Configuration</i> file</a>, that will appear as your job's <i>Name</i> instead of <code>1deg_jra55_iaf</code>.
<br>
<i>S</i> indicates the status of your run, where:
<ul>
    <li>Q &rarr; Job waiting in the queue to start</li>
    <li>R &rarr; Job running</li>
    <li>E &rarr; Job ending</li>
</ul>
If there are no jobs listed with your <code>jobname</code> (or if no job is listed), your run either successfully completed or was terminated due to an error.

### Stop a run
If you want to manually terminate a run, you can do so by executing:
<pre><code>qdel &lt;job-ID&gt;</code></pre>

### Error and output log files
While the model is running, <i>payu</i> saves the standard output and standard error in the respective <code>access-om2.out</code> and <code>access-om2.err</code> files in the <i>control</i> directory. You can examine the contents of these files to check on the status of a run as it progresses.
<br>
When the model completes its run, or if it crashes, the output and error log files are by default renamed as <code>jobname.o&lt;job-ID&gt;</code> and <code>jobname.e&lt;job-ID&gt;</code>, respectively.


### Model Live Diagnostics

ACCESS-NRI developed the [Model Live Diagnostics](/model_evaluation/model_diagnostics) framework to check, monitor, visualise, and evaluate model behaviour and progress of ACCESS models currently running on <i>Gadi</i>.
<br>
For a complete documentation on how to use this framework, check the <a href="https://med-live-diagnostics.readthedocs.io/en/latest/index.html" target="_blank">Model Diagnostics documentation</a>.

----------------------------------------------------------------------------------------

## {{ model }} outputs
While the configuration is running, output files (and restart files) are moved from the <code>work</code> directory to the <code>archive</code> directory <code>/scratch/$PROJECT/$USER/access-om2/archive</code>. They are also symlinked in the <i>control</i> directory to <code>~/access-om/1deg_jra55_iaf/archive</code>.
<br>
Both outputs and restarts are stored in subfolders for each different configuration (in this case, <code>1deg_jra55_iaf</code>). Inside the configuration folder, they are further subdivided for each internal run.
<br>
The naming format for a typical output folder is <code>outputXXX</code> and for a restart folder <code>restartXXX</code>, where <i>XXX</i> is the internal run number starting from <code>000</code>.
<br>
Outputs and restarts are separated in the respective folders for each model component.
<br>
<terminal-window>
    <terminal-line data="input">cd /scratch/$PROJECT/$USER/access-om2/archive/1deg_jra55_iaf</terminal-line>
    <terminal-line data="input" directory="/scratch/$PROJECT/$USER/access-om2/archive/1deg_jra55_iaf">ls</terminal-line>
    <terminal-line class="ls-output-format">output000 pbs_logs restart000</terminal-line>
</terminal-window>

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