import { Component, Prop, h, Host } from '@stencil/core';

export interface TextProps {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'link';
  color?: 'primary' | 'secondary' | 'link' | 'success' | 'warning' | 'error';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  truncate?: boolean;
}

@Component({
  tag: 'ui-text',
  styleUrl: 'text.css',
  shadow: false,
})
export class Text {
  @Prop() variant: TextProps['variant'] = 'body';
  @Prop() color?: TextProps['color'];
  @Prop() weight?: TextProps['weight'];
  @Prop() truncate?: boolean = false;

  private getTag(): string {
    const tagMap = {
      'h1': 'h1',
      'h2': 'h2', 
      'h3': 'h3',
      'body': 'span',
      'caption': 'span',
      'link': 'span'
    };
    
    return tagMap[this.variant] || 'span';
  }

  render() {
    const Tag = this.getTag() as any;
    
    return (
      <Host 
        class={{
          'text': true,
          [`text--${this.variant}`]: true,
          [`text--${this.color}`]: !!this.color,
          [`text--${this.weight}`]: !!this.weight,
          'text--truncate': this.truncate,
        }}
      >
        <Tag>
          <slot></slot>
        </Tag>
      </Host>
    );
  }
}