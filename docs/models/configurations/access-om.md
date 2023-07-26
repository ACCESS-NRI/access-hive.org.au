
# <div class="highlight-bg">ACCESS-OM</div>

<!-- IMPORTANT REFERENCE 
https://forum.access-hive.org.au/t/access-om2-control-runs/258
-->
<img src="../../../assets/model-config-logos/configurations-without-titles/access-om.png" alt="ACCESS OM model" class="image-background center-img with-border with-padding"></img>

The ACCESS Ocean Model (ACCESS-OM) is a global coupled ocean and sea ice configuration with ocean and sea ice models connected via a coupler. The atmospheric fields that drive the model are provided by a data product, usually derived from reanalysis.

ACCESS-NRI will release supported ACCESS-OM configurations. The first release will be derived from the COSIMA [ACCESS-OM2][COSIMA-models] suite and will include [ocean] and [sea ice] components.


## [ACCESS-OM2][COSIMA-models]

ACCESS-OM2 [@Kiss2020-gmd] is a suite of coupled ocean-sea ice models developed by the Consortium for Ocean-Sea Ice Modelling in Australia ([COSIMA][COSIMA]). All models use the [MOM5] ocean model coupled to the [CICE5] sea ice model via the OASIS3-MCT coupler.

The ACCESS-OM2 suite has models at three different spatial resolutions:

 - [ACCESS-OM2][ACCESS-OM2] at 1° with 50 vertical levels.
 - [ACCESS-OM2-025][ACCESS-OM2-025] at 0.25° with 50 vertical levels.
 - [ACCESS-OM2-01][ACCESS-OM2-01] at 0.1° with 75 vertical levels.

[**Citation** [@Kiss2020-gmd]][ACCESS-OM2-cite] |
[**Documentation**][ACCESS-OM2-docs]

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
