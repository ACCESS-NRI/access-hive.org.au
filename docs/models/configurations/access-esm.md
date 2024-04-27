# ACCESS-ESM

![ACCESS ESM model](/assets/model-config-logos/configurations-without-titles/access-esm.png){: class="img-contain white-background with-border with-padding intro-img"}

The ACCESS Earth System Model (ACCESS-ESM) is a fully-coupled global climate model that includes [atmoshpere](/models/model_components/atmosphere), [land](/models/model_components/land), [ocean](/models/model_components/ocean), [sea ice](/models/model_components/sea-ice), [ocean biogeochemistry](/models/model_components/bgc_ocean) and [land biogeochemistry](/models/model_components/bgc_land) components, linked together by a [coupler](/models/model_components/coupler).<br>
This means it can simulate both the physical climate and global biogeochemical cycles, in particular the carbon cycle.

## ACCESS-ESM1.5

[ACCESS-ESM1.5](https://www.publish.csiro.au/es/ES19035) [@Ziehn2020] is a fully-coupled climate model with land and ocean carbon cycle components. ACCESS-ESM1.5 was developed primarily to enable Australia to participate in the [Coupled Model Intercomparison Project Phase 6 (CMIP6)](https://wcrp-cmip.org/cmip-phase-6-cmip6/) with an Earth System Model (ESM) version.


### Model components
- **Atmoshpere**: [UM7.3](/models/model_components/atmosphere#unified-model-um), GA7.1 science configuration.<br>
  N96 spatial resolution (1.875° x 1.25°), 38 vertical levels.

- **Land**: [CABLE2.4](/models/model_components/land#cable).

- **Land Biogeochemistry**: [CASA-CNP](/models/model_components/bgc_land#casa-cnp).

- **Ocean**: [MOM5](/models/model_components/ocean#mom5).<br>
  Tripolar grid, 1° spatial resolution, 50 vertical levels.

- **Ocean Biogeochemistry**: [WOMBAT](/models/model_components/bgc_ocean#wombat).

- **Sea ice**: [CICE5.1.2](/models/model_components/sea-ice#cice5).<br>
  Same grid as ocean.

- **Coupler**: [OASIS3-MCT](/models/model_components/coupler#oasis3-mct).

ACCESS-ESM1.5 has an equilibrium climate sensitivity of 3.87°C for doubled CO~2~ concentration.

[Run ACCESS-ESM](/models/run-a-model/run-access-esm){: class="text-card"}