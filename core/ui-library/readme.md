[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# UI Library - Atomic Design Components

> Cross-framework component library built with Stencil.js and Figma design tokens

This UI library implements atomic design principles with exact design tokens extracted from Figma. Components are built as standard Web Components that work in any framework (React, Vue, Angular) or vanilla HTML.

## Features

- **🎨 Figma Design Tokens** - Exact colors, typography, and spacing from design system
- **⚛️ Atomic Design** - Structured component hierarchy (Atoms → Molecules → Organisms)
- **🔄 Cross-Framework** - Works in React, Vue, Angular, and vanilla HTML
- **📚 Storybook** - Interactive component documentation
- **♿ Accessible** - WCAG compliant components
- **🎯 TypeScript** - Full type safety and IntelliSense

## Component Inventory

### 🟢 Atoms (Ready)
- **StatusBadge** - Status indicators with variants (new, viewed, review, complete, closed)
- **Text** - Typography component (h1, h2, h3, body, caption, link) 
- **Icon** - SVG icon library (user, phone, email, chevron-down, edit, more)
- **StatusIcon** - Colored status dots (positive, neutral, warning, critical)
- **Avatar** - User avatars with initials or images

### 🔵 Molecules (In Progress)
- **OrderIdCell** - Order ID with status and metadata
- **DropdownCell** - Selectable dropdown field
- **ContactCell** - Contact display with avatar
- **ContactInfoCell** - Contact details (email/phone)
- **TableHeaderCell** - Sortable column headers

### 🟡 Organisms (Planned)
- **TableRow** - Complete table row with all cells
- **TableHeader** - Complete table header
- **RepairOrdersTable** - Full table component

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run Storybook
npm run storybook

# Build for production
npm run build
```

## Usage

### HTML/Vanilla JavaScript
```html
<!-- Include the component library -->
<script type="module" src="./dist/ui-library/ui-library.esm.js"></script>

<!-- Use components -->
<status-badge variant="new" size="md">New Order</status-badge>
<ui-text variant="h1">Welcome</ui-text>
<ui-avatar initials="JD" size="lg"></ui-avatar>
```

### React
```jsx
import { StatusBadge, UiText, UiAvatar } from 'ui-library/react';

function App() {
  return (
    <div>
      <StatusBadge variant="new" size="md">New Order</StatusBadge>
      <UiText variant="h1">Welcome</UiText>
      <UiAvatar initials="JD" size="lg" />
    </div>
  );
}
```

### Vue
```vue
<template>
  <div>
    <status-badge variant="new" size="md">New Order</status-badge>
    <ui-text variant="h1">Welcome</ui-text>
    <ui-avatar initials="JD" size="lg"></ui-avatar>
  </div>
</template>

<script>
import { applyPolyfills, defineCustomElements } from 'ui-library/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});
</script>
```

## Design Tokens

Components use CSS custom properties for theming:

```css
:root {
  /* Colors from Figma */
  --ui-color-positive: #18811d;
  --ui-color-neutral: #297cd6;
  --ui-color-warning: #ffa000;
  --ui-color-critical: #911a08;
  
  /* Typography */
  --ui-font-family: "Open Sans", sans-serif;
  --ui-font-size-base: 0.75rem;
  --ui-font-weight-regular: 400;
  --ui-font-weight-bold: 700;
}
```

## Development

```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm start

# Run Storybook
npm run storybook

# Build for production
npm run build

# Run tests
npm test
```

## Architecture

Built using atomic design principles:
- **Atoms**: Basic UI elements (buttons, text, icons)
- **Molecules**: Simple combinations of atoms
- **Organisms**: Complex components combining molecules

For detailed component specifications, see [REPAIR_ORDERS_TABLE_ANALYSIS.md](../../REPAIR_ORDERS_TABLE_ANALYSIS.md)

To run the unit tests for the components, run:

```bash
npm test
```

## Component Status

All atom components are implemented with exact Figma design tokens:
- ✅ **StatusBadge** - 10 variants with precise color mapping
- ✅ **Text** - Typography system with Open Sans font family
- ✅ **Icon** - SVG icon library with consistent sizing
- ✅ **StatusIcon** - Color-coded status indicators
- ✅ **Avatar** - User avatars with initials and image support

## Framework Integration

The library is built with Stencil and provides native support for all major frameworks:

### CDN Usage
```html
<script type="module" src="./dist/ui-library/ui-library.esm.js"></script>
```

### React Integration
React wrappers are automatically generated in `./dist/react/`

### Vue Integration  
Vue components are generated in `./dist/vue/`

### Angular Integration
Angular components are generated in `./dist/angular/`

## Contributing

1. Follow atomic design principles
2. Use exact Figma design tokens
3. Maintain accessibility standards
4. Add Storybook stories for new components
5. Include comprehensive tests