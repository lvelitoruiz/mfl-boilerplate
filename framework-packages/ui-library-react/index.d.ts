import React from 'react';

// Types from core library - ONLY NEW ATOMIC DESIGN COMPONENTS
export interface ContactInfoCellType {
  type: 'text' | 'email' | 'phone' | 'url';
}

export interface DropdownOption {
  label: string;
  value: string;
}

export interface OrderStatus {
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

export interface StatusVariant {
  variant: 'pending' | 'in-progress' | 'completed' | 'cancelled' | 'on-hold' | 'none';
}

export interface Size {
  size: 'sm' | 'md' | 'lg';
}

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
}

export interface AvatarFallback {
  fallback: 'initials' | 'icon';
}

export interface IconName {
  name: 'user' | 'phone' | 'mail' | 'clock' | 'check' | 'x' | 'alert-circle' | 'chevron-down' | 'chevron-up';
}

export interface TextVariant {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'overline';
}

export interface TextColor {
  color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'destructive';
}

export interface TextWeight {
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

// Custom event interfaces
export interface ContactCellCustomEvent extends CustomEvent {
  detail: string;
}

export interface ContactInfoCellCustomEvent extends CustomEvent {
  detail: { type: string; value: string };
}

export interface DropdownCellCustomEvent extends CustomEvent {
  detail: string;
}

export interface OrderIdCellCustomEvent extends CustomEvent {
  detail: string;
}

export interface RepairOrdersTableCustomEvent<T> extends CustomEvent {
  detail: T;
}

export interface TableHeaderCustomEvent<T> extends CustomEvent {
  detail: T;
}

export interface TableHeaderCellCustomEvent extends CustomEvent {
  detail: void;
}

export interface TableRowCustomEvent<T> extends CustomEvent {
  detail: T;
}

// React component props interfaces
export interface ContactCellProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  avatar?: string;
  showAvatar?: boolean;
  onContactClick?: (event: ContactCellCustomEvent) => void;
  children?: React.ReactNode;
}

export interface ContactInfoCellProps extends React.HTMLAttributes<HTMLElement> {
  type: ContactInfoCellProps['type'];
  value: string;
  clickable?: boolean;
  onInfoClick?: (event: ContactInfoCellCustomEvent) => void;
  children?: React.ReactNode;
}

export interface DropdownCellProps extends React.HTMLAttributes<HTMLElement> {
  value: string;
  placeholder?: string;
  options: DropdownOption[];
  disabled?: boolean;
  onDropdownChange?: (event: DropdownCellCustomEvent) => void;
  children?: React.ReactNode;
}

export interface MyComponentProps extends React.HTMLAttributes<HTMLElement> {
  first: string;
  middle: string;
  last: string;
  children?: React.ReactNode;
}

export interface OrderIdCellProps extends React.HTMLAttributes<HTMLElement> {
  orderId: string;
  status: OrderIdCellProps['status'];
  date?: string;
  time?: string;
  notificationCount?: number;
  onOrderClick?: (event: OrderIdCellCustomEvent) => void;
  children?: React.ReactNode;
}

export interface RepairOrdersTableProps extends React.HTMLAttributes<HTMLElement> {
  data: RepairOrderData[];
  loading?: boolean;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc' | null;
  onSortChange?: (event: RepairOrdersTableCustomEvent<{ column: string; direction: 'asc' | 'desc' }>) => void;
  onRowClick?: (event: RepairOrdersTableCustomEvent<RepairOrderData>) => void;
  onCellClick?: (event: RepairOrdersTableCustomEvent<{ cellType: string; value: any; data: RepairOrderData }>) => void;
  children?: React.ReactNode;
}

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLElement> {
  variant: StatusBadgeProps['variant'];
  size?: StatusBadgeProps['size'];
  children?: React.ReactNode;
}

export interface StatusCellProps extends React.HTMLAttributes<HTMLElement> {
  status: string;
  variant?: StatusCellProps['variant'];
  children?: React.ReactNode;
}

export interface StatusIconProps extends React.HTMLAttributes<HTMLElement> {
  status: StatusIconProps['status'];
  size?: StatusIconProps['size'];
  children?: React.ReactNode;
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLElement> {
  columns: TableColumn[];
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc' | null;
  onSortChange?: (event: TableHeaderCustomEvent<{ column: string; direction: 'asc' | 'desc' }>) => void;
  children?: React.ReactNode;
}

export interface TableHeaderCellProps extends React.HTMLAttributes<HTMLElement> {
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
  onSortClick?: (event: TableHeaderCellCustomEvent) => void;
  children?: React.ReactNode;
}

export interface TableRowProps extends React.HTMLAttributes<HTMLElement> {
  data: RepairOrderData;
  selectable?: boolean;
  selected?: boolean;
  onRowClick?: (event: TableRowCustomEvent<RepairOrderData>) => void;
  onCellClick?: (event: TableRowCustomEvent<{ cellType: string; value: any; data: RepairOrderData }>) => void;
  onServiceAdvisorChange?: (event: TableRowCustomEvent<{ orderId: string; value: string }>) => void;
  onTechnicianChange?: (event: TableRowCustomEvent<{ orderId: string; value: string }>) => void;
  children?: React.ReactNode;
}

export interface UiAvatarProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarProps['size'];
  fallback?: AvatarProps['fallback'];
  children?: React.ReactNode;
}

export interface UiIconProps extends React.HTMLAttributes<HTMLElement> {
  name: IconProps['name'];
  size?: IconProps['size'];
  color?: string;
  children?: React.ReactNode;
}

export interface UiTextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextProps['variant'];
  color?: TextProps['color'];
  weight?: TextProps['weight'];
  truncate?: boolean;
  children?: React.ReactNode;
}

// React component declarations that map to web components
export declare const ContactCell: React.ForwardRefExoticComponent<ContactCellProps & React.RefAttributes<HTMLElement>>;
export declare const ContactInfoCell: React.ForwardRefExoticComponent<ContactInfoCellProps & React.RefAttributes<HTMLElement>>;
export declare const DropdownCell: React.ForwardRefExoticComponent<DropdownCellProps & React.RefAttributes<HTMLElement>>;
export declare const MyComponent: React.ForwardRefExoticComponent<MyComponentProps & React.RefAttributes<HTMLElement>>;
export declare const OrderIdCell: React.ForwardRefExoticComponent<OrderIdCellProps & React.RefAttributes<HTMLElement>>;
export declare const RepairOrdersTable: React.ForwardRefExoticComponent<RepairOrdersTableProps & React.RefAttributes<HTMLElement>>;
export declare const StatusBadge: React.ForwardRefExoticComponent<StatusBadgeProps & React.RefAttributes<HTMLElement>>;
export declare const StatusCell: React.ForwardRefExoticComponent<StatusCellProps & React.RefAttributes<HTMLElement>>;
export declare const StatusIcon: React.ForwardRefExoticComponent<StatusIconProps & React.RefAttributes<HTMLElement>>;
export declare const TableHeader: React.ForwardRefExoticComponent<TableHeaderProps & React.RefAttributes<HTMLElement>>;
export declare const TableHeaderCell: React.ForwardRefExoticComponent<TableHeaderCellProps & React.RefAttributes<HTMLElement>>;
export declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLElement>>;
export declare const UiAvatar: React.ForwardRefExoticComponent<UiAvatarProps & React.RefAttributes<HTMLElement>>;
export declare const UiIcon: React.ForwardRefExoticComponent<UiIconProps & React.RefAttributes<HTMLElement>>;
export declare const UiText: React.ForwardRefExoticComponent<UiTextProps & React.RefAttributes<HTMLElement>>;

// Backward compatibility aliases
export declare const UiStatusBadge: React.ForwardRefExoticComponent<StatusBadgeProps & React.RefAttributes<HTMLElement>>;
export declare const UiStatusIcon: React.ForwardRefExoticComponent<StatusIconProps & React.RefAttributes<HTMLElement>>;

// Utility function to initialize the web components
export declare function defineCustomElements(): void;