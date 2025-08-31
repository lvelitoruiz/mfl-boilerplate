import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Organisms/RepairOrdersTable',
  component: 'repair-orders-table',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    loading: { control: 'boolean' },
    sortColumn: { control: 'text' },
    sortDirection: { control: { type: 'select', options: ['asc', 'desc', null] } },
  },
};

export default meta;
type Story = StoryObj;

const sampleData = [
  {
    id: '1',
    orderId: 'IOPU12345',
    orderStatus: 'open' as const,
    orderDate: 'Nov 19, 2022',
    orderTime: '03:52 PM',
    notificationCount: 7,
    serviceAdvisor: { id: 'sa1', name: 'Ronald Richards' },
    technician: { id: 't1', name: 'Shannon Rode' },
    customer: { id: 'c1', name: 'Kathryn Murphy' },
    contactInfo: { type: 'email' as const, value: 'georgia.young@example.com' },
    media: { status: 'sent' as const, label: 'Sent' },
    inspections: { status: 'none' as const, label: 'None' },
    estimates: { status: 'draft' as const, label: 'Draft' },
    payments: { status: 'draft' as const, label: 'Draft' }
  },
  {
    id: '2',
    orderId: 'ASMR79581',
    orderStatus: 'closed' as const,
    orderDate: 'Dec 10, 2022',
    orderTime: '03:52 PM',
    serviceAdvisor: { id: 'sa2', name: 'Jenny Wilson' },
    technician: { id: 't2', name: 'Kathryn Murphy' },
    customer: { id: 'c2', name: 'Devon Lane' },
    contactInfo: { type: 'phone' as const, value: '(808) 555-0111' },
    media: { status: 'review' as const, label: 'For review' },
    inspections: { status: 'none' as const, label: 'None' },
    estimates: { status: 'confirmed' as const, label: 'Confirmed' },
    payments: { status: 'none' as const, label: 'None' }
  }
];

export const Default: Story = {
  args: {
    loading: false,
    sortColumn: '',
    sortDirection: null,
  },
  render: (args) => {
    setTimeout(() => {
      const element = document.querySelector('repair-orders-table');
      if (element) {
        (element as any).data = sampleData;
        (element as any).loading = args.loading;
        (element as any).sortColumn = args.sortColumn;
        (element as any).sortDirection = args.sortDirection;
      }
    }, 0);

    return html`
      <repair-orders-table
        .loading=${args.loading}
        .sortColumn=${args.sortColumn}
        .sortDirection=${args.sortDirection}
      ></repair-orders-table>
    `;
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    sortColumn: '',
    sortDirection: null,
  },
  render: (args) => {
    setTimeout(() => {
      const element = document.querySelector('repair-orders-table[data-story="loading"]');
      if (element) {
        (element as any).data = [];
        (element as any).loading = args.loading;
        (element as any).sortColumn = args.sortColumn;
        (element as any).sortDirection = args.sortDirection;
      }
    }, 0);

    return html`
      <repair-orders-table
        data-story="loading"
        .loading=${args.loading}
        .sortColumn=${args.sortColumn}
        .sortDirection=${args.sortDirection}
      ></repair-orders-table>
    `;
  },
};

export const Empty: Story = {
  args: {
    loading: false,
    sortColumn: '',
    sortDirection: null,
  },
  render: (args) => {
    setTimeout(() => {
      const element = document.querySelector('repair-orders-table[data-story="empty"]');
      if (element) {
        (element as any).data = [];
        (element as any).loading = args.loading;
        (element as any).sortColumn = args.sortColumn;
        (element as any).sortDirection = args.sortDirection;
      }
    }, 0);

    return html`
      <repair-orders-table
        data-story="empty"
        .loading=${args.loading}
        .sortColumn=${args.sortColumn}
        .sortDirection=${args.sortDirection}
      ></repair-orders-table>
    `;
  },
};

export const WithSort: Story = {
  args: {
    loading: false,
    sortColumn: 'customer',
    sortDirection: 'asc',
  },
  render: (args) => {
    setTimeout(() => {
      const element = document.querySelector('repair-orders-table[data-story="with-sort"]');
      if (element) {
        (element as any).data = sampleData;
        (element as any).loading = args.loading;
        (element as any).sortColumn = args.sortColumn;
        (element as any).sortDirection = args.sortDirection;
      }
    }, 0);

    return html`
      <repair-orders-table
        data-story="with-sort"
        .loading=${args.loading}
        .sortColumn=${args.sortColumn}
        .sortDirection=${args.sortDirection}
      ></repair-orders-table>
    `;
  },
};