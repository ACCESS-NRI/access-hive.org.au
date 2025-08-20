<link rel="stylesheet" href="/css/release-table.css">

[Hive Forum]: https://forum.access-hive.org.au
# ACCESS-NRI Release Stages

We develop and share our models and tools in stages. Each stage has a different purpose and level of readiness: 

- **Prototype (not shown in table):**  Early versions shared with a small group of experts to explore new ideas. These are not polished or complete, and may change quickly. 

- **Alpha:** Early access for technically skilled testers. The core features are in place, but things may change, and we do not provide full support. Feedback at this stage helps shape the model. 

- **Beta:** More stable versions open to a wider group. Most features and documentation are ready, and we welcome testing by anyone interested. Changes may still occur. 

- **Release:** Fully tested, documented, and supported versions. These are the stable versions we recommend for research publication. 

Note that these release definitions will not be applied retroactively to any model or tool releases. 

## Release Stages for Model configurations
The below table has some details for each release stage of ACCESS-NRI supported models.

<!-- <div class="release-table" markdown="1"> -->

|   | ALPHA | BETA | RELEASE |
|---| ----- | ---- | ------- |
|**Overall state of product**|**Unstable**|**Somewhat stable**|**Stable**|
|Model code & supporting tools| Version controlled for core components | Fully version controlled | Fully version controlled|
|How to acces and deploy the model| Pre-release module | Pre-release module | Model/version module|
|Model configuration(s)[^1] | In development, unstable | In testing, relatively stable | Versioned, major versions bitwise reproducible[^2] |
|Input files for configurations | Not yet managed[^3] | Managed[^3] | Managed[^3], FAIR |
|Availability & Maintenance of the deployed model | Short-term, for alpha testers only | Until next beta or release | Long-term^4^ |
|User support (via [Hive Forum]) |No guarantee, for alpha testers only |Until next beta or release |Fully supported^4^|
|Spin-up and Control experiment(s) |N/A |Under validation (if available) |Validated and published when available |
|Documentation on how to run the model |Unpublished |Published publicly on Hive Docs with “*beta*” caveat |Published publicly on Hive Docs|
|Optimisation & scaling |No guarantee |In progress |Complete |
|DOI |None |None |DOI issued through Zenodo; any model updates receive new DOIs |
|Announcements to the community |Direct contact with alpha testers. No formal announcement. |Public post on [Hive Forum]. Mentioned in ACCESS-NRI newsletter with caveats. |Public post on [Hive Forum]. On ACCESS-NRI website, newsletter, social media, and media release.|
<!-- </div> -->

[^1]: A model configuration is the entire setup for a model experiment run. It is the model code, the parameters, and input files. It is essentially an experiment waiting to happen. 
[^2]: By bitwise reproducible, we mean that a model configuration will produce the same answers if re-run on Gadi (with the same layout, number of processors, etc., all of which are specified in a model configuration). 
[^3]: *Managed* here means that the input files are collected in a specific place and are incorporated into the model deployment.

^4. Each release will have its own timeframe for availability, maintenance, and support. The timeframe will be communicated at the time of release, and will be based on factors that include:

- What our users need,
- Availability, and suitability, of new models 
- Machine changes (older models may not be ported to new machines) 
- Overall support burden: if we support too many models our ability to update current models or develop new ones is impaired 

 