---
hide:
  - toc
---
# <span class="highlight-bg"> Run ACCESS-ESM </span>
<div class="page-summary">
    <h4>On this page</h4>
    <ol>
        <li><a href="#runESM-1.0.0">Requirements</a>
            <ol>
                <li><a href="#runESM-1.2.0">General requirements</a></li>
                <li><a href="#runESM-1.2.0">Model-specific requirements</a></li>
            </ol>
        </li>
        <li><a href="#runESM-2.0.0">Get ACCESS-ESM configuration</a></li>
        <li><a href="#runESM-3.0.0">Edit ACCESS-ESM configuration</a>
            <ol>
                <li><a href="#runESM-3.1.0">Payu</a></li>
                <li><a href="#runESM-3.2.0">Edit the Master Configuration file</a></li>
            </ol>
        </li>
        <li><a href="#runESM-4.0.0">Run ACCESS-ESM configuration</a>
            <ol>
                <li><a href="#runESM-4.1.0">Payu setup (optional)</a></li>
                <li><a href="#runESM-4.2.0">Run configuration</a></li>
                <li><a href="#runESM-4.3.0">Run configuration for multiple years</a></li>
                <li><a href="#runESM-4.4.0">Understand <code>runtime</code>, <code>runspersub</code>, and <code>-n</code> parameters</a></li>
            </ol>
        </li>
        <li><a href="#runESM-5.0.0">Monitor runs</a></li>
        <li><a href="#runESM-6.0.0">Model outputs</a></li>
    </ol>
</div>

## <span id="runESM-1.0.0">Requirements</span>
<div class="justified">
Before running ACCESS-ESM, you need to make sure to possess the right tools and to have an account with specific institutions. 
</div>

### <span id="runESM-1.1.0">General requirements</span>
<div class="justified">
For the general requirements needed to run all ACCESS models, please refer to the <a href="TO DO">Getting Started (TO DO check link)</a> page.
</div>

### <span id="runESM-1.2.0">Model-specific requirements</span>
<div class="justified">
<ul>
    <li>
        <b>Payu</b>
        <br>
        To get Payu on Gadi, run:
        <pre><code>module use /g/data/hh5/public/modules
            module load conda/analysis3
        </code></pre>
        To avoid running the lines above every time you need to run ACCESS-ESM, you may add the following lines to your <code>~/bashrc</code> file:
        <pre><code>if in_interactive_shell && in_login_shell; then
            &nbsp;&nbsp;module use /g/data3/hh5/public/modules
            &nbsp;&nbsp;module load conda/analysis3
            fi
        </code></pre>
    </li>
</ul>
</div>
----------------------------------------------------------------------------------------

## <span id="runESM-2.0.0">Get ACCESS-ESM configuration</span>
<div class="justified">
A suitable ACCESS-ESM pre-industrial configuration is avaible on the <a href="https://github.com/coecms/esm-pre-industrial" target="_blank">coecms GitHub</a>.
<br>
In order to get it, on Gadi, create a directory where to keep the model configuration, and clone the GitHub repo in it by running: 
<pre><code>git clone https://github.com/coecms/esm-pre-industrial</code></pre>
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
<b>Note:</b> Some modules might interfere with the <code>git</code> commands (for example matlab/R2018a). If you are running into issues during the cloning of the repository, it might be a good idea to run <pre><code>module purge</code></pre> first, before trying again.
</div>
----------------------------------------------------------------------------------------

## <span id="runESM-3.0.0">Edit ACCESS-ESM configuration</span>
<div class="justified">
In order to modify an ACCESS-ESM configuration, it is worth understanding a bit more how its job scheduler Payu works.
</div>

### <span id="runESM-3.1.0">Payu</span>
<div class="justified">
<a href="https://payu.readthedocs.io/en/latest/" target="_blank">Payu</a> is a workflow management tool for running numerical models in supercomputing environments.
<br>
The general layout of a Payu-supported model run consists of two main directories:
<ul>
    <li>
        The <b>laboratory</b> is the directory where all parts of the model are kept. For ACCESS-ESM, it is typically <code>/scratch/$PROJECT/$USER/access-esm</code>.
    </li>
    <li>
        The <b>control</b> directory, where the model configuration is kept and from where the model is run (in our case is the cloned directory <code>~/access-esm/esm-pre-industrial</code>).
    </li>
</ul>
This separation allows to run multiple self-resubmitting experiments simultaneously that might share common executables and input data.
<br>
To setup the <i>laboratory</i>, from the <i>control</i> directory run:
<pre><code>payu init</code></pre> 
This will create the <i>laboratory</i> directory, along with 4 subdirectories:
<ul>
    <li><code>bin</code> &rarr; directory containing the model binaries.</li>
    <li><code>input</code> &rarr; directory containing all the input files.</li>
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
</div>

### <span id="runESM-3.2.0">Edit the Master Configuration file</span>
<div class="justified">
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
        For example, to run ACCESS-ESM under the <code>tm70</code> <a href="TO DO">project (TO DO add NCI Project link)</a>, add the following line to this section:
        <pre><code>project: tm70</code></pre>
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
        The main model. This tells Payu which driver to use (<i>access</i> stands for ACCESS-ESM).
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
        ACCESS-ESM is a coupled model, which means it has multiple submodels (i.e. model components). 
        <br>
        In this section, some of the parameters of the configurations of all ACCESS-ESM's submodels are specified. The full configuration of a specific submodel can be found in the subdirectory of the <i>laboratory</i> having the <g>name</g> of the submodel (e.g. in our case the configuration for the atmosphere submodel, i.e. the UM, will be in the directory <code>~/access-esm/esm-pre-industrial/atmosphere</code>).
    </li>
    <li>
        <b>collate</b>
        <br>
        <pre><code>collate:
            &nbsp;&nbsp;exe: /g/data/access/payu/access-esm/bin/mppnccombine
            &nbsp;&nbsp;restart: true
            &nbsp;&nbsp;mem: 4GB
        </code></pre>
        The <i>collate</i> process joins a number of smaller files, which contain different parts of the model grid, together into target output files. The restart files are typically tiled in the same way.
    </li>
    <li>
        <b>collate</b>
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
        <b>Note:</b> The internal run length (controlled by <code>runtime</code>) can be different from the total run length. Also, the <code>runtime</code> value can be lowered, but should not be increased to a total of more than 1 year, to avoid errors. If you want to know more about the difference between internal run and total run lenghts, or if you want to run the model for more than 1 year, check <a href="#runESM-4.3.0">Run configuration for multiple years</a>.
    </li>
    <li>
        <b>Number of runs per PBS submission</b>
        <br>
        <pre><code>runspersub: 5</code></pre>
        ACCESS-ESM configurations are often run in multiple steps (or cycles), with Payu running a maximum of <code>runspersub</code> internal runs for every PBS job submission.
        <br>
        <b>Note:</b> If we increase <code>runspersub</code>, we might need to increase the <i>walltime</i> in the PBS resources.
    </li>
</ul>
To know more about other configuration settings for the <code>config.yaml</code> file, please check <a href="https://payu.readthedocs.io/en/latest/config.html" target="_blank">how to configure your experiment with Payu</a>.
</div>
----------------------------------------------------------------------------------------

## <span id="runESM-4.0.0">Run ACCESS-ESM configuration</span>
After editing the configuration, we are ready to run ACCESS-ESM. 
<br>
ACCESS-ESM suites run on <a href="https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview" target="_blank">Gadi</a> through a PBS job submission managed by Payu.

### <span id="runESM-4.1.0">Payu setup (optional)</span>
<div class="justified">
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
<b>Note:</b> You can skip this step as it is included also in the run command. However, runnning it explicitly helps to check for errors.
</div>

### <span id="runESM-4.2.0">Run configuration</span>
<div class="justified">
To run ACCESS-ESM configuration for one internal run length (controlled by <code>runtime</code> in the <code>config.yaml</code> file), run:
<pre><code>payu run</code></pre>
This will submit a single job to the queue with a total run length of <code>runtime</code>. It there is no previous run, it will start from the <code>start</code> date indicated in the <code>config.yaml</code> file, otherwise it will perform a warm restart from a precedently saved restart file.
<terminal-animation>
    <terminal-line data="input">payu run</terminal-line>
    <terminal-line>Loading input manifest: manifests/input.yaml</terminal-line>
    <terminal-line>Loading restart manifest: manifests/restart.yaml</terminal-line>
    <terminal-line>Loading exe manifest: manifests/exe.yaml</terminal-line>
    <terminal-line>payu: Found modules in /opt/Modules/v4.3.0</terminal-line>
    <terminal-line>qsub -q normal -P &lt;project&gt; -l walltime=11400 -l ncpus=384 -l mem=1536GB -N pre-industrial -l wd -j n -v PAYU_PATH=/g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin,MODULESHOME=/opt/Modules/v4.3.0,MODULES_CMD=/opt/Modules/v4.3.0/libexec/modulecmd.tcl,MODULEPATH=/g/data3/hh5/public/modules:/etc/scl/modulefiles:/opt/Modules/modulefiles:/opt/Modules/v4.3.0/modulefiles:/apps/Modules/modulefiles -W umask=027 -l storage=gdata/access+gdata/hh5 -- /g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin/python3.9 /g/data/hh5/public/apps/miniconda3/envs/analysis3-23.01/bin/payu-run</terminal-line>
    <terminal-line>&lt;job-ID&gt;.gadi-pbs</terminal-line>
</terminal-animation>
</div>

### <span id="runESM-4.3.0">Run configuration for multiple years</span>
<div class="justified">
If you want to run ACCESS-ESM configuration for multiple internal run lengths (controlled by <code>runtime</code> in the <code>config.yaml</code> file), you can use the option <code>-n</code>:
<pre><code>payu run -n &lt;number-of-runs&gt;</code></pre>
This will submit a job to the queue (or multiple jobs, depending on the <code>runspersub</code> value specified in the <code>config.yaml</code> file), with a total run length of <code>runtime * number-of-runs</code>.
</div>

### <span id="runESM-4.4.0">Understand <code>runtime</code>, <code>runspersub</code>, and <code>-n</code> parameters</span>
<div class="justified">
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
        <pre><code>payu run -n 20</code></pre>
        This will submit subsequent jobs for the following years: 1 to 5, 6 to 10, 11 to 15, and 16 to 20. With a total of 4 PBS jobs.
    </li>
    <li>
        <b>Run 7 years of simulation, with resubmission every 3 years</b>
        <br>
        To have a total run length of 7 years, with a resubmition cycle of 3 years, we can leave <code>runtime</code> to the default value of <code>1 year</code>, set <code>runspersub</code> to <code>3</code>, and run the configuration using <code>-n 7</code>:
        <pre><code>payu run -n 7</code></pre>
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
        set <code>runspersub</code> to <code>1</code> (or any value > 1), and run the configuration wihtout <code>-n</code> (or with <code>-n</code> equals <code>1</code>):
        <pre><code>payu run</code></pre>
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
        <pre><code>payu run -n 4</code></pre>
    </li>
</ul>
</div>
----------------------------------------------------------------------------------------

## <span id="runESM-5.0.0">Monitor runs</span>
<div class="justified">
Currently, there is no specific tool to monitor ACCESS-ESM runs. 
<br>
One way to check 
</div>
----------------------------------------------------------------------------------------

## <span id="runESM-6.0.0">Model outputs</span>
<div class="justified">
</div>


<!-- References -->
<br>
<h6>References</h6>
<ul class="references">
    <li>
        <a href = "https://github.com/coecms/esm-pre-industrial" target="_blank">https://github.com/coecms/esm-pre-industrial</a>
    </li>
    <li>
        <a href = "https://payu.readthedocs.io/en/latest/usage.html" target="_blank">https://payu.readthedocs.io/en/latest/usage.html</a>
    </li>
</ul>