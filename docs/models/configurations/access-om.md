
# ACCESS-OM

<img src="../../../assets/model-config-logos/configurations-without-titles/access-om.png" alt="ACCESS OM model" class="img-contain white-background with-border with-padding intro-img"></img>

The ACCESS Ocean Model (ACCESS-OM) is a global coupled ocean model that includes <a href="../../model_components/ocean">ocean</a>, <a href="../../model_components/bgc_ocean">ocean biogeochemistry</a>, and <a href="../../model_components/sea-ice">sea ice</a> components, linked together by a <a href="../../model_components/coupler">coupler</a>.
<br>
The atmospheric fields that drive the model are provided by a data source, usually derived from reanalysis.

## ACCESS-OM2

<a href="https://gmd.copernicus.org/articles/13/401/2020/" target="_blank">ACCESS-OM2</a> [@Kiss2020-gmd] is a suite of coupled ocean-sea ice models developed by the <Consortium href="http://cosima.org.au/" target="_blank">Consortium for Ocean-Sea Ice Modelling in Australia (COSIMA)</a>.

The ACCESS-OM2 has versions at three different spatial resolutions: <a href="http://cosima.org.au/index.php/models/access-om2/" target="_blank">ACCESS-OM2</a>, <a href="http://cosima.org.au/index.php/models/access-om2-025/" target="_blank">ACCESS-OM2-025</a> and <a href="http://cosima.org.au/index.php/models/access-om2-01-2/" target="_blank">ACCESS-OM2-01</a>.

### Model Components

<!-- Tab labels -->
<div class="tabLabels" label="ACCESS-OM-versions">
    <button>ACCESS-OM2</button>
    <button>ACCESS-OM2-025</button>
    <button>ACCESS-OM2-01</button>
</div>
<!-- Tab content -->
<div class="tabContents" label="ACCESS-OM-versions">
    <!-- 
    -
    -
    -
    ACCESS-OM2 -->
    <div>   
        <ul>
            <li>
                <a href="../../model_components/ocean">Ocean</a>: <a href="../../model_components/ocean#mom5">MOM5</a>. Tripolar grid, 1° spatial resolution, 50 vertical levels.
            </li>
            <li>
                <a href="../../model_components/bgc_ocean">Ocean Biogeochemistry</a>: <a href="../../model_components/bgc_ocean#wombat">WOMBAT</a>.
            </li>
            <li>
                <a href="../../model_components/sea-ice">Sea ice</a>: <a href="../../model_components/sea-ice#cice">CICE4.1</a>. Same grid as ocean.
            </li>
            <li>
                <a href="../../model_components/coupler">Coupler</a>: <a href="../../model_components/coupler#oasis3-mct">OASIS3-MCT</a>.
            </li>
        </ul>
    </div>
    <!-- 
    -
    -
    -
    ACCESS-OM2-025 -->
    <div>   
        <ul>
            <li>
                <a href="../../model_components/ocean">Ocean</a>: <a href="../../model_components/ocean#mom5">MOM5</a>. Tripolar grid, 0.25° spatial resolution, 50 vertical levels.
            </li>
            <li>
                <a href="../../model_components/bgc_ocean">Ocean Biogeochemistry</a>: <a href="../../model_components/bgc_ocean#wombat">WOMBAT</a>.
            </li>
            <li>
                <a href="../../model_components/sea-ice">Sea ice</a>: <a href="../../model_components/sea-ice#cice">CICE4.1</a>. Same grid as ocean.
            </li>
            <li>
                <a href="../../model_components/coupler">Coupler</a>: <a href="../../model_components/coupler#oasis3-mct">OASIS3-MCT</a>.
            </li>
        </ul>
    </div>
    <!-- 
    -
    -
    -
    ACCESS-OM2-01 -->
    <div>   
        <ul>
            <li>
                <a href="../../model_components/ocean">Ocean</a>: <a href="../../model_components/ocean#mom5">MOM5</a>. Tripolar grid, 0.1° spatial resolution, 75 vertical levels.
            </li>
            <li>
                <a href="../../model_components/bgc_ocean">Ocean Biogeochemistry</a>: <a href="../../model_components/bgc_ocean#wombat">WOMBAT</a>.
            </li>
            <li>
                <a href="../../model_components/sea-ice">Sea ice</a>: <a href="../../model_components/sea-ice#cice">CICE4.1</a>. Same grid as ocean.
            </li>
            <li>
                <a href="../../model_components/coupler">Coupler</a>: <a href="../../model_components/coupler#oasis3-mct">OASIS3-MCT</a>.
            </li>
        </ul>
    </div>
</div>

<a href="../../run-a-model/run-access-om" class="text-card">Run ACCESS-OM</a>

<br>
<h6>References</h6>
<ul class="references">
    <li>
        <a href = "https://github.com/COSIMA/access-om2/wiki" target="_blank">https://github.com/COSIMA/access-om2/wiki</a>
    </li>
</ul>