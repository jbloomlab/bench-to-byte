---
layout: doc
title: "Chapter 6: Managing software environments"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

## Isolating Environments

What happens when we have need to use a lot of different softwares on a project? How do we isolate different softwares? How do we control the verison?

## Conda

Conda is a great all-purpose tool for managing softwares in virtual environments. How can we install conda?

### Conda vs. Mamba

What's mamba and why might we use it? Are there any disadvantages?

### Setting up Conda on `Rhino`

How do we set up Conda on the Rhino?

A quick note about PATHs

## Python virtual environments

If you're working on a purely python-based project, there are other ways to manage software. Poetry is an awesome tool for this.

## Docker

If you want to go a step further then virtual environments, you can use containers. You might see this as a way to run certain software tools like Augur.

### Docker vs. Singularity

Docker alone doesn't work on a cluster because of permissions. Instead, you can use singularity.

## Helpful Resources
