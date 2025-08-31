import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

export interface ContactCellProps {
  name: string;
  avatar?: string;
  showAvatar?: boolean;
}

@Component({
  tag: 'contact-cell',
  styleUrl: 'contact-cell.css',
  shadow: false,
})
export class ContactCell {
  @Prop() name: string = '';
  @Prop() avatar?: string;
  @Prop() showAvatar: boolean = true;

  @Event() contactClick: EventEmitter<string>;

  private handleClick = () => {
    this.contactClick.emit(this.name);
  };

  private getInitials(): string {
    return this.name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  }

  render() {
    return (
      <Host class="contact-cell contact-cell--clickable" onClick={this.handleClick}>
        <div class="contact-cell__content">
          {this.showAvatar && (
            <ui-avatar
              src={this.avatar}
              initials={this.getInitials()}
              alt={this.name}
              size="sm"
            ></ui-avatar>
          )}
          <ui-text 
            variant="body" 
            class="contact-cell__name"
            truncate={true}
          >
            {this.name}
          </ui-text>
        </div>
      </Host>
    );
  }
}