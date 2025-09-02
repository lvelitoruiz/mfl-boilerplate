import type { Components, JSX } from "../types/components";

interface UiAvatar extends Components.UiAvatar, HTMLElement {}
export const UiAvatar: {
    prototype: UiAvatar;
    new (): UiAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
