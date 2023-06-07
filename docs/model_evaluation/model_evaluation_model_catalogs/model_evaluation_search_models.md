# Search for a model in the ACCESS-NRI intake Catalog

To have the huge amount of data from different experiments on the NCI storage at the palm of your hand, we provide a ("meta") catalog for you to query via python as part of the `#!python intake` package with our curated catalog plugin `#!python intake.cat.access_nri` {{ supported }}.

To use this catalog, you need access to NCI's Gadi. Check out our [Get Started with ACCESS at NCI](../model_evaluation_getting_started/index.md)  {{ supported }} guide on how to get access.

Once logged in to Gadi, you will need to add the `#!python access-nri-catalog` to your `#!python conda` environments and start an [ARE JupyterLab Session](https://are.nci.org.au/pun/sys/dashboard). Check out our [ACCESS-NRI Intake Catalog](https://github.com/ACCESS-NRI/access-nri-intake-catalog/blob/main/docs/getting_started/index.rst) guide {{ supported }} for the specific setup (note that you can only read in data from specific experiments if they are loaded through the *Storage* keyword).

Once your JupyterLab session started, you can access the `#!python intake` catalog to load the data. Take a look at this [Tutorial](https://github.com/ACCESS-NRI/access-nri-intake-catalog/blob/main/docs/how_tos/example_usage.ipynb) {{ supported }}.

``` py
# Impport packages for searching/loading/plotting
import intake
from distributed import Client
import matplotlib.pyplot as plt

# The search process is a 2-step one
# Comparable with searching for a book in a library:
# 1) You look for the right book/catalog sections
# 2) You look for the right book/catalog in the these sections

# Load the ACCES-NRI list of catalogs for available experiment data
# Similar to an overview of library section
access_nri_catalog_sections = intake.cat.access_nri

# Perform a search for names, models, variables etc.
example_section_search = access_nri_catalog_sections.search(name="cmip6_oi10")

# Once you are sufficiently happy with your search, you can load the "section"
catalog_sections = access_nri_catalog_sections.search(name="025deg_jra55_iaf_omip2_cycle1").to_source()
# and start looking for the right catalogs of interest
catalogs_of_interest = catalog_sections.search(filename="ocean_scalar.*")

# Call the client that allows use load the data efficiently
client = Client(threads_per_worker=1)
client.dashboard_link

# Actually load the data
experiment_data = catalogs_of_interest.to_dataset_dict(progressbar=False)

# Et voilà, you have loaded the data and can start plotting
experiment_data["ocean_scalar_snapshot.1day"]["temp_global_ave"].plot(label="daily")
experiment_data["ocean_scalar.1mon"]["temp_global_ave"].plot(label="monthly")
_ = plt.legend()
```