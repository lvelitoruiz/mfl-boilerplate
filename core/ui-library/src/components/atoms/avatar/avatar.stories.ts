import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/Avatar',
  component: 'ui-avatar',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    initials: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fallback: {
      control: { type: 'select' },
      options: ['initials', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    initials: 'JD',
    size: 'md',
    fallback: 'initials',
  },
  render: (args) => html`
    <ui-avatar 
      src="${args.src}" 
      alt="${args.alt}" 
      initials="${args.initials}"
      size="${args.size}" 
      fallback="${args.fallback}"
    ></ui-avatar>
  `,
};

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    alt: 'John Doe',
    size: 'md',
  },
  render: (args) => html`
    <ui-avatar src="${args.src}" alt="${args.alt}" size="${args.size}"></ui-avatar>
  `,
};

export const WithInitials: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <ui-avatar initials="JD" size="md"></ui-avatar>
      <ui-avatar initials="AB" size="md"></ui-avatar>
      <ui-avatar initials="XY" size="md"></ui-avatar>
    </div>
  `,
};

export const IconFallback: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <ui-avatar fallback="icon" size="md"></ui-avatar>
      <ui-avatar fallback="icon" size="lg"></ui-avatar>
      <ui-avatar fallback="icon" size="xl"></ui-avatar>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <ui-avatar initials="XS" size="xs"></ui-avatar>
      <ui-avatar initials="SM" size="sm"></ui-avatar>
      <ui-avatar initials="MD" size="md"></ui-avatar>
      <ui-avatar initials="LG" size="lg"></ui-avatar>
      <ui-avatar initials="XL" size="xl"></ui-avatar>
    </div>
  `,
};