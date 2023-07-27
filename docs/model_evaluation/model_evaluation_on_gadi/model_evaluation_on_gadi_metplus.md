# `METplus` on Gadi at NCI

[METplus](https://dtcenter.org/community-code/metplus) is the enhanced Model Evaluation Tools (METplus) verification system. 

???+ int "ACCESS-NRI is actively supporting METplus on Gadi"

For detailed information, tutorials and more of [METplus](https://metplus.readthedocs.io/en/latest/index.html), please go to the
 <div class="card-container">
     <a href="https://metplus.readthedocs.io/en/latest/index.html" class="aspect1to2-card default-text-color">
         <div class="squared-card-image-container">
             <img src="../../../assets/model_evaluation/METplus_logo.png" alt="METplus documentation"></img>
         </div>
         <div class="squared-card-text-container bold">Documentation</div>
     </a>
 </div>

## What is METplus?

[METplus](https://dtcenter.org/community-code/metplus) is a verification framework that spans a wide range of temporal (warn-on-forecast to climate) and spatial (storm to global) scales. It is intended to be extensible through additional capability developed by the community The core components of the framework include the [Model Evaluation Tools (MET)](https://met.readthedocs.io/en/latest/), the associated database and display systems called METviewer and METexpress, and a suite of Python wrappers to provide low-level automation and examples, also called use-cases. METplus will be a component of NOAA's Unified Forecast System (UFS) cross-cutting infrastructure as well as NCAR's System for Integrated Modeling of the Atmosphere (SIMA). METplus was developed by the Developmental Testbed Center (DTC) and is being actively developed by NCAR/Research Applications Laboratory (RAL), NOAA/Earth Systems Research Laboratories (ESRL), NOAA/Environmental Modeling Center (EMC), and is open to community contributions.

## Showcase of METplus 5.0

To load all METplus, and have all commands and run_metplus.py available through `$PATH` on Gadi, load the METplus module as part of NCI project `access`:
```
module use /g/data/access/ngm/modules
module load envs/metplus/5.0
```

1. Download the sample data from [https://dtcenter.ucar.edu/dfiles/code/METplus/METplus_Data/v5.0/sample_data-met_tool_wrapper-5.0.tgz](https://dtcenter.ucar.edu/dfiles/code/METplus/METplus_Data/v5.0/sample_data-met_tool_wrapper-5.0.tgz) and untar into a directory on Gadi, for example `~/METplus`.

2. Create a configuration file `local.conf` containing the input and output paths, for example `INPUT_BASE=~/METplus`.

```
[dir]
INPUT_BASE=/path/to/metplus_inputs
OUTPUT_BASE=/path/to/outputs
```

3. Save the demo configuration (e.g. `ASCII2NC.conf` from [this METPlus example](https://metplus.readthedocs.io/en/latest/generated/met_tool_wrapper/ASCII2NC/ASCII2NC.html#sphx-glr-generated-met-tool-wrapper-ascii2nc-ascii2nc-py)) to a local file

4. Run METplus passing it both local.conf and the demo configuration

```
run_metplus.py local.conf ASCII2NC.conf
```
