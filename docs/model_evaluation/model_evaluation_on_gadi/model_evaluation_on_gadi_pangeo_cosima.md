# COSIMA Cookbook on NCI's Gadi

???+ warning "Support Level: Supported on Gadi, but not owned by ACCESS-NRI"
    <!-- Who develped the tool? -->
    The COSIMA Cookbook is developed and maintained by the Consortium for Ocean-Sea Ice Modelling in Australia.
    <!-- Code ownership and support -->
    ACCESS-NRI does not own the code of the COSIMA Cookbook, but actively supports the use of the COSIMA Cookbook and its collection of `cosima-recipes` on Gadi.
    ACCESS-NRI provides access to the latest version of the COSIMA Cookbook via the `hh5` access-med conda environment deployed on NCI-Gadi.

COSIMA is the Consortium for Ocean-Sea Ice Modelling in Australia, which brings together Australian researchers involved in global ocean and sea ice modelling. The consortium provides a collection of `cosima-recipes` for the evaluation of ocean-sea ice modelling that are currated for you on Gadi.

The COSIMA Cookbook is a framework for analysing output from ocean-sea ice models. The focus is on the [ACCESS-OM2](../../models/configurations/access-om.md) suite of models being developed and run by members of <a href="http://cosima.org.au/" target="_blank">COSIMA</a>. But this framework is suited to analysing any MOM5/MOM6 output, as well as output from other models.

## Getting Started

The easiest way to use the COSIMA Cookbook is through the <a href="https://are.nci.org.au" target="_blank">Australian Research Environment (ARE)</a> access of the <a href="https://nci.org.au" target="_blank">National Computational Infrastructure</a>. Here, we assume that you already [got started](../../../getting_started), that is, you have an NCI account and can log onto Gadi via secure shell (ssh).

To use the COSIMA Cookbook that is preinstalled in the `conda/analysis3` of NCI proejct `hh5`, you need to <a href="https://my.nci.org.au/mancini/project/hh5" target="_blank">join NCI project `hh5`</a>.

1. Log onto Gadi via secure shell (ssh) and clone the <a href="https://github.com/COSIMA/cosima-recipes" target="_blank"><code>cosima-recipes</code></a> repository to your local file space.  
2. Check out the recipes that you want to run, and make sure that you have access to the specific projects and their storage (e.g. project `ik11` to get access to `/g/data/ik11`).
3. Start an <a href="https://are.nci.org.au" target="_blank">ARE JupyterLab session on NCI</a>:  
  **Storage**: gdata/hh5 (add the specific storage that you need for the recipes you want to run)
  **Module directories**: /g/data/hh5/public/modules  
  **Modules**: conda/analysis3
  You can check out our [Getting Started with ARE](../model_evaluation_getting_started/model_evaluation_getting_started.md) instructions if you have not used ARE before.
4. Within the ARE environment, navigate to one of the COSIMA recipes and run the analysis.

## More information about the Cookbook

For more information, we refer to the <a href="https://github.com/COSIMA/cosima-cookbook" target="_blank">Cookbook github repository</a> as well as a list of recipes:

- <a href="https://github.com/COSIMA/cosima-recipes/tree/main/Tutorials" target="_blank">Tutorials</a>,
- <a href="https://github.com/COSIMA/cosima-recipes/tree/main/ACCESS-OM2-GMD-Paper-Figs" target="_blank">Notebooks</a> to reproduce figures of the <a href="https://gmd.copernicus.org/articles/13/401/2020/" target="_blank">ACCESS-OM2 announcement paper</a>,
- <a href="https://github.com/COSIMA/cosima-recipes/tree/main/DocumentedExamples" target="_blank">Documented Example</a>, and
- <a href="https://github.com/COSIMA/cosima-recipes/tree/main/ContributedExamples" target="_blank">Contributed Examples</a>

