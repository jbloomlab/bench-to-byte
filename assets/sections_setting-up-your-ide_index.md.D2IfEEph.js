import{_ as o,c as i,m as e,a,t as n,V as s,o as r}from"./chunks/framework.rMwTSdrC.js";const b=JSON.parse('{"title":"Section 1: Setting up your IDE","description":"","frontmatter":{"layout":"doc","title":"Section 1: Setting up your IDE","sidebar":true,"aside":true},"headers":[],"relativePath":"sections/setting-up-your-ide/index.md","filePath":"sections/setting-up-your-ide/index.md"}'),c={name:"sections/setting-up-your-ide/index.md"},d={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=s(`<p>Those familiar with coding will know the importance of using the appropriate text editor. Hopefully, you know better than to write code in Microsoft Word. You&#39;ve probably encountered tools like <code>Rstudio</code> for writing <code>R</code>, or <code>Jupyter</code> for writing <code>Python</code>. These tools are a perfectly reasonable way to write code, but they&#39;re inherently limited to a handful of languages. This quickly becomes an issue in scientific programming where a single project can consist of <code>bash</code>, <code>Python</code>, <code>R</code>, and <code>markdown</code> files.</p><p>An IDE, or <em>Integrated Development Environment</em>, provides a solution to this problem. With an IDE, you can write <code>markdown</code> documentation, edit a <code>bash</code> script, organize your directories, quickly check a <code>.log</code> file, and run a <code>Python</code> script all in the same window. I can&#39;t stress enough how much time an IDE can save you. However, so much functionality in one application can is intimidating. Below, I&#39;ll introduce you to <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Microsoft&#39;s Visual Studio Code (VS Code)</a>, one of the most approachable IDEs for general-purpose programming.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>I&#39;d highly recommend giving VS Code a try even if you&#39;re familiar with another text editor for coding. However, I wouldn&#39;t recommend VS Code if you&#39;re primarily using R. I&#39;d suggest that you use <code>Rstudio</code> for all R coding.</p></div><h2 id="getting-started-with-vs-code" tabindex="-1">Getting started with VS Code <a class="header-anchor" href="#getting-started-with-vs-code" aria-label="Permalink to &quot;Getting started with VS Code&quot;">​</a></h2><p>There is a reason that VS Code is the <a href="https://survey.stackoverflow.co/2023/#section-most-popular-technologies-integrated-development-environment" target="_blank" rel="noreferrer">most popular code editor</a> among software developers. It&#39;s powerful, flexible, user-friendly, and <strong>free</strong>. VS Code comes with lots of handy features, including intelligent autocomplete and built-in <code>git</code> commands that make it a breeze to keep <a href="/bench-to-byte/sections/tracking-your-code/">track of changes to your code</a>. However, the most powerful feature of VS Code is that it&#39;s customizable.</p><div class="tip custom-block"><p class="custom-block-title">Installation</p><p>VS Code is a desktop application like any other. To install VS Code, simply download it from the <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code website</a> for your specific operating system (Windows, Mac, etc...).</p></div><h2 id="user-interface" tabindex="-1">User Interface <a class="header-anchor" href="#user-interface" aria-label="Permalink to &quot;User Interface&quot;">​</a></h2><p>VS Code is laid out in a manner that makes it easy to edit code, navigate your project directory, and perform actions like <code>git</code> commands all in the same compact view. Here&#39;s an example of what a typical VS Code window looks like.</p><p><img src="https://code.visualstudio.com/assets/docs/getstarted/userinterface/hero.png" alt="Image"></p><blockquote><p><em>An example VS Code project from the <a href="https://code.visualstudio.com/docs/getstarted/userinterface" target="_blank" rel="noreferrer">VS Code documentation</a></em></p></blockquote><ul><li><p><strong>Activity Bar</strong> - On the far left side, this changes the content of the <em>Side Bar</em> and lets you perform activities like exploring your project directory or performing source control with <code>git</code>.</p></li><li><p><strong>Side Bar</strong> - The sidebar is an interface for performing various actions depending on the <em>Activity</em>. For example, installing extensions or navigating your current directory.</p></li><li><p><strong>Editor</strong> - The main area to edit your files. You can open as many editors as you like side-by-side, vertically, and horizontally.</p></li><li><p><strong>Panel</strong> - Space below the code editor that houses additional functions. The most relevant feature for readers of this guide is the integrated terminal. You can collapse the panel out of view for more space.</p></li><li><p><strong>Status Bar</strong> - Provides project-specific information.</p></li></ul><p>In addition to these main visual elements, there is also an interface at the top of the page for inputting commands called the <strong>Command Pallet</strong>.</p><p><img src="https://code.visualstudio.com/assets/docs/getstarted/userinterface/commands.png" alt="Command Pallet"></p><blockquote><p><em>The command pallet taken from the <a href="https://code.visualstudio.com/docs/getstarted/userinterface" target="_blank" rel="noreferrer">VS Code documentation</a></em></p></blockquote><p>To open the command pallet, use the keyboard shortcut <code>⇧⌘P</code>. This shortcut is the <strong>most important</strong> thing to remember when using VS Code. With the command pallet, you can perform a variety of actions from formatting a file, opening a terminal window, changing your settings, and more. <strong>Effectively, anything you can do in VS Code, you can do it with the command pallet</strong>.</p><p>Although this covers the basic interface of VS Code, there are a lot more features packed into the standard view that I didn&#39;t cover. If you&#39;re interested in learning more about the user interface for VS Code and how you can customize it, check out <a href="https://code.visualstudio.com/docs/getstarted/userinterface" target="_blank" rel="noreferrer">this page</a> in the documentation.</p><h2 id="installing-extensions" tabindex="-1">Installing Extensions <a class="header-anchor" href="#installing-extensions" aria-label="Permalink to &quot;Installing Extensions&quot;">​</a></h2><p>VS Code comes standard with most of the features you&#39;ll need. However, there will probably be certain features specific to the project you&#39;re working on. For example, if you&#39;re frequently using <code>Python</code>, you might want to format your code with <code>black</code> when you save a file. If you&#39;re writing documents in <code>markdown</code>, you&#39;ll probably want some basic form of spellchecking. Although VS Code doesn&#39;t come with these features built-in, you can add them as &#39;extensions&#39;. In most cases, VS Code will recommend appropriate extensions.</p><p>Here are several VS Code extensions that are particularly useful to us:</p><ul><li><code>Python</code> - IntelliSense for <code>Python</code> with features like code-checking and debugging.</li><li><code>Rainbow CSV</code> - Syntax highlighting for CSV files.</li><li><code>Jupyter</code> - Edit and run Jupyter notebooks right in VS Code.</li><li><code>Ruff</code> - For fast <code>Python</code> linting (code-checking).</li><li><code>Black Formatter</code> - Automatic formatting of <code>Python</code> code.</li><li><code>Snakemake</code> - IntelliSense and code highlighting for <code>Snakemake</code>.</li><li><code>vscode-pdf</code> - To open PDF files right in VS Code.</li><li><code>Protein Viewer</code> - A simple 3D protein viewer that opens in VS Code.</li></ul><p>To add extensions, you click on the <em>Extensions</em> button on the <em>Activity Panel</em> and search for extensions to install.</p><p><img src="https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/show-popular-extensions.png" alt="Install Extensions"></p><blockquote><p><em>An example showing how to install extensions from <a href="https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_install-extensions" target="_blank" rel="noreferrer">VS Code documentation</a></em></p></blockquote><h2 id="configuring-vscode" tabindex="-1">Configuring VSCode <a class="header-anchor" href="#configuring-vscode" aria-label="Permalink to &quot;Configuring VSCode&quot;">​</a></h2><p>In addition to customizing VS Code with extensions, it&#39;s also worth taking time to configure your settings. In the settings, you can configure everything from the appearance of your code to the code formatting tool that should be run on specific files when you save them. There are two ways to customize your settings: <em>locally</em> and <em>globally</em>.</p><p>The global settings that are applied to all workspaces are stored in a <code>settings.json</code> file. You can directly access this file by opening the command pallet (<code>⇧⌘P</code>) and typing in <code>Preference: Open User Settings</code> (the command pallet will autocomplete). However, the easiest way to edit the settings is to select <strong>Code</strong> &gt; <strong>Settings</strong> &gt; <strong>Settings</strong> from the application menu. This will provide a GUI where you change your settings alongside descriptions of what each setting does.</p><p>In addition to global settings, you can also configure settings on a project-by-project basis using <em>workplace</em> settings. These settings will only apply to the specific project (directory) that you&#39;ve configured them in. These settings are stored in a project within a <code>.vscode</code> directory. You set these the same way you set global settings, but you select <code>Workspace</code> rather than <code>User</code> in the settings menu.</p><p><img src="https://code.visualstudio.com/assets/docs/getstarted/settings/settings-modified.png" alt="Settings Example"></p><blockquote><p>Here is an example of the settings menu from the <a href="https://code.visualstudio.com/docs/getstarted/settings#_settingsjson" target="_blank" rel="noreferrer">VS Code documentation</a>.</p></blockquote><h2 id="command-line-interface" tabindex="-1">Command Line Interface <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;Command Line Interface&quot;">​</a></h2><p>In addition to interacting with VS Code through the application itself, you can also open up projects and files in VS Code directly from the command line. Here are some of the most helpful commands when using VS Code.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># open VS Code with current directory in the Explorer</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># create a new window</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">code</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># see help options</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">code</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre></div><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>VS Code is a must for projects where you&#39;re editing many files of different formats. However, VS Code is not a singular solution to all code editing needs. Although you can run code interactively in a <code>Jupyter Notebook</code> from within VS Code, it can often be faster to open up <code>Jupyter</code> from the command line for quick interactive scripting. Additionally, programming languages like <code>R</code> have specific IDEs like <code>Rstudio</code> that make them the default choice for projects built around <code>R</code> code.</p><h2 id="helpful-resources" tabindex="-1">Helpful Resources <a class="header-anchor" href="#helpful-resources" aria-label="Permalink to &quot;Helpful Resources&quot;">​</a></h2><p>Check out <a href="https://code.visualstudio.com/docs/introvideos/basics" target="_blank" rel="noreferrer">this page</a> on the VS Code documentation for a thorough walkthrough of the basics.</p>`,36);function p(t,u,m,g,f,y){return r(),i("div",null,[e("h1",d,[a(n(t.$frontmatter.title)+" ",1),l]),h])}const w=o(c,[["render",p]]);export{b as __pageData,w as default};
