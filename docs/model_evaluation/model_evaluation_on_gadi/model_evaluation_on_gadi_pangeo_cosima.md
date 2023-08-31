# COSIMA Cookbook on Gadi


COSIMA is the Consortium for Ocean-Sea Ice Modelling in Australia, which brings together Australian researchers involved in global ocean and sea ice modelling. The <i>COSIMA Cookbook</i> is a collection of `cosima-recipes` curated on <i>Gadi</i> for analysing output from ocean-sea ice models.

???+ warning "Support Level: Supported on <i>Gadi</i>, but not owned by ACCESS-NRI"
    <!-- Who develped the tool? -->
    The <i>COSIMA Cookbook</i> is developed and maintained by COSIMA. While ACCESS-NRI does not own the code, it actively supports the use of the <i>COSIMA Cookbook</i> and its collection of `cosima-recipes` on <i>Gadi</i>. 
    ACCESS-NRI provides access to the latest version of <i>COSIMA Cookbook</i> via the `hh5` <i>access-med conda environment</i> deployed on <i>Gadi</i>.

 The <i>COSIMA Cookbook</i> framework focuses on the [ACCESS-OM2](../../models/configurations/access-om.md) suite of models being developed and run by members of <a href="http://cosima.org.au/" target="_blank">COSIMA</a>. Nevertheless, this framework is suited to analysing any MOM5/ MOM6 output as well as output from other models.

## Getting Started

The easiest way to use the <i>COSIMA Cookbook</i> is through the <a href="https://are.nci.org.au" target="_blank">Australian Research Environment (ARE)</a> on <i>Gadi</i>. You need to have an NCI account and be able to `ssh` login to <i>Gadi</i> (see section on [getting started](../../getting_started/index.md)).

To use the <i>COSIMA Cookbook</i> that is pre-installed in the `conda/analysis3` environment of `hh5`, you need to <a href="https://my.nci.org.au/mancini/project/hh5" target="_blank">join NCI project `hh5`</a>.

1. Login  via `ssh` to <i>Gadi</i> and clone the <a href="https://github.com/COSIMA/cosima-recipes" target="_blank"><code>cosima-recipes</code></a> repository to your local directory.  

2. Find the recipes that you want to run and make sure you have access to the specific projects and their storage (e.g., project `ik11` to get access to `/g/data/ik11`).

3. Start an <a href="https://are.nci.org.au" target="_blank">ARE JupyterLab</a> session on NCI:  
  <b>Storage</b>: `gdata/hh5` (add the specific storage you need for the recipe you want to run)
  <br>
  <b>Module directories</b>: `/g/data/hh5/public/modules`  
  <b>Modules</b>: `conda/analysis3`
  <br>
  If you are new to ARE, refer to instructions on [Getting Started with ARE](../model_evaluation_getting_started/model_evaluation_getting_started.md).
4. Within the ARE environment, navigate to one of the COSIMA recipes and run the analysis.

## COSIMA Cookbook information

For more information on the <i>COSIMA Cookbook</i>, refer to the <a href="https://github.com/COSIMA/cosima-cookbook" target="_blank">cosima-cookbook</a> GitHub repository, as well as the following lists of recipes:

- <a href="https://github.com/COSIMA/cosima-recipes/tree/main/Tutorials" target="_blank">Tutorials</a>
- <a href="https://github.com/COSIMA/cosima-recipes/tree/main/ACCESS-OM2-GMD-Paper-Figs" target="_blank">Notebooks</a> to reproduce figures of the <a href="https://gmd.copernicus.org/articles/13/401/2020/" target="_blank">ACCESS-OM2 announcement paper</a>
- <a href="https://github.com/COSIMA/cosima-recipes/tree/main/DocumentedExamples" target="_blank">Documented Example</a>
- <a href="https://github.com/COSIMA/cosima-recipes/tree/main/ContributedExamples" target="_blank">Contributed Examples</a>

