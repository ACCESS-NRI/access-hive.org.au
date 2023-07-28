# <div class="highlight-bg">ACCESS-ESM</div>

<!-- {% include "call_contribute.md" %} -->

<img src="../../../assets/model-config-logos/configurations-without-titles/access-esm.png" alt="ACCESS ESM model" class="image-background center-img with-border with-padding"></img>

The ACCESS Earth System Model (ACCESS-ESM) is a fully-coupled global climate model that also includes representations of land and ocean biogeochemisty. This means it can simulate both the physical climate and global biogeochemical cycles (the carbon cycle in particular).

ACCESS-NRI will release an ACCESS-ESM model configuration. The first release of ACCESS-ESM will be derived from the [CSIRO ACCESS-ESM1.5 configuration](#access-esm15) and will include [atmosphere], [land] and [land biogeochemistry], [ocean] and [ocean biogeochemistry], and [sea ice] components.

## [ACCESS-ESM1.5]

ACCESS-ESM1.5 [@Ziehn2020-fq] is a fully-coupled climate model with land and ocean carbon cycle components. ACCESS-ESM1.5 was developed primarily to enable Australia to participate in the Coupled Model Intercomparison Project Phase 6 (CMIP6) with an ESM version.

The model component are:

- Atmosphere model (UM vn7.3, GA7.1): N96 resolution (1.875° x 1.25°, 38 levels).

- Land surface model (CABLE2.4)

- Land biogeochemistry (CASA-CNP)

- Ocean model (MOM5): Tripolar grid, 1° resolution, 50 levels.

- Ocean biogeochemistry (WOMBAT)

- Sea ice model (CICE4.1): Same grid as the ocean.

- Coupler (OASIS3-MCT)

ACCESS-ESM1.5 has an equilibrium climate sensitivity of 3.87°C for doubled CO<sub>2</sub> concentration.

[**Citation** [@Ziehn2020-fq]][ACCESS-ESM1.5-cite]

[**ACCESS Training Workshop (AMOS 2021)**][ACCESS-AMOS-Workshop]

[**Webinar: *Getting Started with ACCESS-CM2 and ACCESS-ESM1.5* **][ACCESS-ESM1.5-tute]

[atmosphere]: ../model_components/atmosphere.md
[land]: ../model_components/land.md
[land biogeochemistry]: ../model_components/bgc_land.md
[ocean]: ../model_components/ocean.md
[ocean biogeochemistry]: ../model_components/bgc_ocean.md
[sea ice]: ../model_components/sea-ice.md

[ACCESS-ESM1.5]: https://research.csiro.au/access/about/esm1-5/
[ACCESS-ESM1.5-cite]: https://www.publish.csiro.au/es/ES19035
[ACCESS-ESM1.5-tute]: https://nespclimate.com.au/wp-content/uploads/2020/10/Webinar-slides-Getting_started_with_ACCESS.pdf
[ACCESS-AMOS-Workshop]: https://confluence.csiro.au/display/ACCESS/Setting+up+for+ACCESS-ESM1.5
