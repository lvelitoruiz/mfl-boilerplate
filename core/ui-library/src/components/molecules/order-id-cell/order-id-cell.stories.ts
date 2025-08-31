import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Molecules/OrderIdCell',
  component: 'order-id-cell',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    orderId: {
      control: 'text',
      description: 'The order ID to display',
    },
    status: {
      control: 'select',
      options: ['new', 'open', 'closed'],
      description: 'The order status',
    },
    date: {
      control: 'text',
      description: 'The order date',
    },
    time: {
      control: 'text', 
      description: 'The order time',
    },
    notificationCount: {
      control: 'number',
      description: 'Notification badge count (only shown for open status)',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    orderId: 'WO-2024-001',
    status: 'new',
    date: '2024-01-15',
    time: '10:30 AM',
  },
  render: (args) => html`
    <order-id-cell
      order-id="${args.orderId}"
      status="${args.status}"
      date="${args.date}"
      time="${args.time}"
      @orderClick="${(e: CustomEvent) => {
        console.log('Order clicked:', e.detail);
      }}"
    ></order-id-cell>
  `,
};

export const NewOrder: Story = {
  args: {
    orderId: 'WO-2024-123',
    status: 'new',
    date: '2024-01-15',
    time: '09:15 AM',
  },
  render: (args) => html`
    <order-id-cell
      order-id="${args.orderId}"
      status="${args.status}"
      date="${args.date}"
      time="${args.time}"
    ></order-id-cell>
  `,
};

export const OpenOrder: Story = {
  args: {
    orderId: 'WO-2024-456',
    status: 'open',
    date: '2024-01-14',
    time: '02:30 PM',
    notificationCount: 7,
  },
  render: (args) => html`
    <order-id-cell
      order-id="${args.orderId}"
      status="${args.status}"
      date="${args.date}"
      time="${args.time}"
      notification-count="${args.notificationCount}"
    ></order-id-cell>
  `,
};

export const ClosedOrder: Story = {
  args: {
    orderId: 'WO-2024-789',
    status: 'closed',
    date: '2024-01-13',
    time: '04:45 PM',
  },
  render: (args) => html`
    <order-id-cell
      order-id="${args.orderId}"
      status="${args.status}"
      date="${args.date}"
      time="${args.time}"
    ></order-id-cell>
  `,
};

export const MultipleOrders: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
      <order-id-cell
        order-id="WO-2024-001"
        status="new"
        date="2024-01-15"
        time="10:30 AM"
      ></order-id-cell>
      <order-id-cell
        order-id="WO-2024-002"
        status="open"
        date="2024-01-14"
        time="02:15 PM"
        notification-count="7"
      ></order-id-cell>
      <order-id-cell
        order-id="WO-2024-003"
        status="closed"
        date="2024-01-13"
        time="11:45 AM"
      ></order-id-cell>
    </div>
  `,
};