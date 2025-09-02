import type { Components, JSX } from "../types/components";

interface UiText extends Components.UiText, HTMLElement {}
export const UiText: {
    prototype: UiText;
    new (): UiText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
