
# MED: Atmosphere

{% include "call_contribute.md" %}


## <div class="center-icons"> [ESMValTool][esmvaltool-web]  {{ recommended }} </div>

[**Documentation**][esmvaltool-doc] |
[**Tutorial**][esmvaltool-tutorial] | 
[**Source Code**][esmvaltool-source]

ESMValTool is a community-developed climate model diagnostics and evaluation software package, driven both by computational performance and scientific accuracy and reproducibility. ESMValTool is open to both users and developers, encouraging open exchange of diagnostic source code and evaluation results from the Coupled Model Intercomparison Project CMIP ensemble. For a comprehensive introduction to ESMValTool please visit our documentation page.


## <div class="center-icons"> [METPLUS][metplus-web]  {{ recommended }} </div>

[**Tutorial**][metplus-tutorial] |
[**Paper** [@Brown2021-bams]][MET-paper]

METplus is a verification framework that spans a wide range of temporal (warn-on-forecast to climate) and spatial (storm to global) scales.  It is intended to be extensible through additional capability developed by the community. The core components of the framework include MET, the associated database and display systems called METviewer and METexpress, and a suite of Python wrappers to provide low-level automation and examples, also called use-cases.  METplus will be a component of NOAA's Unified Forecast System (UFS) cross-cutting infrastructure as well as NCAR's System for Integrated Modeling of the Atmosphere (SIMA).

METplus is being actively developed by NCAR/Research Applications Laboratory (RAL), NOAA/Earth Systems Research Laboratories (ESRL), NOAA/Environmental Modeling Center (EMC), and is open to community contributions.

### <div class="center-icons"> METplus Components  {{ recommended }} </div>

Links to the code repository and documentation for each METplus component are provided below:

- METplus Wrappers: [sources][METplusWrappers-source] | [docs][METplusWrappers-doc]
- MET: [sources][MET-source] | [docs][MET-doc]
- METviewer:  [sources][METviewer-doc] | [docs][METviewer-source]
- METexpress: [sources][METexpress-doc] | [docs][METexpress-source]
- METplotpy: [sources][METplotpy-doc] | [docs][METplotpy-source]
- METcalcpy: [sources][METcalcpy-doc] | [docs][METcalcpy-source]
- METdatadb: [sources][METdatadb-doc] | [docs][METdatadb-source]


## <div class="center-icons"> [PCMDI Metrics Package (PMP)][pmp-doc]  {{ recommended }} </div>

[**Documentation**][pmp-doc] | 
[**Sources**][pmp-source]

The PMP is used to provide “quick-look” objective comparisons of Earth System Models (ESMs) with one another and available observations. Results are produced in the context of all model simulations contributed to CMIP6 and earlier CMIP phases. Currently, the comparisons emphasize metrics of large- to global-scale annual cycle and both tropical and extra-tropical modes of variability. Ongoing work in v1.x development branches include established statistics for ENSO, MJO, regional monsoons, and high frequency characteristics of simulated precipitation.


## <div class="center-icons"> [Free Evaluation System Framework (FREVA)][freva-doc] {{ community }} </div>

[**Documentation**][freva-doc] | 
[**Sources**][freva-source]

Freva, the free evaluation system framework, is a data search and analysis platform developed by the atmospheric science community for the atmospheric science community. With help of Freva researchers can:

- quickly and intuitively search for data stored at typical data centers that host many datasets.
- create a common interface for user defined data analysis tools.
- apply data analysis tools in a reproducible manner.


## <div class="center-icons"> [Toolkit for Extremes Climate Analysis (TECA)][teca-web]  {{ community }} </div>

[**Documentation**][teca-doc] |
[**Tutorials**][teca-tutorials] |
[**Sources**][teca-source]

TECA is a general purpose tool for detecting discrete events in climate model output. It leverages a map-reduce framework for efficient parallelization at large scales (order 10K+ cores). Currently, TECA contains detection algorithms for tropical cyclones, atmospheric rivers, and extratropical cyclones; and plans are underway to implement algorithms for mesoscale convective complexes, African Easterly waves, atmospheric blocks, and fronts.


## <div class="center-icons"> [Model and ObservatioN Evaluation Toolkit (MONET)][monet-doc]  {{ community }} </div>

[**Documentation**][monet-doc] |
[**Tutorial**][monet-tutorial] |
[**Source Code**][monet-source] |
[**Paper** [@Baker2017-atmos]][monet-paper]

MONET is an open source project and Python package that aims to create a common platform for atmospheric composition data analysis for weather and air quality models.

MONET was developed to evaluate the Community Multiscale Air Quality Model (CMAQ) for the NOAA National Air Quality Forecast Capability (NAQFC) modeling system. MONET is designed to be a modularized Python package for (1) pairing model output to observational data in space and time; (2) leveraging the Pandas Python package for easy searching and grouping; and (3) analyzing and visualizing data. This process introduces a convenient method for evaluating model output.


## <div class="center-icons"> [climpred][climpred-doc]  {{ community }} </div>

[**Documentation**][climpred-doc] |
[**Tutorial**][climpred-tutorial] |
[**Source Code**][climpred-source] |
[**Paper** [@Brady2021-joss]][climpred-paper]

Climpred aims to offer a comprehensive set of analysis tools for assessing the quality of dynamical forecasts relative to verification products (e.g., observations, reanalysis products, control simulations). Climpred supports a broad range of temporal scales of prediction, spanning the weather, subseasonal-to-seasonal (S2S), and seasonal-to-decadal (S2D) communities.


[esmvaltool-web]: https://www.esmvaltool.org/
[esmvaltool-doc]: https://docs.esmvaltool.org/en/latest
[esmvaltool-tutorial]: https://esmvalgroup.github.io/ESMValTool_Tutorial/index.html
[esmvaltool-source]: https://github.com/ESMValGroup/ESMValTool#readme

[metplus-web]: https://dtcenter.org/community-code/metplus
[metplus-tutorial]: https://dtcenter.org/community-code/metplus/online-tutorial
[METplusWrappers-source]: https://github.com/dtcenter/METplus
[METplusWrappers-doc]: https://metplus.readthedocs.io/en/latest/
[MET-source]: https://github.com/dtcenter/MET
[MET-doc]: https://met.readthedocs.io/en/latest/
[MET-paper]: https://journals.ametsoc.org/view/journals/bams/102/4/BAMS-D-19-0093.1.xml
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

[teca-web]: https://cmec.llnl.gov/teca.html
[teca-doc]: https://teca.readthedocs.io/en/latest
[teca-source]: https://github.com/LBL-EESA/TECA
[teca-tutorials]: https://sourceforge.net/p/teca/TECA_tutorials/HEAD/tree

[freva-doc]: https://freva.gitlab-pages.dkrz.de/evaluation_system/sphinx_docs/index.html
[freva-source]: https://gitlab.dkrz.de/freva/evaluation_system

[monet-doc]: https://monet-arl.readthedocs.io/en/stable/#
[monet-tutorial]: https://monet-arl.readthedocs.io/en/stable/tutorial.html
[monet-source]: https://github.com/noaa-oar-arl/monet
[monet-paper]: https://www.mdpi.com/2073-4433/8/11/210

[climpred-doc]: https://climpred.readthedocs.io/en/stable/index.html
[climpred-tutorial]: https://climpred.readthedocs.io/en/stable/setting-up-data.html
[climpred-source]: https://github.com/pangeo-data/climpred
[climpred-paper]: https://joss.theoj.org/papers/10.21105/joss.02781
