# ESMValTool-workflow on Gadi

## What is ESMValTool?

The Earth System Model Evaluation Tool (ESMValTool) is a tool developed for evaluation of Earth System Models in CMIP (Climate Model Intercomparison Projects). It allows for routine comparison of single or multiple models, either against predecessor versions or against observations. ESMValTool is a community-developed climate model diagnostics and evaluation software package, driven both by computational performance and scientific accuracy and reproducibility. It is open to both users and developers, encouraging open exchange of diagnostic source code and evaluation results from the CMIP ensemble of models. 

For more information, refer to the official <a href="https://docs.esmvaltool.org/en/latest" target="_blank">ESMValTool documentation</a>.

<!--<div class="card-container">
    <a href="https://docs.esmvaltool.org/en/latest/" target="_blank" class="vertical-card aspect-ratio2to1">
        <div class="card-image-container">
            <img src="../../../assets/model_evaluation/logo_esmvaltool.png" alt="ESMValTool" class="img-cover"></img>
        </div>
        <div class="card-text-container bold">ESMValTool</div>
    </a>
</div> -->

<div class="note">ACCESS-NRI is supporting a Gadi-specific configuration of ESMValTool under the name <i>ESMValTool-workflow</i>. </div> 

*ESMValTool-workflow* is the ACCESS-NRI software and data infrastructure that enables the ESMValTool evaluation framework on NCI Gadi. It includes the <a href="https://github.com/ESMValGroup/ESMValTool" target="_blank">ESMValTool</a>/<a href="https://github.com/ESMValGroup/ESMValCore" target="_blank">ESMValCore</a> Python packages, the <a href="https://docs.esmvaltool.org/en/latest/recipes/index.html" target="_blank">ESMValTool collection of recipes and diagnostics</a> and some <a href="https://geonetwork.nci.org.au/geonetwork/srv/eng/catalog.search#/metadata/f0550_0998_4567_4139" target="_blank">observational datasets</a>. *ESMValTool-workflow* is configured to use the existing NCI supported CMIP data collections. 

## Using ESMValTool on Gadi

### Pre-requisites

<i>ESMValTool</i> is provided through the <a href="https://my.nci.org.au/mancini/project/xp65/join" target="_blank">xp65</a> project on Gadi.To enable the  <i>ESMValTool-workflow</i>, you need to be a member of the <i>xp65</i> NCI project.

Depending on your needs, you may want to also join the following supported data collections:

- CMIP6: <a href="https://my.nci.org.au/mancini/project/fs38/join" target="_blank">fs38</a>, <a href="https://my.nci.org.au/mancini/project/oi10/join" target="_blank">oi10</a>
- CMIP5: <a href="https://my.nci.org.au/mancini/project/rr3/join" target="_blank">rr3</a>, <a href="https://my.nci.org.au/mancini/project/al33/join" target="_blank">al33</a>
- Observation data collection: <a href="https://my.nci.org.au/mancini/project/ct11/join" target="_blank">ct11</a>
- ERA5 and ERA5-Land: <a href="https://my.nci.org.au/mancini/project/rt52/join" target="_blank">rt52</a>, <a href="https://my.nci.org.au/mancini/project/zz93/join" target="_blank">zz93</a>
<!-- 

- obs4MIPs: `qv56`
-->
### Loading the ESMValTool-workflow modules
 <!-- #### Load the `access-med` conda environment -->

To load the the *esmvaltool* module, execute the following commands:
```
    module use /g/data/xp65/public/modules
    module load esmvaltool
```

This *esmvaltool* module is pre-configured to access CMIP and observation datasets available on Gadi.
By default, ESMValTool looks for the *config_user.yml* file in the home directory, inside the *.esmvaltool* folder.
To start, you can get a copy in your home directory, *.esmvaltool* folder by running the below or use the `--path=dest` flag to save elsewhere.

```
esmvaltool config get_config_user
```

To list which ESMValTool recipes are available on <i>Gadi</i>, run:
```
esmvaltool recipes list
```

To find out details of a specific *recipe_name.yml*, execute:
```
esmvaltool recipes show recipe_name.yml
```

To retrieve a recipe (and modify it), execute:
```
esmvaltool recipes get recipe_name.yml
```

To execute *recipe_name.yml* and automatically download the required climate data to the default directory, run:

```
esmvaltool run examples/recipe_python.yml --search_esgf=when_missing
```
The `--search_esgf=when_missing` option tells <i>ESMValTool</i> to search for and download the necessary climate data files from Earth System Grid Federation (ESGF), if they cannot be found locally.

## ESMValTool recipe examples

<!-- Explain what the Tiers mean: Tier3 not to be distributed / license issue, Tier2: some restrictions, but can be redistributed while citing papers etc., Tier1: open for everyone -->

A list of <i>ESMValTool</i> recipes available on <i>Gadi</i> can be found on the <a href="https://github.com/ACCESS-NRI/ESMValTool-workflow.git" target="_blank">ACCESS-NRI MED ESMValTool Workflow</a> GitHub repository. Some example recipes are provided below:


<!-- Compare to list from https://github.com/ACCESS-NRI/ESMValTool-workflow/issues/103 -->

<div class="card-container">
    <a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_ipccwg1ar5ch9.html" target="_blank" class="vertical-card aspect-ratio1to1">
        <div class="card-image-container">
            <img src="/assets/model_evaluation/esmvaltool/fig-9-3.png" alt="Computing Access"></img>
        </div>
        <div class="card-text-container bold">Example 1</div>
    </a>
    <a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_perfmetrics.html" target="_blank" class="vertical-card aspect-ratio1to1">
        <div class="card-image-container">
            <img src="/assets/model_evaluation/esmvaltool/fig4_ipccar5_ch9.png" alt="MED Conda Environment"></img>
        </div>
        <div class="card-text-container bold">Example 2</div>
    </a>
    <a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_emergent_constraints.html" target="_blank" class="vertical-card aspect-ratio1to1">
        <div class="card-image-container">
            <img src="/assets/model_evaluation/esmvaltool/ltmi1_1.png" alt="Model Variables"></img>
        </div>
        <div class="card-text-container bold">Example 3</div>
    </a>
</div>

## Support

To get help running your ESMValTool recipe on <i>Gadi</i>, you can submit an issue on the <a href="https://github.com/ACCESS-NRI/ESMValTool-workflow.git" target="_blank">ESMValTool-Workflow</a> GitHub repository or ask for help on the <a href="https://access-hive.org.au" target="_blank">ACCESS-Hive Forum</a>.

General ESMValTool support (i.e. non-specific to <i>Gadi</i>) can be found on the <a href="https://github.com/ESMValGroup/ESMValTool/discussions" target="_blank">ESMValTool Discussions</a> page, where users can also post technical questions on the ESMValTool installation, application and development.

### Recipes and diagnostics

Contacts for specific diagnostic sets are the authors listed in the source code and corresponding <a href="https://docs.esmvaltool.org/en/latest/recipes/index.html#recipes" target="_blank">recipe and diagnostic documentation</a>.

The current status of <i>ESMValTool</i> recipes for the *xp65* conda environment on <i>Gadi</i> is available <a href="https://github.com/ACCESS-NRI/ESMValTool-workflow.git" target="_blank">here</a>

### License

The <i>ESMValTool</i> is released under the Apache License, version 2.0. Citation of the <i>ESMValTool</i> paper (“Software Documentation Paper”) is requested upon use, along with the software DOI for <i>ESMValTool</i> (doi:10.5281/zenodo.3401363) and <i>ESMValCore</i> (doi:10.5281/zenodo.3387139) together with the version:

> Righi, M., Andela, B., Eyring, V., Lauer, A., Predoi, V., Schlund, M., Vegas-Regidor, J., Bock, L., Brötz, B., de Mora, L., Diblen, F., Dreyer, L., Drost, N., Earnshaw, P., Hassler, B., Koldunov, N., Little, B., Loosveldt Tomas, S., and Zimmermann, K.: Earth System Model Evaluation Tool (ESMValTool) v2.0 – technical overview, Geosci. Model Dev., 13, 1179–1199, https://doi.org/10.5194/gmd-13-1179-2020, 2020.

Besides the above citation, users are asked to register any journal articles (or other scientific documents) that use the software at the ESMValTool webpage (http://www.esmvaltool.org/). Citing the Software Documentation Paper and registering your paper(s) will serve to document the scientific impact of the Software, which is important for securing future funding. You should consider this an obligation if you have taken advantage of the <i>ESMValTool</i>, which represents the end product of considerable effort by the development team.


<!-- <tr>
  <td><a href="/assets/model_evaluation/esmvaltool/fig-9-8.png"><img src="/assets/model_evaluation/esmvaltool/fig-9-8.png" title="Global average 2m temperature anomalies; resembling Flato et al. (2013), Fig. 9.8." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/fig-9-4.png"><img src="/assets/model_evaluation/esmvaltool/fig-9-4.png" title="CMIP5 multi-model mean precipitation, multi-model mean bias, multi-model mean of absolute error, multi-model mean of relative error; resembling Flato et al. (2013), Fig. 9.4." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/diurnal_fig1.png"><img src="/assets/model_evaluation/esmvaltool/diurnal_fig1.png" title="Mean number of days exceeding the Diurnal Temperature Range (DTR) simulated during the historical period (1961-1990) by 5 degrees during the period 2030-2080. The result is derived from one RCP 8.5 scenario simulated by MPI-ESM-MR." /></a></td>
</tr>
<tr>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_ipccwg1ar5ch9.html">
	  recipe_flato13ipcc.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_ipccwg1ar5ch9.html">
	  recipe_flato13ipcc.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_diurnal_temperature_index.html">
	  recipe_diurnal_index.yml</a></td>
</tr>
<tr>
  <td><a href="../../../assets/model_evaluation/esmvaltool/crem_error_metric.png"><img src="../../../assets/model_evaluation/esmvaltool/crem_error_metric.png" title="Cloud Regime Error Metrics (CREMpd) from William and Webb (2009) applied to those CMIP5 AMIP simulations with the required data in the archive. A perfect score with respect to ISCCP is zero; the dashed red line is an indication of observational uncertainty." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/collins_fig2.png"><img src="../../../assets/model_evaluation/esmvaltool/collins_fig2.png" title="Time series of global annual mean surface air temperature anomalie (relative to 1986–2005) from CMIP5 concentration-driven experiments." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/autoassess_fig1.png"><img src="../../../assets/model_evaluation/esmvaltool/autoassess_fig1.png" title="Using Quasi-Biennial Oscillation (QBO) as measure for tropical variability in the stratosphere. Mean zonal wind at 30hPa defines the period and amplitude of the QBO. QBO for UKESM1-0-LL." /></a></td>
</tr>
<tr>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_crem.html">
      recipe_crem.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_collins13ipcc.html">
      recipe_collins13ipcc.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_autoassess_stratosphere.html">
	  recipe_autoassess_stratosphere.yml</a></td>
</tr>  
<tr>
  <td><a href="../../../assets/model_evaluation/esmvaltool/figure_namelist_clouds_liq_h2o_taylor.png"><img src="../../../assets/model_evaluation/esmvaltool/figure_namelist_clouds_liq_h2o_taylor.png" title="Taylor diagram showing the 20-yr annual average performance of CMIP5 models for total cloud fraction as compared to MODIS satellite observations." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/zmnam_fig1.png"><img src="../../../assets/model_evaluation/esmvaltool/zmnam_fig1.png" title="Regression map of the zonal-mean NAM index onto geopotential height, for a selected pressure level (250 hPa) for the MPI-ESM-MR model (CMIP5 AMIP experiment, period 1979-2008). Negative values are shaded in grey." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/russel18_1.png"><img src="../../../assets/model_evaluation/esmvaltool/russel18_1.png" title="Annual mean CO2 flux (sea to air, gC/(yr * m2), positive (red) is out of the ocean) as a polar contour map." /></a></td>
</tr>
<tr>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_clouds.html">
      recipe_lauer13jclim.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_zmnam.html">
      recipe_zmnam.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_russell18jgr.html">
      recipe_russell18jgr.yml</a></td>
</tr>
<tr>
  <td><a href="../../../assets/model_evaluation/esmvaltool/sos_bias_comparison_MPI-ESM1-2-HR_ESACCI-SSS.png"><img src="../../../assets/model_evaluation/esmvaltool/sos_bias_comparison_MPI-ESM1-2-HR_ESACCI-SSS.png" title="Radar plot showing the mean state biases (simulation minus observations) for the regional averages of sea surface salinity in the selected ocean basins and seas." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/scatterplot_merged_training_data_SHL.png"><img src="../../../assets/model_evaluation/esmvaltool/scatterplot_merged_training_data_SHL.png" title="Emergent relationship (solid blue and orange lines) of the Sherwood et al. (2014) emergent constraint, which is based on the lower tropospheric mixing index (LTMI)." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/catchments.png"><img src="../../../assets/model_evaluation/esmvaltool/catchments.png" title="Calculate biases of long-term climatological annual means of total runoff, precipitation and evapotranspiration for 12 large-scale catchments on different continents and climates." /></a></td>
</tr>
<tr>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_sea_surface_salinity.html">
      recipe_sea_surface_salinity.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_schlund20esd.html">
      recipe_schlund20esd.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_runoff_et.html">
      recipe_runoff_et.yml</a></td>
</tr>
<tr>
  <td><a href="../../../assets/model_evaluation/esmvaltool/perfmetrics_fig_1.png"><img src="../../../assets/model_evaluation/esmvaltool/perfmetrics_fig_1.png" title="Annual cycle of globally averaged temperature at 850 hPa (time period 1980-2005) for different CMIP5 models (historical simulation) (thin colored lines) in comparison to ERA-Interim (thick yellow line) and NCEP (thick black dashed line) reanalysis data." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/histogram_spi.png"><img src="../../../assets/model_evaluation/esmvaltool/histogram_spi.png" title="(top) Probability distribution of the standardized precipitation index of a sub-set of the CMIP5 models, and (bottom) bias relative to the CRU reference data set." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/MPI-ESM-LR_historical_r1i1p1_rocoef-vs-relprbias.png"><img src="../../../assets/model_evaluation/esmvaltool/MPI-ESM-LR_historical_r1i1p1_rocoef-vs-relprbias.png" title="Biases in runoff coefficient (runoff/precipitation) and precipitation for major catchments of the globe. The MPI-ESM-LR historical simulation (1970-2000) is used as an example." /></a></td>
</tr>
<tr>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_perfmetrics.html">
      recipe_perfmetrics_CMIP5.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_spei.html">
      recipe_spei.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_runoff_et.html">
      recipe_runoff_et.yml</a></td>
</tr>
<tr>
  <td><a href="../../../assets/model_evaluation/esmvaltool/hyint_trends.png"><img src="../../../assets/model_evaluation/esmvaltool/hyint_trends.png" title="Multi-model trend coefficients over selected indices (figure type 14) for rcp85 2006-2099 future projection normalized to the 1976-2005 historical period." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/pdf_HadCRUT4.png"><img src="../../../assets/model_evaluation/esmvaltool/pdf_HadCRUT4.png" title="The PDF for ECS. The orange histograms (both panels) show the prior distributions that arise from equal weighting of the CMIP5 models in 0.5 K bins." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/cdd_timeseries.png"><img src="../../../assets/model_evaluation/esmvaltool/cdd_timeseries.png" title="Timeseries of Consecutive Dry Days index for CMIP5 models." /></a></td>
</tr>
<tr>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_hyint.html">
      recipe_hyint.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_cox18nature.html">
      recipe_cox18_nature.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_extreme_events.html">
      recipe_extreme_events.yml</a></td>
</tr>
<tr>
  <td><a href="../../../assets/model_evaluation/esmvaltool/reichlerkim08bams_smpi.png"><img src="../../../assets/model_evaluation/esmvaltool/reichlerkim08bams_smpi.png" title="Performance index I2 for individual models (circles). Circle sizes indicate the length of the 95% confidence intervals. The black circle indicates the I2 of the multi-model mean (similar to Reichler and Kim (2008), Figure 1)." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/bias_CMIP5_MPI-ESM-LR_rcp85_r1i1p1.png"><img src="../../../assets/model_evaluation/esmvaltool/bias_CMIP5_MPI-ESM-LR_rcp85_r1i1p1.png" title="Biases in five major land cover fractions for different regions and one experiment." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/miles_block.png"><img src="../../../assets/model_evaluation/esmvaltool/miles_block.png" title="Blocking events frequency for EC-Earth model 1980-1989, compared to ERA-Interim." /></a></td>
</tr>
<tr>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_smpi.html">
      recipe_smpi.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_landcover.html">
      recipe_landcover.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_miles.html">
      recipe_miles_block.yml</a></td>
</tr>
<tr>
  <td><a href="../../../assets/model_evaluation/esmvaltool/total_Phytoplankton_MPI-ESM1-2-LR_ESACCI-OC_scatter.png"><img src="../../../assets/model_evaluation/esmvaltool/total_Phytoplankton_MPI-ESM1-2-LR_ESACCI-OC_scatter.png" title="Scatter plot of surface chlorophyll from ESACCI-OC ocean colour data version 5.0 and the MPI-ESM1-2-LR model." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/HadGEM2-CC_NHW_ice_extent_Fractionalcover_1989DJF.png"><img src="../../../assets/model_evaluation/esmvaltool/HadGEM2-CC_NHW_ice_extent_Fractionalcover_1989DJF.png" title="Northern hemisphere Winter sea ice extent for the HadGem2-CC model." /></a></td>
  <td><a href="../../../assets/model_evaluation/esmvaltool/MultipleModels_timeseries_drake_1860_2004.png"><img src="../../../assets/model_evaluation/esmvaltool/MultipleModels_timeseries_drake_1860_2004.png" title="Multi-model time series plot of water transport through the Drake Passage." /></a></td>
</tr>
<tr>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_esacci_oc.html">
      recipe_esacci_oc.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_oceans.html">
      recipe_ocean_ice_extent.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_oceans.html">
      recipe_ocean_amoc.yml</a></td>
</tr> -->

</table>
<!-- 
[esmvaltool-tutorial]: https://esmvalgroup.github.io/ESMValTool_Tutorial/index.html
[esmvaltool-source]: https://github.com/ESMValGroup/ESMValTool#readme
[esmvaltool-workflow-repository]: https://github.com/ACCESS-NRI/ESMValTool-workflow.git
[esmvaltool-discussions]: https://github.com/ESMValGroup/ESMValTool/discussions
[access-hive]: https://access-hive.org.au
[esmvaltool-recipe-list]: https://docs.esmvaltool.org/en/latest/recipes/index.html#recipes
-->
