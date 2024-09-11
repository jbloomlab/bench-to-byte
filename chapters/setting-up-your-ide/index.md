---
layout: doc
title: "1. Setting up your IDE"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

Those familiar with coding will know the importance of using the appropriate text editor. Hopefully, you know better than to write code in Microsoft Word. You've probably encountered tools like `Rstudio` for writing `R` code, or `Jupyter` for writing `Python` code. These tools are a perfectly reasonable way to write code, but they're inherently limited to a handful of languages. This quickly becomes an issue in scientific programming where a single project can consist of `bash`, `Python`, `R`, and `markdown` files.

An IDE, or _Integrated Development Environment_, provides a solution to this problem. With an IDE, you can write `markdown` documentation, edit a `bash` script, organize your directories, quickly check a `.log` file, and run a `Python` script all in the same application. I can't stress enough how much time an IDE can save you. However, all that functionality in one application can be complicated and intimidating. Below, I'll introduce you to Microsoft's Visual Studio Code (VS Code), one of the most approachable IDEs for general-purpose programming.

:::tip Note
I'd highly recommend giving VS Code a try even if you're familiar with another text editor for coding. However, I wouldn't recommend VS Code if you're primarily using R. I'd suggest that you use `Rstudio` for all R coding.
:::

## Getting started with VS Code

There is a reason that VS Code is the [most popular code editor](https://survey.stackoverflow.co/2023/#section-most-popular-technologies-integrated-development-environment) among software developers. It's powerful, flexible, user-friendly, and **free**. VS Code comes with lots of handy features, including intelligent autocomplete and built-in `git` commands that make it a breeze to keep track of changes to your code. However, the most powerful feature of VS Code is that it's customizable.

:::tip Installation
VS Code is a desktop application like any other. To install VS Code, simply download it from the [VS Code website](https://code.visualstudio.com/) for your specific operating system (Windows, Mac, etc...).
:::

## User Interface

VS Code is laid out in a manner that makes it easy to edit code, navigate your project directory, and perform actions like `git` commands all in the same compact view. Here's an example of what a typical VS Code window looks like.

![Image](https://code.visualstudio.com/assets/docs/getstarted/userinterface/hero.png)
> *An example VS Code project from the [VS Code documentation](https://code.visualstudio.com/docs/getstarted/userinterface)*

- **Activity Bar** - On the far left side, this changes the content of the _Side Bar_ and lets you perform activities like exploring your project directory or performing source control with `git`.

- **Side Bar** - The sidebar is an interface for performing various actions depending on the _Activity_. For example, installing extensions or navigating your current directory.

- **Editor** - The main area to edit your files. You can open as many editors as you like side-by-side, vertically, and horizontally.

- **Panel** - Space below the code editor that houses additional functions. The most relevant to readers of this site is the integrated terminal. You can collapse the panel out of view for more space.

- **Status Bar** - Provides project-specific information.

In addition to these main visual elements, there is also an interface at the top of the page for inputting commands called the **Command Pallet**.

![Command Pallet](https://code.visualstudio.com/assets/docs/getstarted/userinterface/commands.png)
> *The command pallet taken from the [VS Code documentation](https://code.visualstudio.com/docs/getstarted/userinterface)*

To open the command pallet, use the keyboard shortcut `⇧⌘P`. This shortcut is the **most important** thing to remember when using VS Code. With the command pallet, you can perform a variety of actions from formatting a file, opening a terminal window, changing your settings, and more. Effectively, anything you can do in VS Code, you can do it with the command pallet.

Although this covers the basic interface of VS Code, there are a lot more features packed into the standard view that we didn't cover. If you're interested in learning more about the user interface for VS Code and how you can customize it, check out [this page](https://code.visualstudio.com/docs/getstarted/userinterface) in the documentation.

## Installing Extensions

VS Code comes standard with most of the features you'll need. However, there will probably be some features that are specific to the project you're working on. For example, if you're frequently using `Python`, you might want to format your code with `black` when you save a file. If you're writing documents in `markdown`, you'll probably want some basic form of spellchecking. Although VS Code doesn't come with these features built-in, you can add them as 'extensions'. In most cases, VS Code will recommend appropriate extensions.

Here are several VS Code extensions that are particularly useful to us:

- `Python` - IntelliSense for `Python` with features like code-checking and debugging.
- `Rainbow CSV` - Syntax highlighting for CSV files.
- `Jupyter` - Edit and run Jupyter notebooks right in VS Code.
- `Ruff` - For fast `Python` linting (code-checking).
- `Black Formatter` - Automatic formatting of `Python` code.
- `Snakemake` -  IntelliSense and code highlighting for `Snakemake`.
- `vscode-pdf` - To open PDF files right in VS Code.
- `Protein Viewer` - A simple 3D protein viewer that opens in VS Code.

To add extensions, you click on the _Extensions_ button on the _Activity Panel_ and search for extensions to install.

![Install Extensions](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/show-popular-extensions.png)
> *An example showing how to install extensions from [VS Code documentation](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_install-extensions)*

## Configuring VSCode

In addition to customizing VS Code with extensions, it's also worth taking time to configure your settings. In the settings, you can configure everything from the appearance of your code to the code formatting tool that should be run on specific files when you save them. There are two ways to customize your settings: _locally_ and _globally_.

The global settings that are applied to all workspaces are stored in a `settings.json` file. You can directly access this file by opening the command pallet (`⇧⌘P`) and typing in `Preference: Open User Settings` (the command pallet will autocomplete). However, the easiest way to edit the settings is to select **Code** > **Settings** > **Settings** from the application menu. This will provide a GUI where you change your settings alongside descriptions of what each setting does.

In addition to global settings, you can also configure settings on a project-by-project basis using _workplace_ settings. These settings will only apply to the specific project (directory) that you've configured them in. These settings are stored in a project within a `.vscode` directory. You set these the same way you set global settings, but you select `Workspace` rather than `User` in the settings menu.

![Settings Example](https://code.visualstudio.com/assets/docs/getstarted/settings/settings-modified.png)
> Here is an example of the settings menu from the [VS Code documentation](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson).

## Command Line Interface

In addition to interacting with VS Code through the application itself, you can also open up projects and files in VS Code directly from the command line. Here are some of the most helpful commands when using VS Code.

```bash
# open VS Code with current directory in the Explorer
code .

# create a new window
code -n

# see help options
code --help
```

## Summary

VS Code is a must for projects where you're editing many files of different formats. However, VS Code is not a singular solution to all code editing needs. Although you can run code interactively in a `Jupyter Notebook` from within VS Code, it can often be faster to open up `Jupyter` from the command line for quick interactive scripting. Additionally, programming languages like `R` have specific IDEs like `Rstudio` that make them the default choice for projects built around `R` code.

## Helpful Resources

Check out [this page](https://code.visualstudio.com/docs/introvideos/basics) on the VS Code documentation for a thorough walkthrough of the basics.
