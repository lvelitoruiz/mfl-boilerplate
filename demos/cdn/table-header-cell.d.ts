import type { Components, JSX } from "../types/components";

interface TableHeaderCell extends Components.TableHeaderCell, HTMLElement {}
export const TableHeaderCell: {
    prototype: TableHeaderCell;
    new (): TableHeaderCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
