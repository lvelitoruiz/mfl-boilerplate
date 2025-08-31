import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Organisms/TableRow',
  component: 'table-row',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    selectable: { control: 'boolean' },
    selected: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

const sampleRowData = {
  id: '1',
  orderId: 'IOPU12345',
  orderStatus: 'open' as const,
  orderDate: 'Nov 19, 2022',
  orderTime: '03:52 PM',
  serviceAdvisor: { id: 'sa1', name: 'Ronald Richards' },
  technician: { id: 't1', name: 'Shannon Rode' },
  customer: { id: 'c1', name: 'Kathryn Murphy' },
  contactInfo: { type: 'email' as const, value: 'georgia.young@example.com' },
  media: { status: 'sent' as const, label: 'Sent' },
  inspections: { status: 'none' as const, label: 'None' },
  estimates: { status: 'draft' as const, label: 'Draft' },
  payments: { status: 'draft' as const, label: 'Draft' }
};

const sampleRowData2 = {
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
};

export const Default: Story = {
  args: {
    selectable: false,
    selected: false,
  },
  render: (args) => {
    setTimeout(() => {
      const element = document.querySelector('table-row');
      if (element) {
        (element as any).data = sampleRowData;
        (element as any).selectable = args.selectable;
        (element as any).selected = args.selected;
      }
    }, 0);

    return html`
      <div style="width: 1539px; overflow-x: auto;">
        <table-row
          .selectable=${args.selectable}
          .selected=${args.selected}
        ></table-row>
      </div>
    `;
  },
};

export const Selectable: Story = {
  args: {
    selectable: true,
    selected: false,
  },
  render: (args) => {
    setTimeout(() => {
      const element = document.querySelector('table-row[data-story="selectable"]');
      if (element) {
        (element as any).data = sampleRowData;
        (element as any).selectable = args.selectable;
        (element as any).selected = args.selected;
      }
    }, 0);

    return html`
      <div style="width: 1539px; overflow-x: auto;">
        <table-row
          data-story="selectable"
          .selectable=${args.selectable}
          .selected=${args.selected}
        ></table-row>
      </div>
    `;
  },
};

export const Selected: Story = {
  args: {
    selectable: true,
    selected: true,
  },
  render: (args) => {
    setTimeout(() => {
      const element = document.querySelector('table-row[data-story="selected"]');
      if (element) {
        (element as any).data = sampleRowData;
        (element as any).selectable = args.selectable;
        (element as any).selected = args.selected;
      }
    }, 0);

    return html`
      <div style="width: 1539px; overflow-x: auto;">
        <table-row
          data-story="selected"
          .selectable=${args.selectable}
          .selected=${args.selected}
        ></table-row>
      </div>
    `;
  },
};

export const WithColoredStatuses: Story = {
  args: {
    selectable: false,
    selected: false,
  },
  render: (args) => {
    setTimeout(() => {
      const element = document.querySelector('table-row[data-story="colored"]');
      if (element) {
        (element as any).data = sampleRowData2;
        (element as any).selectable = args.selectable;
        (element as any).selected = args.selected;
      }
    }, 0);

    return html`
      <div style="width: 1539px; overflow-x: auto;">
        <table-row
          data-story="colored"
          .selectable=${args.selectable}
          .selected=${args.selected}
        ></table-row>
      </div>
    `;
  },
};