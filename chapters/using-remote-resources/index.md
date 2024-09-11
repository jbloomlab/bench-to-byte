---
layout: doc
title: "3. Using remote computing resources"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

In this section, I'll describe how and why we use remote computational resources. I'll walk you though how to access remote file systems and how to run code on a cluster.

## Computing at Fred Hutch Cancer Center

:::tip
[There is a wiki](https://sciwiki.fredhutch.org/scicomputing/comp_index/) that's an invaluable resource for people doing scientific computing at Fred Hutch. It goes in depth on every topic that's covered in this section.
:::

In our lab, we use the Fred Hutch Cancer Center's file system to store our lab notebooks, data, and code. You can access the file system through a variety of methods. The most common way that people access our lab's files is by mounting the file system to their computer. This allows you to open and edit these files on your local machine with the advantage that you can navigate through files using a GUI (Graphical User Interface) like Finder on Mac or File Explorer on Windows.

The shared folders in the file system are all located at `/fh/`. There are several shared folders including `/fh/fast`, `/fh/scratch` and `/fh/secure`, but our lab's files are located under `/fh/fast` in `/fh/fast/bloom_j/`. Computational projects are stored under `/fh/fast/bloom_j/` in a directory called `computational_notebooks/` and organized by the lab member's Fred Hutch username and the year that a project was started.

```
/fh/fast/bloom_j/computational_notebooks/
|
|
––––– <fred hutch username>/
    |
    |
    ––––– <year>/
        |
        |
        ––––– <project>/
```

For example, if I have a project called `HMPV-Antibody-Passaging` that I created in 2024, it's location on the file system should be `/fh/fast/bloom_j/computational_notebooks/whannon/2024/HMPV-Antibody-Passaging`. Aside from the organizational benefits of adhering to this convention, all of the _code_ in `/fh/fast/bloom_j/computational_notebooks/` is automatically backed up on a daily basis.

## Access through the command line

It's important to be able to access the file system via the command line in addition to mounting it as a drive to your local computer.

---



It's likely that at some point you'll need to run an analysis that's so computationally intensive that it would cause your personal computer to melt into a pile of metallic sludge. That's where remote computing becomes handy. Why melt your computer when you can melt someone else's?

In this section, we'll walk you though how to use remote servers and computer clusters. You'll learn how to access these resources, when to use them, and some tips to make things faster and easier.

## `SSH`

You need a way to access a remote computer or resource. `SSH` provides a protocol for doing this. It's basically a way to transfer data between a remote computer (or series of computers) and your personal machine.

## `SSH` Keys

If you're going to use `SSH` to access remote resources, you'll need a way to verify your identity. That's where `SSH` keys come into play. `SSH` keys act like a secret handshake between you and a remote machine. You could use a passoword, but why would you? If you're a frequent user of a remote computing cluster or a remote repository like GitHub, the cumulative amount of time you spend entering your password really adds up.

### Keys for GitHub

One of the most ubiqitous uses of `SSH` is to retrieve or store content on `GitHub`. Below are some general instructions on how to generate an `SSH` key for `GitHub`. Specific details may vary a little between operating systems, however, the steps should be the same.

### Keys for a Rhino

Many scientists will also need to use `SSH` to access computational resources like a high-performance computing cluster. Using a key to streamline your access can save you a lot of time. Here's how you can set up an `SSH` key for the computational resources at Fred Hutch Cancer Center.

- Structure of the HPC infrastructure.
- Using a proxy jump to access Rhino

## Gizmo and Slurm

`Rhino` is awesome, but it's not intended for running computationally or time intensive programs. For that, we have `Gizmo`, a high-performance cluster that can be used to run tons of long, computationally intensive jobs in parallel. However, using `Gizmo` can be intimidating for people who haven't used HPCs before.

- Submitting jobs with `Slurm`
- Accessing `Gizmo` interactively
- Checking on the status of your jobs

## Multiplexing with `Tmux`

Sessions on `Rhino` are temporary. If you exit from `Rhino`, either by closing the terminal or loosing your connection, your session is _poof_, gone. However, there are ways of saving the state of your `Rhino` sessions. The most powerful is by using the terminal multiplexer `Tmux`.

- Describe `Tmux`
- When should you use `Tmux`
- How do you use `Tmux`

## Configuring with .dotfiles

Now you know how to access these resources. You might be frequently be hopping between your local and remote machine. However, all the settings on your local machine are likely totally different than your remote machine. `.dotfiles` provide a handy way of essentially saving your settings.

## Helpful resources

- The guide from FH sci comp
- Slurm guide
- Tmux cheet sheet
