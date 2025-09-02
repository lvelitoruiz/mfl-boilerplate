import type { Components, JSX } from "../types/components";

interface OrderIdCell extends Components.OrderIdCell, HTMLElement {}
export const OrderIdCell: {
    prototype: OrderIdCell;
    new (): OrderIdCell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
