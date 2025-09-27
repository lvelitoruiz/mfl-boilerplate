import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/Text',
  component: 'ui-text',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'body', 'caption', 'link'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'link', 'success', 'warning', 'error'],
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    truncate: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'body',
    color: 'primary',
  },
  render: (args) => html`
    <ui-text 
      variant="${args.variant}" 
      color="${args.color}" 
      weight="${args.weight}"
      ?truncate="${args.truncate}"
    >
      Sample text content
    </ui-text>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <ui-text variant="h1">Heading 1 - Large Title</ui-text>
      <ui-text variant="h2">Heading 2 - Medium Title</ui-text>
      <ui-text variant="h3">Heading 3 - Small Title</ui-text>
      <ui-text variant="body">Body text - Regular paragraph content</ui-text>
      <ui-text variant="caption">Caption - Small helper text</ui-text>
      <ui-text variant="link">Link text - Clickable content</ui-text>
    </div>
  `,
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <ui-text color="primary">Primary color text</ui-text>
      <ui-text color="secondary">Secondary color text</ui-text>
      <ui-text color="link">Link color text</ui-text>
      <ui-text color="success">Success color text</ui-text>
      <ui-text color="warning">Warning color text</ui-text>
      <ui-text color="error">Error color text</ui-text>
    </div>
  `,
};

export const Weights: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <ui-text weight="normal">Normal weight text</ui-text>
      <ui-text weight="medium">Medium weight text</ui-text>
      <ui-text weight="semibold">Semibold weight text</ui-text>
      <ui-text weight="bold">Bold weight text</ui-text>
    </div>
  `,
};

export const Truncation: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px; width: 200px;">
      <ui-text>Normal text that will wrap to multiple lines when it exceeds the container width</ui-text>
      <ui-text truncate>Truncated text that will be cut off with ellipsis when it exceeds the container width</ui-text>
    </div>
  `,
};