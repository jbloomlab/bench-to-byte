import{_ as t,c as i,m as e,a,t as o,V as n,o as r}from"./chunks/framework.rMwTSdrC.js";const v=JSON.parse('{"title":"Section 5: Tracking code with Git","description":"","frontmatter":{"layout":"doc","title":"Section 5: Tracking code with Git","sidebar":true,"aside":true},"headers":[],"relativePath":"sections/tracking-your-code/index.md","filePath":"sections/tracking-your-code/index.md"}'),h={name:"sections/tracking-your-code/index.md"},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),c=n(`<p>I use version control for nearly all of the programming I do. It&#39;s a crucial skill for learning to how program that can fall by the wayside in favor of learning a specific programming language. Leaning to program and learning version control should happen side-by-side. But what is &quot;version control?&quot; Version control is more than just saving a file. Here&#39;s a description from the book <a href="https://git-scm.com/book/en/v2" target="_blank" rel="noreferrer">Pro Git</a>:</p><blockquote><p>Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.</p></blockquote><p>By preserving a history of incremental changes over time, you can go back and see what you&#39;ve done, find out when and why something stopped working, make multiple changes to your project in parallel, and more. In this section, I&#39;ll introduce Git, a common tool for version control developed by Linus Torvalds.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://git-scm.com/book/en/v2" target="_blank" rel="noreferrer">This free book</a> is the definitive resource for learning Git. I highly recommend skimming chapters 1-3.</p></div><h2 id="how-does-git-work" tabindex="-1">How does git work? <a class="header-anchor" href="#how-does-git-work" aria-label="Permalink to &quot;How does git work?&quot;">​</a></h2><p>At the core, Git records changes to your files over time. Unlike other systems that store differences between file versions, Git takes snapshots of your entire project each time you make a <em>commit</em>. These snapshots allow you to revisit any point in your project&#39;s history.</p><p>Here&#39;s a high-level overview of how <code>git</code> tracks your files:</p><ol><li><p><strong>Repository Initialization</strong>: When you initialize a Git repository in your project directory using <code>git init</code>, Git starts monitoring the files within that directory.</p></li><li><p><strong>Working Directory and Staging Area</strong>: As you modify files, the changes are reflected in your &#39;working&#39; directory. To prepare changes for a commit, you add them to the staging area using <code>git add</code>. This step lets you decide which changes to include in your next snapshot.</p></li><li><p><strong>Committing Changes</strong>: After staging, you create a commit with <code>git commit</code>. This action records a snapshot of the staged changes and adds it to your project&#39;s history. Each commit is uniquely identified, allowing you to track and revert to specific versions.</p></li><li><p><strong>Local and Remote Repositories</strong>: Git stores your project&#39;s history locally, but, <em>optionally</em>, you can also link your repository to a remote server like GitHub or Bitbucket which enables collaboration, backup, and access from different machines. I&#39;ll talk more about this in the <a href="/bench-to-byte/sections/working-collaboratively/">next section</a>.</p></li></ol><p><img src="https://git-scm.com/book/en/v2/images/areas.png" alt="Working tree"></p><blockquote><p><em>Working tree, staging area, and Git directory taken from <a href="https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F" target="_blank" rel="noreferrer">Pro Git</a></em></p></blockquote><h2 id="basic-git" tabindex="-1">Basic git <a class="header-anchor" href="#basic-git" aria-label="Permalink to &quot;Basic git&quot;">​</a></h2><p>To get started with Git, you&#39;ll need to familiarize yourself with a couple key commands:</p><p><strong>Initialize a Repository</strong>:</p><p>You create a new Git repository by telling Git to start tracking the code in a directory.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-project</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>Or, you can clone an existing Git repository from a remote server to your local machine.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">repository UR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">L</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_project</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>A quick note about cloning a remote repository. There are several methods for doing this, some of which require a little set up, and those will be covered in the <a href="/bench-to-byte/sections/working-collaboratively/">next section</a>.</p></div><p><strong>Check Repository Status</strong>:</p><p>After you&#39;ve made some changes in your directory, you can check what these are using the following command.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span></code></pre></div><p>This command displays the status of your working directory and staging area. It shows what file have been edited, what new files aren&#39;t being tracked, and more.</p><p><strong>Add Changes to Staging Area</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add [file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span></span></code></pre></div><p>Stages specific files for the next commit. Use <code>git add .</code> to stage all changes.</p><p><strong>Commit Changes</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit -m &quot;Your commit message&quot;</span></span></code></pre></div><p>Records a snapshot of the staged changes. The commit message should briefly describe what you&#39;ve done. <a href="https://cbea.ms/git-commit/" target="_blank" rel="noreferrer">It&#39;s important to write a good commit message</a>.</p><p><strong>View Commit History</strong>:</p><p>You can see a log of all commits that have been made to a project.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span></code></pre></div><p><strong>Compare Changes</strong>:</p><p>This can be useful, but you&#39;re unlikely to do it much.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span></span></code></pre></div><p>It compares changes between commits, branches, or your working directory and the last commit.</p><p><strong>Push Changes to Remote Repository</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div><p>Uploads your local commits to a remote repository.</p><p><strong>Pull Updates from Remote Repository</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span></span></code></pre></div><p>Fetches and merges updates from a remote repository into your local repository.</p><p>These commands form the backbone of Git operations. Regular use of git status and git log will help you stay informed about your project&#39;s state and history.</p><h3 id="branching-and-merging" tabindex="-1">Branching and Merging <a class="header-anchor" href="#branching-and-merging" aria-label="Permalink to &quot;Branching and Merging&quot;">​</a></h3><p>Branches are a powerful feature in Git that allow you to diverge from the main codebase and work independently on a set of changes. The primary branch is usually called <code>main</code> or sometimes <code>master</code>, and it&#39;s where the stable version of your project resides.</p><p><strong>Why Use Branches?</strong></p><p>Branching your code with Git allows for parallel development of multiple features or fixes simultaneously without interference. While you&#39;re editing the code on a branch, the <code>main</code> branch remains stable, and new code is only merged after it&#39;s ready. Here are some things you might use branches for:</p><ol><li><p><strong>Feature Development</strong>: When adding new features, you can create a branch to isolate your work. This way, the main codebase remains unaffected until the feature is complete and tested.</p></li><li><p><strong>Bug Fixes</strong>: For fixing bugs, especially in a production environment, branches let you address issues without disrupting ongoing development work.</p></li><li><p><strong>Experimentation</strong>: If you&#39;re trying out new ideas or approaches, branches provide a safe space to experiment without the risk of breaking existing code.</p></li></ol><p><strong>See all active branches</strong>:</p><p>If you want to see what branches you have active locally, run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span></span></code></pre></div><p>This will print out the branches you have in your local repo and tell you which branch you&#39;re currently on.</p><p><strong>Switch to a Branch</strong>:</p><p>If you want to switch (or checkout) a different branch, run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout [branch-name]</span></span></code></pre></div><p>This switches your working directory to the specified branch.</p><p><strong>Create <em>and</em> Switch to a New Branch</strong>:</p><p>To make a new branch, run:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout -b [branch-name]</span></span></code></pre></div><p>This is a shortcut that creates a new branch and switches to it immediately.</p><p><strong>Merge a Branch</strong>:</p><p>After you&#39;ve completed work on a branch and ensured it&#39;s stable, you&#39;ll want to merge it back into the main branch. This process integrates your changes and updates the main codebase. First, checkout the branch you want to merge into:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout [target-branch]</span></span></code></pre></div><p>Once you&#39;re in the target branch (for example, <code>main</code>), merge the branch with your changes by running:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge [source-branch]</span></span></code></pre></div><p>This merges the changes in the [source-branch] into [target-branch].</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>While this approach works well for merging branches locally, in collaborative projects, you&#39;ll typically merge branches using pull requests. I&#39;ll cover this in more detail in the <a href="/bench-to-byte/sections/working-collaboratively/">next section</a>.</p></div>`,66);function d(s,g,u,k,m,y){return r(),i("div",null,[e("h1",l,[a(o(s.$frontmatter.title)+" ",1),p]),c])}const f=t(h,[["render",d]]);export{v as __pageData,f as default};