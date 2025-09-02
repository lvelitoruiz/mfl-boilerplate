import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-component-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-test.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentTestComponent implements AfterViewInit {
  contactInfo = {
    name: "Jane Smith",
    phone: "+1-555-0456",
    email: "jane.smith@example.com"
  };

  mockRepairData = [
    {
      orderId: 'RO-001',
      customerName: 'John Doe',
      phone: '+1-555-0123',
      email: 'john.doe@example.com',
      status: 'in-progress',
      hasNotification: true
    },
    {
      orderId: 'RO-002', 
      customerName: 'Jane Smith',
      phone: '+1-555-0456',
      email: 'jane.smith@example.com',
      status: 'completed',
      hasNotification: false
    }
  ];

  columns = [
    { key: 'orderId', label: 'Order ID', sortable: true },
    { key: 'customer', label: 'Customer', sortable: false },
    { key: 'contact', label: 'Contact', sortable: false },
    { key: 'status', label: 'Status', sortable: true }
  ];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Set complex properties directly on DOM elements after view init
    const contactInfoCell = this.elementRef.nativeElement.querySelector('contact-info-cell');
    if (contactInfoCell) {
      contactInfoCell.contactInfo = this.contactInfo;
    }

    const tableHeader = this.elementRef.nativeElement.querySelector('table-header');
    if (tableHeader) {
      tableHeader.columns = this.columns;
    }

    const tableRow = this.elementRef.nativeElement.querySelector('table-row');
    if (tableRow) {
      tableRow.data = this.mockRepairData[0];
      tableRow.columns = this.columns;
    }

    const repairTable = this.elementRef.nativeElement.querySelector('repair-orders-table');
    if (repairTable) {
      repairTable.data = this.mockRepairData;
      repairTable.columns = this.columns;
    }
  }
}