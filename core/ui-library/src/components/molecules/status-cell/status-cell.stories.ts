import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Molecules/StatusCell',
  component: 'status-cell',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    status: {
      control: 'text',
      description: 'The status text to display',
    },
    variant: {
      control: 'select',
      options: ['new', 'viewed', 'review', 'sent', 'published', 'complete', 'confirmed', 'draft', 'none', 'closed'],
      description: 'The status badge variant',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    status: 'In Progress',
    variant: 'viewed',
  },
  render: (args) => html`
    <status-cell
      status="${args.status}"
      variant="${args.variant}"
    ></status-cell>
  `,
};

export const NewStatus: Story = {
  args: {
    status: 'New',
    variant: 'new',
  },
  render: (args) => html`
    <status-cell
      status="${args.status}"
      variant="${args.variant}"
    ></status-cell>
  `,
};

export const CompleteStatus: Story = {
  args: {
    status: 'Complete',
    variant: 'complete',
  },
  render: (args) => html`
    <status-cell
      status="${args.status}"
      variant="${args.variant}"
    ></status-cell>
  `,
};

export const ReviewStatus: Story = {
  args: {
    status: 'For Review',
    variant: 'review',
  },
  render: (args) => html`
    <status-cell
      status="${args.status}"
      variant="${args.variant}"
    ></status-cell>
  `,
};

export const ClosedStatus: Story = {
  args: {
    status: 'Closed',
    variant: 'closed',
  },
  render: (args) => html`
    <status-cell
      status="${args.status}"
      variant="${args.variant}"
    ></status-cell>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
      <status-cell status="New" variant="new"></status-cell>
      <status-cell status="Viewed" variant="viewed"></status-cell>
      <status-cell status="Review" variant="review"></status-cell>
      <status-cell status="Sent" variant="sent"></status-cell>
      <status-cell status="Published" variant="published"></status-cell>
      <status-cell status="Complete" variant="complete"></status-cell>
      <status-cell status="Confirmed" variant="confirmed"></status-cell>
      <status-cell status="Draft" variant="draft"></status-cell>
      <status-cell status="None" variant="none"></status-cell>
      <status-cell status="Closed" variant="closed"></status-cell>
    </div>
  `,
};