---
layout: doc
title: "4. Tracking code with Git"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

I use version control for nearly all of the programming I do. It's a crucial skill for learning to how program that can fall by the wayside in favor of learning a specific programming language. Leaning to program and learning version control should happen side-by-side. But what is "version control?" Version control is more than just saving a file. Here's a description from the book [Pro Git](https://git-scm.com/book/en/v2):

> Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

By preserving a history of incremental changes over time, you can go back and see what you've done, find out when and why something stopped working, make multiple changes to your project in parallel, and more. In this section, I'll introduce Git, a common tool for version control developed by Linus Torvalds.

:::tip
This section is only a quick introduction to Git. [This free book](https://git-scm.com/book/en/v2) is the definitive resource for people learning Git. I highly recommend skimming chapters 1-3.
:::

## How does git work?

At the core, Git records changes to your files over time. Unlike other systems that store differences between file versions, Git takes snapshots of your entire project each time you make a _commit_. These snapshots allow you to revisit any point in your project's history.

Here's a high-level overview of how `git` tracks your files:

1. **Repository Initialization**: When you initialize a Git repository in your project directory using `git init`, Git starts monitoring the files within that directory.

2. **Working Directory and Staging Area**: As you modify files, the changes are reflected in your 'working' directory. To prepare changes for a commit, you add them to the staging area using `git add`. This step lets you decide which changes to include in your next snapshot.

3. **Committing Changes**: After staging, you create a commit with `git commit`. This action records a snapshot of the staged changes and adds it to your project's history. Each commit is uniquely identified, allowing you to track and revert to specific versions.

4. **Local and Remote Repositories**: Git stores your project's history locally, but, _optionally_, you can also link your repository to a [remote server like GitHub or Bitbucket]() which enables collaboration, backup, and access from different machines. I'll talk more about this in the next section.

## Basic git

To get started with Git, you'll need to familiarize yourself with a couple key commands:

**Initialize a Repository**:

You can either create a new Git repository by making a directory and telling git to start tracking it.

```bash
mkdir my-project
cd my-project
git init
```

Or, you can clone an existing Git repository from a remote server to your local machine.

```bash
git clone [repository URL]
cd my_project
```

:::tip
A quick note about cloning a remote repository. There are several methods for doing this, some of which require a little set up, and those will be covered in the next section.
:::

**Check Repository Status**:

After you've made some changes to your directory, you can check to see what these are using the following command.

```bash
git status
```

This command displays the status of your working directory and staging area.

**Add Changes to Staging Area**:

```bash
git add [file(s)]
```

Stages specific files for the next commit. Use git add . to stage all changes.

Commit Changes:

bash
Copy code
git commit -m "Your commit message"
Records a snapshot of the staged changes. The commit message should briefly describe what you've done.

View Commit History:

bash
Copy code
git log
Shows a log of all commits made in the repository.

Compare Changes:

bash
Copy code
git diff
Compares changes between commits, branches, or your working directory and the last commit.

Push Changes to Remote Repository:

bash
Copy code
git push
Uploads your local commits to a remote repository.

Pull Updates from Remote Repository:

bash
Copy code
git pull
Fetches and merges updates from a remote repository into your local repository.

These commands form the backbone of Git operations. Regular use of git status and git log will help you stay informed about your project's state and history.

Branching and Merging
Branches are a powerful feature in Git that allow you to diverge from the main codebase and work independently on a set of changes. The primary branch is usually called main or master, and it's where the stable version of your project resides.

Why Use Branches?
Feature Development: When adding new features, you can create a branch to isolate your work. This way, the main codebase remains unaffected until the feature is complete and tested.

Bug Fixes: For fixing bugs, especially in a production environment, branches let you address issues without disrupting ongoing development work.

Experimentation: If you're trying out new ideas or approaches, branches provide a safe space to experiment without the risk of breaking existing code.

How to Use Branches
Create a New Branch:

bash
Copy code
git branch [branch-name]
Creates a new branch named [branch-name].

Switch to a Branch:

bash
Copy code
git checkout [branch-name]
Switches your working directory to the specified branch.

Create and Switch to a New Branch:

bash
Copy code
git checkout -b [branch-name]
A shortcut that creates a new branch and switches to it immediately.

Merge a Branch:

bash
Copy code
git checkout [target-branch]
git merge [source-branch]
Merges [source-branch] into [target-branch]. This integrates the changes from the source branch into the target branch.

Delete a Branch:

bash
Copy code
git branch -d [branch-name]
Deletes the specified branch after it has been merged.

When to Merge
After you've completed work on a branch and ensured it's stable, you'll want to merge it back into the main branch. This process integrates your changes and updates the main codebase. If multiple people are working on the project, it's a good practice to pull the latest changes from the main branch into your branch before merging, to minimize conflicts.

Handling Merge Conflicts
Sometimes, Git can't automatically merge changes due to conflicting edits in the same parts of files. When this happens, you'll need to manually resolve the conflicts:

Identify Conflicts: Git will mark the files with conflicts.
Resolve Conflicts: Edit the files to fix the issues.
Mark Conflicts as Resolved:
bash
Copy code
git add [file(s)]
Complete the Merge:
bash
Copy code
git commit
Benefits of Branching
Parallel Development: Multiple features or fixes can be developed simultaneously without interference.
Code Stability: The main branch remains stable, as new code is only merged after it's ready.
Collaboration: Teams can work independently and integrate their work efficiently.
By leveraging branches, you can maintain a clean and organized codebase, making your development process more efficient and less error-prone.