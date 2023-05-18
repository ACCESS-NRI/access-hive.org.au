# Search for a model in the ACCESS-NRI intake Catalog

To have the huge amount of data from different experiments on the NCI storage at the palm of your hand, we provide a ("meta") catalog for you to query via python as part of the `#!python intake` package with our curated catalog plugin `#!python intake.cat.access_nri` {{ supported }}.

Take a look at this [Tutorial](https://github.com/ACCESS-NRI/access-nri-intake-catalog/blob/main/docs/how_tos/example_usage.ipynb) {{ supported }} to find out how to use our tool in detail.

``` py
# Impport packages for searching/loading/plotting
import intake
from distributed import Client
import matplotlib.pyplot as plt

# Load the ACCES-NRI catalog of available experiment data
access_nri_catalog = intake.cat.access_nri

# Perform your search for a filenames, models, variable etc.
my_search = access_nri_catalog.search(filename="ocean_scalar.*")

# Load the client that allows use load the data efficiently
client = Client(threads_per_worker=1)
client.dashboard_link

# Actually load the data
experiment_data = my_search.to_dataset_dict(progressbar=False)

# Et voilà, you have loaded the data and can start plotting
experiment_data["ocean_scalar_snapshot.1day"]["temp_global_ave"].plot(label="daily")
experiment_data["ocean_scalar.1mon"]["temp_global_ave"].plot(label="monthly")
_ = plt.legend()
```