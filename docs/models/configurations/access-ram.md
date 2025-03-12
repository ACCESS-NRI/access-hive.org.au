# ACCESS-RAM 

![ACCESS RAM model](/assets/model-config-logos/configurations-without-titles/access-ram.png){: class="img-contain white-background round-edges with-padding intro-img" loading="lazy"}

The ACCESS Regional Area Model (ACCESS-RAM) is an implementation of the [UK Met Office (UKMO)](https://www.metoffice.gov.uk/) regional nesting suite, comprising [atmosphere](/models/model_components/atmosphere) and [land](/models/model_components/land) components.<br>
Unlike the UKMO regional nesting suite that relies on operational land-surface initial conditions, ACCESS-RAM derives its initial conditions from alternative sources, enhancing its capability for high-resolution regional atmosphere modelling on [Gadi](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview).

ACCESS-RAM requires both initial conditions and lateral boundary (_driving_) conditions. It also supports multiple [_nesting_](#nesting) configurations, automatically providing their necessary initial and lateral boundary conditions.

### Nesting
_Nesting_ is the process of embedding a smaller, finer resolution region (often referred to as _nest_ or _nested region_) within a larger, coarser-resolution domain to improve accuracy for localised weather events. This approach enables atmospheric variables such as temperature, pressure, and wind speed from the larger domain to be used as lateral boundary conditions for the nested region, allowing more accurate simulations within the nest.

## ACCESS-RAM3
Similar to the the UKMO regional nesting suite, ACCESS-RAM3 is configured to derive its initial and lateral boundary conditions from the [ECMWF Reanalysis v5 (ERA5)](https://www.ecmwf.int/en/forecasts/dataset/ecmwf-reanalysis-v5) dataset.<br>
However, for its land-surface initial conditions, ACCESS-RAM3 offers flexibility by allowing the use of alternative datasets.

### Land-surface initial conditions options
- [ERA5-Land](https://www.ecmwf.int/en/era5-land) (default)
- [ERA5](https://www.ecmwf.int/en/forecasts/dataset/ecmwf-reanalysis-v5)

!!! info
    [BARRA-R2](http://www.bom.gov.au/research/publications/researchreports/BRR-067.pdf) is also available as an option for land-surface initial conditions. However, setting up a fully functional experiment with this option requires additional manual adjustments to the nesting configuration.<br>
    For detailed instructions on configuring an experiment using BARRA-R2 as the land-surface initial condition, refer to [LINK NEEDS TO BE PROVIDED](/failing/link/picked/by/link-checker).

### Nesting configuration

!!! tip
    The structure, horizontal resolution, and placement of nests listed below are the default settings for the associated land-surface initial condition, but they can be fully customised.<br>
    For details on how to modify these configuration options, refer to [Edit the RAS configuration](/models/run-a-model/run-access-ram/#edit-the-ras-configuration).

<div class="tabLabels" label="ACCESS-RAM3-init-data">
    <button id="era5">ERA5</button>
    <button id="era5-land">ERA5-Land</button>
    <button id='barra-r2'>BARRA-R2</button>
</div>
<div tabcontentfor="era5" markdown>

- 2-level nest:
    - Outer nest: 0.25° x 0.25° (≈25km) horizontal resolution
    - Inner nest: 0.0198° x 0.0198° (≈2km) horizontal resolution
</div>
<div tabcontentfor="era5-land" markdown>

- 2-level nest:
    - Outer nest: 0.1° x 0.1° (≈10km) horizontal resolution
    - Inner nest: 0.0198° x 0.0198° (≈2km) horizontal resolution
</div>
<div tabcontentfor="barra-r2" markdown>

!!! info 
    BARRA-R2 nesting configuration settings are not provided as a default.<br>
    For detailed instructions on configuring an experiment using BARRA-R2 as the land-surface initial condition, refer to [LINK NEEDS TO BE PROVIDED](/failing/link/picked/by/link-checker).

</div>

### Model components 

- **Atmosphere:** [UM13.5](/models/model_components/atmosphere/#unified-model-um)<br>
   Nests > 4km: [GAL9 science configuration](https://doi.org/10.5194/gmd-12-1909-2019), 70 vertical levels.<br>
   Nests <= 4km: [RAL3.2 science configuration](https://doi.org/10.5194/gmd-2024-201), 90 vertical levels.<br>
   Spatial resolution depending on the [nesting configuration](#nesting-configuration).
- **Land:** [Jules7.5](/models/model_components/land/#jules)<br>
   Nests > 4km: [GAL9 science configuration](https://doi.org/10.5194/gmd-12-1909-2019), 70 vertical levels.<br>
   Nests <= 4km: [RAL3.2 science configuration](10.0.20.74/gmd-2024-201), 90 vertical levels.<br>
   Spatial resolution depending on the [nesting configuration](#nesting-configuration).
