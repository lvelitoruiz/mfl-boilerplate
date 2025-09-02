import { Component, Input, Output, EventEmitter } from '@angular/core';

// Type definitions
export interface ContactInfoCellProps {
  type: 'text' | 'email' | 'phone' | 'url';
}

export interface DropdownOption {
  label: string;
  value: string;
}

export interface OrderIdCellProps {
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled' | 'on-hold';
}

export interface RepairOrderData {
  orderId: string;
  customerName: string;
  phone?: string;
  email?: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled' | 'on-hold';
  hasNotification?: boolean;
  serviceAdvisor?: string;
  technician?: string;
  [key: string]: any;
}

export interface StatusBadgeProps {
  variant: 'pending' | 'in-progress' | 'completed' | 'cancelled' | 'on-hold' | 'none';
  size: 'sm' | 'md' | 'lg';
}

export interface StatusCellProps {
  variant: 'badge' | 'icon' | 'none';
}

export interface StatusIconProps {
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled' | 'on-hold';
  size: 'sm' | 'md' | 'lg';
}

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
}

export interface AvatarProps {
  fallback: 'initials' | 'icon';
  size: 'sm' | 'md' | 'lg';
}

export interface IconProps {
  name: 'user' | 'phone' | 'mail' | 'clock' | 'check' | 'x' | 'alert-circle' | 'chevron-down' | 'chevron-up';
  size: 'sm' | 'md' | 'lg';
}

export interface TextProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'destructive';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

// Angular component declarations for atomic design components

// Molecules
export declare class ContactCellComponent {
  name: string;
  avatar?: string;
  showAvatar: boolean;
  contactClick: EventEmitter<string>;
}

export declare class ContactInfoCellComponent {
  type: ContactInfoCellProps['type'];
  value: string;
  clickable: boolean;
  infoClick: EventEmitter<{ type: string; value: string }>;
}

export declare class DropdownCellComponent {
  value: string;
  placeholder: string;
  options: DropdownOption[];
  disabled: boolean;
  dropdownChange: EventEmitter<string>;
}

export declare class OrderIdCellComponent {
  orderId: string;
  status: OrderIdCellProps['status'];
  date: string;
  time: string;
  notificationCount?: number;
  orderClick: EventEmitter<string>;
}

export declare class StatusCellComponent {
  status: string;
  variant: StatusCellProps['variant'];
}

// Organisms
export declare class RepairOrdersTableComponent {
  data: RepairOrderData[];
  loading: boolean;
  sortColumn: string;
  sortDirection: 'asc' | 'desc' | null;
  sortChange: EventEmitter<{ column: string; direction: 'asc' | 'desc' }>;
  rowClick: EventEmitter<RepairOrderData>;
  cellClick: EventEmitter<{ cellType: string; value: any; data: RepairOrderData }>;
}

export declare class TableHeaderComponent {
  columns: TableColumn[];
  sortColumn: string;
  sortDirection: 'asc' | 'desc' | null;
  sortChange: EventEmitter<{ column: string; direction: 'asc' | 'desc' }>;
}

export declare class TableHeaderCellComponent {
  sortable: boolean;
  sortDirection: 'asc' | 'desc' | null;
  align: 'left' | 'center' | 'right';
  width?: string | number;
  sortClick: EventEmitter<void>;
}

export declare class TableRowComponent {
  data: RepairOrderData;
  selectable: boolean;
  selected: boolean;
  rowClick: EventEmitter<RepairOrderData>;
  cellClick: EventEmitter<{ cellType: string; value: any; data: RepairOrderData }>;
  serviceAdvisorChange: EventEmitter<{ orderId: string; value: string }>;
  technicianChange: EventEmitter<{ orderId: string; value: string }>;
}

// Atoms
export declare class StatusBadgeComponent {
  variant: StatusBadgeProps['variant'];
  size: StatusBadgeProps['size'];
}

export declare class StatusIconComponent {
  status: StatusIconProps['status'];
  size: StatusIconProps['size'];
}

export declare class UiAvatarComponent {
  src?: string;
  alt?: string;
  initials?: string;
  size: AvatarProps['size'];
  fallback: AvatarProps['fallback'];
}

export declare class UiIconComponent {
  name: IconProps['name'];
  size: IconProps['size'];
  color?: string;
}

export declare class UiTextComponent {
  variant: TextProps['variant'];
  color?: TextProps['color'];
  weight?: TextProps['weight'];
  truncate?: boolean;
}

// Legacy component (for backward compatibility)
export declare class MyComponentComponent {
  first: string;
  middle: string;
  last: string;
}

// Backward compatibility aliases
export declare class UiStatusBadgeComponent extends StatusBadgeComponent {}
export declare class UiStatusIconComponent extends StatusIconComponent {}

// Angular module
export declare class UiLibraryModule {}

// Utility function
export declare function defineCustomElements(): void;