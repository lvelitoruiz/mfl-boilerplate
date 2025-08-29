import { Component, h } from '@stencil/core';

@Component({
  tag: 'ui-card-title',
  styleUrl: 'ui-card.css',
  shadow: false,
})
export class UiCardTitle {
  render() {
    return (
      <h3 class="card-title">
        <slot></slot>
      </h3>
    );
  }
}