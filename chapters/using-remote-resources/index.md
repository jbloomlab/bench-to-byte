---
layout: doc
title: "Chapter 3: Using remote computing resources"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

## What are 'remote resources'?

You're often running computationally expensive programs, working in a centralized file system, or saving your code in a remote location like GitHub (we'll talk more about this later).

## SSH

How do you access remote resources?

## SSH Keys

To use these resources, you'll need to verify your identity. SSH keys make this quick and painless.

### SSH Keys for GitHub

Let's walk through setting up an SSH key for GitHub.

### SSH Keys for a Cluster

Let's walk through setting up an SSH key for a cluster.

## Rhino

This section is specific to Fred Hutch Cancer Cetner. What is `Rhino`, how do we access `Rhino`?

## Gizmo and Slurm

You can't run computationally or time intensive programs on `Rhino`. Instead, you have to use `Gizmo`. You can submit jobs to `Gizmo` with `Slurm`.

## Multiplexing with `tmux`

Your sessions are ephemeral unless you have a way of saving them. There are several ways to do this, but the best way is `tmux`.

## Configuring with .dotfiles

It's nice to have a consistent structure between your remote and local machines. This can be easily accomplished with `.dotfiles`.

## Helpful resources

The guide from FH sci comp
Slurm guide
Tmux Guide
