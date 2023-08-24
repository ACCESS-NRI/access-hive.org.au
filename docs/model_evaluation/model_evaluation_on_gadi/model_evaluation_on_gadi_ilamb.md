# ILAMB and IOMB on Gadi at NCI

## What are ILAMB and IOMB?

`ilamb` is a Python framework for International Land Model Benchmarking (ILAMB) and International Ocean Model Benchmark (IOMB). In brief, `ilamb` can be used to quantitatively compare a defined set of observable variables with a number of land and ocean models.

???+ warning "Support Level: Supported on <i>Gadi</i>, but not owned by ACCESS-NRI"
    <!-- Who develped the tool? -->
    ILAMB/IOMB is a community-developed climate model diagnostics and evaluation software package.
    <!-- Code ownership and support -->
    ACCESS-NRI does not own the code of ILAMB/IOMB, but actively supports the use of ILAMB/IOMB on <i>Gadi</i>.
    ILAMB development is primarily performed by the <a href="https://www.bgc-feedbacks.org/" target="_blank">RUBISCO</a> Science Focus Area and supported by the <a href="https://climatemodeling.science.energy.gov/program-area/regional-global-model-analysis" target="_blank">RGMA</a> Activity of the <a href="https://science.osti.gov/ber/Research/eessd" target="_blank">EESSD</a> division of the <a href="https://science.osti.gov/ber" target="_blank">BER</a> program in the United States Department of Energy’s Office of Science.
    ACCESS-NRI provides access to the latest version of ILAMB/IOMB via the `xp65` access-med conda environment deployed on <i>Gadi</i>.

This documentation is tailored to using the tool within the NCI infrastructure and designed to supplement, rather than replace, the official documentation. We encourage users to read the <a href="https://www.ilamb.org/doc/" target="_blank">ILAMB documentation</a> and its <a href="https://www.ilamb.org/doc/tutorial.html" target="_blank">Tutorials</a>.

## Using ILAMB and IOMB on Gadi

`ilamb` is provided through both the `xp65` and `hh5` code projects on <i>Gadi</i> at the National Computational Infrastructure. To use `ilamb` through this infrastructure, you need to have an NCI account and join the projects. See our [Getting Started Guide](../../getting_started/index.md).

You will find the information needed to run ILAMB and IOMB on Gadi in our documentation:

<div class="card-container">
    <a href="https://ilamb-workflow.readthedocs.io/en/latest/?badge=latest" class="vertical-card aspect-ratio1to1" target="_blank">
        <div class="vertical-card-image-container">
            <img src="../../../assets/model_evaluation/logo_ilamb.png" alt="ILAMB on Gadi" class="img-contain"></img>
        </div>
        <div class="vertical-card-text-container bold ">Documentation for ILAMB on Gadi</div>
    </a>
</div>

To run `ilamb`, you need to execute the command `ilamb-run` with a number of arguments/files:
```py
ilamb-run --config config.cfg --model_setup model_setup.txt --regions regions.txt
```

- `config.cfg` defines which observables and observational datasets will be compared
- `model_setup.txt` defines the paths of the models that will be compared
- `regions.txt` defines the regions (like `global` or `australia`) that will be compared.

While you can define these files yourself, ACCESS-NRI is providing the files and tools to get your model paths sorted and perform computations on Gadi.

All you need to do is figure out which observations and models you would like to compare: ACCESS-NRI, and NCI as the host, are providing replicas of the ILAMB and IOMB observational data sets through the NCI project `ct11`. Thanks to NCI as national data repository, you can easily get access to a large amount of model outputs on <i>Gadi</i>, including ACCESS mdoel output, and compare it to observations. You can read on how to find more observational data in our [Observational Data Section](../model_evaluation_observational_catalogs.md) and how to find model outputs in our [Model Data Section](../model_evaluation_model_catalogs/index.md).

If you want to learn how to adjust the `ilamb` setup, you can also read the official <a href="https://www.ilamb.org/doc/" target="_blank">ILAMB documentation</a> and its <a href="https://www.ilamb.org/doc/tutorial.html" target="_blank">Tutorial</a>.

## Showcases: CMIP6 comparisons and ACCESS ESM1.5 benchmarking

ACCESS-NRI is maintaining a collection of benchmark comparisons for the community, such as the comparison of Coupled Model Intercomparison Project (CMIP) like

- <a href="http://130.56.247.78/build_oi10_2/index.html" target="_blank">CMIP5 and CMIP6 Land Models</a>,  
- <a href="http://130.56.247.78/build_al33/index.html" target="_blank">CMIP6 Land Models</a>,  
- <a href="http://130.56.247.78/build_rr3/index.html" target="_blank">Offline CMIP6 Models</a>, and  
- <a href="http://130.56.247.78/build_iomb/index.html" target="_blank">CMIP5 and CMIP6 Ocean Models</a>.

For our showcase, however, we are comparing the ACCESS Earth System Model version 1.5 that is supported by ACCESS-NRI with two other Earth System Models:

- <a href="https://research.csiro.au/access/about/esm1-5/" target="_blank">ACCESS-ESM1.5 (ACCESS Earth System Model version 1.5)</a>,
- <a href="https://gmd.copernicus.org/articles/13/977/2020/" target="_blank">BCC ESM1 (Beijing Climate Center Earth System Model version 1)</a>, and
- <a href="https://gmd.copernicus.org/articles/12/4823/2019/gmd-12-4823-2019.html" target="_blank">CanESM5 (Canadian Earth System Model version 5)</a>

We have performed a large amount of benchmark comparisons that were defined in the configuration file. We have organised the comparison of variables under different sections, like the <i>Hydrology Cycle</i>. For different variables, like the gross primary productivity `gpp`, we can compare to one or more datasets, like the gross primary productivity measurements of <a href="https://fluxnet.org/data/fluxnet2015-dataset/" target="_blank">FLUXNET2015</a>. Clicking on a row of the table will expand it to reveal the underlying datasets used. In the below table, the colormap extends from best values in purple to worse data in orange.

<p align="center"><img align="center" width="50%" src="../../../assets/model_evaluation/ilamb_output_3.png" alt="Starting side of ilamb output"></p>  

Clicking on one of these datasets, for example CERESed4.1, will take you to an interactive and quantitative comparison page for Albedo measurements of the <a href="https://ceres.larc.nasa.gov" target="_blank">Clouds and the Earth’s Radiant Energy System (CERES) project</a>:

<p align="center"><img align="center" width="100%" src="../../../assets/model_evaluation/ilamb_loop.gif" alt="Comparison of CERES Albedo measurements with model output from ACCESS ESM1.5, BBC ESM1, and CanESM5"></p>
