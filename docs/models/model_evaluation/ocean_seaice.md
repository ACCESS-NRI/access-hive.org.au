
# MED: Ocean and Sea-Ice

{% include "call_contribute.md" %}


## <div class="center-icons"> [ESMValTool][esmvaltool-web] {{ recommended }} </div>

[**Documentation**][esmvaltool-doc] |
[**Tutorial**][esmvaltool-tutorial] | 
[**Source Code**][esmvaltool-source]

ESMValTool is a community-developed climate model diagnostics and evaluation software package, driven both by computational performance and scientific accuracy and reproducibility. ESMValTool is open to both users and developers, encouraging open exchange of diagnostic source code and evaluation results from the Coupled Model Intercomparison Project CMIP ensemble. For a comprehensive introduction to ESMValTool please visit our documentation page.


## [COSIMA Cookbook / Recipes][cosimacb-web] {{ recommended }}

[**Documentation**][cosimacb-doc] |
[**Tutorial**][cosimacb-tutorial] | 
[**Cookbook Source Code**][cosimacb-source] |
[**Cookbook Recipes**][cosimacb-recipes]

The COSIMA (Consortium for Ocean-Sea Ice Modelling in Australia) Cookbook / Recipes is a framework for analysing output from ocean-sea ice models. The focus is on the ACCESS-OM2 suite of models being developed and run by members of COSIMA: Consortium for Ocean-Sea Ice Modelling in Australia.

The framework is suited for analysing any MOM5/MOM6 output, as well as output from other models.

The cookbook is structured as follows:

- [cosima-cookbook][cosimacb-source]: includes boiler-plate code and scripts that underpin the cookbook, including a database for exploring and loading available data.

- [cosima-recipes][cosimacb-recipes]: includes example notebooks that illustrate how users can use the cookbook to read output from particular experiments and, further, they showcase simple and elaborate analyses of model output.

  New users are urged to go throught the [tutorials][cosimacb-tutorial] in the cosima recipes and then browse through the [documented examples][cosimacb-documentedexamples].
  
  As a rule of thumb, users who are not interested in data management and, e.g., are only interested in using/analysing model output should never be bothered looking into the `cosima-cookbook` repository. `cosima-cookbook` is developed and maintained and will just *simply work out of the box*. `:)`


## <div class="center-icons"> [climpred][climpred-doc]  {{ community }} </div>

[**Documentation**][climpred-doc] |
[**Tutorial**][climpred-tutorial] |
[**Source Code**][climpred-source] |
[**Paper** [@Brady2021-joss]][climpred-paper]

Climpred aims to offer a comprehensive set of analysis tools for assessing the quality of dynamical forecasts relative to verification products (e.g., observations, reanalysis products, control simulations). Climpred supports a broad range of temporal scales of prediction, spanning the weather, subseasonal-to-seasonal (S2S), and seasonal-to-decadal (S2D) communities.


[esmvaltool-web]: https://www.esmvaltool.org/
[esmvaltool-doc]: https://docs.esmvaltool.org/en/latest
[esmvaltool-tutorial]: https://esmvalgroup.github.io/ESMValTool_Tutorial/index.html
[esmvaltool-source]: https://github.com/ESMValGroup/ESMValTool#readme

[cosimacb-web]: http://cosima.org.au/
[cosimacb-doc]: https://cosima-recipes.readthedocs.io/en/latest/
[cosimacb-tutorial]: https://cosima-recipes.readthedocs.io/en/latest/tutorials/index.html
[cosimacb-documentedexamples]: https://cosima-recipes.readthedocs.io/en/latest/documented_examples/index.html
[cosimacb-source]: https://github.com/COSIMA/cosima-cookbook
[cosimacb-recipes]: https://github.com/COSIMA/cosima-recipes

[climpred-doc]: https://climpred.readthedocs.io/en/stable/index.html
[climpred-tutorial]: https://climpred.readthedocs.io/en/stable/setting-up-data.html
[climpred-source]: https://github.com/pangeo-data/climpred
[climpred-paper]: https://joss.theoj.org/papers/10.21105/joss.02781

