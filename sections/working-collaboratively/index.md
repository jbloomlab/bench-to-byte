---
layout: doc
title: "Section 6: Working collaboratively"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

In [the last section](/sections/tracking-your-code/), I talked about tracking your code with Git. In principle, this can all happen locally in your repository, but in many cases, you want to make a _remote_ copy of a repository and its history. That's where services like [GitHub](https://github.com/) come in. GitHub is a website that acts as a remote repository for your code, allowing you to store it online, collaborate with others, and take advantage of various tools for version control and project management.

## Using GitHub as a 'Remote'

### What's a Remote?

A _remote_ in Git is simply a version of your project that's hosted on the internet or another network. It's the counterpart to your _local_ repository on your computer. By pushing your local changes to the remote repository, you ensure that your code is backed up and accessible from other locations or by other collaborators.

### Why Use GitHub?

[GitHub](https://github.com/) is our preferred website for hosting Git repositories remotely. It provides a platform for:

- **Collaborative Coding**: Multiple people can work on the same project simultaneously without overwriting each other's changes.
- **Version Control**: Keeps track of every change made to the codebase, allowing you to revert to previous versions if needed.
- **Documentation Hosting**: With [GitHub Pages](https://pages.github.com/), you can host project documentation or even entire websites directly from your repository.

In our lab, we use GitHub to coordinate coding efforts, especially for projects that will be part of publications. By connecting your local Git repository to GitHub, you make it easier to share your work and collaborate effectively.

### Bloom Lab GitHub Organizations

In the Bloom lab, we use specific GitHub organizations to manage our projects:

- [`jbloomlab`](https://github.com/jbloomlab): Used for general projects and tools.
- [`dms-vep`](https://github.com/dms-vep): Dedicated to projects related to the [`dms-vep-pipeline`](https://dms-vep.org/methodology.html).
- [your personal account](https://github.com/WillHannon-MCB): You can also host projects on your personal account.

But how do you decide when to host your local project remotely? Generally, I host a project remotely on GitHub for two reasons:

1. _If I'm working on code that's likely to be connected to a paper_: Hosting your code on GitHub early makes it easy when you need links to data and code for a manuscript.
2. _If I'm working on code with someone else_: If you code is on GitHub it makes it easy to share with collaborators or work on the code alongside with else.

### Connecting a _local_ repository to a _remote_

As I mentioned in [the previous section](/sections/tracking-your-code/), Git is the version control system you use locally on your machine, while GitHub is the remote hosting service where you can store your repositories online. To connect a local repository to a GitHub remote you:

1. **Initialize a Local Repository**: You can start from scratch by creating a local Git repository with `git init`. However, **you can also connect an existing repository to a GitHub remote repository at any time**.

2. **Create a Remote Repository**: On GitHub, you create a new repository to host your project in the appropriate organization or account.

3. **Link Local and Remote Repositories**: When you create a new GitHub repository, you'll get instructions for connecting your local repository to the GitHub repository.

4. **Push and Pull Changes**: Now, you can use `git push` to upload your local commits to GitHub and `git pull` to update your local repository with changes from GitHub.

### Cloning a _remote_ repository _locally_

You can also clone an existing repository on GitHub onto your local machine. The local clone will be automatically connected to the remote repository it was cloned from, allowing you to pull updates or push changes.

To clone a repository, you can use the following command in your terminal, replacing [repository-url] with the URL of the repository you want to clone:

```bash
git clone [repository-url]
```

There are two main protocols for cloning repositories: HTTP and SSH.

- **HTTP**: No extra configuration, but you’ll need to enter your username and a personal access token every time you push changes.
- **SSH**: A more secure and convenient method, which allows you to authenticate using SSH keys (no passwords!).

:::tip
Only fools use HTTP.
:::

#### Setting up SSH for GitHub

Using SSH is preferred because it’s more secure and doesn’t require you to input credentials each time you push or pull changes. Once you’ve set up your SSH keys, GitHub will trust your machine, allowing you to interact with your repositories seamlessly.

Setting up SSH for GitHub is similar to [setting up SSH for `Rhino`](/sections/using-remote-resources/). The main difference is that you'll add your public key to your account on GitHub. You should set this up for any computer you use GitHub with.

Here are detailed and up-to-date instructions for [connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

## Collaborative Workflows

How do you work on code with others productively? It requires some structure to prevent conflicts and ensure code quality. Note, the following workflow mainly applies to projects where you're actively coding with other people. Small projects or projects in their early stages don't require this level of organization.

### Best Practices

1. **Protect the Main Branch**: The `main` branch (sometimes called `master`) should represent the stable, release-ready version of your code––what you'd link to in a paper. It's important to protect it by restricting direct commits. You can do this in the repository settings on GitHub.

2. **Use Feature Branches**: When you're working on a new feature or addressing an issue, create a new branch from `main`. This keeps your changes isolated until they're ready to be merged. Use descriptive names for your branches, like `sequencing-analysis-improvement` or `typo-correction-in-readme`.

3. **Merge Changes with Pull Requests**: When a feature branch is ready to become a part of `main` initiate a [pull request](#pull-requests) on GitHub to merge the changes on the feature branch into main. Typically, these changes will be reviewed by at least one other person.

### Pull Requests

A pull request (PR) is a way to propose changes you've made on a branch to be merged into another branch (usually `main`). It allows others to review your code, discuss potential issues, and approve the changes before they become part of the main codebase.

#### How to Make a Pull Request

1. **Push Your Branch to GitHub**: Use `git push` to upload your branch.

2. **Navigate to the Repository on GitHub**: You'll see a prompt to create a pull request for your recently pushed branch.

3. **Create the Pull Request**: Provide a descriptive title and include any relevant information or context in the description. You can also link your pull request to specific issues so that they automatically close when the branch is merged.

4. **Review and Merge**: Team members can review the pull request, leave comments, and approve it. Once approved, it can be merged into the `main` branch.

### Merge Conflicts

When multiple collaborators edit the same parts of a file, Git may not be able to automatically merge the changes. This results in a 'merge conflict', which you'll need to resolve manually. A typical workflow for resolving these conflicts is as follows:

1. **Identify the Conflict**: Git will mark the conflicting areas in the file.
2. **Choose the Correct Code**: Decide which changes to keep—yours, theirs, or a combination.
3. **Edit the File**: Remove the conflict markers and make the necessary edits.
4. **Commit the Resolution**: After resolving the conflicts, commit the changes to complete the merge.

Generally, you're unlikely to run into many merge conflicts while coding in the Bloom Lab.

### Issues and Discussions

Another valuable feature of GitHub is the ability to open 'Issues' on repository. Issues should be used for the following things:

1. **Suggesting Features**: Outline a new feature you want to add to a project.
2. **Reporting Bugs**: Highlight an issue with a project's code.
3. **Asking Questions**: Seek clarification on how to use run code. This is something you might have to do if you're using someone else's code.

The best practices for opening Issues is to be as descriptive as possible, use labels to categorize issues, and reference related Issues or pull requests. Another important thing to note is that you should **not** use Slack for code-related discussions. Unlike Slack messages, Issues on GitHub are persistent, organized, and easy to keep track of.
