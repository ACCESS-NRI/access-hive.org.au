# Getting Started with Model Evaluation at Gadi@NCI

At this stage of *Getting Started*, we assume that you already have access to Gadi@NCI. If this is not the case, please go to our instructions on how to get [access to Gadi@NCI](./access_to_gadi_at_nci.md)

Here we describe where you can find, load, and evalulate observational and model data on Gadi.

Note: You do not automatically have access to all of Gadi's storage at `/g/data/`, but need to be part of a `$PROJECT` to see files at `/g/data/$PROJECT`. Furthermore, if you use Gadi's job submission system PBS (Portable Batch System), you need to add the relevant storage to the `#PBS -l storage=gdata/xp65+gdata/kj13` (if you want the job to have access to `xp65` and `kj13` in this example).

### 2.1) `access-med`: Our currated `conda` environment for you on Gadi

To avoid running multiple (different) versions of code on Gadi, we provide you with a `conda` environment called `access-med` that we actually curate for you (version 0.1 is from June 2023).

In order to change to this environment, please execute the following commands after loggin onto Gadi (and as part of your PBS scripts):
<terminal-animation>
    <terminal-line data="input">module use /g/data/xp65/public/modules</terminal-line>
    <terminal-line data="input">module load conda/access-med</terminal-line>
    <terminal-line>Loading conda/access-med-0.1</terminal-line>
    <terminal-line>   Loading requirement: singularity</terminal-line>
    <terminal-line data="input">esmvaltool recipes list</terminal-line>
</terminal-animation>

```
$ module use /g/data/xp65/public/modules
$ module load conda/access-med
```

If you are planning to run your code through JupyterLab on [NCI's ARE](https://are.nci.org.au), you need to use `/g/data/xp65/public/modules` as **Module directories** and `conda/are` as **Modules** when launching a JupyterLab session.

You are now able to use the scripts of our currated environment, including `python3`, `intake`, `jupyter`, `esmvaltool`, or `ilamb`. The complete list of dependencies can be found in our dedicated [GitHub repository](https://github.com/ACCESS-NRI/MED-condaenv/blob/main/scripts/environment.yml).

### 2.2) Observational Data

We provide an extensive collection of observational data on Gadi@NCI within the `/g/data/kj13/datasets` directory. 

Please take a look at our [Observational Data Catalog](../model_evaluation_observational_catalogs.md) for an overview.

### 2.3) Model Data

There are many models and data stored on Gadi, as you can imagine from the plethora of projects in [Section 1.2](#12-join-relevant-nci-projects). Downloading this data is hardly practical, so we suggest to work on Gadi instead.

To avoid endless searches within Gadi's storage, we written a useful 'library' tool, called `access-nri-catalog`, that allows to search the Model Catalogs easily and is already loaded as part of our `access-med` `conda` environment. To find out how you can search for Model Data on Gadi, take a look at our [Model Catalog](../model_evaluation_model_catalogs/model_evaluation_search_models.md).

### 2.5) Model Evaluation

Now that you have both [Observational Data](#22-observational-data) and [Model Data](#23-model-data) at the palm of your hand on Gadi@NCI, there are many ways to evaluate this data.

As part of our ACCESS-NRI `conda` environment, we provide several Model Evaluation Tools, like `ilamb` or `esmvaltool`.

Check out [Model Evaluation at Gadi](../model_evaluation_on_gadi/index.md) to find out how you can use them on Gadi.