import{_ as t,c as r,m as e,a,t as i,V as s,o as n}from"./chunks/framework.rMwTSdrC.js";const w=JSON.parse('{"title":"Section 6: Working collaboratively","description":"","frontmatter":{"layout":"doc","title":"Section 6: Working collaboratively","sidebar":true,"aside":true},"headers":[],"relativePath":"sections/working-collaboratively/index.md","filePath":"sections/working-collaboratively/index.md"}'),l={name:"sections/working-collaboratively/index.md"},c={id:"frontmatter-title",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=s('<p>In <a href="/bench-to-byte/sections/tracking-your-code/">the last section</a>, I talked about tracking your code with Git. In principle, this can all happen locally in your repository, but in many cases, you want to make a <em>remote</em> copy of a repository and its history. That&#39;s where services like <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a> come in. GitHub is a website that acts as a remote repository for your code, allowing you to store it online, collaborate with others, and take advantage of various tools for version control and project management.</p><h2 id="using-github-as-a-remote" tabindex="-1">Using GitHub as a &#39;Remote&#39; <a class="header-anchor" href="#using-github-as-a-remote" aria-label="Permalink to &quot;Using GitHub as a &#39;Remote&#39;&quot;">​</a></h2><h3 id="what-s-a-remote" tabindex="-1">What&#39;s a Remote? <a class="header-anchor" href="#what-s-a-remote" aria-label="Permalink to &quot;What&#39;s a Remote?&quot;">​</a></h3><p>A <em>remote</em> in Git is simply a version of your project that&#39;s hosted on the internet or another network. It&#39;s the counterpart to your <em>local</em> repository on your computer. By pushing your local changes to the remote repository, you ensure that your code is backed up and accessible from other locations or by other collaborators.</p><h3 id="why-use-github" tabindex="-1">Why Use GitHub? <a class="header-anchor" href="#why-use-github" aria-label="Permalink to &quot;Why Use GitHub?&quot;">​</a></h3><p><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a> is our preferred website for hosting Git repositories remotely. It provides a platform for:</p><ul><li><strong>Collaborative Coding</strong>: Multiple people can work on the same project simultaneously without overwriting each other&#39;s changes.</li><li><strong>Version Control</strong>: Keeps track of every change made to the codebase, allowing you to revert to previous versions if needed.</li><li><strong>Documentation Hosting</strong>: With <a href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub Pages</a>, you can host project documentation or even entire websites directly from your repository.</li></ul><p>In our lab, we use GitHub to coordinate coding efforts, especially for projects that will be part of publications. By connecting your local Git repository to GitHub, you make it easier to share your work and collaborate effectively.</p><h3 id="bloom-lab-github-organizations" tabindex="-1">Bloom Lab GitHub Organizations <a class="header-anchor" href="#bloom-lab-github-organizations" aria-label="Permalink to &quot;Bloom Lab GitHub Organizations&quot;">​</a></h3><p>In the Bloom lab, we use specific GitHub organizations to manage our projects:</p><ul><li><a href="https://github.com/jbloomlab" target="_blank" rel="noreferrer"><code>jbloomlab</code></a>: Used for general projects and tools.</li><li><a href="https://github.com/dms-vep" target="_blank" rel="noreferrer"><code>dms-vep</code></a>: Dedicated to projects related to the <a href="https://dms-vep.org/methodology.html" target="_blank" rel="noreferrer"><code>dms-vep-pipeline</code></a>.</li><li><a href="https://github.com/WillHannon-MCB" target="_blank" rel="noreferrer">your personal account</a>: You can also host projects on your personal account.</li></ul><p>But how do you decide when to host your local project remotely? Generally, I host a project remotely on GitHub for two reasons:</p><ol><li><em>If I&#39;m working on code that&#39;s likely to be connected to a paper</em>: Hosting your code on GitHub early makes it easy when you need links to data and code for a manuscript.</li><li><em>If I&#39;m working on code with someone else</em>: If you code is on GitHub it makes it easy to share with collaborators or work on the code alongside with else.</li></ol><h3 id="connecting-a-local-repository-to-a-remote" tabindex="-1">Connecting a <em>local</em> repository to a <em>remote</em> <a class="header-anchor" href="#connecting-a-local-repository-to-a-remote" aria-label="Permalink to &quot;Connecting a _local_ repository to a _remote_&quot;">​</a></h3><p>As I mentioned in <a href="/bench-to-byte/sections/tracking-your-code/">the previous section</a>, Git is the version control system you use locally on your machine, while GitHub is the remote hosting service where you can store your repositories online. To connect a local repository to a GitHub remote you:</p><ol><li><p><strong>Initialize a Local Repository</strong>: You can start from scratch by creating a local Git repository with <code>git init</code>. However, <strong>you can also connect an existing repository to a GitHub remote repository at any time</strong>.</p></li><li><p><strong>Create a Remote Repository</strong>: On GitHub, you create a new repository to host your project in the appropriate organization or account.</p></li><li><p><strong>Link Local and Remote Repositories</strong>: When you create a new GitHub repository, you&#39;ll get instructions for connecting your local repository to the GitHub repository.</p></li><li><p><strong>Push and Pull Changes</strong>: Now, you can use <code>git push</code> to upload your local commits to GitHub and <code>git pull</code> to update your local repository with changes from GitHub.</p></li></ol><h3 id="cloning-a-remote-repository-locally" tabindex="-1">Cloning a <em>remote</em> repository <em>locally</em> <a class="header-anchor" href="#cloning-a-remote-repository-locally" aria-label="Permalink to &quot;Cloning a _remote_ repository _locally_&quot;">​</a></h3><p>You can also clone an existing repository on GitHub onto your local machine. The local clone will be automatically connected to the remote repository it was cloned from, allowing you to pull updates or push changes.</p><p>To clone a repository, you can use the following command in your terminal, replacing [repository-url] with the URL of the repository you want to clone:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone [repository-url]</span></span></code></pre></div><p>There are two main protocols for cloning repositories: HTTP and SSH.</p><ul><li><strong>HTTP</strong>: No extra configuration, but you’ll need to enter your username and a personal access token every time you push changes.</li><li><strong>SSH</strong>: A more secure and convenient method, which allows you to authenticate using SSH keys (no passwords!).</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Only fools use HTTP.</p></div><h4 id="setting-up-ssh-for-github" tabindex="-1">Setting up SSH for GitHub <a class="header-anchor" href="#setting-up-ssh-for-github" aria-label="Permalink to &quot;Setting up SSH for GitHub&quot;">​</a></h4><p>Using SSH is preferred because it’s more secure and doesn’t require you to input credentials each time you push or pull changes. Once you’ve set up your SSH keys, GitHub will trust your machine, allowing you to interact with your repositories seamlessly.</p><p>Setting up SSH for GitHub is similar to <a href="/bench-to-byte/sections/using-remote-resources/">setting up SSH for <code>Rhino</code></a>. The main difference is that you&#39;ll add your public key to your account on GitHub. You should set this up for any computer you use GitHub with.</p><p>Here are detailed and up-to-date instructions for <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh" target="_blank" rel="noreferrer">connecting to GitHub with SSH</a>.</p><h2 id="collaborative-workflows" tabindex="-1">Collaborative Workflows <a class="header-anchor" href="#collaborative-workflows" aria-label="Permalink to &quot;Collaborative Workflows&quot;">​</a></h2><p>How do you work on code with others productively? It requires some structure to prevent conflicts and ensure code quality. Note, the following workflow mainly applies to projects where you&#39;re actively coding with other people. Small projects or projects in their early stages don&#39;t require this level of organization.</p><h3 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ol><li><p><strong>Protect the Main Branch</strong>: The <code>main</code> branch (sometimes called <code>master</code>) should represent the stable, release-ready version of your code––what you&#39;d link to in a paper. It&#39;s important to protect it by restricting direct commits. You can do this in the repository settings on GitHub.</p></li><li><p><strong>Use Feature Branches</strong>: When you&#39;re working on a new feature or addressing an issue, create a new branch from <code>main</code>. This keeps your changes isolated until they&#39;re ready to be merged. Use descriptive names for your branches, like <code>sequencing-analysis-improvement</code> or <code>typo-correction-in-readme</code>.</p></li><li><p><strong>Merge Changes with Pull Requests</strong>: When a feature branch is ready to become a part of <code>main</code> initiate a <a href="#pull-requests">pull request</a> on GitHub to merge the changes on the feature branch into main. Typically, these changes will be reviewed by at least one other person.</p></li></ol><h3 id="pull-requests" tabindex="-1">Pull Requests <a class="header-anchor" href="#pull-requests" aria-label="Permalink to &quot;Pull Requests&quot;">​</a></h3><p>A pull request (PR) is a way to propose changes you&#39;ve made on a branch to be merged into another branch (usually <code>main</code>). It allows others to review your code, discuss potential issues, and approve the changes before they become part of the main codebase.</p><h4 id="how-to-make-a-pull-request" tabindex="-1">How to Make a Pull Request <a class="header-anchor" href="#how-to-make-a-pull-request" aria-label="Permalink to &quot;How to Make a Pull Request&quot;">​</a></h4><ol><li><p><strong>Push Your Branch to GitHub</strong>: Use <code>git push</code> to upload your branch.</p></li><li><p><strong>Navigate to the Repository on GitHub</strong>: You&#39;ll see a prompt to create a pull request for your recently pushed branch.</p></li><li><p><strong>Create the Pull Request</strong>: Provide a descriptive title and include any relevant information or context in the description. You can also link your pull request to specific issues so that they automatically close when the branch is merged.</p></li><li><p><strong>Review and Merge</strong>: Team members can review the pull request, leave comments, and approve it. Once approved, it can be merged into the <code>main</code> branch.</p></li></ol><h3 id="merge-conflicts" tabindex="-1">Merge Conflicts <a class="header-anchor" href="#merge-conflicts" aria-label="Permalink to &quot;Merge Conflicts&quot;">​</a></h3><p>When multiple collaborators edit the same parts of a file, Git may not be able to automatically merge the changes. This results in a &#39;merge conflict&#39;, which you&#39;ll need to resolve manually. A typical workflow for resolving these conflicts is as follows:</p><ol><li><strong>Identify the Conflict</strong>: Git will mark the conflicting areas in the file.</li><li><strong>Choose the Correct Code</strong>: Decide which changes to keep—yours, theirs, or a combination.</li><li><strong>Edit the File</strong>: Remove the conflict markers and make the necessary edits.</li><li><strong>Commit the Resolution</strong>: After resolving the conflicts, commit the changes to complete the merge.</li></ol><p>Generally, you&#39;re unlikely to run into many merge conflicts while coding in the Bloom Lab.</p><h3 id="issues-and-discussions" tabindex="-1">Issues and Discussions <a class="header-anchor" href="#issues-and-discussions" aria-label="Permalink to &quot;Issues and Discussions&quot;">​</a></h3><p>Another valuable feature of GitHub is the ability to open &#39;Issues&#39; on repository. Issues should be used for the following things:</p><ol><li><strong>Suggesting Features</strong>: Outline a new feature you want to add to a project.</li><li><strong>Reporting Bugs</strong>: Highlight an issue with a project&#39;s code.</li><li><strong>Asking Questions</strong>: Seek clarification on how to use run code. This is something you might have to do if you&#39;re using someone else&#39;s code.</li></ol><p>The best practices for opening Issues is to be as descriptive as possible, use labels to categorize issues, and reference related Issues or pull requests. Another important thing to note is that you should <strong>not</strong> use Slack for code-related discussions. Unlike Slack messages, Issues on GitHub are persistent, organized, and easy to keep track of.</p>',43);function p(o,d,g,m,y,b){return n(),r("div",null,[e("h1",c,[a(i(o.$frontmatter.title)+" ",1),u]),h])}const k=t(l,[["render",p]]);export{w as __pageData,k as default};