# Australian Research Environment (ARE)

<a href="https://are-auth.nci.org.au/" target="_blank">ARE</a> is a web-based graphical interface for performing your computational research, provided by <a href="https://nci.org.au/" target="_blank">NCI</a>.
<br>
ARE can give you access to NCI’s <i>Gadi</i> supercomputer and data collections.

There are multiple applications included in ARE, but the two most used for ACCESS-related activities are <a href="#vdi">Virtual Desktop (VDI)</a> and <a href="#jupyterlab">JupyterLab</a>.

## Prerequisites
To use ARE, you must have an NCI account and be a member of a project with computing resources (SU). If you are new to ACCESS, follow the <a href="/getting_started/first_steps">First Steps</a>.
## Start an ARE session
<!-- Tab labels -->
<div class="tabLabels" label="are-apps" style="margin-bottom: 0.5rem;">
    <button id="vdi">Virtual Desktop (VDI)</i></button>
    <button id="jupyterlab"><i>JupyterLab</i></button>
</div>
<!-- Tab contents -->
<div class="tabContents" label="are-apps">
    <!-- VDI -->
    <div>
        To start an ARE VDI session go to the <a href="https://are.nci.org.au/pun/sys/dashboard/batch_connect/sys/desktop_vnc/ncigadi/session_contexts/new" target="_blank">ARE VDI Desktop</a> page.
    </div>
    <!-- Jupyterlab -->
    <div>
        To start an ARE JupyterLab session go to the <a href="https://are.nci.org.au/pun/sys/dashboard/batch_connect/sys/jupyter/ncigadi/session_contexts/new" target="_blank">ARE JupyterLab</a> page.
    </div>
</div>
<!-- End of tab contents -->

### Session options
Launching an ARE session is similar to submitting an interactive <a href="https://opus.nci.org.au/display/Help/4.+PBS+Jobs" target="_blank">PBS job</a> that enables you to connect to a <i>Gadi</i> computing node.
<br>
Therefore, there are multiple <a href="https://opus.nci.org.au/display/Help/PBS+Directives+Explained" target="_blank">PBS directives</a> and other options you can select:
<ul>
    <li>
        <b id="walltime-option">Walltime (hours)</b>
        <br>
        Number of hours your VDI session will run for (unless manually ended earlier).
        <br>
        The maximum number of hours an ARE session can run for depends on the selected Queue. For more information, check <a href="https://opus.nci.org.au/display/Help/Queue+Limits" target="_blank">Gadi Queue Limits</a>.
        <div class="note">
            Once the session ends any operation still in progress on the session's computing node(s) will be immediately terminated.
        </div>
    </li>
    <li>
        <b>Queue</b>
        <br>
        Gadi queue that your session will be scheduled in. For more information check <a href="https://opus.nci.org.au/display/Help/Queue+Structure" target="_blank">Gadi Queue Structure</a>.
    </li>
    <li>
        <b>Compute Size</b>
        <br>
        Amount of resources (CPUs, Memory, etc.) available to your session.
        <br>
        You can either choose a pre-configured option, or select a custom one (e.g., <i>cpus=6 mem=40G</i>).
    </li>
    <li>
        <b>Project</b>
        <br>
        The NCI project the ARE session will be charged to.
        <br>
        You must be a member of the specified project.
        <div class="note">
            The specified project must have allocated <i>Service Units</i> (SU).
            <br>
            For more information, check <a href="/getting_started/first_steps#join-relevant-nci-projects">how to join relevant NCI projects</a>.
        </div>
    </li>
    <li>
        <b id="storage-option">Storage</b>
        <br>
        <code>/g/data</code> (inserted as <i>gdata/&lt;project-ID&gt;</i>) and <code>/scratch</code> (inserted as <i>scratch/&lt;project-ID&gt;</i>) data storage projects that will be available to the session.
        <br>
        In ARE, data storage locations need to be explicitly defined. This means that you need to insert any <code>/g/data</code> and <code>/scratch</code> project folders you want to execute data I/O operations from.
        <br>
        Multiple storage projects are separated by a plus (<i>+</i>) (e.g., <i>gdata/tm70+gdata/hh5+scratch/xp65</i>).
        <div class="note">
            Generally, you need to be a member of the specified projects to access their storage data.
            <br>
            If you try to access data from a project folder not included in the session's storage, you will get an error similar to the following:
            <br>
            <code>&lt;cmd&gt;: cannot access '&lt;/path/to/file&gt;': No such file or directory</code>
        </div>
    </li>
    <li>
        <b>Software</b>
        <br>
        Software licenses that are requested for your ARE session. Leave blank if no license needed.
        <br>
        Multiple licenses are separated by a colon (<i>:</i>).
    </li>
    <h4>Advanced options</h4>
    <!-- Tab contents -->
    <div class="tabContents" label="are-apps">
        <!-- VDI -->
        <div>
        </div>
        <!-- Jupyterlab -->
        <div>
            <li>
                <b>Extra arguments</b>
                <br>
                Additional arguments to pass on the JupyterLab command line (e.g., <i>--debug</i>, <i>--log-level=INFO</i>)
            </li>
            <li>
                <b id="module-directories-option">Module directories</b>
                <br>
                Include module directories.
                <br>
                It is the eqivalent of <code>module use &lt;/path/to/module/directory&gt;</code> run on the command line.
                <div class="note">
                    You also need to include the project directory of each module directory in the <a href="#storage-option"><i>Storage</i></a> option.
                </div>
            </li>
            <li>
                <b>Modules</b>
                <br>
                Include modules.
                It is the equivalent of <code>module load &lt;module-name&gt;</code> run on the command line.
                <div class="note">
                    If the module is not inside <i>Gadi</i>'s default module directory <code>/apps/Modules/modulefiles</code>, you need to include the module directory in the <a href="#module-directories-option"><i>Module directories</i></a> option.
                </div>
            </li>
            <li>
                <b id="venv-base-option">Python or Conda virtual environment base</b>
                <br>
                Path to a Python or conda base environment to be activated for the JupyterLab session.
                <br>
                It is the equivalent of <code>source &lt;path/to/environment/bin/activate&gt;</code> run on the command line.
                <div class="note">
                    You also need to include the project directory of the virtual environment in the <a href="#storage-option"><i>Storage</i></a> option.
                </div>
            </li>
            <li>
                <b>Conda environment</b>
                <br>
                Name of a specific conda environment to be activated for the JupyterLab session.
                <br>
                It is the equivalent of <code>conda activate &lt;environment-name&gt;</code> run on the command line.
                <div class="note">
                    You need to include the path to the conda base environment in the <a href="#venv-base-option"><i>Python or Conda virtual environment base</i></a> option.
                </div>
            </li>
        </div>
    </div>
    <!-- End of tab contents -->
    <li>
        <b>Environment variables</b>
        <br>
        Environment variables passed to the session. Identical to the <a href="https://opus.nci.org.au/display/Help/PBS+Directives+Explained#PBSDirectivesExplained--v%3Cvar=10,%22var2='A,B'%22%3E" target="_blank"><code>-v</code> PBS directive</a>.
        <br>
        Multiple environment variables are separated by a comma (<i>,</i>).
    </li>
    <li>
        <b>Jobfs size</b>
        <br>
        The maximum amount of local disk available to the session.
        <br>
        If missing, it is automatically set to 100MB.
    </li>
    <li>
        <b>PBS flags</b>
        <br>
        Extra <a href="https://opus.nci.org.au/display/Help/PBS+Directives+Explained" target="_blank">PBS directives</a> to be used for the ARE job submission.
    </li>
    <li>
        <b>Pre-script</b>
        <br>
        A script or executable that will be run just before starting the ARE session.
    </li>
</ul>

### Launch the session
<ol>
    <li>
        Click on the <i>Launch</i> button to launch the session.
        You will be prompted to your Interactive Sessions page and you will see your last requested session at the top.
    </li>
    <li>
        <!-- Tab contents -->
        <div class="tabContents" label="are-apps">
            <!-- VDI -->
            <div>
                Wait until your session starts and then click on the <i>Launch VDI Desktop</i> button to open a new tab with the VDI interface.
                <br>
                Inside the VDI interface, you can open the terminal by clicking on the black terminal icon at the top of the window.
            </div>
            <!-- Jupyterlab -->
            <div>
                Wait until your session starts and then click on the <i>Open JupyterLab</i> button to open a new tab with the JupyterLab interface.
                <br>
                Inside the JupyterLab interface, you can open a new notebook by clicking on the Python3 Notebook button in the Launcher panel (to open a new Laucher panel, click on the plus button <img src="/assets/jupyterlab_plus_button.png" alt="Plus button" style="height:1em"/> next to your current tab).
            </div>
        </div>
        <!-- End of tab contents -->
    </li>
    <div class="tabContents" label="are-apps">
        <!-- VDI -->
        <div>
            <img src="/assets/launch_are_vdi_desktop.gif" alt="Launch ARE VDI Desktop" class="example-img" loading="lazy"/>
        </div>
        <!-- JupyterLab -->
        <div>
            <img src="/assets/launch_are_jupyterlab.gif" alt="Launch ARE JupyterLab" class="example-img" loading="lazy"/>
        </div>
    </div>
</ol>

## Delete an ARE session
You can delete a session before its automatic expiration (based on the specified <a href="#walltime-option">Walltime</a>) by clicking on the session's <i>Delete</i> button <img src="/assets/session_delete_button.png" alt="Session Delete button" style="height:1em"/> in the <a href="https://are.nci.org.au/pun/sys/dashboard/batch_connect/sessions" target="blank">Interactive Sessions</a> page.

<br>
<h6>References</h6>
<ul class="references">
    <li>
        <a href = "https://opus.nci.org.au/display/Help/ARE+User+Guide" target="_blank">https://opus.nci.org.au/display/Help/ARE+User+Guide</a>
    </li>
    <li>
        <a href = "https://are.nci.org.au/pun/sys/dashboard/batch_connect/sys/desktop_vnc/ncigadi/session_contexts/new" target="_blank">https://are.nci.org.au/pun/sys/dashboard/batch_connect/sys/desktop_vnc/ncigadi/session_contexts/new</a>
    </li>
    <li>
        <a href = "https://are.nci.org.au/pun/sys/dashboard/batch_connect/sys/jupyter/ncigadi/session_contexts/new" target="_blank">https://are.nci.org.au/pun/sys/dashboard/batch_connect/sys/jupyter/ncigadi/session_contexts/new</a>
    </li>
</ul>