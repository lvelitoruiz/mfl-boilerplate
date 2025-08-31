import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Molecules/ContactCell',
  component: 'contact-cell',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'The contact name to display',
    },
    avatar: {
      control: 'text',
      description: 'Optional avatar image URL',
    },
    showAvatar: {
      control: 'boolean',
      description: 'Whether to show the avatar',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'John Smith',
    showAvatar: true,
  },
  render: (args) => html`
    <contact-cell
      name="${args.name}"
      avatar="${args.avatar || ''}"
      show-avatar="${args.showAvatar}"
      @contactClick="${(e: CustomEvent) => {
        console.log('Contact clicked:', e.detail);
      }}"
    ></contact-cell>
  `,
};

export const WithAvatar: Story = {
  args: {
    name: 'Maria Rodriguez',
    showAvatar: true,
  },
  render: (args) => html`
    <contact-cell
      name="${args.name}"
      show-avatar="${args.showAvatar}"
    ></contact-cell>
  `,
};

export const WithoutAvatar: Story = {
  args: {
    name: 'David Johnson',
    showAvatar: false,
  },
  render: (args) => html`
    <contact-cell
      name="${args.name}"
      show-avatar="${args.showAvatar}"
    ></contact-cell>
  `,
};

export const LongName: Story = {
  args: {
    name: 'Alexander Christopher Thompson-Williams III',
    showAvatar: true,
  },
  render: (args) => html`
    <div style="max-width: 200px;">
      <contact-cell
        name="${args.name}"
        show-avatar="${args.showAvatar}"
      ></contact-cell>
    </div>
  `,
};

export const MultipleContacts: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 8px; max-width: 200px;">
      <contact-cell name="John Smith" show-avatar="true"></contact-cell>
      <contact-cell name="Maria Rodriguez" show-avatar="true"></contact-cell>
      <contact-cell name="David Johnson" show-avatar="false"></contact-cell>
      <contact-cell name="Sarah Chen" show-avatar="true"></contact-cell>
      <contact-cell name="Michael Wilson" show-avatar="true"></contact-cell>
    </div>
  `,
};