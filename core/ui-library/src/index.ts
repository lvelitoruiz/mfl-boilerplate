/**
 * @fileoverview entry point for your component library
 *
 * This is the entry point for your component library. Use this file to export utilities,
 * constants or data structure that accompany your components.
 *
 * DO NOT use this file to export your components. Instead, use the recommended approaches
 * to consume components of this package as outlined in the `README.md`.
 */

export { format } from './utils/utils';
export type * from './components.d.ts';

// Export component types will be added as components are implemented

// Export design tokens - types available but JS exports commented until needed
// export { designTokens } from './tokens/design-tokens';
// export type { DesignTokens, ColorPalette, TypographyScale, SpacingScale, BreakpointScale } from './tokens/design-tokens';

// Export component interfaces - will be added as components are implemented
// export type {
//   ComponentBaseProps,
// } from './types/component-interfaces';

// Export the custom loader for framework integrations
export { defineCustomElements } from './loader/custom-loader';
