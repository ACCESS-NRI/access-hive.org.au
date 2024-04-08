# METplus on Gadi

<i><a href="https://dtcenter.org/community-code/metplus" target="_blank">METplus</a></i> is the enhanced Model Evaluation Tools verification framework that spans a wide range of temporal (warn-on-forecast to climate) and spatial (storm to global) scales. 
<br>
<br>
The core components of the framework include the <a href="https://met.readthedocs.io/en/latest/" target="_blank">Model Evaluation Tools (MET)</a>, the associated database and display systems (<i>METviewer</i> and <i>METexpress</i>), and a suite of Python wrappers to provide low-level automation and examples. 

???+ warning "Support Level: Supported on <i>Gadi</i>, but not owned by ACCESS-NRI"
    <!-- Who develped the tool? -->
     <!-- METplus was developed by the Developmental Testbed Center (DTC) and is being actively developed by NCAR/Research Applications Laboratory (RAL), NOAA/Earth Systems Research Laboratories (ESRL), NOAA/Environmental Modeling Center (EMC), and is open to community contributions. -->
    <!-- Code ownership and support -->
    While ACCESS-NRI does not own the code, it actively supports the use of the <i>METplus</i> on <i>Gadi</i>. 
    ACCESS-NRI provides access to the latest version of <i>METplus</i> via the `access` conda environment for Model Evaluation on Gadi.

For more information and tutorials, refer to the official <a href="https://metplus.readthedocs.io/en/latest/index.html" target="_blank">METplus documentation</a>
<!-- <div class="card-container">
     <a href="https://metplus.readthedocs.io/en/latest/index.html" class="vertical-card aspect-ratio2to1">
         <div class="card-image-container">
             <img src="../../../assets/model_evaluation/METplus_logo.png" alt="METplus documentation" class="img-contain white-background"></img>
         </div>
         <div class="card-text-container bold">Documentation</div>
     </a>
 </div> -->


## Using METplus on Gadi

Load the `metplus` module as part of NCI project `access` to have all the commands and `run_metplus.py` through `$PATH` on <i>Gadi</i>, run the following:
```
module use /g/data/access/ngm/modules
module load envs/metplus/5.0
```
<br>
Then run through the following steps:
<br>
<br>
1. Sample data can be downloaded from <a href="https://dtcenter.ucar.edu/dfiles/code/METplus/METplus_Data/v5.0/sample_data-met_tool_wrapper-5.0.tgz" target="_blank">https://dtcenter.ucar.edu/dfiles/code/METplus/METplus_Data/v5.0/sample_data-met_tool_wrapper-5.0.tgz</a> 
<br> 
You then need to `untar` the data in a directory on <i>Gadi</i>. 
<br>
For example, `~/METplus` directory.
<br>
<br>
2. Create a configuration file `local.conf` containing the input and output paths, where for example `INPUT_BASE=~/METplus`:
```
[dir]
INPUT_BASE=/path/to/metplus_inputs
OUTPUT_BASE=/path/to/outputs
```
<br>
3. Save the demo configuration (e.g., `ASCII2NC.conf`) from this <a href="https://metplus.readthedocs.io/en/latest/generated/met_tool_wrapper/ASCII2NC/ASCII2NC.html#sphx-glr-generated-met-tool-wrapper-ascii2nc-ascii2nc-py" target="_blank">METPlus example</a> to a local file.
<br>
<br>
4. Run <i>METplus</i>, passing it both the `local.conf` file and demo configuration, as follows:
```
run_metplus.py local.conf ASCII2NC.conf
```
