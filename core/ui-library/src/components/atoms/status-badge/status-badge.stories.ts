import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/StatusBadge',
  component: 'status-badge',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['new', 'viewed', 'review', 'sent', 'published', 'complete', 'confirmed', 'draft', 'none', 'closed'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'new',
    size: 'md',
  },
  render: (args) => html`
    <status-badge variant="${args.variant}" size="${args.size}">
      New
    </status-badge>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
      <status-badge variant="new">New</status-badge>
      <status-badge variant="viewed">Viewed</status-badge>
      <status-badge variant="review">For Review</status-badge>
      <status-badge variant="sent">Sent</status-badge>
      <status-badge variant="published">Published</status-badge>
      <status-badge variant="complete">Complete</status-badge>
      <status-badge variant="confirmed">Confirmed</status-badge>
      <status-badge variant="draft">Draft</status-badge>
      <status-badge variant="none">None</status-badge>
      <status-badge variant="closed">Closed</status-badge>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <status-badge variant="new" size="sm">Small</status-badge>
      <status-badge variant="new" size="md">Medium</status-badge>
      <status-badge variant="new" size="lg">Large</status-badge>
    </div>
  `,
};

export const AllCombinations: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; max-width: 600px;">
      ${['new', 'viewed', 'review', 'sent', 'published', 'complete', 'confirmed', 'draft', 'none', 'closed'].map(variant => html`
        <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
          <status-badge variant="${variant}" size="sm">${variant}</status-badge>
          <status-badge variant="${variant}" size="md">${variant}</status-badge>
          <status-badge variant="${variant}" size="lg">${variant}</status-badge>
        </div>
      `)}
    </div>
  `,
};