
{% set model = "ACCESS-OM" %}
# <span class=""> Run {{ model }} </span>
## Requirements

Before running {{ model }}, you need to make sure to possess the right tools and to have an account with specific institutions.

### General requirements
For the general requirements needed to run all ACCESS models, please refer to the <a href="../../../get_started">Get Started</a> page.

### Model-specific requirements
<ul>
    <li>
        <b>Join the <i>hh5</i>, <i>qv56</i>, <i>ua8</i> and <i>ik11</i> projects at NCI</i></b>
        <br>
        The <i>hh5</i> project hosts the conda environment that supports most workflows for climate science on <i>Gadi</i>.
        <br>
        The <i>qv56</i>, <i>ua8</i> and <i>ik11</i> projects, instead, store some of the input data for {{ model }}.
        <br>
        To join these projects at NCI, request membership for them on the respective <a href="https://my.nci.org.au/mancini/project/hh5/join" target="_blank">hh5</a>, <a href="https://my.nci.org.au/mancini/project/qv56/join" target="_blank">qv56</a>, <a href="https://my.nci.org.au/mancini/project/ua8/join" target="_blank">ua8</a> and <a href="https://my.nci.org.au/mancini/project/ik11/join" target="_blank">ik11</a> NCI project pages.
        <br>
        For more information on how to join specific NCI projects, please refer to <a href="https://opus.nci.org.au/display/Help/How+to+connect+to+a+project" target="_blank">How to connect to a project</a>.
    </li>
    <li>
        <b>Payu</b>
        <br>
        <i>payu</i> on <i>Gadi</i> is available through the <code>conda/analysis3</code> environment in the <i>hh5</i> project.
        <br>
        After getting access to the <i>hh5</i> project, load the <code>conda/analysis3</code> environment by running:
        <pre><code>module use /g/data/hh5/public/modules
            module load conda/analysis3
        </code></pre>
        to automatically get <i>payu</i>. 
        <br>
        To check that payu is effectively available, you can run:
        <pre><code>payu --version</code></pre>
        <terminal-animation>
            <terminal-line data="input">payu --version</terminal-line>
            <terminal-line lineDelay="1000">1.0.19</terminal-line>
        </terminal-animation>
    </li>
</ul>
----------------------------------------------------------------------------------------

## Get {{ model }} configuration

A standard {{ model }} configuration is avaible on the <a href = "https://github.com/COSIMA/1deg_jra55_iaf/" target="_blank">COSIMA GitHub</a>.
<br>
This is a 1° horizontal resolution configuration, with interannual forcing from 1 Jan 1958 to 31 Dec 2018.
<br>
In order to get it, on <i>Gadi</i>, create a directory where to keep the model configuration, and clone the GitHub repo in it by running: 
<pre><code>git clone https://github.com/COSIMA/1deg_jra55_iaf.git</code></pre>
<terminal-animation>
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
</terminal-animation>
<div class="note">
    Some modules might interfere with the <code>git</code> commands (for example matlab/R2018a). If you are running into issues during the cloning of the repository, it might be a good idea to run <pre><code>module purge</code></pre> first, before trying again.
</div>
----------------------------------------------------------------------------------------

## Edit {{ model }} configuration
First, is good practice to create another git branch where to keep all modifications we put in place for our run, and to keep the <i>reference</i> configuration unmodified. If we call the local branch <i>"example_run"</i>, from inside the cloned repo we can run:
<pre><code>git checkout -b example_run</code></pre>

### Payu
<a href="https://payu.readthedocs.io/en/latest/" target="_blank"><i>Payu</i></a> is a workflow management tool for running numerical models in supercomputing environments.
<br>
The general layout of a <i>payu</i>-supported model run consists of two main directories:
<ul>
    <li>
        The <b>laboratory</b> is the directory where all parts of the model are kept. For {{ model }}, it is typically <code>/scratch/$PROJECT/$USER/access-om2</code>.
    </li>
    <li>
        The <b>control</b> directory, where the model configuration is kept and from where the model is run (in our case is the cloned directory <code>~/access-om/1deg_jra55_iaf</code>).
    </li>
</ul>
This distinction of directories keeps the small-size configuration files separated from the larger binary outputs and inputs. In this way, we can place the configuration files in the <code>$HOME</code> directory (being the only filesystem on <i>Gadi</i> that is actively backed up), without overloading it with too much data.
<br>
Moreover, this separation allows to run multiple self-resubmitting experiments simultaneously that might share common executables and input data.
<br>
To proceed with the setup of the <i>laboratory</i> directory, from the <i>control</i> directory run:
<pre><code>payu init</code></pre> 
This will create the <i>laboratory</i> directory, along with other subdirectories (depending on the configuration). The main subdirectories we are interested in are: 
<ul>
    <li><code>work</code> &rarr; temporary directory where the model is actually run. It gets cleaned after each run.</li>
    <li><code>archive</code> &rarr; directory where the output is placed after each run.</li>
    <terminal-animation>
        <terminal-line data="input">cd ~/access-om/1deg_jra55_iaf</terminal-line>
        <terminal-line data="input" directory="~/access-om/1deg_jra55_iaf">payu init</terminal-line>
        <terminal-line>laboratory path:  /scratch/$PROJECT/$USER/access-om2</terminal-line>
        <terminal-line>binary path:  /scratch/$PROJECT/$USER/access-om2/bin</terminal-line>
        <terminal-line>input path:  /scratch/$PROJECT/$USER/access-om2/input</terminal-line>
        <terminal-line>work path:  /scratch/$PROJECT/$USER/access-om2/work</terminal-line>
        <terminal-line>archive path:  /scratch/$PROJECT/$USER/access-om2/archive</terminal-line>
    </terminal-animation>
</ul>

### Edit the Master Configuration file
The <code>config.yaml</code> file, located in the <i>control</i> directory, is the Master Configuration file. 
<br>
This file controls the general model configuration and if we open it in a text editor, we can see different parts:
<ul>
    <li>
        <b>PBS resources</b>
        <br>
        <pre><code>queue: normal
            walltime: 3:00:00
            jobname: 1deg_jra55_iaf
            mem: 1000GB
        </code></pre>
        These are settings for the PBS scheduler. Edit lines in this section to change any of the PBS resources. 
        <br>
        For example, to run {{ model }} under the <code>tm70</code> project (ACCESS-NRI), add the following line to this section:
        <pre><code>project: tm70</code></pre>
        <div class="note">
            You should be part of a project with allocated <i>Service Units</i> (SU) to be able to run {{ model }}. For more information please check <a href="../../../get_started#join-relevant-nci-projects">how to join NCI projects</a>.
        </div>
    </li>
    <li>
        <b>Model configuration</b>
        <pre><code>name: common
            model: access-om2
            input: /g/data/ik11/inputs/access-om2/input_20201102/common_1deg_jra55
        </code></pre>
        The main model configuration. This tells <i>payu</i> which driver to use (<i>access-om</i>).
        <br>
        The <code>name</code> field here is not actually used for the configuration run and you can safely disregard it.
    </li>
    <li>
        <b>Submodels</b>
        <br>
        <pre><code>submodels:
            &nbsp;&nbsp;- name: atmosphere
            &nbsp;&nbsp;&nbsp;&nbsp;model: yatm
            &nbsp;&nbsp;&nbsp;&nbsp;exe: /g/data/access/payu/access-om2/bin/coe/um7.3x
            &nbsp;&nbsp;&nbsp;&nbsp;input:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/ik11/inputs/access-om2/input_20201102/yatm_1deg
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hr/rsds/gr/v20190429
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hr/rlds/gr/v20190429
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hr/prra/gr/v20190429
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hr/prsn/gr/v20190429
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hrPt/psl/gr/v20190429
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/land/day/friver/gr/v20190429
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hrPt/tas/gr/v20190429
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hrPt/huss/gr/v20190429
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hrPt/uas/gr/v20190429
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/atmos/3hrPt/vas/gr/v20190429
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/qv56/replicas/input4MIPs/CMIP6/OMIP/MRI/MRI-JRA55-do-1-4-0/landIce/day/licalvf/gr/v20190429
            &nbsp;&nbsp;&nbsp;&nbsp;ncpus: 1<br>
            &nbsp;&nbsp;- name: ocean
            &nbsp;&nbsp;&nbsp;&nbsp;model: mom
            &nbsp;&nbsp;&nbsp;&nbsp;exe: /g/data/ik11/inputs/access-om2/bin/fms_ACCESS-OM_730f0bf_libaccessom2_d750b4b.x
            &nbsp;&nbsp;&nbsp;&nbsp;input: /g/data/ik11/inputs/access-om2/input_20201102/mom_1deg
            &nbsp;&nbsp;&nbsp;&nbsp;ncpus: 216<br>
            &nbsp;&nbsp;- name: ice
            &nbsp;&nbsp;&nbsp;&nbsp;model: cice
            &nbsp;&nbsp;&nbsp;&nbsp;exe: /g/data/ik11/inputs/access-om2/bin/cice_auscom_360x300_24p_edcfa6f_libaccessom2_d750b4b.exe
            &nbsp;&nbsp;&nbsp;&nbsp;input: /g/data/ik11/inputs/access-om2/input_20201102/cice_1deg
            &nbsp;&nbsp;&nbsp;&nbsp;ncpus: 24
        </code></pre>
        {{ model }} is a coupled model, which means it has multiple submodels (i.e. model components). 
        <br>
        This section specifies the submodels and contains configuration options (for example the directories of input files) that are required to ensure the model can execute correctly. Each submodel also has additional configuration options that are read in when the submodel is running. These specific configuration options are found in the subdirectory of the <i>control</i> directory having the <i>name</i> of the submodel (e.g. in our case the configuration for the atmosphere submodel will be in the directory <code>~/access-om/1deg_jra55_iaf/atmosphere</code>).
    </li>
    <li>
        <b>Collate</b>
        <br>
        <pre><code>collate:
            &nbsp;&nbsp;restart: true
            &nbsp;&nbsp;walltime: 1:00:00
            &nbsp;&nbsp;mem: 30GB
            &nbsp;&nbsp;ncpus: 4
            &nbsp;&nbsp;queue: normal
            &nbsp;&nbsp;exe: /g/data/ik11/inputs/access-om2/bin/mppnccombine
        </code></pre>
        The <i>collate</i> process joins a number of smaller files, which contain different parts of the model grid, together into target output files. The restart files are typically tiled in the same way and will also be joined together if the <i>restart</i> option is set to <code>true</code>.
    </li>
    <li>
        <b>Runlog</b>
        <br>
        <pre><code>runlog: true</code></pre>
        When running a new configuration, <i>payu</i> automatically commits changes in git if <i>runlog</i> is set to true.
    </li>
    <li>
        <b>Stack size</b>
        <br>
        <pre><code>stacksize: unlimited</code></pre>
        The stack size is the maximum size of the per-thread resources allocated for each process (in KiB).
        <i>unlimited</i> works without any issues, but explicit stacksize values may not be correctly communicated across <i>Gadi</i> nodes.
    </li>
    <li>
        <b>Restart frequency</b>
        <br>
        <pre><code>restart_freq: 1</code></pre>
        The restart frequency specifies the rate of saved restart files. For example, if <code>restart_freq: 5</code>, we keep the restart files for every fifth run (restart004, restart009, restart014, etc.). Intermediate restarts are not deleted until a permanently archived restart has been produced. For example, if we have just completed run 11, then we keep restart004, restart009, restart010, and restart011. Restarts 10 through 13 are not deleted until restart014 has been saved.
        <br>
        <code>restart_freq: 1</code> saves all restart files.
    </li>
    <li>
        <b><i>mpirun</i> arguments</b>
        <br>
        <pre><code>mpirun: --mca io ompio --mca io_ompio_num_aggregators 1</code></pre>
        Append mpirun arguments to the mpirun call of the model.
    </li>
    <li>
        <b><i>qsub</i> flags</b>
        <br>
        <pre><code>qsub_flags: -W umask=027</code></pre>
        Configuration marker for any additional <i>qsub</i> flags.
    </li>
    <li>
        <b>Environment variables</b>
        <br>
        <pre><code>env:
            &nbsp;&nbsp;UCX_LOG_LEVEL: 'error'
        </code></pre>
        Add the specified variables to the run environment.
    </li>
    <li>
        <b>Platform specific defaults</b>
        <br>
        <pre><code>platform: 
            &nbsp;&nbsp;nodesize: 48
        </code></pre>
        Set platform specific defaults.
        <br>
        <i>nodesize</i> sets the default number of cpus per node to fully utilise nodes regardless of requested number of cpus.
    </li>
    <li>
        <b>User scripts</b>
        <br>
        <pre><code>userscripts:
            &nbsp;&nbsp;error: resub.sh
            &nbsp;&nbsp;run: rm -f resubmit.count
        </code></pre>
        Namelist to include separate userscripts or subcommands at various stages of a <i>payu</i> submission.
        <br>
        <code>error</code> gets called if the model does not run correctly and returns an error code;
        <br>
        <code>run</code> gets called after model execution but prior to model output archive.
    </li>
</ul>
<br>
To know more about other configuration settings for the <code>config.yaml</code> file, please check <a href="https://payu.readthedocs.io/en/latest/config.html" target="_blank">how to configure your experiment with <i>payu</i></a>.

### Change run length
To change the internal run length, edit the <code>restart_period</code> field in the <code>&date_manager_nml</code> section of the <code>~/access-om/1deg_jra55_iaf/accessom2.nml</code> file:
<pre><code>&date_manager_nml
    &nbsp;&nbsp;forcing_start_date = '1958-01-01T00:00:00'
    &nbsp;&nbsp;forcing_end_date = '2019-01-01T00:00:00'<br>
    &nbsp;&nbsp;! Runtime for a single segment/job/submit, format is years, months, seconds,
    &nbsp;&nbsp;! two of which must be zero.
    &nbsp;&nbsp;restart_period = 5, 0, 0
</code></pre>
<div class=note>
    The internal run length (controlled by <code>restart_period</code>) can be different from the total run length. Also, the <code>restart_period</code> value can be lowered, but should not be increased to a total of more than 5 years, to avoid errors. If you want to know more about the difference between internal run and total run lenghts, or if you want to run the model for more than 1 year, check <a href="#run-configuration-for-multiple-years">Run configuration for multiple years</a>.
</div>

----------------------------------------------------------------------------------------

## Run {{ model }} configuration
After editing the configuration, we are ready to run {{ model }}. 
<br>
{{ model }} suites run on <a href="https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview" target="_blank"><i>Gadi</i></a> through a PBS job submission managed by <i>payu</i>.

### Payu setup (optional)
As a first step, from the control directory, is good practice to run:
<pre><code>payu setup</code></pre>
This will prepare the model run, based on the experiment configuration.
<terminal-animation>
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
</terminal-animation>
<div class="note">
    You can skip this step as it is included also in the run command. However, runnning it explicitly helps to check for errors and make sure executable and restart directories are accessible.
</div>

### Run configuration
To run {{ model }} configuration for one internal run length (controlled by <code>restart_period</code> in the <code>config.yaml</code> file), run:
<pre><code>payu run -f</code></pre>
This will submit a single job to the queue with a total run length of <code>restart_period</code>.
<br>
<div class="note">
    The <code>-f</code> option ensures that <i>payu</i> will run even if there is an existing non-empty <i>work</i> directory, which happens if a run crashes.
</div>
<terminal-animation>
    <terminal-line data="input">payu run -f</terminal-line>
    <terminal-line>payu: warning: Job request includes 47 unused CPUs.</terminal-line>
    <terminal-line>payu: warning: CPU request increased from 241 to 288</terminal-line>
    <terminal-line>Loading input manifest: manifests/input.yaml</terminal-line>
    <terminal-line>Loading restart manifest: manifests/restart.yaml</terminal-line>
    <terminal-line>Loading exe manifest: manifests/exe.yaml</terminal-line>
    <terminal-line>payu: Found modules in /opt/Modules/v4.3.0</terminal-line>
    <terminal-line>qsub -q normal -P tm70 -l walltime=10800 -l ncpus=288 -l mem=1000GB -N 1deg_jra55_iaf -l wd -j n -v PYTHONPATH=/g/data3/tm70/dm5220/scripts/python_modules/,PAYU_PATH=/g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin,PAYU_FORCE=True,MODULESHOME=/opt/Modules/v4.3.0,MODULES_CMD=/opt/Modules/v4.3.0/libexec/modulecmd.tcl,MODULEPATH=/g/data3/hh5/public/modules:/etc/scl/modulefiles:/opt/Modules/modulefiles:/opt/Modules/v4.3.0/modulefiles:/apps/Modules/modulefiles -W umask=027 -l storage=gdata/hh5+gdata/ik11+gdata/qv56 -- /g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin/python3.9 /g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin/payu-run</terminal-line>
    <terminal-line>&lt;job-ID&gt;.gadi-pbs</terminal-line>
</terminal-animation>

### Run configuration for multiple years
If you want to run {{ model }} configuration for multiple internal run lengths (controlled by <code>restart_period</code> in the <code>config.yaml</code> file), you can use the option <code>-n</code>:
<pre><code>payu run -f -n &lt;number-of-runs&gt;</code></pre>
This will run the configuration <code>number-of-runs</code> times with a total run length of <code>restart_period * number-of-runs</code>.
<br>
For example, if you want to run the configuration for a total of 50 years and you set <code>restart_period = 5, 0, 0</code> (5 years), you will have to set the <code>number-of-runs</code> to 10:
<pre><code>payu run -f -n 10</code></pre>
----------------------------------------------------------------------------------------

## Monitor {{ model }} runs
Currently, there is no specific tool to monitor {{ model }} runs. 
<br>
One way to check the status of our run is running:
<pre><code>qstat -u $USER</code></pre>
This will show the status of all your PBS jobs (if there is any PBS job submitted):
<terminal-animation>
    <terminal-line data="input">qstat -u $USER</terminal-line>
    <terminal-line linedelay=500>Job id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Use&nbsp;S Queue</terminal-line>
    <terminal-line linedelay=0>---------------------  ---------------- ----------------  -------- - -----</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1deg_jra55_iaf&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID-2&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID-3&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-animation>
If you changed the <code>jobname</code> in the PBS resources of the <a href="#edit-the-master-configuration-file">Master Configuration file</a>, that will be your job's <i>Name</i> instead of <code>1deg_jra55_iaf</code>.
<br>
<i>S</i> indicates the status of your run:
<ul>
    <li>Q &rarr; Job waiting in the queue to start</li>
    <li>R &rarr; Job running</li>
    <li>E &rarr; Job ending</li>
</ul>
If there is no listed job with your <code>jobname</code> (or if there is no job submitted at all), your run might have successfully completed, or might have been terminated due to an error.

### Stop a run
If you want to manually terminate a run, you can do it by running:
<pre><code>qdel &lt;job-ID&gt;</code></pre>

### Error and output log files
While the model is running, <i>payu</i> saves the standard output and standard error into the files <code>access-om2.out</code> and <code>access-om2.err</code> in the <i>control</i> directory. You can examine these files, as the run progresses, to check on it's status.
<br>
After the model has completed its run, or if it crashed, the output and error log files, respectively, are renamed by default into <code>jobname.o&lt;job-ID&gt;</code> and <code>jobname.e&lt;job-ID&gt;</code>.
----------------------------------------------------------------------------------------

## {{ model }} outputs
While the configuration is running, output files (as well as restart files) are moved from the <code>work</code> directory to the <code>archive</code> directory, under <code>/scratch/$PROJECT/$USER/access-om2/archive</code> (also symlinked in the <i>control</i> directory under <code>~/access-om/1deg_jra55_iaf/archive</code>).
<br>
Both outputs and restarts are stored into subfolders for each different configuration (<code>1deg_jra55_iaf</code> in our case), and inside the configuration folder, they are subdivided for each internal run.
<br>
The format of a typical output folder is <code>outputXXX</code>, whereas the typical restart folder is usually formatted as <code>restartXXX</code>, with <i>XXX</i> being the number of internal run, starting from <code>000</code>.
<br>
In the respective folders, outputs and restarts are separated for each model component.
<terminal-animation>
    <terminal-line data="input">cd /scratch/$PROJECT/$USER/access-om2/archive/1deg_jra55_iaf</terminal-line>
    <terminal-line data="input" directory="/scratch/$PROJECT/$USER/access-om2/archive/1deg_jra55_iaf">ls</terminal-line>
    <terminal-line class="ls-output-format">output000 pbs_logs restart000</terminal-line>
</terminal-animation>

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