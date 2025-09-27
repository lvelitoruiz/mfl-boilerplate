import { Component, Prop, h, Host } from '@stencil/core';

export interface StatusCellProps {
  status: string;
  variant: 'new' | 'viewed' | 'review' | 'sent' | 'published' | 'complete' | 'confirmed' | 'draft' | 'none' | 'closed';
}

@Component({
  tag: 'status-cell',
  styleUrl: 'status-cell.css',
  shadow: false,
})
export class StatusCell {
  @Prop() status: string = '';
  @Prop() variant: StatusCellProps['variant'] = 'none';

  render() {
    return (
      <Host class="status-cell">
        <div class="status-cell__content">
          <status-badge variant={this.variant} size="sm">
            {this.status}
          </status-badge>
        </div>
      </Host>
    );
  }
}