import { Component, Prop, h, Host } from '@stencil/core';

export interface IconProps {
  name: 'user' | 'phone' | 'email' | 'chevron-down' | 'eye' | 'edit' | 'more' | 'check' | 'x' | 'arrow-up' | 'arrow-down';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}

@Component({
  tag: 'ui-icon',
  styleUrl: 'icon.css',
  shadow: false,
})
export class Icon {
  @Prop() name: IconProps['name'] = 'user';
  @Prop() size: IconProps['size'] = 'md';
  @Prop() color?: string;

  private getIconPath(): string {
    const icons = {
      'user': 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      'phone': 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      'email': 'M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 4.5V6h14v2.5l-7 3.5-7-3.5z',
      'chevron-down': 'M6 9l6 6 6-6',
      'eye': 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z',
      'edit': 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7 M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z',
      'more': 'M12 5v.01 M12 12v.01 M12 19v.01 M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z',
      'check': 'M20 6L9 17l-5-5',
      'x': 'M18 6L6 18 M6 6l12 12',
      'arrow-up': 'M7 14l5-5 5 5',
      'arrow-down': 'M7 10l5 5 5-5'
    };
    
    return icons[this.name] || icons.user;
  }

  private getSizeValue(): string {
    const sizes = {
      'xs': '12',
      'sm': '16', 
      'md': '20',
      'lg': '24',
      'xl': '32'
    };
    
    return sizes[this.size] || sizes.md;
  }

  render() {
    const size = this.getSizeValue();
    const iconPath = this.getIconPath();
    
    return (
      <Host 
        class={{
          'icon': true,
          [`icon--${this.size}`]: true,
        }}
        style={this.color ? { '--icon-color': this.color } : {}}
      >
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <path d={iconPath} />
        </svg>
      </Host>
    );
  }
}