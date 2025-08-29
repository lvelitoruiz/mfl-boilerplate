import React, { forwardRef } from 'react';
import { defineCustomElements as defineElements } from '../../core/ui-library/dist/esm/loader.js';

// Initialize web components once globally
let componentsInitialized = false;
const initializeComponents = () => {
  if (typeof window !== 'undefined' && !componentsInitialized) {
    defineElements(window);
    componentsInitialized = true;
  }
};

// Initialize immediately if window is available
if (typeof window !== 'undefined') {
  initializeComponents();
}

// Helper function to convert React props to web component attributes
const convertProps = (props) => {
  const webComponentProps = { ...props };
  
  // Convert boolean props to string attributes for web components
  if (typeof webComponentProps.loading === 'boolean') {
    webComponentProps.loading = webComponentProps.loading ? 'true' : undefined;
  }
  if (typeof webComponentProps.disabled === 'boolean') {
    webComponentProps.disabled = webComponentProps.disabled ? 'true' : undefined;
  }
  if (typeof webComponentProps.required === 'boolean') {
    webComponentProps.required = webComponentProps.required ? 'true' : undefined;
  }
  if (typeof webComponentProps.error === 'boolean') {
    webComponentProps.error = webComponentProps.error ? 'true' : undefined;
  }

  return webComponentProps;
};

// React wrapper components
export const UiButton = forwardRef((props, ref) => {
  const webComponentProps = convertProps(props);
  return React.createElement('ui-button', { ...webComponentProps, ref }, props.children);
});

export const UiCard = forwardRef((props, ref) => {
  const webComponentProps = convertProps(props);
  return React.createElement('ui-card', { ...webComponentProps, ref }, props.children);
});

export const UiCardHeader = forwardRef((props, ref) => {
  const webComponentProps = convertProps(props);
  return React.createElement('ui-card-header', { ...webComponentProps, ref }, props.children);
});

export const UiCardTitle = forwardRef((props, ref) => {
  const webComponentProps = convertProps(props);
  return React.createElement('ui-card-title', { ...webComponentProps, ref }, props.children);
});

export const UiCardContent = forwardRef((props, ref) => {
  const webComponentProps = convertProps(props);
  return React.createElement('ui-card-content', { ...webComponentProps, ref }, props.children);
});

export const UiInput = forwardRef((props, ref) => {
  const webComponentProps = convertProps(props);
  return React.createElement('ui-input', { ...webComponentProps, ref });
});

// Export the initialize function
export const defineCustomElements = () => {
  initializeComponents();
};

UiButton.displayName = 'UiButton';
UiCard.displayName = 'UiCard';
UiCardHeader.displayName = 'UiCardHeader';
UiCardTitle.displayName = 'UiCardTitle';
UiCardContent.displayName = 'UiCardContent';
UiInput.displayName = 'UiInput';