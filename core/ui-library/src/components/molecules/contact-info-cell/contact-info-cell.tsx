import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

export interface ContactInfoCellProps {
  type: 'email' | 'phone' | 'text';
  value: string;
  clickable?: boolean;
}

@Component({
  tag: 'contact-info-cell',
  styleUrl: 'contact-info-cell.css',
  shadow: false,
})
export class ContactInfoCell {
  @Prop() type: ContactInfoCellProps['type'] = 'text';
  @Prop() value: string = '';
  @Prop() clickable: boolean = false;

  @Event() infoClick: EventEmitter<{ type: string; value: string }>;

  private handleClick = () => {
    if (this.clickable) {
      this.infoClick.emit({ type: this.type, value: this.value });
    }
  };

  private getHref(): string | undefined {
    if (!this.clickable) return undefined;
    
    switch (this.type) {
      case 'email':
        return `mailto:${this.value}`;
      case 'phone':
        return `tel:${this.value}`;
      default:
        return undefined;
    }
  }

  render() {
    const href = this.getHref();
    const textVariant = this.clickable ? 'link' : 'body';
    const classes = {
      'contact-info-cell': true,
      'contact-info-cell--clickable': this.clickable,
    };

    return (
      <Host class={classes} onClick={this.handleClick}>
        <div class="contact-info-cell__content">
          {href ? (
            <ui-text 
              variant={textVariant}
              class="contact-info-cell__value"
              truncate={true}
            >
              <a href={href} class="contact-info-cell__link">
                {this.value}
              </a>
            </ui-text>
          ) : (
            <ui-text 
              variant={textVariant}
              class="contact-info-cell__value"
              truncate={true}
            >
              {this.value}
            </ui-text>
          )}
        </div>
      </Host>
    );
  }
}