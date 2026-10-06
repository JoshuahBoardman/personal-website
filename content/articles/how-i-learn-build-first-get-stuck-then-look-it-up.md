---
name: "How I Learn: Build First, Get Stuck, Then Look It Up"
date: "10-05-2026"
description: "My process for actually internalizing new topics: a backbone resource, a project slightly beyond my reach, and AI as a tutor instead of a shortcut."
tags: ["learning"]
status: "published"
duration: "11 min"
---

## The point

My learning strategy comes down to picking a well-respected backbone resource and a project slightly beyond my reach, then letting the project tell me what to learn next.

## Context

As a result of not going to college, I have been forced to improve my ability to learn things effectively, which I will say has definitely not been the smoothest path. While I don't claim to have made any prolific discoveries within the field of learning, I have found what works well for me.

Many of the strategies I use, unintentionally and in some cases intentionally, line up with recommended learning patterns. The process I am describing in this post is specifically for the purpose of building your knowledge repository and internalizing learning for future retrieval from your mental toolbox, not just achieving a desired outcome.

That distinction matters more now than ever, since AI makes it easy to get the outcome without ever building the understanding.

## My learning process

This is the general shape of my learning process. The details shift depending on what I'm learning, and the process itself keeps evolving, so I may update this article for large changes.

### 1. Backbone resource (or resources)

Find a resource that will act as the backbone of learning this specific topic. This will be your reference when you get stuck and for building your initial loose framework for mapping out this topic in your mind.

Try your best to find a resource that has high accolades, especially if these are your first steps into a new domain. The further along you are in your progress of understanding a domain, the less relevant this is. But early on, this is crucial for a strong foundation.

For a majority of topics, there will be well-known resources for learning that topic. Investigate what is available and choose one of these.

### 2. Concise topic overview

Read through a brief overview of the topic that you are tackling. Ideally, this overview will be part of the backbone resource that you have chosen. But you want something that is short and broad, something that will cover many aspects of the topic and lightly explain how it all fits together. For software, this will often be your getting-started documentation or something like the Learn X in Y Minutes pages.

You want to be given just enough to have direction to get started working on something, but not enough to really know anything in depth. The backbone resource you chose previously will help you fill in this missing depth.

Sometimes, depending on the complexity of what you are endeavoring to learn, a short introduction may not suffice, and you may need to consume a course or full introductory text to be able to begin. You will have to feel this out with the resources you have available. If you don't know, asking AI about this can be a useful option.

### 3. Choose a project

In my system, a project is the engine that drives the whole process forward. Choosing a project will act as your guiding light as to what you should be learning next.

The project can be a video, article, podcast, software, research paper, hardware, or really any medium that obliges you to comprehend what you are learning to finish.

While I do think a sculpture that articulates fundamental physics would be amazing, it likely is too distant from the subject matter for the project to supplement or guide your learning.

If you feel you are dueling a brick wall at every turn, then you should consider whether or not your project is too complex. You want to struggle some, but still make progress.

I suggest researching project ideas that would fit your skill level via Google, AI, or ideally people you know in the field.

It's very important to remember that you are not just trying to complete the next part; you are trying to understand the subtopic to finish the part and wield it going forward as a tool.

### 4. You got stuck

So now you have gotten stuck, and you're thinking this was a bad idea, that you started building something without understanding the field and it was a huge waste of time. Time to go watch YouTube...

Well, you're wrong. You will get stuck; that is the point. Learning is best accomplished when you struggle. This method bakes the struggle into the process, and as a result, you will learn much more.

Once you get stuck after trying for a little while without looking things up, reference the backbone resource. If the resource you have chosen does not cover the topic you are struggling with, look up an adjacent resource.

This is a form of Just-In-Time (JIT) learning: you are learning what you need just in time to work on a specific task. Do not just go straight to AI here. Try to read the actual text and piece together what it's trying to tell you. If you really can't understand it, then reach for AI.

#### Use AI as a tutor, not a shortcut

When reaching for AI, try to use it to explain what you don't understand in a way that you may better grasp it. You can also use it to discuss what you just learned to make sure it has fully sunk into your grey matter.

As you talk with AI, go back to the resource and check to see if what the AI is saying aligns with what the resource is saying. This may even lead to you understanding what the initial resource is saying, the thing you were just confused about.

#### Additional tips

Once you start understanding, try to think about how it correlates to other aspects of your project and things you have learned. Doing this will help strengthen your mental model. This will help you better reason through future work in this domain.

Take notes as you go. DO NOT COPY EVERYTHING. This is a massive trap! Take notes specifically on key concepts and ideas that emerge as you see how things relate.

As you take these notes, try to rewrite them into your own words. Writing things into your own words forces your brain to perform an exercise similar to translation, which forces you to actually process it instead of just copying it.

### 5. Repeat steps 3 and 4

As you continue to learn, you will primarily be repeating steps 3 and 4. You will try to do something, get stuck, research to understand the ideas, then demolish the block and start building again. You will get stuck again, and so forth.

I can promise this loop will strengthen your grasp on the topic. It won't be fast. In fact, don't try to be fast; try to get excited to go down rabbit holes related to the information, and use those discoveries to make innovations in your project. Try to have fun, and understanding will come.

### 6. Review your previous session

Next time that you start working on the project, take some time and review what you built previously. Think about whether there is something that you could have done better, or if you are happy with how something turned out and why, or if your current understanding matches what was done before.

This will help strengthen the placement in your mind because you must tug on your neural pathways to recall it and orient it based on the previous experience and what you will be doing next.

Every so often, try explaining a concept out loud or writing it down without your notes, then check yourself against the source.

## What this looked like for me

When I started building fat-latto, a Discord bot, it was my first non-trivial backend Node.js project. My backbone resource was the discord.js Guide, with Discord's own developer docs as an adjacent resource whenever the library's reference pages were too thin.

As my topic overview, I read the Node docs on events and the event loop up front (I had already used JS/TS a good amount on the front end, so I was already familiar with the syntax), and left the rest of Node to learn as the bot demanded it.

I got stuck plenty, but one of my biggest surprises was async/await. I'd been using it for a long while, and I technically already knew what it did, but my mental model wasn't fully formed. I went back to the Node docs, then talked it through with AI until the pieces finally connected.

What finally clicked was the connection to the event loop: async/await lets code read like it's synchronous, but every `await` actually hands control back to the event loop. That's what lets the bot keep handling other events, like a new interaction coming in, while it waits on a network request. This project is what finally turned that knowledge into actual understanding.

## Close

I believe, especially during this period of history where we are all injecting AI into our daily lives, it is progressively more vital for us to curate our own frameworks for how we engage with content and learning, to prevent our understanding and growth from atrophying away into complete reliance.

If you are interested in diving deeper into learning, I highly recommend "Make It Stick: The Science of Successful Learning," "Thinking, Fast and Slow," and "So Good They Can't Ignore You." These three books have shaped how I think about learning, and I can't recommend them enough.

Thank you for visiting my nook of the internet. If you ever want to know what I'm working on, please feel free to stop by.
