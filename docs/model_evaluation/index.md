# <div class="highlight-bg"> Model Evaluation and Diagnostics (MED) </div>

<!-- Model evaluation is about measuring how fit for purpose a particular model is.  -->

ACCESS-NRI's "Model Evaluation and Diagnostics" work is a critical facet of climate modeling, encompassing various tasks designed to ensure the model's reliability and accuracy.

If you are new to model evaluation and diagnostics, we recommend you read our [Getting Started with MED page](./model_evaluation_getting_started/index.md):
<div class="card-container">
    <a href="../get_started" class="squared-card default-text-color">
        <div class="squared-card-image-container">
            <img src="..//assets/model_evaluation/Gadi-19-2.jpg" alt="Computing Access"></img>
        </div>
        <div class="squared-card-text-container bold">Computing Access</div>
    </a>
    <a href="model_evaluation_getting_started/model_evaluation_getting_started" class="squared-card default-text-color">
        <div class="squared-card-image-container">
            <img src="../assets/model_evaluation/model_evaluation_conda.png" alt="MED Conda Environment"></img>
        </div>
        <div class="squared-card-text-container bold">MED Conda Environment</div>
    </a>
    <a href="model_evaluation_getting_started/model_variables" class="squared-card default-text-color">
        <div class="squared-card-image-container">
            <img src="../assets/model_evaluation/model_evaluation_variables.png" alt="Model Variables"></img>
        </div>
        <div class="squared-card-text-container bold">Model Variables</div>
    </a>
</div>

Here, we provide catalogs and pointers to [observational data](./model_evaluation_observational_catalogs.md) as well as [model data](./model_evaluation_model_catalogs/index.md) that can be used for evaluation. We also provide a number of [frameworks for model evaluation](./model_evaluation_on_gadi/index.md). We are also working on implementing more frameworks and recipes as well as formatting tools for a better model evaluation and diagnostics.

## ACCESS-MED data and tools hosted on Gadi

### Data Catalogs
<div class="card-container">
    <a href="model_evaluation_observational_catalogs" class="squared-card default-text-color">
        <div class="squared-card-image-container">
            <img src="../assets/model_evaluation/model_evaluation_obs_catalog.jpg" alt="A picture of a seismograph recording seismic waves during an earthquake visualises the link to our Observational Data Catalog. Image credit: Wf Sihardian—EyeEm/Getty Images" title="Image credit: Wf Sihardian—EyeEm/Getty Images"></img>
        </div>
        <div class="squared-card-text-container bold">Observational Data Catalog</div>
    </a>
    <a href="model_evaluation_model_catalogs" class="squared-card default-text-color">
        <div class="squared-card-image-container">
            <img src="../assets/model_evaluation/model_evaluation_model_catalog.jpg" alt="MED Conda Environment"></img>
        </div>
        <div class="squared-card-text-container bold">Model Data Catalog</div>
    </a>
</div>

### Supported Community Frameworks on Gadi

<div class="card-container">
    <a href="model_evaluation_on_gadi/model_evaluation_on_gadi_ilamb" class="aspect1to2-card default-text-color">
        <div class="squared-card-image-container">
            <img src="../assets/model_evaluation/logo_ilamb.png" alt="ILAMB"></img>
        </div>
        <div class="squared-card-text-container bold">ILAMB</div>
    </a>
    <a href="model_evaluation_on_gadi/model_evaluation_on_gadi_esmvaltool" class="aspect1to2-card default-text-color">
        <div class="squared-card-image-container">
            <img src="../assets/model_evaluation/logo_esmvaltool.png" alt="ESMValTool"></img>
        </div>
        <div class="squared-card-text-container bold">ESMValTool</div>
    </a>
    <a href="model_evaluation_on_gadi/model_evaluation_on_gadi_pangeo_cosima" class="aspect1to2-card default-text-color">
        <div class="squared-card-image-container">
            <img src="../assets/model_evaluation/logo_cosima.png" alt="Pangeo/COSIMA"></img>
        </div>
        <div class="squared-card-text-container bold">COSIMA cookbook</div>
    </a>
    <a href="../model_evaluation_on_gadi/model_evaluation_on_gadi_metplus" class="squared-card default-text-color">
        <div class="squared-card-image-container">
            <img src="../assets/model_evaluation/METplus_logo.png" alt="METplus"></img>
        </div>
        <div class="squared-card-text-container bold">METplus</div>
    </a>
</div>


### Tools in development

We are currently setting up a range of tools that will help you to better evaluate and diagnose climate models:  

* Model Diagnostics for on-the-fly analysis of your models at different snapshots  
* Data format processing tools like APP4  
* An Evaluation Recipe Gallery with searching functionality  

While we are working on these, we have collected a number of links to existing tools in our [community tab](../community_resources/index.md) (note that we are not currating them).  

{% include "call_contribute.md" %}

<!-- 

<div class="card-container">
    <a href="./model_evaluation_getting_started/access_to_gadi_at_nci.md" class="squared-card default-text-color">
        <div class="squared-card-image-container">
            <img src="..//assets/model_evaluation/Gadi-19-2.jpg" alt="Model Diagnostics"></img>
        </div>
        <div class="squared-card-text-container bold">Model Diagnostics</div>
    </a>
    <a href="./model_evaluation_data_processing.md" class="squared-card default-text-color">
        <div class="squared-card-image-container">
            <img src="../assets/model_evaluation/model_evaluation_formatting.jpg" alt="A picture visualising the conversion of data in text columns into a useful python xarray data format. Image credit: https://support.solarwinds.com and https://i.stack.imgur.com/" title="Image credit: https://support.solarwinds.com and https://i.stack.imgur.com/"></img>
        </div>
        <div class="squared-card-text-container bold">Data Format Processing</div>
    </a>
    <a href="./model_evaluation_recipe_gallery.md" class="squared-card default-text-color">
        <div class="squared-card-image-container">
            <img src="../assets/model_evaluation/model_evaluation_recipe.jpg" alt="A code snippet from the COSIMA documented recipes. Image credit: https://github.com/COSIMA/cosima-recipes" title="Image credit: https://github.com/COSIMA/cosima-recipes"></img>
        </div>
        <div class="squared-card-text-container bold">Evaluation Recipe Gallery</div>
    </a>
</div> -->


<!-- THIS NEEDS TO BE DONE

## TBD: CMORisation

TBD: Raw data vs. curated data: CMORized vs. not! What does CMORized actually mean (look at ESMValTool documentation)?
TBD: Add APP4 to navigation (replace **Model Format Processing**?)
TBD: Tools to check if data is CMOR-compliant (raise issue)
TBD: Discuss with Dougie: How can we identify what is CMORized and what is not?

-->

## What is MED about?

**Evaluation** involves scrutinizing the model through Model/Observation confrontations, checking its performance against real-world observations. It also includes experiment comparisons, testing the model under different scenarios, and inter-model comparisons like the Coupled Model Intercomparison Project (CMIP), assessing how the ACCESS-NRI model fares when compared with other climate models.

**Diagnostics** involves constant monitoring of model runs to detect any anomalies or inconsistencies and a thorough analysis of outputs to verify the model's accuracy over time.