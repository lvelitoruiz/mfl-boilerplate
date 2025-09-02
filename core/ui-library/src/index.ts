/**
 * @fileoverview entry point for your component library
 *
 * This is the entry point for your component library. Use this file to export utilities,
 * constants or data structure that accompany your components.
 *
 * DO NOT use this file to export your components. Instead, use the recommended approaches
 * to consume components of this package as outlined in the `README.md`.
 */

export { format } from './utils/utils';
export type * from './components.d.ts';

// Export ALL NEW ATOMIC DESIGN COMPONENTS - individual exports
// Atoms
export { Avatar as UiAvatar } from './components/atoms/avatar/avatar';
export { Icon as UiIcon } from './components/atoms/icon/icon'; 
export { StatusBadge } from './components/atoms/status-badge/status-badge';
export { StatusIcon } from './components/atoms/status-icon/status-icon';
export { Text as UiText } from './components/atoms/text/text';

// Molecules
export { ContactCell } from './components/molecules/contact-cell/contact-cell';
export { ContactInfoCell } from './components/molecules/contact-info-cell/contact-info-cell';
export { DropdownCell } from './components/molecules/dropdown-cell/dropdown-cell';
export { OrderIdCell } from './components/molecules/order-id-cell/order-id-cell';
export { StatusCell } from './components/molecules/status-cell/status-cell';
export { TableHeaderCell } from './components/molecules/table-header-cell/table-header-cell';

// Organisms  
export { RepairOrdersTable } from './components/organisms/repair-orders-table/repair-orders-table';
export { TableHeader } from './components/organisms/table-header/table-header';
export { TableRow } from './components/organisms/table-row/table-row';

// Legacy component
export { MyComponent } from './components/my-component/my-component';

// Export the custom loader for framework integrations
export { defineCustomElements } from './loader/custom-loader';