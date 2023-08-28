<div class="flex-container vertical-flex-container with-border with-padding">
    <div class="med-text bold">Prerequisites</div>
    <div>
        <i class="fa-regular fa-square-check nri-green-color with-padding"></i> If are new to GitHub, you will first need to <a href="https://github.com" target="_blank">sign up</a> for a GitHub account.
        <br>
        <i class="fa-regular fa-lightbulb nri-orange-color with-padding"></i> 
        For learning GitHub, We'd also encourage you to complete <a href="#additional-github-learning-resources" target="_blank">self-paced GitHub learning courses</a> for brushing up basic GitHub skills. 
        <br>
        <br>
        <div class="markdown-notes">
        <b>Note:</b> Please note that you <i>do not</i> need to complete all these learning courses before making your first contribution. The first
        <b>"Introduction to Github"</b> course should make you well-equipped for making your first contribution to the Hive!
        </div>
    </div>
</div>

## Let's get started! 

<terminal-window>
    <terminal-line data="input">git commit -m "Let's 'git' started!!!"</terminal-line>
    <terminal-line></terminal-line>
    <terminal-line data="progress"></terminal-line>
</terminal-window>

This documentation is written in Markdown format and is based on the <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank">Material for MkDocs</a> documentation framework, which is built on top of <a href="https://www.mkdocs.org" target="_blank">MkDocs</a> static site generator. Please refer to this <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank">cheatsheet</a> for a quick reference to basic markdown syntax, which is used by <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank">Material for MkDocs</a> theme used in this website.

<div class="markdown-notes">
    <b>Note:</b> Since, ACCESS-Hive curates useful resources for making comprehensive guides for the ACCESS community, it includes content that is not curated and hosted by ACCESS-NRI. 
</div>

## Become a member of the ACCESS-Hive GitHub repository

The <b>ACCESS-Hive user portal</b> is open to receiving contributions from anyone relating to different aspects of the website, including <i>bug fixes</i>, <i>content additions</i>, and <i>enhancement suggestions</i>. The <a href="https://github.com/ACCESS-Hive" target="_blank">ACCESS-Hive GitHub organisation</a> members would have write access to the <a href="https://github.com/ACCESS-Hive/access-hive.github.io/" target="_blank">ACCESS-Hive repository</a>, and they can contribute by creating their own branches instead of maintaining their individual forks.

Hence, we encourage you to become a member of the <a href="https://github.com/ACCESS-Hive" target="_blank">ACCESS-Hive GitHub organisation</a> by replying to <a href="https://github.com/ACCESS-Hive/access-hive.github.io/issues/179" target="_blank">this issue</a> and ask to be invited to join the organisation. 

## Raise a GitHub Issue

Once you are a member of the <a href="https://github.com/ACCESS-Hive" target="_blank">ACCESS-Hive GitHub organisation</a>, for all additions or modifications to the ACCESS-Hive site, it is recommended to start by opening an <a href="https://github.com/ACCESS-Hive/access-hive.github.io/issues">issue</a> in the ACCESS-Hive GitHub repository. Feel free to <a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/" target="_blank">assign that issue</a> to yourself if you intend to work on that issue.

## Clone the ACCESS-Hive GitHub repository

For cloning this repository onto your local computer, we encourage you to first add your local SSH keys to your GitHub profile. 

To start with, if you have an <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys" target="_blank">existing SSH key</a>, then simply <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account" target="_blank">add this key to your github account</a>, and you are all set to clone the repository. In case you don't have the SSH keys set up on your local computer, it's easy to <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank">create a new SSH key locally</a>, and then <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account" target="_blank">feel free to link this key to your github account</a>. 

<terminal-window>
    <terminal-line data="input">git clone git@github.com:ACCESS-Hive/access-hive.github.io.git</terminal-line>
    <terminal-line></terminal-line>
    <terminal-line>Cloning into 'access-hive.github.io'...</terminal-line>
<terminal-line>remote: Enumerating objects: 54754, done.</terminal-line>
<terminal-line>remote: Counting objects: 100% (4096/4096), done.</terminal-line>
<terminal-line>remote: Compressing objects: 100% (560/560), done.</terminal-line>
<terminal-line>remote: Total 54754 (delta 2178), reused 4053 (delta 2155), pack-reused 50658</terminal-line>
<terminal-line>Receiving objects: 100% (54754/54754), 103.15 MiB | 6.97 MiB/s, done.</terminal-line>
<terminal-line>Resolving deltas: 100% (28610/28610), done.</terminal-line>
</terminal-window>

## Make changes locally
After cloning the repository locally, create a new branch to make your local changes and then push it to GitHub: 

<terminal-window>
    <terminal-line data="input">git checkout -b spongebob/fix-hive-title-issue-234</terminal-line>
    <terminal-line>Switched to a new branch 'spongebob/fix-hive-title-issue-234'</terminal-line>
</terminal-window>
<terminal-window>
    <terminal-line data="input">git push --set-upstream origin spongebob/fix-hive-title-issue-234</terminal-line>
    <terminal-line>Total 0 (delta 0), reused 0 (delta 0), pack-reused 0</terminal-line>
    <terminal-line>remote: </terminal-line>
    <terminal-line>remote: Create a pull request for 'spongebob/fix-hive-title-issue-234' on GitHub by visiting:</terminal-line>
    <terminal-line>remote:      https://github.com/ACCESS-Hive/access-hive.github.io/pull/new/spongebob/fix-hive-title-issue-234</terminal-line>
    <terminal-line>remote: </terminal-line>
    <terminal-line>To github.com:ACCESS-Hive/access-hive.github.io.git</terminal-line>
    <terminal-line>* [new branch]        spongebob/fix-hive-title-issue-234 -> spongebob/fix-hive-title-issue-234</terminal-line>
    <terminal-line>branch 'spongebob/fix-hive-title-issue-234' set up to track 'origin/spongebob/fix-hive-title-issue-234'.</terminal-line>
</terminal-window>

Work locally on the branch `spongebob/fix-hive-title-issue-234`, and push the commits using the commands:

<terminal-window>
    <terminal-line data="input">git add . </terminal-line>
    <terminal-line></terminal-line>
    <terminal-line data="input">git commit -m "(#234) Fixed Hive title!" </terminal-line>
    <terminal-line>[spongebob/fix-hive-title-issue-234 7afe8c11] (#234): Fixed Hive title!</terminal-line>
    <terminal-line>1 file changed, 17 insertions(+)</terminal-line>
    <terminal-line></terminal-line>
    <terminal-line data="input">git push</terminal-line>
    <terminal-line>Enumerating objects: 11, done.</terminal-line>
    <terminal-line>Counting objects: 100% (11/11), done.</terminal-line>
    <terminal-line>Delta compression using up to 10 threads</terminal-line>
    <terminal-line>Compressing objects: 100% (6/6), done.</terminal-line>
    <terminal-line>Writing objects: 100% (6/6), 637 bytes | 637.00 KiB/s, done.</terminal-line>
    <terminal-line>Total 6 (delta 5), reused 0 (delta 0), pack-reused 0</terminal-line>
    <terminal-line>remote: Resolving deltas: 100% (5/5), completed with 5 local objects.</terminal-line>
    <terminal-line>To github.com:ACCESS-Hive/access-hive.github.io.git</terminal-line>
        <terminal-line>7263feb5..7afe8c13  spongebob/fix-hive-title-issue-234 -> spongebob/fix-hive-title-issue-234</terminal-line>
</terminal-window>

While working on a local branch, please make sure to regularly pull changes from the remote `main` into your local branch, as follows:

<terminal-window>
    <terminal-line data="input">git pull origin main</terminal-line>
    <terminal-line>From github.com:ACCESS-Hive/access-hive.github.io</terminal-line>
    <terminal-line>* branch              main -> FETCH_HEAD</terminal-line>
    <terminal-line>Already up to date.</terminal-line>
</terminal-window>

This would make sure that the local branch `spongebob/fix-hive-title-issue-234` is always in sync with the latest changes in the remote `main` branch.

## Deploying Website Preview
MkDocs includes a live preview server, so you can preview your changes as you write your documentation. The server will automatically rebuild the site upon saving. 

To build the site locally, you need to install <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank">Material for MkDocs</a> and other plugins. You can find a ful list in the `requirements.txt` file (in the root of the <a href="https://github.com/ACCESS-Hive/access-hive.github.io/" target="_blank">ACCESS-Hive GitHub repository</a>). Please use `pip` for the installation as some of the packages are not updated or not available on conda:

<terminal-window>
    <terminal-line data="input">pip install -r requirements.txt</terminal-line>
</terminal-window>

To start the server, open terminal and navigate to your ACCESS-Hive local repository and use the command:

<terminal-window>
    <terminal-line data="input">mkdocs serve</terminal-line>
    <terminal-line>INFO     -  Building documentation...</terminal-line>
    <terminal-line>INFO     -  [macros] - Macros arguments: {'module_name': 'main', 'modules': [], 'include_dir': '', 'include_yaml': [], 'j2_block_start_string': '', 'j2_block_end_string': '',
            'j2_variable_start_string': '', 'j2_variable_end_string': '', 'on_undefined': 'keep', 'on_error_fail': False, 'verbose': False}</terminal-line>
    <terminal-line>INFO     -  [macros] - Extra variables (config file): ['generator', 'social', 'analytics']</terminal-line>
    <terminal-line>INFO     -  [macros] - Extra filters (module): ['pretty']</terminal-line>
    <terminal-line>INFO     -  Cleaning site directory</terminal-line>
    <terminal-line>INFO     -  Documentation built in 12.33 seconds</terminal-line>
    <terminal-line>INFO     -  [09:19:05] Reloading browsers</terminal-line>
    <terminal-line>INFO     -  [09:19:05] Browser connected: http://127.0.0.1:8000/about/contribute/contribute_on_github/</terminal-line>
</terminal-window>

Your documentation will be built on http://127.0.0.1:8000. Open this URL in your browser to see a preview of the documentation. The URL is given in the terminal when running the `mkdocs serve` command. Make sure you keep the command running so as to see live updates on saving your modifications. 

## Create a Pull Request for the final changes

Once the changes on your local branch `spongebob/fix-hive-title-issue-234` are ready to be integrated with the `development` branch, <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request" target="_blank">create a pull request</a> and GitHub will automatically build a preview of the documentation using <a href="https://docs.github.com/en/actions" target="_blank">GitHub Actions</a>. 

<img src="/assets/github-preview-link.png">

<div class="markdown-notes">
    <b>Note:</b> It can take a while for the preview to build, even after the CI check is indicated as "finished". Please wait for the comment with the link to appear and allow for some time after that for the preview to be properly deployed. 

    If you open the preview and it looks completely broken or if it hasn't updated from additional modifications in the pull reuqest, it probably means the site hasn't finished building yet. If you wait a couple of minutes and refresh the page, it should fix itself. 
</div>

## Additional GitHub learning resources 

- <a href="https://github.com/skills/introduction-to-github" target="_blank">Introduction to GitHub</a>
- <a href="https://docs.github.com/en/get-started/quickstart/set-up-git" target="_blank">Setting up Git</a>
- <a href="https://docs.github.com/en/get-started/quickstart/github-flow" target="_blank">GitHub workflow</a>
- <a href="https://github.com/skills/communicate-using-markdown" target="_blank">Using Markdown</a>