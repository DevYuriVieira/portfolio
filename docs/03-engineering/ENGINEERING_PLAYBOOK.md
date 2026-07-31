 # ENGINEERING_PLAYBOOK

**Status:** Draft  
**Version:** 0.1.0  
**Owner:** Yuri Vieira  
**Last Updated:** 2026-07-30

---

# Purpose

This document defines the engineering standards for the project.

Every implementation—whether written by a human or an AI assistant—must follow these rules.

When a conflict exists between implementation and this document, this document takes precedence.

---

# Core Principles

- Build for maintainability.
- Prefer simplicity over clever solutions.
- Performance is a feature.
- Accessibility is mandatory.
- Every dependency must have a clear purpose.
- Every component should have a single responsibility.

---

# TypeScript

## Required

- Enable strict mode.
- Prefer explicit types when they improve readability.
- Use `readonly` whenever possible.
- Prefer `type` for unions and `interface` for object contracts.
- Use enums sparingly.

## Forbidden

- `any`
- `@ts-ignore`
- Dead code
- Unused exports

---

# Angular

## Prefer

- Standalone Components
- Signals
- `computed()`
- `effect()` only when necessary
- `inject()` instead of constructor injection
- OnPush change detection
- Functional providers when appropriate

## Avoid

- Business logic inside components
- God Services
- Deep component trees
- Large template files

---

# Components

Every component should:

- Have one responsibility.
- Be easy to test.
- Be reusable when appropriate.
- Keep logic separated from presentation.

Target:

- Prefer components under 150 lines.
- Split responsibilities before complexity grows.

---

# Styling

- SCSS only.
- Use design tokens.
- Avoid magic numbers.
- Prefer reusable mixins.
- Keep styles close to their responsibility.

---

# Project Structure

- Feature-first architecture.
- Shared code belongs in `shared`.
- Global services belong in `core`.
- Features must not depend on each other directly.

---

# Dependencies

Before adding a dependency, answer:

1. Can Angular already solve this?
2. Is the package actively maintained?
3. Is the added bundle size justified?
4. Does it simplify the project?

If any answer is "no", do not add the dependency.

---

# AI Collaboration

AI assistants should:

- Follow the existing architecture.
- Never introduce new patterns without approval.
- Never refactor unrelated code.
- Explain architectural decisions.
- Prefer small, atomic changes.

---

# Definition of Done

A task is complete only if:

- The project builds successfully.
- No unnecessary code was introduced.
- Naming is consistent.
- The implementation follows this playbook.
- The change is ready for review.
