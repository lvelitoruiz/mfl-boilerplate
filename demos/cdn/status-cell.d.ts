import type { Components, JSX } from "../types/components";

interface StatusCell extends Components.StatusCell, HTMLElement {}
export const StatusCell: {
    prototype: StatusCell;
    new (): StatusCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
