# repair-orders-table



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                | Default |
| --------------- | ---------------- | ----------- | ------------------- | ------- |
| `data`          | `data`           |             | `RepairOrderData[]` | `[]`    |
| `loading`       | `loading`        |             | `boolean`           | `false` |
| `sortColumn`    | `sort-column`    |             | `string`            | `''`    |
| `sortDirection` | `sort-direction` |             | `"asc" \| "desc"`   | `null`  |


## Events

| Event        | Description | Type                                                                    |
| ------------ | ----------- | ----------------------------------------------------------------------- |
| `cellClick`  |             | `CustomEvent<{ cellType: string; value: any; data: RepairOrderData; }>` |
| `rowClick`   |             | `CustomEvent<RepairOrderData>`                                          |
| `sortChange` |             | `CustomEvent<{ column: string; direction: "asc" \| "desc"; }>`          |


## Dependencies

### Depends on

- [table-header](../table-header)
- [table-row](../table-row)

### Graph
```mermaid
graph TD;
  repair-orders-table --> table-header
  repair-orders-table --> table-row
  table-header --> ui-icon
  table-row --> order-id-cell
  table-row --> dropdown-cell
  table-row --> contact-cell
  table-row --> contact-info-cell
  table-row --> status-cell
  table-row --> ui-icon
  order-id-cell --> status-icon
  dropdown-cell --> ui-text
  dropdown-cell --> ui-icon
  contact-cell --> ui-avatar
  contact-cell --> ui-text
  contact-info-cell --> ui-text
  status-cell --> status-badge
  style repair-orders-table fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
