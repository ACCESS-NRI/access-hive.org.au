{% set model = "ACCESS-ESM" %}
[PBS job]: https://opus.nci.org.au/display/Help/4.+PBS+Jobs

# Run {{ model }}

## Prerequisites

### General prerequisites

Before running {{ model }}, you need to fulfil general prerequisites outlined in the [First Steps](/getting_started/first_steps) section.

If you are unsure whether {{ model }} is the right choice for your experiment, take a look at the overview of [ACCESS Models](/models).

### Model-specific prerequisites

{{ model }} is installed on NCI's supercomputer _Gadi_ and uses [_payu_](#payu), a tool for running and managing model experiments. Following these prerequisites ensures you have access to this infrastructure.

- **Join the _access_ and _hh5_ projects at NCI**<br>
    To join these projects, request membership on the respective [access](https://my.nci.org.au/mancini/project/access/join) and [hh5](https://my.nci.org.au/mancini/project/hh5/join) NCI project pages.<br>
    For more information on joining specific NCI projects, refer to [How to connect to a project](https://opus.nci.org.au/display/Help/How+to+connect+to+a+project).
- **Payu**<br>
    _Payu_ on _Gadi_ is available through the `conda/analysis3` environment in the _hh5_ project.<br>
    After obtaining _hh5_ project membership, load the `conda/analysis3` environment to automatically retrieve _payu_ as follows:
    ```
    module use /g/data/hh5/public/modules
    module load conda/analysis3
    ```
    To check that _payu_ is available, run:
    ```
    payu --version
    ```
    <terminal-window>
        <terminal-line data="input">payu --version</terminal-line>
        <terminal-line lineDelay="1000">1.0.19</terminal-line>
    </terminal-window>

## Get {{ model }} configuration

{{ model }} configurations are available in the [coecms GitHub](https://github.com/coecms/access-esm) repository.<br>
To get it on _Gadi_, clone the {{ model }} GitHub repository by running:
```
git clone https://github.com/coecms/access-esm.git
```
This will create the `access-esm` folder.
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

!!! warning
    Some modules may interfere with `git` commands (e.g., matlab/R2018a). If you have trouble cloning the repository, run the following command before trying again: 
    ```
    module purge
    ```
    After this step, don't forget to reload the `conda/analysis3` module to retrieve _payu_, as specified in the [Model-specific prerequisites](#model-specific-prerequisites) section.

Each {{ model }} configuration is stored as a specially-named branch in the {{ model }} GitHub repository.
To check all the available branches on the repo, run the following command inside the newly-created `access-esm` folder:
```
git branch -a
```
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

The green-coloured branch (preceded by a star sign `*`) indicates the local branch you are currently in.<br>
The red-coloured branches are the available remote branches, formatted as `remotes/origin/<branch-name>`.<br>
To switch to a specific branch you can run the following command: 
```
git checkout <branch-name>
```
For example, the pre-industrial configuration of {{ model }} is available in the `pre-industrial` branch. To use the pre-industrial configuration, run:
```
git checkout pre-industrial
```
<terminal-window>
    <terminal-line data="input">git checkout pre-industrial</terminal-line>
    <terminal-line>branch 'pre-industrial' set up to track 'origin/pre-industrial'.</terminal-line>
    <terminal-line>Switched to a new branch 'pre-industrial'</terminal-line>
    <terminal-line data="input">git branch</terminal-line>
    <terminal-line>&emsp; main</terminal-line>
    <terminal-line>&#1645;&emsp;<span class="green_prompt_output">pre-industrial</span></terminal-line>
</terminal-window>

## Edit {{ model }} configuration

It is good practice to create a new git branch to store all your modifications for a particular run, so as not to modify the reference configuration.

To create a new branch called _example_run_, as a copy of the `pre-industrial` branch, from within the `access-esm` directory execute:
```
git checkout -b example_run --no-track origin/pre-industrial
```

This command will also switch to the new `example_run` branch.
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

[_Payu_](https://payu.readthedocs.io/en/latest) is a workflow management tool for running numerical models in supercomputing environments.<br>
The general layout of a _payu_-supported model run consists of two main directories:

- The **laboratory** directory, where all the model components reside. For {{ model }}, it is typically `/scratch/$PROJECT/$USER/access-esm`.
- The **control** directory, where the model configuration resides and from where the model is run (in this example, the cloned directory `~/access-esm`).

This distinction of directories separates the small-size configuration files from the larger binary outputs and inputs. In this way, the configuration files can be placed in the `$HOME` directory (as it is the only filesystem actively backed-up on _Gadi_), without overloading it with too much data.
Furthermore, this separation allows multiple self-resubmitting experiments that share common executables and input data to be run simultaneously.

To set up the _laboratory_ directory, run the following command from within the _control_ directory:
```
payu init
```
This creates the _laboratory_ directory, together with relevant subdirectories, depending on the configuration. The main subdirectories of interest are: 

- `work` &rarr; a temporary directory where the model is run. It gets cleaned after each run.
- `archive` &rarr; the directory where output is stored after each run.
    
<terminal-window>
    <terminal-line data="input">cd ~/access-esm/esm-pre-industrial</terminal-line>
    <terminal-line data="input" directory="~/access-esm">payu init</terminal-line>
    <terminal-line>laboratory path:  /scratch/$PROJECT/$USER/access-esm</terminal-line>
    <terminal-line>binary path:  /scratch/$PROJECT/$USER/access-esm/bin</terminal-line>
    <terminal-line>input path:  /scratch/$PROJECT/$USER/access-esm/input</terminal-line>
    <terminal-line>work path:  /scratch/$PROJECT/$USER/access-esm/work</terminal-line>
    <terminal-line>archive path:  /scratch/$PROJECT/$USER/access-esm/archive</terminal-line>
</terminal-window>

### Edit the _Master Configuration_ file

The `config.yaml` file located in the _control_ directory, is the _Master Configuration_ file.<br>
This file, which controls the general model configuration, contains several parts:

- **PBS resources**{: id="pbs-resources"}<br>
    ```yaml
    jobname: pre-industrial
    queue: normal
    walltime: 3:10:00
    ```
    These lines can be edited to change the [PBS directives](https://opus.nci.org.au/display/Help/PBS+Directives+Explained) for the [PBS job].<br>
    For example, to run {{ model }} under the `tm70` project (ACCESS-NRI), add the following line:
    ```
    project: tm70
    ```

    !!! warning
        The `project` entry should always refer to a project with allocated _Service Units (SU)_, that you are a member of. If not set explicitly, {{ model }} will run using your [default project](/getting_started/first_steps#change-default-project-on-gadi) (this default project still needs to have allocated SU). For more information, check [how to join relevant NCI projects](/getting_started/first_steps#join-relevant-nci-projects).

- **Link to the laboratory directory**<br>
    ```yaml
    # note: if laboratory is relative path, it is relative to /scratch/$PROJECT/$USER
    laboratory: access-esm
    ```
    These lines set the laboratory directory path, which is relative to `/scratch/$PROJECT/$USER`. Absolute paths can also be specified.

- **Model**<br>
    ```yaml
    model: access
    ```
    This line tells _payu_ which driver to use for the main model (`access` refers to {{ model }}).
    
- **Submodels**<br>

    ??? code "Expand to show the full `submodels` section"
        ```yaml
        submodels:
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
              - /g/data/access/payu/access-esm/input/pre-industrial/coupler
        ```
    
    {{ model }} is a coupled model deploying multiple submodels (i.e. [model components](/models/configurations/access-esm/#model-components)).
    This section specifies the submodels and configuration options required to execute the model correctly.<br>
    Each submodel contains additional configuration options that are read in when the submodel is running. These options are specified in the subfolder of the _control_ directory, whose name matches the submodel's `name` (e.g., configuration options for the `atmosphere` submodel are in the `~/access-esm/esm-pre-industrial/atmosphere` directory).

- **Collate**<br>
    ```yaml
    collate:
        exe: /g/data/access/payu/access-esm/bin/mppnccombine
        restart: true
        mem: 4GB
    ```
    The `collate` process combines a number of smaller files, which contain different parts of the model grid, into target output files. Restart files are typically tiled in the same way and will also be combined together if the `restart` option is set to `true`.

- **Restart**<br>
    ```yaml
    restart: /g/data/access/payu/access-esm/restart/pre-industrial
    ```
    This is the location of the files used for a warm restart.
    
- **Start date and run length**{: id="runtime"}<br>
    ```yaml
    calendar:
        start:
            year: 101
            month: 1
            days: 1
        runtime:
            years: 1
            months: 0
            days: 0
    ```
    This section specifies the start date and run length.
    
    !!! warning
        The _run length_ (controlled by [`runtime`](#runtime)) can be different from the _total experiment length_. Also, while `runtime` can be reduced, it should not be increased to more than 1 year to avoid errors. For more information about the difference between _run length_ and _total experiment length_, or how to run the model for more than 1 year, refer to the section [Run configuration for multiple years](#run-configuration-for-multiple-years).

- **Number of runs per PBS submission**{: id="runspersub"}<br>
    ```yaml
    runspersub: 1
    ```
    {{ model }} configurations are often run in multiple steps (or cycles), with _payu_ running a maximum of `runspersub` runs for every [PBS job] submission.
    
    !!! warning
        If you increase `runspersub`, you may need to increase the `walltime` in the [PBS resources](#pbs-resources).

To find out more about other configuration settings for the `config.yaml` file, check out [how to configure your experiment with _payu_](https://payu.readthedocs.io/en/latest/config.html).

### Edit a single {{ model }} component configuration

Each of [{{ model }} components](/models/configurations/access-esm/#model-components) contains additional configuration options that are read in when the model component is running.<br>
These options are typically useful to modify the physics used in the model, the input data, or the model variables saved in the output files.

These configuration options are specified in files located inside a subfolder of the _control_ directory, named according to the submodel's `name` specified in the `config.yaml` `submodels` section (e.g., configuration options for the `atmosphere` submodel are in the `~/access-esm/esm-pre-industrial/atmosphere` directory).<br>
To modify these options please refer to the User Guide of the respective model component.

## Run {{ model }} configuration

After editing the configuration, you are ready to run {{ model }}.<br>
{{ model }} suites run on [_Gadi_](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview) through a [PBS job] submission managed by _payu_.

### Payu setup (optional)

As a first step, from within the _control_ directory, it is good practice to run:
```
payu setup
```

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

!!! tip 
    This step can be skipped as it is also included in the run command. However, running it explicitly helps to check for errors and make sure executable and restart directories are accessible.

### Run configuration

To run {{ model }} configuration for one _run length_ (controlled by [`runtime`](#runtime) in the `config.yaml` file), from within the _control_ directory execute:

```
payu run -f
```

This will submit a single job to the queue with a _total experiment length_ of `runtime`. If there is no previous run, it will start from the [`start`](#runtime) date indicated in the `config.yaml` file. Otherwise, it will perform a warm restart from a previously saved restart file.<br>

!!! tip
    The `-f` option ensures that _payu_ will run even if there is an existing non-empty `work` directory created from a previous failed run.

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

If you want to run {{ model }} configuration for multiple _run lengths_ (controlled by [`runtime`](#runtime) in the `config.yaml` file), use the option `-n`:

```
payu run -f -n <number-of-runs>
```

This will run the configuration `number-of-runs` times with a _total experiment length_ of `runtime * number-of-runs`. The number of consecutive [PBS jobs][PBS job] submitted to the queue depends on the [`runspersub`](#runspersub) value specified in the config.yaml file.

### Understand `runtime`, `runspersub`, and `-n` parameters

With the correct use of [`runtime`](#runtime), [`runspersub`](#runspersub) and `-n` parameters, you can have full control of your run.<br>

- `runtime` defines the _run length_.
- `runspersub` defines the maximum number of runs for every [PBS job] submission.
- `-n` sets the number of runs to be performed.

Now some practical examples:

- **Run 20 years of simulation with resubmission every 5 years**<br>
    To have a _total experiment length_ of 20 years with a 5-year resubmission cycle, leave [`runtime`](#runtime) as the default value of `1 year` and set [`runspersub`](#runspersub) to `5`. Then, run the configuration with `-n` set to `20`:
    ```
    payu run-f -n 20
    ```
    This will submit subsequent jobs for the following years: 1 to 5, 6 to 10, 11 to 15, and 16 to 20, which is a total of 4 PBS jobs.

- **Run 7 years of simulation with resubmission every 3 years**<br>
    To have a _total experiment length_ of 7 years with a 3-year resubmission cycle, leave [`runtime`](#runtime) as the default value of `1 year` and set [`runspersub`](#runspersub) to `3`. Then, run the configuration with `-n` set to `7`:
    ```
    payu run -f -n 7
    ```
    This will submit subsequent jobs for the following years: 1 to 3, 4 to 6, and 7, which is a total of 3 PBS jobs.
    
- **Run 3 months and 10 days of simulation in a single submission**<br>
    To have a _total experiment length_ of 3 months and 10 days in a single submission, set the [`runtime`](#runtime) as follows:
    ```yaml
    years: 0
    months: 3
    days: 10
    ```
    Set [`runspersub`](#runspersub) to `1` (or any value > 1) and run the configuration without `-n` option (or with `-n` set to `1`):
    ```
    payu run -f
    ```
    
- **Run 1 year and 4 months of simulation with resubmission every 4 months**<br>
    To have a _total experiment length_ of 1 year and 4 months (16 months), you need to split it into multiple runs. For example, 4 runs of 4 months each. In this case, set the [`runtime`](#runtime) as follows:
    ```yaml
    years: 0
    months: 4
    days: 0
    ```
    Since the _run length_ is set to 4 months, set [`runspersub`](#runspersub) to `1` to resubmit your jobs every 4 months (i.e. every run). Then, run the configuration with `-n` set to `4`:
    ```
    payu run -f -n 4
    ```

## Monitor {{ model }} runs

You can execute the following command to show the status of all your submitted [PBS jobs][PBS job]:

```
qstat -u $USER
```
<terminal-window>
    <terminal-line data="input">qstat -u $USER</terminal-line>
    <terminal-line linedelay=500>Job id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Use&nbsp;S Queue</terminal-line>
    <terminal-line linedelay=0>---------------------  ---------------- ----------------  -------- - -----</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pre-industrial&nbsp;&nbsp;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID-2&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
    <terminal-line linedelay=0>&lt;job-ID-3&gt;.gadi-pbs&nbsp;&nbsp;&nbsp;&lt;other-job-name&gt;&nbsp;&lt;$USER&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;time&gt;&nbsp;R&nbsp;normal-exec</terminal-line>
</terminal-window>

If you changed the `jobname` in the [PBS resources](#pbs-resources) of the _Master Configuration_ file, that will appear as your job's _Name_ instead of `pre-industrial`.<br>

_S_ indicates the status of your run, where:

- _Q_ &rarr; Job waiting in the queue to start
- _R_ &rarr; Job running
- _E_ &rarr; Job ending
- _H_ &rarr; Job on hold

If there are no jobs listed with your `jobname` (or if no job is listed), your run either successfully completed or was terminated due to an error.<br>
For more information, check [NCI documentation](https://opus.nci.org.au/display/Help/FAQ+1%3A+Why+My+Jobs+are+NOT+Running).

### Stop a run

If you want to manually terminate a run, you can do so by executing:
```
qdel <job-ID>
```

### Error and output log files

While the model is running, _payu_ saves the standard output and standard error in the respective `access.out` and `access.err` files in the _control_ directory. You can examine the contents of these files to check on the status of a run as it progresses.<br>
When the model completes its run, or if it crashes, the output and error log files are by default renamed as `jobname.o<job-ID>` and `jobname.e<job-ID>`, respectively.

### Model Live Diagnostics

ACCESS-NRI developed the [Model Live Diagnostics](/model_evaluation/model_diagnostics) framework to check, monitor, visualise, and evaluate model behaviour and progress of ACCESS models currently running on _Gadi_.<br>
For a complete documentation on how to use this framework, check the [Model Diagnostics documentation](https://med-live-diagnostics.readthedocs.io/en/latest/index.html).

## {{ model }} outputs

At the end of the model run, output files (and restart files) are moved from the `work` directory into the `archive` directory under `/scratch/$PROJECT/$USER/access-esm/archive/access-esm`, where they are further subdivided for each run. They are also symlinked in the _control_ directory to `~/access-esm/archive`.<br>
The naming format for a typical output folder is `outputXXX` and for a restart folder `restartXXX`, where _XXX_ is the run number starting from `000`.

!!! tip
    A run with a different {{ model }} configuration (different git branch) counts as a new run.<br>
    Thus, if output folders already exist, the internal number of the new output folder will be set to the first available _XXX_ number.

Outputs and restarts are separated in the respective folders for each model component.<br>
For the atmospheric output data, the files are usually [UM fieldsfile](https://code.metoffice.gov.uk/doc/um/latest/papers/umdp_F03.pdf), formatted as `<UM-suite-identifier>a.p<output-stream-identifier><time-identifier>`.
<terminal-window>
    <terminal-line data="input">cd /scratch/$PROJECT/$USER/access-esm/archive/esm-pre-industrial</terminal-line>
    <terminal-line data="input" directory="/scratch/$PROJECT/$USER/access-esm/archive/esm-pre-industrial">ls</terminal-line>
    <terminal-line class="ls-output-format">output000 pbs_logs restart000</terminal-line>
    <terminal-line data="input" directory="/scratch/$PROJECT/$USER/access-esm/archive/esm-pre-industrial">ls output000/atmosphere</terminal-line>
    <terminal-line class="ls-output-format">aiihca.daa1210 aiihca.daa1810 aiihca.paa1apr aiihca.paa1jun aiihca.pea1apr aiihca.pea1jun aiihca.pga1apr aiihca.pga1jun atm.fort6.pe0 exstat ihist prefix.CNTLGEN UAFLDS_A aiihca.daa1310  aiihca.daa1910  aiihca.paa1aug aiihca.paa1mar aiihca.pea1aug aiihca.pea1mar aiihca.pga1aug aiihca.pga1mar cable.nml fort.57 INITHIS prefix.PRESM_A um_env.py aiihca.daa1410 aiihca.daa1a10 aiihca.paa1dec aiihca.paa1may aiihca.pea1dec aiihca.pea1may aiihca.pga1dec aiihca.pga1may CNTLALL ftxx input_atm.nml SIZES xhist aiihca.daa1510 aiihca.daa1b10 aiihca.paa1feb aiihca.paa1nov aiihca.pea1feb aiihca.pea1nov aiihca.pga1feb aiihca.pga1nov CONTCNTL ftxx.new namelists STASHC aiihca.daa1610 aiihca.daa1c10 aiihca.paa1jan aiihca.paa1oct aiihca.pea1jan aiihca.pea1oct aiihca.pga1jan aiihca.pga1oct debug.root.01 ftxx.vars nout.000000 thist aiihca.daa1710 aiihca.daa2110 aiihca.paa1jul aiihca.paa1sep aiihca.pea1jul aiihca.pea1sep aiihca.pga1jul aiihca.pga1sep errflag hnlist prefix.CNTLATM UAFILES_A</terminal-line>
</terminal-window>

<custom-references>
- [https://github.com/coecms/esm-pre-industrial](https://github.com/coecms/esm-pre-industrial)
- [https://payu.readthedocs.io/en/latest/usage.html](https://payu.readthedocs.io/en/latest/usage.html)
</custom-references>
