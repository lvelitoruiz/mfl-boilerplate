'use client';

/**
 * Simple React wrapper using direct web components
 * Uses the same approach as the CDN demo that already works
 */

import React from 'react';

// Simple wrapper function for web components in React
const createReactWrapper = (tagName) => {
  return React.forwardRef((props, ref) => {
    return React.createElement(tagName, { ...props, ref });
  });
};

// Export all components as React wrappers  
export const ContactCell = createReactWrapper('contact-cell');
export const ContactInfoCell = createReactWrapper('contact-info-cell');
export const DropdownCell = createReactWrapper('dropdown-cell');
export const MyComponent = createReactWrapper('my-component');
export const OrderIdCell = createReactWrapper('order-id-cell');
export const RepairOrdersTable = createReactWrapper('repair-orders-table');
export const StatusBadge = createReactWrapper('status-badge');
export const StatusCell = createReactWrapper('status-cell');
export const StatusIcon = createReactWrapper('status-icon');
export const TableHeader = createReactWrapper('table-header');
export const TableHeaderCell = createReactWrapper('table-header-cell');
export const TableRow = createReactWrapper('table-row');
export const UiAvatar = createReactWrapper('ui-avatar');
export const UiIcon = createReactWrapper('ui-icon');
export const UiText = createReactWrapper('ui-text');

// Backward compatibility aliases
export const UiStatusBadge = StatusBadge;
export const UiStatusIcon = StatusIcon;