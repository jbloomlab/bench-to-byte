---
layout: doc
title: "2. Organizing your projects"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

Organization matters in programming. Your goal should be that someone who _isn't you_ can open your project directory and understand **where** things are, **what** things are, and **why** things are. Ideally, you want to front-load the organizational work for a new project. If you've ever done any significant reorganization of a mature project, you'll know how much of a headache that can be.

Below, I'll go through some high-level organizational principles that you should follow. There isn't one _right_ way to do things, but there sure are a lot of _wrong_ ways.

## Creating a project

All of the code for a single _project_ belongs in one directory. You should **not** split code for a single project among multiple distinct directories. Everything should be housed under one roof. But what is a _project_?

Imagine that you're researching the function of your favorite protein. You're probably taking advantage of a variety of assays and tools, each of which is analyzed in a particular fashion. It could be tempting to split each of these analyses into separate directories housed in different locations in your file system, but this is not a good practice. Instead, organize them under a single directory.

Housing all of the analysis files for a project in a single directory has a variety of benefits:

- It simplifies the process of backing up your code and analysis.
- It makes it easy to share the relevant code when it comes time to publish.
- It lets you track/version all of the analyses in your project with tools like `git`.

Generally, a good rule of thumb is a _project_ corresponds to all of the analysis for a single paper. However, there can be exceptions for large papers that involve many distinct and involved computational pipelines. At the end of the day, you have to use your best judgment.

I'll use [this project](https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933) from [the Bloom Lab](https://jbloomlab.org/) as an example in the following sections.

## Naming a project

Names should be simple and descriptive. The name should communicate the purpose of the project, but it shouldn't be so long that it's annoying to type out. Generally, you should ask yourself if the name you've chosen is:

- **Descriptive**
- **Readable**
- **Succinct**
- **Consistent**

Take [this project](https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933) as an example. Bernadeta Dadonaite from [the Bloom Lab](https://jbloomlab.org/) performed deep mutational scanning on the SARS-CoV-2 Spike protein (from the Delta variant) to identify mutations that escape neutralization by the therapeutic antibody REGN10933. All of the code for this analysis is located in [a directory called 'SARS-CoV-2_Delta_spike_DMS_REGN10933'](https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933). The name clearly describes the project without being overly wordy. It also distinguishes this project from [similar ones](https://github.com/dms-vep) while adhering to the same naming scheme.

## Organizing a project

After you've decided what your project is and how to name it, you should think about how to organize the files within. There are many correct ways to do this, but there are some general principles that you should try to follow. Below, we'll cover some of these general principles.

Project organization should be **consistent**. If you're working with someone opinionated about project organization, you should do your best to use their approach (or they'll be upset). Another thing to consider is whether there is an established set of best practices for the type of project you're working on. For example, a `Snakemake` pipeline typically adheres to a [specific organizational structure](https://github.com/snakemake-workflows/cyrcular-calling). By sticking to this, you'll make it easier to develop and easier for others to follow along.

If you're working alone and there isn't a clear template for organizing your project, here are simple set of rules to follow:

1. **ALWAYS write a README**: A 'README' is a plain text file––typically written in [markdown](https://www.markdownguide.org/cheat-sheet/)––that describes the contents of your project. It should explain the purpose of the project, give credit to the creators, outline the basic organization of the directory, and give details on how to run the analysis. Here's the [README](https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933/blob/main/README.md) for SARS-CoV-2_Delta_spike_DMS_REGN10933.

2. **Separate data from code**: Separate the code that's responsible for the analysis from the data that you'll be analyzing. I always put data inside a directory called [`data/`](https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933/tree/main/data). The organization of `data/`'s contents is up to you, but if you have data it should be in a `data/` directory.

3. **Separate results (i.e. derived data) from data**: Your analysis will generate results (like plots and tables) and intermediate files (like alignments). Any files that are derived by your code should be kept separately from your input `data/`. I'd highly recommend storing your derived files in a directory called [`results/`](https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933/tree/main/results). The organization of `results/` is up to you.

4. **Choose clear, explicit, and consistent names**: For files and subdirectories, follow the [naming advice described above](#naming-a-project).

5. **Avoid over-nesting**: You can organize files and directories to a point where you have to dig through dozens of layers before you even find what you're looking for. When in doubt, flatten it out.

## Summary

There are many reasonable ways to organize an analysis or project. However, the principles described above hopefully provide a general road map.
