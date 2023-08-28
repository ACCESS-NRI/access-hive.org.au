#  Model Evaluation and Diagnostics (MED) 

<!-- Model evaluation is about measuring how fit for purpose a particular model is.  -->

Model evaluation in climate science is the process of assessing the performance and reliability of computational models that simulate the Earth's climate system. It involves comparing model predictions to observed data to determine the model's accuracy and usefulness. In doing so, we can understand how well a model represents real-world climate processes and make predictions about future climate trends. Such rigorous model evaluation allows scientists to identify model strengths, weaknesses and uncertainties, as well as refine models to enhance their predictive capabilities.

## Getting Started with MED

<!--If you are new to MED and are wondering [*"What is Model Evaluation and Diagnostics about?"*](./model_evaluation_getting_started/index.md), we recommend you read our [Getting Started with MED page](./model_evaluation_getting_started/index.md): -->

<div class="card-container">
    <a href="../getting_started" class="vertical-card aspect-ratio1to1">
        <div class="vertical-card-image-container">
            <img src="../assets/model_evaluation/Gadi-19-2.jpg" alt="Computing Access" class="img-cover"></img>
        </div>
        <div class="card-text-container bold ">Computing Access</div>
    </a>
    <a href="model_evaluation_getting_started/model_evaluation_getting_started" class="vertical-card aspect-ratio1to1">
        <div class="card-image-container">
            <img src="../assets/model_evaluation/model_evaluation_conda.png" alt="Model Evaluation on Gadi" class="img-cover" style="object-position: left;"></img>
        </div>
        <div class="card-text-container bold ">Model Evaluation on Gadi</div>
    </a>
    <a href="model_evaluation_getting_started/model_variables" class="vertical-card aspect-ratio1to1">
        <div class="card-image-container">
            <img src="../assets/model_evaluation/model_evaluation_variables.png" alt="Model Variables" class="img-cover"></img>
        </div>
        <div class="card-text-container bold ">Model Variables</div>
    </a>
</div>

## ACCESS-MED data and tools hosted on Gadi

### Data Catalogues
<div class="card-container">
    <a href="model_evaluation_observational_catalogs" class="vertical-card aspect-ratio1to1">
        <div class="card-image-container">
            <img src="../assets/model_evaluation/model_evaluation_obs_catalog.jpg" alt="A picture of a seismograph recording seismic waves during an earthquake visualises the link to our Observational Data Catalogue. Image credit: Wf Sihardian—EyeEm/Getty Images" title="Image credit: Wf Sihardian—EyeEm/Getty Images" class="img-cover"></img>
        </div>
        <div class="card-text-container bold ">Observational Data Catalogue</div>
    </a>
    <a href="model_evaluation_model_catalogs" class="vertical-card aspect-ratio1to1">
        <div class="card-image-container">
            <img src="../assets/model_evaluation/model_evaluation_model_catalog.jpg" alt="MED Conda Environment" class="img-cover"></img>
        </div>
        <div class="card-text-container bold ">Model Data Catalogue</div>
    </a>
</div>

### Supported Community Frameworks on Gadi

<div class="card-container">
    <a href="model_evaluation_on_gadi/model_evaluation_on_gadi_ilamb" class="vertical-card aspect-ratio2to1">
        <div class="card-image-container">
            <img src="../assets/model_evaluation/logo_ilamb.png" alt="ILAMB" class="img-cover"></img>
        </div>
        <div class="card-text-container bold">ILAMB</div>
    </a>
    <a href="model_evaluation_on_gadi/model_evaluation_on_gadi_esmvaltool" class="vertical-card aspect-ratio2to1">
        <div class="card-image-container">
            <img src="../assets/model_evaluation/logo_esmvaltool.png" alt="ESMValTool" class="img-cover"></img>
        </div>
        <div class="card-text-container bold">ESMValTool</div>
    </a>
    <a href="model_evaluation_on_gadi/model_evaluation_on_gadi_pangeo_cosima" class="vertical-card aspect-ratio2to1">
        <div class="card-image-container">
            <img src="../assets/model_evaluation/logo_cosima.png" alt="Pangeo/COSIMA" class="img-cover"></img>
        </div>
        <div class="card-text-container bold">COSIMA cookbook</div>
    </a>
    <a href="../model_evaluation_on_gadi/model_evaluation_on_gadi_metplus" class="vertical-card aspect-ratio2to1">
        <div class="card-image-container">
            <img src="../assets/model_evaluation/METplus_logo.png" alt="METplus" class="img-contain"></img>
        </div>
        <div class="card-text-container bold">METplus</div>
    </a>
</div>


### Tools in development

For the evaluation and diagnosis of ACCESS climate models, the following tools are currently being setup:  

* Model Diagnostics for on-the-fly analysis of your models at different snapshots  
* Data format processing tools like APP4  
* An Evaluation Recipe Gallery with searching functionality  

While this work is in progress, you can refer to a collection of links to existing tools (not curated by ACCESS-NRI) in the [community tab](../community_resources/index.md). 

<!-- {% include "call_contribute.md" %} -->

<!-- 

<div class="card-container">
    <a href="./model_evaluation_getting_started/access_to_gadi_at_nci.md" class="vertical-card aspect-ratio1to1">
        <div class="card-image-container">
            <img src="..//assets/model_evaluation/Gadi-19-2.jpg" alt="Model Diagnostics"></img>
        </div>
        <div class="card-text-container bold">Model Diagnostics</div>
    </a>
    <a href="./model_evaluation_data_processing.md" class="vertical-card aspect-ratio1to1">
        <div class="card-image-container">
            <img src="../assets/model_evaluation/model_evaluation_formatting.jpg" alt="A picture visualising the conversion of data in text columns into a useful python xarray data format. Image credit: https://support.solarwinds.com and https://i.stack.imgur.com/" title="Image credit: https://support.solarwinds.com and https://i.stack.imgur.com/"></img>
        </div>
        <div class="card-text-container bold">Data Format Processing</div>
    </a>
    <a href="./model_evaluation_recipe_gallery.md" class="vertical-card aspect-ratio1to1">
        <div class="card-image-container">
            <img src="../assets/model_evaluation/model_evaluation_recipe.jpg" alt="A code snippet from the COSIMA documented recipes. Image credit: https://github.com/COSIMA/cosima-recipes" title="Image credit: https://github.com/COSIMA/cosima-recipes"></img>
        </div>
        <div class="card-text-container bold">Evaluation Recipe Gallery</div>
    </a>
</div> -->


<!-- THIS NEEDS TO BE DONE

## TBD: CMORisation

TBD: Raw data vs. curated data: CMORized vs. not! What does CMORized actually mean (look at ESMValTool documentation)?
TBD: Add APP4 to navigation (replace **Model Format Processing**?)
TBD: Tools to check if data is CMOR-compliant (raise issue)
TBD: Discuss with Dougie: How can we identify what is CMORized and what is not?

-->