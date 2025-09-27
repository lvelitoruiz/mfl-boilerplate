import React from 'react';

// Define the web component custom events
export interface UiInputCustomEvent extends CustomEvent {
  detail: string;
}

export interface UiBlurCustomEvent extends CustomEvent {
  detail: void;
}

export interface UiFocusCustomEvent extends CustomEvent {
  detail: void;
}

// React component props interfaces
export interface UiButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export interface UiCardProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export interface UiCardHeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export interface UiCardTitleProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export interface UiCardContentProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export interface UiInputProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  error?: boolean;
  'error-message'?: string;
  onUiInput?: (event: UiInputCustomEvent) => void;
  onUiBlur?: (event: UiBlurCustomEvent) => void;
  onUiFocus?: (event: UiFocusCustomEvent) => void;
}

// React component declarations that map to web components
export declare const UiButton: React.ForwardRefExoticComponent<UiButtonProps & React.RefAttributes<HTMLElement>>;
export declare const UiCard: React.ForwardRefExoticComponent<UiCardProps & React.RefAttributes<HTMLElement>>;
export declare const UiCardHeader: React.ForwardRefExoticComponent<UiCardHeaderProps & React.RefAttributes<HTMLElement>>;
export declare const UiCardTitle: React.ForwardRefExoticComponent<UiCardTitleProps & React.RefAttributes<HTMLElement>>;
export declare const UiCardContent: React.ForwardRefExoticComponent<UiCardContentProps & React.RefAttributes<HTMLElement>>;
export declare const UiInput: React.ForwardRefExoticComponent<UiInputProps & React.RefAttributes<HTMLElement>>;

// Utility function to initialize the web components
export declare function defineCustomElements(): void;