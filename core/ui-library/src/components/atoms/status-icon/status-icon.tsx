import { Component, Prop, h, Host } from '@stencil/core';

export interface StatusIconProps {
  status: 'active' | 'closed' | 'pending' | 'positive' | 'neutral' | 'warning' | 'critical';
  size?: 'sm' | 'md' | 'lg';
}

@Component({
  tag: 'status-icon',
  styleUrl: 'status-icon.css',
  shadow: false,
})
export class StatusIcon {
  @Prop() status: StatusIconProps['status'] = 'pending';
  @Prop() size: StatusIconProps['size'] = 'md';

  private getStatusColor(): string {
    const colorMap = {
      'active': 'positive',
      'positive': 'positive', 
      'closed': 'critical',
      'critical': 'critical',
      'pending': 'warning',
      'warning': 'warning',
      'neutral': 'neutral'
    };
    
    return colorMap[this.status] || 'neutral';
  }

  render() {
    const colorVariant = this.getStatusColor();
    
    return (
      <Host 
        class={{
          'status-icon': true,
          [`status-icon--${colorVariant}`]: true,
          [`status-icon--${this.size}`]: true,
        }}
      >
        <div class="status-dot"></div>
      </Host>
    );
  }
}