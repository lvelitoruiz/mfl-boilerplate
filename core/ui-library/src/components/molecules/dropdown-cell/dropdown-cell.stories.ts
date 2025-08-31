import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Molecules/DropdownCell',
  component: 'dropdown-cell',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'The selected value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown is disabled',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Select an option...',
    disabled: false,
  },
  render: (args) => html`
    <dropdown-cell
      value="${args.value}"
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
      @dropdownChange="${(e: CustomEvent) => {
        console.log('Dropdown changed:', e.detail);
        // Update the component value
        const element = document.querySelector('dropdown-cell');
        if (element) element.value = e.detail;
      }}"
    ></dropdown-cell>
    <script>
      // Set sample options
      setTimeout(() => {
        const dropdown = document.querySelector('dropdown-cell');
        if (dropdown) {
          dropdown.options = [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ];
        }
      }, 100);
    </script>
  `,
};

export const WithSelectedValue: Story = {
  args: {
    value: 'john-smith',
    placeholder: 'Select Service Advisor',
    disabled: false,
  },
  render: (args) => html`
    <dropdown-cell
      value="${args.value}"
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
    ></dropdown-cell>
    <script>
      setTimeout(() => {
        const dropdown = document.querySelector('dropdown-cell');
        if (dropdown) {
          dropdown.options = [
            { value: 'john-smith', label: 'John Smith' },
            { value: 'maria-rodriguez', label: 'Maria Rodriguez' },
            { value: 'david-johnson', label: 'David Johnson' },
          ];
        }
      }, 100);
    </script>
  `,
};

export const Disabled: Story = {
  args: {
    value: 'disabled-option',
    placeholder: 'Cannot change',
    disabled: true,
  },
  render: (args) => html`
    <dropdown-cell
      value="${args.value}"
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
    ></dropdown-cell>
    <script>
      setTimeout(() => {
        const dropdown = document.querySelector('dropdown-cell');
        if (dropdown) {
          dropdown.options = [
            { value: 'disabled-option', label: 'Disabled Option' },
          ];
        }
      }, 100);
    </script>
  `,
};

export const MultipleDropdowns: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 200px;">
      <dropdown-cell value="john-smith" placeholder="Select Service Advisor" id="dropdown1"></dropdown-cell>
      <dropdown-cell value="" placeholder="Select Technician" id="dropdown2"></dropdown-cell>
      <dropdown-cell value="in-progress" placeholder="Select Status" id="dropdown3"></dropdown-cell>
    </div>
    <script>
      setTimeout(() => {
        // Service Advisors
        const dropdown1 = document.getElementById('dropdown1');
        if (dropdown1) {
          dropdown1.options = [
            { value: 'john-smith', label: 'John Smith' },
            { value: 'maria-rodriguez', label: 'Maria Rodriguez' },
            { value: 'david-johnson', label: 'David Johnson' },
          ];
        }
        
        // Technicians
        const dropdown2 = document.getElementById('dropdown2');
        if (dropdown2) {
          dropdown2.options = [
            { value: 'tech-1', label: 'Mike Wilson' },
            { value: 'tech-2', label: 'Sarah Chen' },
            { value: 'tech-3', label: 'Robert Davis' },
          ];
        }
        
        // Status
        const dropdown3 = document.getElementById('dropdown3');
        if (dropdown3) {
          dropdown3.options = [
            { value: 'new', label: 'New' },
            { value: 'in-progress', label: 'In Progress' },
            { value: 'complete', label: 'Complete' },
          ];
        }
      }, 100);
    </script>
  `,
};