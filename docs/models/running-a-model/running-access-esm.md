---
hide:
  - toc
---
# <div class="highlight-bg"> Run ACCESS-ESM </div>
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
        <li><a href="#runESM-4.0.0">Run ACCESS-ESM configuration</a></li>
        <li><a href="#runESM-5.0.0">Monitoring runs</a></li>
        <li><a href="#runESM-6.0.0">Model outputs</a></li>
    </ol>
</div>

## <div id="runESM-1.0.0">Requirements</div>
<div class="justified">
Before running ACCESS-ESM, you need to make sure to possess the right tools and to have an account with specific institutions. 
</div>

### <div id="runESM-1.1.0">General requirements</div>
<div class="justified">
For the general requirements needed to run all ACCESS models, please refer to the <a href="">Getting Started (TO DO check link)</a> page.
</div>

### <div id="runESM-1.2.0">Model-specific requirements</div>
<div class="justified">
<ul>
    <li>
        <b>Payu</b>
        <br>
        To get payu on Gadi, run:
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

## <div id="runESM-2.0.0">Get ACCESS-ESM configuration</div>
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

## <div id="runESM-3.0.0">Edit ACCESS-ESM configuration</div>
<div class="justified">
In order to modify an ACCESS-ESM configuration, it is worth understanding a bit more how its job scheduler Payu works.
</div>

### <div id="runESM-3.1.0">Payu</div>
<div class="justified">
<a href="https://payu.readthedocs.io/en/latest/" target="_blank">Payu</a> is a workflow management tool for running numerical models in supercomputing environments.
<br>
The general layout of a payu-supported model run consists of two main directories:
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

### <div id="runESM-3.2.0">Edit the Master Configuration file</div>
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
        For example, to run ACCESS-ESM under a specific project, add the following line to this section:
        <pre><code>project: &lt;PROJECT&gt;</code></pre>
    </li>
    <li>
        <b>Link to the laboratory directory</b>
        <br>
        <pre><code># note: if laboratory is relative path, it is relative to /scratch/$PROJECT/$USER
            laboratory: access-esm
        </code></pre>
        This will set the laboratory directory. Relative paths are relative to /scratch/$PROJECT/$USER. Absolute paths can be specified as well.
    </li>
    <li>
        <b>Model</b>
        <pre><code>model: access</code></pre>
        The main model. This tells payu which driver to use (<i>access</i> stands for access-esm).
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
        <i>access</i> (i.e. ACCESS-ESM) is a coupled model, which means it has multiple submodels (i.e. model components). 
        <br>
        In this section, some of the parameters of the configurations of all ACCESS-ESM's submodels are specified. The full configuration of a specific submodel can be found in the subdirectory of the <i>laboratory</i> having the <g>name</g> of the submodel (e.g. the configuration for the atmosphere submodel, i.e. the UM, will be in the directory )
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
        <b>Note:</b> The internal run length (controlled by <code>runtime</code>) can be different from the total run length. Also, the <code>runtime</code> value can be lowered, but should not be increased to a total of more than 1 year, to avoid errors. If you want to know more about the difference between internal run and total run lenghts, or if you want to run the model for more than 1 year, check <a href="#runESM-4.0.0">Run ACCESS-ESM configuration</a>.
    </li>
    <li>
        <b>Number of runs per PBS submission</b>
        <br>
        <pre><code>runspersub: 5</code></pre>
        ACCESS-ESM configurations are often run in multiple steps (or cycles), with Payu running <code>runspersub</code> internal runs for every PBS submission, and resubmitting the job until the total run length is met.
        <br>
        <b>Note:</b> If we increase <code>runspersub</code>, we might need to increate the <i>walltime</i> in the PBS resources.
    </li>
</ul>
To know more about other configuration settings for the <code>config.yaml</code> file, please check <a href="https://payu.readthedocs.io/en/latest/config.html#configuration-settings" target="_blank">Payu configuration settings documentation</a>.
</div>
----------------------------------------------------------------------------------------

## <div id="runESM-4.0.0">Run ACCESS-ESM configuration</div>
<div class="justified">
ACCESS-ESM suites run on <a href="https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview" target="_blank">Gadi</a> through a PBS job submission managed by Payu.
<br>
When the suite gets run, the suite configuration files are copied on Gadi under /scratch/<$PROJECT>/$USER/cylc-run/<suite-ID>, and a symbolic link to this folder is also created in the $USER's home directory under ~/cylc-run/<suite-ID>.
An ACCESS-CM2 suite is constituted by several tasks (such as checking out code repositories, compiling and building the different model components, running the model, etc.). The workflow of these tasks is controlled by Cylc.
Cylc (pronounced ‘silk’), is a workflow manager that automatically executes tasks according to the model main cycle script suite.rc. Cylc deals with how the job will be run and manages the time steps of each sub-model, as well as monitoring all the tasks and reporting any error that might occur.
</div>
----------------------------------------------------------------------------------------

## <div id="runESM-5.0.0">Monitoring runs</div>
<div class="justified">
</div>
----------------------------------------------------------------------------------------

## <div id="runESM-6.0.0">Model outputs</div>
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