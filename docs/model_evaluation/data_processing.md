# Data Processing Tools

{% include "call_contribute.md" %}


## Tools

### Kerchunk  {{ community }}

[**Documentation**][kerchunk-doc] | 
[**Sources**][kerchunk-source]

Kerchunk is a library that provides a unified way to represent a variety of chunked, compressed data formats (e.g. NetCDF/HDF5, GRIB2, TIFF, …), allowing efficient access to the data from traditional file systems or cloud object storage. It also provides a flexible way to create virtual datasets from multiple files.

### APP4 (The ACCESS Post Processor)  {{ community }}

[**Documentation**][APP4-doc] | 
[**Sources**][APP4-source]

The APP4 is a CMORisation tool designed to convert ACCESS model output to ESGF-compliant formats, primarily for publication to CMIP6. The code was originally built for CMIP5, and was further developed for CMIP6-era activities.
Uses CMOR3 and files created with the CMIP6 data request to generate CF-compliant files according to the CMIP6 data standards.

### ACCESS-Archiver {{ community }}

[**Documentation**][ACCESS-Archiver-doc] | 
[**Sources**][ACCESS-Archiver-source]

The ACCESS Archiver is designed to archive model output from ACCESS simulations. It's focus is to copy ACCESS model output from its initial location to a secondary location (typically from `/scratch` to `/g/data`), while converting UM files to netCDF, compressing MOM/CICE files, and culling restart files to 10-yearly. Saves 50-80% of storage space due to conversion and compression.

### Synda  {{ recommended }}

synda is a command line tool to search and download files from the Earth System Grid Federation (ESGF) archive.

### xskillscore  {{ community }}

[**Documentation**][xskillscore-doc] |
[**Sources**][xskillscore-source]

xskillscore is a Python library for computing a wide variety of skill metrics. Its typical application is to verify deterministic and probabilistic forecasts relative to observations.


## Analysis blogposts and tutorials  {{ community }}

[Accessing NetCDF and GRIB file collections as cloud-native virtual datasets using Kerchunk, Peter March, Sep 2022](https://medium.com/pangeo/accessing-netcdf-and-grib-file-collections-as-cloud-native-virtual-datasets-using-kerchunk-625a2d0a9191)


[kerchunk-doc]: https://fsspec.github.io/kerchunk/
[kerchunk-source]: https://github.com/fsspec/kerchunk

[APP4-doc]: https://github.com/ACCESS-Hive/APP4
[APP4-source]: https://github.com/ACCESS-Hive/APP4

[ACCESS-Archiver-doc]: https://github.com/ACCESS-Hive/ACCESS-Archiver
[ACCESS-Archiver-source]: https://github.com/ACCESS-Hive/ACCESS-Archiver

[xskillscore-doc]: https://xskillscore.readthedocs.io/en/stable/
[xskillscore-source]: https://github.com/xarray-contrib/xskillscore
