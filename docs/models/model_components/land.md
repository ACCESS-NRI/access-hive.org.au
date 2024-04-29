#  Land Surface component

![Land Surface component image](/assets/component-logos/component-maps/land-component-map.png){: class="img-contain white-background with-border with-padding intro-img"}

## CABLE

[Community Atmosphere Biosphere Land Exchange (CABLE)](https://cable.readthedocs.io/en/latest/) is a land surface model used to calculate the fluxes of momentum, energy, water and carbon between the land surface, vegetation canopy and the atmospheric boundary layer. It also includes descriptions of thermal and hydrological processes in the soil and snow, and models the main biogeochemical cycles of the land ecosystem when used in conjunction with the [CASA-CNP](/models/model_components/bgc_land#casa-cnp) module.  

CABLE is an open source model developed by a community of Australian climate science researchers.<br>
Refer to [CABLE documentation](https://cable.readthedocs.io/en/latest/user_guide) to know how to work with the CABLE model.

### Configurations that use CABLE

CABLE provides the land surface component of [ACCESS-CM](/models/configurations/access-cm) and [ACCESS-ESM](/models/configurations/access-esm) configurations.<br>
Directly coupled into the [UM](/models/model_components/atmosphere#unified-model-um), CABLE replaces relevant parts of the functionality of the UM’s own land surface scheme ([JULES](#jules)).<br>
CABLE can also be run as a standalone model, for a single location, a region or globally.

### benchcab: evaluation tool for CABLE

<a href="https://benchcab.readthedocs.io/en/stable/" target="_blank">benchcab</a> is a testing framework tool for CABLE. It allows to test CABLE's scientific performance across a range of model configurations and model versions. The tool currently tests CABLE offline only with flux site simulations, using observed eddy covariance data and with spatial simulations over a region or globally. The output of these simulations can then be uploaded to <a href="https://modelevaluation.org/" target="_blank">modelevaluation.org</a> for a statistical analysis of the scientific performance of the supplied configurations.

We invite you to refer to <a href="https://benchcab.readthedocs.io/en/stable/" target="_blank">the documentation</a> to know how to use the tool and learn about current limitations to the functionalities.

## JULES

The [Joint UK Land Environment System (JULES)](https://jules.jchmr.org/) is a community land surface model that can be used both as a standalone model and as the land surface component in the UM model. By modelling different land surface processes (surface energy balance, hydrological cycle, carbon cycle, dynamic vegetation, etc.) and their interaction with each other, JULES provides a framework to assess the impact of modifying a particular process on the ecosystem as a whole, for example the impact of climate change on hydrology.

### Configurations that use JULES

JULES in not used in any ACCESS-NRI-supported configuration.<br>
Some of the ACCESS models used for weather simulations use JULES instead of CABLE. For example, the Australian [Bureau of Meteorology (BoM)](http://www.bom.gov.au/) uses JULES in its numerical weather prediction models such as ACCESS-S (Seasonal) and ACCESS-C (City).
