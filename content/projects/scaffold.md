---
name: "Scaffold"
date: "2026-07-14"
description: "A small CLI for generating new projects from my own templates instead of re-copying the same starter files every time I begin something."
tags: ["Software", "Writing", "Testing", "Another"]
status: "active"
type: "CLI Tool"
repoLink: "https://github.com/lorem-ipsum/scaffold"
---

I noticed I was opening an old project just to copy its `tsconfig.json`, its lint config, its folder layout, often enough that it had become a real tax on starting anything new. Scaffold is the tool I built to stop paying it — a CLI that generates a new project from a template I own, instead of a starter repo someone else maintains and I have to keep re-learning.

## Architecture

Scaffold is split into three layers that don't know much about each other, which turned out to matter more than I expected once the template format started getting complicated.

### CLI layer

Parses arguments, resolves the command, and hands off a plain options object to whichever layer needs it. Nothing below this layer knows it's being run from a terminal.

#### Command parsing

Each command is just a function registered under a name — `new`, `add`, `list` — with its own flag schema. No subcommand tree, no nested parser state, since the command set is small enough that a flat lookup is simpler than the alternative.

#### Flag validation

Flags are validated against a schema before the command function ever runs, so a bad flag fails fast with a specific message instead of surfacing three layers deep as a confusing template error.

##### `--dry-run`

The one flag every command respects: it runs the full resolution and rendering pipeline but writes nothing to disk, printing the file tree it would have created instead. I use this more than I expected to — mostly to sanity-check a template edit before trusting it against a real directory.

### Template engine

Takes a resolved template plus a variables object and produces an in-memory file tree. This is the layer I've rewritten the most.

#### Variable substitution

Plain `{{name}}` interpolation in file contents and, less obviously, in file and folder *names* — a template can have a file literally named `{{slug}}.config.ts` and it'll resolve correctly. That turned out to be necessary the first time I wanted a template to generate a route file named after the project.

#### Partial includes

A template can include another template as a partial, which is how the license file and the base lint config stay defined once and get pulled into every template rather than copy-pasted into each one.

###### Circular include guard

The one piece of defensive code in the engine: a set of already-visited partial paths threaded through the recursive resolver, because a template accidentally including itself produced an infinite loop the first time I wrote this without one.

### Config resolution

Merges three sources of variables in a fixed order — template defaults, a global `~/.scaffoldrc`, then CLI flags — so machine-specific values like my GitHub username only ever need to be set once, not repeated per template.

## Commands

### `scaffold new <template> <name>`

The main command. Resolves the named template, prompts for any variables that weren't supplied as flags, renders the tree, and writes it into a new directory named `<name>`.

#### Flags

##### `--template`

Overrides template resolution to point at a local path instead of a registered template name, which is what I use while actively editing a template rather than publishing it first.

##### `--here`

Writes into the current directory instead of creating a new one, for retrofitting scaffold's output onto a project that already exists.

### `scaffold add <partial>`

Runs a single partial against the current directory without going through a full template — the command I added specifically so I could drop the lint config into an old project without regenerating the whole thing around it.

### `scaffold list`

Prints every registered template with its description. Exists almost entirely because I kept forgetting the exact name I'd given a template three months earlier.

## Design decisions

### Why not just use an existing generator

Every generator I tried assumed templates would be shared publicly, which meant fighting its conventions to express something that was only ever going to be used by me, for my own stack, with my own defaults baked in. Scaffold has exactly one user in mind, and that constraint is what kept it small.

### Template format

Plain files with `{{variable}}` placeholders, not a templating language with logic in it. I considered adding conditionals early on and decided against it — a template that needs an `if` is usually two templates that should be separate, and keeping the format dumb kept the engine dumb too.

## What's next

Right now templates live in a flat local directory, which is fine at four templates and won't stay fine much past ten. A minimal registry — even just a manifest file in a git repo I point the CLI at — is the obvious next step once that starts to hurt.
