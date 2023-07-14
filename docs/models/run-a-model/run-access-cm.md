{% set model = "ACCESS-CM" %}
<!-- # <span class="highlight-bg"> Run {{ model }} </span> -->
# <span class="highlight-bg"> Run {{ model }} </span>
## <span>Requirements</span>
<div class="justified">
Before running {{ model }}, you need to make sure to possess the right tools and to have an account with specific institutions.
</div>

### <span>General requirements</span>
<div class="justified">
For the general requirements needed to run all ACCESS models, please refer to the <a href="TO DO">Getting Started (TO DO check link)</a> page.
</div>

### <span>Model-specific requirements</span>
<div class="justified">
<ul>
    <li>
        <b>Join the <i>access</i> project at NCI</i></b>
        <br>
        To join the <i>access</i> project at NCI, request membership for it on the <a href="https://my.nci.org.au/mancini/project/access/join" target="_blank">NCI access project</a> page.
        <br>
        For more information on how to join specific NCI projects, please refer to <a href="https://opus.nci.org.au/display/Help/How+to+connect+to+a+project" target="_blank">How to connect to a project</a>.
    </li>
    <li>
        <b>Connection to <i>accessdev</i></b>
        <br>
        To run {{ model }} you need the connection to <a href="https://accessdev.nci.org.au/trac/wiki" target="_blank"><i>accessdev</i></a>, an NCI server providing configuration and run control for {{ model }}.
        <br>
        Also, you need to make sure there is correct communication between <i>accessdev</i> and <i>gadi</i>.
        <br>
        To complete these steps, you can follow the guides on <a href="">SSH connections on <i>accessdev</i></a>.
    </li>
    <li>
        <b>Get a <i>MOSRS</i> account</i></b>
        <br>
        The <a href="https://code.metoffice.gov.uk">Met Office Science Repository Service</a> (MOSRS) is a server run by the UK Met Office (UKMO) to support collaborative development with other partners organisations, which contains the source code and configurations of some of the components used by {{ model }} (for example the <a href="../model_components/atmosphere/#the-unified-model-um">UM</a>).
        <br>
        To apply for a <i>MOSRS</i> account, please contact your <a href="https://opus.nci.org.au/display/DAE/UK+Met+Office+environment+prerequisites" target="_blank">local institutional sponsor</a>.
    </li>
</ul>
</div>

--------------------------------------------
## Get {{ model }} suite
<div class="justified">
{{ model }} is a set of submodels (e.g. UM, MOM, CICE, CABLE, OASIS) with a range of model parameters, input data, and computer related information, that need to be packaged together as a <i>suite</i> in order to run.
<br>
Each {{ model }} suite has an ID, in the format <code>u-&lt;suite-name&gt;</code>, with <code>&lt;suite-name&gt;</code> being a unique identifier (e.g. <code>u-br565</code> is the CMIP6 release preindustrial experiment suite).
<br>
Typically, an existing suite is copied and then edited as needed for a particular run.
</div>

### Copy {{ model }} suite with Rosie
<div class="justified">
<a href = "http://metomi.github.io/rose/doc/html/tutorial/rose/rosie.html" target="_blank">Rosie</a> is an <a href = "https://subversion.apache.org/" target="_blank">SVN</a> repository wrapper with a set of options to work with {{ model }} suites.
<br>
To copy an existing suite, on <i>accessdev</i>:
<!-- Change this to gadi/ARE when it will be completely possible to run CM2 fully on gadi-->
<ol>
    <li>
        Run
        <pre><code>mosrs-auth</code></pre> 
        to authenticate using your <i>MOSRS</i> credentials:
        <terminal-animation>
            <terminal-line data="input">mosrs-auth</terminal-line>
            <terminal-line>Please enter the MOSRS password for &lt;MOSRS-username&gt;:</terminal-line>
            <terminal-line>Successfully authenticated with MOSRS as &lt;MOSRS-username&gt;</terminal-line>
        </terminal-animation>
    </li>
    <li>
        Run 
        <pre><code>rosie checkout &lt;suite-ID&gt;</code></pre>
        to create a local copy of the <code>&lt;suite-ID&gt;</code> from the UKMO repository (used mostly for testing and examining existing suites):
        <terminal-animation>
            <terminal-line data="input">rosie checkout &lt;suite-ID&gt;</terminal-line>
            <terminal-line>[INFO] create: /home/565/&lt;$USER&gt;/roses</terminal-line>
            <terminal-line>[INFO] &lt;suite-ID&gt;: local copy created at /home/565/&lt;$USER&gt;/roses/&lt;suite-ID&gt;</terminal-line>
        </terminal-animation>
        Alternatively, run 
        <pre><code>rosie copy &lt;suite-ID&gt;</code></pre>
        to create a new full copy (local and remote in the UKMO repository) rather than just a local copy. When a new suite is created in this way, a new unique name is generated within the repository, and populated with some descriptive information about the suite along with all the initial configuration details:
        <terminal-animation class="termynal">
            <terminal-line data="input">rosie copy &lt;suite-ID&gt;</terminal-line>
            <terminal-line>Copy "&lt;suite-ID&gt;/trunk@&lt;trunk-ID&gt;" to "u-?????"? [y or n (default)]</terminal-line> <terminal-line data="input">y</terminal-line>
            <terminal-line>[INFO] &lt;new-suite-ID&gt;: created at https://code.metoffice.gov.uk/svn/roses-u/&lt;suite-n/a/m/e/&gt;</terminal-line>
            <terminal-line>[INFO] &lt;new-suite-ID&gt;: copied items from &lt;suite-ID&gt;/trunk@&lt;trunk-ID&gt;</terminal-line>
            <terminal-line>[INFO] &lt;suite-ID&gt;: local copy created at /home/565/&lt;$USER&gt;/roses/&lt;new-suite-ID&gt;</terminal-line>
        </terminal-animation>
    </li>
</ol>
For additional <code>rosie</code> options, run 
<pre><code>rosie help</code></pre>
<br>
The suites are created in the user's <i>accessdev</i> home directory, under <code>~/roses/&lt;suite-ID&gt;</code>.
<br>
The suite directory usually contains 2 subdirectories and 3 files:
<ul>
    <li><code>app</code> &rarr; directory containing the configuration files for the various tasks within the suite.</li>
    <li><code>meta</code> &rarr; directory containing the GUI metadata.</li>
    <li><code>rose-suite.conf</code> &rarr; the main suite configuration file.</li>
    <li><code>rose-suite.info</code> &rarr; suite information file.</li>
    <li><code>suite.rc</code> &rarr; the <i>Cylc</i> control script file (Jinja2 language).</li>
    <terminal-animation>
        <terminal-line data="input">ls ~/roses/&lt;suite-ID&gt;</terminal-line>
        <terminal-line class="ls-output-format">app meta rose-suite.conf rose-suite.info suite.rc</terminal-line>
    </terminal-animation>
</ul>
</div>
----------------------------------------------------------------------------------------

## Edit {{ model }} suite configuration

### Rose
<div class="justified">
<a href = "http://metomi.github.io/rose/doc/html/index.html" target="_blank">Rose</a> is a configuration editor which can be used to view, edit, or run an {{ model }} suite.
<br>
To edit a suite configuration, on <i>accessdev</i>:
<!-- Change this to gadi/ARE when it will be completely possible to run CM2 fully on gadi-->
From inside the relevant suite directory (e.g. <code>~/roses/&lt;suite-ID&gt;</code>), run 
<pre><code>rose edit &</code></pre> 
to open the <i>Rose</i> GUI and inspect the suite information.
<br>
<b>Note:</b> the <code>&</code> is optional and keeps the terminal prompt active while runs the GUI as a separate process. 
<terminal-animation>
    <terminal-line data="input">cd ~/roses/&lt;suite-ID&gt;</terminal-line>
    <terminal-line data="input" directory="~/roses/&lt;suite-ID&gt;">rose edit &</terminal-line>
    <terminal-line class="ls-output-format">[&lt;N&gt;] &lt;PID&gt;</terminal-line>
    <terminal-line data="input" directory="~/roses/&lt;suite-ID&gt;"></terminal-line>
    <img src="../../../assets/run_access_cm/Rose GUI.png" alt="Rose GUI">
</terminal-animation>
</div>

### Change NCI project
<div class="justified">
To make sure we run the suite under the NCI project we belong to, we can navigate to <i>suite conf &rarr; Machine and Runtime Options</i>, edit the <i>Compute project</i> field, and click the <i>Save</i> button <img src="../../../assets/run_access_cm/save_button.png" alt="Save button" style="height:1em"/>. (Check <a href="https://opus.nci.org.au/display/Help/How+to+connect+to+a+project" target="_blank">how to connect to a project</a> if you have not joined one yet).
<br>
For example, to run {{ model }} under the <code>tm70</code> project (ACCESS-NRI), we will insert <code>tm70</code> in the <i>Compute project</i> field:
<br>
<img src="../../../assets/run_access_cm/rose_change_project.gif" alt="Rose change project" class="example-img"/>
<span class="note">Note:</span> You should be part of a project with allocated <i>Service Units</i> (SU) to be able to run {{ model }}. For more information please check <a href="">(TO DO reference projects)</a>.
</div>

### Change run length and cycling frequency
<div class="justified">
{{ model }} suites are often run in multiple steps, each of them constituting a cycle, with the job scheduler resubmitting the suite every chosen <i>Cycling frequency</i>, until the <i>Total Run length</i> is met.
<br>
To modify these parameters, we can navigate to <i>suite conf &rarr; Run Initialisation and Cycling</i>, edit the respective fields, and click the <i>Save</i> button <img src="../../../assets/run_access_cm/save_button.png" alt="Save button" style="height:1em"/>. The values are in the <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations" target="_blank">ISO 8601 Duration</a> format.
<br>
If, for example, we want to run the suite for a total of 50 Years, and resubmit every year, we will change <i>Total Run length</i> to <code>P50Y</code> and <i>Cycling frequency</i> to <code>P1Y</code>. Note that the current maximum <i>Cycling frequency</i> is 2 years:
<br>
<img src="../../../assets/run_access_cm/rose_change_run_length.gif" alt="Rose change run length" class="example-img"/>
</div>

### Change wallclock time
<div class="justified">
The <i>Wallclock time</i> is the time requested by the PBS job<!-- TO DO <a href="../getting-started/#pbs-jobs" target="_blank">PBS job</a> --> to run a single cycle. If this time is not enough for the suite to end its cycle, our job will be terminated before the suite can complete the run. 
<br>
If we change the <i>Cycling frequency</i>, we might need to change the <i>Wallclock time</i> accordingly. 
<br>
The time needed for the suite to run a full cycle depends on several factors, but a good estimation can be 4 hours per simulated year.
<br>
To modify the <i>Wallclock time</i>, we can navigate to <i>suite conf &rarr; Run Initialisation and Cycling</i>, edit the respective field, and click the <i>Save</i> button <img src="../../../assets/run_access_cm/save_button.png" alt="Save button" style="height:1em"/>. The value is in the <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations" target="_blank">ISO 8601 Duration</a> format.

<!-- TO DO For more details on how to edit other suite parameters using Rose GUI, such as component configurations, output variables (STASH), or science settings, check <a href="../rose_gui_user_guide" target="_blank">Rose GUI user guide</a>. -->
</div>
----------------------------------------------------------------------------------------

## Run {{ model }} suite

<div class="justified">
{{ model }} suites run on <a href="https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview" target="_blank">gadi</a> through a PBS job submission.
<br>
When the suite gets run, its configuration files are copied on gadi under <code>/scratch/$PROJECT/$USER/cylc-run/&lt;suite-ID&gt;</code>, and a symbolic link to this folder is also created in the <code>$USER</code>'s home directory under <code>~/cylc-run/&lt;suite-ID&gt;</code>.
<br>
An {{ model }} suite is constituted by several tasks (such as checking out code repositories, compiling and building the different model components, running the model, etc.). The workflow of these tasks is controlled by <i>Cylc</i>.
</div>

### Cylc
<div class="justified">
<a href="https://cylc.github.io/cylc-doc/7.8.8/html/index.html" target="_blank">Cylc</a> (pronounced ‘silk’), is a workflow manager that automatically executes tasks according to the model main cycle script <code>suite.rc</code>. <i>Cylc</i> deals with how the job will be run and manages the time steps of each submodel, as well as monitoring all the tasks and reporting any error that might occur.
<br>
To run an {{ model }} suite, on <i>accessdev</i>:
<ol>
    <li>
        From inside the suite directory, run
        <pre><code>rose suite-run</code></pre>
    </li>
    <li>
        After the initial tasks get executed, the <i>Cylc</i> GUI will open up and you will be able to see and control all the different tasks in the suite as they are run:
    </li>
    <terminal-animation lineDelay="50">
        <terminal-line data="input" lineDelay="300">cd ~/roses/&lt;suite-ID&gt;</terminal-line>
        <terminal-line data="input" directory="~/roses/&lt;suite-ID&gt;" lineDelay="300">rose suite-run</terminal-line>
        <terminal-line>[INFO] export CYLC_VERSION=7.8.3</terminal-line>
        <terminal-line>[INFO] export ROSE_ORIG_HOST=accessdev.nci.org.au</terminal-line>
        <terminal-line>[INFO] export ROSE_SITE=</terminal-line>
        <terminal-line>[INFO] export ROSE_VERSION=2019.01.2</terminal-line>
        <terminal-line>[INFO] create: /home/565/&lt;$USER&gt;/cylc-run/&lt;suite-ID&gt;</terminal-line>
        <terminal-line>[INFO] create: log.&lt;timestamp&gt;</terminal-line>
        <terminal-line>[INFO] symlink: log.&lt;timestamp&gt; <= log</terminal-line>
        <terminal-line>[INFO] create: log/suite</terminal-line>
        <terminal-line>[INFO] create: log/rose-conf</terminal-line>
        <terminal-line>[INFO] symlink: rose-conf/&lt;timestamp&gt;-run.conf <= log/rose-suite-run.conf</terminal-line>
        <terminal-line>[INFO] symlink: rose-conf/&lt;timestamp&gt;-run.version <= log/rose-suite-run.version</terminal-line>
        <terminal-line>[INFO] install: rose-suite.info</terminal-line>
        <terminal-line>&emsp;&emsp;&emsp;&emsp;source: /home/565/&lt;$USER&gt;/roses/&lt;suite-ID&gt;/rose-suite.info</terminal-line>
        <terminal-line>[INFO] create: app</terminal-line>
        <terminal-line>[INFO] install: app</terminal-line>
        <terminal-line>&emsp;&emsp;&emsp;&emsp;source: /home/565/&lt;$USER&gt;/roses/&lt;suite-ID&gt;/app</terminal-line>
        <terminal-line>[INFO] create: meta</terminal-line>
        <terminal-line>[INFO] install: meta</terminal-line>
        <terminal-line>&emsp;&emsp;&emsp;&emsp;source: /home/565/&lt;$USER&gt;/roses/&lt;suite-ID&gt;/meta</terminal-line>
        <terminal-line>[INFO] install: suite.rc</terminal-line>
        <terminal-line>[INFO] REGISTERED &lt;suite-ID&gt; -> /home/565/&lt;$USER&gt;/cylc-run/&lt;suite-ID&gt;</terminal-line>
        <terminal-line>[INFO] create: share</terminal-line>
        <terminal-line>[INFO] install: share</terminal-line>
        <terminal-line>[INFO] create: work</terminal-line>
        <terminal-line>[INFO] chdir: log/</terminal-line>
        <terminal-line>[INFO] &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;._.</terminal-line>
        <terminal-line>[INFO] &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;| |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The Cylc Suite Engine [7.8.3]</terminal-line>
        <terminal-line>[INFO] ._____._. ._| |_____.&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;Copyright (C) 2008-2019 NIWA</terminal-line>
        <terminal-line>[INFO] | .___| | | | | .___|&emsp;& British Crown (Met Office) & Contributors.</terminal-line>
        <terminal-line>[INFO] | !___| !_! | | !___. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</terminal-line>
        <terminal-line>[INFO] !_____!___. |_!_____! This program comes with ABSOLUTELY NO WARRANTY;</terminal-line>
        <terminal-line>[INFO] &emsp;&emsp;&emsp;&thinsp;.___! | &emsp;&emsp;&emsp;&emsp;&emsp;see `cylc warranty`. &thinsp;It is free software, you</terminal-line>
        <terminal-line>[INFO] &emsp;&emsp;&emsp;&thinsp;!_____! &emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;are welcome to redistribute it under certain</terminal-line>
        <terminal-line>[INFO]</terminal-line>
        <terminal-line>[INFO] *** listening on https://accessdev.nci.org.au:&lt;port&gt;/ ***</terminal-line>
        <terminal-line>[INFO]</terminal-line>
        <terminal-line>[INFO] To view suite server program contact information:</terminal-line>
        <terminal-line>[INFO]  $ cylc get-suite-contact &lt;suite-ID&gt;</terminal-line>
        <terminal-line>[INFO]</terminal-line>
        <terminal-line>[INFO] Other ways to see if the suite is still running:</terminal-line>
        <terminal-line>[INFO]  $ cylc scan -n '&lt;suite-ID&gt;' accessdev.nci.org.au</terminal-line>
        <terminal-line>[INFO]  $ cylc ping -v --host=accessdev.nci.org.au &lt;suite-ID&gt;</terminal-line>
        <terminal-line>[INFO]  $ ps -opid,args &lt;PID&gt;  # on accessdev.nci.org.au</terminal-line>
        <img src="../../../assets/run_access_cm/Cylc GUI.png" alt="Cylc GUI">
    </terminal-animation>
    <br>
    <b>Note:</b> If after you run the command <code>rose suite-run</code> you get an error similar to the following:
    <pre><code><span style="color: orangered">[FAIL]</span> Suite "&lt;suite-ID&gt;" appears to be running:
        <span style="color: orangered">[FAIL]</span> Contact info from: "/home/565/&lt;$USER&gt;/cylc-run/&lt;suite-ID&gt;/.service/contact"
        <span style="color: orangered">[FAIL]</span> &emsp;&emsp;CYLC_SUITE_HOST=accessdev.nci.org.au
        <span style="color: orangered">[FAIL]</span> &emsp;&emsp;CYLC_SUITE_OWNER=&lt;$USER&gt;
        <span style="color: orangered">[FAIL]</span> &emsp;&emsp;CYLC_SUITE_PORT=&lt;port&gt;
        <span style="color: orangered">[FAIL]</span> &emsp;&emsp;CYLC_SUITE_PROCESS=&lt;PID&gt; python2 /usr/local/cylc/cylc-7.8.3/bin/cylc-run &lt;suite-ID&gt;
        <span style="color: orangered">[FAIL]</span> Try "cylc stop '&lt;suite-ID&gt;'" first?
    </code></pre>
    you should run
    <pre><code>rm /home/565/&lt;$USER&gt;/cylc-run/&lt;suite-ID&gt;/.service/contact</code></pre>
    before running the <code>rose suite-run</code> command again.
</ol>
You are done!!
<br>
If you don't get any errors, you will be able to check the suite output files after the run is complete.
<br>
Note that, at this stage, it is possible to close the <i>Cylc</i> GUI.
<br>
If you want to open it again, from inside the suite directory run
<pre><code>rose suite-gcontrol</code></pre>

</div>
----------------------------------------------------------------------------------------

## Monitor {{ model }} runs
### Check for errors

<div class="justified">
It is quite common, especially during the first few runs, to experience errors and job failures. An {{ model }} suite is constituted by several tasks, and each of these tasks could fail. When a task fails, the suite is halted and you will see a red icon next to the respective task name in the <i>Cylc</i> GUI. 
<br>
To investigate the cause of a failure, we need to look at the logs (<code>job.err</code> and <code>job.out</code>) from the suite run. There are two main ways to do so:
<ul>
    <li>
        <b>Using the <i>Cylc</i> GUI</b>
        <br>
        Right-click on the task that failed and click on <i>View Job Logs (Viewer) &rarr; job.err</i> or <i>job.out</i>.
        <br>
        To access the specific task you might have to click on the arrow next to the task, to extend the drop-down menu with all the sub-taks.
        <br>
        <img src="../../../assets/run_access_cm/investigate_error_gui.gif" alt="Investigate Error GUI" class="example-img"/>
    </li>
    <li>
        <b>Through the suite directory</b>
        <br>
        The suite logs directories are stored inside <code>~/cylc-run/&lt;suite-ID&gt;</code> as <code>log.&lt;TIMESTAMP&gt;</code>, with the lastest set of logs also symlinked in the <code>~/cylc-run/&lt;suite-ID&gt;/log</code> directory.
        <br>
        The logs for the main job are inside the <code>~/cylc-run/&lt;suite-ID&gt;/log/job</code> directory.
        <br>
        Logs are separated into simulation cycles through their starting dates, and then differentiated by task.
        <br>
        They are then further separated into "attempts" (consecutive failed/successful tasks), with <code>NN</code> being a symlink to the most recent attempt.
        <br>
        In our example, the failure occurred for the <i>09500101</i> simulation cycle (starting date on 1st January 950) in the <i>coupled</i> task. Therefore, the directory where to find the <code>job.err</code> and <code>job.out</code> files is <code>~/cylc-run/&lt;suite-ID&gt;/log/job/09500101/coupled/NN</code>.
        <terminal-animation>
            <terminal-line data="input">cd ~/cylc-run/&lt;suite-ID&gt;</terminal-line>
            <terminal-line data="input" directory="~/cylc-run/&lt;suite-ID&gt;">ls</terminal-line>
            <terminal-line class="ls-output-format">app cylc-suite.db log log.20230530T051952Z meta rose-suite.info share suite.rc suite.rc.processed work</terminal-line>
            <terminal-line data="input" directory="~/cylc-run/&lt;suite-ID&gt;">cd log</terminal-line>
            <terminal-line data="input" directory="~/cylc-run/&lt;suite-ID&gt;/log">ls</terminal-line>
            <terminal-line class="ls-output-format">db job rose.conf rose-suite-run.conf rose-suite-run.locs rose-suite-run.log rose-suite-run.version suite suiterc</terminal-line>
            <terminal-line data="input" directory="~/cylc-run/&lt;suite-ID&gt;/log">cd job</terminal-line>
            <terminal-line data="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job">ls</terminal-line>
            <terminal-line class="ls-output-format">09500101</terminal-line>
            <terminal-line data="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job">cd 09500101</terminal-line>
            <terminal-line data="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job/09500101">ls</terminal-line>
            <terminal-line class="ls-output-format">coupled fcm_make2_um fcm_make_um install_warm make2_mom make_mom fcm_make2_drivers fcm_make_drivers install_ancil make2_cice make_cice</terminal-line>
            <terminal-line data="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job/09500101">cd coupled</terminal-line>
            <terminal-line data="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job/09500101/coupled">ls</terminal-line>
            <terminal-line class="ls-output-format">01 02 03 NN</terminal-line>
            <terminal-line data="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job/09500101">cd NN</terminal-line>
            <terminal-line data="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job/09500101/NN">ls</terminal-line>
            <terminal-line class="ls-output-format">job job-activity.log job.err job.out job.status</terminal-line>
        </terminal-animation>
    </li>
</ul>
</div>

----------------------------------------------------------------------------------------

## Stop, restart and reload suites

<div class="justified">
Sometimes, you may want to control the running state of a suite.
<br>
If your <i>Cylc</i> GUI has been closed and you are unsure whether your suite is still running, you can scan for active suites and reopen the GUI if desired.
<br>
To scan for active suites run
<pre><code>cylc scan</code></pre>
To reopen the <i>Cylc</i> GUI, from inside the suite directory run
<pre><code>rose suite-gcontrol</code></pre>
<terminal-animation>
    <terminal-line data="input">cylc scan</terminal-line>
    <terminal-line>&lt;suite-ID&gt; &lt;$USER&gt;@accessdev.nci.org.au:&lt;port&gt;</terminal-line>
    <terminal-line data="input">cd ~/roses/&lt;suite-ID&gt;</terminal-line>
    <terminal-line data="input" directory="~/roses/&lt;suite-ID&gt;">rose suite-gcontrol</terminal-line>
    <img src="../../../assets/run_access_cm/Cylc GUI.png" alt="Cylc GUI">
</terminal-animation>
</div>

### STOP a suite
<div class="justified">
To shutdown a suite in a safe manner, from inside the suite directory run
<pre><code>rose suite-stop -y</code></pre>
Alternatively, you can directly kill the PBS job(s) connected to your run. To do so:
<ol>
    <li>
        Check the status of all your PBS jobs by running
        <pre><code>qstat -u $USER</code></pre>
    </li>
    <li>
        Delete any job related to your run with
        <pre><code>qdel &lt;job-ID&gt;</code></pre>
    </li>
</ol>
</div>

### RESTART a suite
<div class="justified">
There are two main ways to restart a suite:
<ul>
    <li>
        <b>'SOFT' restart</b>
        <br>
        From inside the suite directory, run 
        <pre><code>rose suite-run --restart</code></pre>
        to re-install the suite and reopen <i>Cylc</i> in the same state as when it was stopped (you may need to manually trigger failed tasks from the <i>Cylc</i> GUI).
        <br>
        <terminal-animation lineDelay="50">
            <terminal-line data="input" lineDelay="300">cylc</terminal-line>
            <terminal-line data="input" lineDelay="300">cd ~/roses/&lt;suite-ID&gt;</terminal-line>
            <terminal-line data="input" directory="~/roses/&lt;suite-ID&gt;" lineDelay="300">rose suite-run --restart</terminal-line>
            <terminal-line>[INFO] export CYLC_VERSION=7.8.3</terminal-line>
            <terminal-line>[INFO] export ROSE_ORIG_HOST=accessdev.nci.org.au</terminal-line>
            <terminal-line>[INFO] export ROSE_SITE=</terminal-line>
            <terminal-line>[INFO] export ROSE_VERSION=2019.01.2</terminal-line>
            <terminal-line>[INFO] delete: log/rose-suite-run.conf</terminal-line>
            <terminal-line>[INFO] symlink: rose-conf/&lt;timestamp&gt;-restart.conf <= log/rose-suite-run.conf</terminal-line>
            <terminal-line>[INFO] delete: log/rose-suite-run.version</terminal-line>
            <terminal-line>[INFO] symlink: rose-conf/&lt;timestamp&gt;-restart.version <= log/rose-suite-run.version</terminal-line>
            <terminal-line>[INFO] chdir: log/</terminal-line>
            <terminal-line>[INFO] &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;._.</terminal-line>
            <terminal-line>[INFO] &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;| |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The Cylc Suite Engine [7.8.3]</terminal-line>
            <terminal-line>[INFO] ._____._. ._| |_____.&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;Copyright (C) 2008-2019 NIWA</terminal-line>
            <terminal-line>[INFO] | .___| | | | | .___|&emsp;& British Crown (Met Office) & Contributors.</terminal-line>
            <terminal-line>[INFO] | !___| !_! | | !___. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</terminal-line>
            <terminal-line>[INFO] !_____!___. |_!_____! This program comes with ABSOLUTELY NO WARRANTY;</terminal-line>
            <terminal-line>[INFO] &emsp;&emsp;&emsp;&thinsp;.___! | &emsp;&emsp;&emsp;&emsp;&emsp;see `cylc warranty`. &thinsp;It is free software, you</terminal-line>
            <terminal-line>[INFO] &emsp;&emsp;&emsp;&thinsp;!_____! &emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;are welcome to redistribute it under certain</terminal-line>
            <terminal-line>[INFO]</terminal-line>
            <terminal-line>[INFO] *** listening on https://accessdev.nci.org.au:&lt;port&gt;/ ***</terminal-line>
            <terminal-line>[INFO]</terminal-line>
            <terminal-line>[INFO] To view suite server program contact information:</terminal-line>
            <terminal-line>[INFO]  $ cylc get-suite-contact &lt;suite-ID&gt;</terminal-line>
            <terminal-line>[INFO]</terminal-line>
            <terminal-line>[INFO] Other ways to see if the suite is still running:</terminal-line>
            <terminal-line>[INFO]  $ cylc scan -n '&lt;suite-ID&gt;' accessdev.nci.org.au</terminal-line>
            <terminal-line>[INFO]  $ cylc ping -v --host=accessdev.nci.org.au &lt;suite-ID&gt;</terminal-line>
            <terminal-line>[INFO]  $ ps -opid,args &lt;PID&gt;  # on accessdev.nci.org.au</terminal-line>
            <img src="../../../assets/run_access_cm/Cylc GUI.png" alt="Cylc GUI">
        </terminal-animation>
    </li>
    <li>
        <b>'HARD' restart</b>
        <br>
        From inside the suite directory, run
        <pre><code>rose suite-run --new</code></pre>
        if you want to overwrite any previous runs of the suite and begin completely afresh (WARNING!! This will overwrite all existing model output and logs for the same suite).
    </li>
</ul>
</div>

### RELOAD a suite
<div class="justified">
In some cases the suite needs to be updated without necessarily having to stop it (e.g. after fixing a typo in a file). Updating an active suite is called a 'reload', where the suite is 're-installed' and <i>Cylc</i> is updated with the changes (this is similar to a 'soft' restart, but with the new changes installed, so you may need to manually trigger failed tasks from the <i>Cylc</i> GUI).
<br>
To reload a suite, from inside the suite directory run
<pre><code>rose suite-run --reload</code></pre>
</div>

----------------------------------------------------------------------------------------

## {{ model }} output files

<div class="justified">
All {{ model }} output files (as well as work files) are available on gadi under <code>/scratch/$PROJECT/$USER/cylc-run/&lt;suite-ID&gt;</code> (also symlinked in <code>~/cylc-run/&lt;suite-ID&gt;</code>).
<br>
While the suite is running, files move between the <code>share</code> and the <code>work</code> directories.
<br>
At the end of each cycle, model output data and restart files are moved to <code>/scratch/$PROJECT/$USER/archive/&lt;suite-name&gt;</code>. 
<br>
This directory contains 2 subdirectories:
<ul>
    <li><code>history</code></li>
    <li><code>restart</code></li>
</ul>
</div>

### Output data
<div class="justified">
<code>/scratch/$PROJECT/$USER/archive/&lt;suite-name&gt;/history</code> is the directory where the model output data is found, separated for each model component:
<ul>
    <li>
    <code>atm</code> &rarr; atmosphere (UM)
    </li>
    <li>
    <code>cpl</code> &rarr; coupler (OASIS3-MCT)
    </li>
    <li>
    <code>ocn</code> &rarr; ocean (MOM)
    </li>
    <li>
    <code>ice</code> &rarr; ice (CICE)
    </li>
</ul>
For the atmospheric output data, each file it is usually a <a href = "https://code.metoffice.gov.uk/doc/um/latest/papers/umdp_F03.pdf" target="_blank">UM fieldsfile</a> or netCDF file, formatted as <code>&lt;suite-name&gt;a.p&lt;output-stream-identifier&gt;&lt;year&gt;&lt;month-string&gt;</code>.
<br>
In the case of the <code>u-br565</code> suite we will have:
<terminal-animation>
    <terminal-line data="input">cd /scratch/&lt;$PROJECT&gt;/&lt;$USER&gt;/archive</terminal-line>
    <terminal-line data="input" directory="/scratch/&lt;$PROJECT&gt;/&lt;$USER&gt;/archive">ls</terminal-line>
    <terminal-line class="ls-output-format">br565 &lt;other-suite-name&gt; &lt;other-suite-name&gt;</terminal-line>
    <terminal-line data="input" directory="/scratch/&lt;$PROJECT&gt;/&lt;$USER&gt;/archive">cd br565</terminal-line>
    <terminal-line data="input" directory="/scratch/&lt;$PROJECT&gt;/&lt;$USER&gt;/archive/br565">ls</terminal-line>
    <terminal-line class="ls-output-format">history restart</terminal-line>
    <terminal-line data="input" directory="/scratch/&lt;$PROJECT&gt;/&lt;$USER&gt;/archive/br565">ls history/atm</terminal-line>
    <terminal-line class="ls-output-format">br565a.pd0950apr.nc br565a.pd0950aug.nc br565a.pd0950dec.nc br565a.pd0950feb.nc br565a.pd0950jan.nc br565a.pd0950jul.nc br565a.pd0950jun.nc br565a.pd0950mar.nc br565a.pd0950may.nc br565a.pd0950nov.nc br565a.pd0950oct.nc br565a.pd0950sep.nc br565a.pd0951apr.nc br565a.pd0951aug.nc br565a.pd0951dec.nc br565a.pm0950apr.nc br565a.pm0950aug.nc br565a.pm0950dec.nc br565a.pm0950feb.nc br565a.pm0950jan.nc br565a.pm0950jul.nc br565a.pm0950jun.nc br565a.pm0950mar.nc br565a.pm0950may.nc br565a.pm0950nov.nc br565a.pm0950oct.nc br565a.pm0950sep.nc br565a.pm0951apr.nc br565a.pm0951aug.nc br565a.pm0951dec.nc netCDF</terminal-line>
</terminal-animation>
<!-- <br>
For more details on how to control different output variables (STASH), and output streams, check <a href="../rose_gui_user_guide" target="_blank">Rose GUI user guide (TO CHECK)</a>. -->
</div>

### Restart files
<div class="justified">
<code>/scratch/$PROJECT/$USER/archive/&lt;suite-name&gt;/restart</code> is the directory where the restart dumps are found, subdivided for each model component (see <code>history</code> folder above).
<br>
For the atmospheric restart files, each of them is a <a href = "https://code.metoffice.gov.uk/doc/um/latest/papers/umdp_F03.pdf" target="_blank">UM fieldsfile</a>, formatted as <code>&lt;suite-name&gt;a.da&lt;year&gt;&lt;month&gt;&lt;day&gt;_00</code>.
<br>
In the directory there are also some files formatted as <code>&lt;suite-name&gt;a.xhist-&lt;year&gt;&lt;month&gt;&lt;day&gt;</code> containing metadata information.
<!-- <br>
For more details on how to control the frequency and formatting of restart dumps, check <a href="../rose_gui_user_guide" target="_blank">Rose GUI user guide (TO CHECK)</a>. -->
<br>
In the case of the <code>u-br565</code> suite we will have:
<terminal-animation>
    <terminal-line data="input">ls /scratch/&lt;$PROJECT&gt;/&lt;$USER&gt;/archive/br565/restart/atm</terminal-line>
    <terminal-line class="ls-output-format">br565a.da09500201_00 br565a.da09510101_00 br565.xhist-09500131 br565.xhist-09501231 </terminal-line>
</terminal-animation>

</div>

<!-- References -->
<br>
<h6>References</h6>
<ul class="references">
    <li>
        <a href = "https://confluence.csiro.au/display/ACCESS/Using+CM2+suites+in+Rose+and+Cylc" target="_blank">https://confluence.csiro.au/display/ACCESS/Using+CM2+suites+in+Rose+and+Cylc</a>
    </li>
    <li>
        <a href = "https://confluence.csiro.au/display/ACCESS/Understanding+CM2+output" target="_blank">https://confluence.csiro.au/display/ACCESS/Understanding+CM2+output</a>
    </li>
    <li>
        <a href = "https://nespclimate.com.au/wp-content/uploads/2020/10/Instruction-document-Getting_started_with_ACCESS.pdf" target="_blank">https://nespclimate.com.au/wp-content/uploads/2020/10/Instruction-document-Getting_started_with_ACCESS.pdf</a>
    </li>
    <li>
        <a href = "https://code.metoffice.gov.uk/doc/um/latest/um-training/rose-gui.html" target="_blank">https://code.metoffice.gov.uk/doc/um/latest/um-training/rose-gui.html</a>
    </li>
</ul>