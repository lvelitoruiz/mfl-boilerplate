import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

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

export interface TableRowProps {
  data: RepairOrderData;
  selectable?: boolean;
  selected?: boolean;
}

@Component({
  tag: 'table-row',
  styleUrl: 'table-row.css',
  shadow: false,
})
export class TableRow {
  @Prop() data!: RepairOrderData;
  @Prop() selectable: boolean = false;
  @Prop() selected: boolean = false;

  @Event() rowClick: EventEmitter<RepairOrderData>;
  @Event() cellClick: EventEmitter<{ cellType: string; value: any; data: RepairOrderData }>;
  @Event() serviceAdvisorChange: EventEmitter<{ orderId: string; value: string }>;
  @Event() technicianChange: EventEmitter<{ orderId: string; value: string }>;

  private handleRowClick = () => {
    this.rowClick.emit(this.data);
  };

  private handleOrderClick = () => {
    this.cellClick.emit({ 
      cellType: 'order', 
      value: this.data.orderId, 
      data: this.data 
    });
  };

  private handleContactClick = () => {
    this.cellClick.emit({ 
      cellType: 'customer', 
      value: this.data.customer, 
      data: this.data 
    });
  };

  private handleContactInfoClick = (event: CustomEvent) => {
    this.cellClick.emit({ 
      cellType: 'contactInfo', 
      value: event.detail, 
      data: this.data 
    });
  };

  private handleServiceAdvisorChange = (event: CustomEvent) => {
    this.serviceAdvisorChange.emit({ 
      orderId: this.data.orderId, 
      value: event.detail 
    });
  };

  private handleTechnicianChange = (event: CustomEvent) => {
    this.technicianChange.emit({ 
      orderId: this.data.orderId, 
      value: event.detail 
    });
  };

  render() {
    const classes = {
      'table-row': true,
      'table-row--selectable': this.selectable,
      'table-row--selected': this.selected,
    };

    // Mock options for dropdowns - in real app these would come from props
    const serviceAdvisorOptions = [
      { value: 'sa-1', label: 'John Smith' },
      { value: 'sa-2', label: 'Maria Rodriguez' },
      { value: 'sa-3', label: 'David Johnson' },
    ];

    const technicianOptions = [
      { value: 'tech-1', label: 'Mike Wilson' },
      { value: 'tech-2', label: 'Sarah Chen' },
      { value: 'tech-3', label: 'Robert Davis' },
    ];

    return (
      <Host class={classes}>
        <div class="table-row__content" onClick={this.handleRowClick}>
          <div class="table-row__cell table-row__cell--order">
            <order-id-cell
              orderId={this.data.orderId}
              status={this.data.orderStatus}
              date={this.data.orderDate}
              time={this.data.orderTime}
              notificationCount={this.data.notificationCount}
              onOrderClick={this.handleOrderClick}
            ></order-id-cell>
          </div>

          <div class="table-row__cell table-row__cell--service-advisor">
            <dropdown-cell
              value={this.data.serviceAdvisor.id}
              placeholder="Select Service Advisor"
              options={serviceAdvisorOptions}
              onDropdownChange={this.handleServiceAdvisorChange}
            ></dropdown-cell>
          </div>

          <div class="table-row__cell table-row__cell--technician">
            <dropdown-cell
              value={this.data.technician.id}
              placeholder="Select Technician"
              options={technicianOptions}
              onDropdownChange={this.handleTechnicianChange}
            ></dropdown-cell>
          </div>

          <div class="table-row__cell table-row__cell--customer">
            <contact-cell
              name={this.data.customer.name}
              avatar={this.data.customer.avatar}
              show-avatar={true}
              onContactClick={this.handleContactClick}
            ></contact-cell>
          </div>

          <div class="table-row__cell table-row__cell--contact">
            <contact-info-cell
              type={this.data.contactInfo.type}
              value={this.data.contactInfo.value}
              clickable={true}
              onInfoClick={this.handleContactInfoClick}
            ></contact-info-cell>
          </div>

          <div class="table-row__cell table-row__cell--media">
            <status-cell
              status={this.data.media.label}
              variant={this.data.media.status}
            ></status-cell>
          </div>

          <div class="table-row__cell table-row__cell--inspections">
            <status-cell
              status={this.data.inspections.label}
              variant={this.data.inspections.status}
            ></status-cell>
          </div>

          <div class="table-row__cell table-row__cell--estimates">
            <status-cell
              status={this.data.estimates.label}
              variant={this.data.estimates.status}
            ></status-cell>
          </div>

          <div class="table-row__cell table-row__cell--payments">
            <status-cell
              status={this.data.payments.label}
              variant={this.data.payments.status}
            ></status-cell>
          </div>

          <div class="table-row__cell table-row__cell--actions">
            <ui-icon name="more" size="md" class="table-row__actions-icon"></ui-icon>
          </div>
        </div>
      </Host>
    );
  }
}