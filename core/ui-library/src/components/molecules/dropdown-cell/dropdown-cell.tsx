import { Component, Prop, h, Host, State, Event, EventEmitter, Listen } from '@stencil/core';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownCellProps {
  value: string;
  placeholder?: string;
  options?: DropdownOption[];
  disabled?: boolean;
}

@Component({
  tag: 'dropdown-cell',
  styleUrl: 'dropdown-cell.css',
  shadow: false,
})
export class DropdownCell {
  @Prop() value: string = '';
  @Prop() placeholder: string = 'Select...';
  @Prop() options: DropdownOption[] = [];
  @Prop() disabled: boolean = false;

  @State() isOpen: boolean = false;

  @Event() dropdownChange: EventEmitter<string>;

  private dropdownRef?: HTMLElement;

  @Listen('click', { target: 'document' })
  handleDocumentClick(event: Event) {
    if (!this.dropdownRef?.contains(event.target as Node)) {
      this.isOpen = false;
    }
  }

  private toggleDropdown = () => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  };

  private selectOption = (optionValue: string) => {
    this.dropdownChange.emit(optionValue);
    this.isOpen = false;
  };

  private getDisplayValue(): string {
    const selectedOption = this.options.find(option => option.value === this.value);
    return selectedOption ? selectedOption.label : this.value || this.placeholder;
  }

  private renderOption = (option: DropdownOption) => {
    const isSelected = option.value === this.value;
    return (
      <div
        key={option.value}
        class={{
          'dropdown-cell__option': true,
          'dropdown-cell__option--selected': isSelected,
        }}
        onClick={() => this.selectOption(option.value)}
      >
        <ui-text variant="body">{option.label}</ui-text>
      </div>
    );
  };

  render() {
    const hasValue = this.value && this.value !== '';
    const classes = {
      'dropdown-cell': true,
      'dropdown-cell--disabled': this.disabled,
      'dropdown-cell--open': this.isOpen,
      'dropdown-cell--has-value': hasValue,
    };

    return (
      <Host class={classes}>
        <div 
          class="dropdown-cell__content"
          ref={(el) => this.dropdownRef = el}
        >
          <div class="dropdown-cell__trigger" onClick={this.toggleDropdown}>
            <ui-text 
              variant="body"
              color={hasValue ? 'primary' : 'secondary'}
              class="dropdown-cell__value"
              truncate={true}
            >
              {this.getDisplayValue()}
            </ui-text>
            <ui-icon 
              name="chevron-down" 
              size="sm"
              class="dropdown-cell__icon"
            ></ui-icon>
          </div>

          {this.isOpen && (
            <div class="dropdown-cell__dropdown">
              <div class="dropdown-cell__options">
                {this.options.map(this.renderOption)}
              </div>
            </div>
          )}
        </div>
      </Host>
    );
  }
}