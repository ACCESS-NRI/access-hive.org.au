[spack_environments]: https://spack.readthedocs.io/en/latest/environments.html

# Set up Spack for building ACCESS models

[Spack](https://spack.io/about/) is a build-from-source package manager, specifically designed to simplify the installation of scientific software on supercomputers.

To know more about _Spack_ usage, please familiarise yourself with the [Basic Usage instructions](https://spack.readthedocs.io/en/latest/basic_usage.html) and [Environments][spack_environments].<br>
We also reccommend that you refer to the [Spack 101 Tutorial](https://spack-tutorial.readthedocs.io/en/latest/).


## Prerequisites
These instructions are tailored specifically for _Gadi_. To use _Spack_ on _Gadi_, you must have an NCI account. For instructions on how to set up an account, refer to [Set Up your NCI Account](/getting_started/set_up_nci_account).

## Set up Spack on Gadi

### Create a directory for Spack

!!! tip
    This step is optional, but it is recommended you have a selected directory where to keep your _Spack_ distribution.

The complete _Spack_ distribution is approximately 120 MB in size, with additional space needed for all the packages built. For this reason, we reccommend placing _Spack_'s directory somewhere in `/g/data/`. An example can be `/g/data/$PROJECT/$USER/myspack`.

To create the directory mentioned above and navigate into it, run the following command:
```
mkdir -p /g/data/$PROJECT/$USER/myspack && cd $_
```

### Get Spack

To get the _Spack_ executable and configuration files, run the following commands to clone the respective GitHub repositories:

```
git clone -c feature.manyFiles=true https://github.com/ACCESS-NRI/spack.git --branch releases/v0.22 --single-branch --depth=1
git clone https://github.com/ACCESS-NRI/spack-packages.git --branch main
git clone https://github.com/ACCESS-NRI/spack-config.git --branch main
```

### Link Spack configuration files

To link the _Spack_ configuration files to the _Spack_ instance, run the following command:

```
ln -s -r -v spack-config/v0.22/gadi/* spack/etc/spack/
```

!!! success
    Your _Spack_ setup is complete!

## Test Spack (OPTIONAL)

To test _Spack_ we will create an [environment][spack_environments] (in this example it will be the one used to build [ACCESS-OM2](/models/configurations/access-om#access-om2) executables) and build the relevant packages. Then, we will uninstall all the packages and remove the environment.

All the steps listed above can be performed by running the following commands (where `<spack_directory>` should be replaced with the [directory for Spack](#create-a-directory-for-spack)):
```
. <spack_directory>/spack-config/spack-enable.bash
git clone https://github.com/ACCESS-NRI/ACCESS-OM2.git
spack env create access-om2 ACCESS-OM2/spack.yaml
spack env activate -p access-om2
spack find
spack install --verbose
spack find
spack uninstall --remove --all -y
spack env deactivate
spack env rm access-om2 -y
rm -rf ACCESS-OM2
```
