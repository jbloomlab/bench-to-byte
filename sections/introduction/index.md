---
layout: doc
title: "Introduction"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

I made this guide for biologists with moderate programming experience who want to improve the way they work. This guide is _not_ intended to teach you a particular coding language ([here's a quick aside about that](#learning-to-program)). Instead, you'll learn how to organize your projects, use remote resources, create reproducible software environments, and build computational pipelines. Our goal is that you not only learn the _how_ but also the _why_ behind each practice.

::: tip A Quick Note
This guide is geared towards members of the [Bloom lab](https://jbloomlab.org/) at the Fred Hutch Cancer Center. In the future, I might expand this resource to apply to a more general audience.
:::

## Outline

Although each section is useful in isolation, you'll get the most out of this guide if you follow it in order.

0. [Coding Smarter with Online Tools](/sections/chatgpt-and-llms/)
   > Taking advantage of online resources
1. [Setting up your IDE](/sections/setting-up-your-ide/)
   > Using VSCode to streamline your coding workflow
2. [Organizing your projects](/sections/organizing-your-projects/)
   > Creating clearly named, well organized projects
3. [Using remote resources](/sections/using-remote-resources/)
   > Increasing your computational capabilities with remote resources
4. [Managing software environments](/sections/managing-software-environments/)
   > Using `conda` to isolate software environments
5. [Tracking your code](/sections/tracking-your-code/)
   > Versioning your code with `git`
6. [Working collaboratively](/sections/working-collaboratively/)
   > Collaborating with `GitHub`
7. [Reproducible workflows and pipelines](/sections/creating-workflows-and-pipelines/)
   > Building reproducible pipelines with `Snakemake`
8. [Coding best practices](/sections/coding-best-practices/)
   > Writing clear code

## Learning to Program

Some basic programming knowledge is necessary to get the most out of this guide. Below, I'll give a quick overview of the programming languages that are widely used by biologists so you can pick the programming language that best suites your needs.

Generally, programming languages are either _compiled_––you write a script and an intermediate software called a compiler transforms it into an executable program––or _interpreted_––you write a script that can be executed at any point without a compilation step. Compiled languages are fast and easy to run on different operating systems; however, they tend to be more difficult to learn, run, and debug. Interpreted languages are usually not as fast as compiled languages, but they're much easier to learn, run, and debug. Both styles of programming language have a place in biological programming. Compiled languages are great for writing programs that run quickly on huge amounts of data (like an aligner). Interpreted languages are great for data analysis and plotting. Most biologists will want to learn an interpreted language.

Common _compiled_ programming languages used by biologists are C/C++, Java, and Rust. They're used to write short-read aligners like [`BWA`](https://github.com/lh3/bwa) (C/C++), genome browsers like [`IGV`](https://github.com/igvteam/igv) (Java), and tools for single-cell genomics like [`cellranger`](https://github.com/10XGenomics/cellranger) (Rust). You may interact with these tools, but you're unlikely to encounter a situation where you'll need to write your own.

Common _interpreted_ languages are Python, R, Javascript, and Perl. Python and R are the most widely used by biologists. Perl _was_ common among biologists, but has fallen out favor. Javascript is the principle programming language of the web and is occasionally used by biologists to build websites and interactive dashboards. If you're a biologist who want's to learn programming, stick to with Python or R.

When choosing whether to learn Python or R, consider the following factors:

### 1. What are my research needs?

Python and R share most of the same core features, but they have differing strengths and community support for certain types of analysis. Python is a better general programming language with many useful libraries for biological problems. R is geared towards statistics and data analysis and programming for these scenarios is more natural. Additionally, R has more common packages for analyzing gene expression and single-cell data. Learn the language with the best set of tools for the type of research you're doing.

### 2. What are people around me using?

If possible, learn the language that people around you (in your lab or institute) are using. It makes it easier to collaborate and they'll be a valuable resource while you're learning.

::: tip
Learn Python if you're a member of the [Bloom lab](https://jbloomlab.org/).
:::

## Suggestions

If you have any suggestions for topics that aren't covered in this guide, please suggest them in the corresponding [Discussions thread](https://github.com/WillHannon-MCB/bench-to-byte/discussions/1).
