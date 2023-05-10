# Running ACCESS-OM2 Model

Welcome to **ACCESS-OM2** &mdash; a coupled ocean-ice model and collection of [configurations](http://cosima.org.au/index.php/models/) developed by the [Consortium for Ocean-Sea Ice Modelling in Australia (COSIMA)](http://cosima.org.au/).

ACCESS-OM2 consists of the [MOM 5.1](https://mom-ocean.github.io) ocean model, [CICE 5.1.2](https://github.com/CICE-Consortium/CICE-svn-trunk/tree/cice-5.1.2) sea ice model, and a file-based atmosphere called [YATM](https://github.com/COSIMA/libaccessom2) coupled together using the [OASIS3-MCT v2.0](https://portal.enes.org/oasis) coupler. Regridding is done using [ESMF](https://www.earthsystemcog.org/projects/esmf/) and [KDTREE2](https://github.com/jmhodges/kdtree2).

The configurations available here are updated from the version 1.0 configurations described in [Kiss et al. (2020)](https://doi.org/10.5194/gmd-13-401-2020). Further details are given in the [ACCESS-OM2 technical report](https://github.com/COSIMA/ACCESS-OM2-1-025-010deg-report).

## How to access existing ACCESS-OM2 output

[NCI](http://nci.org.au) users can access model output via the [COSIMA Cookbook](https://github.com/COSIMA/cosima-cookbook). A good place to start is the [data explorer](https://nbviewer.jupyter.org/github/COSIMA/cosima-recipes/blob/master/Tutorials/Using_Explorer_tools.ipynb), which will give an overview of the data available. Also see this [overview of 0.1° IAF outputs](http://cosima.org.au/index.php/2020/07/29/data-available-0-1-1958-2018-access-om2-iaf-run/).

Non-NCI users can access a subset of the ACCESS-OM2 output via the [COSIMA Model Output Collection](https://dx.doi.org/10.4225/41/5a2dc8543105a).

## How to run ACCESS-OM2

Start by reading the [[Quick start\|Getting-started#quick-start]] guide. If you are using [gadi.nci.org.au](http://nci.org.au/our-systems/hpc-systems) at the [NCI National Facility](http://nci.org.au/) and are happy to use our pre-compiled executables then this should be all you need. The page also provides instructions for building your own executables.

**NOTE:** All ACCESS-OM2 model components and configurations are undergoing continual improvement. We strongly recommend that you "watch" this repo (see button at top of screen; ask to be notified of all conversations) and also watch all the [component models](https://github.com/COSIMA/access-om2/tree/master/src), whichever [configuration(s)](https://github.com/COSIMA/access-om2/tree/master/control) you are using, and [payu](https://github.com/payu-org/payu) to be kept informed of updates, problems and bug fixes as they arise.

## Getting help and reporting issues

For all help requests and error reports please create a "GitHub issue" at [ACCESS-OM2 issues](https://github.com/COSIMA/access-om2/issues).

### For self-help

Setting up and running the model is primarily supported via the [[ACCESS-OM2 wiki|Home]] (that you are already reading). _It is a "wiki" so feel free to correct and contribute_.

## How to update this wiki

The wiki attached to a public repository can be edited by anyone. Just navigate to the page you wish to edit and click on the 'edit' button on the top right hand side.



# References
[ACCESS-OM2]: https://github.com/COSIMA/access-om2/
[ACCESS-OM2 wiki]: https://github.com/COSIMA/access-om2/
