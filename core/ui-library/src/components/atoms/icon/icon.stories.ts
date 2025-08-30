import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/Icon',
  component: 'ui-icon',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['user', 'phone', 'email', 'chevron-down', 'eye', 'edit', 'more', 'check', 'x', 'arrow-up', 'arrow-down'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'user',
    size: 'md',
  },
  render: (args) => html`
    <ui-icon name="${args.name}" size="${args.size}" color="${args.color}"></ui-icon>
  `,
};

export const AllIcons: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; text-align: center;">
      ${['user', 'phone', 'email', 'chevron-down', 'eye', 'edit', 'more', 'check', 'x', 'arrow-up', 'arrow-down'].map(icon => html`
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <ui-icon name="${icon}" size="lg"></ui-icon>
          <span style="font-size: 12px; color: #666;">${icon}</span>
        </div>
      `)}
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <ui-icon name="user" size="xs"></ui-icon>
      <ui-icon name="user" size="sm"></ui-icon>
      <ui-icon name="user" size="md"></ui-icon>
      <ui-icon name="user" size="lg"></ui-icon>
      <ui-icon name="user" size="xl"></ui-icon>
    </div>
  `,
};