---
name: "150 KB of JavaScript for a Page with None"
date: "09-24-2026"
description: "My About page has no interactive content, yet it still ships 150 KB of JS. What I learned building a static site with Next.js, and what I'd use instead."
tags: ["Software"]
status: "published" 
duration: "4min" 
---

## The point

I built my mostly static personal website using NextJS for learning purposes. I concluded that for any site that is not highly dynamic you are likely better off using something with Island Architecture (JS is only injected into specified components), or a Static Site Generator (SSG).

## Context

 For a long time I have put off building a new site. I have been wanting a place that I can post about the things I am working on and my journey towards systems programming, which I have recently decided to start pursuing again. My previous one was dated and didn't reflect my current skill level, nor my personality. So it had to go! 

## What happened

Going into this project, I was a bit uncertain about which skills I wanted to develop while building this site. I always want to be improving, at least in some way, when taking on a project. After looking through a few options, I ultimately decided that the majority of my current skill set lies within the JS/TS/Node ecosystem.

Based on what I have seen in my circles and in job postings, NextJS is considered the default option for many developers and companies when building a new web application. Until this project, I had never used NextJS, so I saw this as a great opportunity to build on and refresh my past React experience and expand into the framework that is the go-to option for a new React project.

## What I learned

While building this project, I was surprised by how easily my past React knowledge and experience came back to me as I was writing NextJS code. NextJS does a fantastic job of maintaining the feel of writing a React codebase with good opinions, while taking full advantage of server components (which I have heard can be a pain to work with outside of NextJS).

I really enjoyed how NextJS structures projects. The layout/page/component hierarchy fits very naturally with how I built React applications in the past and makes isolating client components a breeze. The ability to offload HTML generation to the server in such a simple way is a massive win for the React ecosystem.

As I have matured development-wise, I have progressively come to believe that we should only ship to the client what is explicitly necessary for end-user functionality; everything else should reside on the server. I was upset to find that regardless of how things are configured, you will always ship the React runtime, which means your payload will always be much larger than it needs to be. 

On my About page, the only interactive element is a small copy-to-clipboard button, yet the browser still downloads about 150 KB of JavaScript, and most of it is React. But I suppose if that is a problem, your application is likely not dynamic enough to justify React/NextJS, and you should use something different.

Regarding routing, I didn't take full advantage of the natural fit of grouping functionality by route segment. In my implementation, I primarily used a top-level src folder to contain all my components and scripts. In hindsight, I wish I had grouped files into their specific route segment folders, and I might change this in the future.

## Close

While I enjoyed my Next experience and see why it is becoming the default framework to reach for, I think there are definitely things you need to think about before making it your choice.

If your web application is highly dynamic, I would reach for it. If it needs some JS but is not highly dynamic, I would opt for something like Astro with true island architecture (JS only in specific sections of the page). If the site doesn't need any JS, I would pick a static site generator (SSG) like Hugo.

Going into this project, I knew there would be some slight performance trade-offs compared to Astro or an SSG, but I decided it was worth it to learn such a prevalent technology. I'm happy with my choice, but at some point down the road, I may rewrite the site with something more appropriate for its low dynamic nature.
