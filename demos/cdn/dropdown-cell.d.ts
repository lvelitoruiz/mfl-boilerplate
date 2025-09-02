import type { Components, JSX } from "../types/components";

interface DropdownCell extends Components.DropdownCell, HTMLElement {}
export const DropdownCell: {
    prototype: DropdownCell;
    new (): DropdownCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
