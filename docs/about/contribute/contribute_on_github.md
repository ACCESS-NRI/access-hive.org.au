<div class="flex-container vertical-flex-container with-border with-padding">
    <div class="med-text bold">Prerequisites</div>
    <div>
        <i class="fa-regular fa-square-check nri-green-color with-padding"></i> If are new to GitHub, you will first need to <a href="https://github.com">sign up</a> for a GitHub account.
        <br>
        <i class="fa-regular fa-lightbulb nri-orange-color with-padding"></i> 
        For learning GitHub, We'd also encourage you to complete <a href="#additional-github-learning-resources">self-paced GitHub learning courses</a> for brushing up basic GitHub skills. 
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

This documentation is written in Markdown format and is based on the <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank">Material for MkDocs</a> documentation framework, which is built on top of <a href="https://www.mkdocs.org" target="_blank">MkDocs</a> static site generator. Please refer to this <a href="https://www.markdownguide.org/cheat-sheet/">cheatsheet</a> for a quick reference to basic markdown syntax, which is used by <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank">Material for MkDocs</a> theme used in this website.

<div class="markdown-notes">
    <b>Note:</b> Since, ACCESS-Hive curates useful resources for making comprehensive guides for the ACCESS community, it includes content that is not curated and hosted by ACCESS-NRI. 
</div>

## Become a member of the ACCESS-Hive GitHub repository

The <b>ACCESS-Hive user portal</b> is open to receiving contributions from anyone relating to different aspects of the website, including <i>bug fixes</i>, <i>content additions</i>, and <i>enhancement suggestions</i>. The <a href="https://github.com/ACCESS-Hive" target="_blank">ACCESS-Hive GitHub organisation</a> members would have write access to the <a href="https://github.com/ACCESS-Hive/access-hive.github.io/" target="_blank">ACCESS-Hive repository</a>, and they can contribute by creating their own branches instead of maintaining their individual forks.

Hence, we encourage you to become a member of the <a href="https://github.com/ACCESS-Hive" target="_blank">ACCESS-Hive GitHub organisation</a> by replying to <a href="https://github.com/ACCESS-Hive/access-hive.github.io/issues/179" target="_blank">this issue</a> and ask to be invited to join the organisation. 

<b>TODO: Add GIF</b>

## Raise a GitHub Issue

Once you are a member of the <a href="https://github.com/ACCESS-Hive" target="_blank">ACCESS-Hive GitHub organisation</a>, for all additions or modifications to the ACCESS-Hive site, it is recommended to start by opening an <a href="https://github.com/ACCESS-Hive/access-hive.github.io/issues">issue</a> in the ACCESS-Hive GitHub repository. Feel free to <a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/">assign that issue</a> to yourself if you intend to work on that issue and . 

<b>TODO: Add GIF</b>

## Clone the ACCESS-Hive GitHub repository

For cloning this repository onto your local computer, we encourage you to first add your local SSH keys to your GitHub profile. 

To start with, if you have an <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys" target="_blank">existing SSH key</a>, then simply <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account" target="_blank">add this key to your github account</a>, and you are all set to clone the repository. In case you don't have the SSH keys set up on your local computer, it's easy to <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent">create a new SSH key locally</a>, and then <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account" target="_blank">feel free to link this key to your github account</a>. 

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

## Deploying Website Preview

## Additional GitHub learning resources 

- <a href="https://github.com/skills/introduction-to-github" target="_blank">Introduction to GitHub</a>
- <a href="https://docs.github.com/en/get-started/quickstart/set-up-git" target="_blank">Setting up Git</a>
- <a href="https://docs.github.com/en/get-started/quickstart/github-flow" target="_blank">GitHub workflow</a>
- <a href="https://github.com/skills/communicate-using-markdown" target="_blank">Using Markdown</a>