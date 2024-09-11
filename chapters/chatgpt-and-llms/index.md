---
layout: doc
title: "Chapter 0: Coding Smarter with Online Tools"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

I've spent a lot of time helping bench scientists with programming issues, data analysis, and general computational setup. If you interviewed those bench scientists about this process, the common theme about their experience would be that I spend a lot of time asking the internet for help. Whether it's a forum like [Stack Overflow](https://stackoverflow.com/) or an AI chatbot like [ChatGPT](https://openai.com/chatgpt/), you can figure out anything with the internet.

When it comes to programming, my philosophy is that **it's much more important to grasp a concept than commit specifics to memory**. If you understand the concept behind what you're trying to accomplish, the internet will always be able to fill in the specifics. That's why this is the first section.

While you're following this guide, you're bound to run into the occasional issue. You might also have questions about the content. The internet will have the answers to your questions, but how do you decide which resources are appropriate? Below, I'll address the main resources that I use for different kinds of questions.

::: tip Note
Almost no resource is free of factual inaccuracies; LLMs '[hallucinate](https://www.nature.com/articles/s41586-024-07421-0)', people writing posts on Stack Overflow might have no idea what they're talking about, and even programmers writing documentation make mistakes.
:::

## I have a specific goal and lack any background knowledge

If you know vaguely what you want to accomplish but _nothing_ about how to accomplish it, I'd recommend googling a recent tutorial. For example, if you're trying to figure out how to host a website with [GitHub Pages](https://pages.github.com/), read their current documentation or watch a video tutorial rather than going to a forum or using an LLM. This is for two reasons: (1) Forums and LLMs will not always be up-to-date, and (2) they make mistakes that you won't be able to catch without a little background know-how.

## I have a specific goal and have a little background knowledge

In this case, LLMs are almost always the best approach. LLM stands for **L**arge **L**anguage **M**odel. These are machine learning models that are trained on vast amounts of text, usually scraped from the internet, to understand, generate, and predict text. They learn patterns, enabling them to perform a variety including proof-reading, generating, and answering questions about code.

Because LLMs are trained on data scraped from the internet, they tend to be better at answering questions with lots of examples to train on. For this reason, LLMs are great at answering common questions and coding in common languages like Python and Javascript. However, if your question is about something obscure like a tool that's only used by the Bloom Lab, you won't get a useful answer.

Also, LLMs can '[hallucinate](https://www.nature.com/articles/s41586-024-07421-0)' and respond confidently with factually inaccurate answers. For this reason, I only use LLMs when I feel that I know enough to identify these mistakes or I have a way of validating the response.

## Helpful Resources

There are several different LLMs that people use for coding. Personally, I like Open AI's ChatGPT. It's a good generalist model that can answer coding questions as well as performing other tasks. I'd recommend the paid model, at the time of writing this it makes a significant difference.

Another popular LLM that theoretically performs coding tasks better than ChatGPT is Anthropic's Claude. At the time of writing it's well liked by several members of the lab.

Additionally, there are coding specific models like GitHub's Copilot. Copilot is nice because it's integrated directly into the development environment that you write code in giving you suggestions as you go. I use it, but mostly as intelligent autocomplete rather than a resource for asking questions. It's nice, but not as valuable as ChatGPT or Claude.
