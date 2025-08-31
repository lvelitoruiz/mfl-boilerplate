import { Component, Prop, h, Host } from '@stencil/core';

export interface StatusBadgeProps {
  variant: 'new' | 'viewed' | 'review' | 'sent' | 'published' | 'complete' | 'confirmed' | 'draft' | 'none' | 'closed';
  size?: 'sm' | 'md' | 'lg';
}

@Component({
  tag: 'status-badge',
  styleUrl: 'status-badge.css',
  shadow: false,
})
export class StatusBadge {
  @Prop() variant: StatusBadgeProps['variant'] = 'none';
  @Prop() size: StatusBadgeProps['size'] = 'md';

  private getVariantClass(): string {
    const variantMap = {
      'sent': 'positive',
      'published': 'positive', 
      'complete': 'positive',
      'confirmed': 'positive',
      'new': 'neutral',
      'viewed': 'neutral',
      'draft': 'neutral',
      'review': 'warning',
      'none': 'secondary',
      'closed': 'secondary'
    };
    
    return variantMap[this.variant] || 'neutral';
  }

  render() {
    const variantClass = this.getVariantClass();
    
    return (
      <Host 
        class={{
          'status-badge': true,
          [`status-badge--${variantClass}`]: true,
          [`status-badge--${this.size}`]: true,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}