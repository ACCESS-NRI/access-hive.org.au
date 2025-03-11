!!! danger
    This page is tailored to experienced users and collaborators developing ACCESS models.<br>
    This step is *not* required if you *only* want to run a model. If you are looking for information on how to run a model, refer to the [Run a Model](/models/run-a-model) section.

# Set up Spack for building ACCESS models

[Spack](https://spack.io/about/) is a build-from-source package manager, specifically designed to simplify the installation of scientific software on supercomputers.

To use _Spack_, please familiarise yourself with the [Basic Usage instructions](https://spack.readthedocs.io/en/latest/basic_usage.html) and [Environments](https://spack.readthedocs.io/en/latest/environments.html).

We also recommend that you refer to the [Spack 101 Tutorial](https://spack-tutorial.readthedocs.io/en/latest/).

## Prerequisites
These instructions are tailored specifically for _Gadi_. To use _Spack_ on _Gadi_, you must have an NCI account. For instructions on how to set up an account, refer to [Set Up your NCI Account](/getting_started/set_up_nci_account).

## Set up Spack on Gadi

!!! tip
    The steps in this section only need to be done once.

### Create a directory for Spack

Create a directory on the filesystem where _Spack_ will be installed (e.g. `/g/data/$PROJECT/$USER/spack/0.22`). Use the `/g/data` filesystem if you wish to run the binaries on the compute nodes.

```
mkdir -p /g/data/$PROJECT/$USER/spack/0.22
cd /g/data/$PROJECT/$USER/spack/0.22
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

For instructions on how to build an ACCESS model using _Spack_, refer to [Build or modify an ACCESS model's source code](/models/run-a-model/build_a_model).

## Enable Spack

!!! warning
    This step needs to be carried out for any new login or new shell environment.

```
cd /g/data/$PROJECT/$USER/spack/0.22
module purge
. spack-config/spack-enable.bash
```

!!! warning
    There is a space between the `.` and the path to the file, as we are sourcing the file.

## Test Spack (OPTIONAL)

To test that your Spack installation works as expected, we will create an `ACCESS-TEST` environment and build the relevant packages (this will take approximately 30 minutes). Then, we will uninstall all the packages and remove the environment.


### Create a Spack managed environment

```
git clone https://github.com/ACCESS-NRI/ACCESS-TEST.git
spack env create test ACCESS-TEST/spack.yaml
```

<terminal-window>
  <terminal-line data="input">git clone https://github.com/ACCESS-NRI/ACCESS-TEST.git</terminal-line>
    <terminal-line>Cloning into 'ACCESS-TEST'...</terminal-line>
    <terminal-line>remote: Enumerating objects: 33, done.</terminal-line>
    <terminal-line>remote: Counting objects: 100% (33/33), done.</terminal-line>
    <terminal-line>remote: Compressing objects: 100% (20/20), done.</terminal-line>
    <terminal-line>remote: Total 33 (delta 12), reused 27 (delta 9), pack-reused 0 (from 0)</terminal-line>
    <terminal-line>Receiving objects: 100% (33/33), 15.92 KiB | 1.06 MiB/s, done.</terminal-line>
    <terminal-line>Resolving deltas: 100% (12/12), done.</terminal-line>
  <terminal-line data="input">spack env create test ACCESS-TEST/spack.yaml</terminal-line>
  <terminal-line><span class="spack-indigo bold">\==></span> Created environment <span class="spack-cyan">test</span> in: <span class="spack-cyan">/g/data/$PROJECT/$USER/spack/0.22/environments/test</span></terminal-line>
  <terminal-line><span class="spack-indigo bold">\==></span> Activate with: <span class="spack-cyan">spack env -p activate test</span></terminal-line>
</terminal-window>

### Activate the environment
Activate the `test` _Spack_ environment by running:
```
spack env activate -p test
```
<terminal-window>
    <terminal-line data="input">spack env activate -p test</terminal-line>
    <terminal-line data="input" directory="[test]" class="spack" lineDelay=0></terminal-line>
</terminal-window>

### Compile packages

```
spack find
spack concretize -f --fresh
spack install
```

<terminal-window lineDelay=0>
    <terminal-line directory="[test]" class="spack" data="input" lineDelay=600>spack find</terminal-line>
    <terminal-line lineDelay=500><span class="spack-indigo">\==></span> In environment test</terminal-line>
    <terminal-line><span class="spack-indigo">\==></span> 1 root specs</terminal-line>
    <terminal-line><span class="spack-grey keep-blanks"> - </span> access-test<span class="spack-cyan">@git.2024.09.20</span></terminal-line>
    <terminal-line></terminal-line>
    <terminal-line><span class="spack-indigo">\==></span> 0 installed packages</terminal-line>
    <terminal-line lineDelay=600 directory="[test]" class="spack" data="input">spack concretize -f --fresh</terminal-line>
    <terminal-line lineDelay=2000><span class="spack-indigo">\==></span> Concretized access-test<span class="spack-cyan">@git.2024.09.20</span></terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   hmy75yl</span> access-test<span class="spack-cyan">@git.2024.09.20</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">\~deterministic build_system=bundle</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[e]</span> <span class="spack-grey keep-blanks"> 5elnsoi    </span> ^glibc<span class="spack-cyan">@2.28</span><span class="spack-green">%intel@2021.10.0</span> <span class="spack-indigo">build_system=autotools</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   kok5n7h    </span> ^oasis3-mct<span class="spack-cyan">@git.2023.11.09=2023.11.09</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">\~deterministic\~optimisation_report build_system=makefile</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   doeoclg        </span> ^gmake<span class="spack-cyan">@4.4.1</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">\~guile build_system=generic</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
         <span class="spack-grey keep-blanks"> -   ntfunrm        </span> ^netcdf-fortran<span class="spack-cyan">@4.6.1</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">\~doc+pic+shared build_system=autotools</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   vob7om3            </span> ^netcdf-c<span class="spack-cyan">@4.9.2</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">+blosc\~byterange\~dap\~fsync\~hdf4\~jna+mpi\~nczarr_zip+optimize\~parallel-netcdf+pic+shared+szip+zstd build_system=autotools patches=0161eb8</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   357vng5                </span> ^bzip2<span class="spack-cyan">@1.0.8</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">\~debug\~pic+shared build_system=generic</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   y7n7vkn                    </span> ^diffutils<span class="spack-cyan">@3.10</span><span class="spack-green">%intel@2021.10.0</span> <span class="spack-indigo">build_system=autotools</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   55ipnye                        </span> ^libiconv<span class="spack-cyan">@1.17</span><span class="spack-green">%intel@2021.10.0</span> <span class="spack-indigo">build_system=autotools libs=shared,static</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   zrjfo56                </span> ^c-blosc<span class="spack-cyan">@1.21.5</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">+avx2\~ipo build_system=cmake build_type=Release generator=make</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[e]</span> <span class="spack-grey keep-blanks"> rldyvqn                    </span> ^cmake<span class="spack-cyan">@3.24.2</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">\~doc+ncurses+ownlibs build_system=generic build_type=Release</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
</terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   7a5olrr                    </span> ^lz4<span class="spack-cyan">@1.9.4</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">+pic build_system=makefile libs=shared,static</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   wk4pvru                    </span> ^snappy<span class="spack-cyan">@1.1.10</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">\~ipo+pic+shared build_system=cmake build_type=Release generator=make</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   aumsrgz                </span> ^hdf5<span class="spack-cyan">@1.14.3</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">\~cxx\~fortran+hl\~ipo\~java\~map+mpi+shared\~subfiling\~szip\~threadsafe+tools api=default build_system=cmake build_type=Release generator=make patches=82088c8</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
         <span class="spack-grey keep-blanks"> -   vrupasu                    </span> ^pkgconf<span class="spack-cyan">@2.2.0</span><span class="spack-green">%intel@2021.10.0</span> <span class="spack-indigo">build_system=autotools</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   x4hw5jq                </span> ^libaec<span class="spack-cyan">@1.0.6</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">\~ipo+shared build_system=cmake build_type=Release generator=make</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   wa2x7rh                </span> ^zlib-ng<span class="spack-cyan">@2.1.6</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">+compat+new_strategies+opt+pic+shared build_system=autotools</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-grey keep-blanks"> -   kzc7pcv                </span> ^zstd<span class="spack-cyan">@1.5.6</span><span class="spack-green">%intel@2021.10.0</span><span class="spack-indigo">\~programs build_system=makefile libs=shared,static</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[e]</span> <span class="spack-grey keep-blanks"> uvea7q2        </span> ^openmpi<span class="spack-cyan">@4.1.5</span><span class="spack-green">%intel@2021.10.0</span> <span class="spack-indigo">cppflags='-diag-disable=10441' \~atomics\~cuda\~cxx\~cxx_exceptions\~gpfs\~internal-hwloc\~internal-libevent\~internal-pmix\~java\~legacylaunchers\~lustre\~memchecker\~openshmem\~orterunprefix\~romio+rsh\~singularity\~static+vt+wrapper-rpath build_system=autotools fabrics=none romio-filesystem=none schedulers=none</span> <span class="spack-pink">arch=linux-rocky8-x86_64</span>
    </terminal-line>
    <terminal-line directory="[test]" class="spack" lineDelay=2000 data="input">
        spack install
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span class="spack-highlighted">Installing</span> <span class="spack-green">glibc-2.28-mqjolvbeskcnhz5chvtdshk4x4sfnycs</span> <span class="spack-highlighted">[1/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/glibc-2.28-mqjolvbeskcnhz5chvtdshk4x4sfnycs
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span class="spack-highlighted">Installing</span> <span class="spack-green">cmake-3.24.2-vc4y4c64s55j5u6kp37ciw2hcghuxhhc</span> <span class="spack-highlighted">[2/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/cmake-3.24.2-vc4y4c64s55j5u6kp37ciw2hcghuxhhc
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span class="spack-highlighted">Installing</span> <span class="spack-green">openmpi-4.0.2-ikhujrkyukytbkxxyk3mub44v63vuzfz</span> <span class="spack-highlighted">[3/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/openmpi-4.0.2-ikhujrkyukytbkxxyk3mub44v63vuzfz
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">gmake-4.4.1-j6yscmmcn3qws7n35klote7rivw7foa6</span> <span class="spack-highlighted">[4/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/gmake-4.4.1-j6yscmmcn3qws7n35klote7rivw7foa6
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">libaec-1.0.6-x4hw5jqq3zvnrgjicgweicomeaelulqq</span> <span class="spack-highlighted">[5/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/libaec-1.0.6-x4hw5jqq3zvnrgjicgweicomeaelulqq
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">zlib-ng-2.1.6-wa2x7rho3km6qpiki56dpjlpsce4c5n6</span> <span class="spack-highlighted">[6/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/zlib-ng-2.1.6-wa2x7rho3km6qpiki56dpjlpsce4c5n6
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">snappy-1.1.10-wk4pvrufyvy7v3hxn5nwa3i3fncp3azm</span> <span class="spack-highlighted">[7/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/snappy-1.1.10-wk4pvrufyvy7v3hxn5nwa3i3fncp3azm
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">pkgconf-2.2.0-vrupasu7smpgcbarzpdwap45fcvjbjoa</span> <span class="spack-highlighted">[8/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/pkgconf-2.2.0-vrupasu7smpgcbarzpdwap45fcvjbjoa
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">zstd-1.5.6-kzc7pcve7csxlonb2uaxzgyyuqfx6cz4</span> <span class="spack-highlighted">[9/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/zstd-1.5.6-kzc7pcve7csxlonb2uaxzgyyuqfx6cz4
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">lz4-1.9.4-7a5olrrnewy7kmlh5x4bstziuheiqkz4</span> <span class="spack-highlighted">[10/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/lz4-1.9.4-7a5olrrnewy7kmlh5x4bstziuheiqkz4
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">libiconv-1.17-55ipnyeeqcpbfgaqfanu36viaqqni3sx</span> <span class="spack-highlighted">[11/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/libiconv-1.17-55ipnyeeqcpbfgaqfanu36viaqqni3sx
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">hdf5-1.14.3-aumsrgzvbh6grtyyegzuufilnqa7ftm7</span> <span class="spack-highlighted">[12/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/hdf5-1.14.3-aumsrgzvbh6grtyyegzuufilnqa7ftm7
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">c-blosc-1.21.5-zrjfo567d2n6ctwayae77z3b54mf23yc</span> <span class="spack-highlighted">[13/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/c-blosc-1.21.5-zrjfo567d2n6ctwayae77z3b54mf23yc
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">diffutils-3.10-y7n7vkngczu47neysm3retisvlsmw53l</span> <span class="spack-highlighted">[14/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/diffutils-3.10-y7n7vkngczu47neysm3retisvlsmw53l
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">bzip2-1.0.8-357vng5dpd7w7s7lletycxccjbl45ngt</span> <span class="spack-highlighted">[15/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/bzip2-1.0.8-357vng5dpd7w7s7lletycxccjbl45ngt
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">netcdf-c-4.9.2-vob7om32jopqwss5jilrdtqqogjvcmzb</span> <span class="spack-highlighted">[16/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/netcdf-c-4.9.2-vob7om32jopqwss5jilrdtqqogjvcmzb
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">netcdf-fortran-4.6.1-ntfunrmysxanqqu7sqfmf66zdkd2xemy</span> <span class="spack-highlighted">[17/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/netcdf-fortran-4.6.1-ntfunrmysxanqqu7sqfmf66zdkd2xemy
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">oasis3-mct-git.2023.11.09=2023.11.09-kok5n7hvm374eicnidcedxhgxmmytc2p</span> <span class="spack-highlighted">[18/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/oasis3-mct-git.2023.11.09=2023.11.09-kok5n7hvm374eicnidcedxhgxmmytc2p
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> <span   class="spack-highlighted">Installing</span> <span class="spack-green">access-test-git.2024.09.20=2024.09.20-hmy75yl26hexivgsw7zhlvbnjgst3gwc</span> <span class="spack-highlighted">[19/19]</span>
    </terminal-line>
    <terminal-line>
        <span class="spack-green">[+]</span> /g/data/$PROJECT/$USER/spack/0.22/release/linux-rocky8-x86_64/intel-2021.10.0/access-test-git.2024.09.20=2024.09.20-hmy75yl26hexivgsw7zhlvbnjgst3gwc
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo bold">\==></span> Updating view at /g/data/$PROJECT/$USER/spack/0.22/environments/test/.spack-env/view
    </terminal-line>
</terminal-window>

!!! info
    The full output has been truncated for brevity.

### Check installed packages

```
spack find
```
<terminal-window lineDelay=0>
    <terminal-line directory="[test]" class="spack" data="input" lineDelay=600>spack find</terminal-line>
    <terminal-line lineDelay=500>
        <span class="spack-indigo">\==></span> In environment test
    </terminal-line>
    <terminal-line>
        <span class="spack-indigo">\==></span> 1 root specs
    </terminal-line>
    <terminal-line>
        <span class="spack-green"> [+] </span> access-test<span class="spack-cyan">@git.2024.09.20</span>
    </terminal-line>
    <terminal-line></terminal-line>
    <terminal-line>
        <span class="spack-indigo">\==></span> installed packages
    </terminal-line>
    <terminal-line>
        -- <span class="spack-pink">linux-rocky8-x86_64</span> / <span class="spack-green">intel@2021.10.0</span> ------------------------
    </terminal-line>
    <terminal-line class="ls-output-format">
        <span class="spack-highlighted">access-test</span><span class="spack-cyan">@git.2024.09.20</span> 
        diffutils<span class="spack-cyan">@3.10</span> 
        libaec<span class="spack-cyan">@1.0.6</span> netcdf-fortran<span class="spack-cyan">@4.6.1</span> snappy<span class="spack-cyan">@1.1.10</span> 
        bzip2<span class="spack-cyan">@1.0.8</span> 
        glibc<span class="spack-cyan">@2.28</span> 
        libiconv<span class="spack-cyan">@1.17</span> oasis3-mct<span class="spack-cyan">@git.2023.11.09=2023.11.09</span> zlib-ng<span class="spack-cyan">@2.1.6</span>
        c-blosc<span class="spack-cyan">@1.21.5</span> 
        gmake<span class="spack-cyan">@4.4.1</span> 
        lz4<span class="spack-cyan">@1.9.4</span> 
        openmpi@4.1.5 zstd<span class="spack-cyan">@1.5.6</span> 
        cmake<span class="spack-cyan">@3.24.2</span> 
        hdf5<span class="spack-cyan">@1.14.3</span> 
        netcdf-c<span class="spack-cyan">@4.9.2</span> 
        pkgconf<span class="spack-cyan">@2.2.0</span>
    </terminal-line>
    <terminal-line><span class="spack-indigo">\==></span> 19 installed packages</terminal-line>
</terminal-window>

### Cleanup
```
spack uninstall --remove --all
spack env deactivate
spack env rm test
rm -rf ACCESS-TEST
```

## Update Spack on Gadi

Keep your Spack instance up-to-date by doing the following:

```
cd /g/data/$PROJECT/$USER/spack/0.22
git -C spack fetch --all -Pp
git -C spack reset --hard origin/releases/v0.22
git -C spack-config pull
git -C spack-packages pull
```

<custom-references>
- [https://spack.readthedocs.io/en/latest/](https://spack.readthedocs.io/en/latest/)
</custom-references>
