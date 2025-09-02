import type { Components, JSX } from "../types/components";

interface ContactInfoCell extends Components.ContactInfoCell, HTMLElement {}
export const ContactInfoCell: {
    prototype: ContactInfoCell;
    new (): ContactInfoCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
