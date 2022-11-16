# Edit directly on GitHub

This way to edit the site allows people with no knowledge of Git to contribute to ACCESS-Hive but is only suitable for light modifications of existing pages.

- Go to the page you want to modify on the ACCESS-Hive documentation site. At the right of the title, you will see a pen icon :material-pencil:. When you click on this icon, your browser will open the file in GitHub allowing you to edit the file.

<figure markdown>
  ![EditPen](../../assets/edit_pen.png)
  <figcaption>Pen icon circled in red</figcaption>
</figure>

- Enter your modification in the main pane. All the files are written in [Markdown][MarkdownSheet].

???+ note "Headers and table of content"
    The level 1 headers are reserved for the title of the page and are ignored from the pages' table of contents. Only use level 2 headers and higher to organise pages.

- Then add a commit message in the Commit changes box.

<figure markdown>
  ![CommitBox](../../assets/commit-box.png)
</figure>

- Commit and open a pull request

???+ important "Pull request is required"
    The `main` branch of the repository is protected and nobody can write to it directly. You will need to choose either to create a new branch (for ACCESS-Hive organisation members only) or to create a fork on your GitHub personal account (for non-members of ACCESS-Hive organisation) and then open a pull request in all cases.
    ![BranchAndPR](../../assets/branch-and-pr.png)

When creating the pull request, make sure to follow the instructions given to you in the pull request template. The description can be edited at any time. You can fill in the check list after creating the pull request. The pull request will automatically build [a preview of the documentation with your proposed changes][preview].

- Ask for a review by tagging the `@ACCESS-Hive/reviewers` team in a comment.

- Reply to the review. You will be notified by email of any subsequent comment, request or action from the reviewer on this pull request. Please make sure you take any action required by the reviewer or your modification will not be accepted into the ACCESS-Hive site.

## Further edits

During the review process, you might be requested to edit your proposed changes. For this, you will need to navigate to the branch created by GitHub. 

- At the top of the Pull request window on GitHub, you should see a link to your branch, circled in red on the image:

<figure markdown>
  ![PRheader](../../assets/PR_header.png)
</figure>

- Once you click on this link, navigate to and open the file you need to modify, then click on the pen icon in the toolbar on the right, circled in red on the image:

<figure markdown>
  ![GitHubedit](../../assets/GitHub-edit.png)
</figure>

- Then commit your changes once again to the same branch. This will update the pull request and the preview of the site.

- You need to let the reviewer know once you are confident you have responded to all their concerns, so they can review again. For this, locate the "Reviewers" pane in the right-hand side menu list on GitHub and click the icon circled in red in the image:

<figure markdown>
  ![GitHubnewrev](../../assets/GitHub-2nd-review.png)
</figure>

[MarkdownSheet]: https://www.markdownguide.org/cheat-sheet/
[preview]: local_edit.md#preview-from-a-pull-request