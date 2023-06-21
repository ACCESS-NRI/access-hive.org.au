# Observational Data Catalog

As of June 2023, we provide the following observational data catalogs on Gadi@NCI through the project `kj13`:

```
/g/data/kj13/datasets
├── cmip6
│   └── *.nc
├── esmvaltool
│   └── obsdata-v2/
│       ├── Tier1
│       │   ├── AIRS
│       │   │   └── *.nc
│       │   └──  ...
│       ├── Tier2
│       │   ├── BerkeleyEarth
│       │   │   └── *.nc
│       │   └──  ...
│       └── Tier3
│           ├── ERA5
│           │   └── OBS6_ERA5_reanaly_v1_Amon_pr_197901-202012.nc
│           └──  ...
├── ilamb
│   └── DATA
│       ├── albedo
│       │   ├── CERESed4.1
│       │   │   └── albedo.nc
│       │   └── ...
│       └── ...
├── iomb
│   └── DATA
│       ├── silicate
│       │   ├── GLODAP
│       │   │   └── *albedo*.nc
│       │   └── ...
│       └── ...
```

If you want to use but do not have access to Gadi@NCI yet, please follow our instructions on how to [Get Started with Model Evaluation](./model_evaluation_getting_started/index.md).

| Dataset name	                | Downloaded | /g/data/kj13/datasets/               |
| ----------------------------- | ---------- | ------------------------------------ |
| AIRS          	   	        | 2020-12-04 | Tier1/AIRS                           |
| AIRS-2-0      	   	        | 2020-12-04 | Tier1/AIRS-2-0                       |
| AIRS-2-1      	   	        | 2021-07-14 | Tier1/AIRS-2-1                       |
| ATSR          	   	        | 2020-12-04 | Tier1/ATSR                           |
| CALIOP        	   	        | 2020-12-04 | Tier1/CALIOP                         |
| CERES-EBAF    	   	        | 2020-12-04 | Tier1/CERES-EBAF                     |
| CFSR          	   	        | 2020-12-04 | Tier1/CFSR                           |
| CloudSat      	   	        | 2020-12-04 | Tier1/CloudSat                       |
| ESACCI-GHG    	   	        | 2020-12-04 | Tier1/ESACCI-GHG                     |
| GPCP-SG       	   	        | 2020-12-04 | Tier1/GPCP-SG                        |
| ISCCP         	   	        | 2021-04-08 | Tier1/ISCCP                          |
| JRA-55        	   	        | 2022-11-15 | Tier1/JRA-55                         |
| MODIS         	   	        | 2020-12-04 | Tier1/MODIS                          |
| SSMI          	   	        | 2020-12-04 | Tier1/SSMI                           |
| SSMI-MERIS    	   	        | 2021-10-19 | Tier1/SSMI-MERIS                     |
| TRMM-L3       	   	        | 2020-12-04 | Tier1/TRMM-L3                        |
| ghgcci        	   	        | 2020-12-04 | Tier1/ESACCI-GHG                     | 
| BerkeleyEarth                 | 2020-12-04 | Tier2/BerkeleyEarth                  |
| CALIPSO-GOCCP                 | 2023-01-28 | Tier2/CALIPSO-GOCCP                  |
| CERES-EBAF                    | 2022-08-12 | Tier2/CERES-EBAF                     |
| CRU                           | 2021-07-14 | Tier2/CRU                            |
| CT2019                        | 2020-12-04 | Tier2/CT2019                         |
| CowtanWay                     | 2020-12-04 | Tier2/CowtanWay                      |
| Duveiller2018                 | 2020-12-04 | Tier2/Duveiller2018                  |
| E-OBS                         | 2020-12-04 | Tier2/E-OBS                          |
| ESACCI-AEROSOL                | 2023-01-28 | Tier2/ESACCI-AEROSOL                 |
| ESACCI-CLOUD                  | 2023-01-28 | Tier2/ESACCI-CLOUD                   |
| ESACCI-FIRE                   | 2023-01-28 | Tier2/ESACCI-FIRE                    |
| ESACCI-LANDCOVER              | 2023-01-28 | Tier2/ESACCI-LANDCOVER               |
| ESACCI-LST                    | 2022-01-26 | Tier2/ESACCI-LST                     |
| ESACCI-OC                     | 2022-01-26 | Tier2/ESACCI-OC                      |
| ESACCI-OZONE                  | 2023-01-28 | Tier2/ESACCI-OZONE                   |
| ESACCI-SEA-SURFACE-SALINITY   | 2022-01-26 | Tier2/ESACCI-SEA-SURFACE-SALINITY    |
| ESACCI-SOILMOISTURE           | 2023-01-28 | Tier2/ESACCI-SOILMOISTURE            |
| ESACCI-SST                    | 2023-01-28 | Tier2/ESACCI-SST                     |
| ESRL	   	       	   	        | 2021-04-08 | Tier2/ESRL                           |
| Eppley-VGPM-MODIS	   	       	| 2020-12-05 | Tier2/Eppley-VGPM-MODIS              |
| GCP2018	   	       	   	    | 2021-11-08 | Tier2/GCP2018                        |
| GCP2020	   	       	   	    | 2021-11-08 | Tier2/GCP2020                        |
| GHCN	   	       	   	        | 2023-01-28 | Tier2/GHCN                           |
| GHCN-CAMS	   	       	   	    | 2020-12-05 | Tier2/GHCN-CAMS                      |
| GISTEMP	   	       	   	    | 2020-12-05 | Tier2/GISTEMP                        |
| GLODAP	   	       	   	    | 2022-04-29 | Tier2/GLODAP                         |
| GPCC	   	       	   	        | 2021-04-08 | Tier2/GPCC                           |
| HALOE	   	       	   	        | 2023-01-28 | Tier2/HALOE                          |
| HadCRUT3	   	       	   	    | 2023-01-28 | Tier2/HadCRUT3                       |
| HadCRUT4	   	       	   	    | 2023-01-28 | Tier2/HadCRUT4                       |
| HadCRUT4-clim	   	       	    | 2020-12-04 | Tier2/HadCRUT4-clim                  |
| HadCRUT5	   	       	   	    | 2022-04-29 | Tier2/HadCRUT5                       |
| HadISST	   	       	   	    | 2023-01-28 | Tier2/HadISST                        |
| ISCCP-FH	   	       	   	    | 2023-01-28 | Tier2/ISCCP-FH                       |
| JRA-25	   	       	   	    | 2022-11-24 | Tier2/JRA-25                         |
| Kadow2020	   	       	   	    | 2022-08-12 | Tier2/Kadow2020                      |
| Landschuetzer2016	   	        | 2020-12-05 | Tier2/Landschuetzer2016              |
| Landschuetzer2020	   	        | 2022-11-15 | Tier2/Landschuetzer2020              |
| MOBO-DIC_MPIM	   	       	    | 2022-11-15 | Tier2/MOBO-DIC_MPIM                  |
| NCEP	   	       	   	        | 2023-01-28 | Tier2/NCEP                           |
| NCEP-DOE-R2	   	       	    | 2023-01-28 | Tier2/NCEP-DOE-R2                    |
| NCEP-NCAR-R1	   	       	    | 2023-01-28 | Tier2/NCEP-NCAR-R1                   |
| NOAA-CIRES-20CR	   	        | 2023-01-28 | Tier2/NOAA-CIRES-20CR                |
| NOAAGlobalTemp	   	        | 2022-08-12 | Tier2/NOAAGlobalTemp                 |
| OSI-450-nh	   	       	    | 2020-12-05 | Tier2/OSI-450-nh                     |
| OSI-450-sh	   	       	    | 2020-12-05 | Tier2/OSI-450-sh                     |
| OceanSODA-ETHZ	   	        | 2022-11-17 | Tier2/OceanSODA-ETHZ                 |
| PATMOS-x	   	       	   	    | 2023-01-28 | Tier2/PATMOS-x                       |
| PERSIANN-CDR	   	       	    | 2020-12-05 | Tier2/PERSIANN-CDR                   |
| PHC	   	       	   	        | 2020-12-05 | Tier2/PHC                            |
| PIOMAS	   	       	   	    | 2020-12-05 | Tier2/PIOMAS                         |
| REGEN	   	       	   	        | 2020-12-05 | Tier2/REGEN                          |
| Scripps-CO2-KUM	   	        | 2022-04-29 | Tier2/Scripps-CO2-KUM                |
| TCOM-CH4	   	       	   	    | 2023-01-28 | Tier2/TCOM-CH4                       |
| TCOM-N2O	   	       	   	    | 2023-01-28 | Tier2/TCOM-N2O                       |
| WFDE5	   	       	   	        | 2021-07-14 | Tier2/WFDE5                          |
| WOA	   	       	   	        | 2021-10-19 | Tier2/WOA                            |
| AURA-TES             	        | 2023-06-14 | Tier3/AURA-TES             	        |
| CALIPSO-ICECLOUD     	        | 2023-06-14 | Tier3/CALIPSO-ICECLOUD     	        |
| CDS-XCH4             	        | 2023-06-14 | Tier3/DS-XCH4             	        |
| CDS-XCO2             	        | 2023-06-14 | Tier3/CDS-XCO2             	        |
| ERA-Interim          	        | 2022-11-24 | Tier3/ERA-Interim          	        |
| ERA-Interim-Land     	        | 2021-09-14 | Tier3/ERA-Interim-Land     	        |
| ERA5                 	        | 2021-02-12 | Tier3/ERA5                 	        |
| ERA5-Land            	        | 2023-06-14 | Tier3/ERA5-Land            	        |
| FLUXCOM              	        | 2022-01-26 | Tier3/FLUXCOM              	        |
| HWSD                 	        | 2023-06-14 | Tier3/HWSD                 	        |
| LandFlux-EVAL        	        | 2023-06-14 | Tier3/LandFlux-EVAL        	        |
| MAC-LWP              	        | 2023-06-14 | Tier3/MAC-LWP              	        |
| NIWA-BS              	        | 2023-06-16 | Tier3/NIWA-BS              	        |

# ToDo Tier2
| Dataset name	                | Downloaded | /g/data/kj13/datasets/               |
| ----------------------------- | ---------- | ------------------------------------ |
| ESDC	    	                |            | Tier2/                               |

# ToDo Tier3
| Dataset name	                | Downloaded | /g/data/kj13/datasets/               |
| ----------------------------- | ---------- | ------------------------------------ |
| APHRO-MA	                    |            | Tier3/                               |
| CDS-SATELLITE-ALBEDO	        |            | Tier3/                               |
| CDS-SATELLITE-LAI-FAPAR       |            | Tier3/                               |
| CDS-SATELLITE-SOIL-MOISTURE   |            | Tier3/                               |
| CDS-UERRA	                    |            | Tier3/                               |
| CERES-SYN1deg	                |            | Tier3/                               |
| CLARA-AVHRR	                |            | Tier3/                               |
| CLOUDSAT-L2	                |            | Tier3/                               |
| ESACCI-WATERVAPOUR	        |            | Tier3/                               |
| GRACE	                        |            | Tier3/                               |
| JMA-TRANSCOM	                |            | Tier3/                               |
| LAI3g	                        |            | Tier3/                               |
| MERRA2                        |            | Tier3/                               |
| MLS-AURA                      |            | Tier3/                               |
| MTE	                        |            | Tier3/                               |
| NDP	                        |            | Tier3/                               |
| NIWA-BS	                    |            | Tier3/                               |
| NSIDC-0116-nh	                |            | Tier3/                               |
| NSIDC-0116-sh	                |            | Tier3/                               |
| UWisc                         |            | Tier3/                               |