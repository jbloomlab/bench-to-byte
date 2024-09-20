import{_ as o,c as a,m as e,a as r,t as i,V as n,o as s}from"./chunks/framework.rMwTSdrC.js";const _=JSON.parse('{"title":"Section 2: Organizing your projects","description":"","frontmatter":{"layout":"doc","title":"Section 2: Organizing your projects","sidebar":true,"aside":true},"headers":[],"relativePath":"sections/organizing-your-projects/index.md","filePath":"sections/organizing-your-projects/index.md"}'),l={name:"sections/organizing-your-projects/index.md"},h={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=n('<p>Organization matters in programming. Your goal should be that someone who <em>isn&#39;t you</em> can open your project directory and understand <strong>where</strong> things are, <strong>what</strong> things are, and <strong>why</strong> things are. Ideally, you want to front-load the organizational work for a new project. If you&#39;ve ever done any significant reorganization of a mature project, you&#39;ll know how much of a headache that can be.</p><p>Below, I&#39;ll go through some high-level organizational principles that you should follow. There isn&#39;t one <em>right</em> way to do things, but there sure are a lot of <em>wrong</em> ways.</p><h2 id="creating-a-project" tabindex="-1">Creating a project <a class="header-anchor" href="#creating-a-project" aria-label="Permalink to &quot;Creating a project&quot;">​</a></h2><p>All of the code for a single <em>project</em> belongs in one directory. You should <strong>not</strong> split code for a single project among multiple distinct directories. Everything should be housed under one roof. But what is a <em>project</em>?</p><p>Imagine that you&#39;re researching the function of your favorite protein. You&#39;re probably taking advantage of a variety of assays and tools, each of which is analyzed in a particular fashion. It could be tempting to split each of these analyses into separate directories housed in different locations in your file system, but this is not good practice. Instead, organize them under a single directory.</p><p>Housing all of the analysis files for a project in a single directory has a variety of benefits:</p><ul><li>It simplifies the process of backing up your code and analysis.</li><li>It makes it easy to share the relevant code when it comes time to publish.</li><li>It lets you <a href="/bench-to-byte/sections/tracking-your-code/">track/version all of the analyses</a> in your project with tools like <code>git</code>.</li></ul><p>Generally, a good rule of thumb is a <em>project</em> corresponds to all of the analysis for a single paper. However, there can be exceptions for large papers that involve many distinct and involved computational pipelines. At the end of the day, you have to use your best judgment.</p><p>I&#39;ll use <a href="https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933" target="_blank" rel="noreferrer">this project</a> from <a href="https://jbloomlab.org/" target="_blank" rel="noreferrer">the Bloom Lab</a> as an example in the following sections.</p><h2 id="naming-a-project" tabindex="-1">Naming a project <a class="header-anchor" href="#naming-a-project" aria-label="Permalink to &quot;Naming a project&quot;">​</a></h2><p>Names should be simple and descriptive. The name should communicate the purpose of the project, but it shouldn&#39;t be so long that it&#39;s annoying to type out. Generally, you should ask yourself if the name you&#39;ve chosen is:</p><ul><li><strong>Descriptive</strong></li><li><strong>Readable</strong></li><li><strong>Succinct</strong></li><li><strong>Consistent</strong></li></ul><p>Take <a href="https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933" target="_blank" rel="noreferrer">this project</a> as an example. <a href="https://jbloomlab.org/people/bernadeta-dadonaite.html" target="_blank" rel="noreferrer">Bernadeta Dadonaite</a> from the Bloom Lab performed deep mutational scanning on the SARS-CoV-2 Delta variant Spike protein to identify mutations that escape neutralization by the therapeutic antibody REGN10933. All of the code for this analysis is located in <a href="https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933" target="_blank" rel="noreferrer">a directory called &#39;SARS-CoV-2_Delta_spike_DMS_REGN10933&#39;</a>. The name clearly describes the project without being overly wordy. It also distinguishes this project from <a href="https://github.com/dms-vep" target="_blank" rel="noreferrer">similar ones</a> while adhering to the same naming scheme.</p><h2 id="organizing-a-project" tabindex="-1">Organizing a project <a class="header-anchor" href="#organizing-a-project" aria-label="Permalink to &quot;Organizing a project&quot;">​</a></h2><p>After you&#39;ve decided what your project is and how to name it, you should think about how to organize the files within. There are many correct ways to do this, but there are some general principles that you should try to follow. Below, we&#39;ll cover some of these general principles.</p><p>Project organization should be <strong>consistent</strong>. If you&#39;re working with someone opinionated about project organization, you should do your best to use their approach (or they&#39;ll be upset). Another thing to consider is whether there is an established set of best practices for the type of project you&#39;re working on. For example, a <code>Snakemake</code> pipeline typically adheres to a <a href="https://github.com/snakemake-workflows/" target="_blank" rel="noreferrer">specific organizational structure</a>. By sticking to this, you&#39;ll make it easier to develop your project and easier for others to follow along.</p><p>If you&#39;re working alone and there isn&#39;t a clear template for organizing your project, here are simple set of rules to follow:</p><ol><li><p><strong>ALWAYS write a README</strong>: A &#39;README&#39; is a plain text file––typically written in <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank" rel="noreferrer">markdown</a>––that describes the contents of your project. It should explain the purpose of the project, give credit to the creators, outline the basic organization of the directory, and give details on how to run the analysis. Here&#39;s the <a href="https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933/blob/main/README.md" target="_blank" rel="noreferrer">README</a> for SARS-CoV-2_Delta_spike_DMS_REGN10933.</p></li><li><p><strong>Separate data from code</strong>: Separate the code that&#39;s responsible for the analysis from the data that you&#39;ll be analyzing. I always put data inside a directory called <a href="https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933/tree/main/data" target="_blank" rel="noreferrer"><code>data/</code></a>. The organization of <code>data/</code>&#39;s contents is up to you.</p></li><li><p><strong>Separate results (i.e. derived data) from data</strong>: Your analysis will generate results (like plots and tables) and intermediate files (like alignments). Any files that are derived by your code should be kept separately from your input <code>data/</code>. I&#39;d highly recommend storing your derived files in a directory called <a href="https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933/tree/main/results" target="_blank" rel="noreferrer"><code>results/</code></a>. The organization of <code>results/</code> is up to you.</p></li><li><p><strong>Choose clear, explicit, and consistent names</strong>: For files and subdirectories, follow the <a href="#naming-a-project">naming advice described above</a>.</p></li><li><p><strong>Avoid over-nesting</strong>: You can organize files and directories to a point where you have to dig through dozens of layers before you even find what you&#39;re looking for. When in doubt, flatten it out.</p></li></ol><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>There are many reasonable ways to organize an analysis or project. However, the principles described above hopefully provide a general road map.</p>',20);function p(t,g,u,m,f,y){return s(),a("div",null,[e("h1",h,[r(i(t.$frontmatter.title)+" ",1),c]),d])}const w=o(l,[["render",p]]);export{_ as __pageData,w as default};