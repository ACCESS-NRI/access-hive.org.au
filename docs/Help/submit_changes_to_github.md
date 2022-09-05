# Submit changes to GitHub

This is a general explanation on how to contribute to a project hosted on GitHub. Remember, some projects may have set up some special rules which you will need to follow.

???+ Note
    Some editors can connect to GitHub and enable you to perform some of these steps directly from the editor. Feel free to do so instead of following the indications below.

## Create an Issue

For all additions or modifications to a repository on GitHub, it is recommended to start by opening an Issue in the GitHub repository. After creation, please [assign the Issue to yourself in the right-hand side panel](https://docs.github.com/en/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users) if you intend on working on the issue.

## Create a branch from your issue

On GitHub navigate to your issue page. In the right-hand side panel, choose to create a branch for your issue. Make sure to follow the branch naming rules set by the repository. In general, you will be asked to reference the issue number in the branch name.

## Clone the repository to your computer

You need to create a local copy of the repository for you to work on. Generally, this is done with:

```
git clone <repo_url>
```

where `<repo_url>` is the path to the repository. It can be the HTTPS path or a SSH path depending on your setup. We recommend setting up SSH keys and use the SSH path for the repository.

## Create a local branch to follow the remote branch

On your local computer, in the clone repository, make sure your local copy is up to date with GitHub:
```
git pull
```
Then, create a local branch that follows the remote branch and checkout the new branch:
```
git checkout <branch_name>
```

You can then start modifying the documentation files. 

## Submit your changes

Once you are satisfied with your modifications, you will need to:

 - commit your changes locally on your branch
 - push your branch to GitHub
 - on GitHub, open a pull request between the `main` branch and your branch.

In the pull request description, make sure to add the text `Closes #X` where X is the Issue number associated with your modifications. This creates cross-references between the Issue and pull request, and links them so that the Issue is automatically closed when the pull request is accepted. Then ask for [a review using the Reviewer menu on the right-hand side panel](https://docs.github.com/en/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users).

You will be notified by email of any subsequent comment, request or action from the reviewer on this pull request. Please make sure you take any action required by the reviewer or your modification will not be accepted into the ACCESSHub site. 
