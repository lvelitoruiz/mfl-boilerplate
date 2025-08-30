import type { Preview } from '@storybook/web-components';
import '../src/tokens/design-tokens.css';

// Initialize web components when they become available
let componentsInitialized = false;
const initializeComponents = async () => {
  if (typeof window !== 'undefined' && !componentsInitialized) {
    try {
      const { defineCustomElements } = await import('../dist/esm/loader.js');
      await defineCustomElements();
      componentsInitialized = true;
    } catch (error) {
      console.warn('Could not load web components:', error);
    }
  }
};

// Try to initialize immediately
initializeComponents();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      description: {
        component: 'UI Library components built with Stencil.js and Tailwind CSS',
      },
    },
  },
};

export default preview;