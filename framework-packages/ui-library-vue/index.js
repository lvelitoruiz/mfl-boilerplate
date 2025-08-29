import { defineComponent, h, onMounted } from 'vue';
import { defineCustomElements as defineElements } from 'ui-library/loader';

// Initialize web components
let componentsInitialized = false;
const initializeComponents = () => {
  if (!componentsInitialized) {
    defineElements();
    componentsInitialized = true;
  }
};

// Helper function to convert Vue props to web component attributes
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

// Vue wrapper components
export const UiButton = defineComponent({
  name: 'UiButton',
  props: {
    variant: String,
    size: String,
    loading: Boolean,
    disabled: Boolean
  },
  setup(props, { slots }) {
    onMounted(() => {
      initializeComponents();
    });

    return () => h('ui-button', convertProps(props), slots.default?.());
  }
});

export const UiCard = defineComponent({
  name: 'UiCard',
  setup(props, { slots }) {
    onMounted(() => {
      initializeComponents();
    });

    return () => h('ui-card', convertProps(props), slots.default?.());
  }
});

export const UiCardHeader = defineComponent({
  name: 'UiCardHeader',
  setup(props, { slots }) {
    onMounted(() => {
      initializeComponents();
    });

    return () => h('ui-card-header', convertProps(props), slots.default?.());
  }
});

export const UiCardTitle = defineComponent({
  name: 'UiCardTitle',
  setup(props, { slots }) {
    onMounted(() => {
      initializeComponents();
    });

    return () => h('ui-card-title', convertProps(props), slots.default?.());
  }
});

export const UiCardContent = defineComponent({
  name: 'UiCardContent',
  setup(props, { slots }) {
    onMounted(() => {
      initializeComponents();
    });

    return () => h('ui-card-content', convertProps(props), slots.default?.());
  }
});

export const UiInput = defineComponent({
  name: 'UiInput',
  props: {
    label: String,
    placeholder: String,
    value: String,
    required: Boolean,
    error: Boolean,
    'error-message': String
  },
  setup(props) {
    onMounted(() => {
      initializeComponents();
    });

    return () => h('ui-input', convertProps(props));
  }
});

// Export the initialize function
export const defineCustomElements = () => {
  initializeComponents();
};