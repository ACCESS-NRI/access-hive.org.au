
# ACCESS-OM

![ACCESS OM model](/assets/model-config-logos/configurations-without-titles/access-om.png){: class="img-contain white-background with-border with-padding intro-img" loading="lazy"}

The ACCESS Ocean Model (ACCESS-OM) is a global coupled ocean model that includes [ocean](/models/model_components/ocean), [ocean biogeochemistry](/models/model_components/bgc_ocean), and [sea ice](/models/model_components/sea-ice) components, linked together by a [coupler](/models/model_components/coupler).<br>
The atmospheric fields that drive the model are provided by a data source, usually derived from reanalysis.

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
<!-- Tab labels -->
<div class="tabLabels" label="ACCESS-OM2-versions">
    <button>ACCESS-OM2</button>
    <button>ACCESS-OM2-025</button>
    <button>ACCESS-OM2-01</button>
</div>
<!-- Tab content -->
<ul>
    <div class="tabContents" label="ACCESS-OM2-versions">
        <!-- ACCESS-OM2 -->
        <div>   
            <li>
                <b>Ocean</b>: <a href="/models/model_components/ocean#mom5">MOM5</a>.<br>Tripolar grid, 1° spatial resolution, 50 vertical levels.
            </li>
        </div>
        <!-- ACCESS-OM2-025 -->
        <div>   
            <li>
                <b>Ocean</b>: <a href="/models/model_components/ocean#mom5">MOM5</a>.<br>Tripolar grid, 0.25° spatial resolution, 50 vertical levels.
            </li>
        </div>
        <!-- ACCESS-OM2-01 -->
        <div>   
            <li>
                <b>Ocean</b>: <a href="/models/model_components/ocean#mom5">MOM5</a>.<br>Tripolar grid, 0.1° spatial resolution, 75 vertical levels.
            </li>
        </div>
    </div>
    <li style="margin-top: 0.3em">
        <b>Ocean Biogeochemistry</b>: <a href="/models/model_components/bgc_ocean#wombat">WOMBAT</a>.
    </li>
    <li>
        <b>Sea ice</b>: <a href="/models/model_components/sea-ice#cice5">CICE5.1.2</a>.
        <br>Same grid as ocean.
    </li>
    <li>
        <b>Coupler</b>: <a href="/models/model_components/coupler#oasis3-mct">OASIS3-MCT</a>.
    </li>
</ul>

[Run ACCESS-OM](/models/run-a-model/run-access-om){: class="text-card"}