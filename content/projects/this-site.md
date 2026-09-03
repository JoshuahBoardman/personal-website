---
name: "This Site"
date: "2026-08-01"
description: "The site you're reading right now — Next.js, Tailwind, and a content folder of plain MDX files instead of a database or CMS."
tags: ["Software"]
status: "finished"
type: "Website"
repoLink: "https://github.com/lorem-ipsum/this-site"
---

## Introduction

Most personal sites accumulate more infrastructure than content — a CMS to manage a dozen posts, a database for data that fits comfortably in a folder of text files. This one was built to resist that specifically: articles and projects live as plain `.mdx` files with YAML frontmatter, read straight off disk at build time, no database and nothing to self-host beyond the site itself.

The design started as a mockup and got ported over deliberately slowly — structure and layout first with placeholder content, then a real color system driven entirely by CSS custom properties so light and dark mode are a data-attribute swap rather than two separate stylesheets, then real typography, and only after all of that, real content.

## What it's built on

Next.js's App Router, Tailwind for styling with no config file — v4 configures itself through `@theme` blocks in CSS — and `gray-matter` for frontmatter parsing. No client-side state to speak of; almost everything that can be a server component is one.

## Why "finished" and not "active"

The scaffolding is genuinely done — pages, design system, and now sample content all exist. What's left is wiring the content layer into the page components instead of the lorem-ipsum placeholders they currently render, and that's being done deliberately by hand rather than automated, so it's marked finished as a milestone rather than ongoing development.
