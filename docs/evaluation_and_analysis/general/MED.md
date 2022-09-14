
# Model Evaluation and Diagnostics tools

## [ESMValTool][esmvaltool-web]

**Domain**: Multi-domain

[**Documentation**][esmvaltool-doc] |
[**Tutorial**][esmvaltool-tutorial] | 
[**Source Code**][esmvaltool-source]

ESMValTool is a community-developed climate model diagnostics and evaluation software package, driven both by computational performance and scientific accuracy and reproducibility. ESMValTool is open to both users and developers, encouraging open exchange of diagnostic source code and evaluation results from the Coupled Model Intercomparison Project CMIP ensemble. For a comprehensive introduction to ESMValTool please visit our documentation page.

## [iLAMB][ilamb-web]

**Domain**: Land

[**Documentation**][ilamb-doc] |
[**Tutorials**][ilamb-tutorial] | 
[**Source Code**][ilamb-source]

The International Land Model Benchmarking (ILAMB) project is a model-data intercomparison and integration project designed to improve the performance of land models and, in parallel, improve the design of new measurement campaigns to reduce uncertainties associated with key land surface processes.

[**iLAMB-Data**][ilambdata-source]:
A collection of scripts used to format ILAMB data and community portal to make contributions

## [COSIMA Cookbook / Recipes][cosimacb-web]

**Domain**: Ocean

[**Documentation**][cosimacb-doc] |
[**Tutorial**][cosimacb-tutorial] | 
[**Cookbook Source Code**][cosimacb-source]
[**Cookbook Recipes**][cosimacb-recipes]

The COSIMA (Consortium for Ocean-Sea Ice Modelling in Australia) Cookbook / Recipes is a framework for analysing output from ocean-sea ice models. The focus is on the ACCESS-OM2 suite of models being developed and run by members of COSIMA: Consortium for Ocean-Sea Ice Modelling in Australia.

The framework is suited to analysing any MOM5/MOM6 output, as well as output from other models.

The cookbook is structured as follows:

- The cosima-cookbook repository includes boiler-plate code and scripts that underpin the cookbook, including a database for exploring and loading available data.
- The cosima-recipes repository includes example notebooks on which you can base your analyses.


## [METPLUS][metplus-web]

**Domain**: Atmosphere

[**Tutorial**][metplus-tutorial]

METplus is a verification framework that spans a wide range of temporal (warn-on-forecast to climate) and spatial (storm to global) scales.  It is intended to be extensible through additional capability developed by the community. The core components of the framework include MET, the associated database and display systems called METviewer and METexpress, and a suite of Python wrappers to provide low-level automation and examples, also called use-cases.  METplus will be a component of NOAA's Unified Forecast System (UFS) cross-cutting infrastructure as well as NCAR's System for Integrated Modeling of the Atmosphere (SIMA).

METplus is being actively developed by NCAR/Research Applications Laboratory (RAL), NOAA/Earth Systems Research Laboratories (ESRL), NOAA/Environmental Modeling Center (EMC), and is open to community contributions.

### METplus Components

Links to the code repository and documentation for each METplus component are provided below:

- METplus Wrappers: [sources][METplusWrappers-source] | [docs][METplusWrappers-doc]
- MET: [sources][MET-source] | [docs][MET-doc]
- METviewer:  [sources][METviewer-doc] | [docs][METviewer-source]
- METexpress: [sources][METexpress-doc] | [docs][METexpress-source]
- METplotpy: [sources][METplotpy-doc] | [docs][METplotpy-source]
- METcalcpy: [sources][METcalcpy-doc] | [docs][METcalcpy-source]
- METdatadb: [sources][METdatadb-doc] | [docs][METdatadb-source]


## [PCMDI Metrics Package (PMP)][pmp-doc]

[**Documentation**][pmp-doc] | 
[**Sources**][pmp-source]

The PMP is used to provide “quick-look” objective comparisons of Earth System Models (ESMs) with one another and available observations. Results are produced in the context of all model simulations contributed to CMIP6 and earlier CMIP phases. Currently, the comparisons emphasize metrics of large- to global-scale annual cycle and both tropical and extra-tropical modes of variability. Ongoing work in v1.x development branches include established statistics for ENSO, MJO, regional monsoons, and high frequency characteristics of simulated precipitation. 


# Data Processing Tools

## Kerchunk

[**Documentation**][kerchunk-doc] | 
[**Sources**][kerchunk-source]

Kerchunk is a library that provides a unified way to represent a variety of chunked, compressed data formats (e.g. NetCDF/HDF5, GRIB2, TIFF, …), allowing efficient access to the data from traditional file systems or cloud object storage. It also provides a flexible way to create virtual datasets from multiple files.

## Synda

synda is a command line tool to search and download files from the Earth System Grid Federation (ESGF) archive.

# Data Processing / Analysis blogposts and tutorials

[Accessing NetCDF and GRIB file collections as cloud-native virtual datasets using Kerchunk, Peter March, Sep 2022](https://medium.com/pangeo/accessing-netcdf-and-grib-file-collections-as-cloud-native-virtual-datasets-using-kerchunk-625a2d0a9191)

# Data Communities / Catalogs

## [FLUXNET][FLUXNET-web]

FLUXNET is an international “network of networks,” tying together regional networks of earth system scientists. FLUXNET scientists use the eddy covariance technique to measure the cycling of carbon, water, and energy between the biosphere and atmosphere. Scientists use these data to better understand ecosystem functioning, and to detect trends in climate, greenhouse gases, and air pollution.

### [OZFlux][OZFlux-web]

OzFlux is an ecosystem research network set up to provide Australian, New Zealand and global ecosystem modelling communities with consistent observations of energy, carbon and water exchange between the atmosphere and key Australian and New Zealand ecosystems.


[esmvaltool-web]: https://www.esmvaltool.org/
[esmvaltool-doc]: https://docs.esmvaltool.org/en/latest
[esmvaltool-tutorial]: https://esmvalgroup.github.io/ESMValTool_Tutorial/index.html
[esmvaltool-source]: https://github.com/ESMValGroup/ESMValTool#readme

[ilamb-web]: https://www.ilamb.org/
[ilamb-doc]: https://www.ilamb.org/doc/index.html
[ilamb-tutorial]: https://www.ilamb.org/doc/tutorial.html
[ilamb-source]: https://github.com/rubisco-sfa/ILAMB
[ilambdata-source]: https://github.com/rubisco-sfa/ILAMB

[cosimacb-web]: http://cosima.org.au/
[cosimacb-doc]: https://cosima-recipes.readthedocs.io/en/latest/
[cosimacb-tutorial]: https://cosima-recipes.readthedocs.io/en/latest/tutorials/index.html
[cosimacb-source]: https://github.com/COSIMA/cosima-cookbook
[cosimacb-recipes]: https://github.com/COSIMA/cosima-recipes

[metplus-web]: https://dtcenter.org/community-code/metplus
[metplus-tutorial]: https://dtcenter.org/community-code/metplus/online-tutorial
[METplusWrappers-source]: https://github.com/dtcenter/METplus
[METplusWrappers-doc]: https://metplus.readthedocs.io/en/latest/
[MET-source]: https://github.com/dtcenter/MET
[MET-doc]: https://met.readthedocs.io/en/latest/
[METviewer-doc]: https://github.com/dtcenter/METviewer
[METviewer-source]: https://github.com/dtcenter/METviewer
[METexpress-doc]: https://metexpress.readthedocs.io/en/v4.4.2/
[METexpress-source]: https://github.com/dtcenter/METexpress
[METplotpy-doc]: https://metplotpy.readthedocs.io/en/latest/
[METplotpy-source]: https://github.com/dtcenter/METplotpy
[METcalcpy-doc]: https://metcalcpy.readthedocs.io/en/latest/
[METcalcpy-source]: https://github.com/dtcenter/METcalcpy
[METdatadb-doc]: https://metdatadb.readthedocs.io/en/latest/
[METdatadb-source]: https://github.com/dtcenter/METdatadb

[pmp-doc]: http://pcmdi.github.io/pcmdi_metrics/index.html#
[pmp-source]: https://github.com/PCMDI/pcmdi_metrics

[mev-web]: https://modelevaluation.org/

[kerchunk-doc]: https://fsspec.github.io/kerchunk/
[kerchunk-source]:  https://github.com/fsspec/kerchunk

[OZFlux-web]: https://www.ozflux.org.au
[FLUXNET-web]: https://fluxnet.org/