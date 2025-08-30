import { Component, Prop, h, Host } from '@stencil/core';

export interface OrderIdCellProps {
  orderId: string;
  status: 'new' | 'open' | 'closed';
  date: string;
  time: string;
  onClick?: (orderId: string) => void;
}

@Component({
  tag: 'order-id-cell',
  styleUrl: 'order-id-cell.css',
  shadow: true,
})
export class OrderIdCell {
  @Prop() orderId: string = '';
  @Prop() status: OrderIdCellProps['status'] = 'open';
  @Prop() date: string = '';
  @Prop() time: string = '';
  @Prop() onClick?: (orderId: string) => void;

  private getStatusIconStatus() {
    const statusMap = {
      'new': 'positive',
      'open': 'neutral', 
      'closed': 'critical'
    };
    
    return statusMap[this.status] || 'neutral';
  }

  private getStatusText(): string {
    const statusText = {
      'new': 'New',
      'open': 'Open',
      'closed': 'Closed'
    };
    
    return statusText[this.status] || 'Open';
  }

  private handleClick = () => {
    if (this.onClick) {
      this.onClick(this.orderId);
    }
  };

  render() {
    const iconStatus = this.getStatusIconStatus();
    const statusText = this.getStatusText();
    
    return (
      <Host 
        class={{
          'order-id-cell': true,
          'order-id-cell--clickable': !!this.onClick,
        }}
        onClick={this.handleClick}
      >
        <div class="order-id-cell__content">
          <div class="order-id-cell__header">
            <status-icon 
              status={iconStatus as any}
              size="sm"
            ></status-icon>
            <ui-text 
              variant="body" 
              weight="semibold"
              class="order-id-cell__id"
            >
              {this.orderId}
            </ui-text>
          </div>
          
          <div class="order-id-cell__meta">
            <ui-text 
              variant="caption" 
              color="secondary"
              class="order-id-cell__status"
            >
              {statusText}
            </ui-text>
            
            <ui-text 
              variant="caption" 
              color="secondary"
              class="order-id-cell__datetime"
            >
              {this.date} {this.time}
            </ui-text>
          </div>
        </div>
      </Host>
    );
  }
}