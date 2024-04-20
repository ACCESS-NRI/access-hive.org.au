# ACCESS-Hive
[![ACCESS-Hive Badge](docs/assets/badge.svg)][website]
[![github-contributors](https://img.shields.io/github/contributors/ACCESS-Hive/access-hive.github.io?color=blue&style=plastic)][github-repo]
[![forum-users](https://img.shields.io/discourse/users?color=blue&label=forum&server=https%3A%2F%2Fforum.access-hive.org.au&style=plastic)][forum]

Documentation hub for the Earth System models, ACCESS, and their community.

This repository uses [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) to build the website which accessible at this URL:<br>
https://access-hive.org.au/

# How to Contribute
If you wish to add documentation to the ACCESS-Hive website see the [contribution guide](https://access-hive.org.au/about/contribute/) for instructions.

## Styling guidelines for developers
Please follow the guidelines below so as to make the Hive consistent among the pages contributed by different people. 

- Always prefer Markdown syntax to HTML when possible;
- Titles/subtitles should NOT include: code lines/blocks, bold (titles are usually already bold), italic, links;
- Code lines/blocks need to be used for lines/blocks of code and terminal commands;
- Italic needs to be used when referring to specific proper nouns (for example *Gadi* or *payu*);
- Bold can be used to highlight some words (please do not overuse it);
- All types of admonitions (info, warning, etc.), collapsible and not, can be used as per [documentation](https://squidfunk.github.io/mkdocs-material/reference/admonitions/), but they are rendered slightly differently. If you need to use the HTML version of them, please follow the HTML cheatsheet below.
- Instructions for different versions (for example different operative systems or different model versions) can be rendered using tabs (see HTML cheatsheet below);


### HTML/Markdown Cheatsheet for the Hive
|Style|Markdown Syntax|HTML Syntax|Rendered example|
|---|---|---|---|
|**Bold**|\*\*bold**|\<b>bold\</b>|**bold**|
|**Italic**|\_italic_|\<i>italic\</i>|*italic*|
|**Code line**|\`code line`|\<code>code line\</code>|`code line`|
|**Code block**|\```<br>&emsp;code block<br>```|\<pre>\<code>code block\</code>\</pre>|<pre><code>code block</code></pre>|
|**[Admonition](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#usage) (not collapsible)**|!!! warning<br>&emsp;this is a warning<br>&emsp;admonition|\<div class="admonition warning">this is a warning admonition\<div>|![warning admonition](docs/assets/assets_for_readme/warning_admonition.png)|
|**Collapsible [Admonition](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#usage)|??? warning title<br>&emsp;this is a collapsible<br>&emsp;warning admonition|\<div class="admonition warning collapsible">this is a collapsible warning admonition\<div>|![collapsible warning admonition](docs/assets/assets_for_readme/collapsible_warning_admonition.png)|
|**Tabs**|N/A|\<div class="tabLabels" label="your-tab-label">\<button>Tab1\</button>\<button>Tab2\</button>\</div>\<div class="tabContents" label="your-tab-label">\<div>Content for tab1\</div>\<div>Content for tab2\</div>\</div>|![tabs](docs/assets/assets_for_readme/tabs.gif)|

<!-- - Pull the latest version of `development` branch locally by using the following commands:

    > Fetch the remote branches from github:

    `git fetch`

    > On terminal, switch to the `development` branch locally using the command:

    `git switch development`     

    > Pull the latest changes from remote `development` branch locally: 

    `git pull`

- Once the latest version of `development` branch is pulled locally, use the following two commands to create the new branch and push it to github respectively:

    `git checkout -b dev/jasmeen/legacy-release`

    `git push --set-upstream origin dev/jasmeen/legacy-release`

- Prefixing the branch name with `dev/jasmeen` might be used as an indicator that this needs to merged in the `development` branch of access-hive (staging branch deployed on https://access-hive.org.au/development-website/), and _**not**_ the main branch.

- Work locally on the branch `dev/jasmeen/legacy-release`, and push the commits using the commands: 

    `git add .`

    `git commit -m "First commit"`

    `git push`
  
- While working locally on the branch, please make sure to regularly pull changes from remote `development` branch into your branch, using the command:

    `git pull origin development`

  This would make sure that the local branch `dev/jasmeen/legacy-release` is always in sync with the latest changes in the remote `development` branch. 

- Once the changes on the local branch `dev/jasmeen/legacy-release` is ready to be integrated with the `development` branch, create a pull request on github by changing the `base` to `development`. (Please find the below screenshot). This would create a pr on the `development` branch.

    ![Screenshot 2023-06-02 at 2 05 13 pm](https://github.com/ACCESS-Hive/access-hive.github.io/assets/42607679/ec141fc9-ee00-4a84-ae5a-081761400765)

- When creating a pull request (PR) please also assign a reviewer to avoid delays. For technical content please assign an expert reviewer. -->

# License
The ACCESS-Hive site is covered by the [CC-BY 4.0 license](https://creativecommons.org/licenses/by/4.0/legalcode).

However, the material linked to from ACCESS-Hive is covered by various licensing agreements. Our users should directly refer to the terms and conditions of any material they are using to understand their rights and responsibilities.

[website]: https://access-hive.org.au
[github-repo]: https://github.com/ACCESS-Hive/access-hive.github.io.git
[forum]: https://forum.access-hive.org.au