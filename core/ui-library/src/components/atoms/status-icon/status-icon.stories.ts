import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/StatusIcon',
  component: 'status-icon',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['active', 'closed', 'pending', 'positive', 'neutral', 'warning', 'critical'],
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
    status: 'positive',
    size: 'md',
  },
  render: (args) => html`
    <status-icon status="${args.status}" size="${args.size}"></status-icon>
  `,
};

export const AllStatuses: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      ${['active', 'closed', 'pending', 'positive', 'neutral', 'warning', 'critical'].map(status => html`
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <status-icon status="${status}" size="md"></status-icon>
          <span style="font-size: 12px; color: #666;">${status}</span>
        </div>
      `)}
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <status-icon status="positive" size="sm"></status-icon>
      <status-icon status="positive" size="md"></status-icon>
      <status-icon status="positive" size="lg"></status-icon>
    </div>
  `,
};