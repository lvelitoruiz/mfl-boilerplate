// Export specific component classes to avoid conflicts
export { Avatar } from './atoms/avatar/avatar';
export { Icon } from './atoms/icon/icon';
export { StatusBadge } from './atoms/status-badge/status-badge';
export { StatusIcon } from './atoms/status-icon/status-icon';
export { Text } from './atoms/text/text';

export { ContactCell } from './molecules/contact-cell/contact-cell';
export { ContactInfoCell } from './molecules/contact-info-cell/contact-info-cell';
export { DropdownCell } from './molecules/dropdown-cell/dropdown-cell';
export { OrderIdCell } from './molecules/order-id-cell/order-id-cell';
export { StatusCell } from './molecules/status-cell/status-cell';
export { TableHeaderCell } from './molecules/table-header-cell/table-header-cell';

export { TableHeader } from './organisms/table-header/table-header';
export { TableRow } from './organisms/table-row/table-row';
export { RepairOrdersTable } from './organisms/repair-orders-table/repair-orders-table';

// Export interfaces avoiding conflicts
export type { TableColumn } from './organisms/table-header/table-header';
export type { RepairOrderData } from './organisms/repair-orders-table/repair-orders-table';