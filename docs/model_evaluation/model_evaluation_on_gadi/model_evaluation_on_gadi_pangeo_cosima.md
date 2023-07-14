# COSIMA cookbooks on NCI's Gadi
<!-- # COSIMA cookbooks and Pangeo on NCI's Gadi -->

COSIMA is the Consortium for Ocean-Sea Ice Modelling in Australia, which brings together Australian researchers involved in global ocean and sea ice modelling. The consortium provides a collection of `cosmia-recipes` for the evaluation of ocean-sea ice modelling that are currated for you on Gadi.

<!-- [Pangeo](https://pangeo.io) is a community of people working collaboratively to develop software environments around the Xarray and Dask packages. -->

## Getting Started

The easiest way to use the COSIMA Cookbook is through NCI's HPC systems. The cookbook is preinstalled both in the latest `access-med` (project `xp65`) and `conda/analysis3` (project hh5) environments.

1. Clone the <a href="https://github.com/COSIMA/cosima-recipes"><code>cosima-recipes</code></a> repository to your local file space.  
2. Start an [ARE JupyterLab session on NCI](https://are.nci.org.au) or a jupyter notebook on Gadi:  
  *If you are using ARE*:  
  **Storage**: gdata/xp65+gdata/ik11  
  **Module directories**: /g/data/xp65/public/modules  
  **Modules**: conda/are
3. Navigate to one of the COSIMA recipes and run the analysis.

## Using the Cookbook

The COSIMA Cookbook is a framework for analysing output from ocean-sea ice models. The focus is on the ACCESS-OM2 suite of models being developed and run by members of [COSIMA: Consortium for Ocean-Sea Ice Modelling in Australia](http://cosima.org.au/). But this framework is suited to analysing any MOM5/MOM6 output, as well as output from other models.

The cookbook is structured as follows:  
    * This repository includes boiler-plate code and scripts that underpin the cookbook.
    * The [cosima-recipes](https://github.com/COSIMA/cosima-recipes) repository includes example notebooks on which you can base your analyses, including a [collection of useful examples](https://cosima-recipes.readthedocs.io/en/latest/documented_examples.html).
    * The cosima-recipes [template](https://github.com/COSIMA/cosima-recipes/blob/master/Tutorials/Template_For_Notebooks.ipynb) provides you with a template if you want to contribute your own scripts to the analysis.