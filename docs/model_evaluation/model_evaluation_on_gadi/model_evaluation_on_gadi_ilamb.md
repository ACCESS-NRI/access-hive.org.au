# ILAMB on Gadi

## What is ILAMB?

The <a href="https://www.ilamb.org/" target="_blank">International Land Model Benchmarking (<i>ILAMB</i>)</a> benchmarking system is a python framework used to quantitatively compare a defined set of observable variables with a number of land models.

???+ warning "Support Level: Supported on <i>Gadi</i>, but not owned by ACCESS-NRI"
    <!-- Who develped the tool? -->
    <i>ILAMB</i> is a community-developed climate model diagnostics and evaluation software package.
    <!-- Code ownership and support -->
    While ACCESS-NRI does not own the code, it actively supports the use of <i>ILAMB</i> software on <i>Gadi</i>.
    <br>
     <!--ILAMB development is primarily performed by the <a href="https://www.bgc-feedbacks.org/" target="_blank">RUBISCO</a> Science Focus Area and supported by the <a href="https://climatemodeling.science.energy.gov/program-area/regional-global-model-analysis" target="_blank">RGMA</a> Activity of the <a href="https://science.osti.gov/ber/Research/eessd" target="_blank">EESSD</a> division of the <a href="https://science.osti.gov/ber" target="_blank">BER</a> program in the United States Department of Energy’s Office of Science. -->
    ACCESS-NRI provides access to the latest version of <i>ILAMB</i> via the `xp65` `access-med` <a href="\model_evaluation/model_evaluation_getting_started/model_evaluation_getting_started">conda environment for Model Evaluation on Gadi</a>.
    
This documentation is tailored to using <i>ILAMB</i> on <i>Gadi</i> and, hence, it supplements rather than replaces the official documentation. Users are encouraged to read the <a href="https://www.ilamb.org/doc/" target="_blank">ILAMB documentation</a> and relevant <a href="https://www.ilamb.org/doc/tutorial.html" target="_blank">tutorials</a>.

## Using ILAMB on Gadi

<i>ILAMB</i> is provided through both the `xp65` and `hh5` NCI projects on <i>Gadi</i>, so you need to have an NCI account and be a member of these projects to use it. 

<div class="note">
         To obtain an NCI account and join NCI projects, refer to <a href="\getting_started" target="_blank">Getting Started</a>.
</div>

For ACCESS-NRI documentation on how to run <i>ILAMB</i> on <i>Gadi</i>, visit:

<div class="card-container">
    <a href="https://ilamb-workflow.readthedocs.io/en/latest/?badge=latest" class="vertical-card aspect-ratio2to1" target="_blank">
        <div class="card-image-container">
            <img src="/assets/model_evaluation/logo_ilamb.png" alt="ILAMB on Gadi" class="img-cover white-background"></img>
        </div>
        <div class="card-text-container bold ">Documentation for ILAMB on Gadi</div>
    </a>
</div>

<br>
To run <i>ILAMB</i>, you need to execute the command `ilamb-run` with a number of arguments/ files:
```
ilamb-run --config config.cfg --model_setup model_setup.txt --regions regions.txt
```
<ul>
    <li>
    <code>config.cfg</code> defines which observables and observational datasets to be compared.
    <li>
    <code>model_setup.txt</code> defines the paths of models that to be compared.
    <li>
    <code>regions.txt</code> defines the regions to be compared, e.g., <code>global</code>, <code>aust</code> (Australia), etc.
</ul>

While these files can be self-defined, ACCESS-NRI provides the necessary files and tools to set your model paths to run on <i>Gadi</i>. All you need to do is decide which observations and models you wish to compare. 
<br>
NCI hosts replicas of the <i>ILAMB</i> observational data sets through the NCI project `ct11` as well as a large amount of model outputs are available on <i>Gadi</i>, such as ACCESS model output.

For more information, refer to <a href="\model_evaluation/model_evaluation_observational_catalogs" target="_blank">Observational Data Catalogue</a> on how to find observational data on NCI and <a href="\model_evaluation/model_evaluation_model_catalogs" target="_blank">ACCESS-NRI Intake Catalog</a> for how to find model outputs.
<br>
To learn more about how to adjust the <i>ILAMB</i> setup, refer to the official <a href="https://www.ilamb.org/doc/" target="_blank">ILAMB documentation</a> and relevant <a href="https://www.ilamb.org/doc/tutorial.html" target="_blank">tutorials</a>.

## Showcase: CMIP6 comparisons and ACCESS ESM1.5 benchmarking

ACCESS-NRI is maintaining a collection of benchmark comparisons for the ACCESS community, such as that with Coupled Model Intercomparison Project (CMIP) data:

- <a href="http://130.56.247.78/build_oi10_2/index.html" target="_blank">CMIP5 and CMIP6 Land Models</a>  
- <a href="http://130.56.247.78/build_al33/index.html" target="_blank">CMIP6 Land Models</a>  
- <a href="http://130.56.247.78/build_rr3/index.html" target="_blank">Offline CMIP6 Models</a> 
- <a href="http://130.56.247.78/build_iomb/index.html" target="_blank">CMIP5 and CMIP6 Ocean Models</a>

In the following example, the supported ACCESS Earth System Model (ESM) <a href="\models/configurations/access-esm#access-esm1.5" target="_blank">ACCESS-ESM1.5</a> is compared with two other ESM models:

- <a href="https://gmd.copernicus.org/articles/13/977/2020/" target="_blank">BCC ESM1 (Beijing Climate Center Earth System Model version 1)</a>
- <a href="https://gmd.copernicus.org/articles/12/4823/2019/gmd-12-4823-2019.html" target="_blank">CanESM5 (Canadian Earth System Model version 5)</a>

Numerous benchmark comparisons have been defined in the configuration file. The comparison of variables have been organised under different sections, such as the <i>Hydrology Cycle</i>. 
<br>
For other variables, such as the <i>git Gross Primary Productivity</i> `gpp`, one or more datasets are available. For example, the gross primary productivity measurements of <a href="https://fluxnet.org/data/fluxnet2015-dataset/" target="_blank">FLUXNET2015</a>. 
<br>
<br>
By clicking on a row in the table, you can expand it to see the underlying datasets used. The table's colourmap extends from best values in purple to worse data in orange.

<p align="center"><img align="center" width="50%" src="../../../assets/model_evaluation/ilamb_output_3.png" alt="Starting side of ILAMB output"></p>  

<br>
Clicking on one of these datasets, for example `CERESed4.1`, will take you to an interactive and quantitative comparison page for Albedo measurements of the <a href="https://ceres.larc.nasa.gov" target="_blank">Clouds and the Earth’s Radiant Energy System (CERES)</a> project:

<p align="center"><img align="center" width="100%" src="../../../assets/model_evaluation/ilamb_loop.gif" alt="Comparison of different ILAMB outputs"></p>  