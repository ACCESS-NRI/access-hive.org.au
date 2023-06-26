# Atmospheric Model Component

{% include "call_contribute.md" %}

![Atmosphere Component Logo](../assets/component-logos/ACCESS icon ATMOSPHERE (Title).png){align=right width=40%}

## The Unified Model (UM) {{ supported }}

The [Unified Model (UM)][um-web], which is a numerical model of the atmosphere used for both weather and climate applications, has been adopted as the atmospheric model component for the different Australian Community Climate and Earth System Simulator (ACCESS) model suites. Developed by the [UK Met Office][metoffice-web], it includes solutions of the equations of atmospheric fluid dynamics with advanced parameterisations of subgrid-scale physical processes like convection, cloud formation and atmospheric radiation. 

Several international operational meteorology and research centres use the UM and contribute towards its development through the [UM partnership](um-partner).

## How is the UM used?

The UM can be used at regional and global scales in atmosphere-only mode, or coupled to other models such as the [MOM](mom) ocean and [CICE](cice) sea-ice models via the [OASIS coupler](oasis), [UKCA](ukca) chemistry and aerosols and the [CABLE](cable) land-surface model. It can also be used in other modes, such as Single Column Model (SCM), Aquaplanet and Exoplanet.

The UM is the atmospheric model adopted in both the ACCESS Coupled Model (CM) and ACCESS Earth System Model (ESM) configurations.

<!--- The UM is used by the Australian [Bureau of Meteorology][bom-web] operational 12 km spatial resolution global forecasting system for:

- Daily and seasonal weather forecasts, and
- Forecasting extreme events and emergencies (e.g. heatwaves, bushfires, cyclones, floods, coral bleaching, sea-level rise, coastal inundation, etc.)
--->

## Useful links

[STASH register](metoffice-stash-register): Metadata reference for the outputs variables.

[um-web]: https://www.metoffice.gov.uk/research/approach/modelling-systems/unified-model
[bom-web]: http://www.bom.gov.au/
[metoffice-web]: https://www.metoffice.gov.uk/research/approach/collaboration/unified-model/partnership
[metoffice-stash-register]: https://reference.metoffice.gov.uk/um/_stash
[mom]: https://www.gfdl.noaa.gov/mom-ocean-model/
[cice]: https://github.com/CICE-Consortium/CICE
[ukca]: https://www.ukca.ac.uk/wiki/index.php/UKCA
[cable]: https://www.cawcr.gov.au/research/cable/
[oasis]: https://oasis.cerfacs.fr/en/
[um-partner]: https://www.metoffice.gov.uk/research/approach/collaboration/unified-model/partnership
