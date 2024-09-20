---
layout: doc
title: "Section 4: Managing software environments"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

Biological programming typically involves a combination of writing your own code and using tools developed by others. This can lead to projects with many dependencies, each of which has specific version requirements. It's crucial for reproducibility that these software _environments_ are tracked and managed. Otherwise, you'd be the only one who can run your analysis pipeline. Managing this by hand would be difficult. Thankfully, there are tools like Conda for managing software environments.

## What is Conda?

[Conda](https://docs.conda.io/en/latest/) is an open-source tool for managing both software packages. It allows you to install software and their dependencies in isolated virtual environments. This means you can easily switch between projects, each with its own set of package versions, without worrying about conflicts between dependencies.

### With Conda, you can

- Install the software you need (e.g., bioinformatics tools, Python packages) with all required dependencies
- Easily switch between environments
- Share environment "recipes" for reproducibility

We make extensive use of Conda in the Bloom Lab. However, there are alternative solutions for managing software environments that you might run into, the most common of which is [Docker](https://www.docker.com/). I won't describe Docker in this guide, but it's worth reading about.

### Conda vs. Mamba

[Mamba](https://mamba.readthedocs.io/en/latest/) is a re-implementation of Conda in C++ that offers the same functionality but is often faster, especially when resolving complex dependencies or handling large environments. I tend to use Mamba for building environments and Conda for quick operations like activating and deactivating an environment. However, this is just a habit, and Mamba's version of Conda's commands are basically identical.

Which should you use? Conda works fine for small, simple environments. Mamba can save you time for larger or more complex environments. If you're setting up Conda from scratch [using the instructions below](#installing-miniforge), use Mamba. If you've already been using Conda with an installation of [miniconda](https://docs.anaconda.com/miniconda/), and you would need to install Mamba, stick with Conda.

## Setting up Conda on `Rhino`

Conda isn't pre-installed on `Rhino`, so you'll have to set it up yourself. The easiest way to do this is by installing a lightweight version of Conda called [`miniconda`](https://docs.anaconda.com/miniconda/) or its open-source alternative, [`miniforge`](https://github.com/conda-forge/miniforge), which comes pre-configured with Mamba. If you're starting from scratch, I'd **highly** recommend installing `miniforge` instead of `miniconda`. If you've already installed `miniconda`, the process of uninstalling and re-installing a Conda distribution isn't worth the marginal advantages offered by `miniforge`.

### Installing `miniforge`

:::tip
A more comprehensive version of the following instructions is available [here](https://github.com/conda-forge/miniforge?tab=readme-ov-file#install).
:::

We're going to install Mamba and Conda on `Rhino` by downloading `miniforge` into our home directory (the default directory when you log into `Rhino`, i.e. `/home/username`).

Run the following command in home (`/home/username`) to fetch and run the latest `miniforge` build script from the web.

```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

You should follow the prompts during the installation and accept all the default options. Say **yes** to accepting the license, use the default recommended installation location (`~/miniforge3`), and say **yes** to the final question about whether to initialize the environment.

The build script will edit your `.bashrc` (a script that runs every time you log into `Rhino`) file with code that activates Mamba. This happens automatically, but to trigger the activation of Mamba this first time without logging out, run the following command.

```bash
source .bashrc
```

Now, instead of the usual prompt (`username@rhino02:~$ `), you'll see a new prompt that looks like: `(base) username@rhino02:~$ `. The name inside of the parenthesis indicates the Conda environment that's activated. The default environment when you log into `Rhino` is always `base`.

## Conda Basics

Conda has lots of commands and arguments, but you only need to know a few basics to get a lot of utility out of it. Note that `conda` and `mamba` are synonymous in the following sections.

### Making a named environment

To create a new environment with a specific name, you can use the `create` command. By default, this will create an isolated environment where you can install any packages you need. This is a great option for making an environment for a specific task.

```bash
conda create --name myenv
```

You can also specify the version of Python or any other package you want in the environment. For example, to create an environment called `myenv` with Python 3.9 installed:

```bash
conda create --name myenv python=3.9
```

After creating the environment, you can activate it using:

```bash
conda activate myenv
```

This switches your terminal into the isolated environment, allowing you to install packages specific to that project. You'll see the prompt change from something like `(base) username@rhino02:~$ ` to `(myenv) username@rhino02:~$ ` to reflect that `myenv` is active. To deactivate and return to your `base` environment:

```bash
conda deactivate
```

### Making an environment from a file

If someone has already created an environment and shared it with you, or if you want to share yours with others, you can easily set up an environment from an environment file (usually `environment.yml`). This is very common practice in the Bloom lab since we're often running [analysis pipelines](/sections/creating-workflows-and-pipelines/) with similar dependencies.

To create an environment from a file, use:

```bash
conda env create --file environment.yml
```

This will install all packages listed in the file and configure the environment exactly as defined.

The `environment.yml` file will look something like this:

```yaml
name: myenv

channels:
  - conda-forge
  - bioconda
  - defaults

dependencies:
  - altair=5.3
  - biopython=1.83
  - mafft=7.525
```

It specifies the name of the environment, like places (channels) to search for each software, and the software (dependencies) and their versions. You activate the environment the [same way described above](#making-a-named-environment).

## Common issues

While Conda is a helpful tool, you're bound to run into issues occasionally. Below are some common issues you might encounter and how to troubleshoot them.

### My environment is taking a **very** long time to solve

This is a common issue when Conda struggles to resolve dependencies. Here are a few ways to address this:

- **Use Mamba**: Mamba is faster at resolving dependencies, especially in complex environments. Simply replace `conda` with `mamba` in your commands:

```bash
mamba create --name myenv python=3.9
```

If you're using `conda` from an installation of `miniconda`, you can use `mamba` by installing it like any other dependency into your `base` environment.

- **Specify fewer package versions**: Conda and Mamba struggle when too many version constraints are placed on packages. If possible, relax some of these constraints and let Conda handle version selection. In most cases, a dependency doesn't need to pinned at a specific minor version.

- **Split up a big environment into smaller environments**: The main strength of `conda` is that you can create isolated environments. Use that to your advantage and split up big environments into small ones and activate them as needed.

### I'm getting permissions issues

This is a specific issue that comes up in the Bloom lab. If you've configured Conda so that there are multiple versions available at the same time––a local version in `/home/username` and a Bloom lab version in `/fh/fast/bloom_j/software`––you will eventually run into this problem.

- **Edit your `.bashrc` so that you're not accessing both versions of Conda**: In other words, only use your local version of Conda.

- **Check your `$PATH` variable**: There is a variable on `Rhino` called `$PATH` that contains a list of paths that `Rhino` searches for software. If you type a command like `python`, `Rhino` searches sequentially through each path in `$PATH` until it finds the first mention of `python`. Depending on the order of paths, it might end up accessing `python` from a place you don't expect. The same is true for a command like `conda` or `mamba`. You can check the order of paths by entering the command `echo $PATH`. You can edit the `$PATH` variable to change the order of paths.

### I can't solve my environment

Sometimes Conda won't be able to resolve package dependencies in your environment's specification. If someone else has successfully created an environment from this specification it's likely an issue with how Conda is searching channels.

Channels are repositories that Conda searches for package versions. Conda searches these in a particular order depending on how you've configured it. In most cases, the solution is to make sure you've set up 'strict channel priorities'.

```bash
conda config --set channel_priority strict 
```

This means that Conda will always search through channels in the order they're specified. If that doesn't fix the issue, change the order of the channels until the environment can solve. If that doesn't work, check that the dependencies actually exist in the channels you're searching.
