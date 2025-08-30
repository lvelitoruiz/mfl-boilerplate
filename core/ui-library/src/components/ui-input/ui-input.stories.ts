import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Input',
  component: 'ui-input',
  parameters: {
    docs: {
      description: {
        component: 'A customizable input component with various states and types.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    value: {
      control: { type: 'text' },
      description: 'Input value',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the input',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Mark input as required',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Show error state',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    value: '',
    disabled: false,
    required: false,
    error: false,
  },
  render: (args) => html`
    <ui-input
      type="${args.type}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      ?disabled="${args.disabled}"
      ?required="${args.required}"
      ?error="${args.error}"
    ></ui-input>
  `,
};

export const WithValue: Story = {
  args: {
    ...Default.args,
    value: 'Sample text',
  },
  render: Default.render,
};

export const Email: Story = {
  args: {
    ...Default.args,
    type: 'email',
    placeholder: 'Enter your email...',
  },
  render: Default.render,
};

export const Password: Story = {
  args: {
    ...Default.args,
    type: 'password',
    placeholder: 'Enter password...',
  },
  render: Default.render,
};

export const Required: Story = {
  args: {
    ...Default.args,
    placeholder: 'Required field',
    required: true,
  },
  render: Default.render,
};

export const Error: Story = {
  args: {
    ...Default.args,
    placeholder: 'Invalid input',
    error: true,
  },
  render: Default.render,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    placeholder: 'Disabled input',
    disabled: true,
  },
  render: Default.render,
};

export const FormExample: Story = {
  render: () => html`
    <div style="max-width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Name</label>
        <ui-input type="text" placeholder="Your full name" required="true"></ui-input>
      </div>
      
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email</label>
        <ui-input type="email" placeholder="your@email.com" required="true"></ui-input>
      </div>
      
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Password</label>
        <ui-input type="password" placeholder="Enter password" required="true"></ui-input>
      </div>
      
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Phone (Optional)</label>
        <ui-input type="tel" placeholder="+1 (555) 123-4567"></ui-input>
      </div>
      
      <div style="margin-top: 1rem;">
        <ui-button variant="primary">Submit</ui-button>
      </div>
    </div>
  `,
};