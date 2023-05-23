
# <div class="center-icons"> ACCESS-OM {{ supported }} </div>

{% include "call_contribute.md" %}

ACCESS-OM stands for ACCESS **O**cean **M**odel. There is more than just an ocean model, but it indicates that this is not a fully-coupled model, i.e. not coupled with a model atmosphere, the atmospheric fields that drive the model are provided by a data product, usually derived from reanalysis.

ACCESS-NRI will release an ACCESS-OM model configuration. The first release of ACCESS-OM will be derived from the COSIMA ACCESS-OM2 suite and will include [ocean] and [sea ice] components.

## <div class="center-icons"> [ACCESS-OM2][COSIMA-models] {{ recommended }} </div>

[**Citation** [@Kiss2020-gmd]][ACCESS-OM2-cite] |
[**Documentation**][ACCESS-OM2-docs]

ACCESS-OM2 [@Kiss2020-gmd] is a suite of coupled ocean-sea ice models developed by the [Consortium for Ocean-Sea Ice Modelling in Australia (COSIMA)][COSIMA]. All models use the [MOM5] ocean model coupled to the [CICE5] sea ice model via OASIS3-MCT.

The models in the ACCESS-OM2 suite differ by their grid spatial resolution:

 - [ACCESS-OM2][ACCESS-OM2] at 1° with 50 vertical levels
 - [ACCESS-OM2-025][ACCESS-OM2-025] at 0.25° with 50 vertical levels
 - [ACCESS-OM2-01][ACCESS-OM2-01] at 0.1° with 75 vertical levels

[ocean]: ../model_components/ocean.md
[sea ice]: ../model_components/sea-ice.md

[COSIMA]: http://cosima.org.au/
[COSIMA-models]: http://cosima.org.au/index.php/models/
[MOM5]: https://github.com/mom-ocean/MOM5
[CICE5]: https://github.com/COSIMA/cice5
[ACCESS-OM2]: http://cosima.org.au/index.php/models/access-om2/
[ACCESS-OM2-025]: http://cosima.org.au/index.php/models/access-om2-025/
[ACCESS-OM2-01]: http://cosima.org.au/index.php/models/access-om2-01-2/

[ACCESS-OM2-cite]: https://gmd.copernicus.org/articles/13/401/2020/
[ACCESS-OM2-docs]: https://github.com/COSIMA/access-om2/wiki