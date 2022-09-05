# Change the navigation

The navigation for the site is defined in `mkdocs.yml`.

## A simple example

The easiest way to explain how it works is to look at an example. Let's say `mkdocs.yml` contains:

```yaml
nav:
  - Welcome: index.md
  - ACCESS NRI: ACCESS-NRI/ACCESS-NRI.md
  - Community: 
    - Generate Bathymetry: Community/Bathymetry.md
  - How to contribute: 
    - How to contribute: Help/How_to_contribute.md
    - Setup: Help/contribution_setup.md
    - Modify the documentation: Help/modify_documentation.md
    - Change the navigation: Help/change_navigation.md
```

The top level category names define the tabs in the header bar. So here we have the tabs: "Welcome", "ACCESS NRI", "Community" and "How to contribute". It also defines the name of the top section under each tab.

![TabExample](../assets/tabs_example.png)

The second level of categories indicate the name of each page under that section. So the "ACCESS NRI" tab has the text directly under the section "ACCESS NRI". The "Community" tab has a section called "Community" that contains one page: "Generate Bathymetry". Finally, the "How to contribute" tab has 1 section "How to contribute" with 4 pages.

The filenames indicate the path to the file with the text for each page. It is recommended to use the title of each file (i.e. the Header 1) as the name of the page and the filename.

![PageExample](../assets/pages_example.png)

## Add sections to a tab

It is possible to define several sections per tab. For example:

```yaml
nav:
  - Welcome: index.md
  - ACCESS NRI: ACCESS-NRI/ACCESS-NRI.md
  - Community: 
    - Generate Bathymetry: Community/Bathymetry.md
  - How to contribute: 
    - How to contribute: Help/How_to_contribute.md
    - Setup: Help/contribution_setup.md
    - Modify the documentation: Help/modify_documentation.md
    - Change the navigation: Help/change_navigation.md
    - My example:
        - Beautiful example: Help/beautiful_example.md
```
will create this navigation:
![Nav2Sections](../assets/sections_example.png)