import type { Components, JSX } from "../types/components";

interface UiIcon extends Components.UiIcon, HTMLElement {}
export const UiIcon: {
    prototype: UiIcon;
    new (): UiIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
