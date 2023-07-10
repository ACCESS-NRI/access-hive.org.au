---
hide:
  - toc
---

# <div class="highlight-bg"> Variables for the Unified Model (UM) of the UK Met Office </div>

The Unified Model (UM) is a suite of atmospheric and oceanic numerical modelling software developed and used at the UK Met Office. 

We have extracted the a searchable table of UM from the UK Met Office an extended [Documentation Paper](https://artefacts.ceda.ac.uk/badc_datadocs/um/umdp_F3-UMDPF3.pdf) as referenced in the UM [User Guide](https://ukscience.org/_Media/UM_User_Guide.pdf).
<!-- 
## FIXED_LENGTH_HEADER

| Location | Number | Description |
|--------|--------|-------------|
|1 | | Data Set Format Version Number |
|2 | | Indicator for Sub-Model |
|3 | | Indicator for vertical coordinate type |
|4 | | Indicator for horizontal grid type |
|5 | | Indicator for dataset type |
|6 | | Run identifier |
|7 | | Experiment Number |
|8 | | Indicator for calendar |
|9 | | Indicator for grid staggering
|10| | Indicator for times at which data is provided (for acnillary files)
|11| | Projection Number |
|12| | Model version number x 100 + release number |
|13| | Type of Observation File |
|14| | Type of arithmetic operation last done in fieldop |
|  | | Initial Data Time
|21| | Year |
|22| | Month |
|23| | Day of Month |
|24| | Hour |
|25| | Minute |
|26| | Second |
|27| | Day number |
|  | | Validity time of instatnaneous fields |
|28| | Year |
|29| | Month |
|30| | Day of Month |
|31| | Hour |
|32| | Minute |
|33| | Second |
|34| | Day number |
|  | | Wall clock time file generated |
|35| | Year |
|36| | Month |
|37| | Day of Month |
|38| | Hour |
|39| | Minute |
|40| | Second |
|41| | Day number |
|100|   | INTEGER_CONSTANTS |
|   | 1 | Number of timesteps since start of run |
|   | 2 | Meaning interval for the mean fields (hours) |
|   | 3 | Number of instantaneous dumps used to generate mean field |
|   | 4 | User defined if non-contiguous period used for meaning |
|   | 5 | User defined if non-contiguous period used for meaning |
|   | 6 | Number of points E-W |
|   | 7 | Number of points N-S |
|   | 8 | Number of levels P_LEVELS |
|   | 9 | Number of wet levels Q_LEVELS |
|   | 10 | Number of soil levels ST_LEVELS |
|   | 11 | Number of cloud levels CLOUD_LEVELS |
|   | 12 | Number of tracer levels |
|   | 13 | Number of boundary layer levels |
|   | 14 | Number of passive tracers to be advected excluding moisture |
|   | 15 | Number of different field types in dump |
|   | 16 | No of timesteps since last river routing (v5.5-) |
|   | 17 | Algorithm used to generate height fields (v5.2-) |
|   | 18 | Number of radiation variables |
|   | 19 | River routing - row length (v5.5-) |
|   | 20 | River routing - no of rows (v5.5-) |
|   | 21 | Value of integer missing data indicator |
|   | 22 | Calling period (days) for TRIFFID vegetation model (v4.4-) |
|   | 23 | Number of atmosphere timesteps since last call to TRIFFID vegetation model (v4.4-) |
|   | 24 | First rho level at which height is constant (v5.0-) |
|   | 25 | Number of land points |
|   | 26 | Number of ozone levels |
|   | 27 | Number of levels at which tracers advected |
|   | 28 | Atmos Dumps (v4.1-) and Atmos Fieldfiles (v5.2-): Number of soil hydrology (moisture) levels. (SM_LEVELS) Atmos Obs files: Number of observations in observation file |
|   | 29 | Number of data values in observation file |
|   | 30 | Time window (minutes) of observations before observation file time |
|   | 31 | Time window (minutes) of observations after observation file time |
|   | 32 | Number of AC Observation Types in observation file |
|   | 33 | Not used (v5.0-) |
|   | 34 | Number of convective levels (v5.0-) |
|   | 35 | Radiation timestep number (v5.0-) |
|   | 36 | Flag for AMIP run (v5.0-) |
|   | 37 | First AMIP year (v5.0-) |
|   | 38 | First AMIP month (v5.0-) |
|   | 39 | Current AMIP day (v5.0-) |
|   | 40 | Current ozone month (v5.0-) |
|   | 41 | Flag for SH_zonal_quadratics (v5.0-) |
|   | 42 | SH_zonal_begin (v5.0-) |
|   | 43 | SH_zonal_period (v5.0-) |
|   | 44 | SuHe level weight (v5.0-) |
|   | 45 | SuHe level cutoff (v5.0-) |
|   | 46 | Frictional timescale (v5.0-) |
|101| dimension of integer constants array |
|105| start of REAL_CONSTANTS |
|106| dimension of real constants array |
|110| start of LEVEL_DEPENDENT_CONSTANTS |
|111| first dimension of level dep constants array |
|112| second dimension of same |
|115| start of ROW_DEPENDENT_CONSTANTS (IMDI if RDC not used) |
|116| first dimension of row dep constants array (IMDI or 1 if RDC not used) |
|117| second dimension of same (IMDI or 1 if RDC not used) |
|120|  |
|121|  |
|122|  |
|125|  |
|126|  |
|127|  |
|130|  |
|131|  |
|135|  |
|136|  |
|140|  |
|141|  |
|142|  |
|143|  |
|144|  |
|145|  |
|150|  |
|151|  |
|152|  |
|153|  |
|160|  |
|161|  |
|162|  | -->