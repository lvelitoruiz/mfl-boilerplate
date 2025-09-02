/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer, type StencilVueComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from 'ui-library';

import { defineCustomElement as defineContactCell } from 'ui-library/components/contact-cell.js';
import { defineCustomElement as defineContactInfoCell } from 'ui-library/components/contact-info-cell.js';
import { defineCustomElement as defineDropdownCell } from 'ui-library/components/dropdown-cell.js';
import { defineCustomElement as defineMyComponent } from 'ui-library/components/my-component.js';
import { defineCustomElement as defineOrderIdCell } from 'ui-library/components/order-id-cell.js';
import { defineCustomElement as defineRepairOrdersTable } from 'ui-library/components/repair-orders-table.js';
import { defineCustomElement as defineStatusBadge } from 'ui-library/components/status-badge.js';
import { defineCustomElement as defineStatusCell } from 'ui-library/components/status-cell.js';
import { defineCustomElement as defineStatusIcon } from 'ui-library/components/status-icon.js';
import { defineCustomElement as defineTableHeader } from 'ui-library/components/table-header.js';
import { defineCustomElement as defineTableHeaderCell } from 'ui-library/components/table-header-cell.js';
import { defineCustomElement as defineTableRow } from 'ui-library/components/table-row.js';
import { defineCustomElement as defineUiAvatar } from 'ui-library/components/ui-avatar.js';
import { defineCustomElement as defineUiIcon } from 'ui-library/components/ui-icon.js';
import { defineCustomElement as defineUiText } from 'ui-library/components/ui-text.js';


export const ContactCell: StencilVueComponent<JSX.ContactCell> = /*@__PURE__*/ defineContainer<JSX.ContactCell>('contact-cell', defineContactCell, [
  'name',
  'avatar',
  'showAvatar',
  'contactClick'
], [
  'contactClick'
]);


export const ContactInfoCell: StencilVueComponent<JSX.ContactInfoCell> = /*@__PURE__*/ defineContainer<JSX.ContactInfoCell>('contact-info-cell', defineContactInfoCell, [
  'type',
  'value',
  'clickable',
  'infoClick'
], [
  'infoClick'
]);


export const DropdownCell: StencilVueComponent<JSX.DropdownCell> = /*@__PURE__*/ defineContainer<JSX.DropdownCell>('dropdown-cell', defineDropdownCell, [
  'value',
  'placeholder',
  'options',
  'disabled',
  'dropdownChange'
], [
  'dropdownChange'
]);


export const MyComponent: StencilVueComponent<JSX.MyComponent> = /*@__PURE__*/ defineContainer<JSX.MyComponent>('my-component', defineMyComponent, [
  'first',
  'middle',
  'last'
]);


export const OrderIdCell: StencilVueComponent<JSX.OrderIdCell> = /*@__PURE__*/ defineContainer<JSX.OrderIdCell>('order-id-cell', defineOrderIdCell, [
  'orderId',
  'status',
  'date',
  'time',
  'notificationCount',
  'orderClick'
], [
  'orderClick'
]);


export const RepairOrdersTable: StencilVueComponent<JSX.RepairOrdersTable> = /*@__PURE__*/ defineContainer<JSX.RepairOrdersTable>('repair-orders-table', defineRepairOrdersTable, [
  'data',
  'loading',
  'sortColumn',
  'sortDirection',
  'sortChange',
  'rowClick',
  'cellClick'
], [
  'sortChange',
  'rowClick',
  'cellClick'
]);


export const StatusBadge: StencilVueComponent<JSX.StatusBadge> = /*@__PURE__*/ defineContainer<JSX.StatusBadge>('status-badge', defineStatusBadge, [
  'variant',
  'size'
]);


export const StatusCell: StencilVueComponent<JSX.StatusCell> = /*@__PURE__*/ defineContainer<JSX.StatusCell>('status-cell', defineStatusCell, [
  'status',
  'variant'
]);


export const StatusIcon: StencilVueComponent<JSX.StatusIcon> = /*@__PURE__*/ defineContainer<JSX.StatusIcon>('status-icon', defineStatusIcon, [
  'status',
  'size'
]);


export const TableHeader: StencilVueComponent<JSX.TableHeader> = /*@__PURE__*/ defineContainer<JSX.TableHeader>('table-header', defineTableHeader, [
  'columns',
  'sortColumn',
  'sortDirection',
  'sortChange'
], [
  'sortChange'
]);


export const TableHeaderCell: StencilVueComponent<JSX.TableHeaderCell> = /*@__PURE__*/ defineContainer<JSX.TableHeaderCell>('table-header-cell', defineTableHeaderCell, [
  'sortable',
  'sortDirection',
  'align',
  'width',
  'sortClick'
], [
  'sortClick'
]);


export const TableRow: StencilVueComponent<JSX.TableRow> = /*@__PURE__*/ defineContainer<JSX.TableRow>('table-row', defineTableRow, [
  'data',
  'selectable',
  'selected',
  'rowClick',
  'cellClick',
  'serviceAdvisorChange',
  'technicianChange'
], [
  'rowClick',
  'cellClick',
  'serviceAdvisorChange',
  'technicianChange'
]);


export const UiAvatar: StencilVueComponent<JSX.UiAvatar> = /*@__PURE__*/ defineContainer<JSX.UiAvatar>('ui-avatar', defineUiAvatar, [
  'src',
  'alt',
  'initials',
  'size',
  'fallback'
]);


export const UiIcon: StencilVueComponent<JSX.UiIcon> = /*@__PURE__*/ defineContainer<JSX.UiIcon>('ui-icon', defineUiIcon, [
  'name',
  'size',
  'color'
]);


export const UiText: StencilVueComponent<JSX.UiText> = /*@__PURE__*/ defineContainer<JSX.UiText>('ui-text', defineUiText, [
  'variant',
  'color',
  'weight',
  'truncate'
]);

// Component aliases for backward compatibility
export const UiStatusBadge = StatusBadge;
export const UiStatusIcon = StatusIcon;
