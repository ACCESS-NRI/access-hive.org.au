{% set model = "ACCESS-ESM" %}

# Run {{ model }}

## Prerequisites

### General prerequisites

Before running {{ model }}, you need to fulfil general prerequisites outlined in the [First Steps](/getting_started/first_steps) section.

If you are unsure whether {{ model }} is the right choice for your experiment, take a look at the overview of [ACCESS Models](/models).

### Model-specific prerequisites

{{ model }} is installed on NCI's supercomputer <i>Gadi</i> and uses <a href="#payu"><i>payu</i></a>, a tool for running and managing model experiments. Following these prerequisites ensures you have access to this infrastructure.

<ul>
    <li>
        <b>Join the <i>access</i> and <i>hh5</i> projects at NCI</i></b>
        <br>
        To join these projects, request membership on the respective <a href="https://my.nci.org.au/mancini/project/access/join" target="_blank">access</a> and <a href="https://my.nci.org.au/mancini/project/hh5/join" target="_blank">hh5</a> NCI project pages.
        <br>
        For more information on joining specific NCI projects, refer to <a href="https://opus.nci.org.au/display/Help/How+to+connect+to+a+project" target="_blank">How to connect to a project</a>.
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

{{ model }} configurations are available in the <a href="https://github.com/coecms/access-esm" target="_blank">coecms GitHub</a> repository.
<br>
To get it on <i>Gadi</i>, clone the {{ model }} GitHub repository by running:

<pre><code>git clone https://github.com/coecms/access-esm.git</code></pre>

This will create the <code>access-esm</code> folder.
<terminal-window>
<terminal-line data="input">git clone https://github.com/coecms/access-esm.git</terminal-line>
<terminal-line>Cloning into 'access-esm'...</terminal-line>
<terminal-line lineDelay=1000>remote: Enumerating objects: 1625, done.</terminal-line>
<terminal-line>remote: Counting objects: 100% (1625/1625), done.</terminal-line>
<terminal-line>remote: Compressing objects: 100% (575/575), done.</terminal-line>
<terminal-line>remote: Total 1625 (delta 1042), reused 1621 (delta 1040), pack-reused 0</terminal-line>
<terminal-line>Receiving objects: 100% (1625/1625), 2.79 MiB | 11.24 MiB/s, done.</terminal-line>
<terminal-line>Resolving deltas: 100% (1042/1042), done.</terminal-line>
<terminal-line data="input">ls ~/access-esm</terminal-line>
<terminal-line class="ls-output-format">atmosphere config.yaml coupler ice manifests ocean README.md</terminal-line>
</terminal-window>

<div class='admonition warning'>
   Some modules may interfere with <code>git</code> commands (e.g., matlab/R2018a). If you have trouble cloning the repository, run the following command before trying again: <pre><code>module purge</code></pre>
   After this step, don't forget to reload the <code>conda/analysis3</code> module to retrieve <code>payu</code>, as specified in the <a href="#model-specific-prerequisites">Model-specific prerequisites</a> section.
</div>
Each {{ model }} configuration is stored as a specially-named branch in the {{ model }} GitHub repository.
To check all the available branches on the repo, run the following command inside the newly-created <code>access-esm</code> folder:
<pre><code>git branch -a</code></pre>
<terminal-window>
    <terminal-line data="input">cd ~/access-esm</terminal-line>
    <terminal-line data="input" directory="~/access-esm">git branch -a</terminal-line>
    <terminal-line>&#1645;&emsp;<span class="green_prompt_output">main</span></terminal-line>
    <terminal-line>&emsp; <span class="red_prompt_output">remotes/origin/82ka</span></terminal-line>
    <terminal-line>&emsp; <span class="red_prompt_output">remotes/origin/HEAD</span> &rarr; origin/main</terminal-line>
    <terminal-line>&emsp; <span class="red_prompt_output">remotes/origin/ccarouge-patch-1</span></terminal-line>
    <terminal-line>&emsp; <span class="red_prompt_output">remotes/origin/historical</span></terminal-line>
    <terminal-line>&emsp; <span class="red_prompt_output">remotes/origin/last-interglacial</span></terminal-line>
    <terminal-line>&emsp; <span class="red_prompt_output">remotes/origin/last-millenium</span></terminal-line>
    <terminal-line>&emsp; <span class="red_prompt_output">remotes/origin/last-millenium-detailed</span></terminal-line>
    <terminal-line>&emsp; <span class="red_prompt_output">remotes/origin/main</span></terminal-line>
    <terminal-line>&emsp; <span class="red_prompt_output">remotes/origin/mid-holocene</span></terminal-line>
    <terminal-line>&emsp; <span class="red_prompt_output">remotes/origin/pre-industrial</span></terminal-line>
    <terminal-line>&emsp; <span class="red_prompt_output">remotes/origin/ssp585</span></terminal-line>
</terminal-window>
The green-coloured branch (preceded by a star sign `*`) indicates the local branch you are currently in.
<br>
The red-coloured branches are the available remote branches, formatted as <code>remotes/origin/&lt;branch-name&gt;</code>.
To switch to a specific branch you can run the following command: 
<pre><code>git checkout &lt;branch-name&gt;</code></pre>
For example, the pre-industrial configuration of {{ model }} is available in the <code>pre-industrial</code> branch. To use the pre-industrial configuration, run:
<pre><code>git checkout pre-industrial</code></pre>
<terminal-window>
    <terminal-line data="input">git checkout pre-industrial</terminal-line>
    <terminal-line>branch 'pre-industrial' set up to track 'origin/pre-industrial'.</terminal-line>
    <terminal-line>Switched to a new branch 'pre-industrial'</terminal-line>
    <terminal-line data="input">git branch</terminal-line>
    <terminal-line>&emsp; main</terminal-line>
    <terminal-line>&#1645;&emsp;<span class="green_prompt_output">pre-industrial</span></terminal-line>
</terminal-window>
----------------------------------------------------------------------------------------

## Edit {{ model }} configuration

It is good practice to create a new git branch to store all your modifications for a particular run, so as not to modify the reference configuration.

To create a new branch called <i>"example_run"</i>, as a copy of the <code>pre-industrial</code> branch, from within the <code>access-esm</code> directory execute:

<pre><code>git checkout -b example_run --no-track origin/pre-industrial</code></pre>

This command will also switch to the new <code>example_run</code> branch.
<terminal-window>
<terminal-line data="input">git branch</terminal-line>
<terminal-line>&emsp; main</terminal-line>
<terminal-line>&#1645;&emsp;<span class="green_prompt_output">pre-industrial</span></terminal-line>
<terminal-line data="input">git checkout -b example_run --no-track origin/pre-industrial</terminal-line>
<terminal-line>Switched to a new branch 'example_run'</terminal-line>
<terminal-line data="input">git branch</terminal-line>
<terminal-line>&#1645;&emsp;<span class="green_prompt_output">example_run</span></terminal-line>
<terminal-line>&emsp; main</terminal-line>
<terminal-line>&emsp; pre-industrial</span></terminal-line>
</terminal-window>

### Payu

<a href="https://payu.readthedocs.io/en/latest/" target="_blank"><i>Payu</i></a> is a workflow management tool for running numerical models in supercomputing environments.
<br>
The general layout of a <i>payu</i>-supported model run consists of two main directories:

<ul>
    <li>
        The <b>laboratory</b> directory, where all the model components reside. For {{ model }}, it is typically <code>/scratch/$PROJECT/$USER/access-esm</code>.
    </li>
    <li>
        The <b>control</b> directory, where the model configuration resides and from where the model is run (in this example, the cloned directory <code>~/access-esm</code>).
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
        <terminal-line data="input">cd ~/access-esm/esm-pre-industrial</terminal-line>
        <terminal-line data="input" directory="~/access-esm">payu init</terminal-line>
        <terminal-line>laboratory path:  /scratch/$PROJECT/$USER/access-esm</terminal-line>
        <terminal-line>binary path:  /scratch/$PROJECT/$USER/access-esm/bin</terminal-line>
        <terminal-line>input path:  /scratch/$PROJECT/$USER/access-esm/input</terminal-line>
        <terminal-line>work path:  /scratch/$PROJECT/$USER/access-esm/work</terminal-line>
        <terminal-line>archive path:  /scratch/$PROJECT/$USER/access-esm/archive</terminal-line>
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
        <pre><code>jobname: pre-industrial
queue: normal
walltime: 3:10:00</code></pre>
        These lines can be edited to change the <a href="https://opus.nci.org.au/display/Help/PBS+Directives+Explained" target="_blank">PBS directives</a> for the <a href="https://opus.nci.org.au/display/Help/4.+PBS+Jobs" target="_blank">PBS job</a>.
        <br>
        For example, to run {{ model }} under the <code>tm70</code> project (ACCESS-NRI), add the following line:
        <pre><code>project: tm70</code></pre>
        <div class='admonition warning'>
            The <code>project</code> entry should always refer to a project with allocated <i>Service Units</i> (SU), that you are a member of. If not set explicitly, {{ model }} will run using your <a href="/getting_started/first_steps#change-default-project-on-gadi">default project</a> (this default project still needs to have allocated SU). For more information, check <a href="/getting_started/first_steps#join-relevant-nci-projects">how to join relevant NCI projects</a>.
        </div>  
    </li>
    <li>
        <b>Link to the laboratory directory</b>
        <br>
        <pre><code># note: if laboratory is relative path, it is relative to /scratch/$PROJECT/$USER
laboratory: access-esm</code></pre>
        These lines set the laboratory directory path, which is relative to <code>/scratch/$PROJECT/$USER</code>. Absolute paths can also be specified.
    </li>
    <li>
        <b>Model</b>
         <br>
        <pre><code>model: access</code></pre>
        This line tells <i>payu</i> which driver to use for the main model (<code>access</code> refers to {{ model }}).
    </li>
    <li>
        <b>Submodels</b>
        <br>
        <pre><code>submodels:
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
        - /g/data/access/payu/access-esm/input/pre-industrial/coupler</code></pre>
        {{ model }} is a coupled model deploying multiple submodels (i.e. <a href="/models/configurations/access-esm/#model-components">model components</a>).
        This section specifies the submodels and configuration options required to execute the model correctly.
        <br>
        Each submodel contains additional configuration options that are read in when the submodel is running. These options are specified in the subfolder of the <i>control</i> directory, whose name matches the submodel's <code>name</code> (e.g., configuration options for the <code>atmosphere</code> submodel are in the <code>~/access-esm/esm-pre-industrial/atmosphere</code> directory).
    </li>
    <li>
        <b>Collate</b>
        <br>
        <pre><code>collate:
    exe: /g/data/access/payu/access-esm/bin/mppnccombine
    restart: true
    mem: 4GB</code></pre>
        The <code>collate</code> process combines a number of smaller files, which contain different parts of the model grid, into target output files. Restart files are typically tiled in the same way and will also be combined together if the <code>restart</code> option is set to <code>true</code>.
    </li>
    <li>
        <b>Restart</b>
        <br>
        <pre><code>restart: /g/data/access/payu/access-esm/restart/pre-industrial</code></pre>
        This is the location of the files used for a warm restart.
    </li>
    <li>
        <b>Start date and internal run length</b>
        <br>
        <pre><code>calendar:
    start:
        year: 101
        month: 1
        days: 1<br>
    runtime:
        years: 1
        months: 0
        days: 0</code></pre>
        This section specifies the start date and internal run length.
        <div class='admonition warning'>
            The internal run length (controlled by <code>runtime</code>) can be different from the total run length. Also, while <code>runtime</code> can be reduced, it should not be increased to more than 1 year to avoid errors. For more information about the difference between internal run and total run lengths, or how to run the model for more than 1 year, refer to the section <a href="#run-configuration-for-multiple-years">Run configuration for multiple years</a>.
        </div>
    </li>
    <li>
        <b>Number of runs per PBS submission</b>
        <br>
        <pre><code>runspersub: 1</code></pre>
        {{ model }} configurations are often run in multiple steps (or cycles), with <i>payu</i> running a maximum of <code>runspersub</code> internal runs for every <a href="https://opus.nci.org.au/display/Help/4.+PBS+Jobs" target="_blank">PBS job</a> submission.
        <div class='admonition warning'>
            If you increase <code>runspersub</code>, you may need to increase the <i>walltime</i> in the PBS resources.
        </div>
    </li>
</ul>
<br>
To find out more about other configuration settings for the <code>config.yaml</code> file, check out <a href="https://payu.readthedocs.io/en/latest/config.html" target="_blank">how to configure your experiment with <i>payu</i></a>.

### Edit a single {{ model }} component configuration

Each of <a href="/models/configurations/access-esm/#model-components">{{ model }} components</a> contains additional configuration options that are read in when the model component is running. These options are typically useful to modify the physics used in the model or the input data.
They are specified in the subfolder of the <i>control</i> directory, whose name matches the submodel's name as specified in the <code>config.yaml</code> <code>submodel</code> section (e.g., configuration options for the <code>atmosphere</code> submodel are in the <code>~/access-esm/esm-pre-industrial/atmosphere</code> directory).
To modify these options please refer to the User Guide of each individual model component.

---

## Run {{ model }} configuration

After editing the configuration, you are ready to run {{ model }}.
<br>
{{ model }} suites run on <a href="https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview" target="_blank">Gadi</a> through a <a href="https://opus.nci.org.au/display/Help/4.+PBS+Jobs" target="_blank">PBS job</a> submission managed by <i>payu</i>.

### Payu setup (optional)

As a first step, from within the <i>control</i> directory, it is good practice to run:

<pre><code>payu setup</code></pre>

This will prepare the model run, based on the experiment configuration.
<terminal-window>
<terminal-line data="input">payu setup</terminal-line>
<terminal-line>laboratory path: /scratch/$PROJECT/$USER/access-esm</terminal-line>
<terminal-line>binary path: /scratch/$PROJECT/$USER/access-esm/bin</terminal-line>
<terminal-line>input path: /scratch/$PROJECT/$USER/access-esm/input</terminal-line>
<terminal-line>work path: /scratch/$PROJECT/$USER/access-esm/work</terminal-line>
<terminal-line>archive path: /scratch/$PROJECT/$USER/access-esm/archive</terminal-line>
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
</terminal-window>

<div class='admonition warning'>
    This step can be skipped as it is also included in the run command. However, running it explicitly helps to check for errors and make sure executable and restart directories are accessible.
</div>

### Run configuration

To run {{ model }} configuration for one internal run length (controlled by <code>runtime</code> in the <code>config.yaml</code> file), execute:

<pre><code>payu run -f</code></pre>

This will submit a single job to the queue with a total run length of <code>runtime</code>. If there is no previous run, it will start from the <code>start</code> date indicated in the <code>config.yaml</code> file. Otherwise, it will perform a warm restart from a previously saved restart file.
<br>

<div class='admonition warning'>
    The <code>-f</code> option ensures that <i>payu</i> will run even if there is an existing non-empty <i>work</i> directory created from a previous failed run.
</div>
<terminal-window>
    <terminal-line data="input">payu run -f</terminal-line>
    <terminal-line>Loading input manifest: manifests/input.yaml</terminal-line>
    <terminal-line>Loading restart manifest: manifests/restart.yaml</terminal-line>
    <terminal-line>Loading exe manifest: manifests/exe.yaml</terminal-line>
    <terminal-line>payu: Found modules in /opt/Modules/v4.3.0</terminal-line>
    <terminal-line>qsub -q normal -P &lt;project&gt; -l walltime=11400 -l ncpus=384 -l mem=1536GB -N pre-industrial -l wd -j n -v PAYU_PATH=/g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin,MODULESHOME=/opt/Modules/v4.3.0,MODULES_CMD=/opt/Modules/v4.3.0/libexec/modulecmd.tcl,MODULEPATH=/g/data3/hh5/public/modules:/etc/scl/modulefiles:/opt/Modules/modulefiles:/opt/Modules/v4.3.0/modulefiles:/apps/Modules/modulefiles -W umask=027 -l storage=gdata/access+gdata/hh5 -- /g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin/python3.9 /g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin/payu-run</terminal-line>
    <terminal-line>&lt;job-ID&gt;.gadi-pbs</terminal-line>
</terminal-window>

### Run configuration for multiple years

If you want to run {{ model }} configuration for multiple internal run lengths (controlled by <code>runtime</code> in the <code>config.yaml</code> file), use the option <code>-n</code>:

<pre><code>payu run -f -n &lt;number-of-runs&gt;</code></pre>

This will run the configuration <code>number-of-runs</code> times with a total run length of <code>runtime \* number-of-runs</code>. The number of consecutive <a href="https://opus.nci.org.au/display/Help/4.+PBS+Jobs" target="_blank">PBS jobs</a> submitted to the queue depends on the <code>runspersub</code> value specified in the <code>config.yaml</code> file.

### Understand <code>runtime</code>, <code>runspersub</code>, and <code>-n</code> parameters

With the correct use of <code>runtime</code>, <code>runspersub</code> and <code>-n</code> parameters, you can have full control of your run.
<br>

<ul>
    <li>
        <code>runtime</code> defines the internal run length.
    </li>
    <li>
        <code>runspersub</code> defines the maximum number of internal runs for every <a href="https://opus.nci.org.au/display/Help/4.+PBS+Jobs" target="_blank">PBS job</a> submission.
    </li>
    <li>
        <code>-n</code> sets the number of internal runs to be performed.
    </li>
</ul>
Now some practical examples:
<ul>
    <li>
        <b>Run 20 years of simulation with resubmission every 5 years</b>
        <br>
        To have a total run length of 20 years with a 5-year resubmission cycle, leave <code>runtime</code> as the default value of <code>1 year</code> and set <code>runspersub</code> to <code>5</code>. Then, run the configuration with <code>-n</code> set to <code>20</code>:
        <pre><code>payu run-f -n 20</code></pre>
        This will submit subsequent jobs for the following years: 1 to 5, 6 to 10, 11 to 15, and 16 to 20, which is a total of 4 PBS jobs.
    </li>
    <li>
        <b>Run 7 years of simulation with resubmission every 3 years</b>
        <br>
        To have a total run length of 7 years with a 3-year resubmission cycle, leave <code>runtime</code> as the default value of <code>1 year</code> and set <code>runspersub</code> to <code>3</code>. Then, run the configuration with <code>-n</code> set to <code>7</code>:
        <pre><code>payu run -f -n 7</code></pre>
        This will submit subsequent jobs for the following years: 1 to 3, 4 to 6, and 7, which is a total of 3 PBS jobs.
    </li>
    <li>
        <b>Run 3 months and 10 days of simulation in a single submission</b>
        <br>
        To have a total run length of 3 months and 10 days in a single submission, set the <code>runtime</code> as follows:
        <pre><code>years: 0
months: 3
days: 10</code></pre>
        Set <code>runspersub</code> to <code>1</code> (or any value > 1) and run the configuration without option <code>-n</code> (or with <code>-n</code> set to <code>1</code>):
        <pre><code>payu run -f</code></pre>
    </li>
    <li>
        <b>Run 1 year and 4 months of simulation with resubmission every 4 months</b>
        <br>
        To have a total run length of 1 year and 4 months (16 months), you need to split it into multiple internal runs. For example, 4 internal runs of 4 months each. In this case, set the <code>runtime</code> as follows:
        <pre><code>years: 0
months: 4
days: 0</code></pre>
        Since the internal run length is set to 4 months, set <code>runspersub</code> to <code>1</code> to resubmit your jobs every 4 months (i.e. every internal run). Then, run the configuration with <code>-n</code> set to <code>4</code>:
        <pre><code>payu run -f -n 4</code></pre>
    </li>
</ul>
----------------------------------------------------------------------------------------

## Monitor {{ model }} runs

You can execute the following command to show the status of all your submitted <a href="https://opus.nci.org.au/display/Help/4.+PBS+Jobs" target="_blank">PBS jobs</a>:

<pre><code>qstat -u $USER</code></pre>
<terminal-window>
    <terminal-line data="input">qstat -u $USER</terminal-line>
    <terminal-line linedelay=500>Job id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Use&nbsp;S Queue</terminal-line>
    <terminal-line linedelay=0>---------------------  ---------------- ----------------  -------- - -----</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pre-industrial&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID-2&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID-3&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-window>
If you changed the <code>jobname</code> in the PBS resources of the <a href="#edit-the-master-configuration-file"><i>Master Configuration</i> file</a>, that will appear as your job's <i>Name</i> instead of <code>pre-industrial</code>.
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

While the model is running, <i>payu</i> saves the standard output and standard error in the respective <code>access.out</code> and <code>access.err</code> files in the <i>control</i> directory. You can examine the contents of these files to check on the status of a run as it progresses.
<br>
When the model completes its run, or if it crashes, the output and error log files are by default renamed as <code>jobname.o&lt;job-ID&gt;</code> and <code>jobname.e&lt;job-ID&gt;</code>, respectively.

### Model Live Diagnostics

ACCESS-NRI developed the [Model Live Diagnostics](/model_evaluation/model_diagnostics) framework to check, monitor, visualise, and evaluate model behaviour and progress of ACCESS models currently running on <i>Gadi</i>.
<br>
For a complete documentation on how to use this framework, check the <a href="https://med-live-diagnostics.readthedocs.io/en/latest/index.html" target="_blank">Model Diagnostics documentation</a>.

---

## {{ model }} outputs

At the end of the model run, output files (and restart files) are moved from the <code>work</code> directory into the <code>archive</code> directory under <code>/scratch/$PROJECT/$USER/access-esm/archive/access-esm</code>, where they are further subdivided for each internal run. They are also symlinked in the <i>control</i> directory to <code>~/access-esm/archive</code>
<br>
The naming format for a typical output folder is <code>outputXXX</code> and for a restart folder <code>restartXXX</code>, where <i>XXX</i> is the internal run number starting from <code>000</code>.

<div class='admonition warning'>
    A run with a different {{ model }} configuration (different git branch) counts as a new internal run. 
    <br>
    Thus, if output folders already exist, the internal number of the new output folder will be set to the first available <i>XXX</i> number.
</div>
Outputs and restarts are separated in the respective folders for each model component.
<br>
For the atmospheric output data, the files are usually <a href = "https://code.metoffice.gov.uk/doc/um/latest/papers/umdp_F03.pdf" target="_blank">UM fieldsfile</a>, formatted as <code>&lt;UM-suite-identifier&gt;a.p&lt;output-stream-identifier&gt;&lt;time-identifier&gt;</code>.
<terminal-window>
    <terminal-line data="input">cd /scratch/$PROJECT/$USER/access-esm/archive/esm-pre-industrial</terminal-line>
    <terminal-line data="input" directory="/scratch/$PROJECT/$USER/access-esm/archive/esm-pre-industrial">ls</terminal-line>
    <terminal-line class="ls-output-format">output000 pbs_logs restart000</terminal-line>
    <terminal-line data="input" directory="/scratch/$PROJECT/$USER/access-esm/archive/esm-pre-industrial">ls output000/atmosphere</terminal-line>
    <terminal-line class="ls-output-format">aiihca.daa1210 aiihca.daa1810 aiihca.paa1apr aiihca.paa1jun aiihca.pea1apr aiihca.pea1jun aiihca.pga1apr aiihca.pga1jun atm.fort6.pe0 exstat ihist prefix.CNTLGEN UAFLDS_A aiihca.daa1310  aiihca.daa1910  aiihca.paa1aug aiihca.paa1mar aiihca.pea1aug aiihca.pea1mar aiihca.pga1aug aiihca.pga1mar cable.nml fort.57 INITHIS prefix.PRESM_A um_env.py aiihca.daa1410 aiihca.daa1a10 aiihca.paa1dec aiihca.paa1may aiihca.pea1dec aiihca.pea1may aiihca.pga1dec aiihca.pga1may CNTLALL ftxx input_atm.nml SIZES xhist aiihca.daa1510 aiihca.daa1b10 aiihca.paa1feb aiihca.paa1nov aiihca.pea1feb aiihca.pea1nov aiihca.pga1feb aiihca.pga1nov CONTCNTL ftxx.new namelists STASHC aiihca.daa1610 aiihca.daa1c10 aiihca.paa1jan aiihca.paa1oct aiihca.pea1jan aiihca.pea1oct aiihca.pga1jan aiihca.pga1oct debug.root.01 ftxx.vars nout.000000 thist aiihca.daa1710 aiihca.daa2110 aiihca.paa1jul aiihca.paa1sep aiihca.pea1jul aiihca.pea1sep aiihca.pga1jul aiihca.pga1sep errflag hnlist prefix.CNTLATM UAFILES_A</terminal-line>
</terminal-window>
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
