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

# Component File Organization

Every feature component or page section must follow the same file organization.

```
feature-name/
├── index.ts
├── feature-name.ts
├── feature-name.html
├── feature-name.scss
├── feature-name.spec.ts
├── feature-name.model.ts
├── feature-name.data.ts
└── assets/ (optional)
```

## Responsibilities

### Component (`feature-name.ts`)

Responsible only for presentation logic.

Rules:

- Standalone component
- ChangeDetectionStrategy.OnPush
- Strong typing
- No business logic
- No duplicated content
- Expose readonly data to the template

Example:

```ts
protected readonly projects = PROJECTS;
```

---

### Template (`feature-name.html`)

Responsible only for rendering.

Rules:

- No hardcoded content
- No duplicated strings
- Use Angular control flow (`@if`, `@for`)
- Keep templates declarative
- Consume only component properties

Good:

```html
@for (project of projects; track project.id) {
  ...
}
```

Bad:

```html
<h2>About Me</h2>

<p>
  Lorem ipsum...
</p>
```

---

### Styles (`feature-name.scss`)

Responsible only for styling.

Rules:

- BEM naming
- Mobile First
- Use Design Tokens
- No inline styles
- No duplicated CSS

---

### Model (`feature-name.model.ts`)

Contains only:

- interfaces
- types
- enums

Example:

```ts
export interface Project {
  id: string;
  title: string;
  description: string;
}
```

---

### Data (`feature-name.data.ts`)

Contains all static content.

Example:

```ts
export const PROJECTS: readonly Project[] = [
  ...
];
```

Rules:

- Strongly typed
- Readonly
- No presentation logic
- No Angular imports

---

### Tests (`feature-name.spec.ts`)

Every component must have unit tests covering:

- component creation
- rendering
- accessibility
- expected interactions

---

## Separation of Concerns

Never mix these responsibilities.

| File | Responsibility |
|-------|----------------|
| `.ts` | Logic |
| `.html` | Rendering |
| `.scss` | Styling |
| `.model.ts` | Types |
| `.data.ts` | Static content |
| `.spec.ts` | Tests |

---

## Project Rule

This structure is mandatory for every future Home section and feature.

Examples:

- Hero
- About
- Experience
- Skills
- Projects
- Certifications
- Contact
- Footer

No exceptions unless a documented Architectural Decision Record (ADR) justifies a different approach.

