
# 4) Computing on Gadi

## Gadi Resources
Coupled climate models like ACCESS-CM involve, among other things, calculation of complex mathematical equations that explain the physics of the atmosphere and oceans. Performed at hundreds of millions of points around the Earth, these calculations require vast computing power to complete them in a reasonable amount of time, thus relying on the power of  high-performance computing (HPC) like Gadi. The [Gadi supercomputer](https://nci.org.au/our-systems/hpc-systems) can handle more than 10 million billion (10 quadrillion) calculations per second and is connected to 100,000 Terabytes of high-performance research data storage.

An overview of [Gadi resources](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-GadiResources) such as compute, storage and PBS jobs are described below. 

Useful NCI commands to check your available compute resources are:

| Command                |   Purpose                  |
| ---------------------- | -------------              |
| `logout` or ++ctrl+"D"++ | To exit a session          |
| `hostname`             | Displays login node details|
| `module list`          | Modules currently loaded   |
| `module avail`         | Available modules          |
| `nci_account -P [proj]`| Compute allocation for [proj]|
| `nqstat -P [proj]`     | Jobs running/queued in [proj]|
| `lquota`               | Storage allocation and usage for all your projects|

### Compute Hours
Compute allocations are granted to projects instead of directly to users and, hence, you need to be a member of a project in order to use its compute allocation. To run jobs on Gadi, you need to have sufficient allocated [compute hours](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-ComputeHours) available, where the [job cost](https://opus.nci.org.au/display/Help/2.+Compute+Grant+and+Job+Debiting) depends on the resources reserved for the job and the amount of walltime it uses. 

### Storage 
Each user has a project-independent [`$HOME`](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-TheHomeFolder$HOME) directory, which has a storage limit of 10 GiB. All data on `/home` is backed up.

Through project membership, the user gets access to the storage space within the
[project folders](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-ProjectFolderonLustreFilesystems/scratchand/g/data) `/scratch` and  `/g/data` filesystems for that particular project.

## PBS Jobs
To run compute tasks such as an ACCESS-CM suite on Gadi, users need to submit them as *jobs* to *queues*. Within a [job submission](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-JobSubmission), you can specify the queue, duration and computational resources needed for your job. When a job submission is accepted, it is assigned a jobID (shown in the return message) that can then be used to monitor the job’s [status](https://opus.nci.org.au/display/Help/0.+Welcome+to+Gadi#id-0.WelcometoGadi-QueueStatus). 

On job completion, contents of the job’s standard output/error stream gets copied to a file in the working directory with the respective format: `<jobname>.o<jobid>` and `<jobname>.e<jobid>`. Users should check these two log files before proceeding with post-processing of any output from their corresponding job.
