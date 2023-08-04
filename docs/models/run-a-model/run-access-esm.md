{% set model = "ACCESS-ESM" %}
# <span class=""> Run {{ model }} </span>
## Requirements
Before running {{ model }}, you need to make sure to possess the right tools and to have an account with specific institutions. 

### General requirements
For the general requirements needed to run all ACCESS models, please refer to the <a href="../../../get_started">Get Started</a> page.

### Model-specific requirements
<ul>
    <li>
        <b>Join the <i>hh5</i> project at NCI</i></b>
        <br>
        The <i>hh5</i> project hosts the conda environment that supports most workflows for climate science on <i>Gadi</i>.
        <br>
        To join the <i>hh5</i> project at NCI, request membership for it on the <a href="https://my.nci.org.au/mancini/project/hh5/join" target="_blank">hh5</a> NCI project page.
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
A suitable {{ model }} pre-industrial configuration is avaible on the <a href="https://github.com/coecms/esm-pre-industrial" target="_blank">coecms GitHub</a>.
<br>
In order to get it, on <i>Gadi</i>, create a directory where to keep the model configuration, and clone the GitHub repo in it by running: 
<pre><code>git clone https://github.com/coecms/esm-pre-industrial.git</code></pre>
<terminal-animation>
    <terminal-line data="input">mkdir -p ~/access-esm</terminal-line>
    <terminal-line data="input">cd ~/access-esm</terminal-line>
    <terminal-line data="input" directory="~/access-esm">git clone https://github.com/coecms/esm-pre-industrial</terminal-line>
    <terminal-line>Cloning into 'esm-pre-industrial'...</terminal-line>
    <terminal-line lineDelay=1000>remote: Enumerating objects: 767, done.</terminal-line>
    <terminal-line>remote: Counting objects: 100% (295/295), done.</terminal-line>
    <terminal-line>remote: Compressing objects: 100% (138/138), done.</terminal-line>
    <terminal-line>remote: Total 767 (delta 173), reused 274 (delta 157), pack-reused 472</terminal-line>
    <terminal-line>Receiving objects: 100% (767/767), 461.57 KiB | 5.24 MiB/s, done.</terminal-line>
    <terminal-line>Resolving deltas: 100% (450/450), done.</terminal-line>
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
        The <b>laboratory</b> is the directory where all parts of the model are kept. For {{ model }}, it is typically <code>/scratch/$PROJECT/$USER/access-esm</code>.
    </li>
    <li>
        The <b>control</b> directory, where the model configuration is kept and from where the model is run (in our case is the cloned directory <code>~/access-esm/esm-pre-industrial</code>).
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
        <terminal-line data="input">cd ~/access-esm/esm-pre-industrial</terminal-line>
        <terminal-line data="input" directory="~/access-esm/esm-pre-industrial">payu init</terminal-line>
        <terminal-line>laboratory path:  /scratch/$PROJECT/$USER/access-esm</terminal-line>
        <terminal-line>binary path:  /scratch/$PROJECT/$USER/access-esm/bin</terminal-line>
        <terminal-line>input path:  /scratch/$PROJECT/$USER/access-esm/input</terminal-line>
        <terminal-line>work path:  /scratch/$PROJECT/$USER/access-esm/work</terminal-line>
        <terminal-line>archive path:  /scratch/$PROJECT/$USER/access-esm/archive</terminal-line>
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
        <pre><code>jobname: pre-industrial
            queue: normal
            walltime: 20:00:00
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
        <b>Link to the laboratory directory</b>
        <br>
        <pre><code># note: if laboratory is relative path, it is relative to /scratch/$PROJECT/$USER
            laboratory: access-esm
        </code></pre>
        This will set the laboratory directory. Relative paths are relative to <code>/scratch/$PROJECT/$USER</code>. Absolute paths can be specified as well.
    </li>
    <li>
        <b>Model</b>
        <pre><code>model: access</code></pre>
        The main model. This tells <i>payu</i> which driver to use (<i>access</i> stands for {{ model }}).
    </li>
    <li>
        <b>Submodels</b>
        <br>
        <pre><code>submodels:
            &nbsp;&nbsp;- name: atmosphere
            &nbsp;&nbsp;&nbsp;&nbsp;model: um
            &nbsp;&nbsp;&nbsp;&nbsp;ncpus: 192
            &nbsp;&nbsp;&nbsp;&nbsp;exe: /g/data/access/payu/access-esm/bin/coe/um7.3x
            &nbsp;&nbsp;&nbsp;&nbsp;input:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/access/payu/access-esm/input/pre-industrial/atmosphere
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/access/payu/access-esm/input/pre-industrial/start_dump<br>
            &nbsp;&nbsp;- name: ocean
            &nbsp;&nbsp;&nbsp;&nbsp;model: mom
            &nbsp;&nbsp;&nbsp;&nbsp;ncpus: 180
            &nbsp;&nbsp;&nbsp;&nbsp;exe: /g/data/access/payu/access-esm/bin/coe/mom5xx
            &nbsp;&nbsp;&nbsp;&nbsp;input:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/access/payu/access-esm/input/pre-industrial/ocean/common
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/access/payu/access-esm/input/pre-industrial/ocean/pre-industrial<br>
            &nbsp;&nbsp;- name: ice
            &nbsp;&nbsp;&nbsp;&nbsp;model: cice
            &nbsp;&nbsp;&nbsp;&nbsp;ncpus: 12
            &nbsp;&nbsp;&nbsp;&nbsp;exe: /g/data/access/payu/access-esm/bin/coe/cicexx
            &nbsp;&nbsp;&nbsp;&nbsp;input:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/access/payu/access-esm/input/pre-industrial/ice<br>
            &nbsp;&nbsp;- name: coupler
            &nbsp;&nbsp;&nbsp;&nbsp;model: oasis
            &nbsp;&nbsp;&nbsp;&nbsp;ncpus: 0
            &nbsp;&nbsp;&nbsp;&nbsp;input:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /g/data/access/payu/access-esm/input/pre-industrial/coupler
        </code></pre>
        {{ model }} is a coupled model, which means it has multiple submodels (i.e. model components). 
        <br>
        This section specifies the submodels and contains configuration options (for example the directories of input files) that are required to ensure the model can execute correctly. Each submodel also has additional configuration options that are read in when the submodel is running. These specific configuration options are found in the subdirectory of the <i>control</i> directory having the <i>name</i> of the submodel (e.g. in our case the configuration for the atmosphere submodel, i.e. the UM, will be in the directory <code>~/access-esm/esm-pre-industrial/atmosphere</code>).
    </li>
    <li>
        <b>Collate</b>
        <br>
        <pre><code>collate:
            &nbsp;&nbsp;exe: /g/data/access/payu/access-esm/bin/mppnccombine
            &nbsp;&nbsp;restart: true
            &nbsp;&nbsp;mem: 4GB
        </code></pre>
        The <i>collate</i> process joins a number of smaller files, which contain different parts of the model grid, together into target output files. The restart files are typically tiled in the same way and will also be joined together if the <i>restart</i> option is set to <code>true</code>.
    </li>
    <li>
        <b>Restart</b>
        <br>
        <pre><code>restart: /g/data/access/payu/access-esm/restart/pre-industrial</code></pre>
        The location of the files used for a warm restart.
    </li>
    <li>
        <b>Start date and internal run length</b>
        <br>
        <pre><code>calendar:
            &nbsp;&nbsp;start:
            &nbsp;&nbsp;&nbsp;&nbsp;year: 101
            &nbsp;&nbsp;&nbsp;&nbsp;month: 1
            &nbsp;&nbsp;&nbsp;&nbsp;days: 1<br>
            &nbsp;&nbsp;runtime:
            &nbsp;&nbsp;&nbsp;&nbsp;years: 1
            &nbsp;&nbsp;&nbsp;&nbsp;months: 0
            &nbsp;&nbsp;&nbsp;&nbsp;days: 0
        </code></pre>
        This section specifies the start date and internal run length.
        <br>
        <div class="note">
            The internal run length (controlled by <code>runtime</code>) can be different from the total run length. Also, the <code>runtime</code> value can be lowered, but should not be increased to a total of more than 1 year, to avoid errors. If you want to know more about the difference between internal run and total run lenghts, or if you want to run the model for more than 1 year, check <a href="#run-configuration-for-multiple-years">Run configuration for multiple years</a>.
        </div>
    </li>
    <li>
        <b>Number of runs per PBS submission</b>
        <br>
        <pre><code>runspersub: 5</code></pre>
        {{ model }} configurations are often run in multiple steps (or cycles), with <i>payu</i> running a maximum of <code>runspersub</code> internal runs for every PBS job submission.
        <br>
        <div class="note">
            If we increase <code>runspersub</code>, we might need to increase the <i>walltime</i> in the PBS resources.
        </div>
    </li>
</ul>
<br>
To know more about other configuration settings for the <code>config.yaml</code> file, please check <a href="https://payu.readthedocs.io/en/latest/config.html" target="_blank">how to configure your experiment with <i>payu</i></a>.
----------------------------------------------------------------------------------------

## Run {{ model }} configuration
After editing the configuration, we are ready to run {{ model }}. 
<br>
{{ model }} suites run on <a href="https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview" target="_blank">Gadi</a> through a PBS job submission managed by <i>payu</i>.

### Payu setup (optional)
As a first step, from the control directory, is good practice to run:
<pre><code>payu setup</code></pre>
This will prepare the model run, based on the experiment configuration.
<terminal-animation>
    <terminal-line data="input">payu setup</terminal-line>
    <terminal-line>laboratory path:  /scratch/$PROJECT/$USER/access-esm</terminal-line>
    <terminal-line>binary path:  /scratch/$PROJECT/$USER/access-esm/bin</terminal-line>
    <terminal-line>input path:  /scratch/$PROJECT/$USER/access-esm/input</terminal-line>
    <terminal-line>work path:  /scratch/$PROJECT/$USER/access-esm/work</terminal-line>
    <terminal-line>archive path:  /scratch/$PROJECT/$USER/access-esm/archive</terminal-line>
    <terminal-line>Loading input manifest: manifests/input.yaml</terminal-line>
    <terminal-line>Loading restart manifest: manifests/restart.yaml</terminal-line>
    <terminal-line>Loading exe manifest: manifests/exe.yaml</terminal-line>
    <terminal-line>Setting up atmosphere</terminal-line>
    <terminal-line>Setting up ocean</terminal-line>
    <terminal-line>Setting up ice</terminal-line>
    <terminal-line>Setting up coupler</terminal-line>
    <terminal-line>Checking exe and input manifests</terminal-line>
    <terminal-line>Updating full hashes for 3 files in manifests/exe.yaml</terminal-line>
    <terminal-line>Creating restart manifest</terminal-line>
    <terminal-line>Updating full hashes for 30 files in manifests/restart.yaml</terminal-line>
    <terminal-line>Writing manifests/restart.yaml</terminal-line>
    <terminal-line>Writing manifests/exe.yaml</terminal-line>
</terminal-animation>
<div class="note">
    You can skip this step as it is included also in the run command. However, runnning it explicitly helps to check for errors and make sure executable and restart directories are accessible.
</div>

### Run configuration
To run {{ model }} configuration for one internal run length (controlled by <code>runtime</code> in the <code>config.yaml</code> file), run:
<pre><code>payu run -f</code></pre>
This will submit a single job to the queue with a total run length of <code>runtime</code>. It there is no previous run, it will start from the <code>start</code> date indicated in the <code>config.yaml</code> file, otherwise it will perform a warm restart from a precedently saved restart file.
<br>
<div class="note">
    The <code>-f</code> option ensures that <i>payu</i> will run even if there is an existing non-empty <i>work</i> directory, which happens if a run crashes.
</div>
<terminal-animation>
    <terminal-line data="input">payu run -f</terminal-line>
    <terminal-line>Loading input manifest: manifests/input.yaml</terminal-line>
    <terminal-line>Loading restart manifest: manifests/restart.yaml</terminal-line>
    <terminal-line>Loading exe manifest: manifests/exe.yaml</terminal-line>
    <terminal-line>payu: Found modules in /opt/Modules/v4.3.0</terminal-line>
    <terminal-line>qsub -q normal -P &lt;project&gt; -l walltime=11400 -l ncpus=384 -l mem=1536GB -N pre-industrial -l wd -j n -v PAYU_PATH=/g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin,MODULESHOME=/opt/Modules/v4.3.0,MODULES_CMD=/opt/Modules/v4.3.0/libexec/modulecmd.tcl,MODULEPATH=/g/data3/hh5/public/modules:/etc/scl/modulefiles:/opt/Modules/modulefiles:/opt/Modules/v4.3.0/modulefiles:/apps/Modules/modulefiles -W umask=027 -l storage=gdata/access+gdata/hh5 -- /g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin/python3.9 /g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin/payu-run</terminal-line>
    <terminal-line>&lt;job-ID&gt;.gadi-pbs</terminal-line>
</terminal-animation>

### Run configuration for multiple years
If you want to run {{ model }} configuration for multiple internal run lengths (controlled by <code>runtime</code> in the <code>config.yaml</code> file), you can use the option <code>-n</code>:
<pre><code>payu run -f -n &lt;number-of-runs&gt;</code></pre>
This will run the configuration <code>number-of-runs</code> times with a total run length of <code>runtime * number-of-runs</code>. The number of consecutive PBS jobs submitted to the queue depends on the <code>runspersub</code> value specified in the <code>config.yaml</code> file.

### Understand <code>runtime</code>, <code>runspersub</code>, and <code>-n</code> parameters
With the correct use of <code>runtime</code>, <code>runspersub</code>, and <code>-n</code> parameters, we can have full control of our run.
<br>
<ul>
    <li>
        <code>runtime</code> defines the internal run length.
    </li>
    <li>
        <code>runspersub</code> defines the maximum number of internal runs for every PBS job submission.
    </li>
    <li>
        <code>-n</code> sets the number of internal runs to be performed.
    </li>
</ul>
Let's have some practical examples:
<ul>
    <li>
        <b>Run 20 years of simulation, with resubmission every 5 years</b>
        <br>
        To have a total run length of 20 years, with a resubmition cycle of 5 years, we can leave <code>runtime</code> to the default value of <code>1 year</code>, set <code>runspersub</code> to <code>5</code>, and run the configuration using <code>-n 20</code>:
        <pre><code>payu run-f -n 20</code></pre>
        This will submit subsequent jobs for the following years: 1 to 5, 6 to 10, 11 to 15, and 16 to 20. With a total of 4 PBS jobs.
    </li>
    <li>
        <b>Run 7 years of simulation, with resubmission every 3 years</b>
        <br>
        To have a total run length of 7 years, with a resubmition cycle of 3 years, we can leave <code>runtime</code> to the default value of <code>1 year</code>, set <code>runspersub</code> to <code>3</code>, and run the configuration using <code>-n 7</code>:
        <pre><code>payu run -f -n 7</code></pre>
        This will submit subsequent jobs for the following years: 1 to 3, 4 to 6, and 7. With a total of 3 PBS jobs.
    </li>
    <li>
        <b>Run 3 months and 10 days of simulation, in one single submission</b>
        <br>
        To have a total run length of 3 months and 10 days, all in a single submission, we have to set <code>runtime</code> to:
        <pre><code>years: 0
            months: 3
            days: 10
        </code></pre>
        set <code>runspersub</code> to <code>1</code> (or any value > 1), and run the configuration without <code>-n</code> (or with <code>-n</code> equals <code>1</code>):
        <pre><code>payu run -f</code></pre>
    </li>
    <li>
        <b>Run 1 year and 4 months of simulation, with resubmission every 4 months</b>
        <br>
        To have a total run length of 1 year and 4 months (16 months), we will have to split it into multiple internal runs. For example, we can have 4 internal runs of 4 months each. Therefore, we will have to set <code>runtime</code> to:
        <pre><code>years: 0
            months: 4
            days: 0
        </code></pre>
        Since the internal run length is set to 4 months, to resubmit our jobs every 4 months (i.e. every internal run), we have to set <code>runspersub</code> to <code>1</code>. Finally, we will perform 4 internal runs by running the configuration with <code>-n 4</code>:
        <pre><code>payu run -f -n 4</code></pre>
    </li>
</ul>
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
    <terminal-line linedelay=0>&lt;job-ID&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pre-industrial&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID-2&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID-3&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-animation>
If you changed the <code>jobname</code> in the PBS resources of the <a href="#edit-the-master-configuration-file">Master Configuration file</a>, that will be your job's <i>Name</i> instead of <code>pre-industrial</code>.
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
While the model is running, <i>payu</i> saves the standard output and standard error into the files <code>access.out</code> and <code>access.err</code> in the <i>control</i> directory. You can examine these files, as the run progresses, to check on it's status.
<br>
After the model has completed its run, or if it crashed, the output and error log files, respectively, are renamed by default into <code>jobname.o&lt;job-ID&gt;</code> and <code>jobname.e&lt;job-ID&gt;</code>.
----------------------------------------------------------------------------------------

## {{ model }} outputs
While the configuration is running, output files (as well as restart files) are moved from the <code>work</code> directory to the <code>archive</code> directory, under <code>/scratch/$PROJECT/$USER/access-esm/archive</code> (also symlinked in the <i>control</i> directory under <code>~/access-esm/esm-pre-industrial/archive</code>).
<br>
Both outputs and restarts are stored into subfolders for each different configuration (<code>esm-pre-industrial</code> in our case), and inside the configuration folder, they are subdivided for each internal run.
<br>
The format of a typical output folder is <code>outputXXX</code>, whereas the typical restart folder is usually formatted as <code>restartXXX</code>, with <i>XXX</i> being the number of internal run, starting from <code>000</code>.
<br>
In the respective folders, outputs and restarts are separated for each model component.
<br>
For the atmospheric output data, each file it is usually a <a href = "https://code.metoffice.gov.uk/doc/um/latest/papers/umdp_F03.pdf" target="_blank">UM fieldsfile</a>, formatted as <code>&lt;UM-suite-identifier&gt;a.p&lt;output-stream-identifier&gt;&lt;time-identifier&gt;</code>.
<terminal-animation>
    <terminal-line data="input">cd /scratch/$PROJECT/$USER/access-esm/archive/esm-pre-industrial</terminal-line>
    <terminal-line data="input" directory="/scratch/$PROJECT/$USER/access-esm/archive/esm-pre-industrial">ls</terminal-line>
    <terminal-line class="ls-output-format">output000 pbs_logs restart000</terminal-line>
    <terminal-line data="input" directory="/scratch/$PROJECT/$USER/access-esm/archive/esm-pre-industrial">ls output000/atmosphere</terminal-line>
    <terminal-line class="ls-output-format">aiihca.daa1210 aiihca.daa1810 aiihca.paa1apr aiihca.paa1jun aiihca.pea1apr aiihca.pea1jun aiihca.pga1apr aiihca.pga1jun atm.fort6.pe0 exstat ihist prefix.CNTLGEN UAFLDS_A aiihca.daa1310  aiihca.daa1910  aiihca.paa1aug aiihca.paa1mar aiihca.pea1aug aiihca.pea1mar aiihca.pga1aug aiihca.pga1mar cable.nml fort.57 INITHIS prefix.PRESM_A um_env.py aiihca.daa1410 aiihca.daa1a10 aiihca.paa1dec aiihca.paa1may aiihca.pea1dec aiihca.pea1may aiihca.pga1dec aiihca.pga1may CNTLALL ftxx input_atm.nml SIZES xhist aiihca.daa1510 aiihca.daa1b10 aiihca.paa1feb aiihca.paa1nov aiihca.pea1feb aiihca.pea1nov aiihca.pga1feb aiihca.pga1nov CONTCNTL ftxx.new namelists STASHC aiihca.daa1610 aiihca.daa1c10 aiihca.paa1jan aiihca.paa1oct aiihca.pea1jan aiihca.pea1oct aiihca.pga1jan aiihca.pga1oct debug.root.01 ftxx.vars nout.000000 thist aiihca.daa1710 aiihca.daa2110 aiihca.paa1jul aiihca.paa1sep aiihca.pea1jul aiihca.pea1sep aiihca.pga1jul aiihca.pga1sep errflag hnlist prefix.CNTLATM UAFILES_A</terminal-line>
</terminal-animation>
----------------------------------------------------------------------------------------
<!-- References -->
<h6>References</h6>
<ul class="references">
    <li>
        <a href = "https://github.com/coecms/esm-pre-industrial" target="_blank">https://github.com/coecms/esm-pre-industrial</a>
    </li>
    <li>
        <a href = "https://payu.readthedocs.io/en/latest/usage.html" target="_blank">https://payu.readthedocs.io/en/latest/usage.html</a>
    </li>
</ul>