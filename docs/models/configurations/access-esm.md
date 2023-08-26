# ACCESS-ESM

<img src="../../../assets/model-config-logos/configurations-without-titles/access-esm.png" alt="ACCESS ESM model" class="img-contain white-background with-border with-padding intro-img"></img>

The ACCESS Earth System Model (ACCESS-ESM) is a fully-coupled global climate model that includes <a href="../../model_components/atmosphere">atmoshpere</a>, <a href="../../model_components/land">land</a>, <a href="../../model_components/ocean">ocean</a>, <a href="../../model_components/sea-ice">sea ice</a>, as well as <a href="../../model_components/bgc_ocean">ocean biogeochemistry</a> and <a href="../../model_components/bgc_land">land biogeochemistry</a> components, linked together by a <a href="../../model_components/coupler">coupler</a>.
<br>
This means it can simulate both the physical climate and global biogeochemical cycles, in particular the carbon cycle.

## ACCESS-ESM1.5

<a href="https://www.publish.csiro.au/es/ES19035" target="_blank">ACCESS-ESM1.5</a> [@Ziehn2020-fq] is a fully-coupled climate model with land and ocean carbon cycle components. ACCESS-ESM1.5 was developed primarily to enable Australia to participate in the <a href = "https://wcrp-cmip.org/cmip-phase-6-cmip6/" target="_blank">Coupled Model Intercomparison Project Phase 6 (CMIP6)</a> with an ESM version.


### Model components
- <a href="../../model_components/atmosphere">Atmoshpere</a>: <a href="../../model_components/atmosphere#unified-model-um">UM7.3</a>, GA7.1 science configuration. N96 spatial resolution (1.875° x 1.25°), 38 vertical levels.

- <a href="../../model_components/land">Land</a>: <a href="../../model_components/land#cable">CABLE2.4</a>.

- <a href="../../model_components/bgc_land">Land Biogeochemistry</a>: <a href="../../model_components/bgc_land#casa-cnp">CASA-CNP</a>.

- <a href="../../model_components/ocean">Ocean</a>: <a href="../../model_components/ocean#mom5">MOM5</a>. Tripolar grid, 1° spatial resolution, 50 vertical levels.
  
- <a href="../../model_components/bgc_ocean">Ocean Biogeochemistry</a>: <a href="../../model_components/bgc_ocean#wombat">WOMBAT</a>.

- <a href="../../model_components/sea-ice">Sea ice</a>: <a href="../../model_components/sea-ice#cice">CICE5.1.2</a>. Same grid as ocean.

- <a href="../../model_components/coupler">Coupler</a>: <a href="../../model_components/coupler#oasis3-mct">OASIS3-MCT</a>.

ACCESS-ESM1.5 has an equilibrium climate sensitivity of 3.87°C for doubled CO<sub>2</sub> concentration.

<a href="../../run-a-model/run-access-esm" class="text-card">Run ACCESS-ESM</a>