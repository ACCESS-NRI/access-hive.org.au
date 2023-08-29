# Model Output: Formats and Variables

<!-- For this content, I have used a lot of text from this website: https://pro.arcgis.com/en/pro-app/latest/help/data/multidimensional/fundamentals-of-netcdf-data-storage.htm -->

For climate modelling, we need to store multidimensional scientific data (variables) such as temperature, humidity, pressure, wind speed and direction.

<div style="text-align: center;">
     <img src="../../../assets/model_evaluation/netcdf_example.png" alt="Example of a three-dimensional data array" title="Picture from https://pro.arcgis.com/en/pro-app/latest/tool-reference/geostatistical-analyst/ga-layer-3d-to-netcdf.htm" width="25%"/>
 </div>

As comparable model outputs simplify Model evaluation, ACCESS-NRI supports Coupled Model Intercomparison Projects (CMIP) and the use of common data formats and variables.

## Network Common Data Format (NetCDF)

Numerous organisations and scientific groups worldwide have adopted a file format called <i><a href="https://www.unidata.ucar.edu/software/netcdf/" target="_blank">NetCDF</a></i> as a standard way to store multidimensional scientific data.

<i>NetCDF</i>, which has the file extension `*.nc`, is a self-describing, machine-independent data format of array-oriented scientific data.

<ul>
<li><b>Self-describing</b>
    <br>
    <code>*.nc</code> files include not only the data itself, but also a <i>header</i> with <i>metadata</i> that describes the data layout.

<li><b>Machine-independent</b>
    <br>
    <code>*.nc</code> files can be accessed by computers with different ways of storing integers, characters and floating-point numbers.

<li><b>Array-oriented</b>
    <br>
    <code>*.nc</code> data typically spans multiple dimensions with the same lengths (e.g., latitude, longitude and time) and variables, such as temperature or humidity, which are stored in arrays.
    <br>
    <br>
    <div style="text-align: center;">
        <img src="../../../assets/model_evaluation/netcdf_1.png" alt="Schematic of a NetCDF file with data (temperature and pressure as variables stored over the dimensions latitude, longitude, and time) and metadata" title="Picture from https://web.itu.edu.tr/~tokerem/netcdf.html" width="75%"/>
    </div>
</ul>

### NetCDF metadata

<i>Metadata</i>, which is typically described as <i>information about the data</i>, enables users of data from different sources to decide which quantities are comparable. This facilitates building applications with powerful extraction, regridding and display capabilities.

To facilitate this process, there are <a href="http://cfconventions.org" target="_blank">conventions for Climate and Forecast metadata</a>. These are designed to promote the processing and sharing of <i>NetCDF</i> files. The conventions define metadata that provide a definitive description of what the data in each variable represents, and the spatial and temporal properties of the data. 

### NetCDF data and variables

Data in a <i>netCDF</i> file is stored in the form of arrays, where each <i>netCDF</i> dimension has a name and a length.
<br>
For example, temperature variation over time at a fixed location is stored as a one-dimensional array, whereas temperature over a region (i.e. varying location) at a fixed time is stored as a two-dimensional array. Thus, three-dimensional (3D) data would be temperature varying with time over a region, and four-dimensional (4D) data would be temperature varying with time over a region with varying altitude.

## Common variables

Variables used in climate modelling can differ in terms of naming conventions, units, etc. While this may be for historical reasons, the use of common variables is key not only for ease and compatibilty when working with the data, but also to unite the climate modelling community. Hence, there are collated lists of different widely used variable formats, such as:

<!-- We have created a prototype of markdown files with variable tables that can be queried via jquery -->
<!-- Because they were not ready for quick searches (jquery with extended html tables is slow), we did not include them in the Legacy Relase (July/August 2023). -->
<!-- The code and markdown files are hosted on a github repository, however: https://github.com/svenbuder/access_model_variables -->

### CMIP6 variables
You can search the extensive list of Coupled Model Intercomparison Project phase 6 <a href="https://clipc-services.ceda.ac.uk/dreq/index/var.html" target="_blank">(CMIP6) variables</a> by either the MIP variable name or associated CF standard name.

### ERA5 variables
ERA5 is the fifth generation European Centre for Medium-Range Weather Forecasts (ECMWF) atmospheric reanalysis of the global climate, which spans a period from January 1940 to present. ERA5 provides hourly estimates of a significant number of atmospheric, land and oceanic climate variables.
<br>
<br>
A full list of ERA5 parameters is available on the <a href="https://codes.ecmwf.int/grib/param-db/" target="_blank">ECMWF database</a>. It covers both the <a href="https://confluence.ecmwf.int/display/CKB/ERA5%3A+data+documentation#ERA5:datadocumentation-Parameterlistings" target="_blank">ERA5 parameter listings</a> as well as the <a href="https://confluence.ecmwf.int/display/CKB/ERA5-Land%3A+data+documentation#ERA5Land:datadocumentation-parameterlistingParameterlistings" target="_blank">ERA5-LAND parameter listings</a>.

## Loading NetCDF files

Our Model Evaluation and Diagnostics tools are based on the reading and storing of files via the Python package `xarray`. 
<br>
For more information, refer to a <a href="https://docs.xarray.dev/en/stable/getting-started-guide/quick-overview.html" target="_blank">quick overview of xarray</a> and <a href="https://tutorial.xarray.dev/intro.html" target="_blank">xarray tutorials</a>.

`xarray` is a python package avaliable through the `conda` environment on NCI. 
<br>
Hence, you can either use it directly (as shown below) or through the dataset capabilities of the [ACCESS-NRI Model Intake Catalog Tool](../../model_evaluation_model_catalogs/index.md).

```
import xarray as xr
dataset = xr.open_dataset("example.nc")
dataset
```

<div style="text-align: center;">
     <img src="../../../assets/model_evaluation/netcdf_example.jpg" alt="Example of an actual NetCDF file with data (precipitation/rainfall over the dimensions latitude, longitude, and time) and metadata." title="Picture from https://pro.arcgis.com/en/pro-app/latest/help/data/multidimensional/fundamentals-of-netcdf-data-storage.html" width="60%"/>
 </div>
