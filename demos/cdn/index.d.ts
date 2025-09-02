/* UiLibrary custom elements */
export { ContactCell as ContactCell } from '../types/components/molecules/contact-cell/contact-cell';
export { defineCustomElement as defineCustomElementContactCell } from './contact-cell';
export { ContactInfoCell as ContactInfoCell } from '../types/components/molecules/contact-info-cell/contact-info-cell';
export { defineCustomElement as defineCustomElementContactInfoCell } from './contact-info-cell';
export { DropdownCell as DropdownCell } from '../types/components/molecules/dropdown-cell/dropdown-cell';
export { defineCustomElement as defineCustomElementDropdownCell } from './dropdown-cell';
export { MyComponent as MyComponent } from '../types/components/my-component/my-component';
export { defineCustomElement as defineCustomElementMyComponent } from './my-component';
export { OrderIdCell as OrderIdCell } from '../types/components/molecules/order-id-cell/order-id-cell';
export { defineCustomElement as defineCustomElementOrderIdCell } from './order-id-cell';
export { RepairOrdersTable as RepairOrdersTable } from '../types/components/organisms/repair-orders-table/repair-orders-table';
export { defineCustomElement as defineCustomElementRepairOrdersTable } from './repair-orders-table';
export { StatusBadge as StatusBadge } from '../types/components/atoms/status-badge/status-badge';
export { defineCustomElement as defineCustomElementStatusBadge } from './status-badge';
export { StatusCell as StatusCell } from '../types/components/molecules/status-cell/status-cell';
export { defineCustomElement as defineCustomElementStatusCell } from './status-cell';
export { StatusIcon as StatusIcon } from '../types/components/atoms/status-icon/status-icon';
export { defineCustomElement as defineCustomElementStatusIcon } from './status-icon';
export { TableHeader as TableHeader } from '../types/components/organisms/table-header/table-header';
export { defineCustomElement as defineCustomElementTableHeader } from './table-header';
export { TableHeaderCell as TableHeaderCell } from '../types/components/molecules/table-header-cell/table-header-cell';
export { defineCustomElement as defineCustomElementTableHeaderCell } from './table-header-cell';
export { TableRow as TableRow } from '../types/components/organisms/table-row/table-row';
export { defineCustomElement as defineCustomElementTableRow } from './table-row';
export { Avatar as UiAvatar } from '../types/components/atoms/avatar/avatar';
export { defineCustomElement as defineCustomElementUiAvatar } from './ui-avatar';
export { Icon as UiIcon } from '../types/components/atoms/icon/icon';
export { defineCustomElement as defineCustomElementUiIcon } from './ui-icon';
export { Text as UiText } from '../types/components/atoms/text/text';
export { defineCustomElement as defineCustomElementUiText } from './ui-text';

/**
 * Get the base path to where the assets can be found. Use "setAssetPath(path)"
 * if the path needs to be customized.
 */
export declare const getAssetPath: (path: string) => string;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

/**
 * Used to specify a nonce value that corresponds with an application's CSP.
 * When set, the nonce will be added to all dynamically created script and style tags at runtime.
 * Alternatively, the nonce value can be set on a meta tag in the DOM head
 * (<meta name="csp-nonce" content="{ nonce value here }" />) which
 * will result in the same behavior.
 */
export declare const setNonce: (nonce: string) => void

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
