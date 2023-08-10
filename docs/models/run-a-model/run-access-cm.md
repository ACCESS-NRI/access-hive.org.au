{% set model = "ACCESS-CM" %}
# Run {{ model }}
## Requirements
### General requirements
Before running {{ model }}, you need to fulfil general requirements outlined in the [Getting Started](../../../getting_started) section.

### <span>Model-specific requirements</span>
<ul>
    <li>
        <b>Get a <i>MOSRS</i> account</i></b>
        <br>
        The <a href="https://code.metoffice.gov.uk">Met Office Science Repository Service</a> (MOSRS) is a server run by the UK Met Office (UKMO) to support collaborative development with other partners organisations. MOSRS contains the source code and configurations for some model components in {{ model }} (e.g., the <a href="../../model_components/atmosphere/#the-unified-model-um">UM</a>).
        <br>
        To apply for a <i>MOSRS</i> account, please contact your <a href="https://opus.nci.org.au/display/DAE/UK+Met+Office+environment+prerequisites" target="_blank">local institutional sponsor</a>.
    </li>
    <li>
        <b>Join the <i>access</i>, <i>hr22</i>, <i>ki32</i>, and <i>ki32_mosrs</i> projects at NCI</i></b> 
        <br>
        To join these projects, request membership on the respective <a href="https://my.nci.org.au/mancini/project/access/join" target="_blank">access</a>, <a href="https://my.nci.org.au/mancini/project/hr22/join" target="_blank">hr22</a> and <a href="https://my.nci.org.au/mancini/project/ki32/join" target="_blank">ki32</a> and <a href="https://my.nci.org.au/mancini/project/ki32_mosrs/join" target="_blank">ki32_mosrs</a> NCI project pages.
        <div class="note">
            To request membership for the <i>ki32_mosrs</i> subproject you need to be member of the <i>ki32</i> project first.
        </div>
        For more information on how to join specific NCI projects, please refer to <a href="https://opus.nci.org.au/display/Help/How+to+connect+to+a+project" target="_blank">How to connect to a project</a>.
    </li>
    <li>
        <b>Connect to <i>accessdev</i></b>
        <br>
        To run {{ model }}, you need to connect to <a href="https://accessdev.nci.org.au/trac/wiki" target="_blank"><i>accessdev</i></a>. This is an NCI server providing configuration and run control for {{ model }}.
        <br>
        You also need to ensure there is correct communication between <i>accessdev</i> and <i>Gadi</i>.
        <br>
        To complete these steps, refer to the <i>SSH & SSH Agent</i> section in the <a href="https://accessdev.nci.org.au/trac/wiki/GettingConnected">Getting Connected to Accessdev</i></a> guide.
    </li>
</ul>

--------------------------------------------
## Get {{ model }} suite
{{ model }} comprises the model components <a href="../../model_components/atmosphere/#the-unified-model-um">UM</a>, <a href="../../model_components/ocean/#modular-ocean-model-mom">MOM</a>, <a href="../../model_components/sea-ice/#cice">CICE</a>, <a href="../../model_components/land/#cable">CABLE</a> and <a href="../../model_components/coupler/#oasis3-mct">OASIS</a>. These components, which have different model parameters, input data and computer-related information, need to be packaged together as a <i>suite</i> in order to run.
<br>
Each {{ model }} suite has an ID in the format <code>u-&lt;suite-name&gt;</code>, where <code>&lt;suite-name&gt;</code> is a unique identifier. For example, <code>u-br565</code> is the CMIP6-release preindustrial experiment suite.
<br>
Typically, an existing suite is copied and then edited as needed for a particular run.

### Copy {{ model }} suite with Rosie
<a href = "http://metomi.github.io/rose/doc/html/tutorial/rose/rosie.html" target="_blank">Rosie</a> is an <a href = "https://subversion.apache.org/" target="_blank">SVN</a> repository wrapper with a set of options specific for {{ model }} suites.
<br>
<br>
To copy an existing suite on <i>accessdev</i> you need to follow two main steps:
<ol>
    <li>
        <b>MOSRS authentication</b>
        <br>
        To authenticate using your <i>MOSRS</i> credentials, run:
        <pre><code>mosrs-auth</code></pre> 
        <terminal-window>
            <terminal-line data="input">mosrs-auth</terminal-line>
            <terminal-line>Please enter the MOSRS password for &lt;MOSRS-username&gt;:</terminal-line>
            <terminal-line lineDelay=1000>Successfully authenticated with MOSRS as &lt;MOSRS-username&gt;</terminal-line>
        </terminal-window>
    </li>
    <li>
        <b>Copy a suite</b>
        <br>
        <ul>
            <li>
                <i>Local-only copy</i>
                <br>
                To create a <i>local copy</i> of the <code>&lt;suite-ID&gt;</code> from the UKMO repository, run:
                <pre><code>rosie checkout &lt;suite-ID&gt;</code></pre>
                <terminal-window>
                    <terminal-line data="input">rosie checkout &lt;suite-ID&gt;</terminal-line>
                    <terminal-line>[INFO] create: /home/565/&lt;$USER&gt;/roses</terminal-line>
                    <terminal-line>[INFO] &lt;suite-ID&gt;: local copy created at /home/565/&lt;$USER&gt;/roses/&lt;suite-ID&gt;</terminal-line>
                </terminal-window>
                This option is mostly used for testing and examining existing suites.
            </li>
            <li>
                <i>Remote and local copy</i>
                <br> 
                Alternatively, to create a new copy of an existing <code>&lt;suite-ID&gt;</code> both <i>locally and remotely</i> in the UKMO repository, run: 
                <pre><code>rosie copy &lt;suite-ID&gt;</code></pre>
                <terminal-window>
                    <terminal-line data="input">rosie copy &lt;suite-ID&gt;</terminal-line>
                    <terminal-line>Copy "&lt;suite-ID&gt;/trunk@&lt;trunk-ID&gt;" to "u-?????"? [y or n (default)]</terminal-line> <terminal-line data="input">y</terminal-line>
                    <terminal-line>[INFO] &lt;new-suite-ID&gt;: created at https://code.metoffice.gov.uk/svn/roses-u/&lt;suite-n/a/m/e/&gt;</terminal-line>
                    <terminal-line>[INFO] &lt;new-suite-ID&gt;: copied items from &lt;suite-ID&gt;/trunk@&lt;trunk-ID&gt;</terminal-line>
                    <terminal-line>[INFO] &lt;suite-ID&gt;: local copy created at /home/565/&lt;$USER&gt;/roses/&lt;new-suite-ID&gt;</terminal-line>
                </terminal-window>
                When a new suite is created in this way, a <i>unique</i> <code>&lt;suite-ID&gt;</code> is generated within the repository and populated with descriptive information about the suite and its initial configuration.
            </li>
        </ul>
    </li>
</ol>

For additional <code>rosie</code> options, run:
<pre><code>rosie help</code></pre>
<br>
Suites are created in the user's home directory on <i>accessdev</i> under <code>~/roses/&lt;suite-ID&gt;</code>.
<br>
Each suite directory usually contains two subdirectories and three files:
<ul>
    <li><code>app</code> &rarr; directory containing the configuration files for various tasks within the suite.</li>
    <li><code>meta</code> &rarr; directory containing the GUI metadata.</li>
    <li><code>rose-suite.conf</code> &rarr; main suite configuration file.</li>
    <li><code>rose-suite.info</code> &rarr; suite information file.</li>
    <li><code>suite.rc</code> &rarr; <i>Cylc</i> control script file (Jinja2 language).</li>
    <terminal-window>
        <terminal-line data="input">ls ~/roses/&lt;suite-ID&gt;</terminal-line>
        <terminal-line class="ls-output-format">app meta rose-suite.conf rose-suite.info suite.rc</terminal-line>
    </terminal-window>
</ul>
----------------------------------------------------------------------------------------

## Edit {{ model }} suite configuration

### Rose
<a href = "http://metomi.github.io/rose/doc/html/index.html" target="_blank">Rose</a> is a configuration editor which can be used to view, edit, or run an {{ model }} suite.
<br> 
<br>
To edit a suite configuration on <i>accessdev</i>, run the following command from within the suite directory (e.g., <code>~/roses/&lt;suite-ID&gt;</code>) to open the <i>Rose</i> GUI:
<pre><code>rose edit &</code></pre> 
<div class="note">
    The <code>&</code> is optional. It allows the terminal prompt to remain active while running the <i>Rose</i> GUI as a separate process in the background.
</div>
<terminal-window>
    <terminal-line data="input">cd ~/roses/&lt;suite-ID&gt;</terminal-line>
    <terminal-line data="input" directory="~/roses/&lt;suite-ID&gt;">rose edit &</terminal-line>
    <terminal-line class="ls-output-format">[&lt;N&gt;] &lt;PID&gt;</terminal-line>
    <terminal-line data="input" directory="~/roses/&lt;suite-ID&gt;"></terminal-line>
    <img src="../../../assets/run_access_cm/Rose GUI.png" alt="Rose GUI">
</terminal-window>

### Change NCI project
To ensure that your suite is run under the correct NCI project for which you are a member, edit the <i>Compute project</i> field in <i>suite conf &rarr; Machine and Runtime Options</i>, and click the <i>Save</i> button <img src="../../../assets/run_access_cm/save_button.png" alt="Save button" style="height:1em"/>. 
<br> <br>
For example, to run an {{ model }} suite under the <code>tm70</code> project (ACCESS-NRI), enter <code>tm70</code> in the <i>Compute project</i> field:

<img src="../../../assets/run_access_cm/rose_change_project.gif" alt="Rose change project" class="example-img"/>
<div class="note">
    To run {{ model }}, you need to be a member of a project with allocated <i>Service Units</i> (SU). For more information, check <a href="../../../get_started/#join-relevant-nci-projects">how to join relevant NCI projects</a>.
</div>

### Change run length and cycling frequency
{{ model }} suites are often run in multiple steps, each one constituting a cycle. The job scheduler resubmits the suite every chosen <i>Cycling frequency</i> until the <i>Total Run length</i> is reached. 
<br>
<br>
To modify these parameters, navigate to <i>suite conf &rarr; Run Initialisation and Cycling</i>, edit the respective fields (using <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations" target="_blank">ISO 8601 Duration</a> format) and click the <i>Save</i> button <img src="../../../assets/run_access_cm/save_button.png" alt="Save button" style="height:1em"/>.
<br> 
<br>
For example, to run a suite for a total of 50 years with a 1-year job resubmission, change <i>Total Run length</i> to <code>P50Y</code> and <i>Cycling frequency</i> to <code>P1Y</code> (the maximum <i>Cycling frequency</i> is currently two years):

<img src="../../../assets/run_access_cm/rose_change_run_length.gif" alt="Rose change run length" class="example-img"/>


### Change wallclock time
The <i>Wallclock time</i> is the time requested by the PBS job<!-- TO DO <a href="../getting-started/#pbs-jobs" target="_blank">PBS job</a> --> to run a single cycle. If this time is insufficient for the suite to complete a cycle, your job will be terminated before completing the run. Hence, if you change the <i>Cycling frequency</i>, you may also need to change the <i>Wallclock time</i> accordingly. While the time required for a suite to complete a cycle depends on several factors, a good estimation is 4 hours per simulated year.
<br>
<br>
To modify the <i>Wallclock time</i>, edit the respective field in <i>suite conf &rarr; Run Initialisation and Cycling</i> (using <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations" target="_blank">ISO 8601 Duration</a> format) and click the <i>Save</i> button <img src="../../../assets/run_access_cm/save_button.png" alt="Save button" style="height:1em"/>. 

<!-- TO DO For more details on how to edit other suite parameters using Rose GUI, such as component configurations, output variables (STASH), or science settings, check <a href="../rose_gui_user_guide" target="_blank">Rose GUI user guide</a>. -->
----------------------------------------------------------------------------------------

## Run {{ model }} suite
{{ model }} suites run on <a href="https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview" target="_blank">Gadi</a> through a PBS job submission.
<br>
When the suite runs, its configuration files are copied on <i>Gadi</i> inside <code>/scratch/$PROJECT/$USER/cylc-run/&lt;suite-ID&gt;</code> and a symbolic link to this directory is also created in the <code>$USER</code>'s home directory under <code>~/cylc-run/&lt;suite-ID&gt;</code>.
<br>
An {{ model }} suite comprises several tasks, such as checking out code repositories, compiling and building the different model components, running the model, etc. The workflow of these tasks is controlled by <i>Cylc</i>.

### Cylc
<a href="https://cylc.github.io/cylc-doc/7.8.8/html/index.html" target="_blank">Cylc</a> (pronounced ‘silk’) is a workflow manager that automatically executes tasks according to the model's main cycle script <code>suite.rc</code>. <i>Cylc</i> controls how the job will be run and manages the time steps of each submodel. It also monitors all tasks, reporting any errors that may occur.
<br>
<br>
To run an {{ model }} suite on <i>accessdev</i>, run the following command from within the suite directory:
<pre><code>rose suite-run</code></pre>

After the initial tasks are executed, the <i>Cylc</i> GUI will open. You can now view and control the different tasks in the suite as they are run:
<ol>
    <terminal-window lineDelay="50">
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
    </terminal-window>
    <div class="note">
        After running the command <code>rose suite-run</code>, if you get an error similar to the following:
        <pre><code><span style="color: orangered">[FAIL]</span> Suite "&lt;suite-ID&gt;" appears to be running:
            <span style="color: orangered">[FAIL]</span> Contact info from: "/home/565/&lt;$USER&gt;/cylc-run/&lt;suite-ID&gt;/.service/contact"
            <span style="color: orangered">[FAIL]</span> &emsp;&emsp;CYLC_SUITE_HOST=accessdev.nci.org.au
            <span style="color: orangered">[FAIL]</span> &emsp;&emsp;CYLC_SUITE_OWNER=&lt;$USER&gt;
            <span style="color: orangered">[FAIL]</span> &emsp;&emsp;CYLC_SUITE_PORT=&lt;port&gt;
            <span style="color: orangered">[FAIL]</span> &emsp;&emsp;CYLC_SUITE_PROCESS=&lt;PID&gt; python2 /usr/local/cylc/cylc-7.8.3/bin/cylc-run &lt;suite-ID&gt;
            <span style="color: orangered">[FAIL]</span> Try "cylc stop '&lt;suite-ID&gt;'" first?
        </code></pre>
        you should run:
        <pre><code>rm /home/565/&lt;$USER&gt;/cylc-run/&lt;suite-ID&gt;/.service/contact</code></pre>
        before running the <code>rose suite-run</code> command again.
    </div>
</ol>
You are done!!
<br>
<br>
If you do not get any errors, you can check the suite output files after the run is complete.
<br>
You can now close the <i>Cylc</i> GUI. To open it again, run the following command from within the suite directory: 
<pre><code>rose suite-gcontrol</code></pre>
----------------------------------------------------------------------------------------

## Monitor {{ model }} runs
### Check for errors
It is quite common, especially during the first few runs, to experience errors and job failures. Running an {{ model }} suite involves the execution of several tasks, and any of these tasks could fail. When a task fails, the suite is halted and a red icon appears next to the respective task name in the <i>Cylc</i> GUI. 
<br>
To investigate the cause of a failure, we need to look at the logs <code>job.err</code> and <code>job.out</code> from the suite run. There are two main ways to do so:
<ol>
    <li>
        <b>Using the <i>Cylc</i> GUI</b>
        <br>
        Right-click on the task that failed and click on <i>View Job Logs (Viewer) &rarr; job.err</i> or <i>job.out</i>.
        <br>
        To access a specific task, click on the arrow next to the task to extend the drop-down menu with all the subtasks.
        <br>
        <img src="../../../assets/run_access_cm/investigate_error_gui.gif" alt="Investigate Error GUI" class="example-img"/>
    </li>
    <li>
        <b>Through the suite directory</b>
        <br>
        The suite's log directories are stored in <code>~/cylc-run/&lt;suite-ID&gt;</code> as <code>log.&lt;TIMESTAMP&gt;</code>, and the latest set of logs are also symlinked in the <code>~/cylc-run/&lt;suite-ID&gt;/log</code> directory.
        <br>
        The logs for the main job can be found in the <code>~/cylc-run/&lt;suite-ID&gt;/log/job</code> directory.
        <br>
        Logs are separated into simulation cycles according to their starting dates, and then differentiated by task. They are then further separated into "attempts" (consecutive failed/successful tasks), where <code>NN</code> is a symlink to the most recent attempt.
        <br>
        <br>
        In the example above, a failure occurred for the <i>09500101</i> simulation cycle (i.e. starting date \: 1st January 950) in the <i>coupled</i> task. Hence, the <code>job.err</code> and <code>job.out</code> files can be found in the <code>~/cylc-run/&lt;suite-ID&gt;/log/job/09500101/coupled/NN</code> directory.
        <terminal-window>
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
        </terminal-window>
    </li>
</ol>
----------------------------------------------------------------------------------------

## Stop, restart and reload suites
In some cases, you may want to control the running state of a suite.
<br>
If your <i>Cylc</i> GUI has been closed and you are unsure whether your suite is still running, you can scan for active suites and reopen the GUI if desired.
<br>
To scan for active suites, run:
<pre><code>cylc scan</code></pre>
To reopen the <i>Cylc</i> GUI, run the following command from within the suite directory:
<pre><code>rose suite-gcontrol</code></pre>
<terminal-window>
    <terminal-line data="input">cylc scan</terminal-line>
    <terminal-line>&lt;suite-ID&gt; &lt;$USER&gt;@accessdev.nci.org.au:&lt;port&gt;</terminal-line>
    <terminal-line data="input">cd ~/roses/&lt;suite-ID&gt;</terminal-line>
    <terminal-line data="input" directory="~/roses/&lt;suite-ID&gt;">rose suite-gcontrol</terminal-line>
    <img src="../../../assets/run_access_cm/Cylc GUI.png" alt="Cylc GUI">
</terminal-window>

### STOP a suite
To shutdown a suite in a safe manner, run the following command from within the suite directory:
<pre><code>rose suite-stop -y</code></pre>
Alternatively, you can directly kill the PBS job(s) connected to your run. To do so:
<ol>
    <li>
        Check the status of all your PBS jobs:
        <pre><code>qstat -u $USER</code></pre>
    </li>
    <li>
        Delete any job related to your run:
        <pre><code>qdel &lt;job-ID&gt;</code></pre>
    </li>
</ol>

### RESTART a suite
There are two main ways to restart a suite:
<ul>
    <li>
        <b><i>SOFT</i> restart</b>
        <br>
        To reinstall the suite and reopen <i>Cylc</i> in the same state it was prior to being stopped, run the following command from within the suite directory:
        <pre><code>rose suite-run --restart</code></pre>
        <div class="note">
            You may need to manually trigger failed tasks from the <i>Cylc</i> GUI.
        </div>
        <terminal-window lineDelay="50">
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
        </terminal-window>
    </li>
    <br>  
    <li>
        <b><i>HARD</i> restart</b>
        <br>
        To overwrite any previous runs of the suite and start afresh, run the following command from within the suite directory:
        <pre><code>rose suite-run --new</code></pre>
        <div class="note">
            WARNING!! This will overwrite all existing model output and logs for the same suite.
        </div>
    </li>
</ul>

### RELOAD a suite
In some cases the suite needs to be updated without necessarily having to stop it (e.g., after fixing a typo in a file). Updating an active suite is called a <i>reload</i>, where the suite is <i>re-installed</i> and <i>Cylc</i> is updated with the changes. This is similar to a <i>SOFT</i> restart, except new changes are installed, so you may need to manually trigger failed tasks from the <i>Cylc</i> GUI.
<br>
<br>
To reload a suite, run the following command from within the suite directory:
<pre><code>rose suite-run --reload</code></pre>
----------------------------------------------------------------------------------------

## {{ model }} output files
All {{ model }} output files, together with work files, are available on <i>Gadi</i> inside <code>/scratch/$PROJECT/$USER/cylc-run/&lt;suite-ID&gt;</code>. They are also symlinked in <code>~/cylc-run/&lt;suite-ID&gt;</code>.
<br>
While the suite is running, files are moved between the <code>share</code> and <code>work</code> directories.
<br>
At the end of each cycle, model output data and restart files are moved to <code>/scratch/$PROJECT/$USER/archive/&lt;suite-name&gt;</code>.
<br>
This directory contains two subdirectories:
<ul>
    <li><code>history</code></li>
    <li><code>restart</code></li>
</ul>

### Output data
<code>/scratch/$PROJECT/$USER/archive/&lt;suite-name&gt;/history</code> is the directory containing the model output data, which is grouped according to each model component:
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
For the atmospheric output data, the files are typically a <a href = "https://code.metoffice.gov.uk/doc/um/latest/papers/umdp_F03.pdf" target="_blank">UM fieldsfile</a> or netCDF file, formatted as <code>&lt;suite-name&gt;a.p&lt;output-stream-identifier&gt;&lt;year&gt;&lt;month-string&gt;</code>.
<br>
For the <code>u-br565</code> suite in this example, the <code>atm</code> directory contains:
<terminal-window>
    <terminal-line data="input">cd /scratch/&lt;$PROJECT&gt;/&lt;$USER&gt;/archive</terminal-line>
    <terminal-line data="input" directory="/scratch/&lt;$PROJECT&gt;/&lt;$USER&gt;/archive">ls</terminal-line>
    <terminal-line class="ls-output-format">br565 &lt;other-suite-name&gt; &lt;other-suite-name&gt;</terminal-line>
    <terminal-line data="input" directory="/scratch/&lt;$PROJECT&gt;/&lt;$USER&gt;/archive">cd br565</terminal-line>
    <terminal-line data="input" directory="/scratch/&lt;$PROJECT&gt;/&lt;$USER&gt;/archive/br565">ls</terminal-line>
    <terminal-line class="ls-output-format">history restart</terminal-line>
    <terminal-line data="input" directory="/scratch/&lt;$PROJECT&gt;/&lt;$USER&gt;/archive/br565">ls history/atm</terminal-line>
    <terminal-line class="ls-output-format">br565a.pd0950apr.nc br565a.pd0950aug.nc br565a.pd0950dec.nc br565a.pd0950feb.nc br565a.pd0950jan.nc br565a.pd0950jul.nc br565a.pd0950jun.nc br565a.pd0950mar.nc br565a.pd0950may.nc br565a.pd0950nov.nc br565a.pd0950oct.nc br565a.pd0950sep.nc br565a.pd0951apr.nc br565a.pd0951aug.nc br565a.pd0951dec.nc br565a.pm0950apr.nc br565a.pm0950aug.nc br565a.pm0950dec.nc br565a.pm0950feb.nc br565a.pm0950jan.nc br565a.pm0950jul.nc br565a.pm0950jun.nc br565a.pm0950mar.nc br565a.pm0950may.nc br565a.pm0950nov.nc br565a.pm0950oct.nc br565a.pm0950sep.nc br565a.pm0951apr.nc br565a.pm0951aug.nc br565a.pm0951dec.nc netCDF</terminal-line>
</terminal-window>
<!-- <br>
For more details on how to control different output variables (STASH), and output streams, check <a href="../rose_gui_user_guide" target="_blank">Rose GUI user guide (TO CHECK)</a>. -->

### Restart files
The restart files can be found in the <code>/scratch/$PROJECT/$USER/archive/&lt;suite-name&gt;/restart</code> directory, where they are categorised according to model components (similar to the <code>history</code> folder above).
<br>
The atmospheric restart files, which are <a href = "https://code.metoffice.gov.uk/doc/um/latest/papers/umdp_F03.pdf" target="_blank">UM fieldsfiles</a>, are formatted as <code>&lt;suite-name&gt;a.da&lt;year&gt;&lt;month&gt;&lt;day&gt;_00</code>. 
<!-- <br>
For more details on how to control the frequency and formatting of restart dumps, check <a href="../rose_gui_user_guide" target="_blank">Rose GUI user guide (TO CHECK)</a>. -->
For the <code>u-br565</code> suite in this example, the <code>atm</code> directory contains:
<terminal-window>
    <terminal-line data="input">ls /scratch/&lt;$PROJECT&gt;/&lt;$USER&gt;/archive/br565/restart/atm</terminal-line>
    <terminal-line class="ls-output-format">br565a.da09500201_00 br565a.da09510101_00 br565.xhist-09500131 br565.xhist-09501231 </terminal-line>
</terminal-window>
Files formatted as <code>&lt;suite-name&gt;a.xhist-&lt;year&gt;&lt;month&gt;&lt;day&gt;</code> contain metadata information.

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