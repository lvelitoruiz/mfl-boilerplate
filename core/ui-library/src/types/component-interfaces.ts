// Base component props that all components should extend
export interface ComponentBaseProps {
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Test ID for automated testing
   */
  testId?: string;
}

// Button component interfaces
export interface ButtonProps extends ComponentBaseProps {
  /**
   * Button visual variant
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Loading state with spinner
   */
  loading?: boolean;
  
  /**
   * Button type attribute
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;
  
  /**
   * ARIA described by ID reference
   */
  ariaDescribedby?: string;
}

// Input component interfaces
export interface InputProps extends ComponentBaseProps {
  /**
   * Input type
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  
  /**
   * Input value
   */
  value?: string;
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Required field indicator
   */
  required?: boolean;
  
  /**
   * Input name attribute
   */
  name?: string;
  
  /**
   * Input ID for label association
   */
  inputId?: string;
  
  /**
   * Error state indicator
   */
  error?: boolean;
  
  /**
   * Error message text
   */
  errorMessage?: string;
  
  /**
   * Input label text
   */
  label?: string;
}

// Card component interfaces
export interface CardProps extends ComponentBaseProps {
  /**
   * ARIA label for the card region
   */
  ariaLabel?: string;
  
  /**
   * ARIA labelledby ID reference
   */
  ariaLabelledby?: string;
}

// Event interfaces for type safety
export interface UiInputEvent {
  detail: string;
}

export interface UiFocusEvent {
  detail: void;
}

export interface UiBlurEvent {
  detail: void;
}

// Component event maps for framework wrappers
export interface ComponentEventMap {
  'uiInput': UiInputEvent;
  'uiFocus': UiFocusEvent;
  'uiBlur': UiBlurEvent;
}