# Repair Orders Table - Component Analysis

## Overview
Analysis of the Repair Orders table interface for component library implementation. This document outlines the atomic design structure and all required props for each component.

## Design Tokens (From Figma)

### Colors
```css
/* Status Colors - Using Figma theme colors */
--status-positive: #18811d;     /* Green - txt-positive */
--status-neutral: #297cd6;      /* Blue - txt-neutral */ 
--status-warning: #ffa000;      /* Orange/Yellow - txt-warning */
--status-critical: #911a08;     /* Red - txt-critical */
--status-notification: #f22c0d; /* Red - txt-notification */

/* Background Colors - Status */
--bg-positive: #e9fbe9;         /* Light Green */
--bg-neutral: #eaf2fb;          /* Light Blue */
--bg-warning: #fff3cc;          /* Light Yellow */
--bg-critical: #feeae7;         /* Light Red */
--bg-notification: #f22c0d;     /* Red */

/* Text Colors */
--text-primary: #616161;        /* Gray - txt-01 */
--text-notification: #ffffff;   /* White - txt-notification */

/* Background Colors */
--bg-primary: #ffffff;          /* White - bg-03 */
--bg-secondary: #fafafa;        /* Light Gray - bg-01 */
--border-color: #eceff1;        /* Light Gray - Dividers */
```

### Typography
```css
/* Font Family: Open Sans (from Figma) */
--font-family: "Open Sans", sans-serif;

/* Font Sizes & Weights */
--font-size-xs: 0.625rem;       /* 10px - Regular/10 */
--font-size-sm: 0.875rem;       /* 14px - Regular/14 */  
--font-size-base: 0.75rem;      /* 12px - Regular/12.18 */
--font-weight-regular: 400;     /* Regular */
--font-weight-bold: 700;        /* Bold/12 */

/* Line Heights */
--line-height-tight: 1;         /* 10px/12px for small text */
--line-height-base: 1.5;        /* 18px for 12px text */
```

### Spacing
```css
--spacing-xs: 0.25rem;        /* 4px */
--spacing-sm: 0.5rem;         /* 8px */
--spacing-md: 0.75rem;        /* 12px */
--spacing-lg: 1rem;           /* 16px */
--spacing-xl: 1.5rem;         /* 24px */
```

## Component Hierarchy

## 🟢 ATOMS

### 1. StatusBadge
**Purpose**: Display status information with colored background

**Props**:
```typescript
interface StatusBadgeProps {
  variant: 'new' | 'viewed' | 'review' | 'sent' | 'published' | 'complete' | 'confirmed' | 'draft' | 'none' | 'closed';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
```

**Variants**:
- `new` - Green background
- `viewed` - Blue background  
- `review` / `for-review` - Orange background
- `sent` - Blue background
- `published` - Orange background
- `complete` - Green background
- `confirmed` - Green background
- `draft` - Light blue background
- `none` - Gray background
- `closed` - Red background (for order status)

### 2. StatusIcon
**Purpose**: Small colored dot indicator

**Props**:
```typescript
interface StatusIconProps {
  status: 'active' | 'closed' | 'pending';
  size?: 'sm' | 'md';
}
```

### 3. Text
**Purpose**: Basic text element with typography variants

**Props**:
```typescript
interface TextProps {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'link';
  color?: 'primary' | 'secondary' | 'link' | 'success' | 'warning' | 'error';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  children: React.ReactNode;
  truncate?: boolean;
  onClick?: () => void;
}
```

### 4. Icon
**Purpose**: SVG icons

**Props**:
```typescript
interface IconProps {
  name: 'user' | 'phone' | 'email' | 'chevron-down' | 'eye' | 'edit' | 'more';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}
```

### 5. Avatar
**Purpose**: User profile picture or initials

**Props**:
```typescript
interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  fallback?: 'initials' | 'icon';
}
```

## 🔵 MOLECULES

### 1. OrderIdCell
**Purpose**: Display order ID with status indicator and metadata

**Props**:
```typescript
interface OrderIdCellProps {
  orderId: string;
  status: 'new' | 'open' | 'closed';
  date: string;
  time: string;
  onClick?: (orderId: string) => void;
}
```

**Composition**:
- StatusIcon (status color dot)
- Text (order ID - semibold)
- Text (status text)
- Text (date and time - caption)

### 2. DropdownCell
**Purpose**: Selectable dropdown field

**Props**:
```typescript
interface DropdownCellProps {
  value: string;
  placeholder?: string;
  options?: Array<{value: string, label: string}>;
  disabled?: boolean;
  onSelect?: (value: string) => void;
}
```

**Composition**:
- Text (selected value)
- Icon (chevron-down)

### 3. ContactCell
**Purpose**: Display contact information with avatar

**Props**:
```typescript
interface ContactCellProps {
  name: string;
  avatar?: string;
  showAvatar?: boolean;
  onClick?: () => void;
}
```

**Composition**:
- Avatar (optional)
- Text (contact name)

### 4. ContactInfoCell
**Purpose**: Display contact details (email/phone)

**Props**:
```typescript
interface ContactInfoCellProps {
  type: 'email' | 'phone' | 'text';
  value: string;
  clickable?: boolean;
  onClick?: () => void;
}
```

**Composition**:
- Text (with link styling if clickable)

### 5. StatusCell
**Purpose**: Display status badge in table cell

**Props**:
```typescript
interface StatusCellProps {
  status: string;
  variant: StatusBadgeProps['variant'];
}
```

**Composition**:
- StatusBadge

### 6. TableHeaderCell
**Purpose**: Column header with sorting capability

**Props**:
```typescript
interface TableHeaderCellProps {
  children: React.ReactNode;
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | null;
  onSort?: () => void;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
}
```

**Composition**:
- Text (header title)
- Icon (sort indicator - optional)

## 🟡 ORGANISMS

### 1. TableRow
**Purpose**: Complete table row with all cells

**Props**:
```typescript
interface TableRowProps {
  data: {
    id: string;
    orderId: string;
    orderStatus: 'new' | 'open' | 'closed';
    orderDate: string;
    serviceAdvisor: string;
    technician: string;
    customer: string;
    contactInfo: string;
    contactType: 'email' | 'phone' | 'text';
    media: string;
    inspections: string;
    estimates: string;
    payments: string;
  };
  onRowClick?: (rowData: any) => void;
  onCellClick?: (cellType: string, value: any) => void;
  selectable?: boolean;
  selected?: boolean;
}
```

**Composition**:
- OrderIdCell
- DropdownCell (Service Advisor)
- DropdownCell (Technician) 
- ContactCell (Customer)
- ContactInfoCell (Contact Info)
- StatusCell (Media)
- StatusCell (Inspections)
- StatusCell (Estimates)
- StatusCell (Payments)
- Icon (row actions)

### 2. TableHeader
**Purpose**: Complete table header row

**Props**:
```typescript
interface TableHeaderProps {
  columns: Array<{
    key: string;
    label: string;
    sortable?: boolean;
    width?: string | number;
    align?: 'left' | 'center' | 'right';
  }>;
  sortConfig?: {
    key: string;
    direction: 'asc' | 'desc';
  };
  onSort?: (key: string) => void;
}
```

**Composition**:
- Multiple TableHeaderCell components

### 3. RepairOrdersTable
**Purpose**: Complete table component

**Props**:
```typescript
interface RepairOrdersTableProps {
  data: RepairOrderData[];
  loading?: boolean;
  error?: string;
  pagination?: {
    current: number;
    total: number;
    pageSize: number;
    onPageChange: (page: number) => void;
  };
  sorting?: {
    key: string;
    direction: 'asc' | 'desc';
  };
  onSort?: (key: string, direction: 'asc' | 'desc') => void;
  onRowClick?: (row: RepairOrderData) => void;
  selectable?: boolean;
  selectedRows?: string[];
  onSelectionChange?: (selectedIds: string[]) => void;
  actions?: {
    label: string;
    onClick: (selectedRows: RepairOrderData[]) => void;
  }[];
}
```

**Composition**:
- TableHeader
- Multiple TableRow components
- Loading/Error states
- Pagination (if provided)

## Data Types

```typescript
interface RepairOrderData {
  id: string;
  orderId: string;
  orderStatus: 'new' | 'open' | 'closed';
  orderDate: string;
  orderTime: string;
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
    status: StatusBadgeProps['variant'];
    label: string;
  };
  inspections: {
    status: StatusBadgeProps['variant'];
    label: string;
  };
  estimates: {
    status: StatusBadgeProps['variant'];
    label: string;
  };
  payments: {
    status: StatusBadgeProps['variant'];
    label: string;
  };
}
```

## Implementation Priority

### Phase 1 - Atoms
1. ✅ StatusBadge (highest usage)
2. ✅ Text
3. ✅ Icon
4. ✅ StatusIcon
5. ✅ Avatar

### Phase 2 - Molecules  
1. ✅ StatusCell (reuses StatusBadge)
2. ✅ ContactCell
3. ✅ DropdownCell
4. ✅ OrderIdCell
5. ✅ TableHeaderCell

### Phase 3 - Organisms
1. ✅ TableRow
2. ✅ TableHeader
3. ✅ RepairOrdersTable

## Accessibility Considerations

- All interactive elements need proper ARIA labels
- Table should have proper table markup with headers
- Status colors should not be the only way to convey information
- Keyboard navigation support for dropdowns and sortable columns
- Screen reader support for status changes
- Focus management for table interactions

## Testing Requirements

- Unit tests for all atoms and molecules
- Integration tests for table functionality
- Visual regression tests for status badge variants
- Accessibility tests (screen reader, keyboard navigation)
- Performance tests with large datasets (1000+ rows)

## Notes

- Color values are approximated from visual analysis
- Exact spacing and typography will need to be confirmed with design tokens from Figma
- Consider virtualization for large datasets
- Status badge variants might need additional states not visible in current view
- Table should support responsive breakpoints