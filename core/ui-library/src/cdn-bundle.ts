// CDN Bundle Entry Point - Single File with All Components
// This file will be updated as new components are added

// Define all components immediately when script loads
const initializeUILibrary = () => {
  if (typeof window !== 'undefined' && typeof customElements !== 'undefined') {
    // Expose global API
    (window as any).UILibrary = {
      version: '1.0.0',
      initialized: true,
      components: {}
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