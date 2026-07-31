 # ARCHITECTURE

**Status:** Draft  
**Version:** 0.1.0  
**Owner:** Yuri Vieira  
**Last Updated:** 2026-07-30

---

# Overview

The project follows a feature-first architecture with clear separation of responsibilities.

The architecture prioritizes scalability, maintainability, and readability over short-term convenience.

Every directory has a single responsibility.

---

# High-Level Structure

```
src/
│
├── app/
│   ├── core/
│   ├── features/
│   ├── shared/
│   ├── layout/
│   ├── ui/
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.ts
│
├── styles/
├── assets/
└── environments/
```

---

# Core

Contains application-wide concerns.

Examples:

- Global services
- Guards
- Interceptors
- Configuration
- Constants
- Injection tokens

Core should never depend on features.

---

# Features

Each feature owns its own components, styles, models and services.

Features must remain isolated.

Features must never import code from another feature.

Shared logic belongs in `shared`.

---

# Shared

Contains reusable building blocks.

Examples:

- UI primitives
- Pipes
- Directives
- Utility services
- Helper functions
- Types

Shared must not contain business logic.

---

# Layout

Contains application shell elements.

Examples:

- Header
- Navigation
- Footer
- Main layout
- Section wrappers

---

# UI

Contains reusable presentation components.

Examples:

- Buttons
- Cards
- Badges
- Chips
- Icons
- Containers

UI components should not know about business rules.

---

# Styling

The project uses SCSS with a layered architecture.

Styles are organized into:

- Abstracts
- Base
- Themes
- Utilities

No component should rely on global styling unless explicitly intended.

---

# Routing

Routes are defined centrally.

Lazy loading should be preferred whenever appropriate.

The routing tree should remain shallow and predictable.

---

# State Management

The project uses Angular Signals as the default reactive model.

External state libraries should not be introduced unless a real need emerges.

---

# Dependency Direction

Allowed:

Core
↑
Shared
↑
Features

Not allowed:

Feature A → Feature B

Features communicate through shared abstractions or routing.

---

# Future Evolution

The architecture should support:

- Additional pages
- Internationalization (i18n)
- Dark mode
- CMS integration
- Backend integration

without requiring structural changes.
