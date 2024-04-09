# Data Format

<!-- For this content, I have used a lot of text from this website: https://pro.arcgis.com/en/pro-app/latest/help/data/multidimensional/fundamentals-of-netcdf-data-storage.htm -->

As comparable model outputs simplify Model evaluation, ACCESS-NRI supports Coupled Model Intercomparison Projects (CMIP) and the use of common data formats and variables.

## Data Standards
Abiding by certain data standards allows for sharing, translating where required and the use in evaluation. To facilitate this, there are <a href="http://cfconventions.org" target="_blank">conventions for Climate and Forecast metadata</a>. These are designed to promote the processing and sharing of <i>NetCDF</i> files. The conventions define metadata that provide a definitive description of what the data in each variable represents, and the spatial and temporal properties of the data. 

Metadata, which is typically described as information about the data, enables users of data from different sources to decide which quantities are comparable. This facilitates building applications with powerful extraction, regridding and display capabilities.

The process of translating data to comply with CF conventions is referred to as to <i>CMORize</i> data. CMOR stands for <i>Climate Model Output Rewriter</i> which comes from a software library from <a href="https://pcmdi.llnl.gov/software/" target="_blank">PCMDI (Program for Climate Model Diagnosis & Intercomparison)</a>.

## Network Common Data Format (NetCDF)

Numerous organisations and scientific groups worldwide have adopted a file format called <i><a href="https://www.unidata.ucar.edu/software/netcdf/" target="_blank">NetCDF</a></i> as a standard way to store multidimensional scientific data.

<i>NetCDF</i>, which has the file extension <i>*.nc</i>, is a self-describing, machine-independent data format of array-oriented scientific data.

<ul>
<li><b>Self-describing</b>
    <br>
    <i>*.nc</i> files include not only the data, but also a header with metadata that describes the data layout.

<li><b>Machine-independent</b>
    <br>
    <i>*.nc</i> files can be accessed by computers with different ways of storing integers, characters and floating-point numbers.

<li><b>Array-oriented</b>
    <br>
    <i>*.nc</i> data typically spans multiple dimensions with the same lengths (e.g., latitude, longitude and time) and variables (e.g., temperature and humidity), which are stored in arrays.
    <br>
    <br>
    <div style="text-align: center;">
        <img src="../../../assets/model_evaluation/netcdf_1.png" alt="Schematic of a NetCDF file with data (temperature and pressure as variables stored over the dimensions latitude, longitude, and time) and metadata" title="Picture from https://web.itu.edu.tr/~tokerem/netcdf.html" width="75%"/>
    </div>
</ul>

Data in a <i>NetCDF</i> file is stored in the form of arrays, where each <i>NetCDF</i> dimension has a name and a length.
<br>
For example, temperature variation over time at a fixed location is stored as a one-dimensional array, whereas temperature over a region (i.e. varying location) at a fixed time is stored as a two-dimensional array. Thus, three-dimensional (3D) data would be temperature varying with time over a region, and four-dimensional (4D) data would be temperature varying with time over a region with varying altitude.

## Loading NetCDF files

There are many ways of reading files, though a common way is via the Python package *xarray*. 
<br>
For more information, refer to a <a href="https://docs.xarray.dev/en/stable/getting-started-guide/quick-overview.html" target="_blank">quick overview of xarray</a> and <a href="https://tutorial.xarray.dev/intro.html" target="_blank">xarray tutorials</a>.

*xarray* is a python package avaliable through the conda environment on NCI. 
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

## Other Data formats

There are of course other formats of data that you might come across including grid, um, pp files for models and txt, ascii, dat, tiff for raw observations. For comparisons and evaluations these would be formatted with various extract, translate, load (ETL) methods.

<h6>References</h6>
<ul class="references">
    <li>
        <a href = "https://pro.arcgis.com/en/pro-app/latest/help/data/multidimensional/fundamentals-of-netcdf-data-storage.htm" target="_blank">https://pro.arcgis.com/en/pro-app/latest/help/data/multidimensional/fundamentals-of-netcdf-data-storage.htm</a>
    </li>