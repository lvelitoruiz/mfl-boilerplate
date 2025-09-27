# status-cell



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                                                                                                                   | Default  |
| --------- | --------- | ----------- | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| `status`  | `status`  |             | `string`                                                                                                               | `''`     |
| `variant` | `variant` |             | `"closed" \| "complete" \| "confirmed" \| "draft" \| "new" \| "none" \| "published" \| "review" \| "sent" \| "viewed"` | `'none'` |


## Dependencies

### Used by

 - [table-row](../../organisms/table-row)

### Depends on

- [status-badge](../../atoms/status-badge)

### Graph
```mermaid
graph TD;
  status-cell --> status-badge
  table-row --> status-cell
  style status-cell fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
