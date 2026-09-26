---
name: "Using AI Responsibly as a Developer"
date: "09-26-2026"
description: "Four rules I follow to get real value from AI without letting my own skills stagnate."
tags: ["Software"]
status: "published"
duration: "5 mins"
---

## The Point

I believe AI is very useful, but the way you use it is important. My rules:

1. Read through the majority of what it's doing, so you know what decisions are being made.
2. Use AI when you understand the problem and the domain of what you're implementing.
3. Use AI when you don't care to learn about something and don't plan on it.
4. Use AI when you are learning.

## Context

Over the last few years, my opinions on AI have changed a good amount. At one point I was very resistant to it. Then I eventually came to the idea that there was no reason to do anything other than use AI for software.

Now, like any opinion that forms as you gain experience, mine has balanced out. I believe you should use AI, but there are constraints you must self-impose in order to make responsible decisions around it and still build your skill set.

## What I learned

As I've used AI more, I've found it very useful, but there are some notions I haven't been able to ignore. Depending on how you use it, AI is often given context on what's happening, then handed the keys to the kingdom (or the walled garden, if you're containerizing) and left to do what it wants based on the plan it produces.

This can go fine, and often does. But what about when it doesn't? What happens when you've built yourself into a corner you don't know enough about to explain what you actually want? What happens when there are issues in the codebase that the AI doesn't see as issues, but you do, and you haven't read the codebase?

In web development, I think this kind of outcome is less likely, because so much of the code-related training data comes from web codebases. But when you get into systems, embedded, game dev, etc., these issues become much more common without good references.

As AI develops, I think these cases will continue to decrease. But when your project manager asks you what the system is doing in scenario X and you tell him, "I'm not sure, AI did it," that can become a massive issue for your livelihood.

What I propose is a slight dialing back, just a bit. Here is a set of rules you can use as a good indicator that you're using AI responsibly.

### First Rule:

Try to read, or at least skim, the changes and additions AI is making in your codebase. This will slow you down a bit, but knowing how your codebase runs will give you better decision-making power for future changes and technical decisions.

It will also let you discuss your codebase and play devil's advocate for why something should or shouldn't be done.

### Second Rule:

When you don't understand the problem you're trying to solve or the domain you're writing in, don't use AI to cover up that lack of understanding. Instead of immediately reaching for AI, especially if this is a skill you care about and want to be knowledgeable in (not to mention competent in as an employee), RTFM (Read The Friendly Manual)!

Go to the docs or some resource about the topic and take some time to understand it. Ideally, if you have the time, do the implementation without AI as a learning opportunity, or build a toy app.

But please, if you want to be a good developer and be known as a competent source of information, don't just let AI do it for you. If you let AI do everything without taking the time to learn, you will become dependent and you will stagnate. Understanding comes with effort and active recall of what you learn.

### Third Rule:

The third rule directly opposes the second rule in some ways. Say you don't want to learn XML, and you know you won't be using it again, or at least not frequently. That can be another good use case.

If you know for certain you won't take the time to learn X, you don't want to learn X, and there's minuscule benefit to learning X, then don't waste the time and let AI do X.

The caveat is that you need to be careful here and make sure this isn't detrimental to what you're doing. If X comes up a lot, it's likely important to your work, and you should spend at least some time understanding what you're using.

### Fourth Rule:

In my experience, AI can be very useful for learning, and I use it often for this. But the key to making it work is having an actual resource as the backbone of your learning.

AI hallucinations have gone down dramatically since we first saw LLMs, but they still happen, and AI will often say things confidently regardless of whether they're correct (again, this is getting better).

The way I personally like to use AI for this is to read through material from a resource, and then, when something isn't clicking or I want to talk it through with someone (or something), have a conversation about it with an LLM. The goal is for the LLM to either reword the content in a way that clicks with your brain, or confirm that your understanding is correct.

But it all stems from having a trusted source of information as your backbone.

## Close

AI has become a regular part of how I work, and I'll keep using it often, but only when it's appropriate. Please be responsible in your usage.

The pressure from companies and those around you will increase, but developing your own skills and intuition is very important if you want to be successful. And knowing how something is built tells you how best to direct its further development.

Whether you agree or disagree with me, I hope my points at least gave you something to think about. Thank you for taking the time to read or skim through this. If you're interested in hearing more of my opinions or learnings in the future, please come back to my small nook within the vastness of the internet.
