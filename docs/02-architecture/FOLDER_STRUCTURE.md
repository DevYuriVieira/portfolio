 # Folder Structure

## Overview

This project follows a feature-oriented Angular architecture combined with reusable design system principles.

The folder structure is designed to maintain:

- clear responsibilities;
- scalability;
- low coupling;
- maintainability;
- predictable growth.

The project avoids unnecessary abstraction and creates new layers only when real complexity appears.

---

# Application Structure

src/
│
├── app/
│ │
│ ├── core/
│ │
│ ├── layout/
│ │
│ ├── pages/
│ │
│ ├── shared/
│ │
│ └── ui/
│
├── assets/
│
├── styles/
│
├── main.ts
└── index.html


---

# app/core

## Responsibility

Contains application-level singleton logic.

Examples:

- services;
- guards;
- interceptors;
- global configuration;
- application providers.

Core should contain logic that exists once throughout the application.

Rules:

- no UI components;
- no page-specific logic;
- no duplicated responsibilities.

---

# app/layout

## Responsibility

Contains structural application layouts.

Examples:

- main application shell;
- navigation containers;
- global page structure.

Layouts define where content appears.

They should not contain business logic.

---

# app/pages

## Responsibility

Contains application routes and complete experiences.

Each page represents a user-facing section.

Examples:

pages/
|
├── home/
├── projects/
├── about/
└── contact/


Pages compose UI components but should avoid implementing reusable elements.

---

# app/ui

## Responsibility

Contains reusable visual components.

Examples:

- buttons;
- typography;
- containers;
- sections;
- cards;
- interactive elements.

UI components must be:

- reusable;
- accessible;
- small;
- predictable.

---

# app/shared

## Responsibility

Contains reusable utilities that do not belong exclusively to UI or Core.

Examples:

- pipes;
- directives;
- helper functions;
- common types.

Shared should not become a place for random files.

Every addition must have a clear responsibility.

---

# assets

## Responsibility

Contains static resources.

Examples:

- images;
- icons;
- fonts;
- translations.

Structure:

assets/

├── fonts/
├── images/
└── i18n/


---

# styles

## Responsibility

Contains global styling architecture.

Structure:

styles/

├── abstracts/
│ ├── variables
│ ├── mixins
│ └── motion
│
├── base/
│ ├── reset
│ └── typography
│
└── themes/


Styles should be centralized through tokens and reusable foundations.

---

# Architectural Principles

The structure follows:

- Clean Architecture;
- Separation of concerns;
- Component Driven Development;
- Reusable before Custom;
- Simplicity over Cleverness.

Folders exist because responsibilities exist, not because the project needs more organization.