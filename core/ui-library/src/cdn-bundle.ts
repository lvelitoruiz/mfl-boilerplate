// CDN Bundle Entry Point - Single File with All Components
// Import individual components from custom elements build
export { UiButton } from '../dist/components/ui-button';
export { UiCard } from '../dist/components/ui-card';
export { UiCardHeader } from '../dist/components/ui-card-header';
export { UiCardTitle } from '../dist/components/ui-card-title';
export { UiCardContent } from '../dist/components/ui-card-content';
export { UiInput } from '../dist/components/ui-input';

// Auto-define all custom elements immediately
import { UiButton } from '../dist/components/ui-button';
import { UiCard } from '../dist/components/ui-card';
import { UiCardHeader } from '../dist/components/ui-card-header';
import { UiCardTitle } from '../dist/components/ui-card-title';
import { UiCardContent } from '../dist/components/ui-card-content';
import { UiInput } from '../dist/components/ui-input';

// Define all components immediately when script loads
const initializeUILibrary = () => {
  if (typeof window !== 'undefined' && typeof customElements !== 'undefined') {
    // Define all components
    if (!customElements.get('ui-button')) customElements.define('ui-button', UiButton);
    if (!customElements.get('ui-card')) customElements.define('ui-card', UiCard);
    if (!customElements.get('ui-card-header')) customElements.define('ui-card-header', UiCardHeader);
    if (!customElements.get('ui-card-title')) customElements.define('ui-card-title', UiCardTitle);
    if (!customElements.get('ui-card-content')) customElements.define('ui-card-content', UiCardContent);
    if (!customElements.get('ui-input')) customElements.define('ui-input', UiInput);
    
    // Expose global API
    (window as any).UILibrary = {
      version: '1.0.0',
      initialized: true,
      components: {
        UiButton,
        UiCard,
        UiCardHeader,
        UiCardTitle,
        UiCardContent,
        UiInput
      }
    };
    
    console.log('UI Library loaded successfully via CDN');
    return true;
  }
  return false;
};

// Auto-initialize when loaded
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeUILibrary);
  } else {
    initializeUILibrary();
  }
}

// Export for manual initialization
export { initializeUILibrary };