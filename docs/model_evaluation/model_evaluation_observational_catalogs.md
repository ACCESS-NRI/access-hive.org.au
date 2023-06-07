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