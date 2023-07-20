# <div class="highlight-bg"> Land Model Components </div>

<!-- {% include "call_contribute.md" %} -->

<!-- ![Land Component Logo](../../assets/component-logos/components-without-titles/ACCESS icon LAND SURFACE.png){align=right width=40%} -->

<img src = "../../../assets/component-logos/component-maps/land-component-map.png" class="image-background"></img>

## [CABLE][cable-wiki]

[Community Atmosphere Biosphere Land Exchange (CABLE)][cable-web] is a land surface model used to calculate the fluxes of momentum, energy, water and carbon between the land surface, vegetation canopy and the atmospheric boundary layer. It also includes descriptions of thermal and hydrological processes in the soil and snow, and models the main biogeochemical cycles of the land ecosystem when used in conjunction with the [CASA-CNP][casa-cnp] module.  

### How is CABLE used?

CABLE provides the land surface component of the ACCESS Earth System Model (ACCESS-ESM) and the ACCESS Coupled Model (ACCESS-CM). Directly coupled into the [Unified Model (UM)](um-web), CABLE replaces relevant parts of the functionality of the UM’s own land surface scheme (JULES). CABLE can also be run as a standalone model, for a single location, a region or globally. 

CABLE is an open source model developed by a community of Australian climate science researchers. [Registration][cable-wiki] is required to access the CABLE code repository.

[cable-wiki]: https://trac.nci.org.au/trac/cable/wiki
[um-web]: https://www.metoffice.gov.uk/research/approach/modelling-systems/unified-model


## [JULES][jules-web]

The [Joint UK Land Environment System (JULES)](jules-web) is a community land surface model that can be used both as a standalone model and as the land surface component in the UM model. By modelling different land surface processes (surface energy balance, hydrological cycle, carbon cycle, dynamic vegetation, etc.) and their interaction with each other, JULES provides a framework to assess the impact of modifying a particular process on the ecosystem as a whole, e.g., the impact of climate change on hydrology.

<!---
Some of the ACCESS models used for weather simulations use JULES instead of CABLE. For example, the Bureau of Meteorology (BoM) uses the JULES land surface scheme in its numerical weather prediction models such as ACCESS S (Seasonal) and C (City).
--->

[jules-web]: https://jules.jchmr.org/
[cable-web]: https://www.cawcr.gov.au/research/cable/
[casa-cnp]: bgc_land.md#casa-cnp

