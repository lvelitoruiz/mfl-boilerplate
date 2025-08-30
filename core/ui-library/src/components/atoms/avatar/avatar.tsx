import { Component, Prop, h, Host, State } from '@stencil/core';

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fallback?: 'initials' | 'icon';
}

@Component({
  tag: 'ui-avatar',
  styleUrl: 'avatar.css',
  shadow: false,
})
export class Avatar {
  @Prop() src?: string;
  @Prop() alt?: string = '';
  @Prop() initials?: string;
  @Prop() size: AvatarProps['size'] = 'md';
  @Prop() fallback: AvatarProps['fallback'] = 'initials';

  @State() imageError: boolean = false;

  private handleImageError = () => {
    this.imageError = true;
  };

  private getInitials(): string {
    if (this.initials) return this.initials.toUpperCase();
    
    if (this.alt) {
      return this.alt
        .split(' ')
        .map(word => word.charAt(0))
        .slice(0, 2)
        .join('')
        .toUpperCase();
    }
    
    return 'U';
  }

  private renderContent() {
    // Show image if src is provided and no error
    if (this.src && !this.imageError) {
      return (
        <img 
          src={this.src} 
          alt={this.alt}
          onError={this.handleImageError}
          class="avatar-image"
        />
      );
    }
    
    // Show initials fallback
    if (this.fallback === 'initials') {
      return (
        <span class="avatar-initials">
          {this.getInitials()}
        </span>
      );
    }
    
    // Show icon fallback
    return (
      <svg 
        class="avatar-icon" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  }

  render() {
    return (
      <Host 
        class={{
          'avatar': true,
          [`avatar--${this.size}`]: true,
        }}
      >
        <div class="avatar-container">
          {this.renderContent()}
        </div>
      </Host>
    );
  }
}