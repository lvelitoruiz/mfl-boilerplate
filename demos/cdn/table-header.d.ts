import type { Components, JSX } from "../types/components";

interface TableHeader extends Components.TableHeader, HTMLElement {}
export const TableHeader: {
    prototype: TableHeader;
    new (): TableHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
