import numpy as np

file1 = open('cmip6_variables.html', 'r')
Lines = file1.readlines()

reformatted_md = [
    ['<!-- CMIP6 from https://clipc-services.ceda.ac.uk/dreq/index/var.html -->'],
    [''],
    ['<table style="border-collapse: collapse; width: 100%;">'],
    ['<thead>'],
    ['  <tr>'],
    ['    <th>Variable</th>'],
    ['    <th>Name</th>'],
    ['    <th>Units</th>'],
    # ['    <th>Description</th>'],
    ['  </tr>'],
    ['</thead>'],
    ['<tbody id="cmip_variable_table">']
]

print_content = False
for line_index, line in enumerate(Lines):
        
    # the first entry will be the long explanation
    if '<span' in line:
        description = line[29:-3]

    # next will be the link to the explanation and the variable
    if '<a href="../u' in line:
        href_and_variable = line[31:-5]
        href, variable = href_and_variable.split('">')
        href = 'https://clipc-services.ceda.ac.uk/dreq/'+href
        
    # finally, there will be the short name and the unit
    if ': ' in line:
        if ('<title' not in line) & ('<h' not in line) & ('<span' not in line):
            name_and_unit = line[18:-2]
            name_units = name_and_unit.split(' [')
            name = name_units[0]
            unit = name_units[-1]
            
    # the entry for a given variable is over, once we hit </li>.
    # That is where we start to assemble to table
    if '</li>' in line:
        
        reformatted_md.append(['  <tr>'])
        reformatted_md.append(['    <td><a href="'+href+'">'+variable+'</a></td>'])
        reformatted_md.append(['    <td>'+name+'</td>'])
        reformatted_md.append(['    <td>'+unit+'</td>'])
        # reformatted_md.append(['    <td>'+description+'</td>'])
        reformatted_md.append(['  </tr>'])

reformatted_md.append(['</tbody>'])
reformatted_md.append(['</table>'])

np.savetxt('cmip6_mkdocs_ready.txt',np.array(reformatted_md),fmt='%s')
