# <div class="highlight-bg"> Running ACCESS-CM2 Model </div>
This section includes a step-by-step instruction set on how to run the **ACCESS-CM2** suite.

It is also built as a future point of reference, where you can come back and find the section containing the information you need.

## **Getting Started**

This section outlines some key user requirements and preparations before getting started with running ACCESS-CM suites.

### Requirements for running ACCESS-CM suites 

Here, we assume that you already have access to Gadi, the supercomputer hosted by the National Computational Infrastructure (NCI). If needed, you can go back to our guide on how to get [access to Gadi](../running-a-model/getting_started/access_to_gadi_at_nci.md).

#### Basic Setup 
To run an ACCESS-CM suite, new users will need to:

- [Join the ACCESS group](https://my.nci.org.au/mancini/project/access/join). You can also find instructions on how to [join a particular project](https://opus.nci.org.au/display/Help/How+to+connect+to+a+project) through the NCI self-service portal. 
- [Connect to accessdev](https://accessdev.nci.org.au/trac/wiki/GettingConnected) to complete your setup once you have your NCI credentials and are a member of the ACCESS group. 
*Note:* At present, both accessdev and [ARE](https://opus.nci.org.au/display/Help/ARE+User+Guide) run the models on Gadi. However, ARE only supports shorter-running suites (i.e., runs less than 48 hours). Work is currently in progress to fully transition the cylc workflows from accessdev virtual machine to the ARE.
- Additional steps relating to the [communication between accessdev and Gadi](https://accessdev.nci.org.au/trac/wiki/gadi) may also be necessary.

#### UK Met Office Environment on NCI
As components within the ACCESS-CM suites use the UK Met Office model code, the [UK Met Office Environment](https://opus.nci.org.au/display/DAE/UK+Met+Office+Environment+on+NCI) is installed on NCI. This comprises the model software and tools as well as the cylc workflow system, rose suites, the Met Office MOSRS repository and our local replica repository. In order to checkout and run ACCESS-CM2 suites on Gadi using Rose/Cylc, you need to have access to a number of repositories at the Met Office as well as the local replica and local software on NCI, which will require fullfilling these [prerequisites](https://opus.nci.org.au/display/DAE/UK+Met+Office+environment+prerequisites).

#### Met Office Science Repository Service (MOSRS)
[Met Office Science Repository Service (MOSRS)](https://code.metoffice.gov.uk) is a Trac server run by the UK Met Office for sharing code and configurations for the climate models it runs with partners. It contains the source code and configurations for the UM and JULES amongst other things.

To apply for a MOSRS account, you should contact your [local institutional sponsor](https://opus.nci.org.au/display/DAE/UK+Met+Office+environment+prerequisites).

--------------------------------------------

### Preparing to run an ACCESS-CM suite
At this stage, you should be able to connect to accessdev and Gadi. 

[accessdev](https://accessdev.nci.org.au) is a frontend system where you prepare ACCESS jobs and then submit them to [Gadi](https://nci.org.au/our-systems/hpc-systems) (the supercomputer at NCI where ACCESS is run).  

#### Logging in to Gadi and accessdev

To run an ACCESS-CM2 suite (i.e., job), you need to first [login to Gadi](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-LoggingIn&LoginNodes) with your `username` through a login node. 

`ssh -Y username@gadi.nci.org.au`

Similarly, to login to accessdev: 

`ssh -Y $USER@accessdev.nci.org.au`

Aliases and shortcuts can be created to simplify these commands by [configuring SSH](https://accessdev.nci.org.au/trac/wiki/Guides/SSH).

--------------------------------------------
# Copy, Edit, and Run an ACCESS-CM2 suite

<div style="text-align: justify">
ACCESS-CM2 is a set of sub-models (eg. UM, MOM, CICE, CABLE, OASIS) with a range of model parameters, input data, and computer related information, that need to be packaged together as a <i>suite</i> in order to run.
<br>
Each ACCESS-CM2 suite has an ID, in the format <code>u-&lt;suite-name&gt;</code>, with <code>&lt;suite-name&gt;</code> being a unique identifier (e.g. <code>u-br565</code> is the CMIP6 release preindustrial experiment suite).
<br>
Typically, an existing suite is copied and then edited as needed for a particular run.
<br>
</div>

## Copy ACCESS-CM2 suites with Rosie

<div style="text-align: justify">
<a href = "http://metomi.github.io/rose/doc/html/tutorial/rose/rosie.html" target="_blank">Rosie</a> is an <a href = "https://subversion.apache.org/" target="_blank">SVN</a> repository wrapper with a set of options to work with ACCESS-CM2 suites.
<br>
To copy an existing suite, on <i>accessdev</i>:
<!-- Change this to gadi/ARE when it will be completely possible to run CM2 fully on gadi-->
<ol>
    <li>
        Run <code>mosrs-auth</code> to authenticate using your MOSRS credentials:
        <!-- TO DO (see <a href="../access_cm2/getting-started/#met-office-science-repository-service-mosrs" target="_blank">Met Office Science Repository Service (MOSRS)</a> for troubleshooting)-->
        <br>
        <div class="termynal">
            <span data-ty="input">mosrs-auth</span>
            <span data-ty>Please enter the MOSRS password for &lt;MOSRS-username&gt;:</span>
            <span data-ty="input" data-ty-delay="1500"></span>
            <span data-ty>Successfully authenticated with MOSRS as &lt;MOSRS-username&gt;</span>
        </div>
    </li>
    <li>
        Run <code>rosie checkout &lt;suite-ID&gt;</code> to create a local copy of the <code>&lt;suite-ID&gt;</code> from the UKMO repository (used mostly for testing and examining existing suites):
        <br>
        <div class="termynal">
            <span data-ty="input">rosie checkout &lt;suite-ID&gt;</span>
            <span data-ty>[INFO] create: /home/565/&lt;$USER&gt;/roses</span>
            <span data-ty>[INFO] &lt;suite-ID&gt;: local copy created at /home/565/&lt;$USER&gt;/roses/&lt;suite-ID&gt;</span>
        </div>
        <br>
        Alternatively, run <code>rosie copy &lt;suite-ID&gt;</code> to create a new full copy (local and remote in the UKMO repository) rather than just a local copy. When a new suite is created in this way, a new unique name is generated within the repository, and populated with some descriptive information about the suite along with all the initial configuration details:
        <br>
        <div class="termynal">
            <span data-ty="input">rosie copy &lt;suite-ID&gt;</span>
            <span data-ty>Copy "&lt;suite-ID&gt;/trunk@&lt;trunk-ID&gt;" to "u-?????"? [y or n (default)]</span> <span data-ty="input">y</span>
            <span data-ty>[INFO] &lt;new-suite-ID&gt;: created at https://code.metoffice.gov.uk/svn/roses-u/&lt;suite-n/a/m/e/&gt;</span>
            <span data-ty>[INFO] &lt;new-suite-ID&gt;: copied items from &lt;suite-ID&gt;/trunk@&lt;trunk-ID&gt;</span>
            <span data-ty>[INFO] &lt;suite-ID&gt;: local copy created at /home/565/&lt;$USER&gt;/roses/&lt;new-suite-ID&gt;</span>
        </div>
    </li>
</ol>
For additional <code>rosie</code> options, run <code>rosie help</code>.
<br><br>
The suites are created in the user's <i>accessdev</i> home directory, under <code>~/roses/&lt;suite-ID&gt;</code>.
<br>
The suite directory usually contains 2 subdirectories and 3 files:
<ul>
    <li><code>app</code> &rarr; directory containing the configuration files for the various tasks within the suite.</li>
    <li><code>meta</code> &rarr; directory containing the GUI metadata.</li>
    <li><code>rose-suite.conf</code> &rarr; the main suite configuration file.</li>
    <li><code>rose-suite.info</code> &rarr; suite information file.</li>
    <li><code>suite.rc</code> &rarr; the Cylc control script file (Jinja2 language).</li>
    <div class="termynal">
        <span data-ty="input">ls ~/roses/&lt;suite-ID&gt;</span>
        <span data-ty class="double-spaced"><span class="directory-text">app meta</span> rose-suite.conf rose-suite.info suite.rc</span>
    </div>
</ul>
</div>
----------------------------------------------------------------------------------------

## Edit an ACCESS-CM2 suite configuration with Rose GUI

<div style="text-align: justify">
<a href = "http://metomi.github.io/rose/doc/html/index.html" target="_blank">Rose</a> is a configuration editor which can be used to view, edit, or run an ACCESS-CM2 suite.
<br>
To edit a suite configuration, on <i>accessdev</i>:
<!-- Change this to gadi/ARE when it will be completely possible to run CM2 fully on gadi-->
<ol>
    <li>
        Run <code>rose edit &</code> (the <code>&</code> is optional and keeps the terminal prompt active while runs the GUI as a separate process) from inside the relevant suite directory (e.g. <code>~/roses/&lt;suite-ID&gt;</code>) to open the Rose GUI and inspect the suite information.
        <br>
        <div class="termynal">
            <span data-ty="input">cd ~/roses/&lt;suite-ID&gt;</span>
            <span data-ty="input" directory="~/roses/&lt;suite-ID&gt;">rose edit &</span>
            <span data-ty data-ty-delay="20" class="double-spaced">[&lt;N&gt;] &lt;PID&gt;</span>
            <span data-ty="input"></span>
            <!-- <span data-ty style="color: red">TO DO Add Rose GUI image </span> -->
        </div>
    </li>
    <li>
        There are many settings that can be changed in a Rose GUI. However, there are a few that we definitely want to check and edit before we run a suite:
        <ul>
            <li>
                NCI Project
                <br>
                To make sure we run the suite under the NCI project we belong to, we can navigate to <i>suite conf &rarr; Machine and Runtime Options</i>, edit the <i>Compute project</i> field, and click the <i>Save</i> button <img src="../../../assets/run_access_cm/save_button.png" alt="Save button" style="height:1em"/>. (Check <a href="https://opus.nci.org.au/display/Help/How+to+connect+to+a+project" target="_blank">how to connect to a project</a> if you have not joined one yet).
                <br>
                If, for example, we belong to the <i>tm70</i> Project (ACCESS-NRI), we will insert <code>tm70</code> in the <i>Compute project</i> field:
                <br>
                <img src="../../../assets/run_access_cm/rose_change_project.gif" alt="Rose change Project" style="width:750px"/>
            </li>
            <li>
                <b>Total Run length / Cycling frequency</b>
                <br>
                ACCESS-CM2 suites are often run in multiple steps, each of them constituting a cycle, with the job scheduler resubmitting the suite every chosen <i>Cycling frequency</i>, until the <i>Total Run length</i> is met.
                <br>
                To modify these parameters, we can navigate to <i>suite conf &rarr; Run Initialisation and Cycling</i>, edit the respective fields, and click the <i>Save</i> button <img src="../../../assets/run_access_cm/save_button.png" alt="Save button" style="height:1em"/>. The values are in the <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations" target="_blank">ISO 8601 Duration</a> format.
                <br>
                If, for example, we want to run the suite for a total of 50 Years, and resubmit every year, we will change <i>Total Run length</i> to <code>P50Y</code> and <i>Cycling frequency</i> to <code>P1Y</code>. Note that the current maximum <i>Cycling frequency</i> is 2 years:
                <br>
                <img src="../../../assets/run_access_cm/rose_change_run_length.gif" alt="Rose change run length" style="width:700px"/>
            </li>
            <li>
                <b>Wallclock time</b>
                <br>
                The <i>Wallclock time</i> is the time requested by the PBS job<!-- TO DO <a href="../getting-started/#pbs-jobs" target="_blank">PBS job</a> --> to run a single cycle. If this time is not enough for the suite to end its cycle, our job will be terminated before the suite can complete the run. 
                <br>
                If we change the <i>Cycling frequency</i>, we might need to change the <i>Wallclock time</i> accordingly. 
                <br>
                The time needed for the suite to run a full cycle depends on several factors, but a good estimation can be 4 hours per simulated year.
                <br>
                To modify the <i>Wallclock time</i>, we can navigate to <i>suite conf &rarr; Run Initialisation and Cycling</i>, edit the respective field, and click the <i>Save</i> button <img src="../../../assets/run_access_cm/save_button.png" alt="Save button" style="height:1em"/>. The value is in the <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations" target="_blank">ISO 8601 Duration</a> format.
            </li>
        </ul>
    </li>
</ol>
<!-- TO DO For more details on how to edit other suite parameters using Rose GUI, such as component configurations, output variables (STASH), or science settings, check <a href="../rose_gui_user_guide" target="_blank">Rose GUI user guide</a>. -->
</div>
----------------------------------------------------------------------------------------

## Run an ACCESS-CM2 suite

<div style="text-align: justify">
After completing all the modifications to the suite, we are ready to run it.
<br>
ACCESS-CM2 suites run on <a href="https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview" target="_blank">Gadi</a> through a PBS job submission.
<br>
When the suite gets run, the suite configuration files are copied on Gadi under <code>/scratch/&lt;$PROJECT&gt;/$USER/cylc-run/&lt;suite-ID&gt;</code>, and a symbolic link to this folder is also created in the <code>$USER</code>'s home directory under <code>~/cylc-run/&lt;suite-ID&gt;</code>.
<br>
An ACCESS-CM2 suite is constituted by several tasks (such as checking out code repositories, compiling and building the different model components, running the model, etc.). The workflow of these tasks is controlled by Cylc.
<br>
<a href="https://cylc.github.io/cylc-doc/7.8.8/html/index.html" target="_blank">Cylc</a> (pronounced ‘silk’), is a workflow manager that automatically executes tasks according to the model main cycle script <code>suite.rc</code>. Cylc deals with how the job will be run and manages the time steps of each sub-model, as well as monitoring all the tasks and reporting any error that might occur.
<br>
To run an ACCESS-CM2 suite, on <i>accessdev</i>:
<ol>
    <li>
        Run <code>rose suite-run</code>, from inside the suite directory, to run the initial tasks.
    </li>
    <li>
        After these few small tasks get executed, the Cylc GUI will open up and you will be able to see and control all the different tasks in the suite as they are run.
    </li>
    <div class="termynal">
        <span data-ty="input">cd ~/roses/&lt;suite-ID&gt;</span>
        <span data-ty="input" directory="~/roses/&lt;suite-ID&gt;">rose suite-run</span>
        <span data-ty data-ty-delay="50">[INFO] export CYLC_VERSION=7.8.3</span>
        <span data-ty data-ty-delay="50">[INFO] export ROSE_ORIG_HOST=accessdev.nci.org.au</span>
        <span data-ty data-ty-delay="50">[INFO] export ROSE_SITE=</span>
        <span data-ty data-ty-delay="50">[INFO] export ROSE_VERSION=2019.01.2</span>
        <span data-ty data-ty-delay="50">[INFO] create: /home/565/&lt;$USER&gt;/cylc-run/&lt;suite-ID&gt;</span>
        <span data-ty data-ty-delay="50">[INFO] create: log.&lt;timestamp&gt;</span>
        <span data-ty data-ty-delay="50">[INFO] symlink: log.&lt;timestamp&gt; <= log</span>
        <span data-ty data-ty-delay="50">[INFO] create: log/suite</span>
        <span data-ty data-ty-delay="50">[INFO] create: log/rose-conf</span>
        <span data-ty data-ty-delay="50">[INFO] symlink: rose-conf/&lt;timestamp&gt;-run.conf <= log/rose-suite-run.conf</span>
        <span data-ty data-ty-delay="50">[INFO] symlink: rose-conf/&lt;timestamp&gt;-run.version <= log/rose-suite-run.version</span>
        <span data-ty data-ty-delay="50">[INFO] install: rose-suite.info</span>
        <span data-ty data-ty-delay="50">&emsp;&emsp;&emsp;&emsp;source: /home/565/&lt;$USER&gt;/roses/&lt;suite-ID&gt;/rose-suite.info</span>
        <span data-ty data-ty-delay="50">[INFO] create: app</span>
        <span data-ty data-ty-delay="50">[INFO] install: app</span>
        <span data-ty data-ty-delay="50">&emsp;&emsp;&emsp;&emsp;source: /home/565/&lt;$USER&gt;/roses/&lt;suite-ID&gt;/app</span>
        <span data-ty data-ty-delay="50">[INFO] create: meta</span>
        <span data-ty data-ty-delay="50">[INFO] install: meta</span>
        <span data-ty data-ty-delay="50">&emsp;&emsp;&emsp;&emsp;source: /home/565/&lt;$USER&gt;/roses/&lt;suite-ID&gt;/meta</span>
        <span data-ty data-ty-delay="50">[INFO] install: suite.rc</span>
        <span data-ty data-ty-delay="50">[INFO] REGISTERED &lt;suite-ID&gt; -> /home/565/&lt;$USER&gt;/cylc-run/&lt;suite-ID&gt;</span>
        <span data-ty data-ty-delay="50">[INFO] create: share</span>
        <span data-ty data-ty-delay="50">[INFO] install: share</span>
        <span data-ty data-ty-delay="50">[INFO] create: work</span>
        <span data-ty data-ty-delay="50">[INFO] chdir: log/</span>
        <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;._.</span>
        <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;| |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The Cylc Suite Engine [7.8.3]</span>
        <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] ._____._. ._| |_____.&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;Copyright (C) 2008-2019 NIWA</span>
        <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] | .___| | | | | .___|&emsp;& British Crown (Met Office) & Contributors.</span>
        <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] | !___| !_! | | !___. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</span>
        <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] !_____!___. |_!_____! This program comes with ABSOLUTELY NO WARRANTY;</span>
        <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] &emsp;&emsp;&emsp;&thinsp;.___! | &emsp;&emsp;&emsp;&emsp;&emsp;see `cylc warranty`. &thinsp;It is free software, you</span>
        <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] &emsp;&emsp;&emsp;&thinsp;!_____! &emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;are welcome to redistribute it under certain</span>
        <span data-ty data-ty-delay="50">[INFO]</span>
        <span data-ty data-ty-delay="50">[INFO] *** listening on https://accessdev.nci.org.au:&lt;port&gt;/ ***</span>
        <span data-ty data-ty-delay="50">[INFO]</span>
        <span data-ty data-ty-delay="50">[INFO] To view suite server program contact information:</span>
        <span data-ty data-ty-delay="50">[INFO]  $ cylc get-suite-contact &lt;suite-ID&gt;</span>
        <span data-ty data-ty-delay="50">[INFO]</span>
        <span data-ty data-ty-delay="50">[INFO] Other ways to see if the suite is still running:</span>
        <span data-ty data-ty-delay="50">[INFO]  $ cylc scan -n '&lt;suite-ID&gt;' accessdev.nci.org.au</span>
        <span data-ty data-ty-delay="50">[INFO]  $ cylc ping -v --host=accessdev.nci.org.au &lt;suite-ID&gt;</span>
        <span data-ty data-ty-delay="50">[INFO]  $ ps -opid,args &lt;PID&gt;  # on accessdev.nci.org.au</span>
        <span data-ty style="color: red">TO DO --> Add Rose GUI image </span>
    </div>
    <!-- <img src="../assets/rose_suite_run.gif" alt="rose suite-run" style="width:700px"/> -->
</ol>
You are done!!
<br>
If you don't get any errors, you will be able to check the suite output files after the run is complete.
<br>
Note that, at this stage, it is possible to close the Cylc GUI.
<br>
If you want to open it again, just run <code>rose suite-gcontrol</code> from inside the suite directory.

</div>
----------------------------------------------------------------------------------------

## Check for errors

<div style="text-align: justify">
It is quite common, especially during the first few runs, to experience errors and job failures. An ACCESS-CM2 suite is constituted by several tasks, 
and each of these tasks could fail. When a task fails, the suite is halted and you will see a red icon next to the respective task name in the Cylc GUI. 
<br>
To investigate the cause of a failure, we need to look at the logs (<code>job.err</code> and <code>job.out</code>) from the suite run. There are two main ways to do so:
<ul>
    <li>
        Using the Cylc GUI
        <br>
        Right-click on the task that failed and click on <i>View Job Logs (Viewer) &rarr; job.err</i> or <i>job.out</i>.
        <br>
        To access the specific task you might have to click on the arrow next to the task, to extend the drop-down menu with all the sub-taks.
        <br>
        <img src="../../../assets/run_access_cm/investigate_error_gui.gif" alt="Investigate Error GUI" />
    </li>
    <li>
        In the <code>~/cylc-run/&lt;suite-ID&gt;</code> directory
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
        <br>
        <div class="termynal">
            <span data-ty="input">cd ~/cylc-run/&lt;suite-ID&gt;</span>
            <span data-ty="input" directory="~/cylc-run/&lt;suite-ID&gt;">ls</span>
            <span data-ty class="double-spaced"><span class="directory-text">app</span> <span class="symlink-text">cylc-suite.db log</span> <span class="directory-text">log.20230530T051952Z meta</span> rose-suite.info <span class="directory-text">share</span> suite.rc suite.rc.processed <span class="directory-text">work</span></span>
            <span data-ty="input" directory="~/cylc-run/&lt;suite-ID&gt;">cd log</span>
            <span data-ty="input" directory="~/cylc-run/&lt;suite-ID&gt;/log">ls</span>
            <span data-ty class="double-spaced">db <span class="directory-text">job rose.conf</span> <span class="symlink-text">rose-suite-run.conf</span> rose-suite-run.locs rose-suite-run.log <span class="symlink-text">rose-suite-run.version</span> <span class="directory-text">suite suiterc</span></span>
            <span data-ty="input" directory="~/cylc-run/&lt;suite-ID&gt;/log">cd job</span>
            <span data-ty="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job">ls</span>
            <span data-ty class="directory-text double-spaced">09500101</span>
            <span data-ty="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job">cd 09500101</span>
            <span data-ty="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job/09500101">ls</span>
            <span data-ty class="directory-text double-spaced">coupled fcm_make2_um fcm_make_um install_warm make2_mom make_mom fcm_make2_drivers fcm_make_drivers install_ancil make2_cice make_cice</span>
            <span data-ty="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job/09500101">cd coupled</span>
            <span data-ty="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job/09500101/coupled">ls</span>
            <span data-ty class="double-spaced"><span class="directory-text">01 02 03</span> <span class="symlink-text">NN</span></span>
            <span data-ty="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job/09500101">cd NN</span>
            <span data-ty="input" directory="~/cylc-run/&lt;suite-ID&gt;/log/job/09500101/NN">ls</span>
            <span data-ty class="double-spaced">job job-activity.log job.err job.out job.status</span>
        </div>
    </li>
</ul>

</div>

----------------------------------------------------------------------------------------

## Stop, restart and reload suites

<div style="text-align: justify">
Sometimes, you may want to control the running state of a suite.
<br>
If your Cylc GUI has been closed and you are unsure whether your suite is still running, you can scan for active suites and reopen the GUI if desired.
<br>
To scan for active suites run <code>cylc scan</code>.
<br>
To reopen the Cylc GUI there are 2 main ways:
<ul>
    <li>
        run <code>rose suite-gcontrol</code> from inside the suite directory
    </li>
    OR
    <li>
        run <code>gcylc &lt;suite-ID&gt;</code>
    </li>
</ul> 
<br>
<div class="termynal">
    <span data-ty="input">cylc scan</span>
    <span data-ty>&lt;suite-ID&gt; &lt;$USER&gt;@accessdev.nci.org.au:&lt;port&gt;</span>
    <span data-ty="input">cd ~/roses/&lt;suite-ID&gt;</span>
    <span data-ty="input" directory="~/roses/&lt;suite-ID&gt;">rose suite-gcontrol</span>
    <!-- <span data-ty style="color: red">TO DO --> Add Rose GUI image </span> -->
</div>
</div>

### STOP a suite
<div style="text-align: justify">
Run <code>rose suite-stop -y</code>, from inside the suite directory, to shutdown a suite in a safe manner.
</div>

### RESTART a suite
<div style="text-align: justify">
There are two main ways to restart a suite:
<ul>
    <li>
        'SOFT' restart
        <br>
        Run <code>rose suite-run --restart</code>, from inside the suite directory, to re-install the suite and reopen Cylc in the same state as when it was stopped (you may need to manually trigger failed tasks from the Cylc GUI).
        <br>
        <div class="termynal">
            <span data-ty="input">cylc</span>
            <span data-ty="input">cd ~/roses/&lt;suite-ID&gt;</span>
            <span data-ty="input" directory="~/roses/&lt;suite-ID&gt;">rose suite-run --restart</span>
            <span data-ty data-ty-delay="50">[INFO] export CYLC_VERSION=7.8.3</span>
            <span data-ty data-ty-delay="50">[INFO] export ROSE_ORIG_HOST=accessdev.nci.org.au</span>
            <span data-ty data-ty-delay="50">[INFO] export ROSE_SITE=</span>
            <span data-ty data-ty-delay="50">[INFO] export ROSE_VERSION=2019.01.2</span>
            <span data-ty data-ty-delay="50">[INFO] delete: log/rose-suite-run.conf</span>
            <span data-ty data-ty-delay="50">[INFO] symlink: rose-conf/&lt;timestamp&gt;-restart.conf <= log/rose-suite-run.conf</span>
            <span data-ty data-ty-delay="50">[INFO] delete: log/rose-suite-run.version</span>
            <span data-ty data-ty-delay="50">[INFO] symlink: rose-conf/&lt;timestamp&gt;-restart.version <= log/rose-suite-run.version</span>
            <span data-ty data-ty-delay="50">[INFO] chdir: log/</span>
            <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;._.</span>
            <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;| |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The Cylc Suite Engine [7.8.3]</span>
            <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] ._____._. ._| |_____.&emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;Copyright (C) 2008-2019 NIWA</span>
            <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] | .___| | | | | .___|&emsp;& British Crown (Met Office) & Contributors.</span>
            <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] | !___| !_! | | !___. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</span>
            <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] !_____!___. |_!_____! This program comes with ABSOLUTELY NO WARRANTY;</span>
            <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] &emsp;&emsp;&emsp;&thinsp;.___! | &emsp;&emsp;&emsp;&emsp;&emsp;see `cylc warranty`. &thinsp;It is free software, you</span>
            <span data-ty data-ty-delay="50" style="line-height: 1.3;">[INFO] &emsp;&emsp;&emsp;&thinsp;!_____! &emsp;&emsp;&emsp;&emsp;&emsp;&thinsp;are welcome to redistribute it under certain</span>
            <span data-ty data-ty-delay="50">[INFO]</span>
            <span data-ty data-ty-delay="50">[INFO] *** listening on https://accessdev.nci.org.au:&lt;port&gt;/ ***</span>
            <span data-ty data-ty-delay="50">[INFO]</span>
            <span data-ty data-ty-delay="50">[INFO] To view suite server program contact information:</span>
            <span data-ty data-ty-delay="50">[INFO]  $ cylc get-suite-contact &lt;suite-ID&gt;</span>
            <span data-ty data-ty-delay="50">[INFO]</span>
            <span data-ty data-ty-delay="50">[INFO] Other ways to see if the suite is still running:</span>
            <span data-ty data-ty-delay="50">[INFO]  $ cylc scan -n '&lt;suite-ID&gt;' accessdev.nci.org.au</span>
            <span data-ty data-ty-delay="50">[INFO]  $ cylc ping -v --host=accessdev.nci.org.au &lt;suite-ID&gt;</span>
            <span data-ty data-ty-delay="50">[INFO]  $ ps -opid,args &lt;PID&gt;  # on accessdev.nci.org.au</span>
            <span data-ty style="color: red">TO DO --> Add Rose GUI image </span>
        </div>
    </li>
    <li>
        'HARD' restart
        <br>
        Run <code>rose suite-run --new</code>, from inside the suite directory, if you want to overwrite any previous runs of the suite and begin completely afresh (WARNING!! This will overwrite all existing model output and logs).
    </li>
</ul>
</div>

### RELOAD a suite
<div style="text-align: justify">
In some cases the suite needs to be updated without necessarily having to stop it (e.g. after fixing a typo in a file). Updating an active suite is called a 'reload', where the suite is 're-installed' and Cylc is updated with the changes (this is similar to a 'soft' restart, but with the new changes installed, so you may need to manually trigger failed tasks from the Cylc GUI).
<br>
To reload a suite run <code>rose suite-run --reload</code> from inside the suite directory.
</div>

----------------------------------------------------------------------------------------

## Suite output files

<div style="text-align: justify">
All output files (as well as work files) are available on Gadi under <code>/scratch/$PROJECT/$USER/cylc-run/&lt;suite-ID&gt;</code> (also symlinked in <code>~/cylc-run/&lt;suite-ID&gt;</code>).
<br>
While the suite is running, files move between the <code>share</code> and the <code>work</code> directories.
<br>
At the end of each cycle, model output data and restart files are moved to <code>/scratch/$PROJECT/$USER/archive/&lt;suite-name&gt;</code>. 
<br>
This directory contains 2 subdirectories:
<ul>
    <li>
        <code>history</code>
        <br>
        This is the directory where the model output data is found, separated for each model component: 
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
        <br>
        <div class="termynal">
            <span data-ty="input">cd /scratch/&lt;$PROJECT&gt;/&lt;USER&gt;/archive</span>
            <span data-ty="input" directory="/scratch/&lt;$PROJECT&gt;/&lt;USER&gt;/archive">ls</span>
            <span data-ty class="double-spaced directory-text">br565 &lt;suite-name&gt; &lt;other-suite-name&gt;</span>
            <span data-ty="input" directory="/scratch/&lt;$PROJECT&gt;/&lt;USER&gt;/archive">cd br565</span>
            <span data-ty="input" directory="/scratch/&lt;$PROJECT&gt;/&lt;USER&gt;/archive/br565">ls</span>
            <span data-ty class="double-spaced directory-text">history restart</span>
            <span data-ty="input" directory="/scratch/&lt;$PROJECT&gt;/&lt;USER&gt;/archive/br565">ls history/atm</span>
            <span data-ty class="double-spaced">br565a.pd0950apr.nc br565a.pd0950aug.nc br565a.pd0950dec.nc br565a.pd0950feb.nc br565a.pd0950jan.nc br565a.pd0950jul.nc br565a.pd0950jun.nc br565a.pd0950mar.nc br565a.pd0950may.nc br565a.pd0950nov.nc br565a.pd0950oct.nc br565a.pd0950sep.nc br565a.pd0951apr.nc br565a.pd0951aug.nc br565a.pd0951dec.nc br565a.pm0950apr.nc br565a.pm0950aug.nc br565a.pm0950dec.nc br565a.pm0950feb.nc br565a.pm0950jan.nc br565a.pm0950jul.nc br565a.pm0950jun.nc br565a.pm0950mar.nc br565a.pm0950may.nc br565a.pm0950nov.nc br565a.pm0950oct.nc br565a.pm0950sep.nc br565a.pm0951apr.nc br565a.pm0951aug.nc br565a.pm0951dec.nc <span class="directory-text">netCDF</span></span>
        </div>
        <!-- <br>
        For more details on how to control different output variables (STASH), and output streams, check <a href="../rose_gui_user_guide" target="_blank">Rose GUI user guide (TO CHECK)</a>. -->
    </li>
    <li>
        <code>restart</code>
        <br>
        This is the directory where the restart dumps are found, subdivided for each model component (see <code>history</code> folder above).
        <br>
        For the atmospheric restart files, each of them is a <a href = "https://code.metoffice.gov.uk/doc/um/latest/papers/umdp_F03.pdf" target="_blank">UM fieldsfile</a>, formatted as <code>&lt;suite-name&gt;a.da&lt;year&gt;&lt;month&gt;&lt;day&gt;_00</code>.
        <br>
        In the directory there are also some files formatted as <code>&lt;suite-name&gt;a.xhist-&lt;year&gt;&lt;month&gt;&lt;day&gt;</code> containing metadata information.
        <!-- <br>
        For more details on how to control the frequency and formatting of restart dumps, check <a href="../rose_gui_user_guide" target="_blank">Rose GUI user guide (TO CHECK)</a>. -->
        <br>
        In the case of the <code>u-br565</code> suite we will have:
        <br>
        <div class="termynal">
            <span data-ty="input">ls /scratch/&lt;$PROJECT&gt;/&lt;USER&gt;/archive/br565/restart/atm</span>
            <span data-ty class="double-spaced">br565a.da09500201_00 br565a.da09510101_00 br565.xhist-09500131 br565.xhist-09501231 </span>
        </div>
    </li>
</ul>

</div>

<!-- References -->
<br>
<h6>References</h6>
<ul style="font-size:0.8em;">
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