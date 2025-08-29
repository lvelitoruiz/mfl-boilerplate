import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';

@Component({
  tag: 'ui-input',
  styleUrl: 'ui-input.css',
  shadow: true,
})
export class UiInput {
  /**
   * Input type
   */
  @Prop() type: InputType = 'text';

  /**
   * Input value
   */
  @Prop({ mutable: true }) value: string = '';

  /**
   * Placeholder text
   */
  @Prop() placeholder: string = '';

  /**
   * Disabled state
   */
  @Prop() disabled: boolean = false;

  /**
   * Required field
   */
  @Prop() required: boolean = false;

  /**
   * Input name
   */
  @Prop() name: string = '';

  /**
   * Input ID
   */
  @Prop() inputId: string = '';

  /**
   * Error state
   */
  @Prop() error: boolean = false;

  /**
   * Error message
   */
  @Prop() errorMessage: string = '';

  /**
   * Label text
   */
  @Prop() label: string = '';

  /**
   * Input change event
   */
  @Event() uiInput: EventEmitter<string>;

  /**
   * Input blur event
   */
  @Event() uiBlur: EventEmitter<void>;

  /**
   * Input focus event
   */
  @Event() uiFocus: EventEmitter<void>;

  private handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.uiInput.emit(this.value);
  };

  private handleBlur = () => {
    this.uiBlur.emit();
  };

  private handleFocus = () => {
    this.uiFocus.emit();
  };

  render() {
    const inputClasses = `input ${this.error ? 'input-error' : ''}`;
    const errorId = this.error && this.errorMessage ? `${this.inputId}-error` : undefined;
    
    return (
      <div class="input-container">
        {this.label && (
          <label class="input-label" htmlFor={this.inputId}>
            {this.label}
            {this.required && <span class="required" aria-label="required">*</span>}
          </label>
        )}
        <input
          id={this.inputId}
          type={this.type}
          name={this.name}
          class={inputClasses}
          value={this.value}
          placeholder={this.placeholder}
          disabled={this.disabled}
          required={this.required}
          aria-invalid={this.error}
          aria-required={this.required}
          aria-describedby={errorId}
          onInput={this.handleInput}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
        />
        {this.error && this.errorMessage && (
          <span id={errorId} class="error-message" role="alert" aria-live="polite">
            {this.errorMessage}
          </span>
        )}
      </div>
    );
  }
}