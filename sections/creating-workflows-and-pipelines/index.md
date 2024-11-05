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

A `Snakemake` workflow consists of many connected steps called 'rules.' The same rule can be executed in parallel for each input sample to the workflow. Separately running instances of each rule are called 'jobs.' You can run each job _sequentially_, but it's much faster to run independent jobs _in parallel_. That's where a workload manager like [`Slurm`](https://slurm.schedmd.com/documentation.html) comes in handy. `Snakemake` can communicate with `Slurm` to allocate computational resources for running multiple jobs simultaneously.

As of `Snakemake` version `8.*.*`, you'll need to use [profiles](https://snakemake.readthedocs.io/en/stable/executing/cli.html#profiles) to configure how `Snakemake` interacts with `Slurm`.

##### Setup

Ensure that you have at least `Snakemake` version `8.*.*`+ installed. You can check by running `snakemake --version`. You'll also need to install the [snakemake-executor-plugin-slurm](https://snakemake.github.io/snakemake-plugin-catalog/plugins/executor/slurm.html) plugin from conda.

```bash
conda install bioconda::snakemake-executor-plugin-slurm
```

##### Profiles configuration

"[Profiles](https://snakemake.readthedocs.io/en/stable/executing/cli.html#profiles)" are YAML files that specify how `Snakemake` should ask `Slurm` for resources.

Make a directory in your project called `profile` and create an empty file called `config.yaml`:

```bash
mkdir profile
touch profile/config.yaml
```

Open `config.yaml` and add the following information:

```yaml
executor: slurm
latency-wait: 60
jobs: 100
slurm-init-seconds-before-status-checks: 20

default-resources:
  slurm_account: <account_name>
  runtime: 10800
  cpus_per_task: 1
  mem_mb: 4000
```

This is the most basic version of a 'profile.' You can leave the first section untouched. However, you'll need to add the name of your `slurm_account` under `default-resources:` (e.g. `bloom_j`). As its name implies, `default-resources:` tells `Slurm` what resources should be allocated to a job if no other information is specified.

You'll occasionally have a rule that requires more resources. For example, alignment can be sped up significantly with multiple CPUs. Profiles can tell `Slurm` that jobs spawned from certain rules require more resources:

```yaml
set-resources:
  <rule_that_needs_more_cpus>:
    cpus_per_task: 8
```

The `set-resources:` section tells `Slurm` that jobs from your `<rule_that_needs_more_cpus>` should get 8 CPUs, not the single CPU given by default.

:::tip
Further details on configuring this `Slurm` with profiles can be found [here](https://snakemake.github.io/snakemake-plugin-catalog/plugins/executor/slurm.html).
:::

##### Rule configuration

If you have a rule that requires more resources, you should also define that in the rule itself with the `resources` and `threads` keywords:

```snakemake
rule rule_that_needs_more_cpus:
	input:
	output:
	threads: 8
	resources:
		mem_mb=16000,
		cpus_per_task=8
	shell:
```

:::warning
Currently, if you are submitting the snakemake job as a script itself, you must specify both `threads` and `cpus_per_task` or else this will not be properly propagated to `Slurm`. There is some ongoing discussion of this [issue](https://github.com/snakemake/snakemake-executor-plugin-slurm/issues/141) so it may be resolved at some point in the future.
:::

##### Submission script

After configuring a profile and updating your rules, you'll need to make a `bash` script that runs your `Snakemake` pipeline:

```bash
#!/bin/bash
#SBATCH -c 1
#SBATCH --mem=1G

snakemake \
    --software-deployment-method conda \
    --conda-frontend mamba \
    --workflow-profile profiles \
    --rerun-incomplete
```

The lines preceded by `#` tell `Slurm` that you'll need one CPU and 1GB of memory to start running the `Snakemake` pipeline. Once the `snakemake` command has been executed on this CPU, `Snakemake` will use the profile specified by `--workflow-profile` to begin submitting pipeline jobs to `Slurm`.

:::warning
If you run `Snakemake` by submitting a `bash` script to `Slurm` you'll get the following warning message:

```txt
You are running snakemake in a SLURM job context. This is not recommended, as it may lead to unexpected behavior. Please run Snakemake directly on the login node.
```

This shouldn't be a big issue, but please post an issue on this repository if you running into unexpected behavior.
:::
