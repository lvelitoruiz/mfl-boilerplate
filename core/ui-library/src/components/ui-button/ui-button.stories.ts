import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Button',
  component: 'ui-button',
  parameters: {
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'Button style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading state',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
  render: (args) => html`
    <ui-button
      variant="${args.variant}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
    >
      Click me
    </ui-button>
  `,
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
  render: Primary.render,
};

export const Outline: Story = {
  args: {
    ...Primary.args,
    variant: 'outline',
  },
  render: Primary.render,
};

export const Ghost: Story = {
  args: {
    ...Primary.args,
    variant: 'ghost',
  },
  render: Primary.render,
};

export const Destructive: Story = {
  args: {
    ...Primary.args,
    variant: 'destructive',
  },
  render: Primary.render,
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'sm',
  },
  render: Primary.render,
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'lg',
  },
  render: Primary.render,
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
  render: Primary.render,
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
  render: Primary.render,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <ui-button variant="primary">Primary</ui-button>
        <ui-button variant="secondary">Secondary</ui-button>
        <ui-button variant="outline">Outline</ui-button>
        <ui-button variant="ghost">Ghost</ui-button>
        <ui-button variant="destructive">Destructive</ui-button>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <ui-button size="sm">Small</ui-button>
        <ui-button size="md">Medium</ui-button>
        <ui-button size="lg">Large</ui-button>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <ui-button loading="true">Loading</ui-button>
        <ui-button disabled="true">Disabled</ui-button>
      </div>
    </div>
  `,
};