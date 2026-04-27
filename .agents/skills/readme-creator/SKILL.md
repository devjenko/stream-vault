---
name: readme-creator
description: Generates a detailed, professional README.md file for any software project by scanning the repository's files (package.json, pyproject.toml, Cargo.toml, go.mod, etc.) to understand the project. Use this skill whenever a user asks to create, write, or generate a README, document their project, or add documentation to a repo — even if they say things like "add a readme", "document this project", or "write docs for this". Covers any language or framework.
---

# README Creator

Generate a detailed, professional README.md by scanning the project's files. Write the README directly to the project root as `README.md`. No emojis, ever.

## Step 1: Discover the project

Scan the project directory to understand what you're working with. Look for:

- **Package manifests**: `package.json`, `pyproject.toml`, `setup.py`, `setup.cfg`, `Cargo.toml`, `go.mod`, `composer.json`, `pom.xml`, `build.gradle`, `*.gemspec`, `mix.exs`, `.cabal`
- **Lock files**: confirm the language/runtime ecosystem
- **Entry points**: `main.*`, `index.*`, `app.*`, `server.*`, `cli.*`, `__main__.py`
- **Source structure**: top-level `src/`, `lib/`, `cmd/`, `pkg/` directories
- **Config files**: `.env.example`, `config.*`, `*.yaml`, `*.toml` (outside the manifest)
- **Existing docs**: `docs/`, `CHANGELOG`, `LICENSE`, `CONTRIBUTING.md`
- **CI/CD**: `.github/workflows/`, `Dockerfile`, `docker-compose.yml`

Read the manifest(s) and a handful of source files to understand what the project actually does. Don't skim — read enough to write accurately.

## Step 2: Identify the project

From your scan, determine:

- **What it is**: a library, CLI tool, web app, API, framework, script, etc.
- **What it does**: the core purpose in plain language
- **Who uses it**: end users, developers, other systems
- **How it's invoked**: installed as a package, run directly, called as a library, deployed as a service
- **Key dependencies**: what it builds on top of
- **License**: check for a `LICENSE` file or license field in the manifest

If something is genuinely unclear from the files, make a reasonable inference and note it — don't ask the user unless you're completely stuck.

## Step 3: Write the README

Write directly to `README.md` in the project root. Overwrite if one already exists.

### Structure

Use this exact section order. Omit a section only if it's genuinely not applicable (e.g., no public API means no API Reference section).

```
# [Project Name]

[One-sentence description of what the project does and why it exists.]

## Overview

[2–4 paragraphs explaining the project in depth: what problem it solves, who it's for,
how it works at a high level, and what makes it worth using. Be specific — avoid generic
filler like "this is a powerful tool".]

## Installation

[Step-by-step instructions to get the project installed and ready to run.
Include prerequisites (runtime version, system dependencies).
Use code blocks for all commands.]

## Usage

[How to actually use it. For CLIs: common commands with flags explained.
For libraries: import and call examples. For apps: how to start and what to do.
Show realistic, working examples — not toy snippets.]

## Configuration

[If the project has meaningful configuration (env vars, config files, flags),
document them here. Use a table if there are many options:
| Variable | Default | Description |]

[Omit this section if there's no real configuration to document.]

## API Reference

[For libraries and HTTP APIs: document the public interface.
Functions/methods: signature, parameters, return value, example.
HTTP endpoints: method, path, request/response shape, example.
Keep it accurate — only document what actually exists in the code.]

[Omit this section for CLIs, apps, or projects with no public API.]

## License

[State the license name and link to the LICENSE file, e.g.:
"This project is licensed under the MIT License. See LICENSE for details."
If no license file exists, omit this section rather than guessing.]
```

### Writing standards

- **No emojis.** None. Not in headers, not in lists, not anywhere.
- **No marketing language.** Don't say "blazing fast", "powerful", "seamless", "robust", or similar filler adjectives unless you can back them up with specifics.
- **Be concrete.** Installation commands should be copy-pasteable and correct. Code examples should reflect the actual API, not made-up placeholders.
- **Plain prose.** Write in clear, direct sentences. Short paragraphs. Active voice where possible.
- **Accurate over comprehensive.** If you're not sure about a detail, leave it out rather than guessing wrong.
- **Code blocks.** Use fenced code blocks with the correct language tag for all commands and code examples.

## Step 4: Confirm

After writing the file, tell the user:
- Where the README was written (full path)
- A one-line summary of what the project turned out to be
- Any sections you omitted and why
- Anything you were uncertain about that the user might want to verify
