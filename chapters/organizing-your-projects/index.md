---
layout: doc
title: "2. Organizing your projects"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

Organization really matters in programming. Your goal should be that someone who _isn't you_ can open up your project directory and understand **where** things are, **what** things are, and **why** things are. Ideally, you want to frontload the organizational work for a new project. If you've ever done any significant reorganiziation in a mature project, you'll know how much of a headache that can be.

Below, we'll go through some high-level principles you should follow when organizing a project. There isn't one _right_ way to do it, but there sure are a lot of _wrong_ ways to do it.

## Naming a project

A new project starts with a names. Names should be descriptive. They shouldn't have any spaces (hopefully you know better). They shouldn't be too long.

That's a lot of "shouldn't", what about "should"?

## Structuring a project

After you name your project, you should think about how to organize the files within. There many ways to do this, and they depend on the content of the project and best practicies for your class of analysis. Here's what you should be thinking about:

1. Do I work with someone who's opinionated about project organization? If the answer is yes, do what they do or they'll be angry.
2. Is there a best practive for the kind of analysis I'm doing? For example, `Snakemake` pipelines often have a very specific organizational structure. Adhering to this will make it easier to develop and easier for others to follow along.
3. Avoid over-nesting things. You can organize things to a point where you have to dig through dozens of directories before you even find what you're looking for. When in doubt, flatten it out.

## Naming files and directories

Similar to the logic for naming projects, you want to give files descriptive names. Also, be consistent. It's so much easier to follow what's going on in a codebase if file are named consistently.

## Helpful resources

Here are some nice style guides and suggestions for project organization.
