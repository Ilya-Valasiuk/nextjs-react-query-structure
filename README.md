# NextJS React Query Application Folder Structure

Welcome to the folder structure for your NextJS React Query application! Feel free to customize and adapt this structure to fit the unique needs of your project. Remember, there is no one-size-fits-all solution when it comes to organizing your project folders.

---

## Folder Structure Overview

### api

- **common**
  - `types.ts` - generic types based on you API. Example: `PaginatedResponse<T>`.
- **[DomainName]**
  - `types.ts` - types only for this domain
  - `fetchers.ts` - pure JS fetchers for entities
  - `queries.ts` - react query hooks for entities

### app or pages

In the `app` or `pages` folder, define your application routes. Keep components free of logic and focus on loading data and rendering components from `/components/[page-name]/[PageName].tsx`.

### components

- **common** - Includes shared components like Header and Footer.
  - **header**
    - `Header.tsx`
- **[page-name]**
  - **components** - Specific components for `[PageName].tsx`.
    - **component-a**
      - `ComponentA.tsx`
  - `[PageName].tsx` - Utilizes components from `./components` or `src/components/common`.
  - `helpers.ts` - component specific helpers
  - `constants.ts` - component specific constants
  - `types.ts` - component specific types

### constants

Centralize app constants, such as `variables.ts` and `pages.ts`.

### helpers

Project-specific helpers go here.

### hooks

Define custom hooks, e.g., `useClickOutside` or `useDebounce`, for across-the-board use.

### providers

Design providers for the application within this folder.

### styles

- `global.css` - Includes configurations for Tailwind CSS.

### utils

Reusable utilities like date helpers or object utilities belong in this folder. Keep utils free of business logic.

---

Feel free to explore and adapt this structure to align with the needs of your NextJS React Query application. Enjoy coding and happy building! 🚀🌟
