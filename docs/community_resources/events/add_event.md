# Workshops and Conferences: Add Event

We encourage members of the community to list any workshops, tutorials, conferences that might be of interest to the community.

## How to add your event

### Add an issue

The easiest way for you to add your event is to [make an issue with the template provided][add-event-issue]. This provides a form which guides you through the process of providing the required information.

### Create a pull-request to add your event

This process requires some knowledge of git, GitHub and Markdown. If you do not feel comfortable doing this then it is sufficient to just add an issue as above. The issue will be assigned to someone else to finish.

If you do feel confident adding your event to the list, then create a Markdown text file, identified with the `.md` extension, to the correct subdirectory in the `events` folder of the [ACCESS-Hive repository](https://github.com/ACCESS-Hive/access-hive.github.io/tree/main/docs/events/events). The subdirectories are named by year, put your new file in the year in which the event will take place. Avoid spaces in your filename: use an underscore `_` where you would normally have a space. e.g. `regional_dowscaling_cordex.md`

The file must contain a header with the metadata as in the example below:

```
---
title: Regional climate downscaling for Australia within the CORDEX framework
start_date: 27/11/2022
end_date: 27/11/2022
location: Adelaide, SA
link: https://www.amos2022.org.au/
description: This workshop is relevant for those performing regional climate simulations or downscaling with empirical/statistical downscaling approaches including machine learning, as well as those using regional climate projection data in their work. The focus will be on CORDEX related data and modelling. The workshop will have some presentations with extended discussion.
---

```

Make sure to follow [all the steps][edit-process] described in the contribution guidelines to submit this addition for approval for publication.

[edit-process]: ../../contribute/edit-locally.md#edit-to-access-hive
[add-event-issue]: https://github.com/ACCESS-Hive/access-hive.github.io/issues/new?assignees=&labels=New+Event&template=new-event.yml&title=%5BNew+Event%5D%3A+