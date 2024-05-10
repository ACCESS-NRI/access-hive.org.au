# ACCESS-NRI Training Day 4 September 2023

## ACCESS Models
1. [Running ACCESS-CM2 from ARE/Gadi](https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/access_rose_cylc/rose_cylc_example.md)
2. [Changing a suite run length](https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/access_rose_cylc/ex1_runlength.md)
3. [Changing model physics options](https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/access_rose_cylc/ex2_co2.md)
4. [Troubleshooting example](https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/access_rose_cylc/ex3_troubleshooting.md)
   
## ACCESS-NRI Intake Catalog
1. [Getting set up on the ARE](https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/intake/ARE_setup_guide.md)
2. [Using the ACCESS-NRI Intake catalog](https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/intake/Intake_tutorial_p1.ipynb)
3. [Indexing a new model run](https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/intake/Intake_tutorial_p2.ipynb)

## ILAMB
1. [Working with ILAMB](https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/ilamb/ILAMB_training.md)

## ESMValTool
1. [Working with ESMValTool](https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/esmvaltool/ESMValTool_training_VDI.md)

## Cloning the GitHub repository

For the training on Intake, ILAMB and ESMValTool, you will need to clone the [ACCESS-NRI 2023 workshop training GitHub repo](https://github.com/ACCESS-NRI/workshop-training-2023) to _Gadi_ as follows:

1. Log in to _Gadi_
   ```
   ssh <your_nci_username>@gadi.nci.org.au
   ```
   If you don't have an `ssh` connection setup for _Gadi_, you can use [ARE's Gadi Terminal](https://are.nci.org.au/pun/sys/shell/ssh/gadi.nci.org.au).
   
2. Clone the [ACCESS-NRI 2023 workshop training GitHub repo](https://github.com/ACCESS-NRI/workshop-training-2023) to your user directory within `/scratch/nf33` on _Gadi_. Depending on whether or not you've used the nf33 project before, your user directory may or may not already exist.
   ```
   mkdir -p /scratch/nf33/$USER
   cd /scratch/nf33/$USER
   git clone https://github.com/ACCESS-NRI/workshop-training-2023.git
   ```