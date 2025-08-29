# UI Library Ecosystem

A complete cross-framework component library built with Stencil and Tailwind CSS.

## 📁 Project Structure

```
ui-library-ecosystem/
├── core/
│   └── ui-library/                 # Core Stencil web components
├── framework-packages/
│   ├── ui-library-react/          # React wrapper package
│   ├── ui-library-vue/            # Vue wrapper package (coming soon)
│   └── ui-library-angular/        # Angular wrapper package (coming soon)
└── test-apps/
    ├── react-test/               # React test application
    ├── react-test-new/           # React test with wrapper package
    ├── vue-test/                 # Vue test application
    └── angular-test/             # Angular test application
```

## 🚀 Getting Started

### For React Users
```bash
npm install ui-library ui-library-react
```

```tsx
import { UiButton, UiCard } from 'ui-library-react';

<UiButton variant="primary">Click me</UiButton>
```

### For Vue Users
```bash
# Option 1: Clean wrapper package (Recommended)
npm install ui-library ui-library-vue

import { UiButton, UiCard } from 'ui-library-vue';
<UiButton variant="primary">Click me</UiButton>

# Option 2: Direct web components
npm install ui-library

import { defineCustomElements } from 'ui-library/loader'
onMounted(() => defineCustomElements())
<ui-button variant="primary">Click me</ui-button>
```

### For Angular Users
```bash
# Option 1: Clean wrapper package (Recommended)
npm install ui-library ui-library-angular

import { UiLibraryModule } from 'ui-library-angular';
<ui-button variant="primary">Click me</ui-button>

# Option 2: Direct web components
npm install ui-library

// main.ts
import { defineCustomElements } from 'ui-library/loader';
defineCustomElements();
// component: schemas: [CUSTOM_ELEMENTS_SCHEMA]
```

## 🎯 Components Available

- `UiButton` - Button with variants and sizes
- `UiCard` - Card container with header, title, content
- `UiInput` - Input field with validation
- More components coming soon...

## 🔧 Development

Each package can be developed and published independently while sharing the same core web components.