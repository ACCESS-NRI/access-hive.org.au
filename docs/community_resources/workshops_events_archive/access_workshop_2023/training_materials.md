# ACCESS-NRI Training Day 4 September 2023

## ACCESS Models
1. <a href="https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/access_rose_cylc/rose_cylc_example.md" target="_blank">Running ACCESS-CM2 from ARE/Gadi</a>
2. <a href="https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/access_rose_cylc/ex1_runlength.md" target="_blank">Changing a suite run length</a>
3. <a href="https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/access_rose_cylc/ex2_co2.md" target="_blank">Changing model physics options</a>
4. <a href="https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/access_rose_cylc/ex3_troubleshooting.md" target="_blank">Troubleshooting example</a>
   
## ACCESS-NRI Intake Catalog
1. <a href="https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/intake/ARE_setup_guide.md" target="_blank">Getting set up on the ARE</a>
2. <a href="https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/intake/Intake_tutorial_p1.ipynb" target="_blank">Using the ACCESS-NRI Intake catalog</a>
3. <a href="https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/intake/Intake_tutorial_p2.ipynb" target="_blank">Indexing a new model run</a>

## ILAMB
1. <a href="https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/ilamb/ILAMB_training.md" target="_blank">Working with ILAMB</a>

## ESMValTool
1. <a href="https://github.com/ACCESS-NRI/workshop-training-2023/blob/main/esmvaltool/ESMValTool_training_VDI.md" target="_blank">Working with ESMValTool</a>

## Cloning the GitHub repository

For the training on Intake, ILAMB and ESMValTool, you will need to clone <a href="https://github.com/ACCESS-NRI/workshop-training-2023" target="_blank">this Github repo</a> to <i>Gadi</i> as follows:

1. Log in to <i>Gadi</i>
   ```
   ssh <your_nci_username>@gadi.nci.org.au
   ```
   If you don't have an <code>ssh</code> connection setup for <i>Gadi</i>, you can use ARE's <a href="https://are.nci.org.au/pun/sys/shell/ssh/gadi.nci.org.au" target="_blank">Gadi Terminal</a>.
   
2. Clone <a href="https://github.com/ACCESS-NRI/workshop-training-2023" target="_blank">this Github repo</a> to your user directory within `/scratch/nf33` on <i>Gadi</i>. Depending on whether or not you've used the nf33 project before, your user directory may or may not already exist.
   ```
   mkdir -p /scratch/nf33/$USER
   cd /scratch/nf33/$USER
   git clone https://github.com/ACCESS-NRI/workshop-training-2023.git
   ```