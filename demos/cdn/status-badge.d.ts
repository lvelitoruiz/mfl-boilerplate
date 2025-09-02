import type { Components, JSX } from "../types/components";

interface StatusBadge extends Components.StatusBadge, HTMLElement {}
export const StatusBadge: {
    prototype: StatusBadge;
    new (): StatusBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
