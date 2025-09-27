import { Component, Prop, h, Host, Event, EventEmitter, Listen } from '@stencil/core';
import { TableColumn } from '../table-header/table-header';

// Using the existing RepairOrderData interface from table-row
export interface RepairOrderData {
  id: string;
  orderId: string;
  orderStatus: 'new' | 'open' | 'closed';
  orderDate: string;
  orderTime: string;
  notificationCount?: number;
  serviceAdvisor: {
    id: string;
    name: string;
  };
  technician: {
    id: string;
    name: string;
  };
  customer: {
    id: string;
    name: string;
    avatar?: string;
  };
  contactInfo: {
    type: 'email' | 'phone' | 'text';
    value: string;
  };
  media: {
    status: 'new' | 'viewed' | 'review' | 'sent' | 'published' | 'complete' | 'confirmed' | 'draft' | 'none' | 'closed';
    label: string;
  };
  inspections: {
    status: 'new' | 'viewed' | 'review' | 'sent' | 'published' | 'complete' | 'confirmed' | 'draft' | 'none' | 'closed';
    label: string;
  };
  estimates: {
    status: 'new' | 'viewed' | 'review' | 'sent' | 'published' | 'complete' | 'confirmed' | 'draft' | 'none' | 'closed';
    label: string;
  };
  payments: {
    status: 'new' | 'viewed' | 'review' | 'sent' | 'published' | 'complete' | 'confirmed' | 'draft' | 'none' | 'closed';
    label: string;
  };
}


@Component({
  tag: 'repair-orders-table',
  styleUrl: 'repair-orders-table.css',
  shadow: true,
})
export class RepairOrdersTable {
  @Prop() data: RepairOrderData[] = [];
  @Prop() loading: boolean = false;
  @Prop() sortColumn: string = '';
  @Prop() sortDirection: 'asc' | 'desc' | null = null;

  private columns: TableColumn[] = [
    { key: 'roId', title: 'RO ID', icon: 'edit', sortable: true, width: '162px' },
    { key: 'serviceAdvisor', title: 'Service Advisor', icon: 'user', sortable: false, width: '173px' },
    { key: 'technician', title: 'Technician', icon: 'user', sortable: false, width: '173px' },
    { key: 'customer', title: 'Customer', icon: 'user', sortable: true, width: '130px' },
    { key: 'contactInfo', title: 'Contact Info', icon: 'phone', sortable: true, width: '173px' },
    { key: 'media', title: 'Media', icon: 'eye', sortable: false, width: '173px' },
    { key: 'inspections', title: 'Inspections', icon: 'check', sortable: false, width: '173px' },
    { key: 'estimates', title: 'Estimates', icon: 'edit', sortable: false, width: '173px' },
    { key: 'payments', title: 'Payments', icon: 'more', sortable: false, width: '173px' },
  ];

  @Event() sortChange: EventEmitter<{ column: string; direction: 'asc' | 'desc' }>;
  @Event() rowClick: EventEmitter<RepairOrderData>;
  @Event() cellClick: EventEmitter<{ cellType: string; value: any; data: RepairOrderData }>;


  @Listen('sortChange')
  handleSortChange(event: CustomEvent) {
    this.sortChange.emit(event.detail);
  }

  @Listen('rowClick')
  handleRowClick(event: CustomEvent) {
    this.rowClick.emit(event.detail);
  }

  @Listen('cellClick')  
  handleCellClick(event: CustomEvent) {
    this.cellClick.emit(event.detail);
  }

  render() {
    return (
      <Host>
        <div class="table-container">
          <table-header
            columns={this.columns}
            sortColumn={this.sortColumn}
            sortDirection={this.sortDirection}
          />
          
          <div class="table-body">
            {this.loading ? (
              <div class="loading-state">
                Loading repair orders...
              </div>
            ) : this.data.length === 0 ? (
              <div class="empty-state">
                No repair orders found
              </div>
            ) : (
              this.data.map(row => (
                <table-row
                  key={row.id}
                  class="table-row"
                  data={row}
                />
              ))
            )}
          </div>
        </div>
      </Host>
    );
  }
}