import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

export interface OrderIdCellProps {
  orderId: string;
  status: 'new' | 'open' | 'closed';
  date: string;
  time: string;
  notificationCount?: number;
}

@Component({
  tag: 'order-id-cell',
  styleUrl: 'order-id-cell.css',
  shadow: false,
})
export class OrderIdCell {
  @Prop() orderId: string = '';
  @Prop() status: OrderIdCellProps['status'] = 'open';
  @Prop() date: string = '';
  @Prop() time: string = '';
  @Prop() notificationCount?: number;
  
  @Event() orderClick: EventEmitter<string>;

  private getStatusIconStatus() {
    const statusMap = {
      'new': 'positive',
      'open': 'neutral', 
      'closed': 'critical'
    };
    
    return statusMap[this.status] || 'neutral';
  }

  private getStatusColors() {
    const colorMap = {
      'new': {
        background: 'var(--ui-bg-positive, #e9fbe9)',
        text: 'var(--ui-color-positive, #18811d)'
      },
      'open': {
        background: 'var(--ui-bg-positive, #e9fbe9)',
        text: 'var(--ui-color-positive, #18811d)'
      },
      'closed': {
        background: 'var(--ui-bg-critical, #feeae7)',
        text: 'var(--ui-color-critical, #911a08)'
      }
    };
    
    return colorMap[this.status] || colorMap['open'];
  }

  private shouldShowIcon(): boolean {
    return this.status !== 'closed';
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
    this.orderClick.emit(this.orderId);
  };

  render() {
    const iconStatus = this.getStatusIconStatus();
    const statusText = this.getStatusText();
    const colors = this.getStatusColors();
    const showIcon = this.shouldShowIcon();
    
    const hostClasses = {
      'order-id-cell': true,
      'order-id-cell--clickable': true,
      'order-id-cell--no-icon': !showIcon
    };
    
    return (
      <Host 
        class={hostClasses}
        style={{
          backgroundColor: colors.background
        }}
        onClick={this.handleClick}
      >
        {showIcon && (
          <div class="order-id-cell__left">
            <status-icon 
              status={iconStatus as any}
              size="sm"
            ></status-icon>
            {this.notificationCount && this.notificationCount > 0 && (
              <div style={{
                width: '16px',
                height: '16px',
                backgroundColor: 'var(--ui-color-notification, #f22c0d)',
                color: 'var(--ui-text-notification, #ffffff)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: '600',
                fontFamily: 'Open Sans, sans-serif',
                flexShrink: '0',
                minWidth: '16px',
                minHeight: '16px'
              }}>
                {this.notificationCount > 99 ? '99+' : this.notificationCount}
              </div>
            )}
          </div>
        )}
        
        <div class="order-id-cell__right">
          <div 
            class="order-id-cell__title"
            style={{ color: colors.text }}
          >
            {this.orderId} - {statusText}
          </div>
          <div 
            class="order-id-cell__subtitle"
            style={{ color: colors.text }}
          >
            {this.date}, {this.time}
          </div>
        </div>
      </Host>
    );
  }
}