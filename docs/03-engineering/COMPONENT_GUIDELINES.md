 # Component Guidelines

## Purpose

This document defines rules for creating Angular components in this project.

Components should prioritize:

- clarity;
- reuse;
- accessibility;
- maintainability.

---

# Standalone Components

All components must use Angular standalone architecture.

Benefits:

- simpler dependency management;
- better lazy loading;
- clearer boundaries.

---

# Single Responsibility

A component should have one clear responsibility.

Good:

Button
Container
Heading
ProjectCard

Bad:

MegaPortfolioSectionManagerComponent


Components should not control unrelated behaviors.

---

# Reusable Before Custom

Before creating a new component, ask:

"Can this be generalized?"

Prefer:

Button


instead of:

HeroButton
ProjectButton
ContactButton


when the behavior is the same.

---

# Small APIs

Components should expose intentional APIs.

Avoid:

- excessive inputs;
- raw style controls;
- unnecessary configuration.

Bad:

color="#fff"
fontSize="48px"
margin="20px"

Good:

variant="primary"
size="large"


The design system controls visual decisions.

---

# Accessibility

Every component must consider:

- semantic HTML;
- keyboard navigation;
- focus states;
- screen readers;
- reduced motion preferences.

Accessibility is a default requirement.

---

# TypeScript Rules

Components must:

- use strict typing;
- avoid any;
- define interfaces when needed;
- keep logic readable.

---

# Styling Rules

Prefer:

- SCSS modules;
- design tokens;
- reusable variables.

Avoid:

- duplicated values;
- random magic numbers;
- inline styles.

---

# Avoid Overengineering

Do not create abstractions without a real problem.

Simple code is preferred over clever code.

The best component is the smallest component that solves the problem.

