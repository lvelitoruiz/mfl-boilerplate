import { Component, Prop, h } from '@stencil/core';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton {
  /**
   * Button variant style
   */
  @Prop() variant: ButtonVariant = 'primary';

  /**
   * Button size
   */
  @Prop() size: ButtonSize = 'md';

  /**
   * Disabled state
   */
  @Prop() disabled: boolean = false;

  /**
   * Loading state
   */
  @Prop() loading: boolean = false;

  /**
   * Button type
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * ARIA label for accessibility
   */
  @Prop() ariaLabel: string;

  /**
   * ARIA described by for additional context
   */
  @Prop() ariaDescribedby: string;

  private getClasses(): string {
    return `btn-${this.variant} btn-${this.size}`;
  }

  render() {
    const classes = this.getClasses();
    
    return (
      <button
        type={this.type}
        class={classes}
        disabled={this.disabled || this.loading}
        aria-label={this.ariaLabel}
        aria-describedby={this.ariaDescribedby}
        aria-disabled={this.disabled || this.loading}
        aria-busy={this.loading}
      >
        {this.loading && (
          <svg
            class="spinner"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="m15.73 12 2.5-2.5a.75.75 0 1 0-1.06-1.06l-2.5 2.5-2.5-2.5a.75.75 0 1 0-1.06 1.06l2.5 2.5-2.5 2.5a.75.75 0 1 0 1.06 1.06l2.5-2.5 2.5 2.5a.75.75 0 1 0 1.06-1.06L15.73 12z"
            ></path>
          </svg>
        )}
        <slot></slot>
      </button>
    );
  }
}