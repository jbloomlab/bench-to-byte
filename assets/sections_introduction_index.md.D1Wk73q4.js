import{_ as t,c as a,m as e,a as r,t as i,V as n,o as s}from"./chunks/framework.rMwTSdrC.js";const w=JSON.parse('{"title":"Introduction","description":"","frontmatter":{"layout":"doc","title":"Introduction","sidebar":true,"aside":true},"headers":[],"relativePath":"sections/introduction/index.md","filePath":"sections/introduction/index.md"}'),l={name:"sections/introduction/index.md"},c={id:"frontmatter-title",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),u=n('<p>I made this guide for biologists with moderate programming experience who want to improve the way they work. This guide is <em>not</em> intended to teach you a particular coding language (<a href="#learning-to-program">here&#39;s a quick aside about that</a>). Instead, you&#39;ll learn how to organize your projects, use remote resources, create reproducible software environments, and build computational pipelines. My goal is that you not only learn the <em>how</em> but also the <em>why</em> behind each practice.</p><div class="tip custom-block"><p class="custom-block-title">A Quick Note</p><p>This guide was made with members of the <a href="https://jbloomlab.org/" target="_blank" rel="noreferrer">Bloom lab</a> in mind. In the future, I might expand this resource to apply to a more general audience.</p></div><h2 id="outline" tabindex="-1">Outline <a class="header-anchor" href="#outline" aria-label="Permalink to &quot;Outline&quot;">​</a></h2><p>Although each section is useful in isolation, you&#39;ll get the most out of this guide if you follow it in order.</p><ol start="0"><li><a href="/bench-to-byte/sections/chatgpt-and-llms/">Coding Smarter with Online Tools</a><blockquote><p>Taking advantage of online resources</p></blockquote></li><li><a href="/bench-to-byte/sections/setting-up-your-ide/">Setting up your IDE</a><blockquote><p>Using VSCode to streamline your coding workflow</p></blockquote></li><li><a href="/bench-to-byte/sections/organizing-your-projects/">Organizing your projects</a><blockquote><p>Creating clearly named, well organized projects</p></blockquote></li><li><a href="/bench-to-byte/sections/using-remote-resources/">Using remote resources</a><blockquote><p>Increasing your computational capabilities with remote resources</p></blockquote></li><li><a href="/bench-to-byte/sections/managing-software-environments/">Managing software environments</a><blockquote><p>Using <code>conda</code> to isolate software environments</p></blockquote></li><li><a href="/bench-to-byte/sections/tracking-your-code/">Tracking your code</a><blockquote><p>Versioning your code with <code>git</code></p></blockquote></li><li><a href="/bench-to-byte/sections/working-collaboratively/">Working collaboratively</a><blockquote><p>Collaborating with <code>GitHub</code></p></blockquote></li><li><a href="/bench-to-byte/sections/creating-workflows-and-pipelines/">Reproducible workflows and pipelines</a><blockquote><p>Building reproducible pipelines with <code>Snakemake</code></p></blockquote></li><li><a href="/bench-to-byte/sections/coding-best-practices/">Coding best practices</a><blockquote><p>Writing clear code</p></blockquote></li></ol><h2 id="learning-to-program" tabindex="-1">Learning to Program <a class="header-anchor" href="#learning-to-program" aria-label="Permalink to &quot;Learning to Program&quot;">​</a></h2><p>Some basic programming knowledge is necessary to get the most out of this guide. Below, I&#39;ll give a quick overview of the programming languages that are widely used by biologists so you can pick the language that best suites your needs. ß Generally, programming languages are either <em>compiled</em>––you write a script and an intermediate software called a compiler transforms it into an executable program––or <em>interpreted</em>––you write a script that can be executed at any point without a compilation step. Compiled languages are fast and easy to run on different operating systems; however, they tend to be more difficult to learn, run, and debug. Interpreted languages are usually not as fast as compiled languages, but they&#39;re much easier to learn. Both types of language have a place in biological programming. Compiled languages are great for writing programs that run quickly on huge amounts of data (like an aligner). Interpreted languages are great for data analysis and plotting. <strong>Most biologists will want to learn an interpreted language</strong>.</p><p>Common <em>compiled</em> programming languages used by biologists are C/C++, Java, and Rust. They&#39;re used to write short-read aligners like <a href="https://github.com/lh3/bwa" target="_blank" rel="noreferrer"><code>BWA</code></a> (C/C++), genome browsers like <a href="https://github.com/igvteam/igv" target="_blank" rel="noreferrer"><code>IGV</code></a> (Java), and tools for single-cell genomics like <a href="https://github.com/10XGenomics/cellranger" target="_blank" rel="noreferrer"><code>cellranger</code></a> (Rust). You&#39;re likely to interact with tools written in a compiled language, but you probably won&#39;t need to write your own.</p><p>Common <em>interpreted</em> languages are Python, R, Javascript, and Perl. Python and R are the most widely used by biologists. Perl <em>was</em> common among biologists, but has fallen out favor. Javascript is the principle programming language of the web and is occasionally used by biologists to build websites and interactive dashboards. <strong>If you&#39;re a biologist who want&#39;s to learn programming, stick to with Python or R</strong>.</p><p>When choosing whether to learn Python or R, consider the following factors:</p><p><strong>1. What are my research needs?</strong></p><p>Python and R share most of the same core features, but they have different strengths. Python is a better general programming language with many useful libraries for biological problems. R is geared towards statistics and data analysis, so programming for these scenarios is more natural. Additionally, R has more common packages for analyzing gene expression and single-cell data. Learn the language with the best set of tools for the type of research you&#39;re doing.</p><p><strong>2. What are people around me using?</strong></p><p>If possible, learn the language that people around you (in your lab or institute) are using. It makes it easier to collaborate and they&#39;ll be a valuable resource while you&#39;re learning.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Learn Python if you&#39;re a member of the <a href="https://jbloomlab.org/" target="_blank" rel="noreferrer">Bloom lab</a>.</p></div><h2 id="suggestions" tabindex="-1">Suggestions <a class="header-anchor" href="#suggestions" aria-label="Permalink to &quot;Suggestions&quot;">​</a></h2><p>If you have any suggestions for topics that aren&#39;t covered in this guide, please suggest them in the corresponding <a href="https://github.com/WillHannon-MCB/bench-to-byte/discussions/1" target="_blank" rel="noreferrer">Discussions thread</a>.</p>',17);function d(o,h,p,m,b,f){return s(),a("div",null,[e("h1",c,[r(i(o.$frontmatter.title)+" ",1),g]),u])}const k=t(l,[["render",d]]);export{w as __pageData,k as default};