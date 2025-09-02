import type { Components, JSX } from "../types/components";

interface RepairOrdersTable extends Components.RepairOrdersTable, HTMLElement {}
export const RepairOrdersTable: {
    prototype: RepairOrdersTable;
    new (): RepairOrdersTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
