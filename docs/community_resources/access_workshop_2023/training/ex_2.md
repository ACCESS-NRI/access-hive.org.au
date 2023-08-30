# ACCESS-NRI Workshop rose cylc examples
<p>Guide for the rose cylc ACCESS-NRI workshop exercises.</p>

## Step 0: Pre-workshop
Join the access, hh5, hr22 and ki32 projects

Exercises will still work if you do not have a MOSRS account

## Step 1:
Go to the [Australian Research Environment](https://are.nci.org.au/) website and login with your **NCI username and password**. If you don't have an NCI account, you can sign up for one at the [NCI website](https://my.nci.org.au/mancini/login?next=/mancini/).

<p align="center"><img src="../assets/ARE_setup_guide/setup_image1.png" alt="drawing" width="50%"/></p>

## Step 2:
Click on `Virtual Desktop` under *Featured Apps* to configure a new VDI instance. This option is also available under the *All Apps* section at the bottom of the page and the *Interactive Apps* dropdown located in the top menu.

<p align="center"><img src="../assets/access_rose_cylc/setup_vdi1.png" alt="drawing" width="50%"/></p>

## Step 3:
You will now be presented with the main VDI instance configuration form. Please complete **only** the fields below - leave all other fields blank or to their default values.

<p align="center"><img src="../assets/access_rose_cylc/setup_image3.png" alt="drawing" width="50%"/></p>

- *3.1* **Walltime**: The number of hours the VDI instance will run. `3` hours is sufficient for this workshop session.

<p align="center"><img src="../assets/access_rose_cylc/setup_image4.png" alt="drawing" width="50%"/></p>

- *3.2* **Compute Size**: Select `Tiny (1 cpus, 4.5G mem)` from the dropdown menu.

<p align="center"><img src="../assets/ARE_setup_guide/setup_image5.png" alt="drawing" width="50%"/></p>

- *3.3* **Project**: Please enter `nf33`. This will allocate SU usage to the workshop project.

<p align="center"><img src="../assets/access_rose_cylc/setup_image6.png" alt="drawing" width="50%"/></p>

- *3.4* **Storage**: This is the list of `/g/data/` project data storage locations required to complete the workshop tutorials. In ARE, storage locations need to be explicitly defined to access these data from within a VDI instance. Please enter the following string listing the projects mentioned in **Step 0** above: `gdata/access+gdata/hh5+gdata/hr22+gdata/ki32`.

<p align="center"><img src="../assets/ARE_setup_guide/setup_image7.png" alt="drawing" width="50%"/></p>

- *3.5* Click `Advanced options ...`
  * Optional: You can check the box here to receive an email notification when your VDI instance starts, but as we are only running relatively small instances, they will spin up quickly and this probably isn't necessary.</p>

<p align="center"><img src="../assets/access_rose_cylc/setup_image12.png" alt="drawing" width="50%"/></p>

- *3.7* Click `Launch` to start your VDI Instance.

## Step 4:
Once you have clicked `Launch` the browser will redirect to the 'interactive sessions' page where you will see your VDI instance details and current status which will look something like this:

<p align="center"><img src="../assets/access_rose_cylc/setup_image13.png" alt="drawing" width="50%"/></p>

Once the VDI instance has started (this usually takes around 30 seconds) and this status window should update and look something like the following, reporting that the instance has started and the time remaining. More detailed information on the instance can be accessed by clicking the `Session ID` link.

<p align="center"><img src="../assets/access_rose_cylc/setup_image14.png" alt="drawing" width="50%"/></p>

All that remains to get started is to click `Launch VDI Desktop`.


#  Running the example suite

Start a terminal in the VDI session.

```
% module use /g/data/hr22/modulefiles
% module load cylc7
```

If you have a MOSRS account

```
% mosrs-auth
% rosie co u-cz168
```

If you do not have a MOSRS account
```
% mkdir –p ~/roses
% cp –r /g/data/access/nri_training/u-cz168 ~/roses
```

This example is a ACCESS-CM2 like AMIP (atmosphere only) suite, but uses lower horizontal resolution and runs a day at a time rather than 6 months at a time
```
% cd ~/roses/u-cz168
% rose suite-run
```

You should now see something like this
<p align="center"><img src="../assets/access_rose_cylc/vdi_cylc_run.png" alt="drawing" width="80%"/></p>
