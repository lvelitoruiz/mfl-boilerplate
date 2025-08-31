import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Molecules/TableHeaderCell',
  component: 'table-header-cell',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    sortable: {
      control: 'boolean',
      description: 'Whether the column is sortable',
    },
    sortDirection: {
      control: 'select',
      options: [null, 'asc', 'desc'],
      description: 'Current sort direction',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    width: {
      control: 'text',
      description: 'Column width (CSS value)',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    sortable: false,
    sortDirection: null,
    align: 'left',
  },
  render: (args) => html`
    <table-header-cell
      ?sortable="${args.sortable}"
      sort-direction="${args.sortDirection || ''}"
      align="${args.align}"
      style="${args.width ? `width: ${args.width}` : ''}"
      @sortClick="${(e: CustomEvent) => {
        console.log('Sort clicked');
      }}"
    >
      Column Title
    </table-header-cell>
  `,
};

export const Sortable: Story = {
  args: {
    sortable: true,
    sortDirection: null,
    align: 'left',
  },
  render: (args) => html`
    <table-header-cell
      ?sortable="${args.sortable}"
      sort-direction="${args.sortDirection || ''}"
      align="${args.align}"
    >
      Sortable Column
    </table-header-cell>
  `,
};

export const SortedAscending: Story = {
  args: {
    sortable: true,
    sortDirection: 'asc',
    align: 'left',
  },
  render: (args) => html`
    <table-header-cell
      ?sortable="${args.sortable}"
      sort-direction="${args.sortDirection}"
      align="${args.align}"
    >
      Ascending Sort
    </table-header-cell>
  `,
};

export const SortedDescending: Story = {
  args: {
    sortable: true,
    sortDirection: 'desc',
    align: 'left',
  },
  render: (args) => html`
    <table-header-cell
      ?sortable="${args.sortable}"
      sort-direction="${args.sortDirection}"
      align="${args.align}"
    >
      Descending Sort
    </table-header-cell>
  `,
};

export const CenterAligned: Story = {
  args: {
    sortable: true,
    sortDirection: null,
    align: 'center',
  },
  render: (args) => html`
    <table-header-cell
      ?sortable="${args.sortable}"
      sort-direction="${args.sortDirection || ''}"
      align="${args.align}"
    >
      Centered
    </table-header-cell>
  `,
};

export const TableHeaderRow: Story = {
  render: () => html`
    <div style="display: flex; background: var(--ui-bg-secondary, #fafafa); border-radius: 4px; overflow: hidden;">
      <table-header-cell sortable="true" sort-direction="asc" style="flex: 1;">Order ID</table-header-cell>
      <table-header-cell sortable="true" style="flex: 1;">Service Advisor</table-header-cell>
      <table-header-cell sortable="true" style="flex: 1;">Customer</table-header-cell>
      <table-header-cell sortable="false" align="center" style="flex: 0.8;">Status</table-header-cell>
      <table-header-cell sortable="true" sort-direction="desc" align="center" style="flex: 0.8;">Priority</table-header-cell>
      <table-header-cell sortable="false" align="right" style="width: 60px;">Actions</table-header-cell>
    </div>
  `,
};