# Setup

## Get the documentation source
You need to clone the ACCESS-Hub Community repository to your local machine:
```
git clone git@github.com:ACCESS-Hub/ACCESS-Hub.git
```

## Install Material for Mkdocs (not required)

<!-- markdown-link-check-disable-next-line -->
If you would like to preview the documentation locally to check your modifications before submitting them to the ACCESS-Hub site and you are comfortable with installing Python packages, you will need to install Material for Mkdocs. However, this is not required as there is [a preview available as part of the submission process][preview].

You can install Material for Mkdocs on your local machine with `pip` or `conda`:

 - using pip
 ```
 pip install mkdocs-material
 ```
 - using conda
 ```
 conda create -n doc -c conda-forge mkdocs-material
 ```
### Additional plugins
The following plugins will also need to be installed if you want to preview the documentation locally, using the same method as for mkdocs-material:

 - mkdocs-git-revision-date-localized-plugin

[preview]: ../modify_documentation/#preview-of-the-documentation