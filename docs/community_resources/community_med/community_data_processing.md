# Community Processing Data Processing Tools

???+ warning "These resource collections are not actively supported by ACCESS-NRI"
    Here, we collate lists of useful resources for Model Evaluation and Diagnostics (MED). Contrary to the supported content of our [ACCESS-NRI Model Evaluation pages](../../model_evaluation/index.md), the information below is not actively support unless stated otherwise.

## Tools

### Kerchunk  

[**Documentation**][kerchunk-doc] | 
[**Sources**][kerchunk-source]

Kerchunk is a library that provides a unified way to represent a variety of chunked, compressed data formats (e.g. NetCDF/HDF5, GRIB2, TIFF, …), allowing efficient access to the data from traditional file systems or cloud object storage. It also provides a flexible way to create virtual datasets from multiple files.

### CMOR3  

*Climate Model Output Rewriter Version 3*

[**Documentation**][cmor3-doc] | 
[**Sources**][cmor3-source]

CMOR is used to produce CF-compliant netCDF files. The structure of the files created by CMOR and the metadata they contain fulfill the requirements of many of the climate community’s standard model experiments (which are referred to here as “MIPs” and include, for example, AMIP, PMIP, APE, and IPCC scenario runs).

### xMIP  

[**Documentation**][xmip-doc] |
[**Tutorial on NCI**][xmip-tutorial] |
[**Sources**][xmip-source]

This package facilitates the cleaning, organization and interactive analysis of Model Intercomparison Projects (MIPs) within the Pangeo software stack.

### APP4 (The ACCESS Post Processor)  

[**Documentation**][APP4-doc] | 
[**Sources**][APP4-source]

The APP4 is a CMORisation tool designed to convert ACCESS model output to ESGF-compliant formats, primarily for publication to CMIP6. The code was originally built for CMIP5, and was further developed for CMIP6-era activities.
Uses CMOR3 and files created with the CMIP6 data request to generate CF-compliant files according to the CMIP6 data standards.

### ACCESS-Archiver 

[**Documentation**][ACCESS-Archiver-doc] | 
[**Sources**][ACCESS-Archiver-source]

The ACCESS Archiver is designed to archive model output from ACCESS simulations. It's focus is to copy ACCESS model output from its initial location to a secondary location (typically from `/scratch` to `/g/data`), while converting UM files to netCDF, compressing MOM/CICE files, and culling restart files to 10-yearly. Saves 50-80% of storage space due to conversion and compression.

### Synda  

synda is a command line tool to search and download files from the Earth System Grid Federation (ESGF) archive.

### FluxnetLSM  

[**Citation** [@Ukkola2017]][fluxnetlsm-cite] |
[**Sources**][fluxnetlsm-source]

R package for post-processing FLUXNET datasets for use in land surface modelling. Performs quality control and data conversion of FLUXNET data and collated site metadata. Supports FLUXNET2015, La Thuile, OzFlux and ICOS data releases.

### Metpy  

https://unidata.github.io/MetPy/latest/examples/formats/index.html

[**Documentation**][metpy_docu] |
[**Sources**][metpy_docu-source]

MetPy is a collection of tools in Python for reading, visualizing, and performing calculations with weather data. MetPy supports Python >= 3.8 and is freely available under a permissive open source license.

Format types are: GINI Water Vapor Imagery, NEXRAD Level 3 File, and NEXRAD Level 2 File.

### xskillscore  

[**Documentation**][xskillscore-doc] |
[**Sources**][xskillscore-source]

xskillscore is a Python library for computing a wide variety of skill metrics. Its typical application is to verify deterministic and probabilistic forecasts relative to observations.

## Analysis blogposts and tutorials  

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
[metpy_docu]: https://unidata.github.io/MetPy/latest/examples/formats/index.html
[metpy_docu-source]: https://github.com/Unidata/MetPy
[cmor3-doc]: https://cmor.llnl.gov/
[cmor3-source]: https://github.com/PCMDI/cmor
[xmip-doc]: https://cmip6-preprocessing.readthedocs.io/en/latest/?badge=latest
[xmip-source]: https://github.com/jbusecke/xMIP
[xmip-tutorial]: https://github.com/coecms/xmip_nci
