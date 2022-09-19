# Global coupled models

## ACCESS-CM2

## ACCESS-ESM1.5

## [ACCESS-OM2][COSIMA-models]

ACCESS-OM2 is a suite of coupled models between ocean and sea-ice. All models use the [MOM5.1][MOM5.1] ocean model coupled to the [CICE5.1.2][CICE5.1.2] sea ice model via OASIS3-MCT.

The models in the ACCESS-OM2 differ by their grid spatial resolution:

 - [ACCESS-OM2][ACCESS-OM2] at 1° with 50 vertical levels.
 - [ACCESS-OM2-025][ACCESS-OM2-025] at 0.25° with 50 vertical levels
 - [ACCESS-OM2-01][ACCESS-OM2-01] at 0.1° with 75 vertical levels
 
## [ACCESS-S][ACCESS-S]
ACCESS-S is the Bureau of Meteorology's climate modelling system used for seasonal forecasting.

This coupled model uses a different set of model components than the other ACCESS models:

- [UM][UM] for the atmosphere
- [JULES][JULES] for the land
- [NEMO][NEMO] for the ocean
- [CICE][CICE] for the sea-ice
- [OASIS3-MCT][OASIS3-MCT] for the coupler

 
[COSIMA-models]: http://cosima.org.au/index.php/models/
[MOM5.1]: https://mom-ocean.github.io/
[CICE5.1.2]: https://github.com/CICE-Consortium/CICE-svn-trunk/tree/cice-5.1.2
[ACCESS-OM2]: http://cosima.org.au/index.php/models/access-om2/
[ACCESS-OM2-025]: http://cosima.org.au/index.php/models/access-om2-025/
[ACCESS-OM2-01]: http://cosima.org.au/index.php/models/access-om2-01-2/
[ACCESS-S]: http://www.bom.gov.au/research/projects/ACCESS-S/
[UM]: https://www.metoffice.gov.uk/research/approach/modelling-systems/unified-model
[JULES]: https://www.metoffice.gov.uk/research/approach/collaboration/jwcrp/jules
[NEMO]: https://www.nemo-ocean.eu/#:~:text=About%20NEMO,way%20by%20a%20European%20consortium.
[CICE]: https://github.com/CICE-Consortium
[OASIS3-MCT]: https://oasis.cerfacs.fr/en/
