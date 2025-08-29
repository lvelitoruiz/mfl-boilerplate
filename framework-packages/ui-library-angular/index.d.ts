import { Component, Input, Output, EventEmitter } from '@angular/core';

// Props interfaces for Angular components
export interface UiButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
}

export interface UiInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
}

// Angular component declarations
export declare class UiButtonComponent {
  variant: string;
  size: string;
  loading: boolean;
  disabled: boolean;
}

export declare class UiCardComponent {}

export declare class UiCardHeaderComponent {}

export declare class UiCardTitleComponent {}

export declare class UiCardContentComponent {}

export declare class UiInputComponent {
  label: string;
  placeholder: string;
  value: string;
  required: boolean;
  error: boolean;
  errorMessage: string;
  uiInput: EventEmitter<string>;
  uiBlur: EventEmitter<void>;
  uiFocus: EventEmitter<void>;
}

// Angular module
export declare class UiLibraryModule {}

// Utility function
export declare function defineCustomElements(): void;