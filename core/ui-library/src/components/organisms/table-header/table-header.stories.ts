import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Organisms/TableHeader',
  component: 'table-header',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    sortColumn: { control: 'text' },
    sortDirection: { control: { type: 'select', options: ['asc', 'desc', null] } },
  },
};

export default meta;
type Story = StoryObj;

const sampleColumns = [
  { key: 'roId', title: 'RO ID', icon: 'edit', sortable: true, width: '162px' },
  { key: 'serviceAdvisor', title: 'Service Advisor', icon: 'user', sortable: false, width: '173px' },
  { key: 'technician', title: 'Technician', icon: 'user', sortable: false, width: '173px' },
  { key: 'customer', title: 'Customer', icon: 'user', sortable: true, width: '130px' },
  { key: 'contactInfo', title: 'Contact Info', icon: 'phone', sortable: true, width: '173px' },
  { key: 'media', title: 'Media', icon: 'eye', sortable: false, width: '173px' },
  { key: 'inspections', title: 'Inspections', icon: 'check', sortable: false, width: '173px' },
  { key: 'estimates', title: 'Estimates', icon: 'edit', sortable: false, width: '173px' },
  { key: 'payments', title: 'Payments', icon: 'more', sortable: false, width: '173px' },
];

export const Default: Story = {
  args: {
    sortColumn: '',
    sortDirection: null,
  },
  render: (args) => {
    setTimeout(() => {
      const element = document.querySelector('table-header');
      if (element) {
        (element as any).columns = sampleColumns;
        (element as any).sortColumn = args.sortColumn;
        (element as any).sortDirection = args.sortDirection;
      }
    }, 0);

    return html`
      <table-header
        .sortColumn=${args.sortColumn}
        .sortDirection=${args.sortDirection}
      ></table-header>
    `;
  },
};

export const WithSort: Story = {
  args: {
    sortColumn: 'roId',
    sortDirection: 'asc',
  },
  render: (args) => {
    setTimeout(() => {
      const element = document.querySelector('table-header[data-story="with-sort"]');
      if (element) {
        (element as any).columns = sampleColumns;
        (element as any).sortColumn = args.sortColumn;
        (element as any).sortDirection = args.sortDirection;
      }
    }, 0);

    return html`
      <table-header
        data-story="with-sort"
        .sortColumn=${args.sortColumn}
        .sortDirection=${args.sortDirection}
      ></table-header>
    `;
  },
};