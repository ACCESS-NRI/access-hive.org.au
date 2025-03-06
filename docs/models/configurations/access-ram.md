# ACCESS-RAM 

![ACCESS RAM model](/assets/model-config-logos/configurations-without-titles/access-ram.png){: class="img-contain white-background round-edges with-padding intro-img" loading="lazy"}

The ACCESS Regional Area Model (ACCESS-RAM) is an implementation of the [UK Met Office (UKMO)](https://www.metoffice.gov.uk/) regional nesting suite, comprising [atmosphere](/models/model_components/atmosphere) and [land](/models/model_components/land) components.<br>
Unlike the UKMO regional nesting suite that relies on operational land-surface initial conditions, ACCESS-RAM derives its initial conditions from alternative sources, enhancing its capability for high-resolution regional atmosphere modelling on [Gadi](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-Overview).

### Nesting
_Nesting_ is the process of embedding a smaller, finer resolution region (often referred to as _nest_ or _nested region_) within a larger, coarser-resolution domain to improve accuracy for localised weather events. This approach enables atmospheric variables such as temperature, pressure, and wind speed from the larger domain to be used as lateral boundary conditions (also referred to as _driving conditions_) for the nested region, allowing more accurate simulations within the nest.

ACCESS-RAM supports multiple nests and can automatically generate driving conditions for them.


## ACCESS-RAM3 
By default, ACCESS-RAM3 is configured to obtain both initial conditions and lateral boundary driving conditions from the [ECMWF Reanalysis v5 (ERA5)](https://www.ecmwf.int/en/forecasts/dataset/ecmwf-reanalysis-v5) dataset.

### Initial conditions options
- [ERA5](https://www.ecmwf.int/en/forecasts/dataset/ecmwf-reanalysis-v5) (default)
- [ERA5-Land](https://www.ecmwf.int/en/era5-land) 
- [BARRA-R2](http://www.bom.gov.au/research/publications/researchreports/BRR-067.pdf)

### Nesting configuration
<div class="tabLabels" label="ACCESS-RAM3-init-data">
    <button id="era5">ERA5</button>
    <button id="era5-land">ERA5-Land</button>
    <button id='barra-r2'>BARRA-R2</button>
</div>
<div tabcontentfor="era5" markdown>

- Domain: N96 (1.875° x 1.25°) horizontal resolution
- 2-level nest:
    - Outer nest: 0.1° x 0.1° horizontal resolution
    - Inner nest: 0.0198° x 0.0198° horizontal resolution
?? Do we know these values for the ERA5 initial conditions?
</div>
<div tabcontentfor="era5-land" markdown>

- Domain: N96 (1.875° x 1.25°) horizontal resolution 
- 2-level nest:
    - Outer nest: 0.1° x 0.1° horizontal resolution
    - Inner nest: 0.0198° x 0.0198° horizontal resolution
</div>
<div tabcontentfor="barra-r2" markdown>

- Domain: N96 (1.875° x 1.25°) horizontal resolution 
- 2-level nest:
    - Outer nest: 0.11° x 0.11° horizontal resolution
    - Inner nest: 0.0198° x 0.0198° horizontal resolution
</div>

The structure, horizontal resolution, and placement of nests can all be fully customised.<br>
For more information on how to change the configuration options, refer to [Edit the RAS configuration](/models/run-a-model/run-access-ram/#edit-the-ras-configuration) 

### Model components 

- **Atmosphere:** [UM13.5](/models/model_components/atmosphere/#unified-model-um), [GAL9 science configuration](https://doi.org/10.5194/gmd-12-1909-2019).<br>
   Spatial resolution depending on the [nesting configuration](#nesting-configuration), 70 vertical levels. 
- **Land:** [Jules (?? Is this correct? What version?)](/models/model_components/land/#jules).<br>
   Spatial resolution depending on the [nesting configuration](#nesting-configuration).
