# Tutorial for using `esmvaltool` on Gadi@NCI

{% include "call_contribute.md" %}

ACCESS-NRI is currating the latest version of [ESMValTool]().

Below, we give a quick overview on how to run and configure `esmvaltool` on Gadi.

## Running `esmvaltool` on Gadi

#### What recipes are available?
```
    esmvaltool recipes list
```

#### Details of a recipe
```
esmvaltool recipes show recipe_name.yml
```

#### Running an recipe yourself

```
esmvaltool run examples/recipe_python.yml --search_esgf=when_missing
```

## Working `esmvaltool` recipes on Gadi

<!-- Explain what the Tiers mean: Tier3 not to be distributed / license issue, Tier2: some restrictions, but can be redistributed while citing papers etc., Tier1: open for everyone -->

Below you can find the recipes from `esmvaltool` that we are providing to run on Gadi. The original recipes are 

<!-- Compare to list from https://github.com/ACCESS-NRI/ESMValTool-workflow/issues/103 -->

<table>
<tr>
  <td><a href="/assets/model_evaluation/esmvaltool/fig-9-3.png"><img src="/assets/model_evaluation/esmvaltool/fig-9-3.png" title="CMIP5 multi-model mean 2m temperature, multi-model mean of absolute seasonality, multi-model mean bias in seasonality, multi-model mean bias in absolute seasonality; resembling Flato et al. (2013), Fig. 9.3." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/fig4_ipccar5_ch9.png"><img src="/assets/model_evaluation/esmvaltool/fig4_ipccar5_ch9.png" title="Relative space-time root-mean-square deviation (RMSD) calculated from the climatological seasonal cycle of the CMIP5 simulations." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/ltmi1_1.png"><img src="/assets/model_evaluation/esmvaltool/ltmi1_1.png" title="Lower tropospheric mixing index (LTMI; Sherwood et al., 2014) vs. equilibrium climate sensitivity from CMIP5 models." /></a></td>
</tr>
<tr>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_ipccwg1ar5ch9.html">
      recipe_flato13ipcc.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_perfmetrics.html">
	  recipe_perfmetrics_CMIP5.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_emergent_constraints.html">
	  recipe_ecs_scatter.yml</a></td>
</tr>
<tr>
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
  <td><a href="/assets/model_evaluation/esmvaltool/crem_error_metric.png"><img src="/assets/model_evaluation/esmvaltool/crem_error_metric.png" title="Cloud Regime Error Metrics (CREMpd) from William and Webb (2009) applied to those CMIP5 AMIP simulations with the required data in the archive. A perfect score with respect to ISCCP is zero; the dashed red line is an indication of observational uncertainty." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/collins_fig2.png"><img src="/assets/model_evaluation/esmvaltool/collins_fig2.png" title="Time series of global annual mean surface air temperature anomalie (relative to 1986–2005) from CMIP5 concentration-driven experiments." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/autoassess_fig1.png"><img src="/assets/model_evaluation/esmvaltool/autoassess_fig1.png" title="Using Quasi-Biennial Oscillation (QBO) as measure for tropical variability in the stratosphere. Mean zonal wind at 30hPa defines the period and amplitude of the QBO. QBO for UKESM1-0-LL." /></a></td>
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
  <td><a href="/assets/model_evaluation/esmvaltool/figure_namelist_clouds_liq_h2o_taylor.png"><img src="/assets/model_evaluation/esmvaltool/figure_namelist_clouds_liq_h2o_taylor.png" title="Taylor diagram showing the 20-yr annual average performance of CMIP5 models for total cloud fraction as compared to MODIS satellite observations." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/zmnam_fig1.png"><img src="/assets/model_evaluation/esmvaltool/zmnam_fig1.png" title="Regression map of the zonal-mean NAM index onto geopotential height, for a selected pressure level (250 hPa) for the MPI-ESM-MR model (CMIP5 AMIP experiment, period 1979-2008). Negative values are shaded in grey." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/russel18_1.png"><img src="/assets/model_evaluation/esmvaltool/russel18_1.png" title="Annual mean CO2 flux (sea to air, gC/(yr * m2), positive (red) is out of the ocean) as a polar contour map." /></a></td>
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
  <td><a href="/assets/model_evaluation/esmvaltool/sos_bias_comparison_MPI-ESM1-2-HR_ESACCI-SSS.png"><img src="/assets/model_evaluation/esmvaltool/sos_bias_comparison_MPI-ESM1-2-HR_ESACCI-SSS.png" title="Radar plot showing the mean state biases (simulation minus observations) for the regional averages of sea surface salinity in the selected ocean basins and seas." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/scatterplot_merged_training_data_SHL.png"><img src="/assets/model_evaluation/esmvaltool/scatterplot_merged_training_data_SHL.png" title="Emergent relationship (solid blue and orange lines) of the Sherwood et al. (2014) emergent constraint, which is based on the lower tropospheric mixing index (LTMI)." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/catchments.png"><img src="/assets/model_evaluation/esmvaltool/catchments.png" title="Calculate biases of long-term climatological annual means of total runoff, precipitation and evapotranspiration for 12 large-scale catchments on different continents and climates." /></a></td>
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
  <td><a href="/assets/model_evaluation/esmvaltool/perfmetrics_fig_1.png"><img src="/assets/model_evaluation/esmvaltool/perfmetrics_fig_1.png" title="Annual cycle of globally averaged temperature at 850 hPa (time period 1980-2005) for different CMIP5 models (historical simulation) (thin colored lines) in comparison to ERA-Interim (thick yellow line) and NCEP (thick black dashed line) reanalysis data." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/histogram_spi.png"><img src="/assets/model_evaluation/esmvaltool/histogram_spi.png" title="(top) Probability distribution of the standardized precipitation index of a sub-set of the CMIP5 models, and (bottom) bias relative to the CRU reference data set." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/MPI-ESM-LR_historical_r1i1p1_rocoef-vs-relprbias.png"><img src="/assets/model_evaluation/esmvaltool/MPI-ESM-LR_historical_r1i1p1_rocoef-vs-relprbias.png" title="Biases in runoff coefficient (runoff/precipitation) and precipitation for major catchments of the globe. The MPI-ESM-LR historical simulation (1970-2000) is used as an example." /></a></td>
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
  <td><a href="/assets/model_evaluation/esmvaltool/hyint_trends.png"><img src="/assets/model_evaluation/esmvaltool/hyint_trends.png" title="Multi-model trend coefficients over selected indices (figure type 14) for rcp85 2006-2099 future projection normalized to the 1976-2005 historical period." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/pdf_HadCRUT4.png"><img src="/assets/model_evaluation/esmvaltool/pdf_HadCRUT4.png" title="The PDF for ECS. The orange histograms (both panels) show the prior distributions that arise from equal weighting of the CMIP5 models in 0.5 K bins." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/cdd_timeseries.png"><img src="/assets/model_evaluation/esmvaltool/cdd_timeseries.png" title="Timeseries of Consecutive Dry Days index for CMIP5 models." /></a></td>
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
  <td><a href="/assets/model_evaluation/esmvaltool/reichlerkim08bams_smpi.png"><img src="/assets/model_evaluation/esmvaltool/reichlerkim08bams_smpi.png" title="Performance index I2 for individual models (circles). Circle sizes indicate the length of the 95% confidence intervals. The black circle indicates the I2 of the multi-model mean (similar to Reichler and Kim (2008), Figure 1)." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/bias_CMIP5_MPI-ESM-LR_rcp85_r1i1p1.png"><img src="/assets/model_evaluation/esmvaltool/bias_CMIP5_MPI-ESM-LR_rcp85_r1i1p1.png" title="Biases in five major land cover fractions for different regions and one experiment." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/miles_block.png"><img src="/assets/model_evaluation/esmvaltool/miles_block.png" title="Blocking events frequency for EC-Earth model 1980-1989, compared to ERA-Interim." /></a></td>
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
  <td><a href="/assets/model_evaluation/esmvaltool/total_Phytoplankton_MPI-ESM1-2-LR_ESACCI-OC_scatter.png"><img src="/assets/model_evaluation/esmvaltool/total_Phytoplankton_MPI-ESM1-2-LR_ESACCI-OC_scatter.png" title="Scatter plot of surface chlorophyll from ESACCI-OC ocean colour data version 5.0 and the MPI-ESM1-2-LR model." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/HadGEM2-CC_NHW_ice_extent_Fractionalcover_1989DJF.png"><img src="/assets/model_evaluation/esmvaltool/HadGEM2-CC_NHW_ice_extent_Fractionalcover_1989DJF.png" title="Northern hemisphere Winter sea ice extent for the HadGem2-CC model." /></a></td>
  <td><a href="/assets/model_evaluation/esmvaltool/MultipleModels_timeseries_drake_1860_2004.png"><img src="/assets/model_evaluation/esmvaltool/MultipleModels_timeseries_drake_1860_2004.png" title="Multi-model time series plot of water transport through the Drake Passage." /></a></td>
</tr>
<tr>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_esacci_oc.html">
      recipe_esacci_oc.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_oceans.html">
      recipe_ocean_ice_extent.yml</a></td>
  <td><a href="https://docs.esmvaltool.org/en/latest/recipes/recipe_oceans.html">
      recipe_ocean_amoc.yml</a></td>
</tr>

</table>
