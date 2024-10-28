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

#### Using snakemake with SLURM

To configure how snakemake interacts with SLURM, newer versions of snakemake (>8.0) require you to use the [profiles](https://snakemake.readthedocs.io/en/stable/executing/cli.html#profiles) system. This replaces cluster configuration files. Conceptually these work similarly to the old configuration files in that they allow you to configure how jobs are submitted to SLURM both globally and at a per-rule level. This system is still under active development so the advice here is current as of snakemake v8.24. 

##### Setup

To get started, first ensure that you have at least snakemake v8+ installed. You can check the Snakemake version with `snakemake --version`. In the latest version of the profile system,  interaction with the job schedulers is abstracted away into plugins. For SLURM, you will need to install the [snakemake-executor-plugin-slurm](https://snakemake.github.io/snakemake-plugin-catalog/plugins/executor/slurm.html). 

##### Profiles configuration

The profiles are simply YAML files that specify job scheduler-specific parameters. In theory, you could have separate profiles depending on where the pipeline is being run but in practice we'll mostly be dealing with SLURM. An example of a fairly minimal profile is below:

```
executor: slurm
default-resources:
 - runtime=720
jobs: 50 
use-conda: true
```

You can also specify rule-specific resource requirements in the profile configuration. For example, the code below would ask for 16 cpus anytime it submits a job for the `bigjob` rule. 

```
set-resources:
    bigjob:
        cpus_per_task: 16
```

:::tip
These can also be specified in the rules themselves as demonstrated in the section below. However, if they are set in both places, the value specified in the profile will override what is set in the rule.
:::

Further details on configuring this SLURM plugin can be found [here](https://snakemake.github.io/snakemake-plugin-catalog/plugins/executor/slurm.html).

##### Rule configuration

Rule specific parameters can also be set in the rule definition itself. This can be particularly useful for long running steps (e.g. alignment) which may be able to use multiple cores to speed things up. These can be set with the `resources` keyword:

```
rule bigjob
	input: ...
	output: ...
	threads: 8
	resources:
		mem_mb=16000,
		cpus_per_task=8
	shell: ...
```

:::warning
Currently, if you are submitting the snakemake job as a script itself, you must specify both `threads` and `cpus_per_task` or else this will not be properly propagated to SLURM. There is some ongoing discussion of this [issue](https://github.com/snakemake/snakemake-executor-plugin-slurm/issues/141) so it may be resolved at some point in the future. 
:::

##### Submission script

The main script to submit your pipeline to SLURM should look something like the following:

```
#!/bin/bash
#SBATCH -c 1
#SBATCH --mem=1G

snakemake --profile profiles/ -s workflow/Snakefile
```

This is just asking for 1 core with 1GB of memory for the main job of running the snakemake process, which will then spawn separate jobs for each rule that needs to be run. Therefore, we can keep the resource request here modest. Then in the `snakemake` command itself, you simply point it at your profiles configuration and your main `Snakefile` respectively. 
