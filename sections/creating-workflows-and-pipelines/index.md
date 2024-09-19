---
layout: doc
title: "Section 7: Creating reproducible workflows and pipelines"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

In biology, we often string together bits of code, scripts, and tools to complete a single analysis. Each step runs sequentially to produce some desired output. Instead of remembering the order and manually running each step, you should take advantage of programming tools to codify these steps in a pipeline. In this section, I'll describe what a pipeline is, when you should write one, and what tools are available to make it easier.

## What's a pipeline?

Pipelines group together different computational steps one after the other. People often accomplish this with `bash` scripts or by manually running commands in sequence. But there's a better way. You can use a workflow language. These languages are designed to handle complex workflows, manage dependencies, and automate the execution of tasks. They're smart because they can:

- **Automatically detect dependencies**: Determine which steps depend on others.
- **Optimize execution**: Run independent tasks in parallel.
- **Resume from failures**: Restart workflows from the point of failure without redoing completed tasks.
- **Ensure reproducibility**: Keep a record of all steps for consistent results. Imagine being able to run a large complex analysis with a single command.

## When should you write an analysis as a pipeline?

If your analysis is more complex than a single script or command, a pipeline can significantly improve efficiency and reliability. This is especially true when certain steps depend on the outputs of previous ones. You should use pipelines to manage these relationships efficiently.

## What tools are available for writing pipelines?

There are several tools designed to help you write pipelines including [`Snakemake`](https://snakemake.readthedocs.io/en/stable/index.html), [`Make`](https://www.gnu.org/software/make/), [`Nextflow`](https://www.nextflow.io/), and [`CWL`](https://www.commonwl.org/). Each tool has its strengths, but `Snakemake` and `Nextflow` are the most commonly used tools used in Bioinformatics.

### Snakemake

We primarily use `Snakemake` in the Bloom lab. `Snakemake` is a workflow management system that uses a a Python-based language to define rules, inputs, outputs, and commands. In Snakemake, you define a series of _rules_ in a file called a `Snakefile`. Each rule specifies:

- **Targets (Outputs)**: The files or results you want to produce.
- **Dependencies (Inputs)**: The files required to produce the targets.
- **Actions (Shell Commands or Scripts)**: The commands to execute.

`Snakemake` automatically builds a workflow based on these rules, figuring out the order of execution by analyzing the dependencies. The best way to learn `Snakemake` is by following the [tutorial](https://snakemake.readthedocs.io/en/stable/tutorial/tutorial.html) in it's documentation.
