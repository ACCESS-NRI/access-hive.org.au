#  User support 

On this page we answer frequently asked questions (FAQs), and also give additional information for support, in case your question is not yet answered.

## Frequently Asked Questions

Click on the questions to unfold the answers.

??? abstract "What is the difference between the ACCESS-Hive and the Hive Forum?"
    ACCESS-Hive is the open portal where ACCESS-NRI provides documentation for the ACCESS user community.
    The Hive forum is the place where the ACCESS user community and its scientific working groups can exchange ideas and provide support.

    <p align="center"><img align="center" width="50%" src="../../assets/access_hive_links.png" alt="Diagram showing how ACCESS-NRI and the Climate Research Working Groups engage with each other through the ACCESS-Hive via the Access-Hive portal for documentation and the Hive Forum for exchange and support."></p>

??? abstract "What is the difference between MODEL, MODEL COMPONENT, and MODEL CONFIGURATION?"
    A **model component** (sometimes referred to simply as component) is a codebase that is typically compiled into a single executable. It usually runs independently and communicates with other components via a coupler.

    We refer to **model** as a general descriptive name for a particular combination of model components.
    For example, ACCESS-CM2 has 3 major model components: atmosphere (including land), ocean, and sea-ice. By contrast, ACCESS-OM2 has 2 major model components: ocean and sea-ice, with the atmospheric forcing provided by a data source.

    A **model configuration** is a model (as described above) with a specific configuration (e.g. version, set of parameters) for each of its components.

??? abstract "What are MODEL RUNS and EXPERIMENTS?"
    A **run** is when a model configuration is executed, usually on an HPC system.

    An **experiment** typically consists of one or multiple separate sequential **runs**, with each **run** picking up where the previous one finished.

    So **experiment** and **run** can sometimes be used as synonyms, but at other times an experiment consists of many runs that are linked by passing model state from one run to the next.

??? abstract "How do model runs and model evaluation work together?"

    Climate science - like all science - is based on the comparison of different models and hypothesis with observational data. We provide or support the frameworks to perform such comparisons as part of the **model evaluation**. The different model hypotheses, or more practically speaking *model runs*, are created by executing different model configurations with different setups; for example by perturbing initial conditions or by adding new physical prescriptions to the models.

    <p align="center"><img align="center" width="75%" src="../../assets/how_does_it_work_together.png" alt="Diagram showing how running ACCESS model configurations with different setups create different experiments. These are then compared with each other and observational data as part of the model evaluation. These comparisons are what informs climate science."></p>

??? abstract "What is a control experiment? Why are they important?"
    A "control experiment" (sometimes also called a "control run") is an experiment that is designed to be used as a comparison against which perturbation experiments can be compared.

    Control experiments are typically designed to represent some neutral climate state. For example, pre-industrial control experiments are designed to represent a modern climate state without significant anthropogenic climate forcing (global warming).

    Control experiments are ideally well equilibrated, so that the model doesn't systematically change (often referred to as "drift").

    Control experiments are important because it is an enormous saving in resources if one control experiment can be used by many researchers. It also means researchers can compare their perturbation experiments against not just the control run, but against each other.

??? abstract "What is a perturbation experiment?"
    A perturbation experiment is when a model configuration from a control experiment is altered in some way. The altered configuration is then run, restarting from a point in the control experiment.

    The perturbation experiment is run in the same was as the control, each successive run using the state (restarts) from the previous run. The perturbation experiment can then be compared with the control experiment to see the effect of the perturbation.

    Perturbation experiments are a very important way to try and understand complex earth systems, e.g. to isolate potential climate change signals and try and understand their effects.

??? abstract "Where can I find OBSERVATIONAL DATA and MODEL DATA?"
    
    Both observational and model DATA is hosted by the National Computational Infrastructure (NCI) under different projects. 

    Go to our [**Observational Data**](../model_evaluation/model_evaluation_observational_catalogs.md) section on the ACCESS-Hive to learn how to find and access observational data.

    Go to our [**Model Data**](../model_evaluation/model_evaluation_model_catalogs/index.md) section on the ACCESS-Hive to learn how to find and access model data.

    In any case, you need to have access to the specific projects and NCI itself in order to read the data. We explain this on our [**Getting Started Pages**](../getting_started/index.md).

??? abstract "What is the difference between **TEAMS** and **WORKING GROUPS**?"

    Throughout this documentation, we are using the term **teams** to describe the teams of ACCESS-NRI.
    
    By contrast, we refer to **working groups** as the groups of the ACCESS community that work on specific ACCESS components, configurations or research. These are formed by the scientific community itself and ACCESS-NRI liasises with them.

## Still need help?

For resources developed by another party that ACCESS-Hive links to, there should be information on how to get help on the linked site. If there are no obvious channels for help, or the help is not adequate consider asking for assistance from fellow members of your community on the <a href="https://forum.access-hive.org.au" target="_blank">ACCESS-Hive Forum</a>.

In the case of ACCESS-NRI supported documentation and software, please ask on the <a href="https://forum.access-hive.org.au" target="_blank">ACCESS-Hive Forum</a>. 

How to get help and support, and what assistance is available on the forum is outlined in <a href="https://forum.access-hive.org.au/t/access-help-and-support/908" target="_blank">ACCESS Help and Support</a>.

There is also a <a href="https://forum.access-hive.org.au/t/support-faq-frequently-asked-questions/1021" target="_blank">Support FAQ</a> covering some of the more common questions you might have about what support is provided, how it is provided and what you can expect.