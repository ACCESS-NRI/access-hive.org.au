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
|**Code block**|\```<br>&emsp;code block<br>```|\<pre><br>&emsp;\<code>code block\</code><br>\</pre>|<pre><code>code block</code></pre>|
|**[Admonition](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#usage) (not collapsible)**|!!! warning<br>&emsp;this is a warning<br>&emsp;admonition|\<div class="admonition warning"><br>&emsp;this is a warning<br>&emsp;admonition<br>\<div>|![warning admonition](docs/assets/assets_for_readme/warning_admonition.png)|
|**Collapsible [Admonition](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#usage)|??? warning title<br>&emsp;this is a collapsible<br>&emsp;warning admonition|\<details class="warning"><br>&emsp;\<summary><br>&emsp;&emsp;\<p><br>&emsp;&emsp;&emsp;this is a collapsible<br>&emsp;&emsp;&emsp;warning admonition<br>&emsp;&emsp;\</p><br>&emsp;\</summary><br>\</details>|![collapsible warning admonition](docs/assets/assets_for_readme/collapsible_warning_admonition.gif)|
|**Tabs**|N/A|\<div class="tabLabels" label="your-tab-label"><br>&emsp;\<button>Tab1\</button><br>&emsp;\<button>Tab2\</button><br>\</div><br>\<div class="tabContents" label="your-tab-label"><br>&emsp;\<div><br>&emsp;&emsp;Content for tab1<br>&emsp;\</div><br>&emsp;\<div><br>&emsp;&emsp;Content for tab2<br>&emsp;\</div><br>\</div>|![tabs](docs/assets/assets_for_readme/tabs.gif)|

# License
The ACCESS-Hive site is covered by the [CC-BY 4.0 license](https://creativecommons.org/licenses/by/4.0/legalcode).

However, the material linked to from ACCESS-Hive is covered by various licensing agreements. Our users should directly refer to the terms and conditions of any material they are using to understand their rights and responsibilities.

[website]: https://access-hive.org.au
[github-repo]: https://github.com/ACCESS-Hive/access-hive.github.io.git
[forum]: https://forum.access-hive.org.au