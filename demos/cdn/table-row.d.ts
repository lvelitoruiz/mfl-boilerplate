import type { Components, JSX } from "../types/components";

interface TableRow extends Components.TableRow, HTMLElement {}
export const TableRow: {
    prototype: TableRow;
    new (): TableRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
