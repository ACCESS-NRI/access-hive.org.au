# ACCESS-NRI intake Model Catalog

The ACCESS-NRI intake catalog aims to provide a way for Python users to discover and load data across a broad range of climate data products available on the Australian NCI supercomputer Gadi. For detailed information, tutorials and more, please go to the
<div class="card-container">
    <a href="https://access-nri-intake-catalog.readthedocs.io/en/latest/index.html" class="aspect1to2-card default-text-color">
        <div class="squared-card-image-container">
            <img src="../../assets/model_evaluation/accessnri_intake.png" alt="ACCESS-NRI intake catalog documentation"></img>
        </div>
        <div class="squared-card-text-container bold">Documentation</div>
    </a>
</div>

## What is the ACCESS-NRI intake Model Catalog?

The ACCESS-NRI catalog is essentially a table of climate data products that exist on Gadi. Each entry in the table corresponds to a different product, and the columns contain attributes associated with each product–things like the models, frequencies and variables available. Users can search on the attributes to find the products that might be useful to them. For example, a user might want to know which data products contain variables X, Y and Z at monthly frequency. The ACCESS-NRI catalog enables users to find products that satisfy their query and to subsequently load their data without having to know the location and structure of the underlying files.

## Showcase: Search with intake to easily load and plot data

```py
import intake
catalog = intake.cat.access_nri
```
You can then search for a model, variable, frequency and more across all the project that we provide support for on Gadi:
```py
catalog_filtered = catalog.search(name="cmip6_oi10", variable="burntFractionAll")
```
You can then easily load this particular datastore and look at its metadata or keywords
```py
esm_datastore = catalog_filtered.to_source()
esm_datastore.keys()
```

```py
['iceh_XXXX_XX.1mon',
 'iceh_XXXX_XX_daily.1day',
 'ocean_budget.1yr',
 'ocean_daily.1day',
 'ocean_grid.fx',
 'ocean_month.1mon',
 'ocean_scalar.1mon',
 'ocean_scalar_snapshot.1day']
```

The potential of the intake catalog can also be shown in this quick example (where we pretend that we have already searched for a specific datastore as part of NCI project `ik11`):
```py
import intake
from distributed import Client
import matplotlib.pyplot as plt
client = Client(threads_per_worker=1)
client.dashboard_link

# Load intake catalog and filter for specific datastore
catalog = intake.cat.access_nri
# Here you could include your search for a specific datastore. We assume that we were looking for this specific one:
esm_datastore = catalog["025deg_jra55_iaf_omip2_cycle1"]
esm_datastore_filtered = esm_datastore.search(variable="temp_global_ave")

# Load datastore
dataset_dict = esm_datastore_filtered.to_dataset_dict(progressbar=False)

# Plot a timeseries of global average temperatures
dataset_dict["ocean_scalar_snapshot.1day"]["temp_global_ave"].plot(label="daily")
dataset_dict["ocean_scalar.1mon"]["temp_global_ave"].plot(label="monthly")
plt.title("")
plt.legend()
plt.grid()
```

<div style="text-align: center;">
    <img src="../../assets/model_evaluation/intake_example.png" alt="Plot af timeseries of global average temperatures" width="50%"/>
</div>