import { Component, h } from '@stencil/core';

@Component({
  tag: 'ui-card-content',
  styleUrl: 'ui-card.css',
  shadow: false,
})
export class UiCardContent {
  render() {
    return (
      <div class="card-content">
        <slot></slot>
      </div>
    );
  }
}