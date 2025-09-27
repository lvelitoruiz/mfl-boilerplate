import type { Preview } from '@storybook/web-components';
import '../src/tokens/design-tokens.css';

// Load built components directly
const script = document.createElement('script');
script.src = '/dist/ui-library/ui-library.esm.js';
script.type = 'module';
document.head.appendChild(script);

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
    options: {
      storySort: {
        order: ['Atoms', 'Molecules', 'Organisms'],
        method: 'alphabetical',
      },
    },
  },
};

export default preview;