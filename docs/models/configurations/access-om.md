# ACCESS-OM

![ACCESS OM model](/assets/model-config-logos/configurations-without-titles/access-om.png){: class="img-contain white-background round-edges with-padding intro-img" loading="lazy"}

The ACCESS Ocean Model (ACCESS-OM) is a global coupled ocean model that includes [ocean](/models/model_components/ocean), [ocean biogeochemistry](/models/model_components/bgc_ocean), and [sea ice](/models/model_components/sea-ice) components, linked together by a [coupler](/models/model_components/coupler).<br>
The atmospheric fields that drive the model are provided by a data source, usually derived from reanalysis.

## ACCESS-OM3

ACCESS-OM3 is a suite of coupled ocean-sea ice models developed by ACCESS-NRI and the [Consortium for Ocean-Sea Ice Modelling in Australia (COSIMA)](http://cosima.org.au/).<br>

ACCESS-NRI will release the [ACCESS-OM3 configurations](https://github.com/ACCESS-NRI/access-om3-configs).

There are three planned global configurations for:

- 1° horizontal resolution, 50 vertical levels.
- 0.25° horizontal resolution, 50 vertical levels.
- 0.12° horizontal resolution, 75 vertical levels.

For each resolution there are **two planned options of atmospheric forcing**: 

- Repeat Year Forcing (RYF)
- Interannual Forcing (IAF)

Each configuration also has a biogeochemical (BGC) configuration that uses the [Biogeochemistry Ocean component](/models/model_components/bgc_ocean), if this is required.
!!! warning
    BGC experiments are slower and generally consume more resources (compute time and disk space).

### Model Components
<div class="tabLabels" label="ACCESS-OM3-versions">
    <button id="1deg">ACCESS-OM3</button>
    <button id="025deg">ACCESS-OM3-025</button>
    <button id='01deg'>ACCESS-OM3-012</button>
</div>

- **Ocean**: [MOM5](/models/model_components/ocean#mom5).<br>
  Tripolar grid, <span tabcontentfor="1deg">1</span><span tabcontentfor="025deg">0.25</span><span tabcontentfor="01deg">0.12</span>° spatial resolution, 50 vertical levels.

- **Ocean Biogeochemistry**: [WOMBAT](/models/model_components/bgc_ocean#wombat).

## ACCESS-OM2

[ACCESS-OM2](https://gmd.copernicus.org/articles/13/401/2020/) [@Kiss2020] is a suite of coupled ocean-sea ice models originally developed by the [Consortium for Ocean-Sea Ice Modelling in Australia (COSIMA)](http://cosima.org.au/).<br>

ACCESS-NRI has released [ACCESS-OM2 configurations](https://github.com/ACCESS-NRI/access-om2-configs) as an adaptation of those originally developed by COSIMA.

There are global configurations for **three spatial resolutions**:

- 1° horizontal resolution, 50 vertical levels.
- 0.25° horizontal resolution, 50 vertical levels.
- 0.1° horizontal resolution, 75 vertical levels.

For each resolution there are **two options of atmospheric forcing**: 

- Repeat Year Forcing (RYF)
- Interannual Forcing (IAF)

Each configuration also has a biogeochemical (BGC) configuration that uses the [Biogeochemistry Ocean component](/models/model_components/bgc_ocean), if this is required.
!!! warning
    BGC experiments are slower and generally consume more resources (compute time and disk space).

### Model Components
<div class="tabLabels" label="ACCESS-OM2-versions">
    <button id="1deg">ACCESS-OM2</button>
    <button id="025deg">ACCESS-OM2-025</button>
    <button id='01deg'>ACCESS-OM2-01</button>
</div>

- **Ocean**: [MOM5](/models/model_components/ocean#mom5).<br>
  Tripolar grid, <span tabcontentfor="1deg">1</span><span tabcontentfor="025deg">0.25</span><span tabcontentfor="01deg">0.1</span>° spatial resolution, 50 vertical levels.

- **Ocean Biogeochemistry**: [WOMBAT](/models/model_components/bgc_ocean#wombat).

- **Sea ice**: [CICE5.1.2](/models/model_components/sea-ice#cice5).<br>
    Same grid as ocean.

- **Coupler**: [OASIS3-MCT](/models/model_components/coupler#oasis3-mct).

[Run ACCESS-OM](/models/run-a-model/run-access-om){: class="text-card"}
