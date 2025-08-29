# ui-input



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description      | Type                                                                        | Default  |
| -------------- | --------------- | ---------------- | --------------------------------------------------------------------------- | -------- |
| `disabled`     | `disabled`      | Disabled state   | `boolean`                                                                   | `false`  |
| `error`        | `error`         | Error state      | `boolean`                                                                   | `false`  |
| `errorMessage` | `error-message` | Error message    | `string`                                                                    | `''`     |
| `inputId`      | `input-id`      | Input ID         | `string`                                                                    | `''`     |
| `label`        | `label`         | Label text       | `string`                                                                    | `''`     |
| `name`         | `name`          | Input name       | `string`                                                                    | `''`     |
| `placeholder`  | `placeholder`   | Placeholder text | `string`                                                                    | `''`     |
| `required`     | `required`      | Required field   | `boolean`                                                                   | `false`  |
| `type`         | `type`          | Input type       | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'` |
| `value`        | `value`         | Input value      | `string`                                                                    | `''`     |


## Events

| Event     | Description        | Type                  |
| --------- | ------------------ | --------------------- |
| `uiBlur`  | Input blur event   | `CustomEvent<void>`   |
| `uiFocus` | Input focus event  | `CustomEvent<void>`   |
| `uiInput` | Input change event | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
