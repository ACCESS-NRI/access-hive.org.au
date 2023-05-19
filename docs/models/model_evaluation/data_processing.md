# Data Processing Tools

{% include "call_contribute.md" %}


## Tools

### <div class="center-icons"> Kerchunk  {{ community }} </div>

[**Documentation**][kerchunk-doc] | 
[**Sources**][kerchunk-source]

Kerchunk is a library that provides a unified way to represent a variety of chunked, compressed data formats (e.g. NetCDF/HDF5, GRIB2, TIFF, …), allowing efficient access to the data from traditional file systems or cloud object storage. It also provides a flexible way to create virtual datasets from multiple files.

### <div class="center-icons"> CMOR3  {{ community }} </div>

*Climate Model Output Rewriter Version 3*

[**Documentation**][cmor3-doc] | 
[**Sources**][cmor3-source]

CMOR is used to produce CF-compliant netCDF files. The structure of the files created by CMOR and the metadata they contain fulfill the requirements of many of the climate community’s standard model experiments (which are referred to here as “MIPs” and include, for example, AMIP, PMIP, APE, and IPCC scenario runs).

### <div class="center-icons"> xMIP  {{ community }} </div>

[**Documentation**][xmip-doc] |
[**Tutorial on NCI**][xmip-tutorial] |
[**Sources**][xmip-source]

This package facilitates the cleaning, organization and interactive analysis of Model Intercomparison Projects (MIPs) within the Pangeo software stack.

### <div class="center-icons"> APP4 (The ACCESS Post Processor)  {{ community }} </div>

[**Documentation**][APP4-doc] | 
[**Sources**][APP4-source]

The APP4 is a CMORisation tool designed to convert ACCESS model output to ESGF-compliant formats, primarily for publication to CMIP6. The code was originally built for CMIP5, and was further developed for CMIP6-era activities.
Uses CMOR3 and files created with the CMIP6 data request to generate CF-compliant files according to the CMIP6 data standards.

### <div class="center-icons"> ACCESS-Archiver {{ community }} </div>

[**Documentation**][ACCESS-Archiver-doc] | 
[**Sources**][ACCESS-Archiver-source]

The ACCESS Archiver is designed to archive model output from ACCESS simulations. It's focus is to copy ACCESS model output from its initial location to a secondary location (typically from `/scratch` to `/g/data`), while converting UM files to netCDF, compressing MOM/CICE files, and culling restart files to 10-yearly. Saves 50-80% of storage space due to conversion and compression.

### <div class="center-icons"> Synda  {{ recommended }} </div>

synda is a command line tool to search and download files from the Earth System Grid Federation (ESGF) archive.

### <div class="center-icons"> FluxnetLSM  {{ community }} </div>

[**Citation** [@Ukkola2017]][fluxnetlsm-cite] |
[**Sources**][fluxnetlsm-source]

R package for post-processing FLUXNET datasets for use in land surface modelling. Performs quality control and data conversion of FLUXNET data and collated site metadata. Supports FLUXNET2015, La Thuile, OzFlux and ICOS data releases.

### <div class="center-icons"> xskillscore  {{ community }} </div>

[**Documentation**][xskillscore-doc] |
[**Sources**][xskillscore-source]

xskillscore is a Python library for computing a wide variety of skill metrics. Its typical application is to verify deterministic and probabilistic forecasts relative to observations.

## <div class="center-icons"> Analysis blogposts and tutorials  {{ community }} </div>

[Accessing NetCDF and GRIB file collections as cloud-native virtual datasets using Kerchunk, Peter March, Sep 2022](https://medium.com/pangeo/accessing-netcdf-and-grib-file-collections-as-cloud-native-virtual-datasets-using-kerchunk-625a2d0a9191)


[kerchunk-doc]: https://fsspec.github.io/kerchunk/
[kerchunk-source]: https://github.com/fsspec/kerchunk
[APP4-doc]: https://github.com/ACCESS-Hive/APP4
[APP4-source]: https://github.com/ACCESS-Hive/APP4
[ACCESS-Archiver-doc]: https://github.com/ACCESS-Hive/ACCESS-Archiver
[ACCESS-Archiver-source]: https://github.com/ACCESS-Hive/ACCESS-Archiver
[xskillscore-doc]: https://xskillscore.readthedocs.io/en/stable/
[xskillscore-source]: https://github.com/xarray-contrib/xskillscore
[fluxnetlsm-source]: https://github.com/aukkola/FluxnetLSM
[fluxnetlsm-cite]: https://gmd.copernicus.org/articles/10/3379/2017/
[cmor3-doc]: https://cmor.llnl.gov/
[cmor3-source]: https://github.com/PCMDI/cmor
[xmip-doc]: https://cmip6-preprocessing.readthedocs.io/en/latest/?badge=latest
[xmip-source]: https://github.com/jbusecke/xMIP
[xmip-tutorial]: https://github.com/coecms/xmip_nci
