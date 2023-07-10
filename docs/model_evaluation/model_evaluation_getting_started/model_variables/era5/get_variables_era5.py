# This code reads in the index.html from https://codes.ecmwf.int/grib/param-db
# and reformats it into an MD table that can be used for access-hive
# by splitting the html file into strings with reoccuring formatting

import numpy as np

file1 = open('era5_index.html', 'r')
Lines = file1.readlines()[0]
Lines = Lines.split("}, {")

reformatted_md = [
    ['<!-- ERA5 from https://codes.ecmwf.int/grib/param-db/ -->'],
    [''],
    ['<table style="border-collapse: collapse; width: 100%;">'],
    ['<thead>'],
    ['  <tr>'],
    ['    <th>Variable</th>'],
    ['    <th>Name</th>'],
    ['    <th>Units</th>'],
    ['    <th>ERA5 Land?</th>'],
    ['    <th>netCDF?</th>'],
    ['  </tr>'],
    ['</thead>'],
    ['<tbody id="era_variable_table">']
]

print_content = False
for line_index, line in enumerate(Lines):
    
    if line_index == 0:
        line = line[17:]
    

    line_parts = line.split('", "')

    index_unit = line_parts[2].split(', "units_name": "')
    
    identifier = index_unit[0][11:]
    
    param_format = line_parts[3].split('param_format')
    
    variable = line_parts[0][20:]
    
    name = line_parts[1][14:]
    href = 'https://codes.ecmwf.int/grib/param-db/?id='+identifier
    unit = index_unit[1]
    is_netcdf = bool(int(param_format[3][10:-3]))

    identifier_era5_land = [129,26,172,27,28,17343,29,30,228008,228009,228010,228011,228012,228013,228014,260038,3066,32,33,39,40,41,42,66,67,134,139,141,165,166,167,168,170,183,198,235,236,238,243,8,9,45,144,146,147,169,175,176,177,182,205,228,228100,228101,228102,228103,228251]

    if is_netcdf | (int(identifier) in identifier_era5_land):

        reformatted_md.append(['  <tr>'])
        reformatted_md.append(['    <td><a href="'+href+'">'+variable+'</a></td>'])
        reformatted_md.append(['    <td>'+name+'</td>'])
        reformatted_md.append(['    <td>'+unit+'</td>'])
        if int(identifier) in identifier_era5_land:
            reformatted_md.append(['    <td> yes </td>'])
        else:
            reformatted_md.append(['    <td> no </td>'])

        if is_netcdf:
            reformatted_md.append(['    <td> yes </td>'])
        else:
            reformatted_md.append(['    <td> no </td>'])
        reformatted_md.append(['  </tr>'])

reformatted_md.append(['</tbody>'])
reformatted_md.append(['</table>'])

np.savetxt('era5_mkdocs_ready.txt',np.array(reformatted_md),fmt='%s')
