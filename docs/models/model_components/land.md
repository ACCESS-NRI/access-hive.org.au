#  Land Surface component

<img src = "/assets/component-logos/component-maps/land-component-map.png" class="img-contain white-background with-border with-padding intro-img"></img>

## CABLE

<a href="https://cable.readthedocs.io/en/latest/" target="_blank">Community Atmosphere Biosphere Land Exchange (CABLE)</a> is a land surface model used to calculate the fluxes of momentum, energy, water and carbon between the land surface, vegetation canopy and the atmospheric boundary layer. It also includes descriptions of thermal and hydrological processes in the soil and snow, and models the main biogeochemical cycles of the land ecosystem when used in conjunction with the <a href="../bgc_land#casa-cnp">CASA-CNP</a> module.  

CABLE is an open source model developed by a community of Australian climate science researchers.
<br>
Refer to <a href="https://cable.readthedocs.io/en/latest/user_guide/" target="_blank">the documentation</a> to know how to work with the CABLE model.

### Configurations that use CABLE

CABLE provides the land surface component of <a href="../../configurations/access-cm">ACCESS-CM</a> and <a href="../../configurations/access-esm">ACCESS-ESM</a> configurations.
<br>
Directly coupled into the <a href="../atmosphere#unified-model-um">UM</a>, CABLE replaces relevant parts of the functionality of the UM’s own land surface scheme (JULES).
<br>
CABLE can also be run as a standalone model, for a single location, a region or globally.

## JULES

The <a href="https://jules.jchmr.org/" target="_blank">Joint UK Land Environment System (JULES)</a> is a community land surface model that can be used both as a standalone model and as the land surface component in the UM model. By modelling different land surface processes (surface energy balance, hydrological cycle, carbon cycle, dynamic vegetation, etc.) and their interaction with each other, JULES provides a framework to assess the impact of modifying a particular process on the ecosystem as a whole, for example the impact of climate change on hydrology.

### Configurations that use JULES

JULES in not used in any ACCESS-NRI-supported configuration.
<br>
Some of the ACCESS models used for weather simulations use JULES instead of CABLE. For example, the <a href="http://www.bom.gov.au/" target="_blank">Australian Bureau of Meteorology (BoM)</a> uses JULES in its numerical weather prediction models such as ACCESS-S (Seasonal) and ACCESS-C (City).
