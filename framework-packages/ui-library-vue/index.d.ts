import { DefineComponent } from 'vue';

// Props interfaces for Vue components
export interface UiButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
}

export interface UiCardProps {}

export interface UiCardHeaderProps {}

export interface UiCardTitleProps {}

export interface UiCardContentProps {}

export interface UiInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  error?: boolean;
  'error-message'?: string;
}

// Vue component declarations
export declare const UiButton: DefineComponent<UiButtonProps>;
export declare const UiCard: DefineComponent<UiCardProps>;
export declare const UiCardHeader: DefineComponent<UiCardHeaderProps>;
export declare const UiCardTitle: DefineComponent<UiCardTitleProps>;
export declare const UiCardContent: DefineComponent<UiCardContentProps>;
export declare const UiInput: DefineComponent<UiInputProps>;

// Utility function to initialize web components
export declare function defineCustomElements(): void;