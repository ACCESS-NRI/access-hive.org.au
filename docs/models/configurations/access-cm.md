# <div class="highlight-bg"> ACCESS-CM  </div>

The ACCESS Coupled Model (ACCESS-CM) is a fully-coupled global climate model that includes atmosphere, land, ocean and sea ice components, and produces physical climate simulations. Coupled models run by the Australian climate community are contributed to the
<a href = "https://www.wcrp-climate.org/wgcm-cmip" target="_blank"> Coupled Model Intercomparison Project (CMIP)</a>.
<br>

ACCESS-NRI will release supported ACCESS-CM configurations.  The first release of ACCESS-CM will be derived from the [CSIRO ACCESS-CM2 configuration](#access-cm2) and will include [atmosphere], [land], [ocean] and [sea ice] components.

<img src="../../../assets/model-config-logos/configurations-without-titles/access-cm.png" alt="ACCESS CM model" class="image-background center-img with-border with-padding"></img>

## <div class="center-icons"> [ACCESS-CM2]  </div>

ACCESS-CM2 [@Bi2020-vj] is one of Australia’s contributions to the World Climate Research Programme’s Coupled Model Intercomparison Project Phase 6 (CMIP6).

The component models are:

- Atmosphere model (UM vn10.6, GA7.1 science configuration): N96 resolution (1.875° x 1.25°, 85 levels). Physical model only – no carbon cycle.

- Land surface model (CABLE2.5)

- Ocean model (MOM5): Tripolar grid, 1° resolution, 50 levels.

- Sea ice model (CICE5.1.2): Same grid as ocean.

- Coupler (OASIS3-MCT)

Compared to previous model versions, ACCESS-CM2 shows better global hydrological balance, more realistic ocean water properties (in terms of spatial distribution) and meridional overturning circulation in the Southern Ocean. It does, however, produce a poorer simulation of the Antarctic sea ice and a larger energy imbalance at the top of atmosphere. ACCESS-CM2 has a relatively high equilibrium climate sensivity of 4.7°C for doubled CO<sub>2</sub> concentration.

[**Citation** [@Bi2020-vj]][ACCESS-CM2-cite] |
[**Tutorial**][ACCESS-CM2-tute]

[atmosphere]: ../model_components/atmosphere.md
[land]: ../model_components/land.md
[ocean]: ../model_components/ocean.md
[sea ice]: ../model_components/sea-ice.md

[ACCESS-CM2]: https://research.csiro.au/access/about/cm2/
[ACCESS-CM2-cite]: https://www.publish.csiro.au/es/ES19040
[ACCESS-CM2-tute]: https://nespclimate.com.au/wp-content/uploads/2020/10/Instruction-document-Getting_started_with_ACCESS.pdf

<!-- {% include "call_contribute.md" %} -->
