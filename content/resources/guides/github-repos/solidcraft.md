---
title: "SolidCraft"
excerpt: "A free, open-source 3D CAD app built in Rust. Run it on your desktop or in your browser, or let an AI agent design parts for you through its MCP server."
date: "Nov 26, 2026"
readTime: "2 min"
tags: ["github-repos", "cad", "3d-printing", "open-source"]
featured: false
agentPrompt: "Connect SolidCraft to Claude Code with claude mcp add solidcraft -- solidcraft-cli mcp, then model a simple bracket: https://github.com/tangency-labs/solidcraft"
primaryLabel: "Try it in your browser"
primaryHref: "https://solidcraft.io/app"
postHref: "https://www.instagram.com/lobsang_lama__/"
keyword: "CAD"
---

## What it is

[SolidCraft](https://github.com/tangency-labs/solidcraft) is a parametric 3D CAD app written in Rust. It's open source (Apache 2.0) with about 18,500 stars on GitHub. You sketch shapes, add dimensions and build solids on a feature timeline. Change a dimension and the model rebuilds.

## What you get

- **Sketches and constraints.** Lines, arcs, splines and text, driven by parameters.
- **Real features.** Extrude, revolve, sweep, loft, fillet, chamfer, shell, holes, threads, patterns and mirror.
- **Assemblies and sheet metal.** Joints, motion studies, flanges and flat patterns.
- **Files you need.** STEP, IGES, 3MF, STL, OBJ and glTF, in and out.
- **AI agents.** A built-in MCP server lets an agent drive the app and model parts while you watch.

## How to set it up

- **In your browser:** open [solidcraft.io/app](https://solidcraft.io/app). Nothing to install.
- **On your computer:** download it for Windows, macOS or Linux from [solidcraft.io/download](https://solidcraft.io/download).
- **With Claude Code:** `claude mcp add solidcraft -- solidcraft-cli mcp`, then ask Claude to model a part.

## Before you use it

It's early but usable for simple parts: 75 of 76 reference parts match FreeCAD's numbers. The Windows installer isn't signed yet, so SmartScreen may warn you. Choose More info, then Run anyway.
