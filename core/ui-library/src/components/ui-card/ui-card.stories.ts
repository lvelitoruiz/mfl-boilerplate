import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Card',
  component: 'ui-card',
  parameters: {
    docs: {
      description: {
        component: 'A flexible card component that can contain headers, titles, and content.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ui-card>
      <ui-card-header>
        <ui-card-title>Card Title</ui-card-title>
      </ui-card-header>
      <ui-card-content>
        This is the card content. You can put any content here.
      </ui-card-content>
    </ui-card>
  `,
};

export const WithButton: Story = {
  render: () => html`
    <ui-card>
      <ui-card-header>
        <ui-card-title>Project Setup</ui-card-title>
      </ui-card-header>
      <ui-card-content>
        <p style="margin: 0 0 1rem 0;">Get started with our component library in just a few steps.</p>
        <ui-button variant="primary">Get Started</ui-button>
      </ui-card-content>
    </ui-card>
  `,
};

export const SimpleCard: Story = {
  render: () => html`
    <ui-card>
      <ui-card-content>
        <p style="margin: 0;">Simple card with just content, no header or title.</p>
      </ui-card-content>
    </ui-card>
  `,
};

export const MultipleCards: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
      <ui-card>
        <ui-card-header>
          <ui-card-title>Feature 1</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <p style="margin: 0 0 1rem 0;">Description of the first feature.</p>
          <ui-button variant="outline" size="sm">Learn More</ui-button>
        </ui-card-content>
      </ui-card>
      
      <ui-card>
        <ui-card-header>
          <ui-card-title>Feature 2</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <p style="margin: 0 0 1rem 0;">Description of the second feature.</p>
          <ui-button variant="outline" size="sm">Learn More</ui-button>
        </ui-card-content>
      </ui-card>
      
      <ui-card>
        <ui-card-header>
          <ui-card-title>Feature 3</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <p style="margin: 0 0 1rem 0;">Description of the third feature.</p>
          <ui-button variant="outline" size="sm">Learn More</ui-button>
        </ui-card-content>
      </ui-card>
    </div>
  `,
};