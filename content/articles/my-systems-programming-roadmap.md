---
name: "My Systems Programming Roadmap"
date: "09-25-2026"
description: "Why I'm moving from web dev into systems programming, and the ten-step roadmap I'm following to get there, from C fundamentals to a toy kernel, debugger, and game engine."
tags: ["Software"]
status: "published"
duration: "8 mins"
---

## The point

I am working to transition away from web dev into systems programming. To facilitate this, I have built out a general roadmap that I plan on following, along with creating this website so that I can post about my journey.

## Context

I have been in web dev for around 5 years now, with 4 years of professional experience. Progressively, as I have listened to talks from Casey Muratori, Jonathan Blow, Mitchell Hashimoto, and similar people, I have realized that I have a bit of a distaste for how abstracted web development is.

There are genuinely interesting problems to solve in this space, especially surrounding distributed systems. But I can't help feeling like there is a level of encouraged incompetence.

I often see and find myself reaching for libraries instead of writing things myself, while only understanding enough to make the system run. I genuinely believe that you should be reading the code and be able to explain/understand what a library is doing under the hood before slapping it onto a project.

While most of my experience has been within the walled garden of web development, I believe that my goals and personality align much better with systems development. I much prefer to understand things from the ground up and understand how our technology works throughout the whole stack.

When I think about the types of applications that I'm drawn to in isolation, without associating a specific overarching goal, I naturally lean towards operating systems, game engines, debuggers, and developing the groundwork on which software is built.

Problems such as cache hit optimization, effectively managing memory via memory-arena-like structures, and improving systems concurrency through advancements in process scheduling captivate me when I read about them.

So despite the fact that I have put off this transition via the "I'll do it eventually" bug and uncertainties around AI for a couple of years now, I'm finally gonna invest in what I want to be doing.

Going forward, I will be pursuing a career in systems programming, taking the steps to gain the necessary skills via a roadmap that I have built, and posting about my journey on this site.

## The Roadmap

The goal of this roadmap is to shore up any weaknesses that I may currently have while developing the fundamental skills I need to be an effective systems programmer.

Minus the first two steps, I very much want to focus on just writing code. I will have to allocate time to the corresponding resources, but hands on the keyboard is what is going to get these concepts stuck in my mind.

### 01. Get Security+

In my local area, a large amount of the jobs, especially within systems dev, fall under government contracting.

So while this is not directly linked to systems development, I think it's a great opportunity to get back into the flow of studying after taking a bit of a hiatus. It will also shore up any holes in my understanding regarding building secure systems, and it knocks out a required credential on my resume.

### 02. Get LFCS (Linux Foundation Certified System Administrator)

While this is likely not necessary for me, I do use Arch Linux as my daily driver. I want to make sure that there are not things I'm overlooking when administering my machines, along with improving my skills for the future if I ever need to administrate Linux machines professionally.

Ultimately, it is just about being as effective on a Linux machine as possible, since I will literally be doing everything via this OS. I have fallen in love with Linux and its flexibility compared to any other operating system that I have used (Darwin/Windows).

### 03. Lock down C from first principles

This step is where the systems roadmap really begins. My plan is to tackle K&R's The C Programming Language along with Casey Muratori's Performance-Aware Programming.

My plan is to work through these alongside building some small programs that will help me build intuition around C and how it interacts with a machine. A few ideas I have are a small allocator, a simple shell, a basic text editor, or a C server. I'm committing to building at least two of these, but I'm not sure which ones I will actually choose to build yet.

### 04. Grokking Algorithms (Big-O and core patterns)

In the past, I have spent time going through algorithms and data structures and understanding them enough to know not to create cubic-time monstrosities, or to offload time complexity into a hash table. However, I have not taken the time to build the level of intuition that I am happy with.

I really want to clear any hurdles going into CS:APP, and based off my research, Grokking Algorithms gives the most bang for your buck time-wise.

So my plan is to pair this with writing out each algorithm and structure in C, along with reviewing this periodically down the road throughout the roadmap.

### 05. Work through CS:APP and its labs

I have heard many good recommendations for Computer Systems: A Programmer's Perspective in regards to the density of information that it provides, especially from Teach Yourself CS (add link).

So I plan on going through all the labs and material within this book and writing small programs in C that will help solidify the fundamental concepts.

### 06. Work through OSTEP and build a toy kernel

Now that I have acquired a fair understanding of the fundamentals of systems thinking, I'm going to put these skills to work by following Operating Systems: Three Easy Pieces.

I'll implement what I learn from each section, complemented by the OSDev wiki series, to build a minimal kernel that boots, handles interrupts, and manages memory.

### 07. Build a minimal debugger

At this point, I will be utilizing my systems and OS knowledge to build a small debugger based around ptrace on Linux.

I plan on it taking about a month to get through, but the goal is for it to be able to set breakpoints, step through instructions, and inspect registers/memory.

### 08. Go deep on Rust alongside continued C/C++

I have started noticing that more systems roles have started requesting knowledge of Rust. I have also heard talks from various sources saying that it is becoming the default for greenfield systems projects.

I have had some experience with Rust in the past, but outside of building a toy server, I never did much more. So I believe it will be a good idea to have this language in my tool kit to complement my understanding of C: Rust for greenfield, C for legacy and interoperability.

My plan is to re-read The Rust Book and choose a project that interests me at the time to help build up my Rust skills.

You may ask: if I plan on learning Rust ultimately, why not just go straight into Rust? My thought process is that a majority of infrastructure and existing systems projects are written in C or C++. Understanding these deeply will improve my ability to interop with systems and give me more transparency into what's happening under the hood than the borrow checker will. Many resources are also focused around C as opposed to Rust.

During this time, I still want to continue to expand and deepen my C, and maybe some C++, experience.

### 09. Build a toy engine

This is the real final step of the roadmap. My plan is to journey through the first 20–30 episodes of Casey Muratori's "Handmade Hero" as a reference and build a small game engine in C with no external libraries.

This will act as my capstone project, along with allowing me to peek into the world of game development.

Depending on how I am feeling during this time, I may also deviate some and try making commits to a real engine, if I enjoy the act of engine dev.

### 10. Package it as a portfolio and start applying

At this point, I will have had many opportunities to build actual systems software that I can turn into a portfolio as a reference to my skills.

As of writing this, I don't fully know what direction I will go from here, but the plan is to keep building systems software and start applying to systems positions.

## Close

In the end, I am writing this post to hold myself accountable and to a public standard. It's the same reason I publish my principles on my About page.

Now that my site is live, I plan on finishing up a small Discord bot I named Fat-Latto (a weighted lottery voting manager), because I promised a friend I would build it for managing our game nights. Once I wrap up that project, I will be taking on the roadmap that I have laid out.

If you are interested in following my progress in systems development, I will be pseudo-regularly posting here. Ultimately, these posts are for myself, but I thank you for being interested.
