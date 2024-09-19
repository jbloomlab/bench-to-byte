---
layout: doc
title: "Section 8: Coding best practices"
sidebar: true
aside: true
---

# {{ $frontmatter.title }}

Hopefully, you're already aware of the importance of [properly organizing your projects](), [tracking your code](), and [organizing complex analyses into automated workflows](). In this final section, I'll highlight some important language-agnostic tips for improving your coding.

## Following conventions

Each programming language has established _conventions_ that cover aspects like code formatting, indentation, naming styles, and file organization. Adhering to these is crucial for writing clean, readable, and maintainable code.

There are often _style guides_ that outline common conventions for programming languages. For examples, Python has the [PEP 8 style guide](https://peps.python.org/pep-0008/), which recommends using 4 spaces for indentation, limiting lines to 79 characters, and using lowercase with underscores for function and variable names.

Remembering all of these recommendation while you're coding would be a huge pain. Thankfully, code formatters like [`black`](https://black.readthedocs.io/en/stable/) can automatically format code to adhere to a specific style.

## Naming variables

Choosing the right names for your variables is like labeling boxes in the -80C: it helps you and others understand what's inside without digging through them. Here are some universal best practices for naming variables:

- **Don't Use Reserved Words**: Most programming languages have 'reserved words' with special meanings (e.g. `for`, `true`, and `if`). Familiarize yourself these words so you don't accidentally name something with one. Typically, a good syntax highlighter or linter will catch these mistakes.
- **Use Descriptive Names**: Use clear and descriptive names that convey the purpose of the variable. For example, if you have a data frame of gene expression data use `gene_expression_df` instead of just using `df`.
- **Avoid Abbreviations**: Unless they are standard abbreviations that people reading your code are likely to understand.
- **Be Consistent**: Stick to a naming convention and use it consistently. Each programming language has preferred naming conventions for variables, classes, and functions. For example, variables in Python are usually written in `snake_case` whereas variables in Javascript are written in `camelCase`.

## Commenting code

Comments are annotations in your code that explain what's happening, but they should be used judiciously. It's tempting for a beginning programmer to comment every line of code. This practice can actually make the code harder to read. Generally, you want to say _why_ code is the way it is, not _what_ the code is doing. If you're following the advice mentioned in this section, your code should be pretty clear even in the absence of comments.

Here's an example of well commented code from a Python packaged developed by the Bloom lab called [`Polyclonal`](https://github.com/jbloomlab/polyclonal/tree/main):

```python
def corr_heatmap(
    corr_df,
    corr_col,
    sample_cols,
    *,
    group_col=None,
    corr_range=(0, 1),
    columns=3,
    diverging_colors=None,
    scheme=None,
):
    """Plot a correlation matrix as heat map from a tidy data frame of correlations.

    Parameters
    ----------
    corr_df : pandas.DataFrame
        Data to plot.
    corr_col : str
        Column in `corr_df` with correlation coefficient.
    sample_cols : str or list
        Column(s) in corresponding to sample identifiers, suffixed by "_1" and "_2" for
        the distinct samples. Should be entries for all pairs of samples.
    group_col : str or None
        Column in `corr_df` to facet plots on, or `None` if no facets.
    corr_range : tuple or None
        Range of heat map as `(min, max)`, or `None` to use data range. Typically
        you will want to set to `(0, 1)` for :math:`r^2` and `(-1, 1)` for :math:`r`.
    columns : int
        Facet by `group_col` into this many columns.
    diverging_colors : None or bool
        If `True`, mid point of color scale is set to zero. If `None`, select `True`
        if `corr_range` extends below 0.
    scheme : None or str
        Color scheme to use, see https://vega.github.io/vega/docs/schemes/.
        If `None`, choose intelligently based on `corr_range` and `diverging_colors`.

    Returns
    -------
    altair.Chart
        Heatmap(s) of correlation coefficients.

    """
    corr_df = corr_df.copy()  # so we don't change input data frame

    if corr_col not in corr_df:
        raise ValueError(f"{corr_col=} not in {corr_df.columns=}")

    if corr_range is None:
        corr_range = (corr_df[corr_col].min(), corr_df[corr_col].max())
    else:
        if corr_range[0] > corr_df[corr_col].min():
            raise ValueError(f"{corr_range[0]} > {corr_df[corr_col].min()=}")
        if corr_range[1] < corr_df[corr_col].max():
            raise ValueError(f"{corr_range[1]} < {corr_df[corr_col].max()=}")
```

Notice two things: (1) the function has a '[Docstring](https://www.geeksforgeeks.org/python-docstrings/)' that describes the function's purpose, inputs, and outputs. (2) The code is commented judiciously, and uses comments to explain aspects of the code that aren't self-explanatory.

## Modularizing code

Breaking your code into smaller, reusable pieces makes it easier to manage and understand. Those pieces can be functions, classes, or modules depending on the conventions of the programming language. Generally, you don't want to have repetitive code. If you're copying and pasting code from one part of your script into another, that's a sign that you should be modularizing you code with functions or classes.

## Logging, Errors, and Warnings

It's important to use logs, warnings, and errors to monitor what's going on with your code. You should have expectations about how your code is supposed to work. These features help ensure that those expectations are met. They prevent silent bugs and help make your code user-friendly.

## Notebooks vs Scripts

Programming languages that are commonly used for data analysis, like Python and R, have interactive environments called 'Notebooks' that combine code execution, text, and visualizations in a single document. Notebooks are awesome tools for data analysis, but sometimes scripts are better suited to the task. How do you decide whether to use a Notebook or a script?

**When to use a Notebook (i.e. Jupyter Notebooks):**

Notebooks are awesome because they combine code, visualizations, and documentation in a single location. You can also run code interactively. I typically use Notebooks for:

- **Prototyping code**: It's hard to beat the convenience of running code interactively.
- **Documenting an analysis**: If I'm working on an analysis that I want to document for other people it's nice to have code, writing, and plots in a single location.

**When to use a script:**

Scripts a great way of [modularizing code](#modularizing-code) that you're going to run often. I typically use scripts over Notebooks in the following situations:

- **Frequently used code**: Scripts are smaller, faster, and simpler to run than Notebooks. I use scripts to modularize code that functions as a tool I plan to run frequently.
