# FCM

[FCM](https://github.com/metomi/fcm) is the build system used at the UK Met Office for interacting with source code repositories and building weather and climate models.

FCM is tightly integrated with Subversion and Fortran, and is built specifically for Met Office working practices. It can combine several branches together at build time and automatically find dependencies between Fortran modules.

A new build system called [FAB](https://github.com/metomi/fab) is currently in development at the Met Office, with the intention of it eventually replacing FCM.

## Using FCM

FCM can be used on [OOD](https://ood.nci.org.au), [ARE](https://are.nci.org.au) or [Gadi](https://opus.nci.org.au/display/Help/Gadi+User+Guide) by loading its module:
```
module use /g/data/access/modules
module load fcm
```

`fcm --help` will show the available commands. Several mirror standard Subversion commands but add special shortcuts to Met Office repositories, the `branch-` commands are helpful for following UM development working practices, and `fcm make` is used when running builds.

[FCM Documentation](http://metomi.github.io/fcm/doc/)

## FCM and Subversion

Subversion is a version control system used for source code, much like Git. The most commonly used commands are:

* `fcm checkout URL` - download source from URL
* `fcm update` - download any new changes from the server
* `fcm commit` - upload any changes back to the server
* `fcm revert` - undo any local uncommitted changes
* `fcm add`, `fcm remove` - add or remove files from version control

See `svn --help` for the full list of subversion commands. It's best to call the commands using `fcm` rather than `svn` when working with Met Office repositories because that enables keywords as well as some Met Office specific defaults.

[Subversion Quickstart Tutorial](https://svnbook.red-bean.com/en/1.7/svn.intro.quickstart.html)  
[FCM Code Management](http://metomi.github.io/fcm/doc/user_guide/code_management.html)

### Repository Keywords

Plain Subversion refers to repositories using URLs, e.g. `https://code.metoffice.gov.uk/svn/um/main/trunk@107106` is the URL for the UM trunk at version 12.2. FCM provides keywords to simplify these URLS somewhat, the equivalent FCM keyword for the same version is `fcm:um.x_tr@vn12.2`.

You can see the full list of available keywords with `fcm keyword-print`, use the name in square brackets with a `fcm:` prefix:
```
$ fcm keyword-print
location{primary}[admin] = file:///g/data/access/access-svn/UM_Admin
location{primary}[ancil.x] = https://code.metoffice.gov.uk/svn/ancil/main
location{primary}[ancil.xm] = https://metoffice-mirror/svn/ancil/main
location{primary}[um] = file:///g/data/access/access-svn/um
location{primary}[um.x] = https://code.metoffice.gov.uk/svn/um/main
location{primary}[um.xm] = https://metoffice-mirror/svn/um/main
# ...
```

Some of the keywords have extensions like `.x` and `.xm`:

* No extension `fcm:um` - Pre-MOSRS repository, for versions before UM 10
* `.x` extension `fcm:um.x` - MOSRS, to download from here you will need to enter a password
* `.xm` extension `fcm:um.xm` - Local MOSRS mirror. Read only, but you don't need a password so can be used from suites.

Normally the `.xm` keyword gets used inside a suite, while you would manually check out the `.x` keyword in order to edit a branch.

The `.xm` mirrors get updated every 5 minutes or so from the main MOSRS repositories. If you're actively developing changes it may take a moment for the source checked out by your suite to get updated, you may wish to use a [working copy branch](#working-copy-branches).

A further suffix of `_tr` or `_br` refers to the `/trunk` and `/branches` directories of the repository, so `fcm:um.x_tr` is the MOSRS UM repository's trunk.

If you wish to use your own keywords you can add them to the file `~/.metomi/fcm/keyword.cfg`.

[FCM Keyword Docs](http://metomi.github.io/fcm/doc/user_guide/annex_cfg.html#keyword)

### Version Keywords

As well as keywords for repositories FCM supports keywords for specific releases, e.g. version 12.2 of the UM. You can see the available releases for a repository with `fcm keyword-print REPO`, e.g.
```
$ fcm keyword-print fcm:um.xm
location{primary}[um.xm] = https://metoffice-mirror/svn/um/main
revision[um.xm:vn10.0] = 233
revision[um.xm:vn10.1] = 2765
revision[um.xm:vn10.2] = 7660
# ...
```
If you don't see any results make sure you've used `mosrs-auth` to save your MOSRS password in gpg-agent.

Version keywords can be set either in the repository itself or in a keywords.cfg file.

### Working Practices for Branching

FCM includes special commands for working with branches that you should use when working with Met Office repositories. Make a new branch from a specific release with (remember to use `.x` here, not `.xm`)
```
fcm branch-create mybranch fcm:um.x_tr@vn12.2
```
This branch will then be available for checkout as `fcm:um.x/branches/dev/USER/vn12.2_mybranch`. If your branch affects a MOSRS ticket you should use the `--ticket` flag when creating the branch as well.

The general process for creating a branch in the UM is:

1. Inform the [code owners](https://code.metoffice.gov.uk/trac/um/browser/main/trunk/CodeOwners.txt) for the section you intend to modify (contact info available in the [MOSRS user list](https://code.metoffice.gov.uk/trac/home/wiki/UserList)) and get their agreement for the work
1. Open a new ticket in MOSRS, assigning it to yourself and setting the description and metadata fields. `collab:ORG` should be added to the keywords to indicate which partner is adding the change, e.g. `collab:bom`.
2. Create a branch from the most recent model release and your ticket number, e.g. `fcm branch-create --ticket 1234 new_cloud_scheme fcm:um.x_tr@vn12.2`. Try to use a descriptive name for the branch.
3. Add a link to your branch in the ticket description
4. Check out your branch and make any changes, following the [UMDP3 style guide](https://code.metoffice.gov.uk/doc/um/latest/umdp.html#003)
5. Commit your changes back to the repository with `fcm commit`
6. Run `rose stem --group=developer` from within the working copy to test your changes locally
7. Complete the [required documentation](https://code.metoffice.gov.uk/trac/um/wiki/working_practices#Checkpoint:Whatdocumentationandapprovalsareneeded) for the change and request a scientific and technical review

Other systems may have slightly different working practices, check before you start developing a change.

[UM Development Working Practices](https://code.metoffice.gov.uk/trac/um/wiki/working_practices)  
[FCM Recommended Practices](http://metomi.github.io/fcm/doc/user_guide/working_practices.html)

### Merging Branches

FCM provides its own implementation of `svn merge` for combining branches together.

To merge a branch into a working copy run `fcm merge SOURCE`, e.g. 
```
fcm merge branches/dev/scottwales/vn12.2_new_cloud_scheme
```

The merge works by finding a common ancestor to both the working copy and the source branch, then applying any changes made to the source branch since that common ancestor to the working copy. If both the source branch and the working copy have changed the same section of a file the merge command will print a message with options of how to resolve the conflict. You can choose to use the working copy version, the source version, or manually edit the file.

After the merge has completed use `fcm commit` to commit the merged code back to the repository.

[FCM Merge Docs](https://metomi.github.io/fcm/doc/user_guide/command_ref.html#fcm-merge)  
[SVN Merge Conflicts](https://svnbook.red-bean.com/en/1.7/svn.tour.cycle.html#svn.tour.cycle.resolve)

## FCM Make

`fcm make` is FCM's build system. It uses the configuration file `fcm-make.cfg`. FCM make will

1. Download source code (potentially from multiple repositories)
2. Merge together multiple branches
3. Optionally mirror source code to a HPC node
4. Preprocess source files
5. Identify dependencies between Fortran modules
6. Compile target programs

The mirror step is optional, it used to be required at NCI so some suites will still use it. In a Rose suite a `fcm_make2` task indicates a mirror step is being used, see [FCM and Rose](#fcm-and-rose).

[FCM Make Docs](http://metomi.github.io/fcm/doc/user_guide/make.html)  
[fcm-make.cfg Docs](http://metomi.github.io/fcm/doc/user_guide/annex_cfg.html#make)

### Extract

```
steps = extract

extract.ns = um
extract.location[um] = fcm:um_tr@vn12.2
extract.location{diff}[um] = $um_sources
```

Download model source code. Multiple repositories can be downloaded from by giving a list of 'name-spaces' to `extract.ns` and a `extract.location` for each - in the UM this is used for sub-models such as JULES and SOCRATES.

The extracted code will be put under the `extract/` directory of the FCM workspace (for a Rose job this will be e.g. `~/cylc-run/RUNID/share/fcm_make_um/extract/`)

[FCM Extract Docs](http://metomi.github.io/fcm/doc/user_guide/make.html#extract)

#### Merging Branches

Multiple branches can be added using the `extract.location{diff}` setting. Branches can either be relative paths in the same repository as `extract.location`, e.g. `branches/dev/scottwales/vn12.2_mybranch` or absolute paths either in the repository or on the local file system.

Branches are merged by comparing the branch against `extract.location` and applying any differences to the extracted code. If multiple branches change the same file FCM will report an error. This process is different to the `svn merge` command that might be used within a repository to merge branches.

#### Working Copy Branches

Using an absolute file-system path as a branch lets you build code from a working copy, without needing to commit changes to a repository. This can be helpful when developing changes, as it lets you test the change without committing back to the repository. Take care to regularly `fcm commit` your changes even so to make sure that changes don't get lost.

### Mirror

The mirror step copies source code from one computer to another. It is useful in cases like at NCI where the compute nodes where you'd like to build the model don't have access to the wider internet to be able to download the source code. This is no longer needed with the on-disk MOSRS mirror in project ki32, however some suites may still use two-stage builds.

Mirrored files will be put in the `extract/` directory of the FCM workspace on the target computer.

[FCM Mirror Docs](http://metomi.github.io/fcm/doc/user_guide/make.html#mirror)

### Preprocess

The preprocess step runs any `*.F90` files in the model source code through CPP to resolve any `#include` or `#ifdef` lines. It's important for this to be done before scanning dependencies as such dependencies may be affected by pre-processor statements.

Use of the pre-processor is less common in UM source than it once was, but this will still affect a large number of files. The modern CPP program needs to be run in `-traditional` mode in order to pre-process Fortran programs, this is included in the default flags used by FCM.

Preprocessed files will be put in the `preprocess/` directory of the FCM workspace.

[FCM Preprocess Docs](http://metomi.github.io/fcm/doc/user_guide/make.html#preprocess)

### Build

The build step is where the model actually gets built. FCM will first scan the code for `MODULE` and `USE` statements to work out any dependencies (a file defining a `MODULE` must be compiled before any files that `USE` that module) and then compile all the files needed by the given `PROGRAM`s. FCM can do this step in parallel if you give it a `-j` flag, compiling multiple files at the same time.

Compiler flags are set as [properties](http://metomi.github.io/fcm/doc/user_guide/annex_cfg.html#make.build.prop), e.g.
```
build.prop{fc.flags} = -g -O2
```
will set those flags on any Fortran file. Flags may also be set on a specific file or on all files within a directory by putting the file path in square brackets:
```
# Disable optimisation
build.prop{fc.flags}[src/control/top_level] = -g -O0
```
This is sometimes used as a work-around for compiler bugs.

At NCI you don't need to add paths with `-I` or `-L` flags provided you have the necessary modules loaded, these will get read from the `CPATH` and `LIBRARY_PATH` environment variables defined in the module.

[FCM Build Docs](http://metomi.github.io/fcm/doc/user_guide/make.html#build)

## FCM and Rose

If a Rose task name starts with `fcm_make` or `fcm_make2` it will automatically use the `fcm_make` built-in app. If there are matching `fcm_make` and `fcm_make2` tasks in the Cylc configuration the first will be run as an extract & mirror, while the second will be a preprocess & build.

E.g. the Rose directory has `app/fcm_make_um` containing a `rose-app.conf` and `file/fcm-make.conf` file. If the `suite.rc` file has `fcm_make_um` and `fcm_make2_um` tasks the first will be used to download the source code on the suite host and mirror it to Gadi, while the second will run the build on Gadi's compute node. Both tasks will use the settings from `app/fcm_make_um`.

[Rose fcm_make app](http://metomi.github.io/rose/doc/html/api/built-in/fcm_make.html)

## FCM and the UM

The fcm-make.cfg file used in a suite to build the UM will depend on the exact suite but might look like
```
use = $prebuild

include = $config_root_path/fcm-make/$platform_config_dir/um-$config_type-$optimisation_level.cfg$config_revision

extract.location{diff}[um] = $um_sources
extract.location{diff}[shumlib] = $shumlib_sources
extract.location{diff}[casim] = $casim_sources
extract.location{diff}[jules] = $jules_sources
extract.location{diff}[socrates] = $socrates_sources
```

The variables used here will be set in rose-app.conf (and potentially the `site/nci-gadi.rc` file for `$platform_config_dir`). `$config_root_path` will normally be the model trunk for the version being compiled.

The include will end up resolving to something like [`fcm:um_tr/fcm-make/nci-x86-ifort/um-atmos-safe.cfg`](https://code.metoffice.gov.uk/trac/um/browser/main/trunk/fcm-make/nci-x86-ifort/um-atmos-safe.cfg). This file sets site-specific compiler options, then includes [`fcm:um_tr/fcm-make/inc/um-atmos-common.cfg`](https://code.metoffice.gov.uk/trac/um/browser/main/trunk/fcm-make/inc/um-atmos-common.cfg) which holds the majority of the build configuration.

The build job's `job.out` file can be inspected to see the exact config files being used, e.g.
```
[info] config-file=/scratch/hc46/saw562/cylc-run/u-co497/work/19880901T0000Z/fcm_make_um/fcm-make.cfg
[info] config-file= - file:///g/data/ki32/mosrs/um/main/trunk/fcm-make/nci-x86-ifort/um-atmos-safe.cfg@104450
[info] config-file= -  - file:///g/data/ki32/mosrs/um/main/trunk/fcm-make/inc/um-atmos-common.cfg@104450
[info] config-file= -  -  - file:///g/data/ki32/mosrs/um/main/trunk/fcm-make/nci-x86-ifort/inc/parallel.cfg@104450
[info] config-file= -  -  -  - file:///g/data/ki32/mosrs/um/main/trunk/fcm-make/inc/options/common.cfg@104450
[info] config-file= -  -  -  -  - file:///g/data/ki32/mosrs/um/main/trunk/fcm-make/inc/options/coupler/none.cfg@104450
```

The full configuration that FCM uses to build the model can be inspected under `share/fcm_make_um/fcm-make-as-parsed.cfg`. This will have all of the include files and variables resolved.

[UM fcm-make directory](https://code.metoffice.gov.uk/trac/um/browser/main/trunk?order=name#fcm-make)
