# Bench to Byte: A biologist's guide to crafting quality code

Our goal is to empower biologists with the tools necessary for efficient coding. This course is designed for life scientists with moderate computational proficiency who want to optimize their workflow. You’ll learn how to organize projects, navigate the complexities of software environments, and build robust and reproducible pipelines. This guide will walk you through the essential steps needed to elevate your coding skills. You'll not only learn the "how," but the "why" behind each practice, ensuring you can apply these skills to streamline your research and foster reproducibility and collaboration.

*Note: A the moment, this course is geared towards scientists at the Fred Hutch Cancer Center.*

## Developing

To develop **Bench to Byte**, you'll need to set up a few things. Specifically, you'll need two pieces of software: `Node.js` and `npm`. `Node.js` is an environment that allows you to run Javascript code on your computer. `npm` is a package manager that handles the Javascript libraries necessary to create this website.

The instructions for installing `Node` and `npm` depend on your operating system and personal preference. For detailed instructions check out [this website](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

However, if you have `conda` installed, you can use conda to install `node` and `npm` using the `environment.yml` file in the repo.

```bash
conda env create -f environment.yml
conda activate bench-to-byte
```

Once `Node` and `npm` are installed, verify by running:

```bash
node -v
npm -v
```

You should see the node and npm versions that you installed on your system.

If this is the first time you're developing `bench-to-byte`, you'll need to install the packages in `packages.json`. To do this, run the following command from within the repository:

```bash
npm install
```

With everything installed, you can now boot up a live preview of the website that automatically reflects your changes upon saving.

```bash
npm run docs:dev
```

Now, there will be a local version of the website running at `http://localhost:5173`. Visit this URL in your browser to see a preview of the site.

Note, If you are developing `bench-to-byte` from a remote server (not your local machine), use

```bash
npm run remote:docs:dev
```

and access the preview at the URL provided under `Network`

## Contributing

[`Bench to Byte`](https://github.com/WillHannon-MCB/bench-to-byte) is based on the static site generator [VitePress](https://vitepress.dev/). This allows you to create fully functional web pages using [Markdown](https://www.markdownguide.org/) files. To add a new page to the site, you simply create a markdown document in the correct directory and make a pull request to [the website repository on GitHub](https://github.com/WillHannon-MCB/bench-to-byte).

For more details on writing markdown for a Vitepress website, see the markdown reference [here](https://vitepress.dev/guide/markdown).

## Project Structure

```bash
.
├── README.md
├── environment.yml
├── index.md
├── chapters
│   ├── chatgpt-and-llms
│   │   └── index.md
│   ├── coding-best-practices
│   │   └── index.md
│   ├── creating-workflows-and-pipelines
│   │   └── index.md
│   ├── introduction
│   │   └── index.md
│   ├── managing-software-environments
│   │   └── index.md
│   ├── organizing-your-projects
│   │   └── index.md
│   ├── setting-up-your-ide
│   │   └── index.md
│   ├── tracking-your-code
│   │   └── index.md
│   ├── using-remote-resources
│   │   └── index.md
│   └── working-collaboratively
│       └── index.md
├── package-lock.json
├── package.json
└── public
    └── logo.png
```

To add details to a specific chapter of the course, simply edit the `index.md` file under the corresponding `chapters/<chapter-you-are-editing>/` directory. If you want to include images in your markdown, you can either use a link to a remotely hosted image or add the image to the `public/` directory.
