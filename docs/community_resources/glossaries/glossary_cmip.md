---
hide:
  - toc
---

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#cmip_input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#cmip_variable_table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>
<style>
.dataTables_wrapper {
    width: 100%;
    margin-bottom:2em
}
</style>

# <div class="highlight-bg"> Variables for CMIP version 6<br>(Coupled Model Intercomparison Project) </div>

Search the available variables of the Coupled Model Intercomparison Project version 6:
<input id="cmip_input" type="text" placeholder="Adjust your search here..." style="width:100%; padding: 10px;">

<!-- CMIP6 from https://clipc-services.ceda.ac.uk/dreq/index/var.html -->

<table style="border-collapse: collapse; width: 100%;">
<thead>
  <tr>
    <th>Variable</th>
    <th>Name</th>
    <th>Units</th>
    <th>Description</th>
  </tr>
</thead>
<tbody id="cmip_variable_table">
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591409a6-9e49-11e5-803c-0d0b866b59f3.html">cw</a></td>
    <td>Total Canopy Water Storage</td>
    <td>kg m-2</td>
    <td>&quot;Amount&quot; means mass per unit area. &quot;Water&quot; means water in all phases, including frozen i.e. ice and snow. &quot;Canopy&quot; means the plant or vegetation canopy. The canopy water is the water on the canopy.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4e0d59a6102625043f701d5527c44957.html">limfecalc</a></td>
    <td>Iron Limitation of Calcareous Phytoplankton</td>
    <td>1</td>
    <td>&quot;Calcareous phytoplankton&quot; are phytoplankton that produce calcite. Calcite is a mineral that is a polymorph of calcium carbonate. The chemical formula of calcite is CaCO3. Phytoplankton are algae that grow where there is sufficient light to support photosynthesis. &quot;Iron growth limitation&quot; means the ratio of the growth rate of a species population in the environment (where there is a finite availability of iron) to the theoretical growth rate if there were no such limit on iron availability.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/197a59d0c69811cf92e1e7bcbe56cb61.html">limncalc</a></td>
    <td>Nitrogen Limitation of Calcareous Phytoplankton</td>
    <td>1</td>
    <td>&quot;Calcareous phytoplankton&quot; are phytoplankton that produce calcite. Calcite is a mineral that is a polymorph of calcium carbonate. The chemical formula of calcite is CaCO3. Phytoplankton are algae that grow where there is sufficient light to support photosynthesis. &quot;Nitrogen growth limitation&quot; means the ratio of the growth rate of a species population in the environment (where there is a finite availability of nitrogen) to the theoretical growth rate if there were no such limit on nitrogen availability.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1333394a296e7f8af6c9bad15cb9778d.html">fddtdic</a></td>
    <td>Rate of Change of Net Dissolved Inorganic Carbon</td>
    <td>mol m-2 s-1</td>
    <td>&quot;Content&quot; indicates a quantity per unit area.  &quot;tendency_of_X&quot; means derivative of X with respect to time. &quot;Dissolved inorganic carbon&quot; describes a family of chemical species in solution, including carbon dioxide, carbonic acid and the carbonate and bicarbonate anions. &quot;Dissolved inorganic carbon&quot; is the term used in standard names for all species belonging to the family that are represented within a given model. The list of individual species that are included in a quantity having a group chemical standard name can vary between models.  Where possible, the data variable should be accompanied by a complete description of the species represented, for example, by using a comment attribute.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d00cab8104f1a9e853ebfa511d725462.html">tnpeotb</a></td>
    <td>Tendency of Ocean Potential Energy Content Due to Background</td>
    <td>W m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area.  Potential energy is the sum of the gravitational potential energy relative to the geoid and the centripetal potential energy. (The geopotential is the specific potential energy.)  &quot;Due to background&quot; means caused by a time invariant imposed field which may be either constant over the globe or spatially varying, depending on the ocean model used. The specification of a physical process by the phrase due_to_process means that the quantity named is a  single term in a sum of terms which together compose the general quantity  named by omitting the phrase.  &quot;tendency_of_X&quot; means derivative of X with respect to time.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1763f47c438dc252b1317c9861792f50.html">tnpeot</a></td>
    <td>Tendency of Ocean Potential Energy Content Due to Tides</td>
    <td>W m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area.  Potential energy is the sum of the gravitational potential energy relative to the geoid and the centripetal potential energy. (The geopotential is the specific potential energy.)  &quot;Due to tides&quot; means due to all astronomical gravity changes which manifest as tides.  No distinction is made between different tidal components. The specification of a physical process by the phrase due_to_process means that the quantity named is a  single term in a sum of terms which together compose the general quantity  named by omitting the phrase.  &quot;tendency_of_X&quot; means derivative of X with respect to time.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ae3a674b4f541f95d2b05da4a84507e7.html">frfe</a></td>
    <td>Iron Loss to Sediments</td>
    <td>mol m-2 s-1</td>
    <td>&quot;Content&quot; indicates a quantity per unit area.  The specification of a physical process by the phrase due_to_process means that the quantity named is a  single term in a sum of terms which together compose the general quantity  named by omitting the phrase.  &quot;tendency_of_X&quot; means derivative of X with respect to time.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c73793c9a403918cf29279cbc374d509.html">frn</a></td>
    <td>Nitrogen Loss to Sediments and Through Denitrification</td>
    <td>mol m-2 s-1</td>
    <td>&quot;Content&quot; indicates a quantity per unit area.  The specification of a physical process by the phrase due_to_process means that the quantity named is a single term in a sum of terms which together compose the general quantity  named by omitting the phrase. 'Denitrification' is the conversion of nitrate into gaseous compounds such as nitric oxide, nitrous oxide and molecular nitrogen which are then emitted to the atmosphere.  'Sedimentation' is the sinking of particulate matter to the floor of a body of water. &quot;tendency_of_X&quot; means derivative of X with respect to time.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/71c9768e-b8ab-11e6-97ab-ac72891c3257.html">nLitterSubSurf</a></td>
    <td>Nitrogen Mass in Below-Ground Litter (non CWD)</td>
    <td>kg m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area. &quot;Litter&quot; is dead plant material in or above the soil. It is distinct from coarse wood debris. The precise distinction between &quot;fine&quot; and &quot;coarse&quot; is model dependent. &quot;Subsurface litter&quot; means the part of the litter mixed within the soil below the surface. The sum of the quantities with standard names wood_debris_mass_content_of_nitrogen, surface_litter_mass_content_of_nitrogen and subsurface_litter_mass_content_of_nitrogen is the total nitrogen mass content of dead plant material.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/71c982aa-b8ab-11e6-97ab-ac72891c3257.html">nLitterSurf</a></td>
    <td>Nitrogen Mass in Above-Ground Litter (non CWD)</td>
    <td>kg m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area. &quot;Litter&quot; is dead plant material in or above the soil. It is distinct from coarse wood debris. The precise distinction between &quot;fine&quot; and &quot;coarse&quot; is model dependent. &quot;Surface litter&quot; means the part of the litter resting above the soil surface. The sum of the quantities with standard names wood_debris_mass_content_of_nitrogen, surface_litter_mass_content_of_nitrogen and subsurface_litter_mass_content_of_nitrogen is the total nitrogen mass content of dead plant material.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0ac28-acb7-11e6-b5ee-ac72891c3257.html">cVegGrass</a></td>
    <td>Carbon Mass in Vegetation on Grass Tiles</td>
    <td>kg m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area. &quot;Vegetation&quot; means any plants e.g. trees, shrubs, grass. Plants are autotrophs i.e. &quot;producers&quot; of biomass using carbon obtained from carbon dioxide.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0c19a-acb7-11e6-b5ee-ac72891c3257.html">cVegShrub</a></td>
    <td>Carbon Mass in Vegetation on Shrub Tiles</td>
    <td>kg m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area. &quot;Vegetation&quot; means any plants e.g. trees, shrubs, grass. Plants are autotrophs i.e. &quot;producers&quot; of biomass using carbon obtained from carbon dioxide.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0ff48-acb7-11e6-b5ee-ac72891c3257.html">cVegTree</a></td>
    <td>Carbon Mass in Vegetation on Tree Tiles</td>
    <td>kg m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area. &quot;Vegetation&quot; means any plants e.g. trees, shrubs, grass. Plants are autotrophs i.e. &quot;producers&quot; of biomass using carbon obtained from carbon dioxide.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914de26-9e49-11e5-803c-0d0b866b59f3.html">nLitterCwd</a></td>
    <td>Nitrogen Mass in Coarse Woody Debris</td>
    <td>kg m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area. &quot;Wood debris&quot; means dead organic matter composed of coarse wood. It is distinct from fine litter. The precise distinction between &quot;fine&quot; and &quot;coarse&quot; is model dependent. The sum of the quantities with standard names wood_debris_mass_content_of_nitrogen, surface_litter_mass_content_of_nitrogen and subsurface_litter_mass_content_of_nitrogen is the total nitrogen mass content of dead plant material.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912b196-9e49-11e5-803c-0d0b866b59f3.html">cLitterCwd</a></td>
    <td>Carbon Mass in Coarse Woody Debris</td>
    <td>kg m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area. &quot;Wood debris&quot; means dead organic matter composed of coarse wood. It is distinct from fine litter. The precise distinction between &quot;fine&quot; and &quot;coarse&quot; is model dependent.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0d158-acb7-11e6-b5ee-ac72891c3257.html">cSoilGrass</a></td>
    <td>Carbon Mass in Soil on Grass Tiles</td>
    <td>kg m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area. The &quot;soil content&quot; of a quantity refers to the vertical integral from the surface down to the bottom of the soil model. For the content between specified levels in the soil, standard names including content_of_soil_layer are used.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0e418-acb7-11e6-b5ee-ac72891c3257.html">cSoilTree</a></td>
    <td>Carbon Mass in Soil on Tree Tiles</td>
    <td>kg m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area. The &quot;soil content&quot; of a quantity refers to the vertical integral from the surface down to the bottom of the soil model. For the content between specified levels in the soil, standard names including content_of_soil_layer are used.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f10b8c-acb7-11e6-b5ee-ac72891c3257.html">cSoilShrub</a></td>
    <td>Carbon Mass in Soil on Shrub Tiles</td>
    <td>kg m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area. The &quot;soil content&quot; of a quantity refers to the vertical integral from the surface down to the bottom of the soil model. For the content between specified levels in the soil, standard names including content_of_soil_layer are used.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914567c-9e49-11e5-803c-0d0b866b59f3.html">rzwc</a></td>
    <td>Root Zone Soil Moisture</td>
    <td>kg m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area. The content of a soil layer is the vertical integral of the specified quantity within the layer. The quantity with standard name mass_content_of_water_in_soil_layer_defined_by_root_depth is the vertical integral between the surface and the depth to which plant roots penetrate. A coordinate variable or scalar coordinate variable with standard name root_depth can be used to specify the extent of the layer. &quot;Water&quot; means water in all phases.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591397be-9e49-11e5-803c-0d0b866b59f3.html">nLeaf</a></td>
    <td>Nitrogen Mass in Leaves</td>
    <td>kg m-2</td>
    <td>&quot;Content&quot; indicates a quantity per unit area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84efa3fa-acb7-11e6-b5ee-ac72891c3257.html">cLitterShrub</a></td>
    <td>Carbon Mass in Litter on Shrub Tiles</td>
    <td>kg m-2</td>
    <td>&quot;Litter&quot; is dead plant material in or above the soil. It is distinct from coarse wood debris. The precise distinction between &quot;fine&quot; and &quot;coarse&quot; is model dependent. &quot;Content&quot; indicates a quantity per unit area. The sum of the quantities with standard names surface_litter_mass_content_of_carbon and subsurface_litter_mass_content_of_carbon has the standard name litter_mass_content_of_carbon.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0a5d4-acb7-11e6-b5ee-ac72891c3257.html">cLitterTree</a></td>
    <td>Carbon Mass in Litter on Tree Tiles</td>
    <td>kg m-2</td>
    <td>&quot;Litter&quot; is dead plant material in or above the soil. It is distinct from coarse wood debris. The precise distinction between &quot;fine&quot; and &quot;coarse&quot; is model dependent. &quot;Content&quot; indicates a quantity per unit area. The sum of the quantities with standard names surface_litter_mass_content_of_carbon and subsurface_litter_mass_content_of_carbon has the standard name litter_mass_content_of_carbon.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0f62e-acb7-11e6-b5ee-ac72891c3257.html">cLitterGrass</a></td>
    <td>Carbon Mass in Litter on Grass Tiles</td>
    <td>kg m-2</td>
    <td>&quot;Litter&quot; is dead plant material in or above the soil. It is distinct from coarse wood debris. The precise distinction between &quot;fine&quot; and &quot;coarse&quot; is model dependent. &quot;Content&quot; indicates a quantity per unit area. The sum of the quantities with standard names surface_litter_mass_content_of_carbon and subsurface_litter_mass_content_of_carbon has the standard name litter_mass_content_of_carbon.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ece03799edff3053efe82e9512d55ed9.html">cLitter</a></td>
    <td>Carbon Mass in Litter Pool</td>
    <td>kg m-2</td>
    <td>&quot;Litter&quot; is dead plant material in or above the soil. It is distinct from coarse wood debris. The precise distinction between &quot;fine&quot; and &quot;coarse&quot; is model dependent. &quot;Content&quot; indicates a quantity per unit area. The sum of the quantities with standard names surface_litter_mass_content_of_carbon and subsurface_litter_mass_content_of_carbon has the standard name litter_mass_content_of_carbon.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/edffed802a10e341650e8d25ed05581f.html">cLitterAbove</a></td>
    <td>Carbon Mass in Above-Ground Litter</td>
    <td>kg m-2</td>
    <td>&quot;Litter&quot; is dead plant material in or above the soil. It is distinct from coarse wood debris. The precise distinction between &quot;fine&quot; and &quot;coarse&quot; is model dependent. &quot;Surface litter&quot; means the part of the litter resting above the soil surface. &quot;Content&quot; indicates a quantity per unit area. The sum of the quantities with standard names surface_litter_mass_content_of_carbon and subsurface_litter_mass_content_of_carbon has the standard name litter_mass_content_of_carbon.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/226e0454adb91fa1d508255d66ed8daf.html">cLitterBelow</a></td>
    <td>Carbon Mass in Below-Ground Litter</td>
    <td>kg m-2</td>
    <td>&quot;Litter&quot; is dead plant material in or above the soil. It is distinct from coarse wood debris. The precise distinction between &quot;fine&quot; and &quot;coarse&quot; is model dependent. &quot;subsurface litter&quot; means the part of the litter mixed within the soil below the surface. &quot;Content&quot; indicates a quantity per unit area. The sum of the quantities with standard names surface_litter_mass_content_of_carbon and subsurface_litter_mass_content_of_carbon has the standard name litter_mass_content_of_carbon.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96daba6-c5f0-11e6-ac20-5404a60d96b5.html">o2satos</a></td>
    <td>Surface Dissolved Oxygen Concentration at Saturation</td>
    <td>mol m-3</td>
    <td>&quot;Mole concentration at saturation&quot; means the mole concentration in a saturated solution. Mole concentration means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction &quot;mole_concentration_of_X_in_Y&quot;, where X is a material constituent of Y. A chemical or biological species denoted by X may be described by a single term such as &quot;nitrogen&quot; or a phrase such as &quot;nox_expressed_as_nitrogen&quot;.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e4e75ce1fe85a547cd0d39d4b64ec0e2.html">o2sat</a></td>
    <td>Dissolved Oxygen Concentration at Saturation</td>
    <td>mol m-3</td>
    <td>&quot;Mole concentration at saturation&quot; means the mole concentration in a saturated solution. Mole concentration means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction &quot;mole_concentration_of_X_in_Y&quot;, where X is a material constituent of Y. A chemical or biological species denoted by X may be described by a single term such as &quot;nitrogen&quot; or a phrase such as &quot;nox_expressed_as_nitrogen&quot;.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/70b0b8239a6ffb48b4a4f3086da12150.html">conccn</a></td>
    <td>Aerosol Number Concentration</td>
    <td>m-3</td>
    <td>&quot;Number concentration&quot; means the number of particles or other specified objects per unit volume. &quot;Aerosol&quot; means the system of suspended liquid or solid particles in air (except cloud droplets) and their carrier gas, the air itself. &quot;Ambient_aerosol&quot; means that the aerosol is measured or modelled at the ambient state of pressure, temperature and relative humidity that exists in its immediate environment. &quot;Ambient aerosol particles&quot; are aerosol particles that have taken up ambient water through hygroscopic growth. The extent of hygroscopic growth depends on the relative humidity and the composition of the particles.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59148a84-9e49-11e5-803c-0d0b866b59f3.html">nppLut</a></td>
    <td>Net Primary Production on Land-Use Tile as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>&quot;Production of carbon&quot; means the production of biomass expressed as the mass of carbon which it contains. Net primary production is the excess of gross primary production (rate of synthesis of biomass from inorganic precursors) by autotrophs (&quot;producers&quot;), for example, photosynthesis in plants or phytoplankton, over the rate at which the autotrophs themselves respire some of this biomass. &quot;Productivity&quot; means production per unit area. The phrase &quot;expressed_as&quot; is used in the construction A_expressed_as_B, where B is a chemical constituent of A. It means that the quantity indicated by the standard name is calculated solely with respect to the B contained in A, neglecting all other chemical constituents of A.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b3267e6a8cd7e4a5401e7fbca2c4bf5a.html">npp</a></td>
    <td>Net Primary Production on Land as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>&quot;Production of carbon&quot; means the production of biomass expressed as the mass of carbon which it contains. Net primary production is the excess of gross primary production (rate of synthesis of biomass from inorganic precursors) by autotrophs (&quot;producers&quot;), for example, photosynthesis in plants or phytoplankton, over the rate at which the autotrophs themselves respire some of this biomass. &quot;Productivity&quot; means production per unit area. The phrase &quot;expressed_as&quot; is used in the construction A_expressed_as_B, where B is a chemical constituent of A. It means that the quantity indicated by the standard name is calculated solely with respect to the B contained in A, neglecting all other chemical constituents of A.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3ed1667233f6ae4fe3c5ff93cd2de2f3.html">pbo</a></td>
    <td>Sea Water Pressure at Sea Floor</td>
    <td>Pa</td>
    <td>&quot;Sea water pressure&quot; is the pressure that exists in the medium of sea water.  It includes the pressure due to overlying sea water, sea ice, air and any other medium that may be present.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7124901e-c7b6-11e6-bb2a-ac72891c3257.html">slthick</a></td>
    <td>Thickness of Soil Layers</td>
    <td>m</td>
    <td>&quot;Thickness&quot; means the vertical extent of a layer. &quot;Cell&quot; refers to a model grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5aea9677ebbb40076a0e0b3b11fdb46f.html">thkcello</a></td>
    <td>Ocean Model Cell Thickness</td>
    <td>m</td>
    <td>&quot;Thickness&quot; means the vertical extent of a layer. &quot;Cell&quot; refers to a model grid-cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7124a324-c7b6-11e6-bb2a-ac72891c3257.html">sandfrac</a></td>
    <td>Sand Fraction</td>
    <td>1</td>
    <td>&quot;Volume fraction&quot; is used in the construction volume_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f8dde114-11ed-11e7-bf88-ac72891c3257.html">clayfrac</a></td>
    <td>Clay Fraction</td>
    <td>1</td>
    <td>&quot;Volume fraction&quot; is used in the construction volume_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f0bf4-9e49-11e5-803c-0d0b866b59f3.html">ec</a></td>
    <td>Interception Evaporation</td>
    <td>kg m-2 s-1</td>
    <td>&quot;Water&quot; means water in all phases. &quot;Canopy&quot; means the plant or vegetation canopy. Evaporation is the conversion of liquid or solid into vapor. (The conversion of solid alone into vapor is called &quot;sublimation&quot;.) In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics. Unless indicated in the cell_methods attribute, a quantity is assumed to apply to the whole area of each horizontal grid box. Previously, the qualifier where_type was used to specify that the quantity applies only to the part of the grid box of the named type.  Names containing the where_type qualifier are deprecated and newly created data should use the cell_methods attribute to indicate the horizontal area to which the quantity applies.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d606a-9e49-11e5-803c-0d0b866b59f3.html">mrsoLut</a></td>
    <td>Total Soil Moisture</td>
    <td>kg m-2</td>
    <td>&quot;Water&quot; means water in all phases. &quot;Content&quot; indicates a quantity per unit area. The mass content of water in soil refers to the vertical integral from the surface down to the bottom of the soil model. For the content between specified levels in the soil, standard names including &quot;content_of_soil_layer&quot; are used.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b2f82090-fbed-11e5-8f03-5404a60d96b5.html">rsdoabsorb</a></td>
    <td>Net Rate of Absorption of Shortwave Energy in Ocean Layer</td>
    <td>W m-2</td>
    <td>&quot;shortwave&quot; means shortwave radiation. &quot;Layer&quot; means any layer with upper and lower boundaries that have constant values in some vertical coordinate. There must be a vertical coordinate variable indicating the extent of the layer(s). If the layers are model layers, the vertical coordinate can be model_level_number, but it is recommended to specify a physical coordinate (in a scalar or auxiliary coordinate variable) as well. Net absorbed radiation is the difference between absorbed and emitted radiation.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/01f509c26cfbd2f30789d91b026e0016.html">o2min</a></td>
    <td>Oxygen Minimum Concentration</td>
    <td>mol m-3</td>
    <td>'Mole concentration' means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction mole_concentration_of_X_in_Y, where X is a material constituent of Y.  A chemical or biological species denoted by X may be described by a single term such as 'nitrogen' or a phrase such as 'nox_expressed_as_nitrogen'. The concentration of any chemical species, whether particulate or dissolved, may vary with depth in the ocean.  A depth profile may go through one or more local minima in concentration. The mole_concentration_of_molecular_oxygen_in_sea_water_at_shallowest_local_minimum_in_vertical_profile is the mole concentration of oxygen at the local minimum in the concentration profile that occurs closest to the sea surface.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/683b8f723c94f4a3b3e65569b975d648.html">pbsi</a></td>
    <td>Biogenic Silicon Production</td>
    <td>mol m-3 s-1</td>
    <td>'Mole concentration' means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction mole_concentration_of_X_in_Y, where X is a material constituent of Y.  A chemical or biological species denoted by X may be described by a single term such as 'nitrogen' or a phrase such as 'nox_expressed_as_nitrogen'. The specification of a physical process by the phrase due_to_process means that the quantity named is a  single term in a sum of terms which together compose the general quantity  named by omitting the phrase.  &quot;tendency_of_X&quot; means derivative of X with respect to time.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a336fa5c0a328636d04ea8f648dcd7c7.html">pbfe</a></td>
    <td>Biogenic Iron Production</td>
    <td>mol m-3 s-1</td>
    <td>'Mole concentration' means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction mole_concentration_of_X_in_Y, where X is a material constituent of Y.  A chemical or biological species denoted by X may be described by a single term such as 'nitrogen' or a phrase such as 'nox_expressed_as_nitrogen'. The specification of a physical process by the phrase due_to_process means that the quantity named is a  single term in a sum of terms which together compose the general quantity  named by omitting the phrase.  &quot;tendency_of_X&quot; means derivative of X with respect to time.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c2705ac5fb7561a3aa5744c1163bf2d7.html">o2</a></td>
    <td>Dissolved Oxygen Concentration</td>
    <td>mol m-3</td>
    <td>'Mole concentration' means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction mole_concentration_of_X_in_Y, where X is a material constituent of Y.  A chemical or biological species denoted by X may be described by a single term such as 'nitrogen' or a phrase such as 'nox_expressed_as_nitrogen'.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96d9daa-c5f0-11e6-ac20-5404a60d96b5.html">o2os</a></td>
    <td>Surface Dissolved Oxygen Concentration</td>
    <td>mol m-3</td>
    <td>'Mole concentration' means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction mole_concentration_of_X_in_Y, where X is a material constituent of Y.  A chemical or biological species denoted by X may be described by a single term such as 'nitrogen' or a phrase such as 'nox_expressed_as_nitrogen'.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/67adc30ae1278d2ef6d696ba0e2c92e8.html">pflw</a></td>
    <td>Liquid Water Content of Permafrost Layer</td>
    <td>kg m-2</td>
    <td>*where land over land*, i.e., this is the total mass of liquid water contained within the permafrost layer within the land portion of a grid cell divided by the area of the land portion of the cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1562cba76e80f37d1c133ccd079fa715.html">ptp</a></td>
    <td>Tropopause Air Pressure</td>
    <td>Pa</td>
    <td>2D monthly mean thermal tropopause calculated using WMO tropopause definition on 3d temperature</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/228d3ad84f6db126c53ac4ae0a18a014.html">ztp</a></td>
    <td>Tropopause Altitude Above Geoid</td>
    <td>m</td>
    <td>2D monthly mean thermal tropopause calculated using WMO tropopause definition on 3d temperature</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/cff597224d260da1a1c769aab1bbea9d.html">tatp</a></td>
    <td>Tropopause Air Temperature</td>
    <td>K</td>
    <td>2D monthly mean thermal tropopause calculated using WMO tropopause definition on 3d temperature</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/01c8c41a-a0d8-11e6-bc63-ac72891c3257.html">nudgincsm</a></td>
    <td>Nudging Increment of Water in Soil Moisture</td>
    <td>kg m-2</td>
    <td>A nudging increment refers to an amount added to parts of a model system. The phrase &quot;nudging_increment_in_X&quot; refers to an increment in quantity X over a time period which should be defined in the bounds of the time coordinate. &quot;Content&quot; indicates a quantity per unit area. &quot;Water&quot; means water in all phases. The mass content of water in soil refers to the vertical integral from the surface down to the bottom of the soil model. The &quot;soil content&quot; of a quantity refers to the vertical integral from the surface down to the bottom of the soil model. For the content between specified levels in the soil, standard names including &quot;content_of_soil_layer&quot; are used.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0abbdddc-a0d8-11e6-bc63-ac72891c3257.html">nudgincswe</a></td>
    <td>Nudging Increment of Water in Snow</td>
    <td>kg m-2</td>
    <td>A nudging increment refers to an amount added to parts of a model system. The phrase &quot;nudging_increment_in_X&quot; refers to an increment in quantity X over a time period which should be defined in the bounds of the time coordinate. The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;Amount&quot; means mass per unit area. &quot;Snow and ice on land&quot; means ice in glaciers, ice caps, ice sheets & shelves, river and lake ice, any other ice on a land surface, such as frozen flood water, and snow lying on such ice or on the land surface.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/11806b1e-f747-11e5-950e-5404a60d96b5.html">prbigthetao</a></td>
    <td>Sea Water Redistributed Conservative Temperature</td>
    <td>degC</td>
    <td>A passive tracer in an ocean model which is subject to an externally imposed perturbative surface heat flux. The passive tracer is initialised to the conservative temperature in the control climate before the perturbation is imposed. Its surface flux is the heat flux from the atmosphere, not including the imposed perturbation, and is converted to a passive tracer increment as if it were being added to conservative temperature. The passive tracer is transported within the ocean as if it were conservative temperature. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914af46-9e49-11e5-803c-0d0b866b59f3.html">prthetao</a></td>
    <td>Sea Water Redistributed Potential Temperature</td>
    <td>degC</td>
    <td>A passive tracer in an ocean model which is subject to an externally imposed perturbative surface heat flux. The passive tracer is initialised to the potential temperature in the control climate before the perturbation is imposed. Its surface flux is the heat flux from the atmosphere, not including the imposed perturbation, and is converted to a passive tracer increment as if it were being added to potential temperature. The passive tracer is transported within the ocean as if it were potential temperature. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/15410a16-f746-11e5-950e-5404a60d96b5.html">pabigthetao</a></td>
    <td>Sea Water Added Conservative Temperature</td>
    <td>degC</td>
    <td>A passive tracer in an ocean model whose surface flux does not come from the atmosphere but is imposed externally upon the simulated climate system. The surface flux is expressed as a heat flux and converted to a passive tracer increment as if it were a heat flux being added to conservative temperature. The passive tracer is transported within the ocean as if it were conservative temperature. The passive tracer is zero in the control climate of the model. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f8d36-9e49-11e5-803c-0d0b866b59f3.html">laiLut</a></td>
    <td>Leaf Area Index on Land-Use Tile</td>
    <td>1</td>
    <td>A ratio obtained by dividing the total upper leaf surface area of vegetation by the (horizontal) surface area of the land on which it grows.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6c3e8db1b45a6ae7e80ca5a265c0fd50.html">lai</a></td>
    <td>Leaf Area Index</td>
    <td>1</td>
    <td>A ratio obtained by dividing the total upper leaf surface area of vegetation by the (horizontal) surface area of the land on which it grows.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1d3ef4c73895a317948f1f3870f65834.html">basin</a></td>
    <td>Region Selection Index</td>
    <td>1</td>
    <td>A variable with the standard name of region contains strings which indicate geographical regions. These strings must be chosen from the standard region list.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/14278550-b574-11e6-9ed4-5404a60d96b5.html">zvelbase</a></td>
    <td>Upward Component of Land-Ice Basal Velocity</td>
    <td>m s-1</td>
    <td>A velocity is a vector quantity. &quot;Upward&quot; indicates a vector component which is positive when directed upward (negative downward). &quot;basal&quot; means the lower boundary of the atmosphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/142782e4-b574-11e6-9ed4-5404a60d96b5.html">zvelsurf</a></td>
    <td>Upward Component of Land-Ice Surface Velocity</td>
    <td>m s-1</td>
    <td>A velocity is a vector quantity. &quot;Upward&quot; indicates a vector component which is positive when directed upward (negative downward). The surface called &quot;surface&quot; means the lower boundary of the atmosphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9982868916859ae8b64cc83cbed896af.html">wa</a></td>
    <td>Upward Air Velocity</td>
    <td>m s-1</td>
    <td>A velocity is a vector quantity. &quot;Upward&quot; indicates a vector component which is positive when directed upward (negative downward). Upward air velocity is the vertical component of the 3D air velocity vector. The standard name downward_air_velocity may be used for a vector component with the opposite sign convention.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d476e6113f5c466d27fd3aa9e9c35411.html">wo</a></td>
    <td>Sea Water Vertical Velocity</td>
    <td>m s-1</td>
    <td>A velocity is a vector quantity. &quot;Upward&quot; indicates a vector component which is positive when directed upward (negative downward).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/14277b8c-b574-11e6-9ed4-5404a60d96b5.html">xvelbase</a></td>
    <td>X-Component of Land Ice Basal Velocity</td>
    <td>m s-1</td>
    <td>A velocity is a vector quantity. &quot;x&quot; indicates a vector component along the grid x-axis, positive with increasing x. &quot;Land ice&quot; means glaciers, ice-caps and ice-sheets resting on bedrock and also includes ice-shelves. &quot;basal&quot; means the lower boundary of the land ice.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1427742a-b574-11e6-9ed4-5404a60d96b5.html">xvelsurf</a></td>
    <td>X-Component of Land Ice Surface Velocity</td>
    <td>m s-1</td>
    <td>A velocity is a vector quantity. &quot;x&quot; indicates a vector component along the grid x-axis, positive with increasing x. &quot;Land ice&quot; means glaciers, ice-caps and ice-sheets resting on bedrock and also includes ice-shelves. The surface called &quot;surface&quot; means the lower boundary of the atmosphere.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/142776aa-b574-11e6-9ed4-5404a60d96b5.html">yvelbase</a></td>
    <td>Y-Component of Land Ice Basal Velocity</td>
    <td>m s-1</td>
    <td>A velocity is a vector quantity. &quot;y&quot; indicates a vector component along the grid y-axis, positive with increasing y. &quot;Land ice&quot; means glaciers, ice-caps and ice-sheets resting on bedrock and also includes ice-shelves. &quot;basal&quot; means the lower boundary of the land ice.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1427806e-b574-11e6-9ed4-5404a60d96b5.html">yvelsurf</a></td>
    <td>Y-Component of Land Ice Surface Velocity</td>
    <td>m s-1</td>
    <td>A velocity is a vector quantity. &quot;y&quot; indicates a vector component along the grid y-axis, positive with increasing y. &quot;Land ice&quot; means glaciers, ice-caps and ice-sheets resting on bedrock and also includes ice-shelves. The surface called &quot;surface&quot; means the lower boundary of the atmosphere.'</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c5331238e635e9c913da1eb247859206.html">od440aer</a></td>
    <td>Ambient Aerosol Optical Thickness at 440nm</td>
    <td>1</td>
    <td>AOD from the ambient aerosols (i.e., includes aerosol water).  Does not include AOD from stratospheric aerosols if these are prescribed but includes other possible background aerosol types. Needs a comment attribute &quot;wavelength: 440nm&quot;</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/8f2fb9e812c26ee6cb8d9673e09d2644.html">od550aer</a></td>
    <td>Ambient Aerosol Optical Thickness at 550nm</td>
    <td>1</td>
    <td>AOD from the ambient aerosols (i.e., includes aerosol water).  Does not include AOD from stratospheric aerosols if these are prescribed but includes other possible background aerosol types. Needs a comment attribute &quot;wavelength: 550nm&quot;</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0a9c3f8ff6151a5baa8bb93d5a1fa090.html">od870aer</a></td>
    <td>Ambient Aerosol Optical Depth at 870nm</td>
    <td>1</td>
    <td>AOD from the ambient aerosols (i.e., includes aerosol water).  Does not include AOD from stratospheric aerosols if these are prescribed but includes other possible background aerosol types. Needs a comment attribute &quot;wavelength: 870nm&quot;</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c9a72dd6-c5f0-11e6-ac20-5404a60d96b5.html">od550csaer</a></td>
    <td>Ambient Aerosol Optical Thickness at 550nm</td>
    <td>1</td>
    <td>AOD from the ambient aerosols in clear skies if od550aer is for all-sky (i.e., includes aerosol water).  Does not include AOD from stratospheric aerosols if these are prescribed but includes other possible background aerosol types. Needs a comment attribute &quot;wavelength: 550nm&quot;</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/55febff83b78e06576947e1c0e5b7a7d.html">dissicabio</a></td>
    <td>Abiotic Dissolved Inorganic Carbon Concentration</td>
    <td>mol m-3</td>
    <td>Abiotic Dissolved inorganic carbon (CO3+HCO3+H2CO3) concentration</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96c5576-c5f0-11e6-ac20-5404a60d96b5.html">dissicabioos</a></td>
    <td>Surface Abiotic Dissolved Inorganic Carbon Concentration</td>
    <td>mol m-3</td>
    <td>Abiotic Dissolved inorganic carbon (CO3+HCO3+H2CO3) concentration</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1391b0d99790cec6597b02ce4d7c5a67.html">dissi14cabio</a></td>
    <td>Abiotic Dissolved Inorganic Carbon-14 Concentration</td>
    <td>mol m-3</td>
    <td>Abiotic Dissolved inorganic carbon-14 (CO3+HCO3+H2CO3) concentration</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96c6390-c5f0-11e6-ac20-5404a60d96b5.html">dissi14cabioos</a></td>
    <td>Surface Abiotic Dissolved Inorganic Carbon-14 Concentration</td>
    <td>mol m-3</td>
    <td>Abiotic Dissolved inorganic carbon-14 (CO3+HCO3+H2CO3) concentration</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c9a5b6b8-c5f0-11e6-ac20-5404a60d96b5.html">pod0</a></td>
    <td>Phytotoxic Ozone Dose</td>
    <td>mol m-2</td>
    <td>Accumulated stomatal ozone flux over the threshold of 0 mol m-2 s-1; Computation: Time Integral of (hourly above canopy ozone concentration * stomatal conductance * Rc/(Rb+Rc) )</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591321f8-9e49-11e5-803c-0d0b866b59f3.html">sithick</a></td>
    <td>Sea Ice Thickness</td>
    <td>m</td>
    <td>Actual (floe) thickness of sea ice (NOT volume divided by grid area as was done in CMIP5)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59133288-9e49-11e5-803c-0d0b866b59f3.html">siitdthick</a></td>
    <td>Sea-Ice Thickness in Thickness Categories</td>
    <td>m</td>
    <td>Actual (floe) thickness of sea ice in each  category (NOT volume divided by grid area),  (vector with one entry for each thickness category starting from the thinnest category, netcdf file should use thickness bounds of categories as third coordinate axis)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913c266-9e49-11e5-803c-0d0b866b59f3.html">sisnthick</a></td>
    <td>Snow Thickness</td>
    <td>m</td>
    <td>Actual thickness of snow (snow volume divided by snow-covered area)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590dfdc2-9e49-11e5-803c-0d0b866b59f3.html">siitdsnthick</a></td>
    <td>Snow Thickness in Ice Thickness Categories</td>
    <td>m</td>
    <td>Actual thickness of snow in each  category (NOT volume divided by grid area),  (vector with one entry for each thickness category starting from the thinnest category, netcdf file should use thickness bounds of categories as third coordinate axis)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c9a77f2a-c5f0-11e6-ac20-5404a60d96b5.html">bs550aer</a></td>
    <td>Aerosol Backscatter Coefficient</td>
    <td>m-1 sr-1</td>
    <td>Aerosol  Backscatter at 550nm and 180 degrees, computed from extinction and lidar ratio</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/be9cffbb781e32b0bc311b22fa5c0322.html">ec550aer</a></td>
    <td>Aerosol Extinction Coefficient</td>
    <td>m-1</td>
    <td>Aerosol Extinction at 550nm</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914c6e8-9e49-11e5-803c-0d0b866b59f3.html">aod550volso4</a></td>
    <td>Aerosol Optical Depth at 550nm Due to Stratospheric Volcanic Aerosols</td>
    <td>1e-09</td>
    <td>Aerosol optical depth at 550nm due to stratospheric volcanic aerosols</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/51e0588121783d77407236e0d2eb5d14.html">agesno</a></td>
    <td>Mean Age of Snow</td>
    <td>day</td>
    <td>Age of Snow (when computing the time-mean here, the time samples, weighted by the mass of snow on the land portion of the grid cell, are accumulated and then divided by the sum of the weights.  Reported as missing data in regions free of snow on land.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917369e-9e49-11e5-803c-0d0b866b59f3.html">siage</a></td>
    <td>Age of Sea Ice</td>
    <td>s</td>
    <td>Age of sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b9c3eb96337c69c1c4a5aab1317f5563.html">ta</a></td>
    <td>Air Temperature</td>
    <td>K</td>
    <td>Air Temperature</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/154ab10964742eaff37de9cc5beef39c.html">phalf</a></td>
    <td>Pressure on Model Half-Levels</td>
    <td>Pa</td>
    <td>Air pressure on model half-levels</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7a107875bd58c5e655e8f87152a3bad7.html">pfull</a></td>
    <td>Pressure at Model Full-Levels</td>
    <td>Pa</td>
    <td>Air pressure on model levels</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/60149d7950df0e17e492caf344b9a5f2.html">ta700</a></td>
    <td>Air Temperature</td>
    <td>K</td>
    <td>Air temperature at 700hPa</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1e73cc52b4b323161e26ffd19ad68af4.html">ta850</a></td>
    <td>Air Temperature</td>
    <td>K</td>
    <td>Air temperature at 850hPa</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f1a90-9e49-11e5-803c-0d0b866b59f3.html">tasLut</a></td>
    <td>Near-Surface Air Temperature on Land Use Tile</td>
    <td>K</td>
    <td>Air temperature is the bulk temperature of the air, not the surface (skin) temperature.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d82de-9e49-11e5-803c-0d0b866b59f3.html">t2</a></td>
    <td>Mean-Squared Air Temperature</td>
    <td>K2</td>
    <td>Air temperature squared</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e12ee-9e49-11e5-803c-0d0b866b59f3.html">albsn</a></td>
    <td>Snow Albedo</td>
    <td>1</td>
    <td>Albedo of the snow-covered surface, averaged over the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e736a-9e49-11e5-803c-0d0b866b59f3.html">albc</a></td>
    <td>Canopy Albedo</td>
    <td>1</td>
    <td>Albedo of the vegetation: fraction of incoming solar radiation which is reflected before reaching the ground.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ea546e38aa8fc0e021f03e746e1adb10.html">emiaco</a></td>
    <td>Total Emission Rate of Anthropogenic CO</td>
    <td>kg m-2 s-1</td>
    <td>Anthropogenic  emission of CO.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59149f2e-9e49-11e5-803c-0d0b866b59f3.html">fAnthDisturb</a></td>
    <td>Carbon Mass Flux from Vegetation, Litter or Soil Pools into the Atmosphere Due to any Human Activity</td>
    <td>kg m-2 s-1</td>
    <td>Anthropogenic flux of carbon as carbon dioxide into the atmosphere. That is, emissions influenced, caused, or created by human activity. Anthropogenic emission of carbon dioxide includes fossil fuel use, cement production, agricultural burning and sources associated with anthropogenic land use change, except forest regrowth.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3f30557c-b89b-11e6-be04-ac72891c3257.html">fahLut</a></td>
    <td>Anthropogenic Heat Flux Generated from non-Renewable Human Primary Energy Consumption</td>
    <td>W m-2</td>
    <td>Anthropogenic heat flux generated from non-renewable human primary energy consumption, including energy use by vehicles, commercial and residential buildings, industry, and power plants.  Primary energy refers to energy in natural resources, fossil and nonfossil, before conversion into other forms, such as electricity.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3f306e18-b89b-11e6-be04-ac72891c3257.html">cProductLut</a></td>
    <td>Wood and Agricultural Product Pool Carbon Associated with Land-Use Tiles</td>
    <td>kg m-2</td>
    <td>Anthropogenic pools associated with land use tiles into which harvests and cleared carbon are deposited before release into atmosphere PLUS any remaining anthropogenic pools that may be associated with lands which were converted into land use tiles during reported period. Examples of products include paper, cardboard, timber for construction, and crop harvest for food or fuel. Does NOT include residue which is deposited into soil or litter; end of year values (not annual mean).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e9b495e2-5989-11e6-a4be-ac72891c3257.html">areacellg</a></td>
    <td>Grid-Cell Area for Ice Sheet Variables</td>
    <td>m2</td>
    <td>Area of the target grid (not the interpolated area of the source grid).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591469b4-9e49-11e5-803c-0d0b866b59f3.html">co2s</a></td>
    <td>Atmosphere CO2</td>
    <td>1e-06</td>
    <td>As co2, but only at the surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/051919eddec810e292c883205c944ceb.html">prsn</a></td>
    <td>Snowfall Flux</td>
    <td>kg m-2 s-1</td>
    <td>At surface; includes precipitation of all forms of water in the solid phase</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914e0ba-9e49-11e5-803c-0d0b866b59f3.html">sidragtop</a></td>
    <td>Atmospheric Drag Coefficient</td>
    <td>1</td>
    <td>Atmospheric drag coefficient that is used to calculate the atmospheric momentum drag on sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e4bd8-9e49-11e5-803c-0d0b866b59f3.html">sistresave</a></td>
    <td>Average Normal Stress in Sea Ice</td>
    <td>N m-1</td>
    <td>Average normal stress in sea ice (first stress invariant)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4144a01c-4f40-11e6-a814-ac72891c3257.html">litempbotgr</a></td>
    <td>Basal Temperature of Grounded Ice Sheet</td>
    <td>K</td>
    <td>Basal temperature that is used to force the ice sheet models, it is the temperature AT ice sheet - bedrock interface. Cell_methods: area: mean where grounded_ice_sheet</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4144f026-4f40-11e6-a814-ac72891c3257.html">litempbotfl</a></td>
    <td>Basal Temperature of Floating Ice Shelf</td>
    <td>K</td>
    <td>Basal temperature that is used to force the ice sheet models, it is the temperature AT ice shelf-ocean interface.  Cell_methods: area: mean where floating_ice_shelf</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ec93c-9e49-11e5-803c-0d0b866b59f3.html">wetlandCH4cons</a></td>
    <td>Grid Averaged Methane Consumption (Methanotrophy) from Wetlands</td>
    <td>kg m-2 s-1</td>
    <td>Biological consumption (methanotrophy) of methane (NH4) by wetlands (areas where water covers the soil, or is present either at or near the surface of the soil all year or for varying periods of time during the year, including during the growing season). </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f8fca-9e49-11e5-803c-0d0b866b59f3.html">wetlandCH4prod</a></td>
    <td>Grid Averaged Methane Production (Methanogenesis) from Wetlands</td>
    <td>kg m-2 s-1</td>
    <td>Biological emissions (methanogenesis) of methane (NH4) from wetlands (areas where water covers the soil, or is present either at or near the surface of the soil all year or for varying periods of time during the year, including during the growing season). </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e3c7e-9e49-11e5-803c-0d0b866b59f3.html">bldep</a></td>
    <td>Boundary Layer Depth</td>
    <td>m</td>
    <td>Boundary layer depth</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5a6730cdd3fef77dc53ea1f61b23821f.html">cfadDbze94</a></td>
    <td>CloudSat Radar Reflectivity CFAD</td>
    <td>1</td>
    <td>CFAD (Cloud Frequency Altitude Diagrams) are frequency distributions of radar  reflectivity (or lidar scattering ratio) as a function of altitude. The variable cfadDbze94 is defined as the simulated relative frequency of occurrence of radar reflectivity in sampling volumes defined by altitude bins. The radar is observing at a frequency of 94GHz.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/823b0a0d39e3f3f3a992c49948fde77c.html">cfadLidarsr532</a></td>
    <td>CALIPSO Scattering Ratio CFAD</td>
    <td>1</td>
    <td>CFAD (Cloud Frequency Altitude Diagrams) are frequency distributions of radar  reflectivity (or lidar scattering ratio) as a function of altitude. The variable cfadLidarsr532 is defined as the simulated relative frequency of lidar scattering ratio in sampling volumes defined by altitude bins. The lidar is observing at a wavelength of 532nm.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/481469b8223841a5382d43e7c6ae204e.html">msftyzmpa</a></td>
    <td>Ocean Y Overturning Mass Streamfunction Due to Parameterized Mesoscale Advection</td>
    <td>kg s-1</td>
    <td>CMIP5 called this &quot;due to Bolus Advection&quot;.  Name change respects the more general physics of the mesoscale parameterizations.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/54bc1fc90fca4b22cd73cc18e3f6ec07.html">msftmrhompa</a></td>
    <td>Ocean Meridional Overturning Mass Streamfunction Due to Parameterized Mesoscale Advection</td>
    <td>kg s-1</td>
    <td>CMIP5 called this &quot;due to Bolus Advection&quot;.  Name change respects the more general physics of the mesoscale parameterizations.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/66a6e45b205b239932b72fa67a6500ed.html">msftyrhompa</a></td>
    <td>Ocean Y Overturning Mass Streamfunction Due to Parameterized Mesoscale Advection</td>
    <td>kg s-1</td>
    <td>CMIP5 called this &quot;due to Bolus Advection&quot;.  Name change respects the more general physics of the mesoscale parameterizations.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bd75f065fbaddd5d92f4767c6d6baaff.html">msftmzmpa</a></td>
    <td>Ocean Meridional Overturning Mass Streamfunction Due to Parameterized Mesoscale Advection</td>
    <td>kg s-1</td>
    <td>CMIP5 called this &quot;due to Bolus Advection&quot;.  Name change respects the more general physics of the mesoscale parameterizations.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/be3bec2766baa15a7d57b8c2689fdf3d.html">fFire</a></td>
    <td>Carbon Mass Flux into Atmosphere Due to CO2 Emission from Fire Excluding Land-Use Change</td>
    <td>kg m-2 s-1</td>
    <td>CO2 emissions (expressed as a carbon mass flux per unit area) from natural fires and human ignition fires as calculated by the fire module of the dynamic vegetation model, but excluding any CO2 flux from fire included in fLuc (CO2 Flux to Atmosphere from Land Use Change).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f58de-9e49-11e5-803c-0d0b866b59f3.html">fFireNat</a></td>
    <td>Carbon Mass Flux into Atmosphere Due to CO2 Emission from Natural Fire</td>
    <td>kg m-2 s-1</td>
    <td>CO2 emissions from natural fires</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e889a99259ce24104c8b21894ace22da.html">mcd</a></td>
    <td>Downdraft Convective Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Calculated as the convective mass flux divided by the area of the whole grid cell (not just the area of the cloud).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/76f247229d5b524d94dfaedd577eeb84.html">clic</a></td>
    <td>Mass Fraction of Convective Cloud Ice</td>
    <td>1</td>
    <td>Calculated as the mass of convective cloud ice  in the grid cell divided by the mass of air (including the water in all phases) in the grid cell.  This includes precipitating hydrometeors ONLY if the precipitating hydrometeors affect the calculation of radiative transfer in model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9b75db3b829a01b02dfe952824150a33.html">clwc</a></td>
    <td>Mass Fraction of Convective Cloud Liquid Water</td>
    <td>1</td>
    <td>Calculated as the mass of convective cloud liquid water in the grid cell divided by the mass of air (including the water in all phases) in the grid cell.  This includes precipitating hydrometeors ONLY if the precipitating hydrometeors affect the calculation of radiative transfer in model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4dbe7bd9b38439125b341edba15aa66a.html">clis</a></td>
    <td>Mass Fraction of Stratiform Cloud Ice</td>
    <td>1</td>
    <td>Calculated as the mass of stratiform cloud ice  in the grid cell divided by the mass of air (including the water in all phases) in the grid cell.  This includes precipitating hydrometeors ONLY if the precipitating hydrometeors affect the calculation of radiative transfer in model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e4dc8fb121d8dc2cbc44f1f28eea183b.html">clws</a></td>
    <td>Mass Fraction of Stratiform Cloud Liquid Water</td>
    <td>1</td>
    <td>Calculated as the mass of stratiform cloud liquid water in the grid cell divided by the mass of air (including the water in all phases) in the grid cell.  This includes precipitating hydrometeors ONLY if the precipitating hydrometeors affect the calculation of radiative transfer in model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ea313ee8-a0de-11e6-bc63-ac72891c3257.html">rsucsaf</a></td>
    <td>Upwelling Clear-Sky, Aerosol-Free Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Calculated in the absence of aerosols and clouds (following Ghan). This requires a double-call in the radiation code with precisely the same meteorology.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ea83846e-a0de-11e6-bc63-ac72891c3257.html">rsdcsaf</a></td>
    <td>Downwelling Clear-Sky, Aerosol-Free Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Calculated in the absence of aerosols and clouds (following Ghan). This requires a double-call in the radiation code with precisely the same meteorology.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ead5a730-a0de-11e6-bc63-ac72891c3257.html">rsucsafbnd</a></td>
    <td>Upwelling Clear-Sky, Aerosol-Free Shortwave Radiation in Bands</td>
    <td>W m-2</td>
    <td>Calculated in the absence of aerosols and clouds (following Ghan). This requires a double-call in the radiation code with precisely the same meteorology.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/eb28c564-a0de-11e6-bc63-ac72891c3257.html">rsdcsafbnd</a></td>
    <td>Downwelling Clear-Sky, Aerosol-Free, Shortwave Radiation in Bands</td>
    <td>W m-2</td>
    <td>Calculated in the absence of aerosols and clouds (following Ghan). This requires a double-call in the radiation code with precisely the same meteorology.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3819950e-a0dc-11e6-bc63-ac72891c3257.html">rsutcsafbnd</a></td>
    <td>TOA Outgoing Clear-Sky, Aerosol-Free Shortwave Radiation in Bands</td>
    <td>W m-2</td>
    <td>Calculated in the absence of aerosols and clouds, following Ghan (2013, ACP). This requires a double-call in the radiation code with precisely the same meteorology.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/386fb33a-a0dc-11e6-bc63-ac72891c3257.html">rsdscsafbnd</a></td>
    <td>Surface Downwelling Clear-Sky, Aerosol-Free Shortwave Radiation in Bands</td>
    <td>W m-2</td>
    <td>Calculated in the absence of aerosols and clouds, following Ghan (2013, ACP). This requires a double-call in the radiation code with precisely the same meteorology.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/38bd2912-a0dc-11e6-bc63-ac72891c3257.html">rsuscsafbnd</a></td>
    <td>Surface Upwelling Clear-Sky, Aerosol-Free Shortwave Radiation in Bands</td>
    <td>W m-2</td>
    <td>Calculated in the absence of aerosols and clouds, following Ghan (ACP, 2013). This requires a double-call in the radiation code with precisely the same meteorology.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590daf66-9e49-11e5-803c-0d0b866b59f3.html">rsdscsaf</a></td>
    <td>Surface Downwelling Clear-Sky, Aerosol-Free Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Calculated in the absence of aerosols and clouds.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/12e0369ff0ba1a6f1a84e0d9565d4b07.html">rsutcs</a></td>
    <td>TOA Outgoing Clear-Sky Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Calculated in the absence of clouds.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3912bdc8-a0dc-11e6-bc63-ac72891c3257.html">rsutcsbnd</a></td>
    <td>TOA Outgoing Clear-Sky Shortwave Radiation for Each Band</td>
    <td>W m-2</td>
    <td>Calculated with aerosols but without clouds. This is a standard clear-sky calculation</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/398683d4-a0dc-11e6-bc63-ac72891c3257.html">rsdscsbnd</a></td>
    <td>Surface Downwelling Clear-Sky Shortwave Radiation for Each Band</td>
    <td>W m-2</td>
    <td>Calculated with aerosols but without clouds. This is a standard clear-sky calculation</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/39d8c78e-a0dc-11e6-bc63-ac72891c3257.html">rsuscsbnd</a></td>
    <td>Surface Upwelling Clear-Sky Shortwave Radiation for Each Band</td>
    <td>W m-2</td>
    <td>Calculated with aerosols but without clouds. This is a standard clear-sky calculation</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/eb85339e-a0de-11e6-bc63-ac72891c3257.html">rsucsbnd</a></td>
    <td>Upwelling Clear-Sky Shortwave Radiation at Each Level for Each Band</td>
    <td>W m-2</td>
    <td>Calculated with aerosols but without clouds. This is a standard clear-sky calculation</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ebd63780-a0de-11e6-bc63-ac72891c3257.html">rsdcsbnd</a></td>
    <td>Downwelling Clear-Sky Shortwave Radiation at Each Level for Each Band</td>
    <td>W m-2</td>
    <td>Calculated with aerosols but without clouds. This is a standard clear-sky calculation</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f126552ec807a8280d6d43ed084f2fc9.html">fHarvest</a></td>
    <td>Carbon Mass Flux into Atmosphere Due to Crop Harvesting</td>
    <td>kg m-2 s-1</td>
    <td>Carbon mass flux per unit area due to crop harvesting</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b78f432cc8fbadf21b9a1fcf07d781a7.html">fGrazing</a></td>
    <td>Carbon Mass Flux into Atmosphere Due to Grazing on Land</td>
    <td>kg m-2 s-1</td>
    <td>Carbon mass flux per unit area due to grazing on land</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/15fea217c64dbec48b115765548b89ae.html">fVegSoil</a></td>
    <td>Total Carbon Mass Flux from Vegetation Directly to Soil</td>
    <td>kg m-2 s-1</td>
    <td>Carbon mass flux per unit area from vegetation directly into soil, without intermediate conversion to litter.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2d38bda3114d03f7543b8af88aadd03a.html">ra</a></td>
    <td>Carbon Mass Flux into Atmosphere Due to Autotrophic (Plant) Respiration on Land</td>
    <td>kg m-2 s-1</td>
    <td>Carbon mass flux per unit area into atmosphere due to autotrophic respiration on land (respiration by producers) [see rh for heterotrophic production]</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59140726-9e49-11e5-803c-0d0b866b59f3.html">raLut</a></td>
    <td>Autotrophic Respiration on Land-Use Tile as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Carbon mass flux per unit area into atmosphere due to autotrophic respiration on land (respiration by producers) [see rh for heterotrophic production]. Calculated on land-use tiles.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/93723bb54a2c43450d75403102e618ac.html">rh</a></td>
    <td>Total Heterotrophic Respiration on Land as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Carbon mass flux per unit area into atmosphere due to heterotrophic respiration on land (respiration by consumers)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912a174-9e49-11e5-803c-0d0b866b59f3.html">rhLut</a></td>
    <td>Heterotrophic Respiration on Land-Use Tile as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Carbon mass flux per unit area into atmosphere due to heterotrophic respiration on land (respiration by consumers), calculated on land-use tiles.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2191e3410c3a2beedfec222f81f028b6.html">fLuc</a></td>
    <td>Net Carbon Mass Flux into Atmosphere Due to Land-Use Change</td>
    <td>kg m-2 s-1</td>
    <td>Carbon mass flux per unit area into atmosphere due to human changes to land (excluding forest regrowth) accounting possibly for different time-scales related to fate of the wood, for example.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/45f5477848196383f1ac8039e0dcfcab.html">fLitterSoil</a></td>
    <td>Total Carbon Mass Flux from Litter to Soil</td>
    <td>kg m-2 s-1</td>
    <td>Carbon mass flux per unit area into soil from litter (dead plant material in or above the soil).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6c08493dc9183b6ec7005a6be27f67f1.html">cSoil</a></td>
    <td>Carbon Mass in Model Soil Pool</td>
    <td>kg m-2</td>
    <td>Carbon mass in the full depth of the soil model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e072c35c161c93f2320579511ed1849f.html">cSoilFast</a></td>
    <td>Carbon Mass in Fast Soil Pool</td>
    <td>kg m-2</td>
    <td>Carbon mass per unit area in fast soil pool. Fast means a lifetime of less than 10 years for reference climate conditions (20th century) in the absence of water limitations.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/50e31118c282faf3bfc90b25909433c1.html">cLeaf</a></td>
    <td>Carbon Mass in Leaves</td>
    <td>kg m-2</td>
    <td>Carbon mass per unit area in leaves.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/da701000818e31103a9b7d9eedee14a2.html">cSoilMedium</a></td>
    <td>Carbon Mass in Medium Soil Pool</td>
    <td>kg m-2</td>
    <td>Carbon mass per unit area in medium (rate) soil pool. Medium means a lifetime of more than than 10 years and less than 100 years for reference climate conditions (20th century) in the absence of water limitations.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e897309433f283b8bf1a4c60dc310edd.html">cRoot</a></td>
    <td>Carbon Mass in Roots</td>
    <td>kg m-2</td>
    <td>Carbon mass per unit area in roots, including fine and coarse roots.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/369a3a9e55ca8e6729a62a79bf701e5d.html">cSoilSlow</a></td>
    <td>Carbon Mass in Slow Soil Pool</td>
    <td>kg m-2</td>
    <td>Carbon mass per unit area in slow soil pool. Slow means a lifetime of more than 100 years for reference climate (20th century) in the absence of water limitations.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/57c2e414bde585cc60a7b2f980e1f870.html">cProduct</a></td>
    <td>Carbon Mass in Products of Land-Use Change</td>
    <td>kg m-2</td>
    <td>Carbon mass per unit area in that has been removed from the environment through  land use change.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3434c274f8ad8754f594d2b23c2d37db.html">cVeg</a></td>
    <td>Carbon Mass in Vegetation</td>
    <td>kg m-2</td>
    <td>Carbon mass per unit area in vegetation.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/64d818a9a2f9e72570449c024070950e.html">cWood</a></td>
    <td>Carbon Mass in Wood</td>
    <td>kg m-2</td>
    <td>Carbon mass per unit area in wood, including sapwood and hardwood.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d6623215ad4c16c43b649e0c17ebad7e.html">cCwd</a></td>
    <td>Carbon Mass in Coarse Woody Debris</td>
    <td>kg m-2</td>
    <td>Carbon mass per unit area in woody debris (dead organic matter composed of coarse wood.  It is distinct from litter)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f5e1a-9e49-11e5-803c-0d0b866b59f3.html">c13Soil</a></td>
    <td>Mass of 13C in Soil Pool</td>
    <td>kg m-2</td>
    <td>Carbon-13 mass content per unit area in soil.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f49fc-9e49-11e5-803c-0d0b866b59f3.html">c13Land</a></td>
    <td>Mass of 13C in All Terrestrial Carbon Pools</td>
    <td>kg m-2</td>
    <td>Carbon-13 mass content per unit area in vegetation (any living plants e.g. trees, shrubs, grass), litter (dead plant material in or above the soil), soil, and forestry and agricultural products (e.g. paper, cardboard, furniture, timber for construction, biofuels and food for both humans and livestock).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59144c36-9e49-11e5-803c-0d0b866b59f3.html">c13Veg</a></td>
    <td>Mass of 13C in Vegetation</td>
    <td>kg m-2</td>
    <td>Carbon-13 mass content per unit area in vegetation (any living plants e.g. trees, shrubs, grass).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590de850-9e49-11e5-803c-0d0b866b59f3.html">c13Litter</a></td>
    <td>Mass of 13C in Litter Pool</td>
    <td>kg m-2</td>
    <td>Carbon-13 mass content per unit area litter (dead plant material in or above the soil).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913d382-9e49-11e5-803c-0d0b866b59f3.html">c14Soil</a></td>
    <td>Mass of 14C in Soil Pool</td>
    <td>kg m-2</td>
    <td>Carbon-14 mass content per unit area in soil.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f885e-9e49-11e5-803c-0d0b866b59f3.html">c14Land</a></td>
    <td>Mass of 14C in All Terrestrial Carbon Pools</td>
    <td>kg m-2</td>
    <td>Carbon-14 mass content per unit area in vegetation (any living plants e.g. trees, shrubs, grass), litter (dead plant material in or above the soil), soil, and forestry and agricultural products (e.g. paper, cardboard, furniture, timber for construction, biofuels and food for both humans and livestock).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59149524-9e49-11e5-803c-0d0b866b59f3.html">c14Veg</a></td>
    <td>Mass of 14C in Vegetation</td>
    <td>kg m-2</td>
    <td>Carbon-14 mass content per unit area in vegetation (any living plants e.g. trees, shrubs, grass).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e29c8-9e49-11e5-803c-0d0b866b59f3.html">c14Litter</a></td>
    <td>Mass of 14C in Litter Pool</td>
    <td>kg m-2</td>
    <td>Carbon-14 mass content per unit area litter (dead plant material in or above the soil).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913ad62-9e49-11e5-803c-0d0b866b59f3.html">dtesn</a></td>
    <td>Change in Snow and Ice Cold Content</td>
    <td>J m-2</td>
    <td>Change in cold content over the snow layer for which the energy balance is calculated, accumulated over the sampling time interval. This should also include the energy contained in the liquid water in the snow pack.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917f9c6-9e49-11e5-803c-0d0b866b59f3.html">dtes</a></td>
    <td>Change in Surface Heat Storage</td>
    <td>J m-2</td>
    <td>Change in heat storage over the soil layer and the vegetation for which the energy balance is calculated, accumulated over the sampling time interval.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f1d10-9e49-11e5-803c-0d0b866b59f3.html">dsn</a></td>
    <td>Change in Snow Water Equivalent</td>
    <td>kg m-2</td>
    <td>Change in time of the mass per unit area of ice in glaciers, ice caps, ice sheets and shelves, river and lake ice, any other ice on a land surface, such as frozen flood water, and snow lying on such ice or on the land surface.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591313de-9e49-11e5-803c-0d0b866b59f3.html">drivw</a></td>
    <td>Change in River Storage</td>
    <td>kg m-2</td>
    <td>Change over time of the mass of water per unit area in the fluvial system (stream and floodplain).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/171d617ceca8a4351f53d090c0ead89c.html">chldiaz</a></td>
    <td>Mass Concentration of Diazotrophs Expressed as Chlorophyll in Sea Water</td>
    <td>kg m-3</td>
    <td>Chlorophyll concentration from the diazotrophic phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/98fab6148c36b25a158062a11c0c5965.html">chlmisc</a></td>
    <td>Mass Concentration of Other Phytoplankton Expressed as Chlorophyll in Sea Water</td>
    <td>kg m-3</td>
    <td>Chlorophyll from additional phytoplankton component concentrations alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c947141b54f1ab48dba4a84cec99c5d3.html">chldiat</a></td>
    <td>Mass Concentration of Diatoms Expressed as Chlorophyll in Sea Water</td>
    <td>kg m-3</td>
    <td>Chlorophyll from diatom phytoplankton component concentration alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/cfe4bddb7dbbfc57c19837e7f99d2dda.html">cdnc</a></td>
    <td>Cloud Liquid Droplet Number Concentration</td>
    <td>m-3</td>
    <td>Cloud Droplet Number Concentration in liquid water clouds.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2cd1940e7201d5adb02ba157a74fc33e.html">cls</a></td>
    <td>Percentage Cover of Stratiform Cloud</td>
    <td>%</td>
    <td>Cloud area fraction (reported as a percentage) for the whole atmospheric column due to stratiform clouds, as seen from the surface or the top of the atmosphere. Includes both large-scale and convective cloud.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913a2fe-9e49-11e5-803c-0d0b866b59f3.html">cldicemxrat</a></td>
    <td>Cloud Ice Mixing Ratio</td>
    <td>1</td>
    <td>Cloud ice mixing ratio</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59151ed6-9e49-11e5-803c-0d0b866b59f3.html">clmisr</a></td>
    <td>Percentage Cloud Cover as Calculated by the MISR Simulator (Including Error Flag)</td>
    <td>%</td>
    <td>Cloud percentage in spectral bands and layers as observed by the Multi-angle Imaging SpectroRadiometer (MISR) instrument. The first layer in each profile is reserved for a retrieval error flag.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59151288-9e49-11e5-803c-0d0b866b59f3.html">cldwatmxrat</a></td>
    <td>Cloud Water Mixing Ratio</td>
    <td>1</td>
    <td>Cloud water mixing ratio</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0245fef16f6eb29465d7fa55923fd12d.html">clcalipso2</a></td>
    <td>CALIPSO Cloud Cover Percentage Undetected by CloudSat (as Percentage of Area Covered)</td>
    <td>%</td>
    <td>Clouds detected by CALIPSO but below the detectability threshold of CloudSat</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d8018-9e49-11e5-803c-0d0b866b59f3.html">columnmassflux</a></td>
    <td>Column Integrated Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Column integral of (mcu-mcd)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59177dc0-9e49-11e5-803c-0d0b866b59f3.html">uqint</a></td>
    <td>Eastward Humidity Transport</td>
    <td>m2 s-1</td>
    <td>Column integrated eastward wind times specific humidity</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591306a0-9e49-11e5-803c-0d0b866b59f3.html">vqint</a></td>
    <td>Northward Humidity Transport</td>
    <td>m2 s-1</td>
    <td>Column integrated northward wind times specific humidity</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ed0a8-9e49-11e5-803c-0d0b866b59f3.html">necbLut</a></td>
    <td>Net Carbon Mass Flux into Land-Use Tile</td>
    <td>kg m-2 s-1</td>
    <td>Computed as npp minus heterotrophic respiration minus fire minus C leaching minus harvesting/clearing. Positive rate is into the land, negative rate is from the land.  Do not include fluxes from anthropogenic product pools to atmosphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4d42d6e262fdc2c20cf8e2e82826e0c8.html">wfonocorr</a></td>
    <td>Water Flux into Sea Water Without Flux Correction</td>
    <td>kg m-2 s-1</td>
    <td>Computed as the water flux (without flux correction) into the ocean divided by the area of the ocean portion of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c3805ef555348a5f525cf09ccb254af4.html">wfo</a></td>
    <td>Water Flux into Sea Water</td>
    <td>kg m-2 s-1</td>
    <td>Computed as the water flux into the ocean divided by the area of the ocean portion of the grid cell. This is the sum *wfonocorr* and *wfcorr*.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/604242476d85346b48bd6d791ed05583.html">wfcorr</a></td>
    <td>Water Flux Correction</td>
    <td>kg m-2 s-1</td>
    <td>Computed as the water flux into the ocean due to flux correction divided by the area of the ocean portion of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591505ae-9e49-11e5-803c-0d0b866b59f3.html">flandice</a></td>
    <td>Water Flux into Sea Water from Land Ice</td>
    <td>kg m-2 s-1</td>
    <td>Computed as the water flux into the ocean due to land ice (runoff water from surface and base of land ice or melt from base of ice shelf or vertical ice front) into the ocean divided by the area ocean portion of the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e9390-9e49-11e5-803c-0d0b866b59f3.html">sicompstren</a></td>
    <td>Compressive Sea Ice Strength</td>
    <td>N m-1</td>
    <td>Computed strength of the ice pack, defined as the energy (J m-2) dissipated per unit area removed from the ice pack under compression, and assumed proportional to the change in potential energy caused by ridging. For Hibler-type models, this is P (= P*h exp(-C(1-A)) where P* is compressive strength, h ice thickness, A compactness and C strength reduction constant).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59d5c1ca37702f3ab916f1c9096d8f7f.html">cldnci</a></td>
    <td>Ice Crystal Number Concentration of Cloud Tops</td>
    <td>m-3</td>
    <td>Concentration 'as seen from space' over ice-cloud portion of grid cell.  This is the value from uppermost model layer with ice cloud or, if available, it is the sum over all ice cloud tops, no matter where they occur, as long as they are seen from the top of the atmosphere. Weight by total ice cloud top fraction (as seen from TOA) of each time sample when computing monthly mean.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/479c5de8-12cc-11e6-b2bc-ac72891c3257.html">ocontemprmadvect</a></td>
    <td>Tendency of Sea Water Conservative Temperature Expressed as Heat Content Due to Residual Mean Advection</td>
    <td>W m-2</td>
    <td>Conservative Temperature is defined as part of the Thermodynamic Equation of Seawater 2010 (TEOS-10) which was adopted in 2010 by the International Oceanographic Commission (IOC). The phrase &quot;residual mean advection&quot; refers to the sum of the model's resolved advective transport plus any parameterized advective transport. Parameterized advective transport includes processes such as parameterized mesoscale and submesoscale transport, as well as any other advectively parameterized transport. When the parameterized advective transport is represented in the model as a skew-diffusion rather than an advection, then the parameterized skew diffusion should be included in this diagnostic, since the convergence of skew-fluxes are identical (in the continuous formulation) to the convergence of advective fluxes.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/26542cc98f984d1b098796374a7ed264.html">hfx</a></td>
    <td>Ocean Heat X Transport</td>
    <td>W</td>
    <td>Contains all contributions to &quot;x-ward&quot; heat transport from resolved and parameterized processes.  Use Celsius for temperature scale.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fa3149feef6236e0cc3207a977d2d0a5.html">hfy</a></td>
    <td>Ocean Heat Y Transport</td>
    <td>W</td>
    <td>Contains all contributions to &quot;y-ward&quot; heat transport from resolved and parameterized processes. Use Celsius for temperature scale.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1f5bb8c9dd54043a9d5f71dfe38f5a19.html">hfbasin</a></td>
    <td>Northward Ocean Heat Transport</td>
    <td>W</td>
    <td>Contains contributions from all physical processes affecting the northward heat transport, including resolved advection, parameterized advection, lateral diffusion, etc. Diagnosed here as a function of latitude and basin.   Use Celsius for temperature scale.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2e3e882a650986c1fdc5df05f5f10263.html">hfbasinpadv</a></td>
    <td>Northward Ocean Heat Transport Due to Parameterized Eddy Advection</td>
    <td>W</td>
    <td>Contributions to heat transport from parameterized eddy-induced advective transport due to any subgrid advective process. Diagnosed here as a function of latitude and basin.  Use Celsius for temperature scale.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/32cbc6ae59c0abfe8e9c526e548452cc.html">hfbasinpmadv</a></td>
    <td>Northward Ocean Heat Transport Due to Parameterized Mesoscale Advection</td>
    <td>W</td>
    <td>Contributions to heat transport from parameterized mesoscale eddy-induced advective transport. Diagnosed here as a function of latitude and basin.  Use Celsius for temperature scale.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/cfc72744e73c1f6116661e251316c04f.html">hfbasinpsmadv</a></td>
    <td>Northward Ocean Heat Transport Due to Parameterized Submesoscale Advection</td>
    <td>W</td>
    <td>Contributions to heat transport from parameterized mesoscale eddy-induced advective transport. Diagnosed here as a function of latitude and basin.  Use Celsius for temperature scale.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/88f1496a06008de969d5913384e6cb17.html">hfbasinpmdiff</a></td>
    <td>Northward Ocean Heat Transport Due to Parameterized Mesoscale Diffusion</td>
    <td>W</td>
    <td>Contributions to heat transport from parameterized mesoscale eddy-induced diffusive transport (i.e., neutral diffusion). Diagnosed here as a function of latitude and basin.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d6e02-9e49-11e5-803c-0d0b866b59f3.html">prcsh</a></td>
    <td>Precipitation Flux from Shallow Convection</td>
    <td>kg m-2 s-1</td>
    <td>Convection precipitation from shallow convection</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4e6ce0bc3ad0814b4c0523304965513f.html">cltc</a></td>
    <td>Convective Cloud Cover Percentage</td>
    <td>%</td>
    <td>Convective cloud area fraction (reported as a percentage) for the whole atmospheric column, as seen from the surface or the top of the atmosphere. Includes only convective cloud.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/aa2bea81f238ad8f2c35a7e16ad97801.html">prc</a></td>
    <td>Convective Precipitation</td>
    <td>kg m-2 s-1</td>
    <td>Convective precipitation at surface; includes both liquid and solid phases.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59177b18-9e49-11e5-803c-0d0b866b59f3.html">fracInLut</a></td>
    <td>Annual Gross Percentage That Was Transferred into This Tile from Other Land-Use Tiles</td>
    <td>%</td>
    <td>Cumulative percentage transitions over the year; note that percentage should be reported as a percentage of atmospheric grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913dbf2-9e49-11e5-803c-0d0b866b59f3.html">fracOutLut</a></td>
    <td>Annual gross percentage of Land-use tile  that was transferred into other Land-use tiles</td>
    <td>%</td>
    <td>Cumulative percentage transitions over the year; note that percentage should be reported as percentage of atmospheric grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1c15d05ab96de917359e54b16c4fbf14.html">sfcWindmax</a></td>
    <td>Daily Maximum Near-Surface Wind Speed</td>
    <td>m s-1</td>
    <td>Daily maximum near-surface (usually, 10 meters) wind speed.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/646edc2e8f1c393b5569dba5d598f8c8.html">wetoa</a></td>
    <td>Wet Deposition Rate of Dry Aerosol Total Organic Matter</td>
    <td>kg m-2 s-1</td>
    <td>Deposition rate of organic matter in aerosols (measured by the dry mass) due to wet processes</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c97520628498eea6e19cc1be19c73677.html">wetss</a></td>
    <td>Wet Deposition Rate of Sea-Salt Aerosol</td>
    <td>kg m-2 s-1</td>
    <td>Deposition rate of sea salt aerosols (measured by the dry mass) due to wet processes</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a3383a3abeddbcb0d27368a8cf9b9503.html">wetso4</a></td>
    <td>Wet Deposition Rate of SO4</td>
    <td>kg m-2 s-1</td>
    <td>Deposition rate of sulfate aerosols (measured by the dry mass) due to wet processes</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c670517b02de6212f3091aaa455f60ed.html">wetso2</a></td>
    <td>Wet Deposition Rate of SO2</td>
    <td>kg m-2 s-1</td>
    <td>Deposition rate of sulfur dioxide due to wet processes</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/44471dd9799293cef70ac63fcdd2476e.html">zfullo</a></td>
    <td>Depth Below Geoid of Ocean Layer</td>
    <td>m</td>
    <td>Depth below geoid</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e4f788872546d474c64f89798a4cb8cb.html">zhalfo</a></td>
    <td>Depth Below Geoid of Interfaces Between Ocean Layers</td>
    <td>m</td>
    <td>Depth below geoid</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d8fc2-9e49-11e5-803c-0d0b866b59f3.html">dmlt</a></td>
    <td>Depth to Soil Thaw</td>
    <td>m</td>
    <td>Depth from surface to the zero degree isotherm. Above this isotherm T &gt; 0o, and below this line T &lt; 0o. Missing if surface is frozen or if soil is unfrozen at all depths.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f56a3a44b60650b58309b1d8cf58b913.html">dispkexyfo</a></td>
    <td>Ocean Kinetic Energy Dissipation per Unit Area Due to XY Friction</td>
    <td>W m-2</td>
    <td>Depth integrated impacts on kinetic energy arising from lateral frictional dissipation associated with Laplacian and/or biharmonic viscosity. For CMIP5, this diagnostic was 3d, whereas the CMIP6 depth integrated diagnostic is sufficient for many purposes and reduces archive requirements.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bb27046ce21470dfbbecdd4f7eca546a.html">tnkebto</a></td>
    <td>Tendency of Ocean Eddy Kinetic Energy Content Due to Parameterized Eddy Advection</td>
    <td>W m-2</td>
    <td>Depth integrated impacts on kinetic energy arising from parameterized eddy-induced advection. For CMIP5, this diagnostic was 3d, whereas the CMIP6 depth integrated diagnostic is sufficient for many purposes and reduces archive requirements.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913c4dc-9e49-11e5-803c-0d0b866b59f3.html">wtd</a></td>
    <td>Water Table Depth</td>
    <td>m</td>
    <td>Depth is the vertical distance below the surface. The water table is the surface below which the soil is saturated with water such that all pore spaces are filled.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f4b0302d898785a6003754fe9b097690.html">zsatarag</a></td>
    <td>Aragonite Saturation Depth</td>
    <td>m</td>
    <td>Depth of aragonite saturation horizon (0 if undersaturated at all depths, &quot;missing&quot; if supersaturated at all depths; if multiple horizons exist, the shallowest should be taken).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7324bbd4b756759ef380f305fe5856b2.html">zsatcalc</a></td>
    <td>Calcite Saturation Depth</td>
    <td>m</td>
    <td>Depth of calcite saturation horizon (0 if undersaturated at all depths, and missing saturated through whole depth; if two or more horizons exist, then the shallowest is reported)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d254e68c03491d17660ec44e7565f9e2.html">zo2min</a></td>
    <td>Depth of Oxygen Minimum Concentration</td>
    <td>m</td>
    <td>Depth of vertical minimum concentration of dissolved oxygen gas (if two, then the shallower)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4f3e5df56723b77c87e15cce7594ab94.html">tdps</a></td>
    <td>2m Dewpoint Temperature</td>
    <td>K</td>
    <td>Dew point temperature is the temperature at which a parcel of air reaches saturation upon being cooled at constant pressure and specific humidity.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f0280734103f054b10012331ab1c0459.html">thetaoga</a></td>
    <td>Global Average Sea Water Potential Temperature</td>
    <td>degC</td>
    <td>Diagnostic should be contributed even for models using conservative temperature as prognostic field</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/cf53bdf4168a9107354d059ff39b5753.html">thetao</a></td>
    <td>Sea Water Potential Temperature</td>
    <td>degC</td>
    <td>Diagnostic should be contributed even for models using conservative temperature as prognostic field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6901f6894f7382d628084809e7208c4b.html">bigthetaoga</a></td>
    <td>Global Average Sea Water Conservative Temperature</td>
    <td>degC</td>
    <td>Diagnostic should be contributed only for models using conservative temperature as prognostic field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1dfd4bb59374157f2bcd5338c90a54b4.html">limfediat</a></td>
    <td>Iron Limitation of Diatoms</td>
    <td>1</td>
    <td>Diatoms are phytoplankton with an external skeleton made of silica. Phytoplankton are algae that grow where there is sufficient light to support photosynthesis. &quot;Iron growth limitation&quot; means the ratio of the growth rate of a species population in the environment (where there is a finite availability of iron) to the theoretical growth rate if there were no such limit on iron availability.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f1b2785c2f21b3ca1fbe97a1152920f6.html">limndiat</a></td>
    <td>Nitrogen Limitation of Diatoms</td>
    <td>1</td>
    <td>Diatoms are phytoplankton with an external skeleton made of silica. Phytoplankton are algae that grow where there is sufficient light to support photosynthesis. &quot;Nitrogen growth limitation&quot; means the ratio of the growth rate of a species population in the environment (where there is a finite availability of nitrogen) to the theoretical growth rate if there were no such limit on nitrogen availability.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c97324c8-c5f0-11e6-ac20-5404a60d96b5.html">dpco2abio</a></td>
    <td>Abiotic Delta Pco Partial Pressure</td>
    <td>Pa</td>
    <td>Difference in partial pressure of abiotic-analogue carbon dioxide between sea water and air.  The partial pressure of a dissolved gas in sea water is the partial pressure in air with which it would be in equilibrium. An abiotic analogue is used to simulate the effect on a modelled variable when biological effects on ocean carbon concentration and alkalinity are ignored.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/011e37046b327b256ca0e6b5f8722699.html">dpco2</a></td>
    <td>Delta CO2 Partial Pressure</td>
    <td>Pa</td>
    <td>Difference in partial pressure of carbon dioxide between sea water and air.  The partial pressure of a dissolved gas in sea water is the partial pressure in air with which it would be in equilibrium. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c97316d6-c5f0-11e6-ac20-5404a60d96b5.html">dpco2nat</a></td>
    <td>Natural Delta CO2 Partial Pressure </td>
    <td>Pa</td>
    <td>Difference in partial pressure of natural-analogue carbon dioxide between sea water and air.  The partial pressure of a dissolved gas in sea water is the partial pressure in air with which it would be in equilibrium.  A natural analogue is used to simulate the effect on a modelled variable of imposing preindustrial atmospheric carbon dioxide concentrations, even when the model as a whole may be subjected to varying forcings. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59148f52-9e49-11e5-803c-0d0b866b59f3.html">cTotFireLut</a></td>
    <td>Total Carbon Loss from Natural and Managed Fire on Land-Use Tile, Including Deforestation Fires</td>
    <td>kg m-2 s-1</td>
    <td>Different from LMON this flux should include all fires occurring on the land use tile, including natural, man-made and deforestation fires</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/007c5380d1b91abef954c3b97871f018.html">diftrxybo</a></td>
    <td>Ocean Tracer XY Biharmonic Diffusivity</td>
    <td>m4 s-1</td>
    <td>Diffusivity is also sometimes known as the coefficient of diffusion. Diffusion occurs as a result of a gradient in the spatial distribution of mass concentration, temperature or momentum.  The diffusivity may be very different in the vertical and horizontal directions. &quot;xy diffusivity&quot; means the lateral along_coordinate component of diffusivity due to motion which is not resolved on the grid scale of the model.  xy diffusivities are used in some ocean models to counteract the numerical instabilities inherent in certain implementations of rotated neutral diffusion. &quot;biharmonic diffusivity&quot; means diffusivity for use with a biharmonic diffusion operator.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/478c43820503be64675fb49227d2f999.html">diftrxylo</a></td>
    <td>Ocean Tracer XY Laplacian Diffusivity</td>
    <td>m2 s-1</td>
    <td>Diffusivity is also sometimes known as the coefficient of diffusion. Diffusion occurs as a result of a gradient in the spatial distribution of mass concentration, temperature or momentum.  The diffusivity may be very different in the vertical and horizontal directions. &quot;xy diffusivity&quot; means the lateral along_coordinate component of diffusivity due to motion which is not resolved on the grid scale of the model.  xy diffusivities are used in some ocean models to counteract the numerical instabilities inherent in certain implementations of rotated neutral diffusion. &quot;laplacian diffusivity&quot; means diffusivity for use with a Laplacian diffusion operator.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9e50f2bc84a18f56a9c317be11770663.html">difvmto</a></td>
    <td>Ocean Vertical Momentum Diffusivity Due to Tides</td>
    <td>m2 s-1</td>
    <td>Diffusivity is also sometimes known as the coefficient of diffusion. Diffusion occurs as a result of a gradient in the spatial distribution of mass concentration, temperature or momentum.  The diffusivity may be very different in the vertical and horizontal directions. The construction vertical_X_diffusivity means the vertical component of the diffusivity of X due to motion which is not resolved on the grid scale of the model. &quot;Due to tides&quot; means due to all astronomical gravity changes which manifest as tides. No distinction is made between different tidal components. The specification of a physical process by the phrase due_to_process means that the quantity named is a  single term in a sum of terms which together compose the general quantity  named by omitting the phrase.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e479e7abd9bcef1806494ce9b50f39b3.html">emiso4</a></td>
    <td>Total Direct Emission Rate of SO4</td>
    <td>kg m-2 s-1</td>
    <td>Direct primary emission does not include secondary sulfate production. Integrate 3D emission field vertically to 2d field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9af5cb75998bb01d32958af3aeb30083.html">fediss</a></td>
    <td>Particulate Source of Dissolved Iron</td>
    <td>mol m-3 s-1</td>
    <td>Dissolution, remineralization and desorption of iron back to the dissolved phase</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9a9dda6b54b64f67bda703c77465cceb.html">fescav</a></td>
    <td>Non-Biogenic Iron Scavenging</td>
    <td>mol m-3 s-1</td>
    <td>Dissolved Fe removed through nonbiogenic scavenging onto particles</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2fcdf51262cdbc4279810b7a487b149e.html">dissicnat</a></td>
    <td>Natural Dissolved Inorganic Carbon Concentration</td>
    <td>mol m-3</td>
    <td>Dissolved inorganic carbon (CO3+HCO3+H2CO3) concentration at preindustrial atmospheric xCO2</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96c470c-c5f0-11e6-ac20-5404a60d96b5.html">dissicnatos</a></td>
    <td>Surface Natural Dissolved Inorganic Carbon Concentration</td>
    <td>mol m-3</td>
    <td>Dissolved inorganic carbon (CO3+HCO3+H2CO3) concentration at preindustrial atmospheric xCO2</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/13654e951d583dc7d02b5c23485e6eb5.html">dissic</a></td>
    <td>Dissolved Inorganic Carbon Concentration</td>
    <td>mol m-3</td>
    <td>Dissolved inorganic carbon (CO3+HCO3+H2CO3) concentration</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96c3794-c5f0-11e6-ac20-5404a60d96b5.html">dissicos</a></td>
    <td>Surface Dissolved Inorganic Carbon Concentration</td>
    <td>mol m-3</td>
    <td>Dissolved inorganic carbon (CO3+HCO3+H2CO3) concentration</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59175660-9e49-11e5-803c-0d0b866b59f3.html">dissi13c</a></td>
    <td>Dissolved Inorganic Carbon-13 Concentration</td>
    <td>mol m-3</td>
    <td>Dissolved inorganic carbon-13 (CO3+HCO3+H2CO3) concentration</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59144254-9e49-11e5-803c-0d0b866b59f3.html">dissi14c</a></td>
    <td>Dissolved Inorganic Carbon-14 Concentration</td>
    <td>mol m-3</td>
    <td>Dissolved inorganic carbon-14 (CO3+HCO3+H2CO3) concentration</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5250c73892803497448e18ba0310c423.html">dfe</a></td>
    <td>Dissolved Iron Concentration</td>
    <td>mol m-3</td>
    <td>Dissolved iron in sea water,  including both Fe2+ and Fe3+ ions (but not particulate detrital iron)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d7924-9e49-11e5-803c-0d0b866b59f3.html">sidivvel</a></td>
    <td>Divergence of the Sea-Ice Velocity Field</td>
    <td>s-1</td>
    <td>Divergence of sea-ice velocity field (first shear strain invariant)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3abb7c5b4c4650e9d17a8439004aebea.html">tauu</a></td>
    <td>Surface Downward Eastward Wind Stress</td>
    <td>Pa</td>
    <td>Downward eastward wind stress at the surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/684d3f3543045a89ecbb0ca81ba6705f.html">exparag</a></td>
    <td>Downward Flux of Aragonite</td>
    <td>mol m-2 s-1</td>
    <td>Downward flux of Aragonite</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/71480abb30ae62d262fcea6cfdd753cf.html">expcalc</a></td>
    <td>Downward Flux of Calcite</td>
    <td>mol m-2 s-1</td>
    <td>Downward flux of Calcite</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4f309d6b2d689c19254dccc24c66e32d.html">expc</a></td>
    <td>Downward Flux of Particulate Organic Carbon</td>
    <td>mol m-2 s-1</td>
    <td>Downward flux of particulate organic carbon</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bd10cebbde1593b65e5220911f9a997c.html">tauv</a></td>
    <td>Surface Downward Northward Wind Stress</td>
    <td>Pa</td>
    <td>Downward northward wind stress at the surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c432bfbfc0e7f4403f91af39736ff61c.html">rld</a></td>
    <td>Downwelling Longwave Radiation</td>
    <td>W m-2</td>
    <td>Downwelling Longwave Radiation (includes the fluxes at the surface and TOA)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e79eb59d74038643b2201bb0556e720a.html">rldcs</a></td>
    <td>Downwelling Clear-Sky Longwave Radiation</td>
    <td>W m-2</td>
    <td>Downwelling clear-sky longwave radiation (includes the fluxes at the surface and TOA)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bc0982cd4cc45a7ad96524f549a468c4.html">rldcs4co2</a></td>
    <td>Downwelling Clear-Sky Longwave Radiation 4XCO2 Atmosphere</td>
    <td>W m-2</td>
    <td>Downwelling clear-sky longwave radiation calculated using carbon dioxide concentrations increased fourfold (includes the fluxes at the surface and TOA)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/38806cec3ba894d7745fada80c9f6fe6.html">rsdcs</a></td>
    <td>Downwelling Clear-Sky Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Downwelling clear-sky shortwave radiation (includes the fluxes at the surface and top-of-atmosphere)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b8acc50c52fa48b40a4512d06d2d6435.html">rsdcs4co2</a></td>
    <td>Downwelling Clear-Sky Shortwave Radiation 4XCO2 Atmosphere</td>
    <td>W m-2</td>
    <td>Downwelling clear-sky shortwave radiation calculated using carbon dioxide concentrations increased fourfold</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e0279cf7335a5b9292a1a3c8f70a32a2.html">rld4co2</a></td>
    <td>Downwelling Longwave Radiation 4XCO2 Atmosphere</td>
    <td>W m-2</td>
    <td>Downwelling longwave radiation calculated using carbon dioxide concentrations increased fourfold (includes the fluxes at the surface and TOA)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/749bcc09df8dd3d042e7954b42970906.html">rsdo</a></td>
    <td>Downwelling Shortwave Radiation in Sea Water</td>
    <td>W m-2</td>
    <td>Downwelling radiation is radiation from above. It does not mean &quot;net downward&quot;.  When thought of as being incident on a surface, a radiative flux is sometimes called &quot;irradiance&quot;.  In addition, it is identical with the quantity measured by a cosine-collector light-meter and sometimes called &quot;vector irradiance&quot;.  In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.  &quot;shortwave&quot; means shortwave radiation.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914e34e-9e49-11e5-803c-0d0b866b59f3.html">swtoafluxaerocs</a></td>
    <td>TOA Outgoing Clear-Sky Shortwave Flux Due to Volcanic Aerosols</td>
    <td>W m-2</td>
    <td>Downwelling shortwave flux due to volcanic aerosols at TOA under clear sky to be diagnosed through double radiation call</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/eb9ac643cd9c73cae960d6d2db7b901d.html">rsd</a></td>
    <td>Downwelling Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Downwelling shortwave radiation (includes the fluxes at the surface and top-of-atmosphere)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6248574ebce5bf9fde3841735c9108bc.html">rsd4co2</a></td>
    <td>Downwelling Shortwave Radiation 4XCO2 Atmosphere</td>
    <td>W m-2</td>
    <td>Downwelling shortwave radiation calculated using carbon dioxide concentrations increased fourfold</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917af7a-9e49-11e5-803c-0d0b866b59f3.html">scldncl</a></td>
    <td>Cloud Droplet Number Concentration of Stratiform Cloud Tops</td>
    <td>m-3</td>
    <td>Droplets are liquid only.  Report concentration &quot;as seen from space&quot; over stratiform liquid cloudy portion of grid cell.  This is the value from uppermost model layer with liquid cloud or, if available, it is better to sum over all liquid cloud tops, no matter where they occur, as long as they are seen from the top of the atmosphere. Weight by total liquid cloud top fraction of  (as seen from TOA) each time sample when computing monthly mean.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59137996-9e49-11e5-803c-0d0b866b59f3.html">ccldncl</a></td>
    <td>Cloud Droplet Number Concentration of Convective Cloud Tops</td>
    <td>m-3</td>
    <td>Droplets are liquid only.  Report concentration 'as seen from space' over convective liquid cloudy portion of grid cell.  This is the value from uppermost model layer with liquid cloud or, if available, it is better to sum over all liquid cloud tops, no matter where they occur, as long as they are seen from the top of the atmosphere. Weight by total liquid cloud top fraction of  (as seen from TOA) each time sample when computing monthly mean.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/069ed8a3f93e92dab9e61f59b4d5338e.html">cldncl</a></td>
    <td>Cloud Droplet Number Concentration of Cloud Tops</td>
    <td>m-3</td>
    <td>Droplets are liquid only.  Report concentration 'as seen from space' over liquid cloudy portion of grid cell.  This is the value from uppermost model layer with liquid cloud or, if available, it is better to sum over all liquid cloud tops, no matter where they occur, as long as they are seen from the top of the atmosphere. Weight by total liquid cloud top fraction of  (as seen from TOA) each time sample when computing monthly mean.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f64fa-9e49-11e5-803c-0d0b866b59f3.html">reffcclwtop</a></td>
    <td>Cloud-Top Effective Droplet Radius in Convective Cloud</td>
    <td>m</td>
    <td>Droplets are liquid only.  This is the effective radius &quot;as seen from space&quot; over convective liquid cloudy portion of grid cell.  This is the value from uppermost model layer with liquid cloud or, if available, or for some models it is the sum over all liquid cloud tops, no matter where they occur, as long as they are seen from the top of the atmosphere. Reported values are weighted by total liquid cloud top fraction of  (as seen from TOA) each time sample when computing monthly mean.daily data, separated to large-scale clouds, convective clouds. If any of the cloud is from more than one process (i.e. shallow convection), please provide them separately.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59131be0-9e49-11e5-803c-0d0b866b59f3.html">reffsclwtop</a></td>
    <td>Cloud-Top Effective Droplet Radius in Stratiform Cloud</td>
    <td>m</td>
    <td>Droplets are liquid only.  This is the effective radius &quot;as seen from space&quot; over liquid stratiform cloudy portion of grid cell.  This is the value from uppermost model layer with liquid cloud or, if available, or for some models it is the sum over all liquid cloud tops, no matter where they occur, as long as they are seen from the top of the atmosphere. Reported values are weighted by total liquid cloud top fraction of  (as seen from TOA) each time sample when computing monthly mean.daily data, separated to large-scale clouds, convective clouds. If any of the cloud is from more than one process (i.e. shallow convection), please provide them separately.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/83d1d066c3325c7402b6265eee068056.html">reffclwtop</a></td>
    <td>Cloud-Top Effective Droplet Radius</td>
    <td>m</td>
    <td>Droplets are liquid only.  This is the effective radius as seen from space over liquid cloudy portion of grid cell. This is the value from uppermost model layer with liquid cloud or, if available, or for some models it is the sum over all liquid cloud tops, no matter where they occur, as long as they are seen from the top of the atmosphere (TOA) each time sample when computing monthly mean. Reported values are weighted by total liquid cloud top fraction of  (as seen from TOA) each time sample when computing monthly mean.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f946653cd518e221676f263a895c7852.html">cldnvi</a></td>
    <td>Column Integrated Cloud Droplet Number</td>
    <td>m-2</td>
    <td>Droplets are liquid only.  Values are weighted by liquid cloud fraction in each layer when vertically integrating, and for monthly means the samples are weighted by total liquid cloud fraction (as seen from TOA).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7aa8f285b17a5bcfce416f19c29d6d72.html">reffclwc</a></td>
    <td>Convective Cloud Liquid Droplet Effective Radius</td>
    <td>m</td>
    <td>Droplets are liquid.  The effective radius is defined as the ratio of the third moment over the second moment of the particle size distribution and the time-mean should be calculated, weighting the individual samples by the cloudy fraction of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ed2fff61c68d8a09d5034168e82ae862.html">reffclws</a></td>
    <td>Stratiform Cloud Liquid Droplet Effective Radius</td>
    <td>m</td>
    <td>Droplets are liquid.  The effective radius is defined as the ratio of the third moment over the second moment of the particle size distribution and the time-mean should be calculated, weighting the individual samples by the cloudy fraction of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6444d8c6e394c5d66ae3f732f0ede043.html">drydust</a></td>
    <td>Dry Deposition Rate of Dust</td>
    <td>kg m-2 s-1</td>
    <td>Dry deposition includes gravitational settling, impact scavenging, and turbulent deposition.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9b53f7b02bc4f1e2af69632f52a18b28.html">dryss</a></td>
    <td>Dry Deposition Rate of Sea-Salt Aerosol</td>
    <td>kg m-2 s-1</td>
    <td>Dry deposition includes gravitational settling, impact scavenging, and turbulent deposition.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f17637206609c6f9e14190d3ac6a1e6b.html">drybc</a></td>
    <td>Dry Deposition Rate of Black Carbon Aerosol Mass</td>
    <td>kg m-2 s-1</td>
    <td>Dry deposition includes gravitational settling, impact scavenging, and turbulent deposition.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917c046-9e49-11e5-803c-0d0b866b59f3.html">sedustCI</a></td>
    <td>Sedimentation Flux of Dust Mode Coarse Insoluble</td>
    <td>kg m-2 s-1</td>
    <td>Dry mass deposition rate of dust aerosol.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe6ccf42-a41f-11e5-9025-ac72891c3257.html">mmrnh4</a></td>
    <td>NH4 Mass Mixing Ratio</td>
    <td>kg kg-1</td>
    <td>Dry mass fraction of ammonium aerosol particles in air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d63c4dd912d79edc6221c0e09da24a79.html">mmrbc</a></td>
    <td>Elemental Carbon Mass Mixing Ratio</td>
    <td>kg kg-1</td>
    <td>Dry mass fraction of black carbon aerosol particles in air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/dcecb293537e640a0bfc8f88a92967fe.html">mmrdust</a></td>
    <td>Dust Aerosol Mass Mixing Ratio</td>
    <td>kg kg-1</td>
    <td>Dry mass fraction of dust aerosol particles in air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/11619ca70c37ffd25d5b234c03ca4d4f.html">mmrno3</a></td>
    <td>NO3 Aerosol Mass Mixing Ratio</td>
    <td>kg kg-1</td>
    <td>Dry mass fraction of nitrate aerosol particles in air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe6ca6e8-a41f-11e5-9025-ac72891c3257.html">mmrso4</a></td>
    <td>Aerosol Sulfate Mass Mixing Ratio</td>
    <td>kg kg-1</td>
    <td>Dry mass of sulfate (SO4) in aerosol particles as a fraction of air mass.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914b748-9e49-11e5-803c-0d0b866b59f3.html">cOther</a></td>
    <td>Carbon Mass in Vegetation Components Other than Leaves, Stems and Roots</td>
    <td>kg m-2</td>
    <td>E.g. fruits, seeds, etc.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917cc94-9e49-11e5-803c-0d0b866b59f3.html">nOther</a></td>
    <td>Nitrogen Mass in Vegetation Components Other than Leaves, Stem and Root</td>
    <td>kg m-2</td>
    <td>E.g. fruits, seeds, etc.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e72b243a2a1c8691ab0168d8b62534c2.html">uas</a></td>
    <td>Eastward Near-Surface Wind</td>
    <td>m s-1</td>
    <td>Eastward component of the near-surface (usually, 10 meters)  wind</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d4724-9e49-11e5-803c-0d0b866b59f3.html">tr</a></td>
    <td>Surface Radiative Temperature</td>
    <td>K</td>
    <td>Effective radiative surface temperature, averaged over the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e4674-9e49-11e5-803c-0d0b866b59f3.html">md</a></td>
    <td>Wet Diameter Mode Coarse Insoluble</td>
    <td>kg m-2 s-1</td>
    <td>Emission from a primary source located anywhere within the atmosphere, including at the lower boundary (i.e. the surface of the earth). </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591423aa-9e49-11e5-803c-0d0b866b59f3.html">fracLut</a></td>
    <td>Percentage of Grid Cell for Each Land-Use Tile</td>
    <td>%</td>
    <td>End of year values (not annual mean); note that percentage should be reported as percentage of land grid cell (example: frac_lnd = 0.5, frac_ocn = 0.5, frac_crop_lnd = 0.2 (of land portion of grid cell), then frac_lut(crop) = 0.5*0.2 = 0.1)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590eacc2-9e49-11e5-803c-0d0b866b59f3.html">hfmlt</a></td>
    <td>Energy of Fusion</td>
    <td>W m-2</td>
    <td>Energy consumed or released during liquid/solid phase changes.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591449ca-9e49-11e5-803c-0d0b866b59f3.html">hfsbl</a></td>
    <td>Energy of Sublimation</td>
    <td>W m-2</td>
    <td>Energy consumed or released during vapor/solid phase changes.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/00460a02b5fde2d2bc592e8ac81af0c5.html">diftrebo</a></td>
    <td>Ocean Tracer Epineutral Biharmonic Diffusivity</td>
    <td>m4 s-1</td>
    <td>Epineutral diffusivity means a lateral diffusivity along a either a neutral or isopycnal density surface due to motion which is not resolved on the grid scale of an ocean model. The type of density surface is dependent on the model formulation. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917ca14-9e49-11e5-803c-0d0b866b59f3.html">eow</a></td>
    <td>Open Water Evaporation</td>
    <td>kg m-2 s-1</td>
    <td>Evaporation (conversion of liquid or solid into vapor) from open water. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/089961a3af4d54d5fb045cf3750e760c.html">evspsbl</a></td>
    <td>Evaporation Including Sublimation and Transpiration</td>
    <td>kg m-2 s-1</td>
    <td>Evaporation at surface (also known as evapotranspiration): flux of water into the atmosphere due to conversion of both liquid and solid phases to vapor (from underlying surface and vegetation)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59131910-9e49-11e5-803c-0d0b866b59f3.html">depdust</a></td>
    <td>Total Deposition Rate of Dust</td>
    <td>kg m-2 s-1</td>
    <td>Fdry mass deposition rate of dust</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/98114e26-b896-11e6-a189-5404a60d96b5.html">aoanh</a></td>
    <td>Northern Hemisphere Tracer Lifetime</td>
    <td>yr</td>
    <td>Fixed surface layer mixing ratio over 30o-50oN (0 ppbv), uniform fixed source (at all levels) everywhere else (source is unspecified but must be constant in space and time and documented). Note that the source could be 1yr/yr, so the tracer concentration provides mean age in years. For method using linearly increasing tracer include a method attribute: &quot;linearly increasing tracer&quot;For method using uniform source (1yr/yr) include a method attribute: &quot;uniform source&quot;</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/97bf948c-b896-11e6-a189-5404a60d96b5.html">nh50</a></td>
    <td>Artificial Tracer with 50 Day Lifetime</td>
    <td>mol mol-1</td>
    <td>Fixed surface layer mixing ratio over 30o-50oN (100ppbv), uniform fixed 50-day exponential decay.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0312fb7cbaaff353e66b17c21fb13482.html">hfcorr</a></td>
    <td>Heat Flux Correction</td>
    <td>W m-2</td>
    <td>Flux correction is also called &quot;flux adjustment&quot;. A positive flux correction is downward i.e. added to the ocean. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c9a640b0-c5f0-11e6-ac20-5404a60d96b5.html">rlutaf</a></td>
    <td>TOA Outgoing Aerosol-Free Longwave Radiation</td>
    <td>W m-2</td>
    <td>Flux corresponding to rlut resulting from aerosol-free call to radiation, following Ghan (ACP, 2013)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c9a673b4-c5f0-11e6-ac20-5404a60d96b5.html">rlutcsaf</a></td>
    <td>TOA Outgoing Clear-Sky, Aerosol-Free Longwave Radiation</td>
    <td>W m-2</td>
    <td>Flux corresponding to rlutcs resulting from aerosol-free call to radiation, following Ghan (ACP, 2013)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c9a56fd2-c5f0-11e6-ac20-5404a60d96b5.html">rsutaf</a></td>
    <td>TOA Outgoing Aerosol-Free Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Flux corresponding to rsut resulting from aerosol-free call to radiation, following Ghan (ACP, 2013)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c9a70b4e-c5f0-11e6-ac20-5404a60d96b5.html">rsutcsaf</a></td>
    <td>TOA Outgoing Clear-Sky, Aerosol-Free Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Flux corresponding to rsutcs resulting from aerosol-free call to radiation, following Ghan (ACP, 2013)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3f3074ee-b89b-11e6-be04-ac72891c3257.html">fProductDecompLut</a></td>
    <td>Net Carbon Mass Flux from Wood and Agricultural Product Pools on Land Use Tile into Atmosphere</td>
    <td>kg m-2 s-1</td>
    <td>Flux of CO2 from product pools into the atmosphere. Examples of &quot;forestry and agricultural products&quot; are paper, cardboard, furniture, timber for construction, biofuels and food for both humans and livestock. Models that simulate land use changes have one or more pools of carbon that represent these products in order to conserve carbon and allow its eventual release into the atmosphere, for example, when the products decompose in landfill sites. Produce this variable i  a model has explicit anthropogenic product pools by land use tile</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f933a-9e49-11e5-803c-0d0b866b59f3.html">fProductDecomp</a></td>
    <td>Decomposition out of Product Pools to CO2 in Atmosphere as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Flux of CO2 from product pools into the atmosphere. Examples of &quot;forestry and agricultural products&quot; are paper, cardboard, furniture, timber for construction, biofuels and food for both humans and livestock. Models that simulate land use changes have one or more pools of carbon that represent these products in order to conserve carbon and allow its eventual release into the atmosphere, for example, when the products decompose in landfill sites.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59174d14-9e49-11e5-803c-0d0b866b59f3.html">fNgasNonFire</a></td>
    <td>Total Nitrogen Lost to the Atmosphere (Including NHx, NOx, N2O, N2) from All Processes Except Fire</td>
    <td>kg m-2 s-1</td>
    <td>Flux of Nitrogen from the land into the atmosphere due to all processes other than fire</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913e156-9e49-11e5-803c-0d0b866b59f3.html">fNgasFire</a></td>
    <td>Total Nitrogen Lost to the Atmosphere (Including NHx, NOx, N2O, N2) from Fire</td>
    <td>kg m-2 s-1</td>
    <td>Flux of Nitrogen from the land into the atmosphere due to fire</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59176d94-9e49-11e5-803c-0d0b866b59f3.html">netAtmosLandC13Flux</a></td>
    <td>Net Mass Flux of 13C Between Atmosphere and Land (Positive into Land) as a Result of All Processes</td>
    <td>kg m-2 s-1</td>
    <td>Flux of carbon 31as carbon dioxide into the land. This flux should be reproducible by differencing the sum of all carbon pools (cVeg, cLitter, cSoil, and cProducts or equivalently cLand) from one time step to the next, except in the case of lateral transfer of carbon due to harvest, riverine transport of dissolved organic and/or inorganic carbon, or any other process (in which case the lateral_carbon_transfer_over_land term, see below, will be zero data).-</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59152142-9e49-11e5-803c-0d0b866b59f3.html">netAtmosLandCO2Flux</a></td>
    <td>Net Flux of CO2 Between Atmosphere and Land (Positive into Land) as a Result of All Processes</td>
    <td>kg m-2 s-1</td>
    <td>Flux of carbon as carbon dioxide into the land. This flux should be reproducible by differencing the sum of all carbon pools (cVeg, cLitter, cSoil, and cProducts or equivalently cLand) from one time step to the next, except in the case of lateral transfer of carbon due to harvest, riverine transport of dissolved organic and/or inorganic carbon, or any other process (in which case the lateral_carbon_transfer_over_land term, see below, will be zero data).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590dd13a-9e49-11e5-803c-0d0b866b59f3.html">rac13</a></td>
    <td>Carbon-13 Mass Flux into Atmosphere Due to Autotrophic (Plant) Respiration on Land</td>
    <td>kg m-2 s-1</td>
    <td>Flux of carbon-13 into the atmosphere due to plant respiration. Plant respiration is the sum of respiration by parts of plants both above and below the soil. It is assumed that all the respired carbon dioxide is emitted to the atmosphere. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59132b58-9e49-11e5-803c-0d0b866b59f3.html">netAtmosLandC14Flux</a></td>
    <td>Net Mass Flux of 14C Between Atmosphere and Land (Positive into Land) as a Result of All Processes</td>
    <td>kg m-2 s-1</td>
    <td>Flux of carbon-14 as carbon dioxide into the land. This flux should be reproducible by differencing the sum of all carbon pools (cVeg, cLitter, cSoil, and cProducts or equivalently cLand) from one time step to the next, except in the case of lateral transfer of carbon due to harvest, riverine transport of dissolved organic and/or inorganic carbon, or any other process (in which case the lateral_carbon_transfer_over_land term, see below, will be zero data).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914517c-9e49-11e5-803c-0d0b866b59f3.html">rac14</a></td>
    <td>Carbon-14 Mass Flux into Atmosphere Due to Autotrophic (Plant) Respiration on Land</td>
    <td>kg m-2 s-1</td>
    <td>Flux of carbon-14 into the atmosphere due to plant respiration. Plant respiration is the sum of respiration by parts of plants both above and below the soil. It is assumed that all the respired carbon dioxide is emitted to the atmosphere. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/96b53e6411f945d703ee5d081faee987.html">fsn</a></td>
    <td>Surface Downward Net Flux of Nitrogen</td>
    <td>mol m-2 s-1</td>
    <td>Flux of nitrogen into the ocean due to deposition (sum of dry and wet deposition), fixation (the production of ammonia from nitrogen gas by diazotrophs) and runoff (liquid water which drains from land).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c47a4040603c03d250c73e9c266a24bb.html">areacella</a></td>
    <td>Grid-Cell Area for Atmospheric Grid Variables</td>
    <td>m2</td>
    <td>For atmospheres with more than 1 mesh (e.g., staggered grids), report areas that apply to surface vertical fluxes of energy.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0fc3c-acb7-11e6-b5ee-ac72891c3257.html">cSoilPools</a></td>
    <td>Carbon Mass in Each Model Soil Pool (Summed over Vertical Levels)</td>
    <td>kg m-2</td>
    <td>For models with multiple soil carbon pools, report each pool here. If models also have vertical discretisation these should be aggregated</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6276c008-76c7-11e7-ba39-ac72891c3257.html">areacellr</a></td>
    <td>Grid-Cell Area for River Model Variables</td>
    <td>m2</td>
    <td>For river routing model, if grid differs from the atmospheric grid.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590dfb2e-9e49-11e5-803c-0d0b866b59f3.html">sirdgconc</a></td>
    <td>Percentage Cover of Sea Ice by Ridging</td>
    <td>1</td>
    <td>Fraction of sea ice, by area, which is covered by sea ice ridges, giving equal weight to every square metre of sea ice .</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591432f0-9e49-11e5-803c-0d0b866b59f3.html">mrlqso</a></td>
    <td>Average Layer Fraction of Liquid Moisture</td>
    <td>1</td>
    <td>Fraction of soil moisture mass in the liquid phase in each user-defined soil layer (3D variable)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59174094-9e49-11e5-803c-0d0b866b59f3.html">mrfsofr</a></td>
    <td>Average Layer Fraction of Frozen Moisture</td>
    <td>1</td>
    <td>Fraction of soil moisture mass in the solid phase in each user-defined soil layer (3D variable)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e8b2a-9e49-11e5-803c-0d0b866b59f3.html">sitimefrac</a></td>
    <td>Fraction of Time Steps with Sea Ice</td>
    <td>1</td>
    <td>Fraction of time steps of the averaging period during which sea ice is present (siconc &gt;0 ) in a grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/29fae9ea0f236a3eb144026e1bafde28.html">ci</a></td>
    <td>Fraction of Time Convection Occurs in Cell</td>
    <td>1</td>
    <td>Fraction of time that convection occurs in the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/8de0f30b91b15720398fc10fd712a182.html">sci</a></td>
    <td>Fraction of Time Shallow Convection Occurs</td>
    <td>1</td>
    <td>Fraction of time that shallow convection occurs in the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/abb3f8b62cc0e93f4ef5487c41ef10cb.html">dispkevfo</a></td>
    <td>Ocean Kinetic Energy Dissipation per Unit Area Due to Vertical Friction</td>
    <td>W m-2</td>
    <td>Friction, leading to the dissipation of kinetic energy, arises in ocean models as a result of the viscosity of sea water.  Generally, the  lateral (xy) viscosity is given a large value to maintain the numerical stability of the model.  In contrast, the vertical viscosity is usually much smaller. The specification of a physical process by the phrase due_to_process means that the quantity named is a  single term in a sum of terms which together compose the general quantity  named by omitting the phrase.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2e1651d57e5cc5036810331a67ef6ed7.html">htovovrt</a></td>
    <td>Northward Ocean Heat Transport Due to Overturning</td>
    <td>W</td>
    <td>From all advective mass transport processes, resolved and parameterized.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9e64d2aadc59070a13e29979b6c9541b.html">sltovgyre</a></td>
    <td>Northward Ocean Salt Transport Due to Gyre</td>
    <td>kg s-1</td>
    <td>From all advective mass transport processes, resolved and parameterized.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d0f7da4833bd90226f521ddbf0dbcb63.html">sltovovrt</a></td>
    <td>Northward Ocean Salt Transport Due to Overturning</td>
    <td>kg s-1</td>
    <td>From all advective mass transport processes, resolved and parameterized.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e332882b170bce82d39f02b78fd87e79.html">htovgyre</a></td>
    <td>Northward Ocean Heat Transport Due to Gyre</td>
    <td>W</td>
    <td>From all advective mass transport processes, resolved and parameterized.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590eb456-9e49-11e5-803c-0d0b866b59f3.html">fFireAll</a></td>
    <td>Carbon Mass Flux into Atmosphere Due to CO2 Emission from Fire Including All Sources</td>
    <td>kg m-2 s-1</td>
    <td>From all sources,  Including natural, anthropogenic and Land-use change. Only total fire emissions can be compared to observations.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591720a0-9e49-11e5-803c-0d0b866b59f3.html">od550aerso</a></td>
    <td>Stratospheric Optical Depth at 550nm (All Aerosols) 2D-Field (Stratosphere Only)</td>
    <td>1</td>
    <td>From tropopause to stratopause as defined by the model</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/117c89cc-b574-11e6-9ed4-5404a60d96b5.html">ocontempmint</a></td>
    <td>Depth Integral of Product of Sea Water Density and Conservative Temperature</td>
    <td>degC kg m-2</td>
    <td>Full column sum of density*cell thickness*conservative temperature. If the model is Boussinesq, then use Boussinesq reference density for the density factor.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/180d4bd9a18a9d5ecf3d45690b8e9c75.html">somint</a></td>
    <td>Depth Integral of Product of Sea Water Density and Prognostic Salinity</td>
    <td>g m-2</td>
    <td>Full column sum of density*cell thickness*prognostic salinity. If the model is Boussinesq, then use Boussinesq reference density for the density factor.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f64c4ac230024801b1f140d806a00972.html">fgco2</a></td>
    <td>Surface Downward Mass Flux of Carbon as CO2</td>
    <td>kg m-2 s-1</td>
    <td>Gas exchange flux of CO2 (positive into ocean)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/190f38cb06f9a1f3133c3dcf66e0421e.html">fgdms</a></td>
    <td>Surface Upward Flux of DMS</td>
    <td>mol m-2 s-1</td>
    <td>Gas exchange flux of DMS (positive into atmosphere)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/02e40424bc4b63c1ae535165def98421.html">fgo2</a></td>
    <td>Surface Downward Flux of O2</td>
    <td>mol m-2 s-1</td>
    <td>Gas exchange flux of O2 (positive into ocean)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f36046ab9a8a24ce4d7431e2defd9cf6.html">fg14co2abio</a></td>
    <td>Surface Downward Mass Flux of Carbon-14 as Abiotic 14CO2</td>
    <td>kg m-2 s-1</td>
    <td>Gas exchange flux of abiotic 14CO2 (positive into ocean)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/042e575e61a271e122d317ca7b39dcb4.html">fgco2abio</a></td>
    <td>Surface Downward Mass Flux of Carbon as Abiotic CO2</td>
    <td>kg m-2 s-1</td>
    <td>Gas exchange flux of abiotic CO2 (positive into ocean)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e5b82-9e49-11e5-803c-0d0b866b59f3.html">fg13co2</a></td>
    <td>Surface Downward Mass Flux of Carbon-13 as 13CO2</td>
    <td>kg m-2 s-1</td>
    <td>Gas exchange flux of carbon-13 as CO2 (positive into ocean)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917788e-9e49-11e5-803c-0d0b866b59f3.html">fg14co2</a></td>
    <td>Surface Downward Mass Flux of Carbon-14 as 14CO2</td>
    <td>kg m-2 s-1</td>
    <td>Gas exchange flux of carbon-14 as CO2 (positive into ocean)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/97c037c3357f24c4e06c07123224b400.html">fgco2nat</a></td>
    <td>Surface Downward Mass Flux of Carbon as Natural CO2</td>
    <td>kg m-2 s-1</td>
    <td>Gas exchange flux of natural CO2 (positive into ocean)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b1644981b0abd369ad35fac3fc930873.html">zg100</a></td>
    <td>Geopotential Height at 100hPa</td>
    <td>m</td>
    <td>Geopotential height on the 100 hPa surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a36df015f59d91b021f2534321986440.html">zg1000</a></td>
    <td>Geopotential Height at 1000hPa</td>
    <td>m</td>
    <td>Geopotential height on the 1000 hPa surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fc0bedbaf6d676fb85fe189310c871a8.html">zg10</a></td>
    <td>Geopotential Height at 10hPa</td>
    <td>m</td>
    <td>Geopotential height on the 10hPa surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/28e774ec0ecd561a6a3d437e6c443a6b.html">zg</a></td>
    <td>Geopotential Height</td>
    <td>m</td>
    <td>Geopotential is the sum of the specific gravitational potential energy relative to the geoid and the specific centripetal potential energy. Geopotential height is the geopotential divided by the standard acceleration due to gravity. It is numerically similar to the altitude (or geometric height) and not to the quantity with standard name height, which is relative to the surface.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/dbc244f3e0bae5b1397ad42fb6cd6db3.html">ch4global</a></td>
    <td>Global Mean Mole Fraction of CH4</td>
    <td>1e-09</td>
    <td>Global Mean Mole Fraction of CH4</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/09c328529f2fac58c1b016da33ba394c.html">n2oglobal</a></td>
    <td>Global Mean Mole Fraction of N2O</td>
    <td>1e-09</td>
    <td>Global mean Nitrous Oxide (N2O)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f21d4-9e49-11e5-803c-0d0b866b59f3.html">grplmxrat</a></td>
    <td>Graupel Mixing Ratio</td>
    <td>1</td>
    <td>Graupel mixing ratio</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59148822-9e49-11e5-803c-0d0b866b59f3.html">dgw</a></td>
    <td>Change in Groundwater</td>
    <td>kg m-2</td>
    <td>Groundwater is subsurface water below the depth of the water table.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bbca9d7202577ef64ed889685489a6aa.html">limirrcalc</a></td>
    <td>Irradiance Limitation of Calcareous Phytoplankton</td>
    <td>1</td>
    <td>Growth limitation of calcareous phytoplankton due to solar irradiance. &quot;Growth limitation due to solar irradiance&quot; means the ratio of the growth rate of a species population in the environment (where the amount of sunlight reaching a location may be limited) to the theoretical growth rate if there were no such limit on solar irradiance.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3f25d295551edcd3949776cccca7656c.html">limirrdiat</a></td>
    <td>Irradiance Limitation of Diatoms</td>
    <td>1</td>
    <td>Growth limitation of diatoms due to solar irradiance. &quot;Growth limitation due to solar irradiance&quot; means the ratio of the growth rate of a species population in the environment (where the amount of sunlight reaching a location may be limited) to the theoretical growth rate if there were no such limit on solar irradiance.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9d815caba4e72a31b250865a534d95bd.html">limirrdiaz</a></td>
    <td>Irradiance Limitation of Diazotrophs</td>
    <td>1</td>
    <td>Growth limitation of diazotrophs due to solar irradiance. &quot;Growth limitation due to solar irradiance&quot; means the ratio of the growth rate of a species population in the environment (where the amount of sunlight reaching a location may be limited) to the theoretical growth rate if there were no such limit on solar irradiance.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/883fe8c76f1bd133e9075182240b1ca0.html">limirrmisc</a></td>
    <td>Irradiance Limitation of Other Phytoplankton</td>
    <td>1</td>
    <td>Growth limitation of miscellaneous phytoplankton due to solar irradiance. &quot;Growth limitation due to solar irradiance&quot; means the ratio of the growth rate of a species population in the environment (where the amount of sunlight reaching a location may be limited) to the theoretical growth rate if there were no such limit on solar irradiance.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1e8aa2d7958602eef45a81400ab57bd5.html">limirrpico</a></td>
    <td>Irradiance Limitation of Picophytoplankton</td>
    <td>1</td>
    <td>Growth limitation of picophytoplankton due to solar irradiance. &quot;Growth limitation due to solar irradiance&quot; means the ratio of the growth rate of a species population in the environment (where the amount of sunlight reaching a location may be limited) to the theoretical growth rate if there were no such limit on solar irradiance.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f7237f04672f809d49922d1b995f281f.html">rGrowth</a></td>
    <td>Total Autotrophic Respiration on Land as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Growth respiration is defined as the additional carbon cost for the synthesis of new growth.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f9d30-9e49-11e5-803c-0d0b866b59f3.html">sihc</a></td>
    <td>Sea-Ice Heat Content per Unit Area</td>
    <td>J m-2</td>
    <td>Heat content of all ice in grid cell divided by total grid-cell area. Water at 0 Celsius is assumed to have a heat content of 0 J.  Does not include heat content of snow, but does include heat content of brine. Heat content is always negative, since both the sensible and the latent heat content of ice are less than that of water</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/155ede0bff2578a736e6379552483f4e.html">hfrunoffds</a></td>
    <td>Temperature Flux Due to Runoff Expressed as Heat Flux into Sea Water</td>
    <td>W m-2</td>
    <td>Heat flux associated with liquid water which drains from land. It is calculated relative to the heat that would be transported by runoff water entering the sea at zero degrees Celsius. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/712494ba-c7b6-11e6-bb2a-ac72891c3257.html">hfdsnb</a></td>
    <td>Downward Heat Flux at Snow Base</td>
    <td>W m-2</td>
    <td>Heat flux from snow into the ice or land under the snow.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913462e-9e49-11e5-803c-0d0b866b59f3.html">hfrs</a></td>
    <td>Heat Transferred to Snowpack by Rainfall</td>
    <td>W m-2</td>
    <td>Heat transferred to a snow cover by rain..</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912f890-9e49-11e5-803c-0d0b866b59f3.html">sisnhc</a></td>
    <td>Snow Heat Content per Unit Area</td>
    <td>J m-2</td>
    <td>Heat-content of all snow in grid cell divided by total grid-cell area. Snow-water equivalent at 0 Celsius is assumed to have a heat content of 0 J.  Does not include heat content of sea ice.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/216ab26c-b89b-11e6-a189-5404a60d96b5.html">zfull</a></td>
    <td>Altitude of Model Full-Levels</td>
    <td>m</td>
    <td>Height of full model levels above a reference ellipsoid. A reference ellipsoid is a mathematical figure that approximates the geoid. The geoid is a surface of constant geopotential with which mean sea level would coincide if the ocean were at rest. The ellipsoid is an approximation because the geoid is an irregular shape. A number of reference ellipsoids are defined for use in the field of geodesy. To specify which reference ellipsoid is being used, a grid_mapping variable should be attached to the data variable as described in Chapter 5.6 of the CF Convention.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/211dfdaa-b89b-11e6-a189-5404a60d96b5.html">zhalf</a></td>
    <td>Altitude of Model Half-Levels</td>
    <td>m</td>
    <td>Height of model half-levels above a reference ellipsoid. A reference ellipsoid is a mathematical figure that approximates the geoid. The geoid is a surface of constant geopotential with which mean sea level would coincide if the ocean were at rest. The ellipsoid is an approximation because the geoid is an irregular shape. A number of reference ellipsoids are defined for use in the field of geodesy. To specify which reference ellipsoid is being used, a grid_mapping variable should be attached to the data variable as described in Chapter 5.6 of the CF Convention.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f1f68-9e49-11e5-803c-0d0b866b59f3.html">rhc13</a></td>
    <td>Carbon-13 Mass Flux into Atmosphere Due to Heterotrophic Respiration on Land</td>
    <td>kg m-2 s-1</td>
    <td>Heterotrophic respiration is respiration by heterotrophs (&quot;consumers&quot;), which are organisms (including animals and decomposers) that consume other organisms or dead organic material, rather than synthesising organic material from inorganic precursors using energy from the environment (especially sunlight) as autotrophs (&quot;producers&quot;) do. Heterotrophic respiration goes on within both the soil and litter pools.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f2436-9e49-11e5-803c-0d0b866b59f3.html">rhc14</a></td>
    <td>Carbon-14 Mass Flux into Atmosphere Due to Heterotrophic Respiration on Land</td>
    <td>kg m-2 s-1</td>
    <td>Heterotrophic respiration is respiration by heterotrophs (&quot;consumers&quot;), which are organisms (including animals and decomposers) that consume other organisms or dead organic material, rather than synthesising organic material from inorganic precursors using energy from the environment (especially sunlight) as autotrophs (&quot;producers&quot;) do. Heterotrophic respiration goes on within both the soil and litter pools.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/865d0e00-53e6-11e6-b524-5404a60d96b5.html">modelCellAreai</a></td>
    <td>The Cell Area of the Ice Sheet Model</td>
    <td>m2</td>
    <td>Horizontal area of ice-sheet grid cells</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/62c5b9728a01c0031e3a788ac4c8eff5.html">areacello</a></td>
    <td>Grid-Cell Area for Ocean Variables</td>
    <td>m2</td>
    <td>Horizontal area of ocean grid cells</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7124996a-c7b6-11e6-bb2a-ac72891c3257.html">ksat</a></td>
    <td>Saturated Hydraulic Conductivity</td>
    <td>micron s-1</td>
    <td>Hydraulic conductivity is the constant k in Darcy's Law q=-k grad h for fluid flow q (volume transport per unit area i.e. velocity) through a porous medium, where h is the hydraulic head (pressure expressed as an equivalent depth of water).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bb4d31072e09cd4935f1c20a2c533bbd.html">albisccp</a></td>
    <td>ISCCP Mean Cloud Albedo</td>
    <td>1</td>
    <td>ISCCP Mean Cloud Albedo. Time-means are weighted by the ISCCP Total Cloud Fraction {:cltisccp} - see  http://cfmip.metoffice.com/COSP.html</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/987be9b68c051baf4f0c5b6e8c26b4d8.html">pctisccp</a></td>
    <td>ISCCP Mean Cloud Top Pressure</td>
    <td>Pa</td>
    <td>ISCCP Mean Cloud Top Pressure. Time-means are weighted by the ISCCP Total Cloud Fraction {:cltisccp} - see  http://cfmip.metoffice.com/COSP.html</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6b9531f047e39c91d82d58852a429555.html">chepsoa</a></td>
    <td>Chemical Production of Dry Aerosol Secondary Organic Matter</td>
    <td>kg m-2 s-1</td>
    <td>If model lumps secondary organic aerosol (SOA) emissions with primary organic aerosol (POA), then the sum of POA and SOA emissions is reported as OA emissions. Here, mass refers to the mass of primary organic matter, not mass of organic carbon alone.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/236430ceeb7aa3d23577b3a03d13f7fb.html">expsi</a></td>
    <td>Sinking Particulate Silicon Flux</td>
    <td>mol m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.   'Sinking' is the gravitational settling of particulate matter suspended in a liquid. A sinking flux is positive downwards and is calculated relative to the movement of the surrounding fluid.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5a17eb002c56c129c27f6e2b8e0c06d7.html">epn100</a></td>
    <td>Downward Flux of Particulate Nitrogen</td>
    <td>mol m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.   'Sinking' is the gravitational settling of particulate matter suspended in a liquid. A sinking flux is positive downwards and is calculated relative to the movement of the surrounding fluid.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5ad003b9cbc58ca2c9117bb2d144605f.html">epfe100</a></td>
    <td>Downward Flux of Particulate Iron</td>
    <td>mol m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.   'Sinking' is the gravitational settling of particulate matter suspended in a liquid. A sinking flux is positive downwards and is calculated relative to the movement of the surrounding fluid.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/600c9692a7eaef4037565fa8846ae6ba.html">epp100</a></td>
    <td>Downward Flux of Particulate Phosphorus</td>
    <td>mol m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.   'Sinking' is the gravitational settling of particulate matter suspended in a liquid. A sinking flux is positive downwards and is calculated relative to the movement of the surrounding fluid.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/60f0a8f8a0311f9c386e64e0b62cf3bd.html">expp</a></td>
    <td>Sinking Particulate Organic Phosphorus Flux</td>
    <td>mol m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.   'Sinking' is the gravitational settling of particulate matter suspended in a liquid. A sinking flux is positive downwards and is calculated relative to the movement of the surrounding fluid.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6fc1dd9341ca569ad866695db9878618.html">expn</a></td>
    <td>Sinking Particulate Organic Nitrogen Flux</td>
    <td>mol m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.   'Sinking' is the gravitational settling of particulate matter suspended in a liquid. A sinking flux is positive downwards and is calculated relative to the movement of the surrounding fluid.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e52528e8-dd83-11e5-9194-ac72891c3257.html">expfe</a></td>
    <td>Sinking Particulate Iron Flux</td>
    <td>mol m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.   'Sinking' is the gravitational settling of particulate matter suspended in a liquid. A sinking flux is positive downwards and is calculated relative to the movement of the surrounding fluid.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f0260f7e851aaf39ac2349b365db89b5.html">epsi100</a></td>
    <td>Downward Flux of Particulate Silicon</td>
    <td>mol m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.   'Sinking' is the gravitational settling of particulate matter suspended in a liquid. A sinking flux is positive downwards and is calculated relative to the movement of the surrounding fluid.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1e53b0fda8f2186407bb29f802c0aa93.html">prlsprof</a></td>
    <td>Stratiform Rainfall Flux</td>
    <td>kg m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.  Stratiform precipitation, whether liquid or frozen, is precipitation that formed in stratiform cloud.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bd938fec017c18d3eee106db55f924c5.html">hfibthermds</a></td>
    <td>Heat Flux into Sea Water Due to Iceberg Thermodynamics</td>
    <td>W m-2</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.  The specification of a physical process by the phrase due_to_process means that the quantity named is a  single term in a sum of terms which together compose the general quantity  named by omitting the phrase.  &quot; Iceberg thermodynamics&quot; refers to the addition or subtraction of mass due to surface and basal fluxes, i.e., due to melting, sublimation and fusion.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/22fae57fa6f2e7e2744a3a9fe3c0dbca.html">hfsnthermds</a></td>
    <td>Heat Flux into Sea Water Due to Snow Thermodynamics</td>
    <td>W m-2</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.  The specification of a physical process by the phrase due_to_process means that the quantity named is a  single term in a sum of terms which together compose the general quantity  named by omitting the phrase.  &quot;Snow thermodynamics&quot; refers to the addition or subtraction of mass due to surface and basal fluxes, i.e., due to melting, sublimation and fusion.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913ba00-9e49-11e5-803c-0d0b866b59f3.html">fNVegLitter</a></td>
    <td>Total Nitrogen Mass Flux from Vegetation to Litter</td>
    <td>kg m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics. &quot;Litter&quot; is dead plant material in or above the soil. &quot;Vegetation&quot; means any living plants e.g. trees, shrubs, grass.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ded6e-9e49-11e5-803c-0d0b866b59f3.html">fNLitterSoil</a></td>
    <td>Total Nitrogen Mass Flux from Litter to Soil</td>
    <td>kg m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics. &quot;Litter&quot; is dead plant material in or above the soil.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/43cf738374ffa1253a603ea54447203f.html">fVegLitter</a></td>
    <td>Total Carbon Mass Flux from Vegetation to Litter</td>
    <td>kg m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics. &quot;Vegetation&quot; means any living plants e.g. trees, shrubs, grass. &quot;Litter&quot; is dead plant material in or above the soil. It is distinct from coarse wood debris. The precise distinction between &quot;fine&quot; and &quot;coarse&quot; is model dependent. The sum of the quantities with standard names mass_flux_of_carbon_into_litter_from_vegetation_due_to_mortality and mass_flux_of_carbon_into_litter_from_vegetation_due_to_senescence is mass_flux_of_carbon_into_litter_from_vegetation.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e2574373178c92d41bbc0f8516c16016.html">grpllsprof</a></td>
    <td>Stratiform Graupel Flux</td>
    <td>kg m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics. Stratiform precipitation, whether liquid or frozen, is precipitation that formed in stratiform cloud. Graupel consists of heavily rimed snow particles, often called snow pellets; often indistinguishable from very small soft hail except when the size convention that hail must have a diameter greater than 5 mm is adopted. Reference: American Meteorological Society Glossary http://glossary.ametsoc.org/wiki/Graupel. There are also separate standard names for hail. Standard names for &quot;graupel_and_hail&quot; should be used to describe data produced by models that do not distinguish between hail and graupel.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/62aa098b13f86fa22de1a874536a64ae.html">mcu</a></td>
    <td>Convective Updraft Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics. The atmosphere convective mass flux is the vertical transport of mass for a field of cumulus clouds or thermals, given by the product of air density and vertical velocity. For an area-average, cell_methods should specify whether the average is over all the area or the area of updrafts only.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591514ea-9e49-11e5-803c-0d0b866b59f3.html">fNleach</a></td>
    <td>Total Nitrogen Loss to Leaching or Runoff (Sum of Ammonium, Nitrite and Nitrate)</td>
    <td>kg m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics. The specification of a physical process by the phrase &quot;due_to_&quot; process means that the quantity named is a single term in a sum of terms which together compose the general quantity named by omitting the phrase. &quot;Leaching&quot; means the loss of water soluble chemical species from soil. Runoff is the liquid water which drains from land. If not specified, &quot;runoff&quot; refers to the sum of surface runoff and subsurface drainage.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1b7e762395c4de9ec5c5c7bda3ce3781.html">hfsifrazil</a></td>
    <td>Heat Flux into Sea Water Due to Frazil Ice Formation</td>
    <td>W m-2</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics. The specification of a physical process by the phrase due_to_process means that the quantity named is a single term in a sum of terms which together compose the general quantity named by omitting the phrase. &quot;Frazil&quot; consists of needle like crystals of ice, typically between three and four millimeters in diameter, which form as sea water begins to freeze. Salt is expelled during the freezing process and frazil ice consists of nearly pure fresh water.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59171af6-9e49-11e5-803c-0d0b866b59f3.html">snrefr</a></td>
    <td>Refreezing of Water in the Snow</td>
    <td>kg m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics. The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;Surface snow and ice refreezing flux&quot; means the mass flux of surface  meltwater which refreezes within the snow or firn.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912cab4-9e49-11e5-803c-0d0b866b59f3.html">prra</a></td>
    <td>Rainfall Flux</td>
    <td>kg m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917e2ba-9e49-11e5-803c-0d0b866b59f3.html">prrc</a></td>
    <td>Convective Rainfall Rate</td>
    <td>kg m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7553003ead183dd3276108b6311a337f.html">prhmax</a></td>
    <td>Maximum Hourly Precipitation Rate</td>
    <td>kg m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/efca52ebca27f2ee5c0c7926f776ac1d.html">prcprof</a></td>
    <td>Convective Rainfall Flux</td>
    <td>kg m-2 s-1</td>
    <td>In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/98544553b7ee286405344aa2e3e88c8e.html">limfediaz</a></td>
    <td>Iron Limitation of Diazotrophs</td>
    <td>1</td>
    <td>In ocean modelling, diazotrophs are phytoplankton of the phylum cyanobacteria distinct from other phytoplankton groups in their ability to fix nitrogen gas in addition to nitrate and ammonium. Phytoplankton are algae that grow where there is sufficient light to support photosynthesis. &quot;Iron growth limitation&quot; means the ratio of the growth rate of a species population in the environment (where there is a finite availability of iron) to the theoretical growth rate if there were no such limit on iron availability.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/df05d7b7c578eeb7aa49c2ef6f79b30f.html">limndiaz</a></td>
    <td>Nitrogen Limitation of Diazotrophs</td>
    <td>1</td>
    <td>In ocean modelling, diazotrophs are phytoplankton of the phylum cyanobacteria distinct from other phytoplankton groups in their ability to fix nitrogen gas in addition to nitrate and ammonium. Phytoplankton are algae that grow where there is sufficient light to support photosynthesis. &quot;Nitrogen growth limitation&quot; means the ratio of the growth rate of a species population in the environment (where there is a finite availability of nitrogen) to the theoretical growth rate if there were no such limit on nitrogen availability.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912d5ea-9e49-11e5-803c-0d0b866b59f3.html">fNVegSoil</a></td>
    <td>Total Nitrogen Mass Flux from Vegetation Directly to Soil</td>
    <td>kg m-2 s-1</td>
    <td>In some models part of nitrogen (e.g., root exudate) can go directly into the soil pool without entering litter.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1aefc13bd27020244fe1cfd706ce1041.html">clc</a></td>
    <td>Convective Cloud Area Percentage</td>
    <td>%</td>
    <td>Include only convective cloud.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ec6bc-9e49-11e5-803c-0d0b866b59f3.html">tnhuspbl</a></td>
    <td>Tendency of Specific Humidity Due to Boundary Layer Mixing</td>
    <td>s-1</td>
    <td>Includes all boundary layer terms including diffusive terms.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59143570-9e49-11e5-803c-0d0b866b59f3.html">tntpbl</a></td>
    <td>Tendency of Air Temperature Due to Boundary Layer Mixing</td>
    <td>K s-1</td>
    <td>Includes all boundary layer terms including diffusive terms.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/86b2b3318a73839edfafa9d46864aadc.html">clw</a></td>
    <td>Mass Fraction of Cloud Liquid Water</td>
    <td>kg kg-1</td>
    <td>Includes both large-scale and convective cloud. Calculate as the mass of cloud liquid water in the grid cell divided by the mass of air (including the water in all phases) in the grid cells. Precipitating hydrometeors are included ONLY if the precipitating hydrometeors affect the calculation of radiative transfer in model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/dd916e3e2eca18cda5d9f81749d0c91c.html">cli</a></td>
    <td>Mass Fraction of Cloud Ice</td>
    <td>kg kg-1</td>
    <td>Includes both large-scale and convective cloud. This is calculated as the mass of cloud ice in the grid cell divided by the mass of air (including the water in all phases) in the grid cell. It includes precipitating hydrometeors ONLY if the precipitating hydrometeors affect the calculation of radiative transfer in model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59172bcc-9e49-11e5-803c-0d0b866b59f3.html">sidmasstrany</a></td>
    <td>Y-Component of Sea-Ice Mass Transport</td>
    <td>kg s-1</td>
    <td>Includes transport of both sea ice and snow by advection</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59172e42-9e49-11e5-803c-0d0b866b59f3.html">sidmasstranx</a></td>
    <td>X-Component of Sea-Ice Mass Transport</td>
    <td>kg s-1</td>
    <td>Includes transport of both sea ice and snow by advection</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e034e-9e49-11e5-803c-0d0b866b59f3.html">rivi</a></td>
    <td>River Inflow</td>
    <td>m3 s-1</td>
    <td>Inflow of River Water into Cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e799552047be54bf13ccbe494c73cc81.html">fric</a></td>
    <td>Downward Inorganic Carbon Flux at Ocean Bottom</td>
    <td>mol m-2 s-1</td>
    <td>Inorganic Carbon loss to sediments</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9c4f9fe04addd510e5fbedd35e01a5db.html">icfriver</a></td>
    <td>Flux of Inorganic Carbon into Ocean Surface by Runoff</td>
    <td>mol m-2 s-1</td>
    <td>Inorganic Carbon supply to ocean through runoff (separate from gas exchange)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/332db812bf06c7af2de1b9d1e0cf58c9.html">swtoacsdust</a></td>
    <td>clear sky  Shortwave flux due to dust at toa</td>
    <td>W m-2</td>
    <td>Instantaneous forcing is the radiative flux change caused instantaneously by an imposed change in radiative forcing agent (greenhouse gases, aerosol, solar radiation, etc.).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4cabf9607859a83bcb3bc00fa8d0698c.html">swtoaasdust</a></td>
    <td>All-Sky Shortwave Flux Due to Dust at Toa</td>
    <td>W m-2</td>
    <td>Instantaneous forcing is the radiative flux change caused instantaneously by an imposed change in radiative forcing agent (greenhouse gases, aerosol, solar radiation, etc.).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ab57604d6acd918c08aa6252145c608e.html">lwtoacsaer</a></td>
    <td>TOA Clear-Sky longwave Radiative Forcing due to  Aerosols</td>
    <td>W m-2</td>
    <td>Instantaneous forcing is the radiative flux change caused instantaneously by an imposed change in radiative forcing agent (greenhouse gases, aerosol, solar radiation, etc.).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f9f66ff437154f86913937f9e2d9a26d.html">lwtoaasdust</a></td>
    <td>TOA All-Sky Longwave Radiative Forcing Due to Dust</td>
    <td>W m-2</td>
    <td>Instantaneous forcing is the radiative flux change caused instantaneously by an imposed change in radiative forcing agent (greenhouse gases, aerosol, solar radiation, etc.).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59133ddc-9e49-11e5-803c-0d0b866b59f3.html">opottempmint</a></td>
    <td>Integral with Respect to Depth of Product of Sea Water Density and Potential Temperature</td>
    <td>degC kg m-2</td>
    <td>Integral over the full ocean depth of the product of sea water density and potential temperature.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/811a140bb9962156e6c3cbc16a144f8d.html">emiisop</a></td>
    <td>Total Emission Rate of Isoprene</td>
    <td>kg m-2 s-1</td>
    <td>Integrate 3D emission field vertically to 2d field</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/8198a7882dd91603f07b93e929ccdbd0.html">emivoc</a></td>
    <td>Total Emission Rate of NMVOC</td>
    <td>kg m-2 s-1</td>
    <td>Integrate 3D emission field vertically to 2d field. _If_ fixed molecular weight of NMVOC is not available in model, please provide in units of kilomole m-2 s-1 (i.e. kg m-2 s-1 as if model NMVOC had molecular weight of 1) and add a comment to your file.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0f732311bca54b8620535615258be52d.html">eminh3</a></td>
    <td>Total Emission Rate of NH3</td>
    <td>kg m-2 s-1</td>
    <td>Integrate 3D emission field vertically to 2d field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/280c4503513a8be95b5cbfc157615c6e.html">emidms</a></td>
    <td>Total Emission Rate of DMS</td>
    <td>kg m-2 s-1</td>
    <td>Integrate 3D emission field vertically to 2d field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/377058633cbc6b6700caad600fb06009.html">emiss</a></td>
    <td>Total Emission Rate of Sea-Salt Aerosol</td>
    <td>kg m-2 s-1</td>
    <td>Integrate 3D emission field vertically to 2d field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4d3400f4c74e9cd4d4100da7a915e6d9.html">emibc</a></td>
    <td>Total Emission Rate of Black Carbon Aerosol Mass</td>
    <td>kg m-2 s-1</td>
    <td>Integrate 3D emission field vertically to 2d field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/754b682975aaa6baabc618db3903bba8.html">emico</a></td>
    <td>Total Emission Rate of CO</td>
    <td>kg m-2 s-1</td>
    <td>Integrate 3D emission field vertically to 2d field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/96d843d6b5a59d1e53e07df9641def86.html">emidust</a></td>
    <td>Total Emission Rate of Dust</td>
    <td>kg m-2 s-1</td>
    <td>Integrate 3D emission field vertically to 2d field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e35112d35f6f5cc88e1ebceefbd09133.html">emiso2</a></td>
    <td>Total Emission Rate of SO2</td>
    <td>kg m-2 s-1</td>
    <td>Integrate 3D emission field vertically to 2d field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/27f1a04b96a7ee0c588ad33c6e1f30fe.html">emibvoc</a></td>
    <td>Total Emission Rate of Biogenic NMVOC</td>
    <td>kg m-2 s-1</td>
    <td>Integrate 3D emission field vertically to 2d field._If_ fixed molecular weight of NMVOC is not available in model, please provide in units of kilomole m-2 s-1 (i.e. kg m-2 s-1 as if model NMVOC had molecular weight of 1) and add a comment to your file.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/534001c2fd879bfda1d9b66d0a61144c.html">emilnox</a></td>
    <td>Layer-Integrated Lightning Production of NOx</td>
    <td>mol s-1</td>
    <td>Integrate the NOx production for lightning over model layer. proposed name: tendency_of_atmosphere_mass_content_of_nox_from_lightning</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b385b4f43e7385eb7bfe4e2175bb086d.html">fsfe</a></td>
    <td>Surface Downward Net Flux of Iron</td>
    <td>mol m-2 s-1</td>
    <td>Iron supply through deposition flux onto sea surface, runoff, coasts, sediments, etc</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/87fbc4126ce4daecf084edf9ad1f4aaf.html">vsfcorr</a></td>
    <td>Virtual Salt Flux Correction</td>
    <td>kg m-2 s-1</td>
    <td>It is set to zero in models which receive a real water flux.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f45dc6b68a774051705e099da83e79cf.html">vsf</a></td>
    <td>Virtual Salt Flux into Sea Water</td>
    <td>kg m-2 s-1</td>
    <td>It is set to zero in models which receive a real water flux.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59149a10-9e49-11e5-803c-0d0b866b59f3.html">jpdftaureicemodis</a></td>
    <td>MODIS Joint Distribution of Optical Thickness and Particle Size, Ice</td>
    <td>%</td>
    <td>Joint probability distribution function, giving probability of cloud as a function of optical thickness and particle size, as measured by MODIS. For cloud ice particles.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912eff8-9e49-11e5-803c-0d0b866b59f3.html">jpdftaureliqmodis</a></td>
    <td>MODIS Optical Thickness-Particle Size Joint Distribution, Liquid</td>
    <td>%</td>
    <td>Joint probability distribution function, giving probability of cloud as a function of optical thickness and particle size, as measured by MODIS. For liquid cloud particles.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/64c32fcf490e2e5e9918a5401fa48424.html">difmxylo</a></td>
    <td>Ocean Momentum XY Laplacian Diffusivity</td>
    <td>m2 s-1</td>
    <td>Lateral Laplacian viscosity applied to the momentum equations.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84115d24881654a3deceba63b22cba06.html">difmxybo</a></td>
    <td>Ocean Momentum XY Biharmonic Diffusivity</td>
    <td>m4 s-1</td>
    <td>Lateral biharmonic viscosity applied to the momentum equations.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2260e24c-b894-11e6-a189-5404a60d96b5.html">lat</a></td>
    <td>Latitude</td>
    <td>degrees_north</td>
    <td>Latitude is positive northward; its units of degree_north (or equivalent) indicate this explicitly. In a latitude-longitude system defined with respect to a rotated North Pole, the standard name of grid_latitude should be used instead of latitude. Grid latitude is positive in the grid-northward direction, but its units should be plain degree.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/21ef5e4c-b894-11e6-a189-5404a60d96b5.html">lon</a></td>
    <td>Longitude</td>
    <td>degrees_east</td>
    <td>Longitude is positive eastward; its units of degree_east (or equivalent) indicate this explicitly. In a latitude-longitude system defined with respect to a rotated North Pole, the standard name of grid_longitude should be used instead of longitude. Grid longitude is positive in the grid-eastward direction, but its units should be plain degree.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e4e58-9e49-11e5-803c-0d0b866b59f3.html">licalvf</a></td>
    <td>Land Ice Calving Flux</td>
    <td>kg m-2 s-1</td>
    <td>Loss of ice mass resulting from iceberg calving. Computed as the rate of mass loss by the ice shelf (in kg s-1) divided by the horizontal area of the ice sheet (m2) in the grid box.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53826102-bf01-11e6-a554-ac72891c3257.html">icemIs</a></td>
    <td>Ice Sheet Surface Ice Melt Flux</td>
    <td>kg m-2 s-1</td>
    <td>Loss of ice mass resulting from surface melting. Computed as the total surface melt water on the land ice portion of the grid cell divided by land ice area in the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e1c1c-9e49-11e5-803c-0d0b866b59f3.html">icem</a></td>
    <td>Surface Ice Melt Flux</td>
    <td>kg m-2 s-1</td>
    <td>Loss of ice mass resulting from surface melting. Computed as the total surface melt water on the land ice portion of the grid cell divided by land ice area in the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53825b08-bf01-11e6-a554-ac72891c3257.html">snicemIs</a></td>
    <td>Ice Sheet Surface Snow and Ice Melt Flux</td>
    <td>kg m-2 s-1</td>
    <td>Loss of snow and ice mass resulting from surface melting. Computed as the total surface melt on the land ice portion of the grid cell divided by land ice area in the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912a516-9e49-11e5-803c-0d0b866b59f3.html">snicem</a></td>
    <td>Surface Snow and Ice Melt Flux</td>
    <td>kg m-2 s-1</td>
    <td>Loss of snow and ice mass resulting from surface melting. Computed as the total surface melt on the land ice portion of the grid cell divided by land ice area in the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590dda36-9e49-11e5-803c-0d0b866b59f3.html">fNnetmin</a></td>
    <td>Net Nitrogen Release from Soil and Litter as the Outcome of Nitrogen Immobilisation and Gross Mineralisation</td>
    <td>kg m-2 s-1</td>
    <td>Loss of soil nitrogen through remineralization and immobilisation. Remineralization is the degradation of organic matter into inorganic forms of carbon, nitrogen, phosphorus and other micronutrients, which consumes oxygen and releases energy. Immobilisation of nitrogen refers to retention of nitrogen by micro-organisms under certain conditions, making it unavailable for plants.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4146743c-4f40-11e6-a814-ac72891c3257.html">strbasemag</a></td>
    <td>Land Ice Basal Drag</td>
    <td>Pa</td>
    <td>Magnitude of basal drag at land ice base</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/640213ff812312e3ac8bf134f483ed0d.html">rMaint</a></td>
    <td>Carbon Mass Flux into Atmosphere Due to Maintenance Autotrophic Respiration on Land</td>
    <td>kg m-2 s-1</td>
    <td>Maintenance respiration is defined as the carbon cost to support the metabolic activity of existing live tissue.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a9e338f20a1b85e4758c5b3cb0ad961c.html">concdust</a></td>
    <td>Concentration of Dust</td>
    <td>kg m-3</td>
    <td>Mass concentration means mass per unit volume and is used in the construction mass_concentration_of_X_in_Y, where X is a material constituent of Y. A chemical species denoted by X may be described by a single term such as &quot;nitrogen&quot; or a phrase such as &quot;nox_expressed_as_nitrogen&quot;. &quot;Aerosol&quot; means the system of suspended liquid or solid particles in air (except cloud droplets) and their carrier gas, the air itself. Aerosol particles take up ambient water (a process known as hygroscopic growth) depending on the relative humidity and the composition of the particles. &quot;Dry aerosol particles&quot; means aerosol particles without any water uptake.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914be8c-9e49-11e5-803c-0d0b866b59f3.html">snmsl</a></td>
    <td>Water Flowing out of Snowpack</td>
    <td>kg m-2 s-1</td>
    <td>Mass flow rate of water draining out of the snow pack.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53826404-bf01-11e6-a554-ac72891c3257.html">snicefreezIs</a></td>
    <td>Ice Sheet Surface Snow and Ice Refreeze Flux</td>
    <td>kg m-2 s-1</td>
    <td>Mass flux of surface meltwater which refreezes within the snowpack. Computed as the total refreezing on the land ice portion of the grid cell divided by land ice area in the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59150216-9e49-11e5-803c-0d0b866b59f3.html">snicefreez</a></td>
    <td>Surface Snow and Ice Refreeze Flux</td>
    <td>kg m-2 s-1</td>
    <td>Mass flux of surface meltwater which refreezes within the snowpack. Computed as the total refreezing on the land ice portion of the grid cell divided by land ice area in the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3f305b94-b89b-11e6-be04-ac72891c3257.html">irrLut</a></td>
    <td>Irrigation Flux Including any Irrigation for Crops, Trees, Pasture, or Urban Lawns</td>
    <td>kg m-2 s-1</td>
    <td>Mass flux of water due to irrigation.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591768a8-9e49-11e5-803c-0d0b866b59f3.html">qgwr</a></td>
    <td>Groundwater Recharge from Soil Layer</td>
    <td>kg m-2 s-1</td>
    <td>Mass flux of water from the soil layer into ground water.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e3e6208c3cf8ae5ac917ee971cb42e29.html">mmrpm1</a></td>
    <td>PM1.0 Mass Mixing Ratio</td>
    <td>kg kg-1</td>
    <td>Mass fraction atmospheric particulate compounds with an aerodynamic diameter of less than or equal to 1 micrometers</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6aee2e2f22bb5a7a9aee1f88926dfd92.html">mmrpm10</a></td>
    <td>PM10 Mass Mixing Ratio</td>
    <td>kg kg-1</td>
    <td>Mass fraction atmospheric particulate compounds with an aerodynamic diameter of less than or equal to 10 micrometers</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4ff3e42362266bd75ad3bcfc785465a3.html">mmrpm2p5</a></td>
    <td>PM2.5 Mass Mixing Ratio</td>
    <td>kg kg-1</td>
    <td>Mass fraction atmospheric particulate compounds with an aerodynamic diameter of less than or equal to 2.5 micrometers</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5980f8e283fd4709e4542c0652756dc1.html">mmrss</a></td>
    <td>Sea-Salt Aerosol Mass Mixing Ratio</td>
    <td>kg kg-1</td>
    <td>Mass fraction in the atmosphere of sea salt aerosol (dry mass).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/8c58644da8e357d61b70eac2a0afb4f9.html">mmrsoa</a></td>
    <td>Secondary Organic Aerosol Mass Mixing Ratio</td>
    <td>kg kg-1</td>
    <td>Mass fraction in the atmosphere of secondary organic aerosols (particulate organic matter formed within the atmosphere from gaseous precursors; dry mass).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e3fdfe758c0165caf74dcbb2531c83b3.html">mmraerh2o</a></td>
    <td>Aerosol Water Mass Mixing Ratio</td>
    <td>kg kg-1</td>
    <td>Mass fraction is used in the construction mass_fraction_of_X_in_Y, where X is a material constituent of Y. It means the ratio of the mass of X to the mass of Y (including X). &quot;Aerosol&quot; means the system of suspended liquid or solid particles in air (except cloud droplets) and their carrier gas, the air itself. &quot;Ambient_aerosol&quot; means that the aerosol is measured or modelled at the ambient state of pressure, temperature and relative humidity that exists in its immediate environment. &quot;Ambient aerosol particles&quot; are aerosol particles that have taken up ambient water through hygroscopic growth. The extent of hygroscopic growth depends on the relative humidity and the composition of the particles.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe6cc8a8-a41f-11e5-9025-ac72891c3257.html">sfpm25</a></td>
    <td>PM2.5 Mass Mixing Ratio in Lowest Model Layer</td>
    <td>kg kg-1</td>
    <td>Mass fraction of atmospheric particulate compounds with an aerodynamic diameter of less than or equal to 2.5 micrometers. To specify the relative humidity and temperature at which the particle size applies, provide scalar coordinate variables with the standard names of &quot;relative_humidity&quot; and &quot;air_temperature&quot;.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/71249bb8-c7b6-11e6-bb2a-ac72891c3257.html">rootdsl</a></td>
    <td>Root Distribution</td>
    <td>kg m-2</td>
    <td>Mass of carbon in roots.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e9c50-9e49-11e5-803c-0d0b866b59f3.html">clwmodis</a></td>
    <td>MODIS Liquid Cloud Percentage</td>
    <td>%</td>
    <td>Mass of cloud liquid water, as seen by the  Moderate Resolution Imaging Spectroradiometer (MODIS). Includes both large-scale and convective cloud.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/80a1dd605b563e9f09c718a5ba9cb9cc.html">clwvi</a></td>
    <td>Condensed Water Path</td>
    <td>kg m-2</td>
    <td>Mass of condensed (liquid + ice) water in the column divided by the area of the column (not just the area of the cloudy portion of the column). Includes precipitating hydrometeors ONLY if the precipitating hydrometeors affect the calculation of radiative transfer in model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d24c4-9e49-11e5-803c-0d0b866b59f3.html">mrtws</a></td>
    <td>Terrestrial Water Storage</td>
    <td>kg m-2</td>
    <td>Mass of water in all phases and in all components including soil, canopy, vegetation, ice sheets, rivers and ground water.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d70b4-9e49-11e5-803c-0d0b866b59f3.html">sishevel</a></td>
    <td>Maximum Shear of Sea-Ice Velocity Field</td>
    <td>s-1</td>
    <td>Maximum shear of sea-ice velocity field (second shear strain invariant)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ea16e-9e49-11e5-803c-0d0b866b59f3.html">sistremax</a></td>
    <td>Maximum Shear Stress in Sea Ice</td>
    <td>N m-1</td>
    <td>Maximum shear stress in sea ice (second stress invariant)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590dac64-9e49-11e5-803c-0d0b866b59f3.html">sifb</a></td>
    <td>Sea-Ice Freeboard</td>
    <td>m</td>
    <td>Mean height of sea-ice surface (=snow-ice interface when snow covered) above sea level</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913e674-9e49-11e5-803c-0d0b866b59f3.html">sisali</a></td>
    <td>Sea Ice Salinity</td>
    <td>0.001</td>
    <td>Mean sea-ice salinity of all sea ice in grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59152e1c-9e49-11e5-803c-0d0b866b59f3.html">vortmean</a></td>
    <td>Relative Vorticity</td>
    <td>s-1</td>
    <td>Mean vorticity over 850,700,600 hPa</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/aa9073c2-1b36-11e6-a696-35cd2d8034df.html">simpmass</a></td>
    <td>Meltpond Mass per Unit Area (as Depth)</td>
    <td>m</td>
    <td>Meltpond Depth</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2dedcb347c18e132a2f4d625abf94585.html">va</a></td>
    <td>Northward Wind</td>
    <td>m s-1</td>
    <td>Meridional wind (positive in a northward direction).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/020dcc8a-b8b2-11e6-a189-5404a60d96b5.html">va100m</a></td>
    <td>Northward Wind at 100m</td>
    <td>m s-1</td>
    <td>Meridional wind at 100m above the surface.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0086e9daf8d4fb6cb305e03119d2ac2d.html">sob</a></td>
    <td>Sea Water Salinity at Sea Floor</td>
    <td>0.001</td>
    <td>Model prognostic salinity at bottom-most model grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e51c1fc2-00a7-11e6-a8a4-5404a60d96b5.html">vmrox</a></td>
    <td>Mole Fraction of Odd Oxygen (O, O3 and O1D)</td>
    <td>mol mol-1</td>
    <td>Mole Fraction of Ox</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c9794182-c5f0-11e6-ac20-5404a60d96b5.html">co3abio</a></td>
    <td>Abiotic Carbonate Ion Concentration</td>
    <td>mol m-3</td>
    <td>Mole concentration (number of moles per unit volume: molarity) of the abiotic-analogue carbonate anion (CO3). An abiotic analogue is used to simulate the effect on a modelled variable when biological effects on ocean carbon concentration and alkalinity are ignored. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/065edaa295c376f0e9bc1985bc3f491c.html">co3satarag</a></td>
    <td>Mole Concentration of Carbonate Ion in Equilibrium with Pure Aragonite in Sea Water</td>
    <td>mol m-3</td>
    <td>Mole concentration (number of moles per unit volume: molarity) of the carbonate anion (CO3) for sea water in equilibrium with pure Aragonite. Aragonite  (CaCO3) is a mineral that is a polymorph of calcium carbonate.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/28907f4f1855d3d22166c87b8e5300be.html">co3satcalc</a></td>
    <td>Mole Concentration of Carbonate Ion in Equilibrium with Pure Calcite in Sea Water</td>
    <td>mol m-3</td>
    <td>Mole concentration (number of moles per unit volume: molarity) of the carbonate anion (CO3) for sea water in equilibrium with pure calcite. Aragonite  (CaCO3) is a mineral that is a polymorph of calcium carbonate.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9791ce56083fe450761a27a7dc158225.html">co3</a></td>
    <td>Carbonate Ion Concentration</td>
    <td>mol m-3</td>
    <td>Mole concentration (number of moles per unit volume: molarity) of the carbonate anion (CO3).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5a887812bc95f4c8377af5051a2566fe.html">nh4</a></td>
    <td>Dissolved Ammonium Concentration</td>
    <td>mol m-3</td>
    <td>Mole concentration means moles (amount of substance) per unit volume and is used in the construction mole_concentration_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/96acc3ed79b2bd5e4dbd613a4c27720f.html">no3</a></td>
    <td>Dissolved Nitrate Concentration</td>
    <td>mol m-3</td>
    <td>Mole concentration means moles (amount of substance) per unit volume and is used in the construction mole_concentration_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96db98e-c5f0-11e6-ac20-5404a60d96b5.html">no3os</a></td>
    <td>Surface Dissolved Nitrate Concentration</td>
    <td>mol m-3</td>
    <td>Mole concentration means moles (amount of substance) per unit volume and is used in the construction mole_concentration_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96dc79e-c5f0-11e6-ac20-5404a60d96b5.html">nh4os</a></td>
    <td>Surface Dissolved Ammonium Concentration</td>
    <td>mol m-3</td>
    <td>Mole concentration means moles (amount of substance) per unit volume and is used in the construction mole_concentration_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/72366111fcb3d2a0d14dc917e8fca8eb.html">po4</a></td>
    <td>Total Dissolved Inorganic Phosphorus Concentration</td>
    <td>mol m-3</td>
    <td>Mole concentration means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction &quot;mole_concentration_of_X_in_Y&quot;, where X is a material constituent of Y. A chemical or biological species denoted by X may be described by a single term such as &quot;nitrogen&quot; or a phrase such as &quot;nox_expressed_as_nitrogen&quot;. &quot;Dissolved inorganic phosphorus&quot; means the sum of all inorganic phosphorus in solution (including phosphate, hydrogen phosphate, dihydrogen phosphate, and phosphoric acid).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96dd518-c5f0-11e6-ac20-5404a60d96b5.html">po4os</a></td>
    <td>Surface Total Dissolved Inorganic Phosphorus Concentration</td>
    <td>mol m-3</td>
    <td>Mole concentration means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction &quot;mole_concentration_of_X_in_Y&quot;, where X is a material constituent of Y. A chemical or biological species denoted by X may be described by a single term such as &quot;nitrogen&quot; or a phrase such as &quot;nox_expressed_as_nitrogen&quot;. &quot;Dissolved inorganic phosphorus&quot; means the sum of all inorganic phosphorus in solution (including phosphate, hydrogen phosphate, dihydrogen phosphate, and phosphoric acid).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/56a5fa6dd6b7c4aa711f362d5d5414f6.html">si</a></td>
    <td>Total Dissolved Inorganic Silicon Concentration</td>
    <td>mol m-3</td>
    <td>Mole concentration means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction &quot;mole_concentration_of_X_in_Y&quot;, where X is a material constituent of Y. A chemical or biological species denoted by X may be described by a single term such as &quot;nitrogen&quot; or a phrase such as &quot;nox_expressed_as_nitrogen&quot;. &quot;Dissolved inorganic silicon&quot; means the sum of all inorganic silicon in solution (including silicic acid and its first dissociated anion SiO(OH)3-).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96df0fc-c5f0-11e6-ac20-5404a60d96b5.html">sios</a></td>
    <td>Surface Total Dissolved Inorganic Silicon Concentration</td>
    <td>mol m-3</td>
    <td>Mole concentration means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction &quot;mole_concentration_of_X_in_Y&quot;, where X is a material constituent of Y. A chemical or biological species denoted by X may be described by a single term such as &quot;nitrogen&quot; or a phrase such as &quot;nox_expressed_as_nitrogen&quot;. &quot;Dissolved inorganic silicon&quot; means the sum of all inorganic silicon in solution (including silicic acid and its first dissociated anion SiO(OH)3-).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3ab8e10027d7014f18f9391890369235.html">cfc12</a></td>
    <td>Mole Concentration of CFC12 in Sea Water</td>
    <td>mol m-3</td>
    <td>Mole concentration means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction &quot;mole_concentration_of_X_in_Y&quot;, where X is a material constituent of Y. A chemical or biological species denoted by X may be described by a single term such as &quot;nitrogen&quot; or a phrase such as &quot;nox_expressed_as_nitrogen&quot;. The chemical formula for CFC12 is CF2Cl2. The IUPAC name for CFC12 is dichloro-difluoro-methane.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/42625c97b8fe75124a345962c4430982.html">cfc11</a></td>
    <td>Mole Concentration of CFC11 in Sea Water</td>
    <td>mol m-3</td>
    <td>Mole concentration means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction &quot;mole_concentration_of_X_in_Y&quot;, where X is a material constituent of Y. A chemical or biological species denoted by X may be described by a single term such as &quot;nitrogen&quot; or a phrase such as &quot;nox_expressed_as_nitrogen&quot;. The chemical formula of CFC11 is CFCl3. The IUPAC name for CFC11 is trichloro-fluoro-methane.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/82b5e315b8be441e26a9c45e95fe7573.html">sf6</a></td>
    <td>Mole Concentration of SF6 in Sea Water</td>
    <td>mol m-3</td>
    <td>Mole concentration means number of moles per unit volume, also called &quot;molarity&quot;, and is used in the construction &quot;mole_concentration_of_X_in_Y&quot;, where X is a material constituent of Y. A chemical or biological species denoted by X may be described by a single term such as &quot;nitrogen&quot; or a phrase such as &quot;nox_expressed_as_nitrogen&quot;. The chemical formula of sulfur hexafluoride is SF6.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96ec19e-c5f0-11e6-ac20-5404a60d96b5.html">dmsos</a></td>
    <td>Surface Mole Concentration of Dimethyl Sulphide in Sea Water</td>
    <td>mol m-3</td>
    <td>Mole concentration of dimethyl sulphide in water in the near surface layer</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bdce9878-233e-11e6-a788-5404a60d96b5.html">dmso</a></td>
    <td>Mole Concentration of Dimethyl Sulphide in Sea Water</td>
    <td>mol m-3</td>
    <td>Mole concentration of dimethyl sulphide in water</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe6c8d8e-a41f-11e5-9025-ac72891c3257.html">ch3coch3</a></td>
    <td>CH3COCH3  volume mixing ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction &quot;mole_fraction_of_X_in_Y&quot;, where X is a material constituent of Y. A chemical species denoted by X may be described by a single term such as &quot;nitrogen&quot; or a phrase such as &quot;nox_expressed_as_nitrogen&quot;. Acetone is an organic molecule with the chemical formula CH3CH3CO. The IUPAC name for acetone is propan-2-one. Acetone is a member of the group of organic compounds known as ketones. There are standard names for the ketone group as well as for some of the individual species.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/942125e5a461fef57b1477b9a2bd5fa0.html">n2o</a></td>
    <td>Mole Fraction of N2O</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.   The chemical formula of  nitrous oxide is N2O.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2c1d2748570f208b1dde04d1e926b5e0.html">hcfc22global</a></td>
    <td>Global Mean Mole Fraction of HCFC22</td>
    <td>1e-12</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.  A chemical species denoted by X may be described by a single term such as 'nitrogen' or a phrase such as 'nox_expressed_as_nitrogen'. The chemical formula for HCFC22 is CHClF2.  The IUPAC name for HCFC22 is chloro-difluoro-methane.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4f875cf09480e892812e0d76a67aff79.html">cfc11global</a></td>
    <td>Global Mean Mole Fraction of CFC11</td>
    <td>1e-12</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.  The chemical formula of CFC11 is CFCl3.  The IUPAC name for CFC11 is trichloro-fluoro-methane.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c92e83db9d11646c271cc3ca75aaa267.html">cfc113global</a></td>
    <td>Global Mean Mole Fraction of CFC113</td>
    <td>1e-12</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.  The chemical formula of CFC113 is CCl2FCClF2.  The IUPAC name for CFC113 is 1,1,2-trichloro-1,2,2-trifluoro-ethane.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d833c036446ac363dcdf22027e28c0ed.html">cfc12global</a></td>
    <td>Global Mean Mole Fraction of CFC12</td>
    <td>1e-12</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.  The chemical formula of CFC12 is CF2Cl2.  The IUPAC name for CFC12 is dichloro-difluoro-methane.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/cc8f92a2635774d636748ec8007c4bab.html">hcl</a></td>
    <td>HCl Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.  The chemical formula of hydrogen chloride is HCl.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/96f51020-b096-11e6-aab6-ac72891c3257.html">ho2</a></td>
    <td>HO2 Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.  The chemical formula of hydroperoxyl radical is HO2.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/04f25e5e4c98a0a98575bc3d805bb03a.html">dms</a></td>
    <td>Dimethyl Sulphide (DMS) Mole Fraction</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0656a67a-b896-11e6-a189-5404a60d96b5.html">sfo3max</a></td>
    <td>Daily Maximum O3 Volume Mixing Ratio in Lowest Model Layer</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/07ae8a0c132c9bf65a2722885a2fcd08.html">hno3</a></td>
    <td>HNO3 Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1d4594c97188efd47935238a429e02e4.html">o3</a></td>
    <td>Mole Fraction of O3</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/586c3879af2023a43fd12c2e0a64b6af.html">pan</a></td>
    <td>PAN Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/609d47152c2ed8122caa2528117aff9a.html">oh</a></td>
    <td>OH Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/648f83bb87b09bb8c24aaf82bf3c9aef.html">no2</a></td>
    <td>NO2 Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7ec31850a34ee43e98c5d526770fb581.html">c2h6</a></td>
    <td>C2H6 Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7f4c49e8abe3230e87fa7299b73448fa.html">ch4</a></td>
    <td>Mole Fraction of CH4</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/8b3a5d37fefe0337625c64455cea4e80.html">so2</a></td>
    <td>SO2 Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9bb9a503065dfbd30c9bbe5c3c6abf99.html">co2</a></td>
    <td>Mole Fraction of CO2</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e8d5bdfd24b275f0530646361967483d.html">c2h2</a></td>
    <td>C2H2 Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe6b44a6-a41f-11e5-9025-ac72891c3257.html">c3h6</a></td>
    <td>C3H6  volume mixing ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe6bdb96-a41f-11e5-9025-ac72891c3257.html">hcho</a></td>
    <td>Formaldehyde Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe6c7b96-a41f-11e5-9025-ac72891c3257.html">c3h8</a></td>
    <td>C3H8  volume mixing ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe6c8654-a41f-11e5-9025-ac72891c3257.html">co</a></td>
    <td>CO Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe6ca864-a41f-11e5-9025-ac72891c3257.html">sfno2</a></td>
    <td>NO2 Volume Mixing Ratio in Lowest Model Layer</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe6ce54a-a41f-11e5-9025-ac72891c3257.html">no</a></td>
    <td>NO Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe6cecca-a41f-11e5-9025-ac72891c3257.html">sfo3</a></td>
    <td>O3 Volume Mixing Ratio in Lowest Model Layer</td>
    <td>mol mol-1</td>
    <td>Mole fraction is used in the construction mole_fraction_of_X_in_Y, where X is a material constituent of Y.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d9c1ba0b5e1b43f738cd1fbe4a765906.html">isop</a></td>
    <td>Isoprene Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Mole fraction of isoprene in air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9a6a4f8bd6adfd9c68cb6a7961f295ea.html">eminox</a></td>
    <td>Total Emission Rate of NOx</td>
    <td>kg m-2 s-1</td>
    <td>NOx=NO+NO2. Integrate 3D emission field vertically to 2d field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f4e5c381e643cd68d3104cf75cc675bd.html">drynoy</a></td>
    <td>Dry Deposition Rate of NOy</td>
    <td>kg m-2 s-1</td>
    <td>NOy is the sum of all simulated oxidized nitrogen species out of NO, NO2, HNO3, HNO4, NO3 aerosol, NO3(radical), N2O5, PAN, other organic nitrates. Dry deposition includes gravitational settling, impact scavenging, and turbulent deposition.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ecfae3e2adc49321ec4c9d664fd425ec.html">wetnoy</a></td>
    <td>Wet Deposition Rate of NOy Including Aerosol Nitrate</td>
    <td>kg m-2 s-1</td>
    <td>NOy is the sum of all simulated oxidized nitrogen species, out of NO, NO2, HNO3, HNO4, NO3 aerosol, NO3 (radical), N2O5, PAN, other organic nitrates.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b71c89e6003d19738e44474eaacf8ef0.html">nep</a></td>
    <td>Net Carbon Mass Flux out of Atmosphere due to Net Ecosystem Productivity on Land</td>
    <td>kg m-2 s-1</td>
    <td>Natural flux of CO2 (expressed as a mass flux of carbon) from the atmosphere to the land calculated as the difference between uptake associated will photosynthesis and the release of CO2 from the sum of plant and soil respiration and fire.  Positive flux is into the land.  Emissions from natural fires and human ignition fires as calculated by the fire module of the dynamic vegetation model, but excluding any CO2 flux from fire included in fLuc (CO2 Flux to Atmosphere from Land Use Change).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96c720e-c5f0-11e6-ac20-5404a60d96b5.html">dissi13cos</a></td>
    <td>Surface Dissolved Inorganic Carbon-13 Concentration</td>
    <td>mol m-3</td>
    <td>Near surface dissolved inorganic carbon-13 (CO3+HCO3+H2CO3) concentration</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96eec14-c5f0-11e6-ac20-5404a60d96b5.html">co3abioos</a></td>
    <td>Surface Abiotic Carbonate Ion Concentration</td>
    <td>mol m-3</td>
    <td>Near surface mole concentration (number of moles per unit volume: molarity) of the abiotic-analogue carbonate anion (CO3). An abiotic analogue is used to simulate the effect on a modelled variable when biological effects on ocean carbon concentration and alkalinity are ignored. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96f0758-c5f0-11e6-ac20-5404a60d96b5.html">co3sataragos</a></td>
    <td>Surface Mole Concentration of Carbonate Ion in Equilibrium with Pure Aragonite in Sea Water</td>
    <td>mol m-3</td>
    <td>Near surface mole concentration (number of moles per unit volume: molarity) of the carbonate anion (CO3) for sea water in equilibrium with pure Aragonite. Aragonite  (CaCO3) is a mineral that is a polymorph of calcium carbonate.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96ef9ac-c5f0-11e6-ac20-5404a60d96b5.html">co3satcalcos</a></td>
    <td>Surface Mole Concentration of Carbonate Ion in Equilibrium with Pure Calcite in Sea Water</td>
    <td>mol m-3</td>
    <td>Near surface mole concentration (number of moles per unit volume: molarity) of the carbonate anion (CO3) for sea water in equilibrium with pure calcite. Aragonite  (CaCO3) is a mineral that is a polymorph of calcium carbonate.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96ecf22-c5f0-11e6-ac20-5404a60d96b5.html">co3os</a></td>
    <td>Surface Carbonate Ion Concentration</td>
    <td>mol m-3</td>
    <td>Near surface mole concentration (number of moles per unit volume: molarity) of the carbonate anion (CO3).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96eddd2-c5f0-11e6-ac20-5404a60d96b5.html">co3natos</a></td>
    <td>Surface Natural Carbonate Ion Concentration</td>
    <td>mol m-3</td>
    <td>Near surface mole concentration (number of moles per unit volume: molarity) of the natural-analogue carbonate anion (CO3). A natural analogue is used to simulate the effect on a modelled variable of imposing preindustrial atmospheric carbon dioxide concentrations, even when the model as a whole may be subjected to varying forcings. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ebfefc2ab8716ef597b128171b275945.html">huss</a></td>
    <td>Near-Surface Specific Humidity</td>
    <td>1</td>
    <td>Near-surface (usually, 2 meter) specific humidity.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59136654-9e49-11e5-803c-0d0b866b59f3.html">rhLitter</a></td>
    <td>Carbon Mass Flux into Atmosphere Due to Heterotrophic Respiration from Litter on Land</td>
    <td>kg m-2 s-1</td>
    <td>Needed to calculate litter bulk turnover time. Includes respiration from CWD as well.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f3674-9e49-11e5-803c-0d0b866b59f3.html">rhSoil</a></td>
    <td>Carbon Mass Flux into Atmosphere Due to Heterotrophic Respiration from Soil on Land</td>
    <td>kg m-2 s-1</td>
    <td>Needed to calculate soil bulk turnover time</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/26328c46dfcc65d454b6fd4c52ccb48f.html">rtmt</a></td>
    <td>Net Downward Radiative Flux at Top of Model</td>
    <td>W m-2</td>
    <td>Net Downward Radiative Flux at Top of Model : I.e., at the top of that portion of the atmosphere where dynamics are explicitly treated by the model. This is reported only if it differs from the net downward radiative flux at the top of the atmosphere.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/cdd8f95be110061697bc323f6bcaba2d.html">rss</a></td>
    <td>Net Shortwave Surface Radiation</td>
    <td>W m-2</td>
    <td>Net downward shortwave radiation at the surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3e7348adedb540627808da06a211c81c.html">rls</a></td>
    <td>Net Longwave Surface Radiation</td>
    <td>W m-2</td>
    <td>Net longwave surface radiation</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2157a343384243be18fe8a06826aecb5.html">bddtdisi</a></td>
    <td>Rate of Change of Dissolved Inorganic Silicon Due to Biological Activity</td>
    <td>mol m-3 s-1</td>
    <td>Net of biological terms in time rate of change of dissolved inorganic silicon</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/cc3eb19e60c00c77520c2cbf58c322b1.html">bddtdip</a></td>
    <td>Rate of Change of Dissolved Phosphorus Due to Biological Activity</td>
    <td>mol m-3 s-1</td>
    <td>Net of biological terms in time rate of change of dissolved phosphate</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d3e6e20c91db32a83bcf3d8d8d9dafd3.html">fddtdin</a></td>
    <td>Rate of Change of Net Dissolved Inorganic Nitrogen</td>
    <td>mol m-2 s-1</td>
    <td>Net time rate of change of nitrogen nutrients (e.g. NO3+NH4)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e5a8a5a5c4ff0920fa237e5274df57ba.html">bddtalk</a></td>
    <td>Rate of Change of Alkalinity Due to Biological Activity</td>
    <td>mol m-3 s-1</td>
    <td>Net total of biological terms in time rate of change of alkalinity</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1df32c1e9440e03187aa8253e1a0f2d9.html">bddtdic</a></td>
    <td>Rate of Change of Dissolved Inorganic Carbon Due to Biological Activity</td>
    <td>mol m-3 s-1</td>
    <td>Net total of biological terms in time rate of change of dissolved inorganic carbon</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6674625c225f14aa8d6795d1df244c28.html">bddtdife</a></td>
    <td>Rate of Change of Dissolved Inorganic Iron Due to Biological Activity</td>
    <td>mol m-3 s-1</td>
    <td>Net total of biological terms in time rate of change of dissolved inorganic iron</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c075ee7167ef3bc43fef7ce624f960af.html">bddtdin</a></td>
    <td>Rate of Change of Nitrogen Nutrient Due to Biological Activity</td>
    <td>mol m-3 s-1</td>
    <td>Net total of biological terms in time rate of change of nitrogen nutrients (e.g. NO3+NH4)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917a070-9e49-11e5-803c-0d0b866b59f3.html">wetlandCH4</a></td>
    <td>Grid Averaged Methane Emissions from Wetlands</td>
    <td>kg m-2 s-1</td>
    <td>Net upward flux of methane (NH4) from wetlands (areas where water covers the soil, or is present either at or near the surface of the soil all year or for varying periods of time during the year, including during the growing season). </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59178a72-9e49-11e5-803c-0d0b866b59f3.html">hussLut</a></td>
    <td>Near-Surface Specific Humidity on Land-Use Tile</td>
    <td>1</td>
    <td>Normally, the specific humidity should be reported at the 2 meter height</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/86b1cd51f370e346ecb20f1e80cb6ea4.html">vas</a></td>
    <td>Northward Near-Surface Wind</td>
    <td>m s-1</td>
    <td>Northward component of the near surface wind</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591478be-9e49-11e5-803c-0d0b866b59f3.html">fNloss</a></td>
    <td>Total Nitrogen Lost (Including NHx, NOx, N2O, N2 and Leaching)</td>
    <td>kg m-2 s-1</td>
    <td>Not all models split losses into gaseous and leaching</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9799d95c5c691eec9bb4c1bf9b050191.html">o3prod</a></td>
    <td>O3 Production Rate</td>
    <td>mol m-3 s-1</td>
    <td>ONLY provide the sum of all the HO2/RO2 + NO reactions (as k*[HO2]*[NO])</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/8f702d9afa69b3f0e0fb2a64470e12d8.html">o3loss</a></td>
    <td>O3 Destruction Rate</td>
    <td>mol m-3 s-1</td>
    <td>ONLY provide the sum of the following reactions: (i) O(1D)+H2O; (ii) O3+HO2; (iii) O3+OH; (iv) O3+alkenes (isoprene, ethene,...)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f1b8ddb539cb96eb65453dce4c8bb978.html">deptho</a></td>
    <td>Sea Floor Depth Below Geoid</td>
    <td>m</td>
    <td>Ocean bathymetry.   Reported here is the sea floor depth for present day relative to z=0 geoid. Reported as missing for land grid cells.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1cf6c7fa0adedf95b3eaad5fb3f96b1c.html">diftrblo</a></td>
    <td>Ocean Tracer Diffusivity Due to Parameterized Mesoscale Advection</td>
    <td>m2 s-1</td>
    <td>Ocean tracer diffusivity associated with parameterized eddy-induced advective transport. Sometimes this diffusivity is called the 'thickness' diffusivity. For CMIP5, this diagnostic was called 'ocean tracer bolus laplacian diffusivity'.  The CMIP6 name is physically more relevant.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b02d071fff99f2632aa8ac5e83e92215.html">diftrelo</a></td>
    <td>Ocean Tracer Epineutral Laplacian Diffusivity</td>
    <td>m2 s-1</td>
    <td>Ocean tracer diffusivity associated with parameterized eddy-induced diffusive transport oriented along neutral or isopycnal directions. Sometimes this diffusivity is called the neutral diffusivity or isopycnal diffusivity or Redi diffusivity.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e9070-9e49-11e5-803c-0d0b866b59f3.html">sidragbot</a></td>
    <td>Ocean Drag Coefficient</td>
    <td>1</td>
    <td>Oceanic drag coefficient that is used to calculate the oceanic momentum drag on sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e0a1b4528bdd009ada638396c9537baf.html">wap500</a></td>
    <td>Pressure Tendency</td>
    <td>Pa s-1</td>
    <td>Omega (vertical velocity in pressure coordinates, positive downwards) at 500hPa level;</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/51fb29dd55442361fa9c5dbe23aca9c6.html">wap</a></td>
    <td>Omega (=dp/dt)</td>
    <td>Pa s-1</td>
    <td>Omega (vertical velocity in pressure coordinates, positive downwards)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/962e51dc-267b-11e7-96a5-ac72891c3257.html">ugrido</a></td>
    <td>UGRID Grid Specification</td>
    <td></td>
    <td>Ony required for models with unstructured grids: this label should be used for a file containing information about the grid structure, following the UGRID convention.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0baf6a333b91c4db341b515c28cd2c05.html">abs550aer</a></td>
    <td>Ambient Aerosol Absorption Optical Thickness at 550nm</td>
    <td>1</td>
    <td>Optical thickness of atmospheric aerosols at wavelength 550 nanometers.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/afd8ba4a-a0da-11e6-bc63-ac72891c3257.html">aeroptbnd</a></td>
    <td>Aerosol Level Absorption Optical Thickness for Each Band</td>
    <td>1</td>
    <td>Optical thickness of atmospheric aerosols in wavelength bands.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5895b847e6247f0058199d1b26772655.html">froc</a></td>
    <td>Downward Organic Carbon Flux at Ocean Bottom</td>
    <td>mol m-2 s-1</td>
    <td>Organic Carbon loss to sediments</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5be0620fea71e2541aa08aac57ed9243.html">ocfriver</a></td>
    <td>Flux of Organic Carbon into Ocean Surface by Runoff</td>
    <td>mol m-2 s-1</td>
    <td>Organic Carbon supply to ocean through runoff (separate from gas exchange)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5d432c16b179052a4e94c63af356c67c.html">diabdrag</a></td>
    <td>Tendency of Eastward Wind from Numerical Artefacts</td>
    <td>m s-2</td>
    <td>Other sub-grid scale/numerical zonal drag excluding that already provided for the parameterized orographic and non-orographic gravity waves. This would be used to calculate the total 'diabatic drag'. Contributions to this additional drag such Rayleigh friction and diffusion that can be calculated from the monthly mean wind fields should not be included, but details (e.g. coefficients) of the friction and/or diffusion used in the model should be provided separately.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e05c4-9e49-11e5-803c-0d0b866b59f3.html">rivo</a></td>
    <td>River Discharge</td>
    <td>m3 s-1</td>
    <td>Outflow of River Water from Cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/29a3aaf848070fb8ff4ecb7aa2dfa2eb.html">msftyrho</a></td>
    <td>Ocean Y Overturning Mass Streamfunction</td>
    <td>kg s-1</td>
    <td>Overturning mass streamfunction arising from all advective mass transport processes, resolved and parameterized.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59cc645887ed0a072bb553283e15f732.html">msftyz</a></td>
    <td>Ocean Y Overturning Mass Streamfunction</td>
    <td>kg s-1</td>
    <td>Overturning mass streamfunction arising from all advective mass transport processes, resolved and parameterized.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/faeffb2438794e8400143533d61d1623.html">msftmrho</a></td>
    <td>Ocean Meridional Overturning Mass Streamfunction</td>
    <td>kg s-1</td>
    <td>Overturning mass streamfunction arising from all advective mass transport processes, resolved and parameterized.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe8d7416c92bdae56503590599286800.html">msftmz</a></td>
    <td>Ocean Meridional Overturning Mass Streamfunction</td>
    <td>kg s-1</td>
    <td>Overturning mass streamfunction arising from all advective mass transport processes, resolved and parameterized.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/218a6b28-8995-11e6-b63d-5404a60d96b5.html">o3ste</a></td>
    <td>Stratospheric Ozone Tracer Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Ozone tracer intended to map out strat-trop exchange (STE) of ozone. Set to ozone in the stratosphere, then destroyed in the troposphere using the ozone chemical loss rate. Please specify the tropopause definition used</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591472f6-9e49-11e5-803c-0d0b866b59f3.html">xgwdparam</a></td>
    <td>Eastward Gravity Wave Drag</td>
    <td>Pa</td>
    <td>Parameterised x-component of gravity wave drag</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59132e1e-9e49-11e5-803c-0d0b866b59f3.html">ygwdparam</a></td>
    <td>Northward Gravity Wave Drag</td>
    <td>Pa</td>
    <td>Parameterised y- component of gravity wave drag</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b21073e1a8fa421ecd21766bc8442acd.html">diftrbbo</a></td>
    <td>Ocean Tracer Bolus Biharmonic Diffusivity</td>
    <td>m4 s-1</td>
    <td>Parameterized mesoscale eddy advection occurs on a spatial scale of many tens of kilometres and an evolutionary time of weeks(sometimes called bolus advection). Reference: James C. McWilliams 2016, Submesoscale currents in the ocean, Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences, volume 472, issue 2189. DOI: 10.1098/rspa.2016.0117. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/400e5707b65c01e31f2ec6a59dd3983b.html">clcalipso</a></td>
    <td>CALIPSO Percentage Cloud Cover</td>
    <td>%</td>
    <td>Percentage cloud cover in CALIPSO standard atmospheric layers.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590eb9ec-9e49-11e5-803c-0d0b866b59f3.html">clcalipsoice</a></td>
    <td>CALIPSO Ice Cloud Percentage</td>
    <td>%</td>
    <td>Percentage cloud cover in CALIPSO standard atmospheric layers.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7308096ae00ff52340909b2a59415f82.html">clhcalipso</a></td>
    <td>CALIPSO High Level Cloud Area Percentage</td>
    <td>%</td>
    <td>Percentage cloud cover in layer centred on 220hPa</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fe9d4b45792f7d6430fe2a9c9b7234b1.html">clmcalipso</a></td>
    <td>CALIPSO Mid Level Cloud Cover Percentage</td>
    <td>%</td>
    <td>Percentage cloud cover in layer centred on 560hPa</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0bbbf303ac691061a69938846f32b23b.html">cllcalipso</a></td>
    <td>CALIPSO Low Level Cloud Cover Percentage</td>
    <td>%</td>
    <td>Percentage cloud cover in layer centred on 840hPa</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fa7666d61b92de5bad1ad76561b8b850.html">clisccp</a></td>
    <td>ISCCP Cloud Area Percentage</td>
    <td>%</td>
    <td>Percentage cloud cover in optical depth categories.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e0ecf1c1305c1bdc69bee0e7ba1e2e03.html">cl</a></td>
    <td>Percentage Cloud Cover</td>
    <td>%</td>
    <td>Percentage cloud cover, including both large-scale and convective cloud.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f43f8-9e49-11e5-803c-0d0b866b59f3.html">clcalipsoliq</a></td>
    <td>CALIPSO Liquid Cloud Percentage</td>
    <td>%</td>
    <td>Percentage liquid water ice cloud cover in CALIPSO standard atmospheric layers.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591526ec-9e49-11e5-803c-0d0b866b59f3.html">cnc</a></td>
    <td>Canopy Covered Area Percentage</td>
    <td>%</td>
    <td>Percentage of area covered by vegetation.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53826ae4-bf01-11e6-a554-ac72891c3257.html">sncIs</a></td>
    <td>Ice Sheet Snow Cover Percentage</td>
    <td>%</td>
    <td>Percentage of each grid cell that is occupied by snow that rests on land portion of cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e53e97d7e904fe67aa54b721b3c6a290.html">snc</a></td>
    <td>Snow Area Percentage</td>
    <td>%</td>
    <td>Percentage of each grid cell that is occupied by snow that rests on land portion of cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2ca96cd5a4e83feb0d493bf9aa1a5b59.html">c3PftFrac</a></td>
    <td>Percentage Cover by C3 Plant Functional Type</td>
    <td>%</td>
    <td>Percentage of entire grid cell  that is covered by C3 PFTs (including grass, crops, and trees).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/351c26a0f5a0cefa8f1183f2f12e1aa3.html">c4PftFrac</a></td>
    <td>Percentage Cover by C4 Plant Functional Type</td>
    <td>%</td>
    <td>Percentage of entire grid cell  that is covered by C4 PFTs (including grass and crops).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/64c3bc72c46203646eb28fee17f6a5f7.html">pastureFrac</a></td>
    <td>Percentage of Land Which Is Anthropogenic Pasture</td>
    <td>%</td>
    <td>Percentage of entire grid cell  that is covered by anthropogenic pasture.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9cdb8d54d49e98acadd87e2a1139225e.html">baresoilFrac</a></td>
    <td>Bare Soil Percentage Area Coverage</td>
    <td>%</td>
    <td>Percentage of entire grid cell  that is covered by bare soil.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f730de87987b0357d3954c93c4a0c7f7.html">cropFrac</a></td>
    <td>Percentage Crop Cover</td>
    <td>%</td>
    <td>Percentage of entire grid cell  that is covered by crop.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1e93ae651487e683206b923c11fd6db1.html">treeFracPrimEver</a></td>
    <td>Percentage Cover by Primary Evergreen Trees</td>
    <td>%</td>
    <td>Percentage of entire grid cell  that is covered by primary evergreen trees.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e9289080901a39eba6ade178d596795a.html">treeFracSecDec</a></td>
    <td>Percentage Cover by Secondary Deciduous Trees</td>
    <td>%</td>
    <td>Percentage of entire grid cell  that is covered by secondary deciduous trees.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b28e47214f0b71847c966828df0837ff.html">treeFracSecEver</a></td>
    <td>Percentage Cover by Secondary Evergreen Trees</td>
    <td>%</td>
    <td>Percentage of entire grid cell  that is covered by secondary evergreen trees.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bdb1045bec7f58e9e6221cd39bb34c2f.html">shrubFrac</a></td>
    <td>Percentage Cover by Shrub</td>
    <td>%</td>
    <td>Percentage of entire grid cell  that is covered by shrub.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d3eb8c36759afa5ef2c8363e0c16db88.html">treeFrac</a></td>
    <td>Tree Cover Percentage</td>
    <td>%</td>
    <td>Percentage of entire grid cell  that is covered by trees.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e1ca31ce340d507b1dce7a537bbef951.html">residualFrac</a></td>
    <td>Percentage of Grid Cell That Is Land but neither Vegetation Covered nor Bare Soil</td>
    <td>%</td>
    <td>Percentage of entire grid cell  that is land and is covered by  neither vegetation nor bare-soil (e.g., urban, ice, lakes, etc.)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5916fc60-9e49-11e5-803c-0d0b866b59f3.html">cropFracC3</a></td>
    <td>Percentage Cover by C3 Crops</td>
    <td>%</td>
    <td>Percentage of entire grid cell covered by C3 crops</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590dc8ac-9e49-11e5-803c-0d0b866b59f3.html">grassFracC3</a></td>
    <td>C3 Natural Grass Area Percentage</td>
    <td>%</td>
    <td>Percentage of entire grid cell covered by C3 natural grass.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f091c0-acb7-11e6-b5ee-ac72891c3257.html">pastureFracC3</a></td>
    <td>C3 Pasture Area Percentage</td>
    <td>%</td>
    <td>Percentage of entire grid cell covered by C3 pasture</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59170444-9e49-11e5-803c-0d0b866b59f3.html">cropFracC4</a></td>
    <td>Percentage Cover by C4 Crops</td>
    <td>%</td>
    <td>Percentage of entire grid cell covered by C4 crops</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590dc37a-9e49-11e5-803c-0d0b866b59f3.html">grassFracC4</a></td>
    <td>C4 Natural Grass Area Percentage</td>
    <td>%</td>
    <td>Percentage of entire grid cell covered by C4 natural grass.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84eff3c8-acb7-11e6-b5ee-ac72891c3257.html">pastureFracC4</a></td>
    <td>C4 Pasture Area Percentage</td>
    <td>%</td>
    <td>Percentage of entire grid cell covered by C4 pasture</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f972af18f1817a7bb5f961b534641394.html">grassFrac</a></td>
    <td>Natural Grass Area Percentage</td>
    <td>%</td>
    <td>Percentage of entire grid cell that is covered by natural grass.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f3710647d155ec76d2c4cdfa866be579.html">landCoverFrac</a></td>
    <td>Percentage of Area by Vegetation or Land-Cover Category</td>
    <td>%</td>
    <td>Percentage of grid cell area occupied by different model vegetation/land cover categories. The categories may differ from model to model, depending on each model's subgrid land cover category definitions. Categories may include natural vegetation, anthropogenic vegetation, bare soil, lakes, urban areas, glaciers, etc. Sum of all should equal the percentage of the grid cell that is land.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59136b72-9e49-11e5-803c-0d0b866b59f3.html">burntFractionAll</a></td>
    <td>Percentage of Entire Grid cell  that is Covered by Burnt Vegetation (All Classes)</td>
    <td>%</td>
    <td>Percentage of grid cell burned due to all fires including natural and anthropogenic fires and those associated with anthropogenic Land-use change</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d98b4-9e49-11e5-803c-0d0b866b59f3.html">siitdconc</a></td>
    <td>Sea-Ice Area Percentages in Thickness Categories</td>
    <td>%</td>
    <td>Percentage of grid cell covered by each ice-thickness category (vector with one entry for each thickness category starting from the thinnest category, netcdf file should use thickness bounds of the categories as third coordinate axis)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590dbe0c-9e49-11e5-803c-0d0b866b59f3.html">sftflf</a></td>
    <td>Floating Ice Shelf Area Percentage</td>
    <td>%</td>
    <td>Percentage of grid cell covered by floating ice shelf, the component of the ice sheet that is flowing over sea water</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e5de4-9e49-11e5-803c-0d0b866b59f3.html">sftgrf</a></td>
    <td>Grounded Ice Sheet Area Percentage</td>
    <td>%</td>
    <td>Percentage of grid cell covered by grounded ice sheet</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a1d2e309c6f25017442ad6c79c4f9eca.html">sftgif</a></td>
    <td>Land Ice Area Percentage</td>
    <td>%</td>
    <td>Percentage of grid cell covered by land ice (ice sheet, ice shelf, ice cap, glacier)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/150ada98-357c-11e7-8257-5404a60d96b5.html">siconc</a></td>
    <td>Sea-Ice Area Percentage (Ocean Grid)</td>
    <td>%</td>
    <td>Percentage of grid cell covered by sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914ab90-9e49-11e5-803c-0d0b866b59f3.html">siconca</a></td>
    <td>Sea-Ice Area Percentage (Atmospheric Grid)</td>
    <td>%</td>
    <td>Percentage of grid cell covered by sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f0442-9e49-11e5-803c-0d0b866b59f3.html">siitdsnconc</a></td>
    <td>Snow Area Percentages in Ice Thickness Categories</td>
    <td>%</td>
    <td>Percentage of grid cell covered by snow in each ice-thickness category (vector with one entry for each thickness category starting from the thinnest category, netcdf file should use thickness bounds of the categories as third coordinate axis)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59147ddc-9e49-11e5-803c-0d0b866b59f3.html">wetlandFrac</a></td>
    <td>Wetland Percentage Cover</td>
    <td>%</td>
    <td>Percentage of grid cell covered by wetland. Report only one year if  fixed percentage is used, or time series if values are determined dynamically.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e75c2-9e49-11e5-803c-0d0b866b59f3.html">vegFrac</a></td>
    <td>Total Vegetated Percentage Cover</td>
    <td>%</td>
    <td>Percentage of grid cell that is covered by vegetation.This SHOULD be the sum of tree, grass (natural and pasture), crop and shrub fractions.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b0444e42-b096-11e6-aab6-ac72891c3257.html">sftlf</a></td>
    <td>Percentage of the grid  cell occupied by land (including lakes)</td>
    <td>%</td>
    <td>Percentage of horizontal area occupied by land.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/20e7d22ad09b324af00f41f6060701a7.html">sftof</a></td>
    <td>Sea Area Percentage</td>
    <td>%</td>
    <td>Percentage of horizontal area occupied by ocean.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59170110-9e49-11e5-803c-0d0b866b59f3.html">nwdFracLut</a></td>
    <td>Non-Woody Vegetation Percentage Cover</td>
    <td>%</td>
    <td>Percentage of land use tile tile that is non-woody vegetation ( e.g. herbaceous crops)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590eb1ea-9e49-11e5-803c-0d0b866b59f3.html">simpconc</a></td>
    <td>Percentage Cover of Sea Ice by Meltpond</td>
    <td>%</td>
    <td>Percentage of sea ice, by area, which is covered by melt ponds, giving equal weight to every square metre of sea ice .</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d38b0-9e49-11e5-803c-0d0b866b59f3.html">sisnconc</a></td>
    <td>Snow Area Percentage</td>
    <td>%</td>
    <td>Percentage of sea ice, by area, which is covered by snow, giving equal weight to every square metre of sea ice . Exclude snow that lies on land or land ice.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/374e24b1cf7c24eb75126ea6e39ac478.html">treeFracPrimDec</a></td>
    <td>Percentage Cover by Primary Deciduous Tree</td>
    <td>%</td>
    <td>Percentage of the entire grid cell  that is covered by total primary deciduous trees.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7124926c-c7b6-11e6-bb2a-ac72891c3257.html">wilt</a></td>
    <td>Wilting Point</td>
    <td>%</td>
    <td>Percentage water content of soil by volume at the wilting point. The wilting point of soil is the water content below which plants cannot extract sufficient water to balance their loss through transpiration. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/dd6aa1c1ecadd98014d1c1a7bbcb0429.html">jno2</a></td>
    <td>Photolysis Rate of NO2</td>
    <td>s-1</td>
    <td>Photolysis rate of nitrogen dioxide (NO2)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/86b89f8138a6ec9830def56892753017.html">limfemisc</a></td>
    <td>Iron Limitation of Other Phytoplankton</td>
    <td>1</td>
    <td>Phytoplankton are algae that grow where there is sufficient light to support photosynthesis. &quot;Miscellaneous phytoplankton&quot; are all those phytoplankton that are not diatoms, diazotrophs, calcareous phytoplankton, picophytoplankton or other separately named components of the phytoplankton population. &quot;Iron growth limitation&quot; means the ratio of the growth rate of a species population in the environment (where there is a finite availability of iron) to the theoretical growth rate if there were no such limit on iron availability.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ba8065ebbce734a631b427699ddbaf7e.html">limnmisc</a></td>
    <td>Nitrogen Limitation of Other Phytoplankton</td>
    <td>1</td>
    <td>Phytoplankton are algae that grow where there is sufficient light to support photosynthesis. &quot;Miscellaneous phytoplankton&quot; are all those phytoplankton that are not diatoms, diazotrophs, calcareous phytoplankton, picophytoplankton or other separately named components of the phytoplankton population. &quot;Nitrogen growth limitation&quot; means the ratio of the growth rate of a species population in the environment (where there is a finite availability of nitrogen) to the theoretical growth rate if there were no such limit on nitrogen availability.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b73b4f189e333c9c2426d55fbdfad32f.html">limfepico</a></td>
    <td>Iron Limitation of Picophytoplankton</td>
    <td>1</td>
    <td>Picophytoplankton are phytoplankton of less than 2 micrometers in size. Phytoplankton are algae that grow where there is sufficient light to support photosynthesis. &quot;Iron growth limitation&quot; means the ratio of the growth rate of a species population in the environment (where there is a finite availability of iron) to the theoretical growth rate if there were no such limit on iron availability.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fd9db3b1f9e7f5e778bebf3c16a344f6.html">limnpico</a></td>
    <td>Nitrogen Limitation of Picophytoplankton</td>
    <td>1</td>
    <td>Picophytoplankton are phytoplankton of less than 2 micrometers in size. Phytoplankton are algae that grow where there is sufficient light to support photosynthesis. &quot;Nitrogen growth limitation&quot; means the ratio of the growth rate of a species population in the environment (where there is a finite availability of nitrogen) to the theoretical growth rate if there were no such limit on nitrogen availability.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3a9ebed36fac6d76f1c7d70b6cf06991.html">tob</a></td>
    <td>Sea Water Potential Temperature at Sea Floor</td>
    <td>degC</td>
    <td>Potential temperature at the ocean bottom-most grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e105a-9e49-11e5-803c-0d0b866b59f3.html">pr2h</a></td>
    <td>Precipitation Flux of Water Containing Deuterium (1H 2H O)</td>
    <td>kg m-2 s-1</td>
    <td>Precipitation mass flux of water molecules that contain one atom of the hydrogen-2 isotope (1H 2H O), including solid and liquid phases.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912fb88-9e49-11e5-803c-0d0b866b59f3.html">prsn2h</a></td>
    <td>Precipitation Flux of Snow and Ice Containing Deuterium (1H 2H O)</td>
    <td>kg m-2 s-1</td>
    <td>Precipitation mass flux of water molecules that contain one atom of the hydrogen-2 isotope (1H 2H O), including solid phase only.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f10b8-9e49-11e5-803c-0d0b866b59f3.html">pr17O</a></td>
    <td>Precipitation Flux of Water Containing Oxygen-17 (H2 17O)</td>
    <td>kg m-2 s-1</td>
    <td>Precipitation mass flux of water molecules that contain the oxygen-17 isotope (H2 17O), including solid and liquid phases.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591401a4-9e49-11e5-803c-0d0b866b59f3.html">prsn17O</a></td>
    <td>Precipitation Flux of Snow and Ice Containing Oxygen-17 (H2 17O)</td>
    <td>kg m-2 s-1</td>
    <td>Precipitation mass flux of water molecules that contain the oxygen-17 isotope (H2 17O), including solid phase only.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e4408-9e49-11e5-803c-0d0b866b59f3.html">pr18O</a></td>
    <td>Precipitation Flux of Water Containing Oxygen-18 (H2 18O)</td>
    <td>kg m-2 s-1</td>
    <td>Precipitation mass flux of water molecules that contain the oxygen-18 isotope (H2 18O), including solid and liquid phases.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591763b2-9e49-11e5-803c-0d0b866b59f3.html">prsn18O</a></td>
    <td>Precipitation Flux of Snow and Ice Containing Oxygen-18 (H2 18O)</td>
    <td>kg m-2 s-1</td>
    <td>Precipitation mass flux of water molecules that contain the oxygen-18 isotope (H2 18O), including solid phase only.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e5278b06-dd83-11e5-9194-ac72891c3257.html">ppmisc</a></td>
    <td>Net Primary Organic Carbon Production by Other Phytoplankton</td>
    <td>mol m-3 s-1</td>
    <td>Primary (organic carbon) production by other phytoplankton components alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a3dd8da8b39dde98682ad859d8f5f5c2.html">pnitrate</a></td>
    <td>Primary Carbon Production by Phytoplankton Due to Nitrate Uptake Alone</td>
    <td>mol m-3 s-1</td>
    <td>Primary (organic carbon) production by phytoplankton due to nitrate uptake alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e526caea-dd83-11e5-9194-ac72891c3257.html">ppcalc</a></td>
    <td>Net Primary Mole Productivity of Carbon by Calcareous Phytoplankton</td>
    <td>mol m-3 s-1</td>
    <td>Primary (organic carbon) production by the calcite-producing phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e525bed4-dd83-11e5-9194-ac72891c3257.html">ppdiat</a></td>
    <td>Net Primary Organic Carbon Production by Diatoms</td>
    <td>mol m-3 s-1</td>
    <td>Primary (organic carbon) production by the diatom component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e52644bc-dd83-11e5-9194-ac72891c3257.html">ppdiaz</a></td>
    <td>Net Primary Mole Productivity of Carbon by Diazotrophs</td>
    <td>mol m-3 s-1</td>
    <td>Primary (organic carbon) production by the diazotrophic phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e527532a-dd83-11e5-9194-ac72891c3257.html">pppico</a></td>
    <td>Net Primary Mole Productivity of Carbon by Picophytoplankton</td>
    <td>mol m-3 s-1</td>
    <td>Primary (organic carbon) production by the picophytoplankton (&lt;2 um) component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917841e-9e49-11e5-803c-0d0b866b59f3.html">ut</a></td>
    <td>Product of Air Temperature and Eastward Wind</td>
    <td>K m s-1</td>
    <td>Product of air temperature and eastward wind</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914668a-9e49-11e5-803c-0d0b866b59f3.html">vt</a></td>
    <td>Product of Air Temperature and Northward Wind</td>
    <td>K m s-1</td>
    <td>Product of air temperature and northward wind</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f753a-9e49-11e5-803c-0d0b866b59f3.html">twap</a></td>
    <td>Product of Air Temperature and Omega</td>
    <td>K Pa s-1</td>
    <td>Product of air temperature and pressure tendency</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6aec29521de81a361630aac9ffc69f8f.html">parag</a></td>
    <td>Aragonite Production</td>
    <td>mol m-3 s-1</td>
    <td>Production rate of Aragonite, a mineral that is a polymorph of calcium carbonate. The chemical formula of aragonite is CaCO3.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/57235dfe47c3e04ac63a3c850ef16458.html">pcalc</a></td>
    <td>Calcite Production</td>
    <td>mol m-3 s-1</td>
    <td>Production rate of Calcite, a mineral that is a polymorph of calcium carbonate. The chemical formula of calcite is CaCO3. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1ed3e3be3675e589a5327ce82016ab72.html">uo</a></td>
    <td>Sea Water X Velocity</td>
    <td>m s-1</td>
    <td>Prognostic x-ward velocity component resolved by the model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3e3ddc77800e7d421834b9cb808602d7.html">vo</a></td>
    <td>Sea Water Y Velocity</td>
    <td>m s-1</td>
    <td>Prognostic y-ward velocity component resolved by the model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914b9be-9e49-11e5-803c-0d0b866b59f3.html">rainmxrat</a></td>
    <td>Mass Fraction of Rain in Air</td>
    <td>1</td>
    <td>Rain mixing ratio</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5382550e-bf01-11e6-a554-ac72891c3257.html">prraIs</a></td>
    <td>Ice Sheet Rainfall Rate</td>
    <td>kg m-2 s-1</td>
    <td>Rainfall rate over the ice sheet</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/402d88cf81105fe603118df92bb9eecb.html">darag</a></td>
    <td>Aragonite Dissolution</td>
    <td>mol m-3 s-1</td>
    <td>Rate of change of Aragonite carbon mole concentration  due to dissolution</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d14c09e91e6240dd9097dfad0a1853c8.html">dcalc</a></td>
    <td>Calcite Dissolution</td>
    <td>mol m-3 s-1</td>
    <td>Rate of change of Calcite carbon mole concentration  due to dissolution</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59137d56-9e49-11e5-803c-0d0b866b59f3.html">jo2</a></td>
    <td>Photolysis Rate of Diatomic Molecular Oxygen</td>
    <td>s-1</td>
    <td>Rate of photolysis of molecular oxygen to atomic oxygen (o2 -&gt; o1d+o)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f541a-9e49-11e5-803c-0d0b866b59f3.html">sblnosn</a></td>
    <td>Sublimation of the Snow Free Area</td>
    <td>kg m-2 s-1</td>
    <td>Rate of sublimation of ice into the atmosphere from areas with no snow.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/dfd869cd3463de6a57b2a9e10605efe7.html">tnpeo</a></td>
    <td>Tendency of Ocean Potential Energy Content</td>
    <td>W m-2</td>
    <td>Rate that work is done against vertical stratification, as measured by the vertical heat and salt diffusivity. Report here as depth integrated two-dimensional field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fdca5cc0-4d35-11e8-be0a-1c4d70487308.html">sw2H</a></td>
    <td>Isotopic Ratio of Deuterium in Sea Water</td>
    <td>1</td>
    <td>Ratio of abundance of hydrogen-2 (2H) atoms to hydrogen-1 (1H) atoms in sea water</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fdca5cbf-4d35-11e8-be0a-1c4d70487308.html">sw17O</a></td>
    <td>Isotopic Ratio of Oxygen-17 in Sea Water</td>
    <td>1</td>
    <td>Ratio of abundance of oxygen-17 (17O) atoms to oxygen-16 (16O) atoms in sea water</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d4440-9e49-11e5-803c-0d0b866b59f3.html">sw18O</a></td>
    <td>Isotopic Ratio of Oxygen-18 in Sea Water</td>
    <td>1</td>
    <td>Ratio of abundance of oxygen-18 (18O) atoms to oxygen-16 (16O) atoms in sea water</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ece46-9e49-11e5-803c-0d0b866b59f3.html">rv850</a></td>
    <td>Relative Vorticity at 850hPa</td>
    <td>s-1</td>
    <td>Relative vorticity is the upward component of the vorticity vector i.e. the component which arises from horizontal velocity.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6b8715466e3423119e9642776eacb693.html">remoc</a></td>
    <td>Remineralization of Organic Carbon</td>
    <td>mol m-3 s-1</td>
    <td>Remineralization is the degradation of organic matter into inorganic forms of carbon, nitrogen, phosphorus and other micronutrients, which consumes oxygen and releases energy.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e5100-9e49-11e5-803c-0d0b866b59f3.html">nSoil</a></td>
    <td>Nitrogen Mass in Soil Pool</td>
    <td>kg m-2</td>
    <td>Report missing data over ocean grid cells. For fractional land report value averaged over the land fraction.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e70f4-9e49-11e5-803c-0d0b866b59f3.html">nLitter</a></td>
    <td>Nitrogen Mass in Litter Pool</td>
    <td>kg m-2</td>
    <td>Report missing data over ocean grid cells. For fractional land report value averaged over the land fraction.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59142e0e-9e49-11e5-803c-0d0b866b59f3.html">nLand</a></td>
    <td>Total Nitrogen in All Terrestrial Nitrogen Pools</td>
    <td>kg m-2</td>
    <td>Report missing data over ocean grid cells. For fractional land report value averaged over the land fraction.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59176128-9e49-11e5-803c-0d0b866b59f3.html">nVeg</a></td>
    <td>Nitrogen Mass in Vegetation</td>
    <td>kg m-2</td>
    <td>Report missing data over ocean grid cells. For fractional land report value averaged over the land fraction.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917aa7a-9e49-11e5-803c-0d0b866b59f3.html">cLand</a></td>
    <td>Total Carbon in All Terrestrial Carbon Pools</td>
    <td>kg m-2</td>
    <td>Report missing data over ocean grid cells. For fractional land report value averaged over the land fraction.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917f21e-9e49-11e5-803c-0d0b866b59f3.html">nProduct</a></td>
    <td>Nitrogen Mass in Products of Land-Use Change</td>
    <td>kg m-2</td>
    <td>Report missing data over ocean grid cells. For fractional land report value averaged over the land fraction.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0f91c-acb7-11e6-b5ee-ac72891c3257.html">cSoilAbove1m</a></td>
    <td>Carbon Mass in Soil Pool Above 1m Depth</td>
    <td>kg m-2</td>
    <td>Report missing data over ocean grid cells. For fractional land report value averaged over the land fraction.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/136d81b44d45d8f7c549469ff69a74a7.html">msftmzsmpa</a></td>
    <td>Ocean Meridional Overturning Mass Streamfunction Due to Parameterized Submesoscale Advection</td>
    <td>kg s-1</td>
    <td>Report only if there is a submesoscale eddy parameterization.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2ac2d8645abddc0eb9fe53a7ea680465.html">msftyzsmpa</a></td>
    <td>Ocean Y Overturning Mass Streamfunction Due to Parameterized Submesoscale Advection</td>
    <td>kg s-1</td>
    <td>Report only if there is a submesoscale eddy parameterization.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e34fe-9e49-11e5-803c-0d0b866b59f3.html">sitempsnic</a></td>
    <td>Temperature at Snow-Ice Interface</td>
    <td>K</td>
    <td>Report surface temperature of ice where snow thickness is zero</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914a456-9e49-11e5-803c-0d0b866b59f3.html">sitemptop</a></td>
    <td>Surface Temperature of Sea Ice</td>
    <td>K</td>
    <td>Report surface temperature of snow where snow covers the sea ice.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914d6d8-9e49-11e5-803c-0d0b866b59f3.html">sitempbot</a></td>
    <td>Temperature at Ice-Ocean Interface</td>
    <td>K</td>
    <td>Report temperature at interface, NOT temperature within lowermost model layer</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e2f36-9e49-11e5-803c-0d0b866b59f3.html">fVegFire</a></td>
    <td>Carbon Mass Flux from Vegetation into Atmosphere Due to CO2 Emission from All Fire</td>
    <td>kg m-2 s-1</td>
    <td>Required for unambiguous separation of vegetation and soil + litter turnover times, since total fire flux draws from both sources</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914f2a8-9e49-11e5-803c-0d0b866b59f3.html">fLitterFire</a></td>
    <td>Carbon Mass Flux from Litter, CWD or any non-Living Pool into Atmosphere Due to CO2 Emission from All Fire</td>
    <td>kg m-2 s-1</td>
    <td>Required for unambiguous separation of vegetation and soil + litter turnover times, since total fire flux draws from both sources</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59137716-9e49-11e5-803c-0d0b866b59f3.html">psitem</a></td>
    <td>Transformed Eulerian Mean Mass Streamfunction</td>
    <td>kg s-1</td>
    <td>Residual mass streamfunction, computed from vstar and integrated from the top of the atmosphere (on the native model grid). Reference: Andrews et al (1987): Middle Atmospheric Dynamics. Academic Press.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/41455e80-4f40-11e6-a814-ac72891c3257.html">mrroLi</a></td>
    <td>Land Ice Runoff Flux</td>
    <td>kg m-2 s-1</td>
    <td>Runoff flux over land ice is the difference between any available liquid water in the snowpack less any refreezing. Computed as the sum of rainfall and melt of snow or ice less any refreezing or water retained in the snowpack</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914f050-9e49-11e5-803c-0d0b866b59f3.html">mrrob</a></td>
    <td>Subsurface Runoff</td>
    <td>kg m-2 s-1</td>
    <td>Runoff is the liquid water which drains from land. If not specified, &quot;runoff&quot; refers to the sum of surface runoff and subsurface drainage. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59151012-9e49-11e5-803c-0d0b866b59f3.html">nMineralNH4</a></td>
    <td>Mineral Ammonium in the Soil</td>
    <td>kg m-2</td>
    <td>SUM of ammonium over all soil layers</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913fa10-9e49-11e5-803c-0d0b866b59f3.html">nMineral</a></td>
    <td>Mineral Nitrogen in the Soil</td>
    <td>kg m-2</td>
    <td>SUM of ammonium, nitrite, nitrate, etc over all soil layers</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59129468-9e49-11e5-803c-0d0b866b59f3.html">nMineralNO3</a></td>
    <td>Mineral Nitrate in the Soil</td>
    <td>kg m-2</td>
    <td>SUM of nitrate over all soil layers</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914eb78-9e49-11e5-803c-0d0b866b59f3.html">sirdgthick</a></td>
    <td>Ridged Ice Thickness</td>
    <td>m</td>
    <td>Sea Ice Ridge Height (representing mean height over the ridged area)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3d23c359f44d6a153c4dcab9e07d7cb6.html">psl</a></td>
    <td>Sea Level Pressure</td>
    <td>Pa</td>
    <td>Sea Level Pressure</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4bccb8dcdb0ffe97dc89475c91ed66cc.html">bigthetao</a></td>
    <td>Sea Water Conservative Temperature</td>
    <td>degC</td>
    <td>Sea water conservative temperature (this should be contributed only for models using conservative temperature as prognostic field)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/31eb8d2a1ed4d82ef8bebe4227ec90b9.html">so</a></td>
    <td>Sea Water Salinity</td>
    <td>0.001</td>
    <td>Sea water salinity is the salt content of sea water, often on the Practical Salinity Scale of 1978. However, the unqualified term 'salinity' is generic and does not necessarily imply any particular method of calculation. The units of salinity are dimensionless and the units attribute should normally be given as 1e-3 or 0.001 i.e. parts per thousand. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/74a9891bcab2667dbcb66574c6370c86.html">sos</a></td>
    <td>Sea Surface Salinity</td>
    <td>0.001</td>
    <td>Sea water salinity is the salt content of sea water, often on the Practical Salinity Scale of 1978. However, the unqualified term 'salinity' is generic and does not necessarily imply any particular method of calculation. The units of salinity are dimensionless and the units attribute should normally be given as 1e-3 or 0.001 i.e. parts per thousand. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d4eb6956-b00f-11e6-a1f0-ac72891c3257.html">sossq</a></td>
    <td>Square of Sea Surface Salinity</td>
    <td>1e-06</td>
    <td>Sea water salinity is the salt content of sea water, often on the Practical Salinity Scale of 1978. However, the unqualified term 'salinity' is generic and does not necessarily imply any particular method of calculation. The units of salinity are dimensionless and the units attribute should normally be given as 1e-3 or 0.001 i.e. parts per thousand. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d4ee4806-b00f-11e6-a1f0-ac72891c3257.html">sosga</a></td>
    <td>Global Average Sea Surface Salinity</td>
    <td>0.001</td>
    <td>Sea water salinity is the salt content of sea water, often on the Practical Salinity Scale of 1978. However, the unqualified term 'salinity' is generic and does not necessarily imply any particular method of calculation. The units of salinity are dimensionless and the units attribute should normally be given as 1e-3 or 0.001 i.e. parts per thousand. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e6c345fa8ddd98d9834116333c2ee901.html">soga</a></td>
    <td>Global Mean Sea Water Salinity</td>
    <td>0.001</td>
    <td>Sea water salinity is the salt content of sea water, often on the Practical Salinity Scale of 1978. However, the unqualified term 'salinity' is generic and does not necessarily imply any particular method of calculation. The units of salinity are dimensionless and the units attribute should normally be given as 1e-3 or 0.001 i.e. parts per thousand. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914f852-9e49-11e5-803c-0d0b866b59f3.html">swsffluxaero</a></td>
    <td>Shortwave Heating Rate Due to Volcanic Aerosols</td>
    <td>W m-2</td>
    <td>Shortwave heating rate due to volcanic aerosols to be diagnosed through double radiation call</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a21e250a10f96b1c1ad6d742206a157e.html">rsdt</a></td>
    <td>TOA Incident Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Shortwave radiation incident at the top of the atmosphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b1ac17c786f782027deb9a5985ad106e.html">mlotst</a></td>
    <td>Ocean Mixed Layer Thickness Defined by Sigma T</td>
    <td>m</td>
    <td>Sigma T is potential density referenced to ocean surface.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d4ee907c-b00f-11e6-a1f0-ac72891c3257.html">mlotstmax</a></td>
    <td>Maximum Ocean Mixed Layer Thickness Defined by Sigma T</td>
    <td>m</td>
    <td>Sigma T is potential density referenced to ocean surface.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d4ee9e5a-b00f-11e6-a1f0-ac72891c3257.html">mlotstmin</a></td>
    <td>Minimum Ocean Mixed Layer Thickness Defined by Sigma T</td>
    <td>m</td>
    <td>Sigma T is potential density referenced to ocean surface.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a06b8e83250b870d9f39dc1f6534efcb.html">parasolRefl</a></td>
    <td>PARASOL Reflectance</td>
    <td>1</td>
    <td>Simulated reflectance from PARASOL as seen at the top of the atmosphere for 5 solar zenith angles. Valid only over ocean and for one viewing direction (viewing zenith angle of 30 degrees and relative azimuth angle 320 degrees).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917d1d0-9e49-11e5-803c-0d0b866b59f3.html">snowmxrat</a></td>
    <td>Mass Fraction of Snow in Air</td>
    <td>1</td>
    <td>Snow mixing ratio</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/af7306dc-a0da-11e6-bc63-ac72891c3257.html">solbnd</a></td>
    <td>TOA Solar Irradiance for Each Band</td>
    <td>W m-2</td>
    <td>Solar irradiance at a horizontal surface at top of atmosphere.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53f4724d228998d54191c73352532ce3.html">hus</a></td>
    <td>Specific Humidity</td>
    <td>1</td>
    <td>Specific humidity is the mass fraction of water vapor in (moist) air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/af0e7f4ba96314bef40cc98e5dd078af.html">hus850</a></td>
    <td>Specific Humidity</td>
    <td>1</td>
    <td>Specific humidity is the mass fraction of water vapor in (moist) air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/41460524-4f40-11e6-a814-ac72891c3257.html">libmassbffl</a></td>
    <td>Basal Specific Mass Balance Flux of Floating Ice Shelf</td>
    <td>kg m-2 s-1</td>
    <td>Specific mass balance means the net rate at which ice is added per unit area at the land ice base.  A negative value means loss of ice. Computed as the total basal mass balance on the floating land ice (floating ice shelf) portion of the grid cell divided by floating land ice (floating ice shelf) area in the grid cell. Cell_methods: area: mean where floating_ice_shelf</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4145ad04-4f40-11e6-a814-ac72891c3257.html">libmassbfgr</a></td>
    <td>Basal Specific Mass Balance Flux of Grounded Ice Sheet</td>
    <td>kg m-2 s-1</td>
    <td>Specific mass balance means the net rate at which ice is added per unit area at the land ice base.  A negative value means loss of ice. Computed as the total basal mass balance on the grounded land ice portion of the grid cell divided by grounded land ice area in the grid cell. Cell_methods: area: mean where grounded_ice_sheet</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53824c12-bf01-11e6-a554-ac72891c3257.html">acabfIs</a></td>
    <td>Ice Sheet Surface Mass Balance Flux</td>
    <td>kg m-2 s-1</td>
    <td>Specific mass balance means the net rate at which ice is added per unit area at the land ice surface. Computed as the total surface mass balance on the land ice portion of the grid cell divided by land ice area in the grid cell. A negative value means loss of ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59147580-9e49-11e5-803c-0d0b866b59f3.html">acabf</a></td>
    <td>Surface Mass Balance Flux</td>
    <td>kg m-2 s-1</td>
    <td>Specific mass balance means the net rate at which ice is added per unit area at the land ice surface. Computed as the total surface mass balance on the land ice portion of the grid cell divided by land ice area in the grid cell. A negative value means loss of ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f4f2e-9e49-11e5-803c-0d0b866b59f3.html">sispeed</a></td>
    <td>Sea-Ice Speed</td>
    <td>m s-1</td>
    <td>Speed of ice (i.e. mean absolute velocity) to account for back-and-forth movement of the ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d1b497a4f7f4cb666757ec97d152079e.html">tossq</a></td>
    <td>Square of Sea Surface Temperature</td>
    <td>degC2</td>
    <td>Square of temperature of liquid ocean.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/691673a210102ac652eed2b784dd2ab4.html">emianox</a></td>
    <td>Total Emission Rate of Anthropogenic NOx</td>
    <td>kg m-2 s-1</td>
    <td>Store flux as Nitrogen. Anthropogenic fraction. NOx=NO+NO2, Includes agricultural waste burning but no other biomass burning. Integrate 3D emission field vertically to 2d field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914cf30-9e49-11e5-803c-0d0b866b59f3.html">od550so4so</a></td>
    <td>Stratospheric Optical Depth at 550nm (Sulphate Only) 2D-Field (Stratosphere Only)</td>
    <td>1</td>
    <td>Stratospheric aerosol AOD due to sulfate aerosol at a wavelength of 550 nanometres.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5edcb9a162e51d0a2c8d42a75bed04ef.html">msftbarot</a></td>
    <td>Ocean Barotropic Mass Streamfunction</td>
    <td>kg s-1</td>
    <td>Streamfunction or its approximation for free surface models. See OMDP document for details.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/27ad2512525b0c42b7edd88f1dad5955.html">bacc</a></td>
    <td>Bacterial Carbon Concentration</td>
    <td>mol m-3</td>
    <td>Sum of bacterial carbon component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96caa26-c5f0-11e6-ac20-5404a60d96b5.html">baccos</a></td>
    <td>Surface Bacterial Carbon Concentration</td>
    <td>mol m-3</td>
    <td>Sum of bacterial carbon component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1c757370cf83e5619efc0de4d1241f47.html">chlos</a></td>
    <td>Surface Mass Concentration of Total Phytoplankton Expressed as Chlorophyll in Sea Water</td>
    <td>kg m-3</td>
    <td>Sum of chlorophyll from all phytoplankton group concentrations at the sea surface.  In most models this is equal to chldiat+chlmisc, that is the sum of 'Diatom Chlorophyll Mass Concentration' plus 'Other Phytoplankton Chlorophyll Mass Concentration'</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ab60603d901dfa1c47f4d2fd7784f8ea.html">chl</a></td>
    <td>Mass Concentration of Total Phytoplankton Expressed as Chlorophyll in Sea Water</td>
    <td>kg m-3</td>
    <td>Sum of chlorophyll from all phytoplankton group concentrations.  In most models this is equal to chldiat+chlmisc, that is the sum of Diatom Chlorophyll Mass Concentration and Other Phytoplankton Chlorophyll Mass Concentration</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b0a9616ddee15d1f3740ce445bd82fb1.html">detoc</a></td>
    <td>Detrital Organic Carbon Concentration</td>
    <td>mol m-3</td>
    <td>Sum of detrital organic carbon component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b4ae9d56d038ff977f0db7f578841c5a.html">dissoc</a></td>
    <td>Dissolved Organic Carbon Concentration</td>
    <td>mol m-3</td>
    <td>Sum of dissolved carbon component concentrations explicitly represented (i.e. not ~40 uM refractory unless explicit)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96c8078-c5f0-11e6-ac20-5404a60d96b5.html">dissocos</a></td>
    <td>Surface Dissolved Organic Carbon Concentration</td>
    <td>mol m-3</td>
    <td>Sum of dissolved carbon component concentrations explicitly represented (i.e. not ~40 uM refractory unless explicit)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a72a0bcf271db9db3a7fb9b7f3e7b93a.html">arag</a></td>
    <td>Aragonite Concentration</td>
    <td>mol m-3</td>
    <td>Sum of particulate aragonite components (e.g. Phytoplankton, Detrital, etc.)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c85ac4ad4664c34898cdb9af2418c45a.html">calc</a></td>
    <td>Calcite Concentration</td>
    <td>mol m-3</td>
    <td>Sum of particulate calcite component concentrations (e.g. Phytoplankton, Detrital, etc.)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f108633dc7e1585498ceccc06bdfd263.html">bfe</a></td>
    <td>Mole Concentration of Particulate Organic Matter Expressed as Iron in Sea Water</td>
    <td>mol m-3</td>
    <td>Sum of particulate organic iron component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/dcd2298237af35be0ed71c92ee9e7e79.html">bsi</a></td>
    <td>Mole Concentration of Particulate Organic Matter Expressed as Silicon in Sea Water</td>
    <td>mol m-3</td>
    <td>Sum of particulate silica component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59137fd6-9e49-11e5-803c-0d0b866b59f3.html">jo3</a></td>
    <td>Photolysis Rate of Ozone (O3)</td>
    <td>s-1</td>
    <td>Sum of photolysis rates o3 -&gt; o1d+o2 and o3 -&gt; o+o2</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/90df05fe3dcd9fe0c9b48aaa74b5e9e2.html">rsuscs</a></td>
    <td>Surface Upwelling Clear-Sky Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Surface Upwelling Clear-sky Shortwave Radiation</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/90df05fe3dcd9fe0c9b48aaa74b5e9e.html">rsuscsaf</a></td>
    <td>Surface Upwelling Clean Clear-Sky Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Surface Upwelling Clear-sky, Aerosol Free Shortwave Radiation</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913f290-9e49-11e5-803c-0d0b866b59f3.html">tgs</a></td>
    <td>Temperature of Bare Soil</td>
    <td>K</td>
    <td>Surface bare soil temperature</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/aa4309c2c15be0c9d7db2f9d38f348ca.html">wetnh3</a></td>
    <td>Wet Deposition Rate of NH3</td>
    <td>kg m-2 s-1</td>
    <td>Surface deposition rate of ammonia (NH3) due to wet processes</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/86b2899d1c267c92e3fbaccd21b55472.html">wetnh4</a></td>
    <td>Wet Deposition Rate of NH4</td>
    <td>kg m-2 s-1</td>
    <td>Surface deposition rate of ammonium (NH4) due to wet processes</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0b3fc46bf32dfbd9d36cdb72e827eb29.html">wetbc</a></td>
    <td>Wet Deposition Rate of Black Carbon Aerosol Mass</td>
    <td>kg m-2 s-1</td>
    <td>Surface deposition rate of black carbon (dry mass) due to wet processes</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0f914086f4c1cd76f867eef7cd71154d.html">wetdust</a></td>
    <td>Wet Deposition Rate of Dust</td>
    <td>kg m-2 s-1</td>
    <td>Surface deposition rate of dust (dry mass) due to wet processes</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913bfe6-9e49-11e5-803c-0d0b866b59f3.html">fNdep</a></td>
    <td>Dry and Wet Deposition of Reactive Nitrogen onto Land</td>
    <td>kg m-2 s-1</td>
    <td>Surface deposition rate of nitrogen.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7b2d1e1a3ece1169d8ac61af4b758ed2.html">rldscs</a></td>
    <td>Surface Downwelling Clear-Sky Longwave Radiation</td>
    <td>W m-2</td>
    <td>Surface downwelling clear-sky longwave radiation</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6ca9dd8a089b15fb96841e9fe56411cf.html">rsdscsdiff</a></td>
    <td>Surface Diffuse Downwelling Clear Sky Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Surface downwelling solar irradiance from diffuse radiation for UV calculations in clear sky conditions</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f27656eeae247192e82aa1032c911399.html">rsdsdiff</a></td>
    <td>Surface Diffuse Downwelling Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Surface downwelling solar irradiance from diffuse radiation for UV calculations.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c9793390-c5f0-11e6-ac20-5404a60d96b5.html">co3nat</a></td>
    <td>Natural Carbonate Ion Concentration</td>
    <td>mol m-3</td>
    <td>Surface mole concentration (number of moles per unit volume: molarity) of the natural-analogue carbonate anion (CO3). A natural analogue is used to simulate the effect on a modelled variable of imposing preindustrial atmospheric carbon dioxide concentrations, even when the model as a whole may be subjected to varying forcings. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f7658de98a4b03f947f0ffb19eeca1fd.html">zossq</a></td>
    <td>Square of Sea Surface Height Above Geoid</td>
    <td>m2</td>
    <td>Surface ocean geoid defines z=0.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f4c7c-9e49-11e5-803c-0d0b866b59f3.html">cLitterSurf</a></td>
    <td>Carbon Mass in Above-Ground Litter</td>
    <td>kg m-2</td>
    <td>Surface or near-surface litter pool fed by leaf and above-ground litterfall</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d0a35d5c99a0aa93ad4069cfe83bf748.html">rsdscs</a></td>
    <td>Surface Downwelling Clear-Sky Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Surface solar irradiance clear sky for UV calculations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53827f52-bf01-11e6-a554-ac72891c3257.html">rsdsIs</a></td>
    <td>Ice Sheet Surface Downwelling Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Surface solar irradiance for UV calculations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6e7b9f984d3bba15daccaaa18039a85d.html">rsds</a></td>
    <td>Surface Downwelling Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Surface solar irradiance for UV calculations.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e417e-9e49-11e5-803c-0d0b866b59f3.html">tslsiLut</a></td>
    <td>Surface Temperature on Landuse Tile</td>
    <td>K</td>
    <td>Surface temperature (i.e. temperature at which long-wave radiation emitted)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2a92e434b37059d90e72b193bdbcce0f.html">tslsi</a></td>
    <td>Surface Temperature Where Land or Sea Ice</td>
    <td>K</td>
    <td>Surface temperature of all surfaces except open ocean.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912cf78-9e49-11e5-803c-0d0b866b59f3.html">fN2O</a></td>
    <td>Total Land N2O Flux</td>
    <td>kg m-2 s-1</td>
    <td>Surface upward flux of nitrous oxide (N2O) from vegetation (any living plants e.g. trees, shrubs, grass), litter (dead plant material in or above the soil), soil.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/827d0f8093c7858a784e5fda140a6e12.html">rsutcs4co2</a></td>
    <td>TOA Outgoing Clear-Sky Shortwave Radiation 4XCO2 Atmosphere</td>
    <td>W m-2</td>
    <td>TOA Outgoing Clear-Sky Shortwave Radiation calculated using carbon dioxide concentrations increased fourfold</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/58bbe37eb1035d22ab051fcfa10c67d9.html">rsut4co2</a></td>
    <td>TOA Outgoing Shortwave Radiation in 4XCO2 Atmosphere</td>
    <td>W m-2</td>
    <td>TOA Outgoing Shortwave Radiation calculated using carbon dioxide concentrations increased fourfold</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914277e-9e49-11e5-803c-0d0b866b59f3.html">tsnl</a></td>
    <td>Temperature Profile in the Snow</td>
    <td>K]Unuse</td>
    <td>Temperature in the snow pack present in the grid cell. 3D variable for multi-layer snow schemes.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3fd3cb4e2d6dd15b7dd73def96fea129.html">tsl</a></td>
    <td>Temperature of Soil</td>
    <td>K</td>
    <td>Temperature of soil. Reported as missing for grid cells with no land.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5382419a-bf01-11e6-a554-ac72891c3257.html">tsIs</a></td>
    <td>Ice Sheet Surface Temperature</td>
    <td>K</td>
    <td>Temperature of the lower boundary of the atmosphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/90c49fce92dc1f21647dad07d1342843.html">ts</a></td>
    <td>Surface Temperature</td>
    <td>K</td>
    <td>Temperature of the lower boundary of the atmosphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a66656b8-a47d-11e8-948d-1c4d70487308.html">tsland</a></td>
    <td>Land Surface Temperature</td>
    <td>K</td>
    <td>Temperature of the lower boundary of the atmosphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914474a-9e49-11e5-803c-0d0b866b59f3.html">tsns</a></td>
    <td>Snow Surface Temperature</td>
    <td>K</td>
    <td>Temperature of the snow surface as it interacts with the atmosphere, averaged over a grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0e5d376315a376cd2b1e37f440fe43d3.html">tos</a></td>
    <td>Sea Surface Temperature</td>
    <td>degC</td>
    <td>Temperature of upper boundary of the liquid ocean, including temperatures below sea-ice and floating ice shelves.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/dbba7f5717d68960a82b228e03dea7b7.html">tosga</a></td>
    <td>Global Average Sea Surface Temperature</td>
    <td>degC</td>
    <td>Temperature of upper boundary of the liquid ocean, including temperatures below sea-ice and floating ice shelves.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f6928c80a369489688a5da8e78a7a3b7.html">ta500</a></td>
    <td>Air Temperature</td>
    <td>K</td>
    <td>Temperature on the 500 hPa surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913e8ea-9e49-11e5-803c-0d0b866b59f3.html">tntnogw</a></td>
    <td>Temperature Tendency Due to Non-Orographic Gravity Wave Dissipation</td>
    <td>K s-1</td>
    <td>Temperature tendency due to dissipation of parameterized nonorographic gravity waves.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912b4e8-9e49-11e5-803c-0d0b866b59f3.html">tntogw</a></td>
    <td>Temperature Tendency Due to Orographic Gravity Wave Dissipation</td>
    <td>K s-1</td>
    <td>Temperature tendency due to dissipation of parameterized orographic gravity waves.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/52f043533a691ca5721460e316c3a328.html">tntc</a></td>
    <td>Tendency of Air Temperature Due to Convection</td>
    <td>K s-1</td>
    <td>Tendencies from cumulus convection scheme.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a1d576b3fc447c37d782926441428ffd.html">tnhusc</a></td>
    <td>Tendency of Specific Humidity Due to Convection</td>
    <td>s-1</td>
    <td>Tendencies from cumulus convection scheme.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/475dc209e9f9cd51eedee4d26caf9f67.html">tntscpbl</a></td>
    <td>Tendency of Air Temperature Due to Stratiform Cloud and Precipitation and Boundary Layer Mixing</td>
    <td>K s-1</td>
    <td>Tendency of Air Temperature Due to Stratiform Cloud and Precipitation and Boundary Layer Mixing (to be specified only in  models which do not separate cloud, precipitation and boundary layer terms.  Includes all boundary layer terms including diffusive ones.)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ea55d8afe6bacbfa1029c0048717eaaa.html">tnta</a></td>
    <td>Tendency of Air Temperature Due to Advection</td>
    <td>K s-1</td>
    <td>Tendency of Air Temperature due to Advection</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59170a02-9e49-11e5-803c-0d0b866b59f3.html">tntrlcs</a></td>
    <td>Tendency of Air Temperature Due to Clear Sky Longwave Radiative Heating</td>
    <td>K s-1</td>
    <td>Tendency of Air Temperature due to Clear Sky Longwave Radiative Heating</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913d86e-9e49-11e5-803c-0d0b866b59f3.html">tntrscs</a></td>
    <td>Tendency of Air Temperature Due to Clear Sky Shortwave Radiative Heating</td>
    <td>K s-1</td>
    <td>Tendency of Air Temperature due to Clear Sky Shortwave Radiative Heating</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/93a0ba1f23bfc41b720ea68951d28144.html">tntr</a></td>
    <td>Tendency of Air Temperature Due to Radiative Heating</td>
    <td>K s-1</td>
    <td>Tendency of Air Temperature due to Radiative Heating</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c8b1814845661bcad37910e70a59b285.html">tnt</a></td>
    <td>Tendency of Air Temperature</td>
    <td>K s-1</td>
    <td>Tendency of Air Temperature</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9e9e7476986ece18ce380652eaabe342.html">tnhusscpbl</a></td>
    <td>Tendency of Specific Humidity Due to Stratiform Cloud and Precipitation and Boundary Layer Mixing</td>
    <td>s-1</td>
    <td>Tendency of Specific Humidity Due to Stratiform Cloud and Precipitation and Boundary Layer Mixing  (to be specified only in  models which do not separate budget terms for stratiform cloud, precipitation and boundary layer schemes.  Includes all boundary layer terms including and diffusive terms.)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/150d0829eec06aeaf75d22d08d328ffa.html">tnhusa</a></td>
    <td>Tendency of Specific Humidity Due to Advection</td>
    <td>s-1</td>
    <td>Tendency of Specific Humidity due to Advection</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2a6093caf9e5cd42fb2fba6bdb73d6db.html">tnhus</a></td>
    <td>Tendency of Specific Humidity</td>
    <td>s-1</td>
    <td>Tendency of Specific Humidity</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917483c-9e49-11e5-803c-0d0b866b59f3.html">tntrl</a></td>
    <td>Tendency of Air Temperature Due to Longwave Radiative Heating</td>
    <td>K s-1</td>
    <td>Tendency of air temperature due to longwave radiative heating</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/621681bc7c376de66228fdde13b97516.html">tntmp</a></td>
    <td>Tendency of Air Temperature Due to Model Physics</td>
    <td>K s-1</td>
    <td>Tendency of air temperature due to model physics. This includes sources and sinks from parametrized physics (e.g. radiation, convection, boundary layer, stratiform condensation/evaporation, etc.). It excludes sources and sinks from resolved dynamics and numerical diffusion not associated with parametrized physics.  For example, any vertical diffusion which is part of the boundary layer mixing scheme should be included, while numerical diffusion applied in addition to physics or resolved dynamics should be excluded.  This term is required to check the closure of the heat budget.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59173c0c-9e49-11e5-803c-0d0b866b59f3.html">tntrs</a></td>
    <td>Tendency of Air Temperature Due to Shortwave Radiative Heating</td>
    <td>K s-1</td>
    <td>Tendency of air temperature due to shortwave radiative heating</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6f095163598ce89d463f74ae2a096270.html">dryoa</a></td>
    <td>Dry Deposition Rate of Dry Aerosol Total Organic Matter</td>
    <td>kg m-2 s-1</td>
    <td>Tendency of atmosphere mass content of organic dry aerosol due to dry deposition: This is the sum of dry deposition of primary organic aerosol (POA) and dry deposition of secondary organic aerosol (SOA). Here, mass refers to the mass of organic matter, not mass of organic carbon alone.  We recommend a scale factor of POM=1.4*OC, unless your model has more detailed info available. Was called dry_pom in old ACCMIP Excel table. Dry deposition includes gravitational settling, impact scavenging, and turbulent deposition.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c4c0cce59536f11df06a045fa8d0c091.html">ocontemptend</a></td>
    <td>Tendency of Sea Water Conservative Temperature Expressed as Heat Content</td>
    <td>W m-2</td>
    <td>Tendency of heat content for a grid cell from all processes. Reported only for models that use conservative temperature as prognostic field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d447c41b5f4e8c44f1fe64503cb4caa1.html">opottemptend</a></td>
    <td>Tendency of Sea Water Potential Temperature Expressed as Heat Content</td>
    <td>W m-2</td>
    <td>Tendency of heat content for a grid cell from all processes. Reported only for models that use potential temperature as prognostic field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c4b3f6005f73f2fc2d0e348fdff3c2bc.html">ocontempdiff</a></td>
    <td>Tendency of Sea Water Conservative Temperature Expressed as Heat Content Due to Parameterized Dianeutral Mixing</td>
    <td>W m-2</td>
    <td>Tendency of heat content for a grid cell from parameterized dianeutral mixing. Reported only for models that use conservative temperature as prognostic field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2aa31f177542022b5d6ca809cf01eff5.html">opottempdiff</a></td>
    <td>Tendency of Sea Water Potential Temperature Expressed as Heat Content Due to Parameterized Dianeutral Mixing</td>
    <td>W m-2</td>
    <td>Tendency of heat content for a grid cell from parameterized dianeutral mixing. Reported only for models that use potential temperature as prognostic field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c172481027367670eaf1e53fb8d2e841.html">ocontemppadvect</a></td>
    <td>Tendency of Sea Water Conservative Temperature Expressed as Heat Content Due to Parameterized Eddy Advection</td>
    <td>W m-2</td>
    <td>Tendency of heat content for a grid cell from parameterized eddy advection (any form of eddy advection). Reported only for models that use conservative temperature as prognostic field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/8530ec1d1281da71f660df7c61571e38.html">opottemppadvect</a></td>
    <td>Tendency of Sea Water Potential Temperature Expressed as Heat Content Due to Parameterized Eddy Advection</td>
    <td>W m-2</td>
    <td>Tendency of heat content for a grid cell from parameterized eddy advection (any form of eddy advection). Reported only for models that use potential temperature as prognostic field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7c5c71f969a6318b3fa5ff2875272caf.html">ocontemppmdiff</a></td>
    <td>Tendency of Sea Water Conservative Temperature Expressed as Heat Content Due to Parameterized Mesoscale Diffusion</td>
    <td>W m-2</td>
    <td>Tendency of heat content for a grid cell from parameterized mesoscale eddy diffusion. Reported only for models that use conservative temperature as prognostic field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bf9968cc511b92e99f89e9856bd38fb6.html">opottemppmdiff</a></td>
    <td>Tendency of Sea Water Potential Temperature Expressed as Heat Content Due to Parameterized Mesoscale Diffusion</td>
    <td>W m-2</td>
    <td>Tendency of heat content for a grid cell from parameterized mesoscale eddy diffusion. Reported only for models that use potential temperature as prognostic field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1742f769c80d35356bf80ab91789eec6.html">ocontemppsmadvect</a></td>
    <td>Tendency of Sea Water Conservative Temperature Expressed as Heat Content Due to Parameterized Submesoscale Advection</td>
    <td>W m-2</td>
    <td>Tendency of heat content for a grid cell from parameterized submesoscale eddy advection. Reported only for models that use conservative temperature as prognostic field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/64c745ab7c8597bb0afed2bafd12c20c.html">opottemppsmadvect</a></td>
    <td>Tendency of Sea Water Potential Temperature Expressed as Heat Content Due to Parameterized Submesoscale Advection</td>
    <td>W m-2</td>
    <td>Tendency of heat content for a grid cell from parameterized submesoscale eddy advection. Reported only for models that use potential temperature as prognostic field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/14d70240caeb3a95922af16eca2d497b.html">osalttend</a></td>
    <td>Tendency of Sea Water Salinity Expressed as Salt Content</td>
    <td>kg m-2 s-1</td>
    <td>Tendency of salt content for a grid cell from all processes.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a41ce7d71eb9622c88b8f18438cbe36c.html">osaltdiff</a></td>
    <td>Tendency of Sea Water Salinity Expressed as Salt Content Due to Parameterized Dianeutral Mixing</td>
    <td>kg m-2 s-1</td>
    <td>Tendency of salt content for a grid cell from parameterized dianeutral mixing.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f507e49404f47a6255539751483d8bdc.html">osaltpadvect</a></td>
    <td>Tendency of Sea Water Salinity Expressed as Salt Content Due to Parameterized Eddy Advection</td>
    <td>kg m-2 s-1</td>
    <td>Tendency of salt content for a grid cell from parameterized eddy advection (any form of eddy advection).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/02e08dbdee260db0debd5685cb62934f.html">osaltpmdiff</a></td>
    <td>Tendency of Sea Water Salinity Expressed as Salt Content Due to Parameterized Mesoscale Diffusion</td>
    <td>kg m-2 s-1</td>
    <td>Tendency of salt content for a grid cell from parameterized mesoscale eddy diffusion.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9259f1caedb47c287bc1c9dfc3c6f756.html">osaltpsmadvect</a></td>
    <td>Tendency of Sea Water Salinity Expressed as Salt Content Due to Parameterized Submesoscale Advection</td>
    <td>kg m-2 s-1</td>
    <td>Tendency of salt content for a grid cell from parameterized submesoscale eddy advection.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6e30ba1e2c19dcbd85faa176d4eae596.html">tnhusmp</a></td>
    <td>Tendency of Specific Humidity Due to Model Physics</td>
    <td>s-1</td>
    <td>Tendency of specific humidity due to model physics. This includes sources and sinks from parametrized moist physics (e.g. convection, boundary layer, stratiform condensation/evaporation, etc.) and excludes sources and sinks from resolved dynamics or from horizontal or vertical numerical diffusion not associated with model physics.  For example any diffusive mixing by the boundary layer scheme would be included.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2c8cb564bae033f641135194947da163.html">tnhusd</a></td>
    <td>Tendency of Specific Humidity Due to Numerical Diffusion</td>
    <td>s-1</td>
    <td>Tendency of specific humidity due to numerical diffusion.This includes any horizontal or vertical numerical moisture diffusion not associated with the parametrized moist physics or the resolved dynamics.  For example, any vertical diffusion which is part of the boundary layer mixing scheme should be excluded, as should any diffusion which is included in the terms from the resolved dynamics.   This term is required to check the closure of the moisture budget.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e85a8-9e49-11e5-803c-0d0b866b59f3.html">utendnogw</a></td>
    <td>Eastward Acceleration Due to Non-Orographic Gravity Wave Drag</td>
    <td>m s-2</td>
    <td>Tendency of the eastward wind by parameterized nonorographic gravity waves.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ed5a8-9e49-11e5-803c-0d0b866b59f3.html">utendogw</a></td>
    <td>Eastward Acceleration Due to Orographic Gravity Wave Drag</td>
    <td>m s-2</td>
    <td>Tendency of the eastward wind by parameterized orographic gravity waves.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59170700-9e49-11e5-803c-0d0b866b59f3.html">vtendnogw</a></td>
    <td>Northward Acceleration Due to Non-Orographic Gravity Wave Drag</td>
    <td>m s-2</td>
    <td>Tendency of the northward wind by parameterized nonorographic gravity waves.  (Note that CF name tables only have a general northward tendency for all gravity waves, and we need it separated by type.)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59140c12-9e49-11e5-803c-0d0b866b59f3.html">vtendogw</a></td>
    <td>Northward Acceleration Due to Orographic Gravity Wave Drag</td>
    <td>m s-2</td>
    <td>Tendency of the northward wind by parameterized orographic gravity waves.  (Note that CF name tables only have a general northward tendency for all gravity waves, and we need it separated by type.)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590fa2bc-9e49-11e5-803c-0d0b866b59f3.html">utendepfd</a></td>
    <td>Tendency of Eastward Wind Due to Eliassen-Palm Flux Divergence</td>
    <td>m s-2</td>
    <td>Tendency of the zonal mean zonal wind due to the divergence of the Eliassen-Palm flux.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e48f4-9e49-11e5-803c-0d0b866b59f3.html">utendvtem</a></td>
    <td>Tendency of Eastward Wind Due to TEM Northward Advection and Coriolis Term</td>
    <td>m s-1 d-1</td>
    <td>Tendency of zonally averaged eastward wind, by the residual northward wind advection (on the native model grid). Reference: Andrews et al (1987): Middle Atmospheric Dynamics. Academic Press.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e883c-9e49-11e5-803c-0d0b866b59f3.html">utendwtem</a></td>
    <td>Tendency of Eastward Wind Due to TEM Upward Advection</td>
    <td>m s-1 d-1</td>
    <td>Tendency of zonally averaged eastward wind, by the residual upward wind advection (on the native model grid). Reference: Andrews et al (1987): Middle Atmospheric Dynamics. Academic Press.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ea93e-9e49-11e5-803c-0d0b866b59f3.html">tauupbl</a></td>
    <td>Eastward Surface Stress from Planetary Boundary Layer Scheme</td>
    <td>Pa</td>
    <td>The  downward eastward stress associated with the models parameterization of the planetary boundary layer. (This request is related to a WGNE effort to understand how models parameterize the surface stresses.)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f5b72-9e49-11e5-803c-0d0b866b59f3.html">tauvpbl</a></td>
    <td>Northward Surface Stress from Planetary Boundary Layer Scheme</td>
    <td>Pa</td>
    <td>The  downward northward stress associated with the models parameterization of the planetary boundary layer. (This request is related to a WGNE effort to understand how models parameterize the surface stresses.)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59176628-9e49-11e5-803c-0d0b866b59f3.html">ares</a></td>
    <td>Aerodynamic Resistance</td>
    <td>s m-1</td>
    <td>The &quot;aerodynamic_resistance&quot; is the resistance to mixing through the boundary layer toward the surface by means of the dominant process, turbulent transport. Reference: Wesely, M. L., 1989,  doi:10.1016/0004-6981(89)90153-4.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9c35e2ac-a0de-11e6-bc63-ac72891c3257.html">sza</a></td>
    <td>Solar Zenith Angle</td>
    <td>degree</td>
    <td>The angle between the line of sight to the sun and the local vertical</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b089240c-a0da-11e6-bc63-ac72891c3257.html">aerasymbnd</a></td>
    <td>Aerosol Level Asymmetry Parameter for Each Band</td>
    <td>1</td>
    <td>The asymmetry factor is the angular integral of the aerosol scattering phase function weighted by the cosine of the angle with the incident radiation flux. The asymmetry coefficient is here an integral over all wavelength bands.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/93e06dd7c756aade75235d7841c05269.html">zmla</a></td>
    <td>Height of Boundary Layer</td>
    <td>m</td>
    <td>The atmosphere boundary layer thickness is the &quot;depth&quot; or &quot;height&quot; of the (atmosphere) planetary boundary layer.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59148cf0-9e49-11e5-803c-0d0b866b59f3.html">topg</a></td>
    <td>Bedrock Altitude</td>
    <td>m</td>
    <td>The bedrock topography beneath the land ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ec6da64bcabf72243b381d6b50bffa5f.html">mrsofc</a></td>
    <td>Capacity of Soil to Store Water (Field Capacity)</td>
    <td>kg m-2</td>
    <td>The bulk water content retained by the soil at -33 J/kg of suction pressure, expressed as mass per unit land area; report as missing where there is no land</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/32ed0e80b1ae2adc7d4fb4b71bce9285.html">evspsblveg</a></td>
    <td>Evaporation from Canopy</td>
    <td>kg m-2 s-1</td>
    <td>The canopy evaporation and sublimation (if present in model); may include dew formation as a negative flux.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/00efa75221917486576896481325ce2f.html">zmtnt</a></td>
    <td>Zonal Mean Diabatic Heating Rates</td>
    <td>K s-1</td>
    <td>The diabatic heating rates due to all the processes that may change potential temperature</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917cf46-9e49-11e5-803c-0d0b866b59f3.html">swsrfcsdust</a></td>
    <td>Clear-Sky Surface Shortwave Radiative Flux Due to Dust</td>
    <td>W m-2</td>
    <td>The direct radiative effect refers to the instantaneous radiative impact on the Earth's energy balance, excluding secondary effects such as changes in cloud cover. Calculated in clear-sky conditions.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591497a4-9e49-11e5-803c-0d0b866b59f3.html">lwsrfcsdust</a></td>
    <td>Clear-Sky Surface Longwave Radiative Flux Due to Dust</td>
    <td>W m-2</td>
    <td>The direct radiative effect refers to the instantaneous radiative impact on the Earth's energy balance, excluding secondary effects such as changes in cloud cover. Calculating in clear-sky conditions.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f465a-9e49-11e5-803c-0d0b866b59f3.html">swsrfasdust</a></td>
    <td>All-Sky Surface Shortwave Radiative Flux Due to Dust</td>
    <td>W m-2</td>
    <td>The direct radiative effect refers to the instantaneous radiative impact on the Earth's energy balance, excluding secondary effects such as changes in cloud cover.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59134bf6-9e49-11e5-803c-0d0b866b59f3.html">lwtoacsdust</a></td>
    <td>TOA Clear-Sky Longwave Radiative Forcing Due to Dust</td>
    <td>W m-2</td>
    <td>The direct radiative effect refers to the instantaneous radiative impact on the Earth's energy balance, excluding secondary effects such as changes in cloud cover.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914ede4-9e49-11e5-803c-0d0b866b59f3.html">lwsrfasdust</a></td>
    <td>All-Sky Surface Longwave Radiative Flux Due to Dust</td>
    <td>W m-2</td>
    <td>The direct radiative effect refers to the instantaneous radiative impact on the Earth's energy balance, excluding secondary effects such as changes in cloud cover.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f2f8a-9e49-11e5-803c-0d0b866b59f3.html">siflswdtop</a></td>
    <td>Downwelling Shortwave Flux over Sea Ice</td>
    <td>W m-2</td>
    <td>The downwelling shortwave flux over sea ice (always positive by sign convention)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f5672-9e49-11e5-803c-0d0b866b59f3.html">siflswdbot</a></td>
    <td>Downwelling Shortwave Flux Under Sea Ice</td>
    <td>W m-2</td>
    <td>The downwelling shortwave flux underneath sea ice (always positive)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7124a0cc-c7b6-11e6-bb2a-ac72891c3257.html">fldcapacity</a></td>
    <td>Field Capacity</td>
    <td>%</td>
    <td>The field capacity of soil is the maximum content of water it can retain against gravitational drainage. Provide as a percentage of the soil volume.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d2ed8-9e49-11e5-803c-0d0b866b59f3.html">fBNF</a></td>
    <td>Biological Nitrogen Fixation</td>
    <td>kg m-2 s-1</td>
    <td>The fixation (uptake of nitrogen gas directly from the atmosphere) of nitrogen due to biological processes.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e3260-9e49-11e5-803c-0d0b866b59f3.html">prrsn</a></td>
    <td>Fraction of Rainfall on Snow</td>
    <td>1</td>
    <td>The fraction of the grid averaged rainfall which falls on the snow pack</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917ed1e-9e49-11e5-803c-0d0b866b59f3.html">prsnsn</a></td>
    <td>Fraction of Snowfall (Including Hail and Graupel) on Snow</td>
    <td>1</td>
    <td>The fraction of the snowfall which falls on the snow pack</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59139cfa-9e49-11e5-803c-0d0b866b59f3.html">albdiffbnd</a></td>
    <td>Diffuse Surface Albedo for Each Band</td>
    <td>1</td>
    <td>The fraction of the surface diffuse downwelling shortwave radiation flux which is reflected. If the diffuse radiation is isotropic, this term is equivalent to the integral of surface bidirectional reflectance over all incident angles and over all outgoing angles in the hemisphere above the surface. Reported in spectral frequency bands.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f3f16-9e49-11e5-803c-0d0b866b59f3.html">albdirbnd</a></td>
    <td>Direct Surface Albedo for Each Band</td>
    <td>1</td>
    <td>The fraction of the surface direct downwelling shortwave radiation flux which is reflected. It is equivalent to the surface bidirectional reflectance at the incident angle of the incoming solar radiation and integrated over all outgoing angles in the hemisphere above the surface.  Reported in spectral frequency bands.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f019a-9e49-11e5-803c-0d0b866b59f3.html">limnsw</a></td>
    <td>Ice Sheet Mass That Does not Displace Sea Water</td>
    <td>kg</td>
    <td>The ice sheet mass is computed as the volume above flotation times density. Changes in land_ice_mass_not_displacing_sea_water will always result in a change in sea level, unlike changes in land_ice_mass which may not result in sea level change (such as melting of the floating ice shelves, or portion of ice that sits on bedrock below sea level)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/41467ee6-4f40-11e6-a814-ac72891c3257.html">lim</a></td>
    <td>Ice Sheet Mass</td>
    <td>kg</td>
    <td>The ice sheet mass is computed as the volume times density</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59130e98-9e49-11e5-803c-0d0b866b59f3.html">mrlso</a></td>
    <td>Soil Liquid Water Content</td>
    <td>kg m-2</td>
    <td>The mass (summed over all all layers) of liquid water.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5eac89f6f61b0e154c5add397fc41c46.html">airmass</a></td>
    <td>Vertically Integrated Mass Content of Air in Layer</td>
    <td>kg m-2</td>
    <td>The mass of air in an atmospheric layer.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0e1704f8fbacbe223946d84392b8064e.html">snw</a></td>
    <td>Surface Snow Amount</td>
    <td>kg m-2</td>
    <td>The mass of surface snow on the land portion of the grid cell divided by the land area in the grid cell; reported as missing where the land fraction is 0; excludes snow on vegetation canopy or on sea ice.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/40c091a01dc9db6d6d5901528c375ab3.html">mrsos</a></td>
    <td>Moisture in Upper Portion of Soil Column</td>
    <td>kg m-2</td>
    <td>The mass of water in all phases in the upper 10cm of the  soil layer.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/154d00de9ab9aff72373a673df10946a.html">mrfso</a></td>
    <td>Soil Frozen Water Content</td>
    <td>kg m-2</td>
    <td>The mass per unit area (summed over all model layers) of frozen water.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e703d0fcbdd5f975485b3404a331ed91.html">meanage</a></td>
    <td>Mean Age of Stratospheric Air</td>
    <td>yr</td>
    <td>The mean age of air is defined as the mean time that a stratospheric air mass has been out of contact with the well-mixed troposphere.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3e437daab5bc69123a859ad361babc59.html">tpf</a></td>
    <td>Permafrost Layer Thickness</td>
    <td>m</td>
    <td>The mean thickness of the permafrost layer in the land portion of the grid cell.  Reported as zero in permafrost-free regions.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/517f72b8577df7e97ce2dea8f1143e94.html">dmc</a></td>
    <td>Deep Convective Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>The net mass flux  represents the difference between the updraft and downdraft components.   This is calculated as the convective mass flux divided by the area of the whole grid cell (not just the area of the cloud).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/706324a93b4c3976da22db8a6e9d78b0.html">smc</a></td>
    <td>Shallow Convective Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>The net mass flux represents the difference between the updraft and downdraft components.  For models with a distinct shallow convection scheme, this is calculated as convective mass flux divided by the area of the whole grid cell (not just the area of the cloud).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6d790fe4caa7feff46a41ae7b3811e52.html">mc</a></td>
    <td>Convective Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>The net mass flux should represent the difference between the updraft and downdraft components.  The flux is computed as the mass divided by the area of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5f8dc9362d17e2daa42dd6f0f38afb76.html">omldamax</a></td>
    <td>Mean Daily Maximum Ocean Mixed Layer Thickness Defined by Mixing Scheme</td>
    <td>m</td>
    <td>The ocean mixed layer is the upper part of the ocean, regarded as being well-mixed. The base of the mixed layer defined by the mixing scheme is a diagnostic of ocean models. &quot;Thickness&quot; means the vertical extent of a layer.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/db3d77eebc6dc2fbcab4e0f894e46037.html">cod</a></td>
    <td>Cloud Optical Depth</td>
    <td>1</td>
    <td>The optical thickness is the integral along the path of radiation of a volume scattering/absorption/attenuation coefficient. The radiative flux is reduced by a factor exp(-optical_thickness) on traversing the path. A coordinate variable of radiation_wavelength or radiation_frequency can be specified to indicate that the optical thickness applies at specific wavelengths or frequencies. The atmosphere optical thickness applies to radiation passing through the entire atmosphere. &quot;Cloud&quot; means the component of extinction owing to the presence of liquid or ice water particles. The specification of a physical process by the phrase due_to_process means that the quantity named is a  single term in a sum of terms which together compose the general quantity named by omitting the phrase.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/abe5993d07b8b52e770ed957b060f9ed.html">dpo2</a></td>
    <td>Delta O2 Partial Pressure</td>
    <td>Pa</td>
    <td>The partial pressure of a dissolved gas in sea water is the partial pressure in air with which it would be in equilibrium.  The partial pressure of a gaseous constituent of air is the pressure which it alone would exert with unchanged temperature and number of moles per unit volume.  The surface called &quot;surface&quot; means the lower boundary of the atmosphere.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59170f66-9e49-11e5-803c-0d0b866b59f3.html">dcw</a></td>
    <td>Change in Interception Storage</td>
    <td>kg m-2</td>
    <td>The phrase &quot;change_over_time_in_X&quot; means change in a quantity X over a time-interval, which should be defined by the bounds of the time coordinate. &quot;Canopy&quot; means the plant or vegetation canopy. Canopy water is the water on the canopy. &quot;Water&quot; means water in all phases, including frozen, i.e. ice and snow. &quot;Amount&quot; means mass per unit area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914bc20-9e49-11e5-803c-0d0b866b59f3.html">dslw</a></td>
    <td>Change in Soil Moisture</td>
    <td>kg m-2</td>
    <td>The phrase &quot;change_over_time_in_X&quot; means change in a quantity X over a time-interval, which should be defined by the bounds of the time coordinate. &quot;Content&quot; indicates a quantity per unit area. The mass content of water in soil refers to the vertical integral from the surface down to the bottom of the soil model. For the content between specified levels in the soil, standard names including &quot;content_of_soil_layer&quot; are used. &quot;Water&quot; means water in all phases.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f182e-9e49-11e5-803c-0d0b866b59f3.html">dsw</a></td>
    <td>Change in Surface Water Storage</td>
    <td>kg m-2</td>
    <td>The phrase &quot;land_water_amount&quot;, often known as &quot;Terrestrial Water Storage&quot;, includes: surface liquid water (water in rivers, wetlands, lakes, reservoirs, rainfall intercepted by the canopy); surface ice and snow (glaciers, ice caps, grounded ice sheets not displacing sea water, river and lake ice, other surface ice such as frozen flood water, snow lying on the surface and intercepted by the canopy); subsurface water (liquid and frozen soil water, groundwater).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3cbe53c2-12cc-11e6-b2bc-ac72891c3257.html">opottemprmadvect</a></td>
    <td>Tendency of Sea Water Potential Temperature Expressed as Heat Content Due to Residual Mean Advection</td>
    <td>W m-2</td>
    <td>The phrase &quot;residual mean advection&quot; refers to the sum of the model's resolved advective transport plus any parameterized advective transport. Parameterized advective transport includes processes such as parameterized mesoscale and submesoscale transport, as well as any other advectively parameterized transport. When the parameterized advective transport is represented in the model as a skew-diffusion rather than an advection, then the parameterized skew diffusion should be included in this diagnostic, since the convergence of skew-fluxes are identical (in the continuous formulation) to the convergence of advective fluxes.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4f1bd1a2-12cc-11e6-b2bc-ac72891c3257.html">osaltrmadvect</a></td>
    <td>Tendency of Sea Water Salinity Expressed as Salt Content Due to Residual Mean Advection</td>
    <td>kg m-2 s-1</td>
    <td>The phrase &quot;residual mean advection&quot; refers to the sum of the model's resolved advective transport plus any parameterized advective transport. Parameterized advective transport includes processes such as parameterized mesoscale and submesoscale transport, as well as any other advectively parameterized transport. When the parameterized advective transport is represented in the model as a skew-diffusion rather than an advection, then the parameterized skew diffusion should be included in this diagnostic, since the convergence of skew-fluxes are identical (in the continuous formulation) to the convergence of advective fluxes.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d4eeac2e-b00f-11e6-a1f0-ac72891c3257.html">obvfsq</a></td>
    <td>Square of Brunt Vaisala Frequency in Sea Water</td>
    <td>s-2</td>
    <td>The phrase &quot;square_of_X&quot; means X*X. Frequency is the number of oscillations of a wave per unit time. Brunt-Vaisala frequency is also sometimes called &quot;buoyancy frequency&quot; and is a measure of the vertical stratification of the medium.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1c502fa4d453b20feafa63a862eaeb57.html">mlotstsq</a></td>
    <td>Square of Ocean Mixed Layer Thickness Defined by Sigma T</td>
    <td>m2</td>
    <td>The phrase &quot;square_of_X&quot; means X*X. The ocean mixed layer is the upper part of the ocean, regarded as being well-mixed. The base of the mixed layer defined by &quot;temperature&quot;, &quot;sigma&quot;, &quot;sigma_theta&quot;, &quot;sigma_t&quot; or vertical diffusivity is the level at which the quantity indicated differs from its surface value by a certain amount. A coordinate variable or scalar coordinate variable with standard name sea_water_sigma_t_difference can be used to specify the sigma_t criterion that determines the layer thickness. Sigma-t of sea water is the density of water at atmospheric pressure (i.e. the surface) having the same temperature and salinity, minus 1000 kg m-3. &quot;Thickness&quot; means the vertical extent of a layer.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59135d8a-9e49-11e5-803c-0d0b866b59f3.html">tnhusscp</a></td>
    <td>Tendency of Specific Humidity Due to Stratiform Clouds and Precipitation</td>
    <td>s-1</td>
    <td>The phrase &quot;tendency_of_X&quot; means derivative of X with respect to time. &quot;Specific&quot; means per unit mass. Specific humidity is the mass fraction of water vapor in (moist) air. The specification of a physical process by the phrase &quot;due_to_&quot; process means that the quantity named is a single term in a sum of terms which together compose the general quantity named by omitting the phrase. A variable with the standard name of tendency_of_specific_humidity_due_to_stratiform_cloud_and_precipitation should contain the effects of all processes which convert stratiform clouds and precipitation to or from water vapor. In an atmosphere model, stratiform cloud is that produced by large-scale convergence (not the convection schemes).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913d602-9e49-11e5-803c-0d0b866b59f3.html">tntscp</a></td>
    <td>Tendency of Air Temperature Due to Stratiform Clouds and Precipitation</td>
    <td>K s-1</td>
    <td>The phrase &quot;tendency_of_X&quot; means derivative of X with respect to time. Air temperature is the bulk temperature of the air, not the surface (skin) temperature. The specification of a physical process by the phrase &quot;due_to_&quot; process means that the quantity named is a single term in a sum of terms which together compose the general quantity named by omitting the phrase. A variable with the standard name tendency_of_air_temperature_due_to_stratiform_cloud_and_precipitation should contain net latent heating effects of all processes which convert stratiform clouds and precipitation between water vapour, liquid or ice phases. In an atmosphere model, stratiform cloud is that produced by large-scale convergence (not the convection schemes).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f43d7527cd48c992f075339b2bbbf9ef.html">eparag100</a></td>
    <td>Downward Flux of Aragonite</td>
    <td>mol m-2 s-1</td>
    <td>The phrase 'expressed_as' is used in the construction A_expressed_as_B, where B is a chemical constituent of A. It means that the quantity indicated by the standard name is calculated solely with respect to the B contained in A, neglecting all other chemical constituents of A. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.   'Sinking' is the gravitational settling of particulate matter suspended in a liquid. A sinking flux is positive downwards and is calculated relative to the movement of the surrounding fluid. Aragonite is a mineral that is a polymorph of calcium carbonate. The chemical formula of aragonite is CaCO3. Standard names also exist for calcite, another polymorph of calcium carbonate.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6308b546e0eb4e1962d36ba5b98904ee.html">epcalc100</a></td>
    <td>Downward Flux of Calcite</td>
    <td>mol m-2 s-1</td>
    <td>The phrase 'expressed_as' is used in the construction A_expressed_as_B, where B is a chemical constituent of A. It means that the quantity indicated by the standard name is calculated solely with respect to the B contained in A, neglecting all other chemical constituents of A. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.   'Sinking' is the gravitational settling of particulate matter suspended in a liquid. A sinking flux is positive downwards and is calculated relative to the movement of the surrounding fluid. Calcite is a mineral that is a polymorph of calcium carbonate. The chemical formula of calcite is CaCO3. Standard names also exist for aragonite, another polymorph of calcium carbonate.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4500aac3ce5985eff562e6a170a88574.html">epc100</a></td>
    <td>Downward Flux of Particulate Organic Carbon</td>
    <td>mol m-2 s-1</td>
    <td>The phrase 'expressed_as' is used in the construction A_expressed_as_B, where B is a chemical constituent of A. It means that the quantity indicated by the standard name is calculated solely with respect to the B contained in A, neglecting all other chemical constituents of A. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.   'Sinking' is the gravitational settling of particulate matter suspended in a liquid. A sinking flux is positive downwards and is calculated relative to the movement of the surrounding fluid.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e54a3eda3d5fc42a9cd1354038ad45ed.html">prveg</a></td>
    <td>Precipitation onto Canopy</td>
    <td>kg m-2 s-1</td>
    <td>The precipitation flux that is intercepted by the vegetation canopy (if present in model) before reaching the ground.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590df00c-9e49-11e5-803c-0d0b866b59f3.html">pathetao</a></td>
    <td>Sea Water Additional Potential Temperature</td>
    <td>degC</td>
    <td>The quantity with standard name sea_water_added_potential_temperature is a passive tracer in an ocean model whose surface flux does not come from the atmosphere but is imposed externally upon the simulated climate system. The surface flux is expressed as a heat flux and converted to a passive tracer increment as if it were a heat flux being added to potential temperature. The passive tracer is transported within the ocean as if it were potential temperature. The passive tracer is zero in the control climate of the model. The passive tracer records added heat, as described for the CMIP6 FAFMIP experiment (doi:10.5194/gmd-9-3993-2016), following earlier ideas. Potential temperature is the temperature a parcel of air or sea water would have if moved adiabatically to sea level pressure.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59149c7c-9e49-11e5-803c-0d0b866b59f3.html">sidmassgrowthwat</a></td>
    <td>Sea-Ice Mass Change Through Growth in Supercooled Open Water (Frazil)</td>
    <td>kg m-2 s-1</td>
    <td>The rate of change of sea ice mass due to sea ice formation in supercooled water (often through frazil formation) divided by grid-cell area. Together, sidmassgrowthwat and sidmassgrowthbot should give total ice growth</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d3518-9e49-11e5-803c-0d0b866b59f3.html">sidmasssi</a></td>
    <td>Sea-Ice Mass Change Through Snow-to-Ice Conversion</td>
    <td>kg m-2 s-1</td>
    <td>The rate of change of sea ice mass due to transformation of snow to sea ice divided by grid-cell area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590db4ac-9e49-11e5-803c-0d0b866b59f3.html">sidmassgrowthbot</a></td>
    <td>Sea-Ice Mass Change Through Basal Growth</td>
    <td>kg m-2 s-1</td>
    <td>The rate of change of sea ice mass due to vertical growth of existing sea ice at its base divided by grid-cell area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ea5c4-9e49-11e5-803c-0d0b866b59f3.html">sidmasslat</a></td>
    <td>Lateral Sea Ice Melt Rate</td>
    <td>kg m-2 s-1</td>
    <td>The rate of change of sea ice mass through lateral melting divided by grid-cell area (report 0 if not explicitly calculated thermodynamically)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917ea6c-9e49-11e5-803c-0d0b866b59f3.html">sidmassmeltbot</a></td>
    <td>Sea-Ice Mass Change Through Bottom Melting</td>
    <td>kg m-2 s-1</td>
    <td>The rate of change of sea ice mass through melting at the ice bottom divided by grid-cell area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59179aee-9e49-11e5-803c-0d0b866b59f3.html">sidmassmelttop</a></td>
    <td>Sea-Ice Mass Change Through Surface Melting</td>
    <td>kg m-2 s-1</td>
    <td>The rate of change of sea ice mass through melting at the ice surface divided by grid-cell area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59146180-9e49-11e5-803c-0d0b866b59f3.html">sidmassevapsubl</a></td>
    <td>Sea-Ice Mass Change Through Evaporation and Sublimation</td>
    <td>kg m-2 s-1</td>
    <td>The rate of change of sea-ice mass change through evaporation and sublimation divided by grid-cell area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59139246-9e49-11e5-803c-0d0b866b59f3.html">sndmassdyn</a></td>
    <td>Snow Mass Rate of Change Through Advection by Sea-Ice Dynamics</td>
    <td>kg m-2 s-1</td>
    <td>The rate of change of snow mass through advection with sea ice divided by sea-ice area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/89c4bb4f45a0182fc00a1b86b13241a5.html">gpp</a></td>
    <td>Carbon Mass Flux out of Atmosphere Due to Gross Primary Production on Land</td>
    <td>kg m-2 s-1</td>
    <td>The rate of synthesis of biomass from inorganic precursors by autotrophs (&quot;producers&quot;) expressed as the mass of carbon which it contains. For example, photosynthesis in plants or phytoplankton. The producers also respire some of this biomass and the difference is referred to as the net primary production. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590a8976-9e49-11e5-803c-0d0b866b59f3.html">gppLut</a></td>
    <td>Gross Primary Production on Land-Use Tile as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>The rate of synthesis of biomass from inorganic precursors by autotrophs (&quot;producers&quot;) expressed as the mass of carbon which it contains. For example, photosynthesis in plants or phytoplankton. The producers also respire some of this biomass and the difference is referred to as the net primary production. Reported on land-use tiles.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f9ace-9e49-11e5-803c-0d0b866b59f3.html">gppc13</a></td>
    <td>Carbon-13 Mass Flux out of Atmosphere Due to Gross Primary Production on Land</td>
    <td>kg m-2 s-1</td>
    <td>The rate of synthesis of carbon-13 in biomass from inorganic precursors by autotrophs (&quot;producers&quot;) expressed as the mass of carbon which it contains. For example, photosynthesis in plants or phytoplankton. The producers also respire some of this biomass and the difference is referred to as the net primary production. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f95c4-9e49-11e5-803c-0d0b866b59f3.html">gppc14</a></td>
    <td>Carbon-14 Mass Flux out of Atmosphere Due to Gross Primary Production on Land</td>
    <td>kg m-2 s-1</td>
    <td>The rate of synthesis of carbon-14 in biomass from inorganic precursors by autotrophs (&quot;producers&quot;) expressed as the mass of carbon which it contains. For example, photosynthesis in plants or phytoplankton. The producers also respire some of this biomass and the difference is referred to as the net primary production. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3cc6766c2d001a58d18dfe7f60fd5e66.html">hur</a></td>
    <td>Relative Humidity</td>
    <td>%</td>
    <td>The relative humidity with respect to liquid water for T&gt; 0 C, and with respect to ice for T&lt;0 C.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f4196-9e49-11e5-803c-0d0b866b59f3.html">hursmax</a></td>
    <td>Daily Maximum Near-Surface Relative Humidity</td>
    <td>%</td>
    <td>The relative humidity with respect to liquid water for T&gt; 0 C, and with respect to ice for T&lt;0 C.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59152bba-9e49-11e5-803c-0d0b866b59f3.html">hursmin</a></td>
    <td>Daily Minimum Near-Surface Relative Humidity</td>
    <td>%</td>
    <td>The relative humidity with respect to liquid water for T&gt; 0 C, and with respect to ice for T&lt;0 C.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bf56baca-c14c-11e6-bb6a-ac72891c3257.html">hursminCrop</a></td>
    <td>Daily Minimum Near-Surface Relative Humidity over Crop Tile</td>
    <td>%</td>
    <td>The relative humidity with respect to liquid water for T&gt; 0 C, and with respect to ice for T&lt;0 C.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c75f684ec69602e9de82b48e53afb2cc.html">hurs</a></td>
    <td>Near-Surface Relative Humidity</td>
    <td>%</td>
    <td>The relative humidity with respect to liquid water for T&gt; 0 C, and with respect to ice for T&lt;0 C.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b02eb8b4-a0da-11e6-bc63-ac72891c3257.html">aerssabnd</a></td>
    <td>Aerosol Level Single Scattering Albedo for Each Band</td>
    <td>1</td>
    <td>The single scattering albedo is the fraction of radiation in an incident light beam scattered by the particles of an aerosol reference volume for a given wavelength. It is the ratio of the scattering and the extinction coefficients of the aerosol particles in the reference volume. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3a8e1636a31c82fbdd9a1ae45ab3be7d.html">sbl</a></td>
    <td>Surface Snow and Ice Sublimation Flux</td>
    <td>kg m-2 s-1</td>
    <td>The snow and ice sublimation flux is the loss of snow and ice mass per unit area from the surface resulting from their direct conversion to water vapor that enters the atmosphere.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53825806-bf01-11e6-a554-ac72891c3257.html">sblIs</a></td>
    <td>Ice Sheet Surface Snow and Ice Sublimation Flux</td>
    <td>kg m-2 s-1</td>
    <td>The snow and ice sublimation flux is the loss of snow and ice mass per unit area from the surface resulting from their direct conversion to water vapor that enters the atmosphere.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d94709e6b579bccccccc914ba3531feb.html">pso</a></td>
    <td>Sea Water Pressure at Sea Water Surface</td>
    <td>Pa</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere.  &quot;Sea water pressure&quot; is the pressure that exists in the medium of sea water.  It includes the pressure due to overlying sea water, sea ice, air and any other medium that may be present.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5d2b76d0-0e25-11e7-bdeb-ac72891c3257.html">hfdsl</a></td>
    <td>Downward Heat Flux at Land Surface</td>
    <td>W m-2</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;Downward&quot; indicates a vector component which is positive when directed downward (negative upward). The vertical heat flux in air is the sum of all heat fluxes i.e. radiative, latent and sensible. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f097e-9e49-11e5-803c-0d0b866b59f3.html">fNOx</a></td>
    <td>Total Land NOx Flux</td>
    <td>kg m-2 s-1</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;Upward&quot; indicates a vector component which is positive when directed upward (negative downward). In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics. The phrase &quot;expressed_as&quot; is used in the construction A_expressed_as_B, where B is a chemical constituent of A. It means that the quantity indicated by the standard name is calculated solely with respect to the B contained in A, neglecting all other chemical constituents of A. &quot;Nox&quot; means a combination of two radical species containing nitrogen and oxygen NO+NO2. &quot;Vegetation&quot; means any living plants e.g. trees, shrubs, grass. &quot;Litter&quot; is dead plant material in or above the soil.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ee804-9e49-11e5-803c-0d0b866b59f3.html">hflsLut</a></td>
    <td>Latent Heat Flux on Land-Use Tile</td>
    <td>W m-2</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;Upward&quot; indicates a vector component which is positive when directed upward (negative downward). The surface latent heat flux is the exchange of heat between the surface and the air on account of evaporation (including sublimation). In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/95cbf6ac889c8fe7d92e20e8c34960d1.html">hfls</a></td>
    <td>Surface Upward Latent Heat Flux</td>
    <td>W m-2</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;Upward&quot; indicates a vector component which is positive when directed upward (negative downward). The surface latent heat flux is the exchange of heat between the surface and the air on account of evaporation (including sublimation). In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/538284f2-bf01-11e6-a554-ac72891c3257.html">rldsIs</a></td>
    <td>Ice Sheet Surface Downwelling Longwave Radiation</td>
    <td>W m-2</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;longwave&quot; means longwave radiation. Downwelling radiation is radiation from above. It does not mean &quot;net downward&quot;. When thought of as being incident on a surface, a radiative flux is sometimes called &quot;irradiance&quot;. In addition, it is identical with the quantity measured by a cosine-collector light-meter and sometimes called &quot;vector irradiance&quot;. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/70d7d6fc0e9c2f14624a0270bf2b99b9.html">rlds</a></td>
    <td>Surface Downwelling Longwave Radiation</td>
    <td>W m-2</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;longwave&quot; means longwave radiation. Downwelling radiation is radiation from above. It does not mean &quot;net downward&quot;. When thought of as being incident on a surface, a radiative flux is sometimes called &quot;irradiance&quot;. In addition, it is identical with the quantity measured by a cosine-collector light-meter and sometimes called &quot;vector irradiance&quot;. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/538287c2-bf01-11e6-a554-ac72891c3257.html">rlusIs</a></td>
    <td>Ice Sheet Surface Upwelling Longwave Radiation</td>
    <td>W m-2</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;longwave&quot; means longwave radiation. Upwelling radiation is radiation from below. It does not mean &quot;net upward&quot;. When thought of as being incident on a surface, a radiative flux is sometimes called &quot;irradiance&quot;. In addition, it is identical with the quantity measured by a cosine-collector light-meter and sometimes called &quot;vector irradiance&quot;. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912c3de-9e49-11e5-803c-0d0b866b59f3.html">rlusLut</a></td>
    <td>Surface Upwelling Longwave on Land-Use Tile</td>
    <td>W m-2</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;longwave&quot; means longwave radiation. Upwelling radiation is radiation from below. It does not mean &quot;net upward&quot;. When thought of as being incident on a surface, a radiative flux is sometimes called &quot;irradiance&quot;. In addition, it is identical with the quantity measured by a cosine-collector light-meter and sometimes called &quot;vector irradiance&quot;. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/89027ee0079acb709750ddeac1c08899.html">rlus</a></td>
    <td>Surface Upwelling Longwave Radiation</td>
    <td>W m-2</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;longwave&quot; means longwave radiation. Upwelling radiation is radiation from below. It does not mean &quot;net upward&quot;. When thought of as being incident on a surface, a radiative flux is sometimes called &quot;irradiance&quot;. In addition, it is identical with the quantity measured by a cosine-collector light-meter and sometimes called &quot;vector irradiance&quot;. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e379c-9e49-11e5-803c-0d0b866b59f3.html">sweLut</a></td>
    <td>Snow Water Equivalent on Land-Use Tile</td>
    <td>m</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;lwe&quot; means liquid water equivalent. &quot;Amount&quot; means mass per unit area. The construction lwe_thickness_of_X_amount or _content means the vertical extent of a layer of liquid water having the same mass per unit area. Surface amount refers to the amount on the ground, excluding that on the plant or vegetation canopy.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53828236-bf01-11e6-a554-ac72891c3257.html">rsusIs</a></td>
    <td>Ice Sheet Surface Upwelling Shortwave Radiation</td>
    <td>W m-2</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;shortwave&quot; means shortwave radiation. Upwelling radiation is radiation from below. It does not mean &quot;net upward&quot;. When thought of as being incident on a surface, a radiative flux is sometimes called &quot;irradiance&quot;. In addition, it is identical with the quantity measured by a cosine-collector light-meter and sometimes called &quot;vector irradiance&quot;. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912e6d4-9e49-11e5-803c-0d0b866b59f3.html">rsusLut</a></td>
    <td>Surface Upwelling Shortwave  on Land-use Tile</td>
    <td>W m-2</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;shortwave&quot; means shortwave radiation. Upwelling radiation is radiation from below. It does not mean &quot;net upward&quot;. When thought of as being incident on a surface, a radiative flux is sometimes called &quot;irradiance&quot;. In addition, it is identical with the quantity measured by a cosine-collector light-meter and sometimes called &quot;vector irradiance&quot;. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/70bf79db957daa3b82413da949233ac7.html">rsus</a></td>
    <td>Surface Upwelling Shortwave Radiation</td>
    <td>W m-2</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. &quot;shortwave&quot; means shortwave radiation. Upwelling radiation is radiation from below. It does not mean &quot;net upward&quot;. When thought of as being incident on a surface, a radiative flux is sometimes called &quot;irradiance&quot;. In addition, it is identical with the quantity measured by a cosine-collector light-meter and sometimes called &quot;vector irradiance&quot;. In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/00e77372e8b909d9a827a0790e991fd9.html">orog</a></td>
    <td>Surface Altitude</td>
    <td>m</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. Altitude is the (geometric) height above the geoid, which is the reference geopotential surface. The geoid is similar to mean sea level.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5382769c-bf01-11e6-a554-ac72891c3257.html">orogIs</a></td>
    <td>Ice Sheet Surface Altitude</td>
    <td>m</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. Altitude is the (geometric) height above the geoid, which is the reference geopotential surface. The geoid is similar to mean sea level.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c972f264-c5f0-11e6-ac20-5404a60d96b5.html">spco2nat</a></td>
    <td>Natural Surface Aqueous Partial Pressure of CO2</td>
    <td>Pa</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. The chemical formula for carbon dioxide is CO2. In ocean biogeochemistry models, a &quot;natural analogue&quot; is used to simulate the effect on a modelled variable of imposing preindustrial atmospheric carbon dioxide concentrations, even when the model as a whole may be subjected to varying forcings. The partial pressure of a gaseous constituent of air is the pressure which it alone would exert with unchanged temperature and number of moles per unit volume. The partial pressure of a dissolved gas in sea water is the partial pressure in air with which it would be in equilibrium. The partial pressure difference between sea water and air is positive when the partial pressure of the dissolved gas in sea water is greater than the partial pressure in air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c972ffd4-c5f0-11e6-ac20-5404a60d96b5.html">spco2abio</a></td>
    <td>Abiotic Surface Aqueous Partial Pressure of CO2</td>
    <td>Pa</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. The chemical formula for carbon dioxide is CO2. In ocean biogeochemistry models, an &quot;abiotic analogue&quot; is used to simulate the effect on a modelled variable when biological effects on ocean carbon concentration and alkalinity are ignored. The partial pressure of a gaseous constituent of air is the pressure which it alone would exert with unchanged temperature and number of moles per unit volume. The partial pressure of a dissolved gas in sea water is the partial pressure in air with which it would be in equilibrium. The partial pressure difference between sea water and air is positive when the partial pressure of the dissolved gas in sea water is greater than the partial pressure in air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/88d79ec028b6e797cd2db6f00f9b6910.html">spco2</a></td>
    <td>Surface Aqueous Partial Pressure of CO2</td>
    <td>Pa</td>
    <td>The surface called &quot;surface&quot; means the lower boundary of the atmosphere. The partial pressure of a dissolved gas in sea water is the partial pressure in air with which it would be in equilibrium. The partial pressure of a gaseous constituent of air is the pressure which it alone would exert with unchanged temperature and number of moles per unit volume. The chemical formula for carbon dioxide is CO2.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a13ed886b17e20cdae8b89b9ff8e4610.html">hfss</a></td>
    <td>Surface Upward Sensible Heat Flux</td>
    <td>W m-2</td>
    <td>The surface sensible heat flux, also called turbulent heat flux, is the exchange of heat between the surface and the air by motion of air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59176b14-9e49-11e5-803c-0d0b866b59f3.html">lithk</a></td>
    <td>Ice Sheet Thickness</td>
    <td>m</td>
    <td>The thickness of the ice sheet</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/414699d0-4f40-11e6-a814-ac72891c3257.html">tendlibmassbf</a></td>
    <td>Total Basal Mass Balance Flux</td>
    <td>kg s-1</td>
    <td>The total basal mass balance flux over land ice is a spatial integration of the basal mass balance flux</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/41469f3e-4f40-11e6-a814-ac72891c3257.html">tendlicalvf</a></td>
    <td>Total Calving Flux</td>
    <td>kg s-1</td>
    <td>The total calving flux over land ice is a spatial integration of the calving flux</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/56a47cf7cfc55a6e7e2cd20570ca58d2.html">loadnh4</a></td>
    <td>Load of NH4</td>
    <td>kg m-2</td>
    <td>The total dry mass of ammonium aerosol particles per unit area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/63f4c915f87b16a8be343d68da4cb588.html">loadbc</a></td>
    <td>Load of Black Carbon Aerosol</td>
    <td>kg m-2</td>
    <td>The total dry mass of black carbon aerosol particles per unit area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c23a39645d860d5a2d7f34ea91d1fd82.html">loaddust</a></td>
    <td>Load of Dust</td>
    <td>kg m-2</td>
    <td>The total dry mass of dust aerosol particles per unit area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ea403af77498d4ba904c34318ad875d2.html">loadno3</a></td>
    <td>Load of NO3</td>
    <td>kg m-2</td>
    <td>The total dry mass of nitrate aerosol particles per unit area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0b532d0ceea95666627dcf99b44f68c3.html">loadpoa</a></td>
    <td>Load of Dry Aerosol Primary Organic Matter</td>
    <td>kg m-2</td>
    <td>The total dry mass of primary particulate organic aerosol particles per unit area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e8d9deb887c24ae8008ca2179208f99d.html">loadss</a></td>
    <td>Load of Sea-Salt Aerosol</td>
    <td>kg m-2</td>
    <td>The total dry mass of sea salt aerosol particles per unit area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3ba3b98a96f7c6bc89f96004879811d3.html">loadsoa</a></td>
    <td>Load of Dry Aerosol Secondary Organic Matter</td>
    <td>kg m-2</td>
    <td>The total dry mass of secondary particulate organic aerosol particles per unit area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a17b2a3bcad6c41455a7e2474fb1fdcb.html">loadso4</a></td>
    <td>Load of SO4</td>
    <td>kg m-2</td>
    <td>The total dry mass of sulfate aerosol particles per unit area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c7452587dbc0d44ad81fc174a656ecea.html">lwsnl</a></td>
    <td>Liquid Water Content of Snow Layer</td>
    <td>kg m-2</td>
    <td>The total mass of liquid water contained interstitially within the whole depth of the snow layer of the land portion of a grid cell divided by the area of the land portion of the cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e6b31a1928879fcd3c92fe7b592f070e.html">lwp</a></td>
    <td>Liquid Water Path</td>
    <td>kg m-2</td>
    <td>The total mass of liquid water in cloud per unit area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/538266e8-bf01-11e6-a554-ac72891c3257.html">mrroIs</a></td>
    <td>Ice Sheet Total Runoff</td>
    <td>kg m-2 s-1</td>
    <td>The total run-off (including drainage through the base of the soil model) per unit area leaving the land portion of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e0a0f457ec117b27ca8353b11bf9d4fa.html">mrro</a></td>
    <td>Total Runoff</td>
    <td>kg m-2 s-1</td>
    <td>The total run-off (including drainage through the base of the soil model) per unit area leaving the land portion of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4146943a-4f40-11e6-a814-ac72891c3257.html">tendacabf</a></td>
    <td>Total Surface Mass Balance Flux</td>
    <td>kg s-1</td>
    <td>The total surface mass balance flux over land ice is a spatial integration of the surface mass balance flux</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/26a31ad76858198bd4d719aafeebe801.html">mrros</a></td>
    <td>Surface Runoff</td>
    <td>kg m-2 s-1</td>
    <td>The total surface run off leaving the land portion of the grid cell (excluding drainage through the base of the soil model).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53825e00-bf01-11e6-a554-ac72891c3257.html">snmIs</a></td>
    <td>Ice Sheet Surface Snow Melt</td>
    <td>kg m-2 s-1</td>
    <td>The total surface snow melt rate on the land portion of the grid cell divided by the land area in the grid cell; report as zero for snow-free land regions and missing where there is no land.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5652800cc64fd945cc990547aee633a1.html">snm</a></td>
    <td>Surface Snow Melt</td>
    <td>kg m-2 s-1</td>
    <td>The total surface snow melt rate on the land portion of the grid cell divided by the land area in the grid cell; report as zero for snow-free land regions and missing where there is no land.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917c654-9e49-11e5-803c-0d0b866b59f3.html">fNup</a></td>
    <td>Total Plant Nitrogen Uptake (Sum of Ammonium and Nitrate) Irrespective of the Source of Nitrogen</td>
    <td>kg m-2 s-1</td>
    <td>The uptake of nitrogen by fixation: nitrogen fixation means the uptake of nitrogen gas directly from the atmosphere. </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917e51c-9e49-11e5-803c-0d0b866b59f3.html">siflswutop</a></td>
    <td>Upwelling Shortwave Flux over Sea Ice</td>
    <td>W m-2</td>
    <td>The upwelling shortwave flux over sea ice (always negative)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/14277916-b574-11e6-9ed4-5404a60d96b5.html">yvelmean</a></td>
    <td>Y-Component of Land Ice Vertical Mean Velocity</td>
    <td>m s-1</td>
    <td>The vertical mean land ice velocity is the average from the bedrock to the surface of the ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/14277e02-b574-11e6-9ed4-5404a60d96b5.html">xvelmean</a></td>
    <td>X-Component of Land Ice Vertical Mean Velocity</td>
    <td>m s-1</td>
    <td>The vertical mean land ice velocity is the average from the bedrock to the surface of the ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e80c6-9e49-11e5-803c-0d0b866b59f3.html">siu</a></td>
    <td>X-Component of Sea-Ice Velocity</td>
    <td>m s-1</td>
    <td>The x-velocity of ice on native model grid</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59141748-9e49-11e5-803c-0d0b866b59f3.html">siv</a></td>
    <td>Y-Component of Sea-Ice Velocity</td>
    <td>m s-1</td>
    <td>The y-velocity of ice on native model grid</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/69c17331aebbebfc295d5b7af7f0ef8b.html">zostoga</a></td>
    <td>Global Average Thermosteric Sea Level Change</td>
    <td>m</td>
    <td>There is no CMIP6 request for zosga nor zossga.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3f3051c6-b89b-11e6-be04-ac72891c3257.html">fLulccAtmLut</a></td>
    <td>Carbon Transferred Directly to Atmosphere Due to any Land-Use or Land-Cover Change Activities</td>
    <td>kg m-2 s-1</td>
    <td>This annual mean flux refers to the transfer of carbon directly to the atmosphere due to any land-use or land-cover change activities.  Include carbon transferred due to deforestation or agricultural directly into atmosphere, and  emissions form anthropogenic pools into atmosphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3f3067e2-b89b-11e6-be04-ac72891c3257.html">fLulccResidueLut</a></td>
    <td>Carbon Transferred to Soil or Litter Pools Due to Land-Use or Land-Cover Change Processes on Tile</td>
    <td>kg m-2 s-1</td>
    <td>This annual mean flux refers to the transfer of carbon into soil or litter pools due to any land use or land-cover change activities</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3f30714c-b89b-11e6-be04-ac72891c3257.html">fLulccProductLut</a></td>
    <td>Carbon Harvested Due to Land-Use or Land-Cover Change Process That Enters Anthropogenic Product Pools on Tile</td>
    <td>kg m-2 s-1</td>
    <td>This annual mean flux refers to the transfer of carbon primarily through harvesting land use into anthropogenic product pools, e.g.,deforestation or wood harvesting from primary or secondary lands, food harvesting on croplands, harvesting (grazing) by animals on pastures.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/8d0958ad5a4eabc97fc1896e847b00fe.html">sfdsi</a></td>
    <td>Downward Sea Ice Basal Salt Flux</td>
    <td>kg m-2 s-1</td>
    <td>This field is physical, and it arises since sea ice has a nonzero salt content, so it exchanges salt with the liquid ocean upon melting and freezing.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ced45b8b1f2797c54425755202dce533.html">sfriver</a></td>
    <td>Salt Flux into Sea Water from Rivers</td>
    <td>kg m-2 s-1</td>
    <td>This field is physical, and it arises when rivers carry a nonzero salt content.  Often this is zero, with rivers assumed to be fresh.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590dcb0e-9e49-11e5-803c-0d0b866b59f3.html">tntd</a></td>
    <td>Tendency of Air Temperature Due to Numerical Diffusion</td>
    <td>K s-1</td>
    <td>This includes any horizontal or vertical numerical temperature diffusion not associated with the parametrized moist physics or the resolved dynamics.  For example, any vertical diffusion which is part of the boundary layer mixing scheme should be excluded, as should any diffusion which is included in the terms from the resolved dynamics.   This term is required to check the closure of the temperature budget.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/11f31866ee4fca2f68e25ccd529ede8a.html">hfevapds</a></td>
    <td>Temperature Flux Due to Evaporation Expressed as Heat Flux out of Sea Water</td>
    <td>W m-2</td>
    <td>This is defined as &quot;where ice_free_sea over sea&quot;</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b16fab4e82317586d4bc72d786a6a1db.html">rlntds</a></td>
    <td>Surface Net Downward Longwave Radiation</td>
    <td>W m-2</td>
    <td>This is defined as &quot;where ice_free_sea over sea&quot;</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/af7707ac309cab4b2f2ce461f89ab741.html">hfrainds</a></td>
    <td>Temperature Flux Due to Rainfall Expressed as Heat Flux into Sea Water</td>
    <td>W m-2</td>
    <td>This is defined as &quot;where ice_free_sea over sea&quot;; i.e., the total flux (considered here) entering the ice-free portion of the grid cell divided by the area of the ocean portion of the grid cell.  All such heat fluxes are computed based on Celsius scale.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3723cf3c0aef7741d065625c75d34d9a.html">reffsnows</a></td>
    <td>Hydrometeor Effective Radius of Stratiform Snowfall</td>
    <td>m</td>
    <td>This is defined as the in-cloud ratio of the third moment over the second moment of the particle size distribution (obtained by considering only the cloudy portion of the grid cell).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/40386a39f65c07f0fbb689b89eb3a004.html">reffsnowc</a></td>
    <td>Hydrometeor Effective Radius of Convective Snowfall</td>
    <td>m</td>
    <td>This is defined as the in-cloud ratio of the third moment over the second moment of the particle size distribution (obtained by considering only the cloudy portion of the grid cell).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/60439f9beed734902e807ce8c572291c.html">reffrainc</a></td>
    <td>Hydrometeor Effective Radius of Convective Rainfall</td>
    <td>m</td>
    <td>This is defined as the in-cloud ratio of the third moment over the second moment of the particle size distribution (obtained by considering only the cloudy portion of the grid cell).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c2270065bb39bfa4fbf0d13a78dfa8a1.html">reffclis</a></td>
    <td>Hydrometeor Effective Radius of Stratiform Cloud Ice</td>
    <td>m</td>
    <td>This is defined as the in-cloud ratio of the third moment over the second moment of the particle size distribution (obtained by considering only the cloudy portion of the grid cell).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/cbd8a804ef6ec2ec45913e74f25d973f.html">reffgrpls</a></td>
    <td>Hydrometeor Effective Radius of Stratiform Graupel</td>
    <td>m</td>
    <td>This is defined as the in-cloud ratio of the third moment over the second moment of the particle size distribution (obtained by considering only the cloudy portion of the grid cell).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d7f5ed6071c26983b8097d0d4a29a4d0.html">reffrains</a></td>
    <td>Hydrometeor Effective Radius of Stratiform Rainfall</td>
    <td>m</td>
    <td>This is defined as the in-cloud ratio of the third moment over the second moment of the particle size distribution (obtained by considering only the cloudy portion of the grid cell).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d80ff3a0dec0b1256a0943aadab66813.html">reffclic</a></td>
    <td>Hydrometeor Effective Radius of Convective Cloud Ice</td>
    <td>m</td>
    <td>This is defined as the in-cloud ratio of the third moment over the second moment of the particle size distribution (obtained by considering only the cloudy portion of the grid cell).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ad2c59f6784b7b6a8b2a95424a1a642d.html">hflso</a></td>
    <td>Surface Downward Latent Heat Flux</td>
    <td>W m-2</td>
    <td>This is defined as with the cell methods string: where ice_free_sea over sea</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/cc1b9e3073d751143fe8ab63ca9fcc45.html">fco2antt</a></td>
    <td>Carbon Mass Flux into Atmosphere Due to All Anthropogenic Emissions of CO2</td>
    <td>kg m-2 s-1</td>
    <td>This is requested only for the emission-driven coupled carbon climate model runs.  Does not include natural fire sources but, includes all anthropogenic sources, including fossil fuel use, cement production, agricultural burning, and sources associated with anthropogenic land use change excluding forest regrowth.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7539774a693b6a99db7e174343a488bd.html">zos</a></td>
    <td>Sea Surface Height Above Geoid</td>
    <td>m</td>
    <td>This is the dynamic sea level, so should have zero global area mean. It should not include inverse barometer depressions from sea ice.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1ace52320dc433dd648bb3dfbfc79935.html">rsntds</a></td>
    <td>Net Downward Shortwave Radiation at Sea Water Surface</td>
    <td>W m-2</td>
    <td>This is the flux into the surface of liquid sea water only. This excludes shortwave flux absorbed by sea ice, but includes any light that passes through the ice and is absorbed by the ocean.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/04666369846efb977098a42584d9bd42.html">dems</a></td>
    <td>Stratiform Cloud Emissivity</td>
    <td>1</td>
    <td>This is the in-cloud emissivity obtained by considering only the cloudy portion of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/583cc0e465e20507f5aff35387691c4b.html">demc</a></td>
    <td>Convective Cloud Emissivity</td>
    <td>1</td>
    <td>This is the in-cloud emissivity obtained by considering only the cloudy portion of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7c0c62d0dc4787a601a1bc1c4e3f7597.html">dtauc</a></td>
    <td>Convective Cloud Optical Depth</td>
    <td>1</td>
    <td>This is the in-cloud optical depth obtained by considering only the cloudy portion of the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ffa75c4442ad340cb0cdeb11aa19f044.html">dtaus</a></td>
    <td>Stratiform Cloud Optical Depth</td>
    <td>1</td>
    <td>This is the in-cloud optical depth obtained by considering only the cloudy portion of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/db14915fa8f71225f7775d0d922197ec.html">hfds</a></td>
    <td>Downward Heat Flux at Sea Water Surface</td>
    <td>W m-2</td>
    <td>This is the net flux of heat entering the liquid water column through its upper surface (excluding any &quot;flux adjustment&quot;) .</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/337d362541c3e2a3f907abcaffa5c262.html">nbp</a></td>
    <td>Carbon Mass Flux out of Atmosphere Due to Net Biospheric Production on Land</td>
    <td>kg m-2 s-1</td>
    <td>This is the net mass flux of carbon from atmosphere into land, calculated as photosynthesis MINUS the sum of  plant and soil respiration, carbon fluxes from fire, harvest, grazing  and land use change. Positive flux is into the land.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914ccba-9e49-11e5-803c-0d0b866b59f3.html">treeFracBdlDcd</a></td>
    <td>Broadleaf Deciduous Tree Area Percentage</td>
    <td>%</td>
    <td>This is the percentage of the entire grid cell that is covered by broadleaf deciduous trees.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914dbb0-9e49-11e5-803c-0d0b866b59f3.html">treeFracBdlEvg</a></td>
    <td>Broadleaf Evergreen Tree Area Percentage</td>
    <td>%</td>
    <td>This is the percentage of the entire grid cell that is covered by broadleaf evergreen trees.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59131672-9e49-11e5-803c-0d0b866b59f3.html">treeFracNdlDcd</a></td>
    <td>Needleleaf Deciduous Tree Area Percentage</td>
    <td>%</td>
    <td>This is the percentage of the entire grid cell that is covered by needleleaf deciduous trees.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59144f06-9e49-11e5-803c-0d0b866b59f3.html">treeFracNdlEvg</a></td>
    <td>Needleleaf Evergreen Tree Area Percentage</td>
    <td>%</td>
    <td>This is the percentage of the entire grid cell that is covered by needleleaf evergreen trees.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5e49c0b73ac161d5e5dd05173416c400.html">fco2fos</a></td>
    <td>Carbon Mass Flux into Atmosphere Due to Fossil Fuel Emissions of CO2</td>
    <td>kg m-2 s-1</td>
    <td>This is the prescribed anthropogenic CO2 flux from fossil fuel use, including cement production, and flaring (but not from land-use changes, agricultural burning, forest regrowth, etc.)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/df06d844bd95ddd2f0f62f54941c4b88.html">nppLeaf</a></td>
    <td>Net Primary Production Allocated to Leaves as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>This is the rate of carbon uptake by leaves due to NPP</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/091b217c2450d012fb2e192dee04053f.html">nppRoot</a></td>
    <td>Net Primary Production Allocated to Roots as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>This is the rate of carbon uptake by roots due to NPP</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fb5bd0286cdca991d0f67c498513f602.html">nppWood</a></td>
    <td>Net Primary Production Allocated to Wood as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>This is the rate of carbon uptake by wood due to NPP</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/06942529e05aac1e9a39ca1f5737af2f.html">tauucorr</a></td>
    <td>Sea Water Surface Downward X Stress Correction</td>
    <td>N m-2</td>
    <td>This is the stress on the liquid ocean from overlying atmosphere, sea ice, ice shelf, etc.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/593ed46e925a8bce9de9eb47f5e72632.html">tauvo</a></td>
    <td>Sea Water Surface Downward Y Stress</td>
    <td>N m-2</td>
    <td>This is the stress on the liquid ocean from overlying atmosphere, sea ice, ice shelf, etc.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ab495084beb82a29c24bf6c226fd0e57.html">tauvcorr</a></td>
    <td>Sea Water Surface Downward Y Stress Correction</td>
    <td>N m-2</td>
    <td>This is the stress on the liquid ocean from overlying atmosphere, sea ice, ice shelf, etc.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d1cfe9e20a66d3e922554248677efaba.html">tauuo</a></td>
    <td>Sea Water Surface Downward X Stress</td>
    <td>N m-2</td>
    <td>This is the stress on the liquid ocean from overlying atmosphere, sea ice, ice shelf, etc.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/523886b41b608ce9215833b0406b9c27.html">emioa</a></td>
    <td>Primary Emission and Chemical Production of Dry Aerosol Organic Matter</td>
    <td>kg m-2 s-1</td>
    <td>This is the sum of total emission of primary organic aerosol (POA) and total production of secondary organic aerosol (SOA) (emipoa+chepsoa). Here, mass refers to the mass of organic matter, not mass of organic carbon alone. We recommend a scale factor of POM=1.4*OC, unless your model has more detailed info available.  Integrate 3D chemical production and emission field vertically to 2d field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/299fb9d19040c4aa3862644286261ad2.html">fco2nat</a></td>
    <td>Surface Carbon Mass Flux into the Atmosphere Due to Natural Sources</td>
    <td>kg m-2 s-1</td>
    <td>This is what the atmosphere sees (on its own grid).  This field should be equivalent to the combined natural fluxes of carbon  that account for natural exchanges between the atmosphere and land (nep) or ocean (fgco2) reservoirs.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/46bc4ce008d1306ea0780510304cfa88.html">t20d</a></td>
    <td>Depth of 20 degree Celsius Isotherm</td>
    <td>m</td>
    <td>This quantity, sometimes called the &quot;isotherm depth&quot;, is the depth (if it exists) at which the sea water potential temperature equals some specified value. This value should be specified in a scalar coordinate variable. Depth is the vertical distance below the surface. Potential temperature is the temperature a parcel of air or sea water would have if moved adiabatically to sea level pressure.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/15fd6126b9fb057118c71df94403e30c.html">tsn</a></td>
    <td>Snow Internal Temperature</td>
    <td>K</td>
    <td>This temperature is averaged over all the snow in the grid cell that rests on land or land ice.  When computing the time-mean here, the time samples, weighted by the mass of snow on the land portion of the grid cell, are accumulated and then divided by the sum of the weights.   Reported as missing in regions free of snow on land.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5382451e-bf01-11e6-a554-ac72891c3257.html">tsnIs</a></td>
    <td>Ice Sheet Snow Internal Temperature</td>
    <td>K</td>
    <td>This temperature is averaged over all the snow in the grid cell that rests on land or land ice.  When computing the time-mean here, the time samples, weighted by the mass of snow on the land portion of the grid cell, are accumulated and then divided by the sum of the weights.   Reported as missing in regions free of snow on land.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d0c290e7deb148591b62f8f050a885c2.html">vsfsit</a></td>
    <td>Virtual Salt Flux into Sea Water Due to Sea Ice Thermodynamics</td>
    <td>kg m-2 s-1</td>
    <td>This variable measures the virtual salt flux into sea water due to the melting of sea ice. It is set to zero in models which receive a real water flux.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1bb6dca6b08a4e887ded8a455ef04941.html">agessc</a></td>
    <td>Sea Water Age Since Surface Contact</td>
    <td>yr</td>
    <td>Time elapsed since water was last in surface layer of the ocean.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/71a3667c9d9a8b9af56e22757461b7d0.html">rlutcs4co2</a></td>
    <td>TOA Outgoing Clear-Sky Longwave Radiation 4XCO2 Atmosphere</td>
    <td>W m-2</td>
    <td>Top-of-atmosphere outgoing clear-sky longwave radiation calculated using carbon dioxide concentrations increased fourfold</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0888eef64215cf18affe93ca142c95ad.html">rlut4co2</a></td>
    <td>TOA Outgoing Longwave Radiation 4XCO2 Atmosphere</td>
    <td>W m-2</td>
    <td>Top-of-atmosphere outgoing longwave radiation calculated using carbon dioxide concentrations increased fourfold</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0afac-acb7-11e6-b5ee-ac72891c3257.html">gppGrass</a></td>
    <td>Gross Primary Production on Grass Tiles as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total GPP of grass in the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0c47e-acb7-11e6-b5ee-ac72891c3257.html">gppShrub</a></td>
    <td>Gross Primary Production on Shrub Tiles as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total GPP of shrubs in the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f10236-acb7-11e6-b5ee-ac72891c3257.html">gppTree</a></td>
    <td>Gross Primary Production on Tree Tiles as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total GPP of trees in the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0b8d0-acb7-11e6-b5ee-ac72891c3257.html">nppGrass</a></td>
    <td>Net Primary Production on Grass Tiles as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total NPP of grass in the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0f052-acb7-11e6-b5ee-ac72891c3257.html">nppShrub</a></td>
    <td>Net Primary Production on Shrub Tiles as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total NPP of shrubs in the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f10e7a-acb7-11e6-b5ee-ac72891c3257.html">nppTree</a></td>
    <td>Net Primary Production on Tree Tiles as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total NPP of trees in the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f09af8-acb7-11e6-b5ee-ac72891c3257.html">fNfert</a></td>
    <td>Total Nitrogen Added for Cropland Fertilisation (Artificial and Manure)</td>
    <td>kg m-2 s-1</td>
    <td>Total Nitrogen added for cropland fertilisation (artificial and manure). Relative to total land area of a grid cell, not relative to agricultural area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f105a6-acb7-11e6-b5ee-ac72891c3257.html">raGrass</a></td>
    <td>Autotrophic Respiration on Grass Tiles as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total RA of grass in the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f108a8-acb7-11e6-b5ee-ac72891c3257.html">raShrub</a></td>
    <td>Autotrophic Respiration on Shrub Tiles as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total RA of shrubs in the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0b5e2-acb7-11e6-b5ee-ac72891c3257.html">raTree</a></td>
    <td>Autotrophic Respiration on Tree Tiles as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total RA of trees in the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0beac-acb7-11e6-b5ee-ac72891c3257.html">rhGrass</a></td>
    <td>Heterotrophic Respiration on Grass Tiles as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total RH of grass in the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0f354-acb7-11e6-b5ee-ac72891c3257.html">rhShrub</a></td>
    <td>Heterotrophic Respiration on Shrub Tiles as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total RH of shrubs in the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f1117c-acb7-11e6-b5ee-ac72891c3257.html">rhTree</a></td>
    <td>Heterotrophic Respiration on Tree Tiles as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total RH of trees in the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/15f4ad18bed7c35304209c651ef3758a.html">od550bc</a></td>
    <td>Black Carbon Optical Thickness at 550nm</td>
    <td>1</td>
    <td>Total aerosol AOD due to black carbon aerosol at a wavelength of 550 nanometres.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59130948-9e49-11e5-803c-0d0b866b59f3.html">od443dust</a></td>
    <td>Optical Thickness at 443nm Dust</td>
    <td>1</td>
    <td>Total aerosol AOD due to dust aerosol at a wavelength of 443 nanometres.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6bc406259290f4e4beaaaf960455d779.html">od550dust</a></td>
    <td>Dust Optical Thickness at 550nm</td>
    <td>1</td>
    <td>Total aerosol AOD due to dust aerosol at a wavelength of 550 nanometres.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914c0ee-9e49-11e5-803c-0d0b866b59f3.html">od865dust</a></td>
    <td>Dust Optical Depth at 865nm</td>
    <td>1</td>
    <td>Total aerosol AOD due to dust aerosol at a wavelength of 865 nanometres.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9e383b9714070f2b9f44effca08f50ac.html">od550no3</a></td>
    <td>Nitrate Aerosol Optical Depth at 550nm</td>
    <td>1</td>
    <td>Total aerosol AOD due to nitrate aerosol at a wavelength of 550 nanometres.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/88dbb9df33c0581eefa084932d25ad0a.html">od550oa</a></td>
    <td>Total Organic Aerosol Optical Depth at 550nm</td>
    <td>1</td>
    <td>Total aerosol AOD due to organic aerosol at a wavelength of 550 nanometres.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a4105b51d498d46985677801436e7649.html">od550ss</a></td>
    <td>Sea-Salt Aerosol Optical Depth at 550nm</td>
    <td>1</td>
    <td>Total aerosol AOD due to sea salt aerosol at a wavelength of 550 nanometres.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b9ca453bfa3c606401892e5768ca7d6c.html">od550so4</a></td>
    <td>Sulfate Aerosol Optical Depth at 550nm</td>
    <td>1</td>
    <td>Total aerosol AOD due to sulfate aerosol at a wavelength of 550 nanometres.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917b45c-9e49-11e5-803c-0d0b866b59f3.html">siextentn</a></td>
    <td>Sea-Ice Extent North</td>
    <td>1e6 km2</td>
    <td>Total area of all Northern-Hemisphere grid cells that are covered by at least 15 % areal fraction of sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e9ed0-9e49-11e5-803c-0d0b866b59f3.html">siextents</a></td>
    <td>Sea-Ice Extent South</td>
    <td>1e6 km2</td>
    <td>Total area of all Southern-Hemisphere grid cells that are covered by at least 15 % areal fraction of sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e00b0-9e49-11e5-803c-0d0b866b59f3.html">iareafl</a></td>
    <td>Area Covered by Floating Ice Shelves</td>
    <td>m2</td>
    <td>Total area of the floating ice shelves (the component of ice sheet that flows over ocean)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/41468a3a-4f40-11e6-a814-ac72891c3257.html">iareagr</a></td>
    <td>Area Covered by Grounded Ice Sheet</td>
    <td>m2</td>
    <td>Total area of the grounded ice sheets (the component of ice sheet resting over bedrock)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ddf060894b16cf89e906ecfedbba4ffb.html">co2mass</a></td>
    <td>Total Atmospheric Mass of CO2</td>
    <td>kg</td>
    <td>Total atmospheric mass of Carbon Dioxide</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591491e6-9e49-11e5-803c-0d0b866b59f3.html">raRoot</a></td>
    <td>Total Respiration from Roots as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total autotrophic respiration from all belowground plant parts.  This has benchmarking value because the sum of Rh and root respiration can be compared to observations of total soil respiration.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ee584-9e49-11e5-803c-0d0b866b59f3.html">sidconcdyn</a></td>
    <td>Sea-Ice Area Percentage Tendency Due to Dynamics</td>
    <td>s-1</td>
    <td>Total change in sea-ice area fraction through dynamics-related processes (advection, divergence...)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590dc60e-9e49-11e5-803c-0d0b866b59f3.html">sidconcth</a></td>
    <td>Sea-Ice Area Percentage Tendency Due to Thermodynamics</td>
    <td>s-1</td>
    <td>Total change in sea-ice area fraction through thermodynamic processes</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d95d0-9e49-11e5-803c-0d0b866b59f3.html">sidmassth</a></td>
    <td>Sea-Ice Mass Change from Thermodynamics</td>
    <td>kg m-2 s-1</td>
    <td>Total change in sea-ice mass from thermodynamic processes divided by grid-cell area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591357b8-9e49-11e5-803c-0d0b866b59f3.html">sidmassdyn</a></td>
    <td>Sea-Ice Mass Change from Dynamics</td>
    <td>kg m-2 s-1</td>
    <td>Total change in sea-ice mass through dynamics-related processes (advection,...) divided by grid-cell area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ce9ab9b945fcc86013ad10431d8f252e.html">cltcalipso</a></td>
    <td>CALIPSO Total Cloud Cover Percentage</td>
    <td>%</td>
    <td>Total cloud area fraction (reported as a percentage) for the whole atmospheric column, as seen by the  Cloud-Aerosol Lidar and Infrared Pathfinder Satellite Observation (CALIPSO) instrument. Includes both large-scale and convective cloud.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5912dd74-9e49-11e5-803c-0d0b866b59f3.html">cltmodis</a></td>
    <td>MODIS Total Cloud Cover Percentage</td>
    <td>%</td>
    <td>Total cloud area fraction (reported as a percentage) for the whole atmospheric column, as seen by the  Moderate Resolution Imaging Spectroradiometer (MODIS). Includes both large-scale and convective cloud.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b045cae1f65ba99831648f136b309e91.html">cltisccp</a></td>
    <td>ISCCP Total Cloud Cover Percentage</td>
    <td>%</td>
    <td>Total cloud area fraction (reported as a percentage) for the whole atmospheric column, as seen by the International Satellite Cloud Climatology Project (ISCCP) analysis. Includes both large-scale and convective cloud.  (MODIS). Includes both large-scale and convective cloud.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7c2249d424dde72f8616d42870a9d425.html">clt</a></td>
    <td>Total Cloud Cover Percentage</td>
    <td>%</td>
    <td>Total cloud area fraction (reported as a percentage) for the whole atmospheric column, as seen from the surface or the top of the atmosphere. Includes both large-scale and convective cloud.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/96a44ea6-b096-11e6-aab6-ac72891c3257.html">bry</a></td>
    <td>Total Inorganic Bromine Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Total family (the sum of all appropriate species in the model) ; list the species in the netCDF header, e.g. Bry = Br + BrO + HOBr + HBr + BrONO2 + BrCl Definition: Total inorganic bromine (e.g., HBr and inorganic bromine oxides and radicals (e.g., BrO, atomic bromine (Br), bromine nitrate (BrONO2)) resulting from degradation of bromine-containing organic source gases (halons, methyl bromide, VSLS), and natural inorganic bromine sources (e.g., volcanoes, sea salt, and other aerosols) add comment attribute with detailed description about how the model calculates these fields</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/afef6490-b096-11e6-aab6-ac72891c3257.html">cly</a></td>
    <td>Total Inorganic Chlorine Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Total family (the sum of all appropriate species in the model) ; list the species in the netCDF header, e.g. Cly = HCl + ClONO2 + HOCl + ClO + Cl + 2*Cl2O2 +2Cl2 + OClO + BrCl Definition: Total inorganic stratospheric chlorine (e.g., HCl, ClO) resulting from degradation of chlorine-containing source gases (CFCs, HCFCs, VSLS), and natural inorganic chlorine sources (e.g., sea salt and other aerosols) add comment attribute with detailed description about how the model calculates these fields</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e29fbc42-b095-11e6-aab6-ac72891c3257.html">noy</a></td>
    <td>Total Reactive Nitrogen Volume Mixing Ratio</td>
    <td>mol mol-1</td>
    <td>Total family (the sum of all appropriate species in the model); list the species in the netCDF header, e.g. NOy = N + NO + NO2 + NO3 + HNO3 + 2N2O5 + HNO4 + ClONO2 + BrONO2 Definition: Total reactive nitrogen; usually includes atomic nitrogen (N), nitric oxide (NO), NO2, nitrogen trioxide (NO3), dinitrogen radical (N2O5), nitric acid (HNO3), peroxynitric acid (HNO4), BrONO2, ClONO2 add comment attribute with detailed description about how the model calculates these fields</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914d462-9e49-11e5-803c-0d0b866b59f3.html">fNgas</a></td>
    <td>Total Nitrogen Lost to the Atmosphere (Sum of NHx, NOx, N2O, N2)</td>
    <td>kg m-2 s-1</td>
    <td>Total flux of Nitrogen from the land into the atmosphere.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0353bea4-dca0-11e5-81c9-5404a60d96b5.html">siflfwdrain</a></td>
    <td>Freshwater Flux from Sea-Ice Surface</td>
    <td>kg m-2 s-1</td>
    <td>Total flux of fresh water from sea-ice surface into underlying ocean. This combines both surface melt water that drains directly into the ocean and the drainage of surface melt pond. By definition, this flux is always positive.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590dce42-9e49-11e5-803c-0d0b866b59f3.html">siflfwbot</a></td>
    <td>Freshwater Flux from Sea Ice</td>
    <td>kg m-2 s-1</td>
    <td>Total flux of fresh water from water into sea ice divided by grid-cell area; This flux is negative during ice growth (liquid water mass decreases, hence upward flux of freshwater), positive during ice melt (liquid water mass increases, hence downward flux of freshwater)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/28a54e8b5b73c4ae915a82ed99c74459.html">graz</a></td>
    <td>Total Grazing of Phytoplankton by Zooplankton</td>
    <td>mol m-3 s-1</td>
    <td>Total grazing of phytoplankton by zooplankton defined as tendency of moles of carbon per cubic metre.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914308e-9e49-11e5-803c-0d0b866b59f3.html">climodis</a></td>
    <td>MODIS Ice Cloud Area Percentage</td>
    <td>%</td>
    <td>Total ice cloud area fraction (reported as a percentage) for the whole atmospheric column, as seen by the  Moderate Resolution Imaging Spectroradiometer (MODIS). </td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590eaf60-9e49-11e5-803c-0d0b866b59f3.html">sw</a></td>
    <td>Surface Water Storage</td>
    <td>kg m-2</td>
    <td>Total liquid water storage, other than soil, snow or interception storage (i.e. lakes, river channel or depression storage).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59130394-9e49-11e5-803c-0d0b866b59f3.html">lifmassbf</a></td>
    <td>Land Ice Vertical Front Mass Balance Flux</td>
    <td>kg m-2 s-1</td>
    <td>Total mass balance at the ice front (or vertical margin). It includes both iceberg calving and melt on vertical ice front</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590c7920-9e49-11e5-803c-0d0b866b59f3.html">sisaltmass</a></td>
    <td>Mass of Salt in Sea Ice per Area</td>
    <td>kg m-2</td>
    <td>Total mass of all salt in sea ice divided by grid-cell area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7619324f698659657f466d5dc6660b9d.html">masso</a></td>
    <td>Sea Water Mass</td>
    <td>kg</td>
    <td>Total mass of liquid sea water. For Boussinesq models, report this diagnostic as Boussinesq reference density times total volume.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917184e-9e49-11e5-803c-0d0b866b59f3.html">simass</a></td>
    <td>Sea-Ice Mass per Area</td>
    <td>kg m-2</td>
    <td>Total mass of sea ice divided by grid-cell area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914a6b8-9e49-11e5-803c-0d0b866b59f3.html">sisnmass</a></td>
    <td>Snow Mass per Area</td>
    <td>kg m-2</td>
    <td>Total mass of snow on sea ice divided by sea-ice area.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c682767d841fcdb714a3914519fabf93.html">od550soa</a></td>
    <td>Particulate Organic Aerosol Optical Depth at 550nm</td>
    <td>1</td>
    <td>Total organic aerosol AOD due to secondary aerosol  at a wavelength of 550 nanometres.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/79fec430c1dca1ac4b48b0fc36c48449.html">toz</a></td>
    <td>Total Column Ozone</td>
    <td>m</td>
    <td>Total ozone column calculated at 0 degrees C and 1 bar, such that 1m = 1e5 DU.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a86d0b2abcfe5055d91478b5c771bf34.html">volo</a></td>
    <td>Sea Water Volume</td>
    <td>m3</td>
    <td>Total volume of liquid sea water.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591801d2-9e49-11e5-803c-0d0b866b59f3.html">sivol</a></td>
    <td>Sea-Ice Volume per Area</td>
    <td>m</td>
    <td>Total volume of sea ice divided by grid-cell area (this used to be called ice thickness in CMIP5)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e536c-9e49-11e5-803c-0d0b866b59f3.html">snwc</a></td>
    <td> snow water equivalent intercepted by the vegetation</td>
    <td>kg m-2</td>
    <td>Total water mass of the snowpack (liquid or frozen), averaged over a grid cell and intercepted by the canopy.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9122e7b627c429163fd0857dc366e14e.html">masscello</a></td>
    <td>Ocean Grid-Cell Mass per Area</td>
    <td>kg m-2</td>
    <td>Tracer grid-cell mass per unit area used for computing tracer budgets. For Boussinesq models with static ocean grid cell thickness, masscello = rhozero*thickcello, where thickcello is static cell thickness and rhozero is constant Boussinesq reference density. More generally, masscello is time dependent and reported as part of Omon.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9522ca96d0b066ebe8defd5541de0582.html">epfy</a></td>
    <td>Northward Component of the Eliassen-Palm Flux</td>
    <td>m3 s-2</td>
    <td>Transformed Eulerian Mean Diagnostics Meridional component Fy of Eliassen-Palm (EP) flux (Fy, Fz) derived from 6hr or higher frequency fields (use daily fields or 12 hr fields if the 6 hr are not available). Please use the definitions given by equation 3.5.3a of Andrews, Holton and Leovy text book, but scaled by density to have units m3 s-2.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/85631e0f7a8fdcb10737a525f4134181.html">epfz</a></td>
    <td>Upward Component of the Eliassen-Palm Flux</td>
    <td>m3 s-2</td>
    <td>Transformed Eulerian Mean Diagnostics Meridional component Fz of the Eliassen-Palm (EP) flux (Fy, Fz) derived from 6hr or higher frequency fields (use daily fields or 12 hr fields if the 6 hr are not available). Please use the definitions given by equation 3.5.3b of Andrews, Holton and Leovy text book, but scaled by density to have units m3 s-2.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ba7be4134a9cf4838434bf204d80b903.html">vtem</a></td>
    <td>Transformed Eulerian Mean Northward Wind</td>
    <td>m s-1</td>
    <td>Transformed Eulerian Mean Diagnostics v*, meridional component of the residual meridional circulation (v*, w*) derived from 6 hr or higher frequency data fields (use instantaneous daily fields or 12 hr fields if the 6 hr data are not available).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c64364df884a3cebaa7aebb664260776.html">wtem</a></td>
    <td>Transformed Eulerian Mean Upward Wind</td>
    <td>m s-1</td>
    <td>Transformed Eulerian Mean Diagnostics w*, upward component of the residual meridional circulation (v*, w*) derived from 6 hr or higher frequency data fields (use instantaneous daily fields or 12 hr fields if the 6 hr data are not available). Scale height: 6950 m</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/19e117c2298a016c96c496ee22f39976.html">tran</a></td>
    <td>Transpiration</td>
    <td>kg m-2 s-1</td>
    <td>Transpiration (may include dew formation as a negative flux).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/91d62d57f0a58495fdf4358dc3ba1165.html">mfo</a></td>
    <td>Sea Water Transport</td>
    <td>kg s-1</td>
    <td>Transport across_line means that which crosses a particular line on the Earth's surface; formally this means the integral along the line of the normal component of the transport.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4b1f3e86dde718e8c9697df0c3992c06.html">tropoz</a></td>
    <td>Tropospheric Ozone Column</td>
    <td>m</td>
    <td>Tropospheric ozone column, should be consistent with definition of tropopause used to calculate the pressure of the tropopause (ptp). Calculated at 0 degrees C and 1 bar, such that 1m = 1e5 DU.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59130bf0-9e49-11e5-803c-0d0b866b59f3.html">thetaot2000</a></td>
    <td>Depth Average Potential Temperature of Upper 2000m</td>
    <td>degC</td>
    <td>Upper 2000m, 2D field</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d2b9a-9e49-11e5-803c-0d0b866b59f3.html">thetaot300</a></td>
    <td>Depth Average Potential Temperature of Upper 300m</td>
    <td>degC</td>
    <td>Upper 300m, 2D field</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590eda94-9e49-11e5-803c-0d0b866b59f3.html">thetaot700</a></td>
    <td>Depth Average Potential Temperature of Upper 700m</td>
    <td>degC</td>
    <td>Upper 700m, 2D field</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/14277100-b574-11e6-9ed4-5404a60d96b5.html">litemptop</a></td>
    <td>Temperature at Top of Ice Sheet Model</td>
    <td>K</td>
    <td>Upper boundary temperature that is used to force ice sheet models. It is the temperature at the base of the snowpack models, and does not vary with seasons. Report surface temperature of ice sheet where snow thickness is zero</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/538248ca-bf01-11e6-a554-ac72891c3257.html">litemptopIs</a></td>
    <td>Ice Sheet Temperature at Top of Ice Sheet Model</td>
    <td>K</td>
    <td>Upper boundary temperature that is used to force ice sheet models. It is the temperature at the base of the snowpack models, and does not vary with seasons. Report surface temperature of ice sheet where snow thickness is zero</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914a1ea-9e49-11e5-803c-0d0b866b59f3.html">hfgeoubed</a></td>
    <td>Geothermal Heat Flux Beneath Land Ice</td>
    <td>W m-2</td>
    <td>Upward geothermal heat flux per unit area beneath land ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1418ccb847c5c235176620baf22d7b33.html">hfgeou</a></td>
    <td>Upward Geothermal Heat Flux at Sea Floor</td>
    <td>W m-2</td>
    <td>Upward geothermal heat flux per unit area on the sea floor</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/538279b2-bf01-11e6-a554-ac72891c3257.html">hflsIs</a></td>
    <td>Ice Sheet Surface Upward Latent Heat Flux</td>
    <td>W m-2</td>
    <td>Upward latent heat flux from the ice sheet surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/05b30c1e249f6854ffc0b3f7676eed73.html">wmo</a></td>
    <td>Upward Ocean Mass Transport</td>
    <td>kg s-1</td>
    <td>Upward mass transport from resolved and parameterized advective transport.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53827c8c-bf01-11e6-a554-ac72891c3257.html">hfssIs</a></td>
    <td>Ice Sheet Surface Upward Sensible Heat Flux</td>
    <td>W m-2</td>
    <td>Upward sensible heat flux from the ice sheet surface. The surface sensible heat flux, also called turbulent heat flux, is the exchange of heat between the surface and the air by motion of air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e590c-9e49-11e5-803c-0d0b866b59f3.html">hfssLut</a></td>
    <td>Sensible Heat Flux on Land-Use Tile</td>
    <td>W m-2</td>
    <td>Upward sensible heat flux on land use tiles. The surface sensible heat flux, also called turbulent heat flux, is the exchange of heat between the surface and the air by motion of air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e60a812c3a4351f1747a8bf9fb48aec8.html">hfsso</a></td>
    <td>Surface Downward Sensible Heat Flux</td>
    <td>W m-2</td>
    <td>Upward sensible heat flux over sea ice free sea. The surface sensible heat flux, also called turbulent heat flux, is the exchange of heat between the surface and the air by motion of air.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/8e5acd3e73d41006a677b5e77fe383f7.html">rsu4co2</a></td>
    <td>Upwelling Shortwave Radiation 4XCO2 Atmosphere</td>
    <td>W m-2</td>
    <td>Upwelling Shortwave Radiation calculated using carbon dioxide concentrations increased fourfold</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a8607fe15cb4f2997228523340233d91.html">rlucs</a></td>
    <td>Upwelling Clear-Sky Longwave Radiation</td>
    <td>W m-2</td>
    <td>Upwelling clear-sky longwave radiation  (includes the fluxes at the surface and TOA)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/921b8b8f6620826567d9324314c70410.html">rlutcs</a></td>
    <td>TOA Outgoing Clear-Sky Longwave Radiation</td>
    <td>W m-2</td>
    <td>Upwelling clear-sky longwave radiation at top of atmosphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5951b6df2bd5a02e11213ea42620fa89.html">rlucs4co2</a></td>
    <td>Upwelling Clear-Sky Longwave Radiation 4XCO2 Atmosphere</td>
    <td>W m-2</td>
    <td>Upwelling clear-sky longwave radiation calculated using carbon dioxide concentrations increased fourfold (includes the fluxes at the surface and TOA)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/eb72b66b6365daed79aefeda9d3d30b5.html">rsucs</a></td>
    <td>Upwelling Clear-Sky Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Upwelling clear-sky shortwave radiation  (includes the fluxes at the surface and TOA)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bef5e52ab3ef55640ab0133c34c9dec2.html">rsucs4co2</a></td>
    <td>Upwelling Clear-Sky Shortwave Radiation 4XCO2 Atmosphere</td>
    <td>W m-2</td>
    <td>Upwelling clear-sky shortwave radiation calculated using carbon dioxide concentrations increased fourfold</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/bcfeacf77d49ef51a6ee66a1ab0ebcb4.html">rlu</a></td>
    <td>Upwelling Longwave Radiation</td>
    <td>W m-2</td>
    <td>Upwelling longwave radiation (includes the fluxes at the surface and TOA)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/01918a16b5ac9dbbe932d83357c06a21.html">rlu4co2</a></td>
    <td>Upwelling Longwave Radiation 4XCO2 Atmosphere</td>
    <td>W m-2</td>
    <td>Upwelling longwave radiation calculated using carbon dioxide concentrations increased fourfold (includes the fluxes at the surface and TOA)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c323f38340e4846931ad4891232d839d.html">rsu</a></td>
    <td>Upwelling Shortwave Radiation</td>
    <td>W m-2</td>
    <td>Upwelling shortwave radiation  (includes also the fluxes at the surface and top of atmosphere)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59170cbe-9e49-11e5-803c-0d0b866b59f3.html">vegHeight</a></td>
    <td>Height of the Vegetation Canopy</td>
    <td>m</td>
    <td>Vegetation height averaged over all vegetation types and over the vegetated fraction of a grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917d9fa-9e49-11e5-803c-0d0b866b59f3.html">vegHeightCrop</a></td>
    <td>Height of Crops</td>
    <td>m</td>
    <td>Vegetation height averaged over the crop fraction of a grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591384a4-9e49-11e5-803c-0d0b866b59f3.html">vegHeightGrass</a></td>
    <td>Height of Grass</td>
    <td>m</td>
    <td>Vegetation height averaged over the grass fraction of a grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0430a-acb7-11e6-b5ee-ac72891c3257.html">vegHeightPasture</a></td>
    <td>Height of Pastures</td>
    <td>m</td>
    <td>Vegetation height averaged over the pasture fraction of a grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59174aa8-9e49-11e5-803c-0d0b866b59f3.html">vegHeightShrub</a></td>
    <td>Height of Shrubs</td>
    <td>m</td>
    <td>Vegetation height averaged over the shrub fraction of a grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59136000-9e49-11e5-803c-0d0b866b59f3.html">vegHeightTree</a></td>
    <td>Height of Trees</td>
    <td>m</td>
    <td>Vegetation height averaged over the tree fraction of a grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914b4d2-9e49-11e5-803c-0d0b866b59f3.html">tcs</a></td>
    <td>Vegetation Canopy Temperature</td>
    <td>K</td>
    <td>Vegetation temperature, averaged over all vegetation types</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b5bc9b1fa92a35cec5989eeac3d77d1a.html">thetaot</a></td>
    <td>Vertically Averaged Sea Water Potential Temperature</td>
    <td>degC</td>
    <td>Vertical average of the sea water potential temperature through the whole ocean depth</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/52c137a21845ae294b27ad40eaca096d.html">evu</a></td>
    <td>Eddy Viscosity Coefficient for Momentum</td>
    <td>m2 s-1</td>
    <td>Vertical diffusion coefficient for momentum due to parametrised eddies</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c373986159daf18eee63ca731d52b6f7.html">edt</a></td>
    <td>Eddy Diffusivity Coefficient for Temperature</td>
    <td>m2 s-1</td>
    <td>Vertical diffusion coefficient for temperature due to parametrised eddies</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/62cb333ec6550e64596f563d114977af.html">difvmfdo</a></td>
    <td>Ocean Vertical Momentum Diffusivity Due to Form Drag</td>
    <td>m2 s-1</td>
    <td>Vertical/dianeutral diffusivity applied to momentum due to form drag (i.e. resulting from a model scheme representing  mesoscale eddy-induced form drag).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f94930c327a257dddea9ef9d0e260ed3.html">difvmbo</a></td>
    <td>Ocean Vertical Momentum Diffusivity Due to Background</td>
    <td>m2 s-1</td>
    <td>Vertical/dianeutral diffusivity applied to momentum due to the background (i.e. caused by a time invariant imposed field which may be either constant over the globe or spatially varying, depending on the ocean model used).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5f19c4be9ae133db06403c986c8136d6.html">difvmo</a></td>
    <td>Ocean Vertical Momentum Diffusivity</td>
    <td>m2 s-1</td>
    <td>Vertical/dianeutral diffusivity applied to momentum.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/52b1076476b074a18a91b9da1baa6bc3.html">difvso</a></td>
    <td>Ocean Vertical Salt Diffusivity</td>
    <td>m2 s-1</td>
    <td>Vertical/dianeutral diffusivity applied to prognostic salinity field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/120719dde7f96f9bc088acd33b97967f.html">difvho</a></td>
    <td>Ocean Vertical Heat Diffusivity</td>
    <td>m2 s-1</td>
    <td>Vertical/dianeutral diffusivity applied to prognostic temperature field.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4fb426293126d528f2bbf902b6ede847.html">difvtrbo</a></td>
    <td>Ocean Vertical Tracer Diffusivity Due to Background</td>
    <td>m2 s-1</td>
    <td>Vertical/dianeutral diffusivity applied to tracers due to the background (i.e. caused by a time invariant imposed field which may be either constant over the globe or spatially varying, depending on the ocean model used).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/70094996b08eba1d39c13d30dc44b30f.html">difvtrto</a></td>
    <td>Ocean Vertical Tracer Diffusivity Due to Tides</td>
    <td>m2 s-1</td>
    <td>Vertical/dianeutral diffusivity applied to tracers due to tides (i.e. caused by astronomical gravity changes which manifest as tides).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5fc649c5cc7f4737f3a81d1c6b151b26.html">intdic</a></td>
    <td>Dissolved Inorganic Carbon Content</td>
    <td>kg m-2</td>
    <td>Vertically integrated DIC</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a1bd45ea349a310ceaec3f0c417f8aa5.html">intdoc</a></td>
    <td>Dissolved Organic Carbon Content</td>
    <td>kg m-2</td>
    <td>Vertically integrated DOC (explicit pools only)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590de58a-9e49-11e5-803c-0d0b866b59f3.html">intuaw</a></td>
    <td>Vertically Integrated Eastward Moisture Transport</td>
    <td>kg m-1 s-1</td>
    <td>Vertically integrated Eastward moisture transport (Mass weighted vertical integral of the product of eastward wind by total water mass per unit mass)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591444ca-9e49-11e5-803c-0d0b866b59f3.html">intvaw</a></td>
    <td>Vertically Integrated Northward Moisture Transport</td>
    <td>kg m-1 s-1</td>
    <td>Vertically integrated Northward moisture transport (Mass_weighted_vertical integral of the product of northward wind by total water mass per unit mass)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ede7b0fb492e75c5fb9139996880695a.html">intpoc</a></td>
    <td>Particulate Organic Carbon Content</td>
    <td>kg m-2</td>
    <td>Vertically integrated POC</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/baf651d5dbd448df196faedae8a97b22.html">intparag</a></td>
    <td>Aragonite Production</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated aragonite production</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/28d5c13c016320943983914bc63e6abd.html">intpbfe</a></td>
    <td>Iron Production</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated biogenic iron production</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4f6a8297671856ee117fa285ad5d6e88.html">intpbn</a></td>
    <td>Nitrogen Production</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated biogenic nitrogen production</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/923468afd1b3d19662d02978682c305f.html">intpbp</a></td>
    <td>Phosphorus Production</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated biogenic phosphorus production</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/351cb82f1f858d9c0e1094eaf477c9bc.html">intpbsi</a></td>
    <td>Silicon Production</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated biogenic silica production</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c1a2f2eeee3b74cd94a2946050785278.html">intpcalcite</a></td>
    <td>Calcite Production</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated calcite production</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917acf0-9e49-11e5-803c-0d0b866b59f3.html">intuadse</a></td>
    <td>Vertically Integrated Eastward Dry Statice Energy Transport</td>
    <td>MJ m-1 s-1</td>
    <td>Vertically integrated eastward dry static energy transport (cp.T +zg).v (Mass_weighted_vertical integral of the product of eastward wind by dry static_energy per mass unit)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6c2e81334ca2f0de1813f46d64ee1924.html">intpn2</a></td>
    <td>Nitrogen Fixation Rate in Ocean</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated nitrogen fixation</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59147b48-9e49-11e5-803c-0d0b866b59f3.html">intvadse</a></td>
    <td>Vertically Integrated Northward Dry Static Energy Transport</td>
    <td>MJ m-1 s-1</td>
    <td>Vertically integrated northward dry static energy transport (cp.T +zg).v (Mass_weighted_vertical integral of the product of northward wind by dry static_energy per mass unit)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c971e98c-c5f0-11e6-ac20-5404a60d96b5.html">intppnitrate</a></td>
    <td>Primary Organic Carbon Production by Phytoplankton Based on Nitrate Uptake Alone</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated primary (organic carbon) production by phytoplankton based on nitrate uptake alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e5284596-dd83-11e5-9194-ac72891c3257.html">intppcalc</a></td>
    <td>Net Primary Mole Productivity of Carbon by Calcareous Phytoplankton</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated primary (organic carbon) production by the calcareous phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e527e1f0-dd83-11e5-9194-ac72891c3257.html">intppdiat</a></td>
    <td>Net Primary Organic Carbon Production by Diatoms</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated primary (organic carbon) production by the diatom phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e52807e8-dd83-11e5-9194-ac72891c3257.html">intppdiaz</a></td>
    <td>Net Primary Mole Productivity of Carbon by Diazotrophs</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated primary (organic carbon) production by the diazotrophs alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e5287110-dd83-11e5-9194-ac72891c3257.html">intpppico</a></td>
    <td>Net Primary Mole Productivity of Carbon by Picophytoplankton</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated primary (organic carbon) production by the picophytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59133b34-9e49-11e5-803c-0d0b866b59f3.html">mrsow</a></td>
    <td>Total Soil Wetness</td>
    <td>1</td>
    <td>Vertically integrated soil moisture divided by maximum allowable soil moisture above wilting point.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e5289ab4-dd83-11e5-9194-ac72891c3257.html">intppmisc</a></td>
    <td>Net Primary Organic Carbon Production by Other Phytoplankton</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated total primary (organic carbon) production by other phytoplankton components alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f240d371c4585a7647bd775cc97abbee.html">intpp</a></td>
    <td>Primary Organic Carbon Production by All Types of Phytoplankton</td>
    <td>mol m-2 s-1</td>
    <td>Vertically integrated total primary (organic carbon) production by phytoplankton.  This should equal the sum of intpdiat+intpphymisc, but those individual components may be unavailable in some models.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/71248dd0-c7b6-11e6-bb2a-ac72891c3257.html">siltfrac</a></td>
    <td>Silt Fraction</td>
    <td>1</td>
    <td>Volume fraction of silt in soil</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591523cc-9e49-11e5-803c-0d0b866b59f3.html">simprefrozen</a></td>
    <td>Thickness of Refrozen Ice on Melt Pond</td>
    <td>m</td>
    <td>Volume of refrozen ice on melt ponds divided by meltpond covered area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fb6dac37f41c49ca02fc234d4da1a782.html">evspsblsoi</a></td>
    <td>Water Evaporation from Soil</td>
    <td>kg m-2 s-1</td>
    <td>Water evaporation from soil (including sublimation).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59152958-9e49-11e5-803c-0d0b866b59f3.html">esn</a></td>
    <td>Snow Evaporation</td>
    <td>kg m-2 s-1</td>
    <td>Water here means water in all phases. Evaporation is the conversion of liquid or solid into vapor. (The conversion of solid alone into vapor is called &quot;sublimation&quot;.) In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics. Unless indicated in the cell_methods attribute, a quantity is assumed to apply to the whole area of each horizontal grid box. Previously, the qualifier where_type was used to specify that the quantity applies only to the part of the grid box of the named type.  Names containing the where_type qualifier are deprecated and newly created data should use the cell_methods attribute to indicate the horizontal area to which the quantity applies.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f1324-9e49-11e5-803c-0d0b866b59f3.html">es</a></td>
    <td>Bare Soil Evaporation</td>
    <td>kg m-2 s-1</td>
    <td>Water here means water in all phases. Evaporation is the conversion of liquid or solid into vapor. (The conversion of solid alone into vapor is called &quot;sublimation&quot;.) In accordance with common usage in geophysical disciplines, &quot;flux&quot; implies per unit area, called &quot;flux density&quot; in physics.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914fd52-9e49-11e5-803c-0d0b866b59f3.html">prw2H</a></td>
    <td>Mass of Water Containing Deuterium (1H 2H O) in Layer</td>
    <td>kg m-2</td>
    <td>Water vapor path for water molecules that contain one atom of the hydrogen-2 isotope (1H 2H O)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f7e72-9e49-11e5-803c-0d0b866b59f3.html">prw17O</a></td>
    <td>Mass of Water Vapor Containing Oxygen-17 (H2 17O) in Layer</td>
    <td>kg m-2</td>
    <td>Water vapor path for water molecules that contain oxygen-17 (H2 17O)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e0dd0-9e49-11e5-803c-0d0b866b59f3.html">prw18O</a></td>
    <td>Mass of Water Vapor Containing Oxygen-18 (H2 18O) in Layer</td>
    <td>kg m-2</td>
    <td>Water vapor path for water molecules that contain oxygen-18 (H2 18O)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/79433cf8854f00ee833d6c2979fa5eb1.html">mmroa</a></td>
    <td>Total Organic Aerosol Mass Mixing Ratio</td>
    <td>kg kg-1</td>
    <td>We recommend a scale factor of POM=1.4*OC, unless your model has more detailed info available.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917b704-9e49-11e5-803c-0d0b866b59f3.html">wbptemp</a></td>
    <td>Wet Bulb Potential Temperature</td>
    <td>K</td>
    <td>Wet bulb potential temperature</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591324be-9e49-11e5-803c-0d0b866b59f3.html">fDeforestToAtmos</a></td>
    <td>Deforested Biomass That Goes into Atmosphere as a Result of Anthropogenic Land-Use Change</td>
    <td>kg m-2 s-1</td>
    <td>When land use change results in deforestation of natural vegetation (trees or grasslands) then natural biomass is removed. The treatment of deforested biomass differs significantly across models, but it should be straight-forward to compare deforested biomass across models.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913de9a-9e49-11e5-803c-0d0b866b59f3.html">fDeforestToProduct</a></td>
    <td>Deforested Biomass That Goes into Product Pool as a Result of Anthropogenic Land-Use Change</td>
    <td>kg m-2 s-1</td>
    <td>When land use change results in deforestation of natural vegetation (trees or grasslands) then natural biomass is removed. The treatment of deforested biomass differs significantly across models, but it should be straight-forward to compare deforested biomass across models.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913e3e0-9e49-11e5-803c-0d0b866b59f3.html">fNProduct</a></td>
    <td>Deforested or Harvested Biomass as a Result of Anthropogenic Land-Use or Change</td>
    <td>kg m-2 s-1</td>
    <td>When land use change results in deforestation of natural vegetation (trees or grasslands) then natural biomass is removed. The treatment of deforested biomass differs significantly across models, but it should be straight-forward to compare deforested biomass across models.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/13484743dd3369c69df93379e6dafbb5.html">ccb</a></td>
    <td>Air Pressure at Convective Cloud Base</td>
    <td>Pa</td>
    <td>Where convective cloud is present in the grid cell, the instantaneous cloud base altitude should be that of the bottom of the lowest level containing convective cloud. Missing data should be reported in the absence of convective cloud. The time mean should be calculated from these quantities averaging over occasions when convective cloud is present only, and should contain missing data for occasions when no convective cloud is present during the meaning period.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0062272a6a4176b8c32af87642b062c5.html">cct</a></td>
    <td>Air Pressure at Convective Cloud Top</td>
    <td>Pa</td>
    <td>Where convective cloud is present in the grid cell, the instantaneous cloud top altitude should be that of the top of the highest level containing convective cloud. Missing data should be reported in the absence of convective cloud. The time mean should be calculated from these quantities averaging over occasions when convective cloud is present only, and should contain missing data for occasions when no convective cloud is present during the meaning period.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e4b039da-b621-11e6-bbe2-ac72891c3257.html">wsgmax100m</a></td>
    <td>Maximum Wind Speed of Gust at 100m</td>
    <td>m s-1</td>
    <td>Wind speed gust maximum at 100m above surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/dc801d88-34c6-11e7-8257-5404a60d96b5.html">wsgmax10m</a></td>
    <td>Maximum Wind Speed of Gust at 10m</td>
    <td>m s-1</td>
    <td>Wind speed gust maximum at 10m above surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913f77c-9e49-11e5-803c-0d0b866b59f3.html">sistrxdtop</a></td>
    <td>X-Component of Atmospheric Stress on Sea Ice</td>
    <td>N m-2</td>
    <td>X-component of atmospheric stress on sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e3ee0-9e49-11e5-803c-0d0b866b59f3.html">siforcecoriolx</a></td>
    <td>Coriolis Force Term in Force Balance (X-Component)</td>
    <td>N m-2</td>
    <td>X-component of force on sea ice caused by coriolis force</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590df8a4-9e49-11e5-803c-0d0b866b59f3.html">siforceintstrx</a></td>
    <td>Internal Stress Term in Force Balance (X-Component)</td>
    <td>N m-2</td>
    <td>X-component of force on sea ice caused by internal stress (divergence of sigma)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ed33c-9e49-11e5-803c-0d0b866b59f3.html">siforcetiltx</a></td>
    <td>Sea-Surface Tilt Term in Force Balance (X-Component)</td>
    <td>N m-2</td>
    <td>X-component of force on sea ice caused by sea-surface tilt</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d2848-9e49-11e5-803c-0d0b866b59f3.html">sistrxubot</a></td>
    <td>X-Component of Ocean Stress on Sea Ice</td>
    <td>N m-2</td>
    <td>X-component of ocean stress on sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2f074f3417a26ad322b96dd0b6c21e09.html">umo</a></td>
    <td>Ocean Mass X Transport</td>
    <td>kg s-1</td>
    <td>X-ward mass transport from resolved and parameterized advective transport.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591774d8-9e49-11e5-803c-0d0b866b59f3.html">sistrydtop</a></td>
    <td>Y-Component of Atmospheric Stress on Sea Ice</td>
    <td>N m-2</td>
    <td>Y-component of atmospheric stress on sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d4fc6-9e49-11e5-803c-0d0b866b59f3.html">siforcecorioly</a></td>
    <td>Coriolis Force Term in Force Balance (Y-Component)</td>
    <td>N m-2</td>
    <td>Y-component of force on sea ice caused by coriolis force</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590df5e8-9e49-11e5-803c-0d0b866b59f3.html">siforceintstry</a></td>
    <td>Internal Stress Term in Force Balance (Y-Component)</td>
    <td>N m-2</td>
    <td>Y-component of force on sea ice caused by internal stress (divergence of sigma)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d7654-9e49-11e5-803c-0d0b866b59f3.html">siforcetilty</a></td>
    <td>Sea-Surface Tilt Term in Force Balance (Y-Component)</td>
    <td>N m-2</td>
    <td>Y-component of force on sea ice caused by sea-surface tilt</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59150da6-9e49-11e5-803c-0d0b866b59f3.html">sistryubot</a></td>
    <td>Y-Component of Ocean Stress on Sea Ice</td>
    <td>N m-2</td>
    <td>Y-component of ocean stress on sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f7fdcc15d14c0066a9590e4bce820056.html">vmo</a></td>
    <td>Ocean Mass Y Transport</td>
    <td>kg s-1</td>
    <td>Y-ward mass transport from resolved and parameterized advective transport.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/21db90c0a12448299f855fdab60930d4.html">ua</a></td>
    <td>Eastward Wind</td>
    <td>m s-1</td>
    <td>Zonal wind (positive in a eastward direction).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0117314a-b8b2-11e6-a189-5404a60d96b5.html">ua100m</a></td>
    <td>Eastward Wind at 100m</td>
    <td>m s-1</td>
    <td>Zonal wind at 100m height</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0cde14f7745a201d47b856579bf6e759.html">ua10</a></td>
    <td>Eastward Wind at 10hPa</td>
    <td>m s-1</td>
    <td>Zonal wind on the 10 hPa surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/76248ae1d72c976495be67161d5a8d7d.html">vt100</a></td>
    <td>Northward Eddy Temperature Flux</td>
    <td>K m s-1</td>
    <td>Zonally averaged eddy temperature flux at 100hPa as monthly means derived from daily (or higher frequency) fields.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590db236-9e49-11e5-803c-0d0b866b59f3.html">raStem</a></td>
    <td>Total Respiration from Stem as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>added for completeness with Ra_root</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f2bfc-9e49-11e5-803c-0d0b866b59f3.html">raLeaf</a></td>
    <td>Total Respiration from Leaves as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>added for completeness with Ra_root</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0b2cc-acb7-11e6-b5ee-ac72891c3257.html">raOther</a></td>
    <td>Total Respiration from Other Pools (not Leaves Stem or Roots) as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>added for completeness with Ra_root</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f09f30-acb7-11e6-b5ee-ac72891c3257.html">nppStem</a></td>
    <td>Net Primary Production Allocated to Stem as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>added for completeness with npp_root</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0bbbe-acb7-11e6-b5ee-ac72891c3257.html">nppOther</a></td>
    <td>Net Primary Production Allocated to Other Pools (not Leaves Stem or Roots) as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>added for completeness with npp_root</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4ffc1f50b844980dbbae006dbcfca869.html">chepasoa</a></td>
    <td>Total Net Production of Anthropogenic Secondary Organic Aerosol</td>
    <td>kg m-2 s-1</td>
    <td>anthropogenic part of chepsoa</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a4e52f0f3833b395c09c73f1b6f3f748.html">emiaoa</a></td>
    <td>Total Emission Rate of Anthropogenic Organic Aerosol</td>
    <td>kg m-2 s-1</td>
    <td>anthropogenic part of emioa</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d9f1c-9e49-11e5-803c-0d0b866b59f3.html">fHarvestToAtmos</a></td>
    <td>Harvested Biomass That Goes Straight into Atmosphere as Carbon Mass Flux</td>
    <td>kg m-2 s-1</td>
    <td>any harvested carbon that is assumed to decompose immediately into the atmosphere is reported here</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53825248-bf01-11e6-a554-ac72891c3257.html">prsnIs</a></td>
    <td>Ice Sheet Snowfall Flux</td>
    <td>kg m-2 s-1</td>
    <td>at surface; includes precipitation of all forms of water in the solid phase</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2ca539fe3d21e4555ac39018c99b357d.html">evspsblpot</a></td>
    <td>Potential Evapotranspiration</td>
    <td>kg m-2 s-1</td>
    <td>at surface; potential flux of water into the atmosphere due to conversion of both liquid and solid phases to vapor (from underlying surface and vegetation)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/63345d9732c72b97ca395f24ce2d6642.html">rlut</a></td>
    <td>TOA Outgoing Longwave Radiation</td>
    <td>W m-2</td>
    <td>at the top of the atmosphere (to be compared with satellite measurements)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b907fef85d4c9571a9457ee1b259bb8f.html">rsut</a></td>
    <td>TOA Outgoing Shortwave Radiation</td>
    <td>W m-2</td>
    <td>at the top of the atmosphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0083db3aca27478aebd38e9de419dda1.html">loadoa</a></td>
    <td>Load of Dry Aerosol Organic Matter</td>
    <td>kg m-2</td>
    <td>atmosphere dry organic content: This is the vertically integrated sum of atmosphere_primary_organic_content and atmosphere_secondary_organic_content (see next two table entries).</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917a796-9e49-11e5-803c-0d0b866b59f3.html">fHarvestToProduct</a></td>
    <td>Harvested Biomass That Goes into Product Pool</td>
    <td>kg m-2 s-1</td>
    <td>be it food or wood harvest, any carbon that is subsequently stored is reported here</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ef7b8-9e49-11e5-803c-0d0b866b59f3.html">clwvic</a></td>
    <td>Convective Condensed Water Path</td>
    <td>kg m-2</td>
    <td>calculate mass of convective condensed (liquid + ice) water in the column divided by the area of the column (not just the area of the cloudy portion of the column). This includes precipitating hydrometeors ONLY if the precipitating hydrometeors affect the calculation of radiative transfer in model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59150acc-9e49-11e5-803c-0d0b866b59f3.html">clivic</a></td>
    <td>Convective Ice Water Path</td>
    <td>kg m-2</td>
    <td>calculate mass of convective ice water in the column divided by the area of the column (not just the area of the cloudy portion of the column). This includes precipitating frozen hydrometeors ONLY if the precipitating hydrometeors affect the calculation of radiative transfer in model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/30a7a10d4c71066f19eae9a89ddfafba.html">zmeso</a></td>
    <td>Mole Concentration of Mesozooplankton Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon  concentration from mesozooplankton (20-200 um) component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96d36ee-c5f0-11e6-ac20-5404a60d96b5.html">zmesoos</a></td>
    <td>Surface Mole Concentration of Mesozooplankton Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon  concentration from mesozooplankton (20-200 um) component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96d280c-c5f0-11e6-ac20-5404a60d96b5.html">zmicroos</a></td>
    <td>Surface Mole Concentration of Microzooplankton Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon  concentration from the microzooplankton (&lt;20 um) component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e9dc036ef43db84bc4651ce95b0fed94.html">zmicro</a></td>
    <td>Mole Concentration of Microzooplankton Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon  concentration from the microzooplankton (&lt;20 um) component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9a7cb6c8481412d525ba1101f82b892d.html">phymisc</a></td>
    <td>Mole Concentration of Miscellaneous Phytoplankton Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon concentration from additional phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96d1a6a-c5f0-11e6-ac20-5404a60d96b5.html">phymiscos</a></td>
    <td>Surface Mole Concentration of Miscellaneous Phytoplankton Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon concentration from additional phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/38c7aa97ad0f74e33dfd3f115124d04f.html">phycalc</a></td>
    <td>Mole Concentration of Calcareous Phytoplankton Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon concentration from calcareous (calcite-producing) phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96cfd6e-c5f0-11e6-ac20-5404a60d96b5.html">phycalcos</a></td>
    <td>Surface Mole Concentration of Calcareous Phytoplankton Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon concentration from calcareous (calcite-producing) phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ad7df7199759ad25164da83e37a6da17.html">phydiaz</a></td>
    <td>Mole Concentration of Diazotrophs Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon concentration from the diazotrophic phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96cefb8-c5f0-11e6-ac20-5404a60d96b5.html">phydiazos</a></td>
    <td>Surface Mole Concentration of Diazotrophs Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon concentration from the diazotrophic phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3aa265a13ddf4caa82a8e1e3d4482f42.html">phypico</a></td>
    <td>Mole Concentration of Picophytoplankton Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon concentration from the picophytoplankton (&lt;2 um) component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96d0cb4-c5f0-11e6-ac20-5404a60d96b5.html">phypicoos</a></td>
    <td>Surface Mole Concentration of Picophytoplankton Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon concentration from the picophytoplankton (&lt;2 um) component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96d459e-c5f0-11e6-ac20-5404a60d96b5.html">zmiscos</a></td>
    <td>Surface Mole Concentration of Other Zooplankton Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon from additional zooplankton component concentrations alone (e.g. Micro, meso).  Since the models all have different numbers of components, this variable has been included to provide a check for intercomparison between models since some phytoplankton groups are supersets.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c9776970-c5f0-11e6-ac20-5404a60d96b5.html">zmisc</a></td>
    <td>Mole Concentration of Other Zooplankton Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon from additional zooplankton component concentrations alone (e.g. Micro, meso).  Since the models all have different numbers of components, this variable has been included to provide a check for intercomparison between models since some phytoplankton groups are supersets.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5880ab9386066d5d620774a46840cc25.html">phydiat</a></td>
    <td>Mole Concentration of Diatoms Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon from the diatom phytoplankton component concentration alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96ce1ee-c5f0-11e6-ac20-5404a60d96b5.html">phydiatos</a></td>
    <td>Surface Mole Concentration of Diatoms Expressed as Carbon in Sea Water</td>
    <td>mol m-3</td>
    <td>carbon from the diatom phytoplankton component concentration alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96e2752-c5f0-11e6-ac20-5404a60d96b5.html">chlcalcos</a></td>
    <td>Surface Mass Concentration of Calcareous Phytoplankton Expressed as Chlorophyll in Sea Water</td>
    <td>kg m-3</td>
    <td>chlorophyll concentration from the calcite-producing phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/df96c61c07957da1c4e8212f0553fa98.html">chlcalc</a></td>
    <td>Mass Concentration of Calcareous Phytoplankton Expressed as Chlorophyll in Sea Water</td>
    <td>kg m-3</td>
    <td>chlorophyll concentration from the calcite-producing phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96e19b0-c5f0-11e6-ac20-5404a60d96b5.html">chldiazos</a></td>
    <td>Surface Mass Concentration of Diazotrophs Expressed as Chlorophyll in Sea Water</td>
    <td>kg m-3</td>
    <td>chlorophyll concentration from the diazotrophic phytoplankton component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96e35a8-c5f0-11e6-ac20-5404a60d96b5.html">chlpicoos</a></td>
    <td>Surface Mass Concentration of Picophytoplankton Expressed as Chlorophyll in Sea Water</td>
    <td>kg m-3</td>
    <td>chlorophyll concentration from the picophytoplankton (&lt;2 um) component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/edc3d019be9c383abbd82a4d5fad43ca.html">chlpico</a></td>
    <td>Mass Concentration of Picophytoplankton Expressed as Chlorophyll in Sea Water</td>
    <td>kg m-3</td>
    <td>chlorophyll concentration from the picophytoplankton (&lt;2 um) component alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96e439a-c5f0-11e6-ac20-5404a60d96b5.html">chlmiscos</a></td>
    <td>Surface Mass Concentration of Other Phytoplankton Expressed as Chlorophyll in Sea Water</td>
    <td>kg m-3</td>
    <td>chlorophyll from additional phytoplankton component concentrations alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96e0c22-c5f0-11e6-ac20-5404a60d96b5.html">chldiatos</a></td>
    <td>Surface Mass Concentration of Diatoms Expressed as Chlorophyll in Sea Water</td>
    <td>kg m-3</td>
    <td>chlorophyll from diatom phytoplankton component concentration alone</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c26eed24b27782de78cfab86e3d3b2d2.html">ttop</a></td>
    <td>Air Temperature at Cloud Top</td>
    <td>K</td>
    <td>cloud_top refers to the top of the highest cloud. Air temperature is the bulk temperature of the air, not the surface (skin) temperature.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0638f32ebcc32d63faad121d5a83e3be.html">ficeberg</a></td>
    <td>Water Flux into Sea Water from Icebergs</td>
    <td>kg m-2 s-1</td>
    <td>computed as the iceberg melt water  flux into the ocean divided by the area of the ocean portion of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/be153e40e1e09d1d46a191b3a99be7f5.html">friver</a></td>
    <td>Water Flux into Sea Water from Rivers</td>
    <td>kg m-2 s-1</td>
    <td>computed as the river flux of water into the ocean divided by the area of the ocean portion of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f718ef1940e6feab018d81f508bd87c2.html">fsitherm</a></td>
    <td>Water Flux into Sea Water Due to Sea Ice Thermodynamics</td>
    <td>kg m-2 s-1</td>
    <td>computed as the sea ice thermodynamic water flux into the ocean divided by the area of the ocean portion of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/70ecea904324e6f3b891276634412350.html">evs</a></td>
    <td>Water Evaporation Flux Where Ice Free Ocean over Sea</td>
    <td>kg m-2 s-1</td>
    <td>computed as the total mass of water vapor evaporating from the ice-free portion of the ocean  divided by the area of the ocean portion of the grid cell.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/27b742af91660071179e5440d83ddc37.html">prsnc</a></td>
    <td>Convective Snowfall Flux</td>
    <td>kg m-2 s-1</td>
    <td>convective precipitation of all forms of water in the solid phase.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f1146a-acb7-11e6-b5ee-ac72891c3257.html">tSoilPools</a></td>
    <td>Turnover Rate of Each Model Soil Carbon Pool</td>
    <td>s-1</td>
    <td>defined as 1/(turnover time) for each soil pool. Use the same pools reported under cSoilPools</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96de29c-c5f0-11e6-ac20-5404a60d96b5.html">dfeos</a></td>
    <td>Surface Dissolved Iron Concentration</td>
    <td>mol m-3</td>
    <td>dissolved iron in sea water is meant to include both Fe2+ and Fe3+ ions (but not, e.g., particulate detrital iron)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914d1ba-9e49-11e5-803c-0d0b866b59f3.html">lwsffluxaero</a></td>
    <td>Longwave flux  due to volcanic aerosols at the surface</td>
    <td>W m-2</td>
    <td>downwelling longwave  flux  due to volcanic aerosols at the surface to be diagnosed through double radiation call</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f1586-9e49-11e5-803c-0d0b866b59f3.html">lwtoafluxaerocs</a></td>
    <td>TOA Outgoing Clear-Sky Longwave Flux Due to Volcanic Aerosols</td>
    <td>W m-2</td>
    <td>downwelling longwave flux due to volcanic aerosols at TOA under clear sky to be diagnosed through double radiation call</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1e4b4b00e55243dc7815c0ffc015faee.html">dryso4</a></td>
    <td>Dry Deposition Rate of SO4</td>
    <td>kg m-2 s-1</td>
    <td>dry deposition includes gravitational settling, impact scavenging, and turbulent deposition</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/8e67a3e82efbb02a7efe67da456408fa.html">drynh4</a></td>
    <td>Dry Deposition Rate of NH4</td>
    <td>kg m-2 s-1</td>
    <td>dry deposition includes gravitational settling, impact scavenging, and turbulent deposition</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/9fd5c69c5f00bd2434436f2e9033f545.html">drynh3</a></td>
    <td>Dry Deposition Rate of NH3</td>
    <td>kg m-2 s-1</td>
    <td>dry deposition includes gravitational settling, impact scavenging, and turbulent deposition</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e49733975533eeec7407d54d8373b155.html">dryso2</a></td>
    <td>Dry Deposition Rate of SO2</td>
    <td>kg m-2 s-1</td>
    <td>dry deposition includes gravitational settling, impact scavenging, and turbulent deposition</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/88cfa07efc9539cfb8c465a664f63e55.html">dryo3</a></td>
    <td>Dry Deposition Rate of O3</td>
    <td>kg m-2 s-1</td>
    <td>dry deposition includes gravitational settling, impact scavenging, and turbulent deposition.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f3532407075647328e7da9c24f00193d.html">cMisc</a></td>
    <td>Carbon Mass in Other Living Compartments on Land</td>
    <td>kg m-2</td>
    <td>e.g., labile, fruits, reserves, etc.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e39fe-9e49-11e5-803c-0d0b866b59f3.html">cVegLut</a></td>
    <td>Carbon in Vegetation on Land-Use Tiles</td>
    <td>kg m-2</td>
    <td>end of year values (not annual mean)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f80d4-9e49-11e5-803c-0d0b866b59f3.html">cSoilLut</a></td>
    <td>carbon  in soil pool on Land-use tiles</td>
    <td>kg m-2</td>
    <td>end of year values (not annual mean)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913b280-9e49-11e5-803c-0d0b866b59f3.html">cLitterLut</a></td>
    <td>Carbon  in Above and Below-Ground Litter Pools on Land-Use Tiles</td>
    <td>kg m-2</td>
    <td>end of year values (not annual mean)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0a8f4-acb7-11e6-b5ee-ac72891c3257.html">cSoilLevels</a></td>
    <td>Carbon Mass in Each Model Soil Level (Summed over All Soil Carbon Pools in That Level)</td>
    <td>kg m-2</td>
    <td>for models with vertically discretised soil carbon, report total soil carbon for each level</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59171588-9e49-11e5-803c-0d0b866b59f3.html">sltbasin</a></td>
    <td>Northward Ocean Salt Transport</td>
    <td>kg s-1</td>
    <td>function of latitude, basin</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0940cbee6105037e4b7aa5579004f124.html">fgcfc11</a></td>
    <td>Surface Downward CFC11 Flux</td>
    <td>mol m-2 s-1</td>
    <td>gas exchange flux of CFC11</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/e9e21426e4810d0bb2d3dddb24dbf4dc.html">fgcfc12</a></td>
    <td>Surface Downward CFC12 Flux</td>
    <td>mol m-2 s-1</td>
    <td>gas exchange flux of CFC12</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4a62506a657921cdde7c173c0ae09b98.html">fgsf6</a></td>
    <td>Surface Downward SF6 Flux</td>
    <td>mol m-2 s-1</td>
    <td>gas exchange flux of SF6</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c0007a5e2b555d399d9bfe49f7502f1b.html">zg500</a></td>
    <td>Geopotential Height at 500hPa</td>
    <td>m</td>
    <td>geopotential height on the 500 hPa surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4c69515bfc84c5cb5624e94228f58351.html">volcello</a></td>
    <td>Ocean Grid-Cell Volume</td>
    <td>m3</td>
    <td>grid-cell volume ca. 2000.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591389b8-9e49-11e5-803c-0d0b866b59f3.html">mrsol</a></td>
    <td>Total Water Content of Soil Layer</td>
    <td>kg m-2</td>
    <td>in each soil layer, the mass of water in all phases, including ice.  Reported as &quot;missing&quot; for grid cells occupied entirely by &quot;sea&quot;</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d17f4-9e49-11e5-803c-0d0b866b59f3.html">mrsfl</a></td>
    <td>Frozen Water Content of Soil Layer</td>
    <td>kg m-2</td>
    <td>in each soil layer, the mass of water in ice phase.  Reported as &quot;missing&quot; for grid cells occupied entirely by &quot;sea&quot;</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914640a-9e49-11e5-803c-0d0b866b59f3.html">mrsll</a></td>
    <td>Liquid Water Content of Soil Layer</td>
    <td>kg m-2</td>
    <td>in each soil layer, the mass of water in liquid phase.  Reported as &quot;missing&quot; for grid cells occupied entirely by &quot;sea&quot;</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/73f9d7b26beaacf47a2be4ab14f875b8.html">conccmcn</a></td>
    <td>Number Concentration Coarse Mode Aerosol</td>
    <td>m-3</td>
    <td>includes all particles with diameter larger than 1 micron</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f2ab103442d41c890bc004ef71dc71f2.html">concnmcn</a></td>
    <td>Number Concentration of Nucleation Mode Aerosol</td>
    <td>m-3</td>
    <td>includes all particles with diameter smaller than 3 nm</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a7cf325e9bf994ade073a1297378a57c.html">h2o</a></td>
    <td>Mass Fraction of Water</td>
    <td>1</td>
    <td>includes all phases of water</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/62f26742cf240c1b5169a5cd511196b6.html">pr</a></td>
    <td>Precipitation</td>
    <td>kg m-2 s-1</td>
    <td>includes both liquid and solid phases</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/81f029ba-b63d-11e6-98cb-ac72891c3257.html">prCrop</a></td>
    <td>Precipitation over Crop Tile</td>
    <td>kg m-2 s-1</td>
    <td>includes both liquid and solid phases</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59136dfc-9e49-11e5-803c-0d0b866b59f3.html">nRoot</a></td>
    <td>Nitrogen Mass in Roots</td>
    <td>kg m-2</td>
    <td>including fine and coarse roots.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59128f0e-9e49-11e5-803c-0d0b866b59f3.html">nStem</a></td>
    <td>Nitrogen Mass in Stem</td>
    <td>kg m-2</td>
    <td>including sapwood and hardwood.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59171df8-9e49-11e5-803c-0d0b866b59f3.html">cStem</a></td>
    <td>Carbon Mass in Stem</td>
    <td>kg m-2</td>
    <td>including sapwood and hardwood.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f7aec4279a79220660f26a558ed5672c.html">prlsns</a></td>
    <td>Stratiform Snowfall Flux</td>
    <td>kg m-2 s-1</td>
    <td>large-scale precipitation of all forms of water in the solid phase.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ddf9a-9e49-11e5-803c-0d0b866b59f3.html">fCLandToOcean</a></td>
    <td>Lateral Transfer of Carbon out of Grid Cell That Eventually Goes into Ocean</td>
    <td>kg m-2 s-1</td>
    <td>leached carbon etc that goes into run off or river routing and finds its way into ocean should be reported here.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59151c42-9e49-11e5-803c-0d0b866b59f3.html">fNLandToOcean</a></td>
    <td>Lateral Transfer of Nitrogen out of Grid Cell That Eventually Goes into Ocean</td>
    <td>kg m-2 s-1</td>
    <td>leached nitrogen etc that goes into run off or river routing and finds its way into ocean should be reported here.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913d0c6-9e49-11e5-803c-0d0b866b59f3.html">zmlwaero</a></td>
    <td>Zonal Mean Longwave Heating Rate Due to Volcanic Aerosols</td>
    <td>K s-1</td>
    <td>longwave heating rate due to volcanic aerosols to be diagnosed through double radiation call, zonal average values required</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1ca290c839426f31f70a0d2862e1c611.html">sconcdust</a></td>
    <td>Surface Concentration of Dust</td>
    <td>kg m-3</td>
    <td>mass concentration of dust dry aerosol in air in model lowest layer</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/31a3caf70db7a8ed71e8d0a226365105.html">sconcss</a></td>
    <td>Surface Concentration of Sea-Salt Aerosol</td>
    <td>kg m-3</td>
    <td>mass concentration of sea-salt dry aerosol in air in model lowest layer</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/96435c8c0c0a8a7423d6abb6c027da69.html">sconcso4</a></td>
    <td>Surface Concentration of SO4</td>
    <td>kg m-3</td>
    <td>mass concentration of sulfate dry aerosol in air in model lowest layer.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/73c496f5669cc122cf1cddfe4df2a27a.html">clivi</a></td>
    <td>Ice Water Path</td>
    <td>kg m-2</td>
    <td>mass of ice water in the column divided by the area of the column (not just the area of the cloudy portion of the column). Includes precipitating frozen hydrometeors ONLY if the precipitating hydrometeor affects the calculation of radiative transfer in model.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59138238-9e49-11e5-803c-0d0b866b59f3.html">sipr</a></td>
    <td>Rainfall Rate over Sea Ice</td>
    <td>kg m-2 s-1</td>
    <td>mass of liquid precipitation falling onto sea ice divided by grid-cell area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59142a3a-9e49-11e5-803c-0d0b866b59f3.html">sndmasssnf</a></td>
    <td>Snow Mass Change Through Snow Fall</td>
    <td>kg m-2 s-1</td>
    <td>mass of solid precipitation falling onto sea ice divided by sea-ice area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/f70b088300f35ad3b19c67d2490612dd.html">maxpblz</a></td>
    <td>Maximum PBL Height</td>
    <td>m</td>
    <td>maximum boundary layer height during the day (add cell_methods attribute: &quot;time: maximum&quot;)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/170ff384-b622-11e6-bbe2-ac72891c3257.html">tasmaxCrop</a></td>
    <td>Daily Maximum Near-Surface Air Temperature over Crop Tile</td>
    <td>K</td>
    <td>maximum near-surface (usually, 2 meter) air temperature (add cell_method attribute &quot;time: max&quot;)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2dd48e8c50b4b88a83ff07d308e4e642.html">tasmax</a></td>
    <td>Daily Maximum Near-Surface Air Temperature</td>
    <td>K</td>
    <td>maximum near-surface (usually, 2 meter) air temperature (add cell_method attribute &quot;time: max&quot;)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a503e8c8011c952b0b832e6074ad387d.html">minpblz</a></td>
    <td>Minimum PBL Height</td>
    <td>m</td>
    <td>minimum boundary layer height during the day (add cell_methods attribute: &quot;time: minimum&quot;)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1758307c-b622-11e6-bbe2-ac72891c3257.html">tasminCrop</a></td>
    <td>Daily Minimum Near-Surface Air Temperature over Crop Tile</td>
    <td>K</td>
    <td>minimum near-surface (usually, 2 meter) air temperature (add cell_method attribute &quot;time: min&quot;)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/cce3dd39c138bf3c4d713263cc2e6cff.html">tasmin</a></td>
    <td>Daily Minimum Near-Surface Air Temperature</td>
    <td>K</td>
    <td>minimum near-surface (usually, 2 meter) air temperature (add cell_method attribute &quot;time: min&quot;)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e6e4c-9e49-11e5-803c-0d0b866b59f3.html">tau</a></td>
    <td>Momentum Flux</td>
    <td>N m-2</td>
    <td>module of the momentum lost by the atmosphere to the surface.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2b133ea2-1b42-11e6-a696-35cd2d8034df.html">lossn2o</a></td>
    <td>Monthly Loss of Atmospheric Nitrous Oxide</td>
    <td>mol m-3 s-1</td>
    <td>monthly averaged atmospheric loss</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4b34ac408326ab2ca7b58f2ac846f3e5.html">lossco</a></td>
    <td>Monthly Loss of Atmospheric Carbon Monoxide</td>
    <td>mol m-3 s-1</td>
    <td>monthly averaged atmospheric loss</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/83a106b1a10c23b2891aabceec43a873.html">lossch4</a></td>
    <td>Monthly Loss of Atmospheric Methane</td>
    <td>mol m-3 s-1</td>
    <td>monthly averaged atmospheric loss</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/4b97609a32d53dff5b8e73729e4f258b.html">sfcWind</a></td>
    <td>Near-Surface Wind Speed</td>
    <td>m s-1</td>
    <td>near-surface (usually, 10 meters) wind speed.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/53823c4a-bf01-11e6-a554-ac72891c3257.html">tasIs</a></td>
    <td>Ice Sheet Near-Surface Air Temperature</td>
    <td>K</td>
    <td>near-surface (usually, 2 meter) air temperature</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5c4978e802ba55d5a298cf1b3bdc2b3a.html">tas</a></td>
    <td>Near-Surface Air Temperature</td>
    <td>K</td>
    <td>near-surface (usually, 2 meter) air temperature</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591348fe-9e49-11e5-803c-0d0b866b59f3.html">fVegLitterSenescence</a></td>
    <td>Total Carbon Mass Flux from Vegetation to Litter as a Result of Leaf, Branch, and Root Senescence</td>
    <td>kg m-2 s-1</td>
    <td>needed to separate changing vegetation C turnover times resulting from changing allocation versus changing mortality</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913a696-9e49-11e5-803c-0d0b866b59f3.html">fVegLitterMortality</a></td>
    <td>Total Carbon Mass Flux from Vegetation to Litter as a Result of Mortality</td>
    <td>kg m-2 s-1</td>
    <td>needed to separate changing vegetation C turnover times resulting from changing allocation versus changing mortality</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84ef402c-acb7-11e6-b5ee-ac72891c3257.html">fVegSoilMortality</a></td>
    <td>Total Carbon Mass Flux from Vegetation to Soil as a Result of Mortality</td>
    <td>kg m-2 s-1</td>
    <td>needed to separate changing vegetation C turnover times resulting from changing allocation versus changing mortality</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0ddec-acb7-11e6-b5ee-ac72891c3257.html">fVegSoilSenescence</a></td>
    <td>Total Carbon Mass Flux from Vegetation to Soil as a Result of Leaf, Branch, and Root Senescence</td>
    <td>kg m-2 s-1</td>
    <td>needed to separate changing vegetation C turnover times resulting from changing allocation versus changing mortality</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b50af258aff9f9ca19fdf1ec4b039a55.html">ph</a></td>
    <td>pH</td>
    <td>1</td>
    <td>negative log of hydrogen ion concentration with the concentration expressed as mol H kg-1.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c977c2da-c5f0-11e6-ac20-5404a60d96b5.html">phabio</a></td>
    <td>Abiotic pH</td>
    <td>1</td>
    <td>negative log10 of hydrogen ion concentration with the concentration expressed as mol H kg-1 (abiotic component)..</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96d71ae-c5f0-11e6-ac20-5404a60d96b5.html">phos</a></td>
    <td>Surface pH</td>
    <td>1</td>
    <td>negative log10 of hydrogen ion concentration with the concentration expressed as mol H kg-1.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96d8090-c5f0-11e6-ac20-5404a60d96b5.html">phnatos</a></td>
    <td>Surface Natural pH</td>
    <td>1</td>
    <td>negative log10 of hydrogen ion concentration with the concentration expressed as mol H kg-1.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96d8ffe-c5f0-11e6-ac20-5404a60d96b5.html">phabioos</a></td>
    <td>Surface Abiotic pH</td>
    <td>1</td>
    <td>negative log10 of hydrogen ion concentration with the concentration expressed as mol H kg-1.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c97004d2-c5f0-11e6-ac20-5404a60d96b5.html">phnat</a></td>
    <td>Natural pH</td>
    <td>1</td>
    <td>negative log10 of hydrogen ion concentration with the concentration expressed as mol H kg-1.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/73097b4c-7a68-11e6-8db2-ac72891c3257.html">siareaacrossline</a></td>
    <td>Sea-Ice Area Flux Through Straits</td>
    <td>m2 s-1</td>
    <td>net (sum of transport in all directions) sea ice area transport through the following four passages, positive into the Arctic Ocean 1. Fram Strait = (11.5W,81.3N to (10.5E,79.6N) 2. Canadian Archipelago = (128.2W,70.6N) to (59.3W,82.1N) 3. Barents opening = (16.8E,76.5N) to (19.2E,70.2N) 4. Bering Strait = (171W,66.2N) to (166W,65N)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7309b2ce-7a68-11e6-8db2-ac72891c3257.html">snmassacrossline</a></td>
    <td>Snow Mass Flux Through Straits</td>
    <td>kg s-1</td>
    <td>net (sum of transport in all directions) sea ice area transport through the following four passages, positive into the Arctic Ocean 1. Fram Strait = (11.5W,81.3N to (10.5E,79.6N) 2. Canadian Archipelago = (128.2W,70.6N) to (59.3W,82.1N) 3. Barents opening = (16.8E,76.5N) to (19.2E,70.2N) 4. Bering Strait = (171W,66.2N) to (166W,65N)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7309e7f8-7a68-11e6-8db2-ac72891c3257.html">simassacrossline</a></td>
    <td>Sea Mass Area Flux Through Straits</td>
    <td>kg s-1</td>
    <td>net (sum of transport in all directions) sea ice area transport through the following four passages, positive into the Arctic Ocean 1. Fram Strait = (11.5W,81.3N to (10.5E,79.6N) 2. Canadian Archipelago = (128.2W,70.6N) to (59.3W,82.1N) 3. Barents opening = (16.8E,76.5N) to (19.2E,70.2N) 4. Bering Strait = (171W,66.2N) to (166W,65N)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/05aec7fe79d030ffc90a089a6a60b0f2.html">od550lt1aer</a></td>
    <td>Ambient Fine Aerosol Optical Depth at 550nm</td>
    <td>1</td>
    <td>od550 due to particles with wet diameter less than 1 um  (ambient here means wetted). When models do not include explicit size information, it can be assumed that all anthropogenic aerosols and natural secondary aerosols have diameter less than 1 um.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591371b2-9e49-11e5-803c-0d0b866b59f3.html">wap2</a></td>
    <td>Mean-Squared Vertical Velocity (Omega)</td>
    <td>Pa2 s-2</td>
    <td>omega*omega</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3a9ddc45d480891285324a10ce98bc62.html">od550aerh2o</a></td>
    <td>Aerosol Water Optical Thickness at 550nm</td>
    <td>1</td>
    <td>proposed name: atmosphere_optical_thickness_due_to_water_ambient_aerosol</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/23ecf19e478a3ed9026b011e1e1fed02.html">flashrate</a></td>
    <td>Lightning Flash Rate</td>
    <td>km-2 s-1</td>
    <td>proposed name: lightning_flash_rate (units to be interpreted as &quot;counts km-2 s-1)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5fb2c6633cdd98673b7b12d257575460.html">ccn</a></td>
    <td>Cloud Condensation Nuclei Concentration at Liquid Cloud Top</td>
    <td>m-3</td>
    <td>proposed name: number_concentration_of_ambient_aerosol_in_air_at_liquid_water_cloud_top</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a2609abee6ecd5d535a48e29ae70e852.html">photo1d</a></td>
    <td>Photolysis Rate of Ozone (O3) to Excited Atomic Oxygen (the Singlet D State, O1D)</td>
    <td>s-1</td>
    <td>proposed name: photolysis_rate_of_ozone_to_O1D</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5b189f73a6cbef54f224217d8a6b284a.html">cheaqpso4</a></td>
    <td>Aqueous-Phase Production Rate of SO4</td>
    <td>kg m-2 s-1</td>
    <td>proposed name: tendency_of_atmosphere_mass_content_of_sulfate_dry_aerosol_due_to_aqueous_phase_net_chemical_production</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ef1d823bb688b3e2a3f8374bb29fe0bf.html">chegpso4</a></td>
    <td>Gas-Phase Production Rate of SO4</td>
    <td>kg m-2 s-1</td>
    <td>proposed name: tendency_of_atmosphere_mass_content_of_sulfate_dry_aerosol_due_to_gas_phase_net_chemical_production</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/712473d6-c7b6-11e6-bb2a-ac72891c3257.html">co23D</a></td>
    <td>3D-Field of Transported CO2</td>
    <td>kg kg-1</td>
    <td>report 3D field of model simulated atmospheric CO2 mass mixing ration on model levels</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d76ba4c5868a0a9a02f433dc3c86d5d2.html">rootd</a></td>
    <td>Maximum Root Depth</td>
    <td>m</td>
    <td>report the maximum soil depth reachable by plant roots (if defined in model), i.e., the maximum soil depth from which they can extract moisture; report as *missing* where the land fraction is 0.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d64f2-9e49-11e5-803c-0d0b866b59f3.html">zmswaero</a></td>
    <td>Zonal Mean Shortwave Heating Rate Due to Volcanic Aerosols</td>
    <td>K s-1</td>
    <td>shortwave heating rate due to volcanic aerosols to be diagnosed through double radiation call, zonal average values required</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913b4ec-9e49-11e5-803c-0d0b866b59f3.html">cLitterSubSurf</a></td>
    <td>Carbon Mass in Below-Ground Litter</td>
    <td>kg m-2</td>
    <td>subsurface litter pool fed by root inputs.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96cb7e6-c5f0-11e6-ac20-5404a60d96b5.html">detocos</a></td>
    <td>Surface Detrital Organic Carbon Concentration</td>
    <td>mol m-3</td>
    <td>sum of detrital organic carbon component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96cd366-c5f0-11e6-ac20-5404a60d96b5.html">aragos</a></td>
    <td>Surface Aragonite Concentration</td>
    <td>mol m-3</td>
    <td>sum of particulate aragonite components (e.g. Phytoplankton, Detrital, etc.)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96cc5b0-c5f0-11e6-ac20-5404a60d96b5.html">calcos</a></td>
    <td>Surface Calcite Concentration</td>
    <td>mol m-3</td>
    <td>sum of particulate calcite component concentrations (e.g. Phytoplankton, Detrital, etc.)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96e6d66-c5f0-11e6-ac20-5404a60d96b5.html">bfeos</a></td>
    <td>Surface Mole Concentration of Particulate Organic Matter Expressed as Iron in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of particulate organic iron component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/14e5a31ac93e26c50f8c01ed9a032168.html">pon</a></td>
    <td>Mole Concentration of Particulate Organic Matter Expressed as Nitrogen in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of particulate organic nitrogen component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96e5132-c5f0-11e6-ac20-5404a60d96b5.html">ponos</a></td>
    <td>Surface Mole Concentration of Particulate Organic Matter Expressed as Nitrogen in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of particulate organic nitrogen component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/562c99ff069851867df730ed9531c796.html">pop</a></td>
    <td>Mole Concentration of Particulate Organic Matter Expressed as Phosphorus in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of particulate organic phosphorus component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96e5fc4-c5f0-11e6-ac20-5404a60d96b5.html">popos</a></td>
    <td>Surface Mole Concentration of Particulate Organic Matter Expressed as Phosphorus in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of particulate organic phosphorus component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96e7b08-c5f0-11e6-ac20-5404a60d96b5.html">bsios</a></td>
    <td>Surface Mole Concentration of Particulate Organic Matter Expressed as Silicon in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of particulate silica component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/54eb2f6651441ff52f9aea4d43a83024.html">phyc</a></td>
    <td>Phytoplankton Carbon Concentration</td>
    <td>mol m-3</td>
    <td>sum of phytoplankton carbon component concentrations.  In most (all?) cases this is the sum of phycdiat and phycmisc (i.e., &quot;Diatom Carbon Concentration&quot; and &quot;Non-Diatom Phytoplankton Carbon Concentration&quot;</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/87f531b94bd9ca68e33e89d7e3e81be4.html">phyfe</a></td>
    <td>Mole Concentration of Total Phytoplankton Expressed as Iron in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of phytoplankton iron component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96ea5e2-c5f0-11e6-ac20-5404a60d96b5.html">phyfeos</a></td>
    <td>Surface Mole Concentration of Total Phytoplankton Expressed as Iron in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of phytoplankton iron component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/80f337469efdd0d5392ad995a90fd15c.html">phyn</a></td>
    <td>Mole Concentration of Total Phytoplankton Expressed as Nitrogen in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of phytoplankton nitrogen component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96e895e-c5f0-11e6-ac20-5404a60d96b5.html">phynos</a></td>
    <td>Surface Mole Concentration of Phytoplankton Nitrogen in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of phytoplankton nitrogen component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/314e3eb73c9ccbdd132899317d87d856.html">phycos</a></td>
    <td>Sea Surface Phytoplankton Carbon Concentration</td>
    <td>mol m-3</td>
    <td>sum of phytoplankton organic carbon component concentrations at the sea surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/1ae710e405acc14b368f55d9205be258.html">phyp</a></td>
    <td>Mole Concentration of Total Phytoplankton Expressed as Phosphorus in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of phytoplankton phosphorus components</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96e9778-c5f0-11e6-ac20-5404a60d96b5.html">phypos</a></td>
    <td>Surface Mole Concentration of Total Phytoplankton Expressed as Phosphorus in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of phytoplankton phosphorus components</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6cde3055df67931d84608fc5b7694f65.html">physi</a></td>
    <td>Mole Concentration of Total Phytoplankton Expressed as Silicon in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of phytoplankton silica component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96eb3e8-c5f0-11e6-ac20-5404a60d96b5.html">physios</a></td>
    <td>Surface Mole Concentration of Total Phytoplankton Expressed as Silicon in Sea Water</td>
    <td>mol m-3</td>
    <td>sum of phytoplankton silica component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/be62c57dff12142bf51fc73c70cfb050.html">zooc</a></td>
    <td>Zooplankton Carbon Concentration</td>
    <td>mol m-3</td>
    <td>sum of zooplankton carbon component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96c9c52-c5f0-11e6-ac20-5404a60d96b5.html">zoocos</a></td>
    <td>Surface Zooplankton Carbon Concentration</td>
    <td>mol m-3</td>
    <td>sum of zooplankton carbon component concentrations</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/8c9504d28596e05586c8e193082ac617.html">ps</a></td>
    <td>Surface Air Pressure</td>
    <td>Pa</td>
    <td>surface pressure (not mean sea-level pressure), 2-D field to calculate the 3-D pressure field from hybrid coordinates</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e9656-9e49-11e5-803c-0d0b866b59f3.html">sifllwdtop</a></td>
    <td>Downwelling Longwave Flux over Sea Ice</td>
    <td>W m-2</td>
    <td>the downwelling longwave flux over sea ice (always positive)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d421b6923b396998106a8c1c66ea07f1.html">sootsn</a></td>
    <td>Snow Soot Content</td>
    <td>kg m-2</td>
    <td>the entire land portion of the grid cell is considered, with snow soot content set to 0.0 in regions free of snow.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590f983a-9e49-11e5-803c-0d0b866b59f3.html">mrsosLut</a></td>
    <td>Moisture in Upper Portion of Soil Column of Land-Use Tile</td>
    <td>kg m-2</td>
    <td>the mass of water in all phases in a thin surface layer; integrate over uppermost 10cm</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/af574f1ac4a9f44a2d943352a455cfeb.html">mrso</a></td>
    <td>Total Soil Moisture Content</td>
    <td>kg m-2</td>
    <td>the mass per unit area  (summed over all soil layers) of water in all phases.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a634ef4f4c0cda3a3c0c02652ca8cc6a.html">hfdsn</a></td>
    <td>Downward Heat Flux into Snow Where Land over Land</td>
    <td>W m-2</td>
    <td>the net downward heat flux from the atmosphere into the snow that lies on land divided by the land area in the grid cell; reported as 0.0 for snow-free land regions or where the land fraction is 0.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917ba9c-9e49-11e5-803c-0d0b866b59f3.html">siflcondbot</a></td>
    <td>Net Conductive Heat Fluxes in Ice at the Bottom</td>
    <td>W m-2</td>
    <td>the net heat conduction flux at the ice base</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ecbda-9e49-11e5-803c-0d0b866b59f3.html">siflcondtop</a></td>
    <td>Net Conductive Heat Flux in Ice at the Surface</td>
    <td>W m-2</td>
    <td>the net heat conduction flux at the ice surface</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59131140-9e49-11e5-803c-0d0b866b59f3.html">sifllatstop</a></td>
    <td>Net Latent Heat Flux over Sea Ice</td>
    <td>W m-2</td>
    <td>the net latent heat flux over sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590dbb78-9e49-11e5-803c-0d0b866b59f3.html">siflsenstop</a></td>
    <td>Net Upward Sensible Heat Flux over Sea Ice</td>
    <td>W m-2</td>
    <td>the net sensible heat flux over sea ice</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ef524-9e49-11e5-803c-0d0b866b59f3.html">siflsensupbot</a></td>
    <td>Net Upward Sensible Heat Flux Under Sea Ice</td>
    <td>W m-2</td>
    <td>the net sensible heat flux under sea ice from the ocean</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5914c95e-9e49-11e5-803c-0d0b866b59f3.html">sndmasssi</a></td>
    <td>Snow Mass Rate of Change Through Snow-to-Ice Conversion</td>
    <td>kg m-2 s-1</td>
    <td>the rate of change of snow mass due to transformation of snow to sea ice divided by sea-ice area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590e1ef6-9e49-11e5-803c-0d0b866b59f3.html">sndmassmelt</a></td>
    <td>Snow Mass Rate of Change Through Melt</td>
    <td>kg m-2 s-1</td>
    <td>the rate of change of snow mass through melt divided by sea-ice area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590de2ce-9e49-11e5-803c-0d0b866b59f3.html">sndmasssubl</a></td>
    <td>Snow Mass Rate of Change Through Evaporation or Sublimation</td>
    <td>kg m-2 s-1</td>
    <td>the rate of change of snow mass through sublimation and evaporation divided by sea-ice area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590d7370-9e49-11e5-803c-0d0b866b59f3.html">sndmasswindrif</a></td>
    <td>Snow Mass Rate of Change Through Wind Drift of Snow</td>
    <td>kg m-2 s-1</td>
    <td>the rate of change of snow mass through wind drift of snow (from sea-ice into the sea) divided by sea-ice area</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913bc80-9e49-11e5-803c-0d0b866b59f3.html">mrroLut</a></td>
    <td>Total Runoff from Land-Use Tile</td>
    <td>kg m-2 s-1</td>
    <td>the total runoff (including &quot;drainage&quot; through the base of the soil model) leaving the land use tile portion of the grid cell</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591733d8-9e49-11e5-803c-0d0b866b59f3.html">sifllwutop</a></td>
    <td>Upwelling Longwave Flux over Sea Ice</td>
    <td>W m-2</td>
    <td>the upwelling longwave flux over sea ice (always negative)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ba20ea537eb672813c5a364655855b38.html">talknat</a></td>
    <td>Natural Total Alkalinity</td>
    <td>mol m-3</td>
    <td>total alkalinity equivalent concentration (including carbonate, borate, phosphorus, silicon, and nitrogen components) at preindustrial atmospheric xCO2</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96d62fe-c5f0-11e6-ac20-5404a60d96b5.html">talknatos</a></td>
    <td>Surface Natural Total Alkalinity</td>
    <td>mol m-3</td>
    <td>total alkalinity equivalent concentration (including carbonate, borate, phosphorus, silicon, and nitrogen components) at preindustrial atmospheric xCO2</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/c96d5426-c5f0-11e6-ac20-5404a60d96b5.html">talkos</a></td>
    <td>Surface Total Alkalinity</td>
    <td>mol m-3</td>
    <td>total alkalinity equivalent concentration (including carbonate, borate, phosphorus, silicon, and nitrogen components)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d90bac355dae4e53a6d0e5df81a090ad.html">talk</a></td>
    <td>Total Alkalinity</td>
    <td>mol m-3</td>
    <td>total alkalinity equivalent concentration (including carbonate, nitrogen, silicate, and borate components)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59139a70-9e49-11e5-803c-0d0b866b59f3.html">siarean</a></td>
    <td>Sea-Ice Area North</td>
    <td>1e6 km2</td>
    <td>total area of sea ice in the Northern hemisphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59139548-9e49-11e5-803c-0d0b866b59f3.html">siareas</a></td>
    <td>Sea-Ice Area South</td>
    <td>1e6 km2</td>
    <td>total area of sea ice in the Southern hemisphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590db8c6-9e49-11e5-803c-0d0b866b59f3.html">oxloss</a></td>
    <td>Total Odd Oxygen (Ox) Loss Rate</td>
    <td>mol m-3 s-1</td>
    <td>total chemical loss rate for o+o1d+o3</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/a0c10a4b65d3b79db581a649058a08b1.html">od550bb</a></td>
    <td>Aerosol Optical Depth at 550nm Due to Biomass Burning</td>
    <td>1</td>
    <td>total organic aerosol AOD due to biomass burning (excluding so4, nitrate BB components)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/41cef8aa37d1f0164ae061f293d4361c.html">pp</a></td>
    <td>Primary Carbon Production by Phytoplankton</td>
    <td>mol m-3 s-1</td>
    <td>total primary (organic carbon) production by phytoplankton</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/8416dffa-90ce-11e8-8e2e-a44cc8186c64.html">ppos</a></td>
    <td>Primary Carbon Production by Phytoplankton</td>
    <td>mol m-3 s-1</td>
    <td>total primary (organic carbon) production by phytoplankton</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5917ff52-9e49-11e5-803c-0d0b866b59f3.html">oxprod</a></td>
    <td>Total Odd Oxygen (Ox) Production Rate</td>
    <td>mol m-3 s-1</td>
    <td>total production rate of o+o1d+o3 including o2 photolysis and all o3 producing reactions</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/5913c9aa-9e49-11e5-803c-0d0b866b59f3.html">sivoln</a></td>
    <td>Sea-Ice Volume North</td>
    <td>1e3 km3</td>
    <td>total volume of sea ice in the Northern hemisphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ee2fa-9e49-11e5-803c-0d0b866b59f3.html">sivols</a></td>
    <td>Sea-Ice Volume South</td>
    <td>1e3 km3</td>
    <td>total volume of sea ice in the Southern hemisphere</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591792ce-9e49-11e5-803c-0d0b866b59f3.html">uwap</a></td>
    <td>Product of Eastward Wind and Omega</td>
    <td>Pa m s-2</td>
    <td>u*omega</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59175dc2-9e49-11e5-803c-0d0b866b59f3.html">u2</a></td>
    <td>Mean-Squared Eastward Wind Speed</td>
    <td>m2 s-2</td>
    <td>u*u</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/59137496-9e49-11e5-803c-0d0b866b59f3.html">uv</a></td>
    <td>Product of Eastward Wind and Northward Wind</td>
    <td>m2 s-2</td>
    <td>u*v</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/590ec446-9e49-11e5-803c-0d0b866b59f3.html">vwap</a></td>
    <td>Product of Northward Wind and Omega</td>
    <td>Pa m s-2</td>
    <td>v*omega</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/591485b6-9e49-11e5-803c-0d0b866b59f3.html">v2</a></td>
    <td>Mean-Squared Northward Wind Speed</td>
    <td>m2 s-2</td>
    <td>v*v</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/80a2832b0619764647393e3815ff399b.html">fddtdip</a></td>
    <td>Rate of Change of Net Dissolved Inorganic Phosphorus</td>
    <td>mol m-2 s-1</td>
    <td>vertical integral of net  time rate of change of phosphate</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/d66b7d75af3d1ed4e83b2f15a51ca731.html">fbddtalk</a></td>
    <td>Rate of Change of Biological Alkalinity Due to Biological Activity</td>
    <td>mol m-2 s-1</td>
    <td>vertical integral of net biological terms in time rate of change of alkalinity</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/0f19e65613afd83f8d9b888d2067ced4.html">fbddtdic</a></td>
    <td>Rate of Change of Dissolved Inorganic Carbon Due to Biological Activity</td>
    <td>mol m-2 s-1</td>
    <td>vertical integral of net biological terms in time rate of change of dissolved inorganic carbon</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/52ebeea7464b9fc011a92f21e65d6a7a.html">fbddtdife</a></td>
    <td>Rate of Change of Dissolved Inorganic Iron Due to Biological Activity</td>
    <td>mol m-2 s-1</td>
    <td>vertical integral of net biological terms in time rate of change of dissolved inorganic iron</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/18060c6741a6b65c90435d19adfbbc98.html">fbddtdisi</a></td>
    <td>Rate of Change of Dissolved Inorganic Silicon Due to Biological Activity</td>
    <td>mol m-2 s-1</td>
    <td>vertical integral of net biological terms in time rate of change of dissolved inorganic silicate</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/6c19638a0652fcbc6c6ff8455c536445.html">fbddtdin</a></td>
    <td>Rate of Change of Dissolved Inorganic Nitrogen Due to Biological Activity</td>
    <td>mol m-2 s-1</td>
    <td>vertical integral of net biological terms in time rate of change of nitrogen nutrients (e.g. NO3+NH4)</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/2f046f30404d6cfcd5286a2a7f12d8fa.html">fbddtdip</a></td>
    <td>Rate of Change of Dissolved Inorganic Phosphorus Due to Biological Activity</td>
    <td>mol m-2 s-1</td>
    <td>vertical integral of net biological terms in time rate of change of phosphate</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/3e0c9853afc682db9a950cc5bc3c1c3a.html">fddtalk</a></td>
    <td>Rate of Change of Total Alkalinity</td>
    <td>mol m-2 s-1</td>
    <td>vertical integral of net time rate of change of alkalinity</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/df087f7801b9ca8b671eba159de9b6e7.html">fddtdife</a></td>
    <td>Rate of Change of Net Dissolved Inorganic Iron</td>
    <td>mol m-2 s-1</td>
    <td>vertical integral of net time rate of change of dissolved inorganic iron</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/ee10c562c1164acf3bf03955dd6fc00d.html">fddtdisi</a></td>
    <td>Rate of Change of Net Dissolved Inorganic Silicon</td>
    <td>mol m-2 s-1</td>
    <td>vertical integral of net time rate of change of dissolved inorganic silicate</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/fc637f1c75e58be8a6e4112411a00f36.html">prw</a></td>
    <td>Water Vapor Path</td>
    <td>kg m-2</td>
    <td>vertically integrated through the atmospheric column</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/19058c0a2aaaf3eaeca5093ea87c7e46.html">snd</a></td>
    <td>Snow Depth</td>
    <td>m</td>
    <td>where land over land, this is computed as the mean thickness of snow in the land portion of the grid cell (averaging over the entire land portion, including the snow-free fraction).  Reported as 0.0 where the land fraction is 0.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/84f0ea44-acb7-11e6-b5ee-ac72891c3257.html">fNAnthDisturb</a></td>
    <td>Nitrogen Mass Flux out of Land Due to any Human Activity</td>
    <td>kg m-2 s-1</td>
    <td>will require some careful definition to make sure we capture everything - any human activity that releases nitrogen from land  instead of into product pool goes here. E.g. Deforestation fire, harvest assumed to decompose straight away, grazing...</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/7002f5a3bc5218f16a39f3dfabf42244.html">vsfpr</a></td>
    <td>Virtual Salt Flux into Sea Water Due to Rainfall</td>
    <td>kg m-2 s-1</td>
    <td>zero for models using real water fluxes.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/86e9eba62a2d7875705086a75ba7f78c.html">vsfriver</a></td>
    <td>Virtual Salt Flux into Sea Water from Rivers</td>
    <td>kg m-2 s-1</td>
    <td>zero for models using real water fluxes.</td>
  </tr>
  <tr>
    <td><a href="https://clipc-services.ceda.ac.uk/dreq//u/b76d616f8f03bb60a0dffa023dfd0525.html">vsfevap</a></td>
    <td>Virtual Salt Flux into Sea Water Due to Evaporation</td>
    <td>kg m-2 s-1</td>
    <td>zero for models using real water fluxes.</td>
  </tr>
</tbody>
</table>