# Set up Spack for building ACCESS models

!!! danger
    This page is tailored to experienced users and collaborators developing ACCESS models.

[Spack](https://spack.io/about/) is a build-from-source package manager, specifically designed to simplify the installation of scientific software on supercomputers.

To use _Spack_, please familiarise yourself with the [Basic Usage instructions](https://spack.readthedocs.io/en/latest/basic_usage.html) and [Environments](https://spack.readthedocs.io/en/latest/environments.html).

We also recommend that you refer to the [Spack 101 Tutorial](https://spack-tutorial.readthedocs.io/en/latest/).


## Prerequisites
These instructions are tailored specifically for _Gadi_. To use _Spack_ on _Gadi_, you must have an NCI account. For instructions on how to set up an account, refer to [Set Up your NCI Account](/getting_started/set_up_nci_account).

## Set up Spack on Gadi

!!! tip
    The steps in this section only need to be done once.

### Create a directory for Spack

Create a directory on the filesystem where _Spack_ will be installed (e.g. `/g/data/$PROJECT/$USER/spack/0.22`).

```
mkdir -p spack/0.22
cd spack/0.22
```

### Clone the relevant git repositories

!!! info
    ACCESS-NRI maintains a [fork of Spack](https://github.com/ACCESS-NRI/spack) to enable back-porting fixes from more recent spack versions. This fork is the one used in these instructions.

```
git clone -c feature.manyFiles=true https://github.com/ACCESS-NRI/spack.git --branch releases/v0.22
git clone https://github.com/ACCESS-NRI/spack-packages.git --branch main
git clone https://github.com/ACCESS-NRI/spack-config.git --branch main
```

### Link Spack configuration files to the Spack instance

```
ln -s -r -v spack-config/v0.22/gadi/* spack/etc/spack/
```

!!! success
    Your _Spack_ setup is complete!

## Test Spack (OPTIONAL)

To test _Spack_ we will create an `ACCESS-TEST` environment and build the relevant packages. Then, we will uninstall all the packages and remove the environment.

```
module purge
cd spack/0.22
. spack-config/spack-enable.bash
git clone https://github.com/ACCESS-NRI/ACCESS-TEST.git
spack env create test ACCESS-TEST/spack.yaml
spack env activate -p test
spack find
spack concretize -f
spack install --verbose
spack find
spack uninstall --remove --all
spack env deactivate
spack env rm test
rm -rf ACCESS-TEST
```

## Update Spack on Gadi

Keep your Spack instance up-to-date by doing the following:

```
cd spack/0.22
git -C spack fetch --all -Pp
git -C spack reset --hard origin/releases/v0.22
git -C spack-config pull
git -C spack-packages pull
```
