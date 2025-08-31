import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

export interface TableColumn {
  key: string;
  title: string;
  icon: 'user' | 'phone' | 'email' | 'chevron-down' | 'eye' | 'edit' | 'more' | 'check' | 'x' | 'arrow-up' | 'arrow-down';
  sortable?: boolean;
  width?: string;
}

@Component({
  tag: 'table-header',
  styleUrl: 'table-header.css',
  shadow: true,
})
export class TableHeader {
  @Prop() columns: TableColumn[] = [];
  @Prop() sortColumn: string = '';
  @Prop() sortDirection: 'asc' | 'desc' | null = null;

  @Event() sortChange: EventEmitter<{ column: string; direction: 'asc' | 'desc' }>;

  private handleColumnClick = (column: TableColumn) => {
    if (column.sortable) {
      const newDirection = this.sortColumn === column.key && this.sortDirection === 'asc' ? 'desc' : 'asc';
      
      this.sortChange.emit({
        column: column.key,
        direction: newDirection
      });
    }
  }

  render() {
    return (
      <Host>
        <div class="table-header">
          {this.columns.map(column => (
            <div 
              class={`column ${column.sortable ? 'sortable' : ''}`} 
              style={{ width: column.width }}
              onClick={() => this.handleColumnClick(column)}
            >
              <div class="column-content">
                <div class="left">
                  <div class="icons">
                    <ui-icon name={column.icon} size="sm"></ui-icon>
                    {column.key === 'roId' && <ui-icon name="chevron-down" size="sm"></ui-icon>}
                  </div>
                  <div class="label">{column.title}</div>
                </div>
                {column.sortable && (
                  <div class="sort-icon">
                    <ui-icon 
                      name={this.sortColumn === column.key && this.sortDirection === 'desc' ? 'arrow-up' : 'arrow-down'} 
                      size="sm"
                    ></ui-icon>
                  </div>
                )}
              </div>
              {column.key !== 'roId' && <div class="column-border"></div>}
            </div>
          ))}
          <div class="actions-column">
            <ui-icon name="more" size="sm"></ui-icon>
          </div>
        </div>
      </Host>
    );
  }
}