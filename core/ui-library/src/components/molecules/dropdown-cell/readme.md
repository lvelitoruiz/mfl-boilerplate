# dropdown-cell



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type               | Default       |
| ------------- | ------------- | ----------- | ------------------ | ------------- |
| `disabled`    | `disabled`    |             | `boolean`          | `false`       |
| `options`     | `options`     |             | `DropdownOption[]` | `[]`          |
| `placeholder` | `placeholder` |             | `string`           | `'Select...'` |
| `value`       | `value`       |             | `string`           | `''`          |


## Events

| Event            | Description | Type                  |
| ---------------- | ----------- | --------------------- |
| `dropdownChange` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [table-row](../../organisms/table-row)

### Depends on

- [ui-text](../../atoms/text)
- [ui-icon](../../atoms/icon)

### Graph
```mermaid
graph TD;
  dropdown-cell --> ui-text
  dropdown-cell --> ui-icon
  table-row --> dropdown-cell
  style dropdown-cell fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
