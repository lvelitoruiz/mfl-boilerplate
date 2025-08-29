import { Component, h } from '@stencil/core';

@Component({
  tag: 'ui-card-header',
  styleUrl: 'ui-card.css',
  shadow: false,
})
export class UiCardHeader {
  render() {
    return (
      <div class="card-header">
        <slot></slot>
      </div>
    );
  }
}