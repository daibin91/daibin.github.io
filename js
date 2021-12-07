<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>闭包 | 代斌</title>
        <meta name="generator" content="VuePress 1.5.0" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="icon" href="/favicon.ico">
    <link rel="manifest" href="/manifest.json"> <meta name="description" content="Just playing around">
    <meta name="theme-color" content="#ffffff">
    <meta name="google-site-verification" content="2HbRdfetPyTdZ73NERxa1mq_65meYLezC0thi7EHaJ4"> <link rel="preload" href="/assets/css/0.styles.e87b5953.css" as="style"><link rel="preload" href="/assets/js/app.75dbb63e.js" as="script"><link rel="preload" href="/assets/js/2.78ce7e5f.js" as="script"><link rel="preload" href="/assets/js/7.b5d60087.js" as="script"><link rel="prefetch" href="/assets/js/10.5b535822.js"><link rel="prefetch" href="/assets/js/11.d9d866ed.js"><link rel="prefetch" href="/assets/js/12.e44ad8a8.js"><link rel="prefetch" href="/assets/js/13.ea3e27fe.js"><link rel="prefetch" href="/assets/js/14.a64c229b.js"><link rel="prefetch" href="/assets/js/15.99f7949e.js"><link rel="prefetch" href="/assets/js/16.8f9a582f.js"><link rel="prefetch" href="/assets/js/17.650cbd5c.js"><link rel="prefetch" href="/assets/js/18.fe51eb67.js"><link rel="prefetch" href="/assets/js/19.b57dc756.js"><link rel="prefetch" href="/assets/js/20.bc2249cc.js"><link rel="prefetch" href="/assets/js/21.2478c743.js"><link rel="prefetch" href="/assets/js/22.70e99f95.js"><link rel="prefetch" href="/assets/js/23.58c0ffdb.js"><link rel="prefetch" href="/assets/js/24.4d716837.js"><link rel="prefetch" href="/assets/js/25.99e79def.js"><link rel="prefetch" href="/assets/js/26.52af3c3c.js"><link rel="prefetch" href="/assets/js/27.e625921f.js"><link rel="prefetch" href="/assets/js/28.3b7e6f0b.js"><link rel="prefetch" href="/assets/js/29.0c61ae57.js"><link rel="prefetch" href="/assets/js/3.e8332978.js"><link rel="prefetch" href="/assets/js/30.5369343d.js"><link rel="prefetch" href="/assets/js/4.fa7586c2.js"><link rel="prefetch" href="/assets/js/5.f629a31d.js"><link rel="prefetch" href="/assets/js/6.3bc7418b.js"><link rel="prefetch" href="/assets/js/8.286cc931.js"><link rel="prefetch" href="/assets/js/9.fb57e46e.js"> <link rel="stylesheet" href="/assets/css/0.styles.e87b5953.css">
    </head>
    <body>
        <div id="app" data-server-rendered="true"><div class="theme-container no-sidebar"><header class="navbar"><div class="sidebar-button"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" class="icon"><path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg></div> <a href="/" class="home-link router-link-active"><!----> <span class="site-name">代斌</span></a> <div class="links"><div class="search-box"><input aria-label="Search" autocomplete="off" spellcheck="false" value=""> <!----></div> <nav class="nav-links can-hide"><div class="nav-item"><a href="/" class="nav-link">
  首页
</a></div><div class="nav-item"><a href="/tools/" class="nav-link">
  工具
</a></div><div class="nav-item"><a href="/leetcode/" class="nav-link">
  Leetcode
</a></div> <a href="https://github.com/daibin91/blog" target="_blank" rel="noopener noreferrer" class="repo-link">
    GitHub
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></nav></div></header> <div class="sidebar-mask"></div> <aside class="sidebar"><nav class="nav-links"><div class="nav-item"><a href="/" class="nav-link">
  首页
</a></div><div class="nav-item"><a href="/tools/" class="nav-link">
  工具
</a></div><div class="nav-item"><a href="/leetcode/" class="nav-link">
  Leetcode
</a></div> <a href="https://github.com/daibin91/blog" target="_blank" rel="noopener noreferrer" class="repo-link">
    GitHub
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></nav>  <!----> </aside> <main class="page"> <div class="theme-default-content content__default"><h1 id="闭包"><a href="#闭包" class="header-anchor">#</a> 闭包</h1> <blockquote><p>https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8</p></blockquote> <p>The key to remember is that when a function gets declared, it contains a function definition and a closure. The closure is a collection of all the variables in scope at the time of creation of the function.</p> <p>要记住的关键是，在声明一个函数时，它包含一个函数定义和一个闭包。闭包是函数创建时范围内所有变量的集合。</p></div> <footer class="page-edit"><div class="edit-link"><a href="https://github.com/daibin91/blog/edit/master/js.md" target="_blank" rel="noopener noreferrer">编辑文档！</a> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></div> <div class="last-updated"><span class="prefix">上次更新:</span> <span class="time">2020年6月22日星期一晚上6点11分</span></div></footer> <!----> </main></div><div class="global-ui"><!----></div></div>
        <script src="/assets/js/app.75dbb63e.js" defer></script><script src="/assets/js/2.78ce7e5f.js" defer></script><script src="/assets/js/7.b5d60087.js" defer></script>
    </body>
</html>
