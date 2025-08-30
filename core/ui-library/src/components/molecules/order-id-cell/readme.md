# order-id-cell



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description | Type                          | Default     |
| --------- | ---------- | ----------- | ----------------------------- | ----------- |
| `date`    | `date`     |             | `string`                      | `''`        |
| `onClick` | `on-click` |             | `(orderId: string) => void`   | `undefined` |
| `orderId` | `order-id` |             | `string`                      | `''`        |
| `status`  | `status`   |             | `"closed" \| "new" \| "open"` | `'open'`    |
| `time`    | `time`     |             | `string`                      | `''`        |


## Dependencies

### Depends on

- [status-icon](../../atoms/status-icon)
- [ui-text](../../atoms/text)

### Graph
```mermaid
graph TD;
  order-id-cell --> status-icon
  order-id-cell --> ui-text
  style order-id-cell fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
