
# ACCESS-OM {{ supp }}

{% include "call_contribute.md" %}

ACCESS-OM stands for ACCESS **O**cean **M**odel. There is more than just an ocean model, but it indicates that this is not a fully-coupled model, i.e. not coupled with a model atmosphere, the atmospheric fields that drive the model are provided by a data product. Usually the data product is derived from reanalysis, e.g. [JRA55-do] and [ERA5].

ACCESS-NRI will release an ACCESS-OM model configuration. The first release of ACCESS-OM will be derived from the COSIMA ACCESS-OM2 suite and will include [ocean] and [sea ice] components.

## [ACCESS-OM2][COSIMA-models] {{ recom }}

ACCESS-OM2 is a suite of coupled ocean-sea ice models developed by the [Consortium for Ocean-Sea Ice Modelling in Australia (COSIMA)][COSIMA]. All models use the [MOM5.1][MOM5.1] ocean model coupled to the [CICE5.1.2][CICE5.1.2] sea ice model via OASIS3-MCT.

The models in the ACCESS-OM2 differ by their grid spatial resolution:

 - [ACCESS-OM2][ACCESS-OM2] at 1° with 50 vertical levels
 - [ACCESS-OM2-025][ACCESS-OM2-025] at 0.25° with 50 vertical levels
 - [ACCESS-OM2-01][ACCESS-OM2-01] at 0.1° with 75 vertical levels

[ocean]: /model_components/ocean/
[sea ice]: /model_components/sea-ice/

[JRA55-do]: /model_evaluation/datasets.md#jra55
[ERA5]: /model_evaluation/datasets.md#era5

[COSIMA]: http://cosima.org.au/
[COSIMA-models]: http://cosima.org.au/index.php/models/
[MOM5.1]: https://mom-ocean.github.io/
[CICE5.1.2]: https://github.com/CICE-Consortium/CICE-svn-trunk/tree/cice-5.1.2
[ACCESS-OM2]: http://cosima.org.au/index.php/models/access-om2/
[ACCESS-OM2-025]: http://cosima.org.au/index.php/models/access-om2-025/
[ACCESS-OM2-01]: http://cosima.org.au/index.php/models/access-om2-01-2/