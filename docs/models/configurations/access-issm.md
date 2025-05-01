# ACCESS‑ISSM (ALPHA RELEASE)

![ACCESS‑ISSM model](/assets/model-config-logos/configurations-without-titles/access-issm.png){: .img-contain .white-background .round-edges .with-padding .intro-img loading="lazy"}

The ACCESS Ice Sheet–Shelf System Model (ACCESS‑ISSM) is a global ice‑sheet and ice‑shelf model based on the [ISSM](/models/model_components/ice-sheet) framework.  It supports standalone ice dynamics and optional coupling to ocean and atmospheric forcings.  This suite is in **alpha**: we welcome feedback and contributions via our GitHub repository.

## Configurations & Resolutions

ACCESS‑ISSM alpha provides **three horizontal resolutions**:

- 20 km resolution, 20 vertical layers  
- 5 km  resolution, 40 vertical layers  
- 1 km  resolution, 60 vertical layers  

For each grid, you may choose from two surface mass‑balance forcing datasets:

- **ERA5**: 1950–present,  monthly fields  
- **JRA55‑do**: 1958–2018, daily fields  

An optional **bedrock deformation** component can be enabled to simulate glacial isostatic adjustment (GIA).

> **Warning**  
> ACCESS‑ISSM is in alpha.  Expect API changes and incomplete documentation.  Use for testing and development only.

### Model Components
<div class="tabLabels" label="ACCESS-ISSM-versions">
  <button id="20km">20 km</button>
  <button id="5km">5 km</button>
  <button id="1km">1 km</button>
</div>

- **Ice dynamics**: Full-Stokes solver (via ISSM), adaptive timestep.<br>
- **Surface mass balance**: ERA5 or JRA55‑do interpolation onto mesh.<br>
- **Basal hydrology**: Shreve channel or prescribed meltwater flux.<br>
- **Ice–ocean coupling** (optional): parameterized sub‑ice‑shelf melt.<br>
- **Bedrock deformation** (optional): elastic lithosphere + viscous mantle GIA.

More details, examples and forcing files are available on the [ACCESS‑ISSM GitHub](https://github.com/ACCESS-NRI/access-issm).

[Run ACCESS‑ISSM](/models/run-a-model/run-access-issm){: .text-card }