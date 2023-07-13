# Community Model Evaluation and Diagnostics (MED) Recipe Gallery

<!-- {% include "call_contribute.md" %} -->

We are trying to ingest more and more model evaluation and diagnostics recipes in your currated [recipe gallery on this website](../model_evaluation/model_evaluation_recipe_gallery.md) . While this is a continous effort, this site is intented for a list of model evaluation and diagnostics recipes that are not (yet) ingested but may be interesting for the community :

<table>
<tr>
<td width="25%">
    <div align='center' width="100%">
    <h3>MED Recipe</h3>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
    <h3>Components</h3>
    </div>
</td>
<td width="60%">
    <div align='center' width="100%" >
    <h3>Description</h3>
    </div>
</td>
</tr>

<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://www.esmvaltool.org/">ESMValTool  <br>(Earth System Model EValuation Tool)</a>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon ATMOSPHERE (Title).png" />
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon OCEAN (Title).png" />
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon SEA ICE (Title).png" />
    </div>
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://docs.esmvaltool.org/en/latest">Documentation</a> |
        <a href="https://esmvalgroup.github.io/ESMValTool_Tutorial/index.html">Tutorial</a> |
        <a href="https://github.com/ESMValGroup/ESMValTool#readme">Source Code</a>
        <!-- ESMValTool is a community-developed climate model diagnostics and evaluation software package, driven both by computational performance and scientific accuracy and reproducibility. ESMValTool is open to both users and developers, encouraging open exchange of diagnostic source code and evaluation results from the Coupled Model Intercomparison Project CMIP ensemble. For a comprehensive introduction to ESMValTool please visit our documentation page. -->
    </div>
</td>
</tr>

<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="http://cosima.org.au/">COSIMA Cookbook / Recipes <br>(Consortium for Ocean-Sea Ice Modelling in Australia)</a>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon OCEAN (Title).png" />
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon SEA ICE (Title).png" />
    </div>
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://cosima-recipes.readthedocs.io/en/latest/">Documentation</a> |
        <a href="https://cosima-recipes.readthedocs.io/en/latest/tutorials/index.html">Tutorial</a> |
        <a href="https://github.com/COSIMA/cosima-cookbook">Source Code</a> |
        <a href="https://github.com/COSIMA/cosima-recipes">Recipes</a>
        <!-- The COSIMA (Consortium for Ocean-Sea Ice Modelling in Australia) Cookbook / Recipes is a framework for analysing output from ocean-sea ice models. The focus is on the ACCESS-OM2 suite of models being developed and run by members of COSIMA: Consortium for Ocean-Sea Ice Modelling in Australia.
        The framework is suited for analysing any MOM5/MOM6 output, as well as output from other models.
        The cookbook is structured as follows:
        - [cosima-cookbook][cosimacb-source]: includes boiler-plate code and scripts that underpin the cookbook, including a database for exploring and loading available data.
        - [cosima-recipes][cosimacb-recipes]: includes example notebooks that illustrate how users can use the cookbook to read output from particular experiments and, further, they showcase simple and elaborate analyses of model output.
        New users are urged to go throught the [tutorials][cosimacb-tutorial] in the cosima recipes and then browse through the [documented examples][cosimacb-documentedexamples].
        As a rule of thumb, users who are not interested in data management and, e.g., are only interested in using/analysing model output should never be bothered looking into the `cosima-cookbook` repository. `cosima-cookbook` is developed and maintained and will just *simply work out of the box*. `:)` -->
    </div>
</td>
</tr>

<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://www.ilamb.org/">iLAMB <br>(international Land Model Benchmarking)</a>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon LAND SURFACE (Title).png" />
    </div>
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://www.ilamb.org/doc/index.html">Documentation</a> |
        <a href="https://www.ilamb.org/doc/tutorial.html">Tutorial</a> |
        <a href="https://github.com/rubisco-sfa/ILAMB">Source Code</a>
        <!-- The International Land Model Benchmarking (ILAMB) project is a model-data intercomparison and integration project designed to improve the performance of land models and, in parallel, improve the design of new measurement campaigns to reduce uncertainties associated with key land surface processes. -->
    </div>
</td>
</tr>

<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://cmec.llnl.gov/iomb.html">iOMB <br>(international Ocean Model Benchmarking)</a>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon BGC OCEAN (Title).png" />
    </div>
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://www.ilamb.org/doc/index.html">Documentation</a> |
        <a href="https://www.ilamb.org/doc/tutorial.html">Tutorial</a> |
        <a href="https://github.com/rubisco-sfa/ILAMB">Source Code</a>
        <!-- The International Ocean Model Benchmarking (IOMB) Package is used to evaluate marine biogeochemistry models through comparisons with observations. IOMB provides a variety of in-depth diagnostics of marine biogeochemical model variables on annual and inter-annual time scales. It compares a growing number of variables with site-based, transect, regional, and global observational data sets, and scores model performance based on a combination of bias, RMSE, and seasonal cycle metrics. IOMB is useful for the detailed exploration of ocean biogeochemical model responses and provides an interactive interface designed to enable the user to more rapidly understand the underlying drivers of those responses. IOMB was first applied to evaluate uncertainties associated with marine aerosol precursors [(Ogunro et al., 2018)](https://www.mdpi.com/2073-4433/9/5/184).
IOMB uses the same code base as the International Land Model Benchmarking (ILAMB) Package, so some of the links above refer to ILAMB instead of IOMB. -->
    </div>
</td>
</tr>

</tr>
<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://dtcenter.org/community-code/metplus">METPlus <br>(Model Evaluation Tool Plus)</a>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon ATMOSPHERE (Title).png" />
    </div>
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://dtcenter.org/community-code/metplus/online-tutorial">Tutorial</a> |
        <a href="https://journals.ametsoc.org/view/journals/bams/102/4/BAMS-D-19-0093.1.xml">Paper</a>
        <!-- METplus is a verification framework that spans a wide range of temporal (warn-on-forecast to climate) and spatial (storm to global) scales.  It is intended to be extensible through additional capability developed by the community. The core components of the framework include MET, the associated database and display systems called METviewer and METexpress, and a suite of Python wrappers to provide low-level automation and examples, also called use-cases.  METplus will be a component of NOAA's Unified Forecast System (UFS) cross-cutting infrastructure as well as NCAR's System for Integrated Modeling of the Atmosphere (SIMA).
        METplus is being actively developed by NCAR/Research Applications Laboratory (RAL), NOAA/Earth Systems Research Laboratories (ESRL), NOAA/Environmental Modeling Center (EMC), and is open to community contributions.
        ### METplus Components  
        Links to the code repository and documentation for each METplus component are provided below:
        - METplus Wrappers: [sources][METplusWrappers-source] | [docs][METplusWrappers-doc]
        - MET: [sources][MET-source] | [docs][MET-doc]
        - METviewer:  [sources][METviewer-doc] | [docs][METviewer-source]
        - METexpress: [sources][METexpress-doc] | [docs][METexpress-source]
        - METplotpy: [sources][METplotpy-doc] | [docs][METplotpy-source]
        - METcalcpy: [sources][METcalcpy-doc] | [docs][METcalcpy-source]
        - METdatadb: [sources][METdatadb-doc] | [docs][METdatadb-source] -->
        <!-- [METplusWrappers-source]: https://github.com/dtcenter/METplus
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
        [METdatadb-source]: https://github.com/dtcenter/METdatadb -->
    </div>
</td>
</tr>

<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="http://pcmdi.github.io/pcmdi_metrics/index.html#">PMP <br>(PCMDI Metrics Package)</a>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon ATMOSPHERE (Title).png" />
    </div>
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="http://pcmdi.github.io/pcmdi_metrics/index.html#">Documentation</a> |
        <a href="https://github.com/PCMDI/pcmdi_metrics">Source Code</a>
        <!-- The PMP is used to provide “quick-look” objective comparisons of Earth System Models (ESMs) with one another and available observations. Results are produced in the context of all model simulations contributed to CMIP6 and earlier CMIP phases. Currently, the comparisons emphasize metrics of large- to global-scale annual cycle and both tropical and extra-tropical modes of variability. Ongoing work in v1.x development branches include established statistics for ENSO, MJO, regional monsoons, and high frequency characteristics of simulated precipitation. -->
    </div>
</td>
</tr>

<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://climpred.readthedocs.io/en/stable/index.html">climpred </a>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon ATMOSPHERE (Title).png" />
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon LAND SURFACE (Title).png" />
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon BGC OCEAN (Title).png" />
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon OCEAN (Title).png" />
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon SEA ICE (Title).png" />
    </div>
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://climpred.readthedocs.io/en/stable/index.html">Documentation</a> |
        <a href="https://climpred.readthedocs.io/en/stable/setting-up-data.html">Tutorial</a> |
        <a href="https://github.com/pangeo-data/climpred">Source Code</a> |
        <a href="https://joss.theoj.org/papers/10.21105/joss.02781">Paper</a>
        <!-- Climpred aims to offer a comprehensive set of analysis tools for assessing the quality of dynamical forecasts relative to verification products (e.g., observations, reanalysis products, control simulations). Climpred supports a broad range of temporal scales of prediction, spanning the weather, subseasonal-to-seasonal (S2S), and seasonal-to-decadal (S2D) communities. -->
    </div>
</td>
</tr>

<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://freva.gitlab-pages.dkrz.de/evaluation_system/sphinx_docs/index.html">FREVA <br>(Free Evaluation System Framework)</a>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon ATMOSPHERE (Title).png" />
    </div>
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://freva.gitlab-pages.dkrz.de/evaluation_system/sphinx_docs/index.html">Documentation</a> |
        <a href="https://gitlab.dkrz.de/freva/evaluation_system">Source Code</a>
        <!-- Freva, the free evaluation system framework, is a data search and analysis platform developed by the atmospheric science community for the atmospheric science community. With help of Freva researchers can:
        - quickly and intuitively search for data stored at typical data centers that host many datasets.
        - create a common interface for user defined data analysis tools.
        - apply data analysis tools in a reproducible manner. -->
    </div>
</td>
</tr>

<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://cmec.llnl.gov/teca.html">TECA <br>(Toolkit for Extremes Climate Analysis)</a>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon ATMOSPHERE (Title).png" />
    </div>
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://teca.readthedocs.io/en/latest">Documentation</a> |
        <a href="https://github.com/LBL-EESA/TECA">Tutorial</a> |
        <a href="https://sourceforge.net/p/teca/TECA_tutorials/HEAD/tree">Source Code</a>
        <!-- TECA is a general purpose tool for detecting discrete events in climate model output. It leverages a map-reduce framework for efficient parallelization at large scales (order 10K+ cores). Currently, TECA contains detection algorithms for tropical cyclones, atmospheric rivers, and extratropical cyclones; and plans are underway to implement algorithms for mesoscale convective complexes, African Easterly waves, atmospheric blocks, and fronts. -->
    </div>
</td>
</tr>


<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://monet-arl.readthedocs.io/en/stable/#">MONET <br>(Model and ObservatioN Evaluation Toolkit)</a>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon ATMOSPHERE (Title).png" />
    </div>
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://monet-arl.readthedocs.io/en/stable/#">Documentation</a> |
        <a href="https://monet-arl.readthedocs.io/en/stable/tutorial.html">Tutorial</a> |
        <a href="https://github.com/noaa-oar-arl/monet">Source Code</a> |
        <a href="https://www.mdpi.com/2073-4433/8/11/210">Paper</a>
        <!-- MONET is an open source project and Python package that aims to create a common platform for atmospheric composition data analysis for weather and air quality models.
        MONET was developed to evaluate the Community Multiscale Air Quality Model (CMAQ) for the NOAA National Air Quality Forecast Capability (NAQFC) modeling system. MONET is designed to be a modularized Python package for (1) pairing model output to observational data in space and time; (2) leveraging the Pandas Python package for easy searching and grouping; and (3) analyzing and visualizing data. This process introduces a convenient method for evaluating model output. -->
    </div>
</td>
</tr>

<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://livvkit.github.io/Docs/">LIVVkit <br>(land ice verification & validation toolkit)</a>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon SEA ICE (Title).png" />
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon LAND SURFACE (Title).png" />
    </div>
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://livvkit.github.io/Docs/">Documentation</a> |
        <a href="https://livvkit.github.io/Docs/usage.html">Tutorial</a> |
        <a href="https://github.com/LIVVkit/LIVVkit">Source Code</a>
        <!-- LIVVkit, the land ice verification & validation toolkit, is a Python based V&V toolkit for computational ice sheet models, in both a stand-alone or coupled (to an Earth system model) configuration. It is intended to be a comprehensive testing suite that covers Model and Software V&V. -->
    </div>
</td>
</tr>

<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://metoffice.github.io/CSET/index.html">CSET <br>(Convective Scale Evaluation Tool )</a>
    </div>
</td>
<td width="10%">
    <!-- <div align='center' width="100%" >
        <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon ATMOSPHERE (Title).png" />
    </div> -->
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://metoffice.github.io/CSET/index.html">Documentation</a> |
        <a href="https://metoffice.github.io/CSET/working-practices/index.html#">Tutorial</a> |
        <a href="https://metoffice.github.io/CSET/">Source Code</a> |
        <!-- CSET is a tool to aid in verifying and evaluating convective-scale and turbulence-scale (regional and increasingly global) model configurations. It aims to replace the RMED RES and Toolbox and the collection of bespoke scripts littering people's home directories, reducing effort wasted on duplicating already existing code. This centralisation of diagnostics should also make evaluations more consistent, reproducible and comparable. -->
    </div>
</td>
</tr>

</tr>
<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://unidata.github.io/MetPy/latest/index.html">MetPy <br>(Model Evaluation Tool Plus)</a>
    </div>
</td>
<td width="10%">
    <div align='center' width="100%" >
        <!-- <img align="center" width="45%" src="../../assets/component-logos/components-with-titles/ACCESS icon ATMOSPHERE (Title).png" /> -->
    </div>
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://unidata.github.io/MetPy/latest/userguide/index.html">Tutorial</a> |
        <a href="https://github.com/Unidata/MetPy">Source Code</a> |
        <a href="https://unidata.github.io/MetPy/latest/examples/index.html">Recipes</a>
        MetPy is a collection of tools in Python for reading, visualizing, and performing calculations with weather data. MetPy supports Python >= 3.8 and is freely available under a permissive open source license.
    </div>
</td>
</tr>


<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://code.metoffice.gov.uk/doc/afterburner/current/html/index.html">Afterburner </a>
    </div>
</td>
<td width="10%">
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://code.metoffice.gov.uk/doc/afterburner/current/html/index.html">Documentation</a> |
        <a href="https://code.metoffice.gov.uk/trac/afterburner">Source </a>
        <!-- The Afterburner project is a multi-year initiative of the UK Met Office to develop a suite of robust, reusable scientific software tools and applications which can be integrated into climate model runs to deliver commonly needed in-line (as a model is running) and post-processing functionality. The project is funded by the UK government through a combination of direct grant and the ​[Newton Fund](http://www.newtonfund.ac.uk). -->
    </div>
</td>
</tr>


<tr>
<td width="25%">
    <div align='center' width="100%">
    <a href="https://cookbooks.projectpythia.org">Pythia Cookbooks {{ community }}</a>
    </div>
</td>
<td width="10%">
</td>
<td width="64%">
    <div align='center' width="100%" >
        <a href="https://cookbooks.projectpythia.org">Documentation</a> |
        <a href="https://github.com/ProjectPythia">Source </a>
        <!-- The Afterburner project is a multi-year initiative of the UK Met Office to develop a suite of robust, reusable scientific software tools and applications which can be integrated into climate model runs to deliver commonly needed in-line (as a model is running) and post-processing functionality. The project is funded by the UK government through a combination of direct grant and the ​[Newton Fund](http://www.newtonfund.ac.uk). -->
    </div>
</td>
</tr>


<table/>