import type { Components, JSX } from "../types/components";

interface StatusIcon extends Components.StatusIcon, HTMLElement {}
export const StatusIcon: {
    prototype: StatusIcon;
    new (): StatusIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
