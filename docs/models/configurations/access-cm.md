#  ACCESS-CM
<img src="../../../assets/model-config-logos/configurations-without-titles/access-cm.png" alt="ACCESS CM model" class="img-contain white-background with-border with-padding intro-img"></img>

The ACCESS Coupled Model (ACCESS-CM) is a fully-coupled global climate model that includes <a href="../../model_components/atmosphere ">atmoshpere</a>, <a href="../../model_components/aerosols_atmospheric_chemistry">aerosols and atmospheric chemistry</a>, <a href="../../model_components/land ">land</a>, <a href="../../model_components/ocean ">ocean</a> and <a href="../../model_components/sea-ice ">sea ice</a> components, linked together by a <a href="../../model_components/coupler">coupler</a>.
<br>
It produces physical climate simulations.

## ACCESS-CM2

<a href="https://www.publish.csiro.au/es/ES19040" target="_blank">ACCESS-CM2</a> [@Bi2020-vj] was initially developed by <a href="https://www.csiro.au/" target="_blank">CSIRO</a> and is one of Australia’s contributions to the World Climate Research Programme’s <a href = "https://wcrp-cmip.org/cmip-phase-6-cmip6/" target="_blank">Coupled Model Intercomparison Project Phase 6 (CMIP6)</a>.

### Model components
- <a href="../../model_components/atmosphere">Atmoshpere</a>: <a href="../../model_components/atmosphere#unified-model-um">UM10.6</a>, GA7.1 science configuration. N96 spatial resolution (1.875° x 1.25°), 85 vertical levels. Physical model only – no carbon cycle.
  
- <a href="../../model_components/aerosols_atmospheric_chemistry">Aerosols and Atmospheric Chemistry</a>: <a href="../../model_components/aerosols_atmospheric_chemistry#glomap">GLOMAP</a> for the aerosols and <a href="../../model_components/aerosols_atmospheric_chemistry#ukca">UKCA</a> for the atmospheric chemistry.

- <a href="../../model_components/land">Land</a>: <a href="../../model_components/land#cable">CABLE2.5</a>.

- <a href="../../model_components/ocean">Ocean</a>: <a href="../../model_components/ocean#mom5">MOM5</a>. Tripolar grid, 1° spatial resolution, 50 vertical levels.

- <a href="../../model_components/sea-ice">Sea ice</a>: <a href="../../model_components/sea-ice#cice5">CICE5.1.2</a>. Same grid as ocean.

- <a href="../../model_components/coupler">Coupler</a>: <a href="../../model_components/coupler#oasis3-mct">OASIS3-MCT</a>.

Compared to previous model versions, ACCESS-CM2 shows better global hydrological balance, more realistic ocean water properties (in terms of spatial distribution) and meridional overturning circulation in the Southern Ocean. It does, however, produce a poorer simulation of the Antarctic sea ice and a larger energy imbalance at the top of atmosphere. ACCESS-CM2 has a relatively high equilibrium climate sensivity of 4.7°C for doubled CO<sub>2</sub> concentration.

<a href="../../run-a-model/run-access-cm" class="text-card">Run ACCESS-CM</a>