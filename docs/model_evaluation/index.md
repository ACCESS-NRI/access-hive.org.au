# <div class="highlight-bg"> Model Evaluation and Diagnostics (MED) </div>

Model evaluation is about measuring how fit for purpose a particular model is. If you are new to model evaluation and diagnostics, we recommend you read our [Getting Started with MED page](./model_evaluation_getting_started/index.md). Here, we provide catalogs and pointers to [observational data](./model_evaluation_observational_catalogs.md) as well as [model data](./model_evaluation_model_catalogs/index.md) that can be used for evaluation. We provide [tools to process such data](./model_evaluation_data_processing.md) into a comparable format and a [gallery of recipes to evaluate](https://medportal.herokuapp.com/models/published) the formatted data.

## Getting Started
<div class="card-container">
    <a href="./model_evaluation_getting_started/access_to_gadi_at_nci.md" class="squared-card default-text-color">
        <div class="squared-card-image">
            <img src="..//assets/model_evaluation/Gadi-19-2.jpg" alt="Computing Access"></img>
        </div>
        <div class="squared-card-text bold">Computing Access</div>
    </a>
    <a href="./model_evaluation_getting_started/model_evaluation_getting_started.md" class="squared-card default-text-color">
        <div class="squared-card-image">
            <img src="../assets/model_evaluation/model_evaluation_conda.png" alt="MED Conda Environment"></img>
        </div>
        <div class="squared-card-text bold">MED Conda Environment</div>
    </a>
    <a href="./model_evaluation_getting_started/model_variables/index.md" class="squared-card default-text-color">
        <div class="squared-card-image">
            <img src="../assets/model_evaluation/model_evaluation_variables.png" alt="Model Variables"></img>
        </div>
        <div class="squared-card-text bold">Model Variables</div>
    </a>
</div>

## Data Catalogs
<div class="card-container">
    <a href="./model_evaluation_observational_catalogs.md" class="squared-card default-text-color">
        <div class="squared-card-image">
            <img src="../assets/model_evaluation/model_evaluation_obs_catalog.jpg" alt="A picture of a seismograph recording seismic waves during an earthquake visualises the link to our Observational Data Catalog. Image credit: Wf Sihardian—EyeEm/Getty Images" title="Image credit: Wf Sihardian—EyeEm/Getty Images"></img>
        </div>
        <div class="squared-card-text bold">Observational Data Catalog</div>
    </a>
    <a href="./model_evaluation_model_catalogs/index.md" class="squared-card default-text-color">
        <div class="squared-card-image">
            <img src="../assets/model_evaluation/model_evaluation_model_catalog.jpg" alt="MED Conda Environment"></img>
        </div>
        <div class="squared-card-text bold">Model Data Catalog</div>
    </a>
</div>

## Evaluation Tools

### Frameworks on Gadi

<div class="card-container">
    <a href="./model_evaluation_getting_started/access_to_gadi_at_nci.md" class="squared-card default-text-color">
        <div class="squared-card-image">
            <img src="../assets/model_evaluation/logo_ilamb.png" alt="ILAMB"></img>
        </div>
        <div class="squared-card-text bold">ILAMB</div>
    </a>
    <a href="./model_evaluation_getting_started/model_evaluation_getting_started.md" class="squared-card default-text-color">
        <div class="squared-card-image">
            <img src="../assets/model_evaluation/logo_esmvaltool.png" alt="ESMValTool"></img>
        </div>
        <div class="squared-card-text bold">ESMValTool</div>
    </a>
    <a href="./model_evaluation_getting_started/model_variables/index.md" class="squared-card default-text-color">
        <div class="squared-card-image">
            <img src="../assets/model_evaluation/logo_pangeo.png" alt="Pangeo/COSIMA"></img>
        </div>
        <div class="squared-card-text bold">Pangeo/COSIMA</div>
    </a>
</div>

### What is to come: Diagnostics, Recipe Gallery and more

{% include "call_contribute.md" %}

<div class="card-container">
    <a href="./model_evaluation_getting_started/access_to_gadi_at_nci.md" class="squared-card default-text-color">
        <div class="squared-card-image">
            <img src="..//assets/model_evaluation/Gadi-19-2.jpg" alt="Computing Access"></img>
        </div>
        <div class="squared-card-text bold">Computing Access</div>
    </a>
    <a href="./model_evaluation_data_processing.md" class="squared-card default-text-color">
        <div class="squared-card-image">
            <img src="../assets/model_evaluation/model_evaluation_formatting.jpg" alt="A picture visualising the conversion of data in text columns into a useful python xarray data format. Image credit: https://support.solarwinds.com and https://i.stack.imgur.com/" title="Image credit: https://support.solarwinds.com and https://i.stack.imgur.com/"></img>
        </div>
        <div class="squared-card-text bold">Data Format Processing</div>
    </a>
    <a href="./model_evaluation_recipe_gallery.md" class="squared-card default-text-color">
        <div class="squared-card-image">
            <img src="../assets/model_evaluation/model_evaluation_recipe.jpg" alt="A code snippet from the COSIMA documented recipes. Image credit: https://github.com/COSIMA/cosima-recipes" title="Image credit: https://github.com/COSIMA/cosima-recipes"></img>
        </div>
        <div class="squared-card-text bold">Evaluation Recipe Gallery</div>
    </a>
</div>


<!-- THIS NEEDS TO BE DONE

## TBD: FRAMEWORKS AND RECIPES
TBD: ILAMB, ESMVALTOOL, COSMIA -> Pangeo (extended COSIMA)

## TBD: COMMUNITY MED

TBD: Mention Community MED in our curated MED


## TBD: CMORisation

TBD: Raw data vs. curated data: CMORized vs. not! What does CMORized actually mean (look at ESMValTool documentation)?
TBD: Add APP4 to navigation (replace **Model Format Processing**?)
TBD: Tools to check if data is CMOR-compliant (raise issue)
TBD: Discuss with Dougie: How can we identify what is CMORized and what is not?

-->