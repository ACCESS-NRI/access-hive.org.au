# <div class="highlight-bg center-icons"> Coupler {{ supported }} </div>

<!-- ![Coupler Component Logo](../../assets/component-logos/components-without-titles/ACCESS icon COUPLER.png){align=right width=40%} -->

<img src = "../../../assets/component-logos/component-maps/coupler-component-map.png" class="white-img-bg"></img>

A coupler is a software package that allows synchronised exchanges of coupling information between numerical codes representing different components of the climate system.

## <div class="center-icons"> [OASIS3-MCT][OASIS3-MCT] {{ supported }} </div>

[OASIS3-MCT][OASIS3-MCT] is the version of the Ocean Atmosphere Sea Ice Soil (OASIS) coupler interfaced with the Model Coupling Toolkit (MCT) from the Argonne National Laboratory. OASIS3-MCT is the coupler used in the configurations:

- ACCESS-ESM1.5
- ACCESS-CM2 
- ACCESS-OM2
- ACCESS-S

## <div class="center-icons"> [NUOPC Interoperability Layer][NUOPC-int-layer] {{ recommended }} </div>

[NUOPC][NUOPC-int-layer] (National Unified Operational Prediction Capability) Interoperability Layer defines conventions and a set of generic components for building coupled models using the Earth System Modeling Framework (ESMF).

ACCESS-OM3, a configuration currently under development, uses [NUOPC to couple its MOM6 and CICE6 model components][coupler-choice] as there are no respective OASIS coupling interfaces for these components.

[OASIS3-MCT]: https://oasis.cerfacs.fr/en/
[NUOPC-int-layer]: https://earthsystemmodeling.org/nuopc/
[coupler-choice]: https://github.com/COSIMA/access-om3/discussions/7