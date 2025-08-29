import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-card',
  styleUrl: 'ui-card.css',
  shadow: true,
})
export class UiCard {
  /**
   * ARIA label for the card
   */
  @Prop() ariaLabel: string;

  /**
   * ARIA labelledby reference
   */
  @Prop() ariaLabelledby: string;

  render() {
    return (
      <div 
        class="card"
        role="region"
        aria-label={this.ariaLabel}
        aria-labelledby={this.ariaLabelledby}
      >
        <slot></slot>
      </div>
    );
  }
}