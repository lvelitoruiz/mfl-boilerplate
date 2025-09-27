import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Molecules/ContactInfoCell',
  component: 'contact-info-cell',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['email', 'phone', 'text'],
      description: 'The type of contact information',
    },
    value: {
      control: 'text',
      description: 'The contact information value',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the contact info is clickable',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Email: Story = {
  args: {
    type: 'email',
    value: 'john.smith@example.com',
    clickable: true,
  },
  render: (args) => html`
    <contact-info-cell
      type="${args.type}"
      value="${args.value}"
      clickable="${args.clickable}"
      @infoClick="${(e: CustomEvent) => {
        console.log('Contact info clicked:', e.detail);
      }}"
    ></contact-info-cell>
  `,
};

export const Phone: Story = {
  args: {
    type: 'phone',
    value: '+1-555-0123',
    clickable: true,
  },
  render: (args) => html`
    <contact-info-cell
      type="${args.type}"
      value="${args.value}"
      clickable="${args.clickable}"
    ></contact-info-cell>
  `,
};

export const TextInfo: Story = {
  args: {
    type: 'text',
    value: 'Not available',
    clickable: false,
  },
  render: (args) => html`
    <contact-info-cell
      type="${args.type}"
      value="${args.value}"
      clickable="${args.clickable}"
    ></contact-info-cell>
  `,
};

export const AllTypes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 8px; max-width: 200px;">
      <contact-info-cell type="email" value="john@example.com" clickable="true"></contact-info-cell>
      <contact-info-cell type="phone" value="+1-555-0123" clickable="true"></contact-info-cell>
      <contact-info-cell type="text" value="Not available" clickable="false"></contact-info-cell>
    </div>
  `,
};