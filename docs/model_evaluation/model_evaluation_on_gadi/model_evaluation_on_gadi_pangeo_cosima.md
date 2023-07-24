# COSIMA Cookbook on NCI's Gadi

COSIMA is the [Consortium for Ocean-Sea Ice Modelling in Australia](http://cosima.org.au/), which brings together Australian researchers involved in global ocean and sea ice modelling.

The COSIMA Cookbook is a framework for analysing output from ocean-sea ice models. The focus is on the [ACCESS-OM2](../../models/configurations/access-om.md) suite of models being developed and run by members of [COSIMA]((http://cosima.org.au/)). But this framework is suited to analysing any MOM5/MOM6 output, as well as output from other models.

???+ warning "The COSIMA Cookbook is a framework by COSIMA"
    The COSIMA Cookbook itself is maintained by the COSIMA members.
    ACCESS-NRI is only providing support for the COSIMA Cookbook and its collection of `cosmia-recipes` for the evaluation of ocean-sea ice modelling on Gadi.

## Getting Started

The easiest way to use the COSIMA Cookbook is through the [Australian Research Environment (ARE)](https://are.nci.org.au) access of the [National Computational Infrastructure](https://nci.org.au). Here, we assume that you already [got started](../../get_started/index.md), that is, you have an NCI account and can log onto Gadi via secure shell (ssh).

To use the COSIMA Cookbook that is preinstalled in the `conda/analysis3` of NCI proejct `hh5`, you need to [join NCI project `hh5`](https://my.nci.org.au/mancini/project/hh5).

1. Log onto Gadi via secure shell (ssh) and clone the <a href="https://github.com/COSIMA/cosima-recipes"><code>cosima-recipes</code></a> repository to your local file space.  
2. Check out the recipes that you want to run, and make sure that you have access to the specific projects and their storage (e.g. project `ik11` to get access to `/g/data/ik11`).
3. Start an [ARE JupyterLab session on NCI](https://are.nci.org.au):  
  **Storage**: gdata/hh5 (add the specific storage that you need for the recipes you want to run)
  **Module directories**: /g/data/hh5/public/modules  
  **Modules**: conda/analysis3
  You can check out our [Getting Started with ARE](../model_evaluation_getting_started/model_evaluation_getting_started.md) instructions if you have not used ARE before.
4. Within the ARE environment, navigate to one of the COSIMA recipes and run the analysis.

## More information about the Cookbook

For more information, we refer to the [Cookbook github repository](https://github.com/COSIMA/cosima-cookbook) as well as a list of recipes:

- [Tutorials](https://github.com/COSIMA/cosima-recipes/tree/main/Tutorials),
- [Notebooks](https://github.com/COSIMA/cosima-recipes/tree/main/ACCESS-OM2-GMD-Paper-Figs) to reproduce figures of the [ACCESS-OM2 announcement paper](https://gmd.copernicus.org/articles/13/401/2020/),
- [Documented Example](https://github.com/COSIMA/cosima-recipes/tree/main/DocumentedExamples), and
- [Contributed Examples](https://github.com/COSIMA/cosima-recipes/tree/main/ContributedExamples)

