import type { Components, JSX } from "../types/components";

interface ContactCell extends Components.ContactCell, HTMLElement {}
export const ContactCell: {
    prototype: ContactCell;
    new (): ContactCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
