import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

export interface TableHeaderCellProps {
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
}

@Component({
  tag: 'table-header-cell',
  styleUrl: 'table-header-cell.css',
  shadow: false,
})
export class TableHeaderCell {
  @Prop() sortable: boolean = false;
  @Prop() sortDirection?: 'asc' | 'desc' | null = null;
  @Prop() align: 'left' | 'center' | 'right' = 'left';
  @Prop() width?: string | number;

  @Event() sortClick: EventEmitter<void>;

  private handleClick = () => {
    if (this.sortable) {
      this.sortClick.emit();
    }
  };

  private getSortIcon(): string | null {
    if (!this.sortable || !this.sortDirection) return null;
    return this.sortDirection === 'asc' ? 'arrow-up' : 'arrow-down';
  }

  render() {
    const classes = {
      'table-header-cell': true,
      'table-header-cell--sortable': this.sortable,
      'table-header-cell--sorted': !!this.sortDirection,
      [`table-header-cell--align-${this.align}`]: true,
    };

    const style = this.width ? {
      width: typeof this.width === 'number' ? `${this.width}px` : this.width,
      minWidth: typeof this.width === 'number' ? `${this.width}px` : this.width,
    } : undefined;

    const sortIcon = this.getSortIcon();

    return (
      <Host class={classes} style={style} onClick={this.handleClick}>
        <div class="table-header-cell__content">
          <ui-text 
            variant="caption"
            weight="semibold"
            color="secondary"
            class="table-header-cell__text"
          >
            <slot></slot>
          </ui-text>
          
          {this.sortable && (
            <div class="table-header-cell__sort-indicator">
              {sortIcon ? (
                <ui-icon 
                  name={sortIcon as any}
                  size="xs"
                  class="table-header-cell__sort-icon"
                ></ui-icon>
              ) : (
                <div class="table-header-cell__sort-placeholder"></div>
              )}
            </div>
          )}
        </div>
      </Host>
    );
  }
}