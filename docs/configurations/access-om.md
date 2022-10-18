
# ACCESS-OM {{ supp }}

{% include "call_contribute.md" %}

ACCESS-OM stands for ACCESS **O**cean **M**odel. There is more than just an ocean model, but it indicates that this is not a fully-coupled model, i.e. not coupled with a model atmosphere, the atmospheric fields that drive the model are provided by a data product. Usually the data product is derived from reanalysis, e.g. [JRA55-do](#jra55-do) and [ERA5](#era5).

ACCESS-NRI will release an ACCESS-OM model configuration. The first release of ACCESS-OM will be derived from the COSIMA ACCESS-OM2 suite and will include [ocean] and [sea ice] components.

## [ACCESS-OM2][COSIMA-models]

ACCESS-OM2 is a suite of coupled ocean-sea ice models developed by the [Consortium for Ocean-Sea Ice Modelling in Australia (COSIMA)][COSIMA]. All models use the [MOM5.1][MOM5.1] ocean model coupled to the [CICE5.1.2][CICE5.1.2] sea ice model via OASIS3-MCT.

The models in the ACCESS-OM2 differ by their grid spatial resolution:

 - [ACCESS-OM2][ACCESS-OM2] at 1° with 50 vertical levels
 - [ACCESS-OM2-025][ACCESS-OM2-025] at 0.25° with 50 vertical levels
 - [ACCESS-OM2-01][ACCESS-OM2-01] at 0.1° with 75 vertical levels

## [JRA55-do]  {{ recom }}

[**Documentation**][JRA55-do-doc] |
[**data@NCI**][JRA55-do-NCI]

JRA55-do is a surface dataset for driving ocean-sea ice models and used in phase 2 of OMIP (OMIP-2). JRA55-do corrects the atmospheric reanalysis product JRA-55 using satellite and other atmospheric reanalysis products. The merits of JRA55-do are the high horizontal resolution (~55 km) and temporal interval (3 h).


## [ERA5]  {{ recom }}

[**Documentation**][ERA5-doc] |
[**data@NCI**][ERA5-NCI]

ERA5 provides hourly estimates of a large number of atmospheric, land and oceanic climate variables. The data cover the Earth on a 30km grid and resolve the atmosphere using 137 levels from the surface up to a height of 80km. ERA5 includes information about uncertainties for all variables at reduced spatial and temporal resolutions.

Quality-assured monthly updates of ERA5 (1959 to present) are published within 3 months of real time. Preliminary daily updates of the dataset are available to users within 5 days of real time.

ERA5 combines vast amounts of historical observations into global estimates using advanced modelling and data assimilation systems.

[ocean]: https://access-hive.github.io/website/pr-preview/pr-157/model_components/ocean/
[sea ice]: https://access-hive.github.io/website/pr-preview/pr-157/model_components/sea-ice/

[COSIMA]: http://cosima.org.au/
[COSIMA-models]: http://cosima.org.au/index.php/models/
[MOM5.1]: https://mom-ocean.github.io/
[CICE5.1.2]: https://github.com/CICE-Consortium/CICE-svn-trunk/tree/cice-5.1.2
[ACCESS-OM2]: http://cosima.org.au/index.php/models/access-om2/
[ACCESS-OM2-025]: http://cosima.org.au/index.php/models/access-om2-025/
[ACCESS-OM2-01]: http://cosima.org.au/index.php/models/access-om2-01-2/

[JRA55-do]: https://climate.mri-jma.go.jp/pub/ocean/JRA55-do/
[JRA55-do-doc]: https://climate.mri-jma.go.jp/pub/ocean/JRA55-do/docs/v1_5-manual/User_manual_jra55_do_v1_5.pdf
[JRA55-do-NCI]: http://climate-cms.wikis.unsw.edu.au/JRA55-do

[ERA5]: https://www.ecmwf.int/en/forecasts/datasets/reanalysis-datasets/era5 
[ERA5-doc]: https://confluence.ecmwf.int/display/CKB/ERA5%3A+data+documentation
[ERA5-NCI]: https://opus.nci.org.au/display/ERA5/ERA5+Community+Home 
