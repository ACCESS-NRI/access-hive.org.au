# Data Processing Tools

{% include "call_contribute.md" %}


## Tools

### Kerchunk  {{ community }}

[**Documentation**][kerchunk-doc] | 
[**Sources**][kerchunk-source]

Kerchunk is a library that provides a unified way to represent a variety of chunked, compressed data formats (e.g. NetCDF/HDF5, GRIB2, TIFF, …), allowing efficient access to the data from traditional file systems or cloud object storage. It also provides a flexible way to create virtual datasets from multiple files.

### CMOR3  {{ community }}

*Climate Model Output Rewriter Version 3*

[**Documentation**][cmor3-doc] | 
[**Sources**][cmor3-source]

CMOR is used to produce CF-compliant netCDF files. The structure of the files created by CMOR and the metadata they contain fulfill the requirements of many of the climate community’s standard model experiments (which are referred to here as “MIPs” and include, for example, AMIP, PMIP, APE, and IPCC scenario runs).

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

[xskillscore-doc]: https://xskillscore.readthedocs.io/en/stable/
[xskillscore-source]: https://github.com/xarray-contrib/xskillscore

[cmor3-doc]: https://cmor.llnl.gov/
[cmor3-source]: https://github.com/PCMDI/cmor