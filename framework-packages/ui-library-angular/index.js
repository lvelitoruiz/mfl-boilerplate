/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from 'ui-library';


@ProxyCmp({
  inputs: ['avatar', 'name', 'showAvatar']
})
@Component({
  selector: 'contact-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['avatar', 'name', 'showAvatar'],
  outputs: ['contactClick'],
  standalone: false
})
export class ContactCell {
  protected el: HTMLContactCellElement;
  @Output() contactClick = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ContactCell extends Components.ContactCell {

  contactClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['clickable', 'type', 'value']
})
@Component({
  selector: 'contact-info-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clickable', 'type', 'value'],
  outputs: ['infoClick'],
  standalone: false
})
export class ContactInfoCell {
  protected el: HTMLContactInfoCellElement;
  @Output() infoClick = new EventEmitter<CustomEvent<{ type: string; value: string }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ContactInfoCell extends Components.ContactInfoCell {

  infoClick: EventEmitter<CustomEvent<{ type: string; value: string }>>;
}


@ProxyCmp({
  inputs: ['disabled', 'options', 'placeholder', 'value']
})
@Component({
  selector: 'dropdown-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'options', 'placeholder', 'value'],
  outputs: ['dropdownChange'],
  standalone: false
})
export class DropdownCell {
  protected el: HTMLDropdownCellElement;
  @Output() dropdownChange = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DropdownCell extends Components.DropdownCell {

  dropdownChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
  standalone: false
})
export class MyComponent {
  protected el: HTMLMyComponentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyComponent extends Components.MyComponent {}


@ProxyCmp({
  inputs: ['date', 'notificationCount', 'orderId', 'status', 'time']
})
@Component({
  selector: 'order-id-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['date', 'notificationCount', 'orderId', 'status', 'time'],
  outputs: ['orderClick'],
  standalone: false
})
export class OrderIdCell {
  protected el: HTMLOrderIdCellElement;
  @Output() orderClick = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface OrderIdCell extends Components.OrderIdCell {

  orderClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['data', 'loading', 'sortColumn', 'sortDirection']
})
@Component({
  selector: 'repair-orders-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data', 'loading', 'sortColumn', 'sortDirection'],
  outputs: ['sortChange', 'rowClick', 'cellClick'],
  standalone: false
})
export class RepairOrdersTable {
  protected el: HTMLRepairOrdersTableElement;
  @Output() sortChange = new EventEmitter<CustomEvent<{ column: string; direction: 'asc' | 'desc' }>>();
  @Output() rowClick = new EventEmitter<CustomEvent<IRepairOrdersTableRepairOrderData>>();
  @Output() cellClick = new EventEmitter<CustomEvent<{ cellType: string; value: any; data: [object Object] }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RepairOrderData as IRepairOrdersTableRepairOrderData } from 'ui-library';

export declare interface RepairOrdersTable extends Components.RepairOrdersTable {

  sortChange: EventEmitter<CustomEvent<{ column: string; direction: 'asc' | 'desc' }>>;

  rowClick: EventEmitter<CustomEvent<IRepairOrdersTableRepairOrderData>>;

  cellClick: EventEmitter<CustomEvent<{ cellType: string; value: any; data: [object Object] }>>;
}


@ProxyCmp({
  inputs: ['size', 'variant']
})
@Component({
  selector: 'status-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'variant'],
  standalone: false
})
export class StatusBadge {
  protected el: HTMLStatusBadgeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StatusBadge extends Components.StatusBadge {}


@ProxyCmp({
  inputs: ['status', 'variant']
})
@Component({
  selector: 'status-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['status', 'variant'],
  standalone: false
})
export class StatusCell {
  protected el: HTMLStatusCellElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StatusCell extends Components.StatusCell {}


@ProxyCmp({
  inputs: ['size', 'status']
})
@Component({
  selector: 'status-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'status'],
  standalone: false
})
export class StatusIcon {
  protected el: HTMLStatusIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StatusIcon extends Components.StatusIcon {}


@ProxyCmp({
  inputs: ['columns', 'sortColumn', 'sortDirection']
})
@Component({
  selector: 'table-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['columns', 'sortColumn', 'sortDirection'],
  outputs: ['sortChange'],
  standalone: false
})
export class TableHeader {
  protected el: HTMLTableHeaderElement;
  @Output() sortChange = new EventEmitter<CustomEvent<{ column: string; direction: 'asc' | 'desc' }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TableHeader extends Components.TableHeader {

  sortChange: EventEmitter<CustomEvent<{ column: string; direction: 'asc' | 'desc' }>>;
}


@ProxyCmp({
  inputs: ['align', 'sortDirection', 'sortable', 'width']
})
@Component({
  selector: 'table-header-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'sortDirection', 'sortable', 'width'],
  outputs: ['sortClick'],
  standalone: false
})
export class TableHeaderCell {
  protected el: HTMLTableHeaderCellElement;
  @Output() sortClick = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TableHeaderCell extends Components.TableHeaderCell {

  sortClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['data', 'selectable', 'selected']
})
@Component({
  selector: 'table-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [{ name: 'data', required: true }, 'selectable', 'selected'],
  outputs: ['rowClick', 'cellClick', 'serviceAdvisorChange', 'technicianChange'],
  standalone: false
})
export class TableRow {
  protected el: HTMLTableRowElement;
  @Output() rowClick = new EventEmitter<CustomEvent<ITableRowRepairOrderData>>();
  @Output() cellClick = new EventEmitter<CustomEvent<{ cellType: string; value: any; data: [object Object] }>>();
  @Output() serviceAdvisorChange = new EventEmitter<CustomEvent<{ orderId: string; value: string }>>();
  @Output() technicianChange = new EventEmitter<CustomEvent<{ orderId: string; value: string }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RepairOrderData as ITableRowRepairOrderData } from 'ui-library';

export declare interface TableRow extends Components.TableRow {

  rowClick: EventEmitter<CustomEvent<ITableRowRepairOrderData>>;

  cellClick: EventEmitter<CustomEvent<{ cellType: string; value: any; data: [object Object] }>>;

  serviceAdvisorChange: EventEmitter<CustomEvent<{ orderId: string; value: string }>>;

  technicianChange: EventEmitter<CustomEvent<{ orderId: string; value: string }>>;
}


@ProxyCmp({
  inputs: ['alt', 'fallback', 'initials', 'size', 'src']
})
@Component({
  selector: 'ui-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'fallback', 'initials', 'size', 'src'],
  standalone: false
})
export class UiAvatar {
  protected el: HTMLUiAvatarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiAvatar extends Components.UiAvatar {}


@ProxyCmp({
  inputs: ['color', 'name', 'size']
})
@Component({
  selector: 'ui-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'name', 'size'],
  standalone: false
})
export class UiIcon {
  protected el: HTMLUiIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiIcon extends Components.UiIcon {}


@ProxyCmp({
  inputs: ['color', 'truncate', 'variant', 'weight']
})
@Component({
  selector: 'ui-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'truncate', 'variant', 'weight'],
  standalone: false
})
export class UiText {
  protected el: HTMLUiTextElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiText extends Components.UiText {}

// NgModule for Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ContactCell,
    ContactInfoCell,
    DropdownCell,
    MyComponent,
    OrderIdCell,
    RepairOrdersTable,
    StatusBadge,
    StatusCell,
    StatusIcon,
    TableHeader,
    TableHeaderCell,
    TableRow,
    UiAvatar,
    UiIcon,
    UiText
  ],
  imports: [CommonModule],
  exports: [
    ContactCell,
    ContactInfoCell,
    DropdownCell,
    MyComponent,
    OrderIdCell,
    RepairOrdersTable,
    StatusBadge,
    StatusCell,
    StatusIcon,
    TableHeader,
    TableHeaderCell,
    TableRow,
    UiAvatar,
    UiIcon,
    UiText
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UiLibraryModule {}

// Component aliases for backward compatibility
export const UiStatusBadge = StatusBadge;
export const UiStatusIcon = StatusIcon;
