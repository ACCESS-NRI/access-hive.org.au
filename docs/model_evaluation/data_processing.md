# Data Processing Tools

{% include "call_contribute.md" %}


## Tools

### Kerchunk  {{ community }}

[**Documentation**][kerchunk-doc] | 
[**Sources**][kerchunk-source]

Kerchunk is a library that provides a unified way to represent a variety of chunked, compressed data formats (e.g. NetCDF/HDF5, GRIB2, TIFF, …), allowing efficient access to the data from traditional file systems or cloud object storage. It also provides a flexible way to create virtual datasets from multiple files.

### Synda  {{ recommended }}

synda is a command line tool to search and download files from the Earth System Grid Federation (ESGF) archive.

### FluxnetLSM  {{ community }}

[**Citation** [@Ukkola2017]][fluxnetlsm-cite] |
[**Sources**][fluxnetlsm-source]

R package for post-processing FLUXNET datasets for use in land surface modelling. Performs quality control and data conversion of FLUXNET data and collated site metadata. Supports FLUXNET2015, La Thuile, OzFlux and ICOS data releases.

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

[fluxnetlsm-source]: https://github.com/aukkola/FluxnetLSM
[fluxnetlsm-cite]: https://gmd.copernicus.org/articles/10/3379/2017/
