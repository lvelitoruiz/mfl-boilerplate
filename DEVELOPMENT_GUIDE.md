# UI Library Ecosystem - Development Guide

## Overview

This is a comprehensive cross-framework UI library ecosystem built with Stencil.js that provides web components compatible with React, Angular, Vue, and vanilla JavaScript. The project includes automated build processes, framework-specific wrappers, CDN distribution, and development tools.

## Architecture

### Core Components
- **Core UI Library** (`/core/ui-library/`): Stencil.js web components
- **Framework Packages** (`/framework-packages/`): Framework-specific wrappers
- **Test Applications** (`/test-apps/`): Development and testing environments
- **CDN Demo** (`/demos/cdn/`): Vanilla JavaScript integration example
- **Storybook**: Component documentation and playground

### Built Components
- `ui-button`: Customizable button component
- `ui-card`: Card container with header, title, and content
- `ui-input`: Form input with validation states
- `my-component`: Example component template

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Python 3 (for CDN demo server)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ui-library-ecosystem
```

2. Install dependencies:
```bash
npm install
```

3. Build and setup the project:
```bash
npm run setup
```

This command builds the core library and copies all necessary files to framework public folders.

## Development Scripts

### Starting All Services
```bash
npm start
```
This starts all development servers in parallel:
- Core UI Library: http://localhost:3333/
- React App: http://localhost:4200/
- Angular App: http://localhost:4201/
- Vue App: http://localhost:4202/
- CDN Demo: http://localhost:8000/

### Individual Services
```bash
# Core Stencil library (with hot reload)
npm run start:core

# React test application
npm run start:react

# Angular test application  
npm run start:angular

# Vue test application
npm run start:vue

# CDN demo (vanilla JS)
npm run start:cdn

# Storybook documentation
npm run start:storybook
```

### Building

```bash
# Build core library only
npm run build

# Build core library + CDN bundle
npm run build:all

# Run tests
npm run test
```

## Project Structure

```
ui-library-ecosystem/
├── core/ui-library/           # Main Stencil library
│   ├── src/
│   │   ├── components/        # Web components
│   │   ├── loader/           # Custom loaders
│   │   └── tokens/           # Design tokens
│   ├── dist/                 # Built components
│   ├── scripts/              # Build automation
│   └── package.json
├── framework-packages/        # Framework wrappers
│   ├── ui-library-react/     # React bindings
│   ├── ui-library-vue/       # Vue bindings
│   └── ui-library-angular/   # Angular bindings
├── test-apps/                # Development apps
│   ├── react-test-new/       # React test app
│   ├── angular-test/         # Angular test app
│   └── vue-test/             # Vue test app
├── demos/cdn/                # CDN distribution demo
└── package.json              # Root package with scripts
```

## Framework Integration

### React Integration
The React wrapper (`/framework-packages/ui-library-react/`) provides:
- Typed React components
- Prop conversion (boolean to string attributes)
- Automatic web component initialization
- Forward refs support

Usage:
```jsx
import { UiButton, UiCard } from 'ui-library/react';

function MyComponent() {
  return (
    <UiCard>
      <UiButton variant="primary">Click me</UiButton>
    </UiCard>
  );
}
```

### Vue Integration
Vue integration uses dynamic script loading for better compatibility:
```vue
<template>
  <ui-card>
    <ui-button variant="primary">Click me</ui-button>
  </ui-card>
</template>
```

### Angular Integration
Angular integration includes:
- Component declarations
- NgModule setup
- TypeScript definitions

```typescript
import { UiLibraryModule } from 'ui-library/angular';

@NgModule({
  imports: [UiLibraryModule]
})
```

### CDN/Vanilla JavaScript
Direct browser usage without build tools:
```html
<script src="ui-library.min.js"></script>
<ui-button variant="primary">Click me</ui-button>
```

## Build Process

### Automated File Management
The build process includes automated scripts that:

1. **Build Stencil Components**: Generates web components and framework outputs
2. **Copy Assets**: Automatically copies CSS/JS files to all framework public folders
3. **Update Loaders**: Maintains custom loaders that won't be overwritten
4. **Generate CDN Bundle**: Creates minified browser-ready bundle

### Custom Loaders
To prevent build issues, custom loaders are used:
- `/src/loader/custom-loader.ts`: TypeScript version
- `/src/loader/custom-loader.js`: JavaScript version for webpack compatibility

These loaders handle:
- Dynamic CSS loading
- Component script injection  
- Framework compatibility

## Storybook Documentation

Access component documentation at http://localhost:6006/ after running:
```bash
npm run start:storybook
```

Storybook provides:
- Interactive component playground
- Component API documentation
- Usage examples
- Design token documentation

## Troubleshooting

### Common Issues

1. **Components not styled**: 
   - Run `npm run setup` to copy CSS files
   - Check browser network tab for missing CSS

2. **Build errors after Stencil updates**:
   - Custom loaders prevent most issues
   - Run `npm run setup` after core library changes

3. **Framework integration issues**:
   - Ensure web components are properly initialized
   - Check browser console for loader errors

### Development Workflow

1. Make changes to core components in `/core/ui-library/src/components/`
2. Stencil will auto-rebuild and copy files to framework apps
3. Framework apps will hot-reload automatically
4. Test changes across all frameworks
5. Update Storybook documentation as needed

### Adding New Components

1. Generate component scaffold:
```bash
cd core/ui-library
npm run generate
```

2. Update exports in `/src/index.ts`
3. Add to framework wrappers if needed
4. Create Storybook story
5. Add component tests

## Deployment

### NPM Package
The library can be published to npm with proper exports for all frameworks:
```bash
npm run build:all
npm publish
```

### CDN Distribution  
The CDN bundle is available at:
- `/dist/cdn/ui-library.min.js` - Production bundle
- `/dist/cdn/ui-library.js` - Development bundle

## Contributing

1. Follow existing code conventions
2. Add tests for new components
3. Update Storybook documentation
4. Test across all framework integrations
5. Run `npm run setup` before committing

## Technology Stack

- **Stencil.js**: Web components compiler
- **NX**: Monorepo management
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling system
- **Rollup**: CDN bundling
- **Storybook**: Documentation
- **Jest**: Testing framework

This ecosystem provides a robust foundation for cross-framework component development with automated workflows and comprehensive testing capabilities.