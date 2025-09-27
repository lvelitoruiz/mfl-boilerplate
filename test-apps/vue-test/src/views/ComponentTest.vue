<script setup lang="ts">
import { ref, onMounted } from 'vue'
// Components loaded dynamically via main.ts

// Define the components for better TypeScript support
declare module 'vue' {
  interface ComponentCustomProperties {
    'ui-button': any
    'ui-card': any
    'ui-card-header': any
    'ui-card-title': any
    'ui-card-content': any
    'ui-input': any
  }
}

// Component state
const inputValue = ref('')
const loading = ref(false)

// Components are initialized automatically via main.ts

// Event handlers
const handleButtonClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

const handleInputChange = (event: CustomEvent<string>) => {
  inputValue.value = event.detail
}
</script>

<template>
  <div class="component-test" style="padding: 2rem; font-family: sans-serif;">
    <h1>UI Library Vue Test</h1>
    
    <div style="margin-bottom: 2rem;">
      <h2>Buttons</h2>
      <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
        <ui-button variant="primary" @click="handleButtonClick">
          Primary
        </ui-button>
        <ui-button variant="secondary">
          Secondary
        </ui-button>
        <ui-button variant="outline">
          Outline
        </ui-button>
        <ui-button variant="ghost">
          Ghost
        </ui-button>
        <ui-button variant="destructive">
          Destructive
        </ui-button>
      </div>
      
      <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
        <ui-button size="sm">Small</ui-button>
        <ui-button size="md">Medium</ui-button>
        <ui-button size="lg">Large</ui-button>
      </div>
      
      <div style="display: flex; gap: 1rem;">
        <ui-button :loading="loading">
          {{ loading ? 'Loading...' : 'Click to Load' }}
        </ui-button>
        <ui-button disabled>Disabled</ui-button>
      </div>
    </div>

    <div style="margin-bottom: 2rem; max-width: 400px;">
      <h2>Card</h2>
      <ui-card>
        <ui-card-header>
          <ui-card-title>Vue Integration Test</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <p>This card component is working perfectly in Vue!</p>
          <p>Input value: {{ inputValue || 'No input yet' }}</p>
        </ui-card-content>
      </ui-card>
    </div>

    <div style="max-width: 300px;">
      <h2>Input</h2>
      <ui-input 
        label="Test Input"
        placeholder="Type something..."
        @ui-input="handleInputChange"
        :value="inputValue"
      />
      
      <br><br>
      
      <ui-input 
        label="Required Input"
        placeholder="This is required"
        required
        :error="!inputValue && inputValue !== ''"
        :error-message="!inputValue && inputValue !== '' ? 'This field is required' : ''"
      />
    </div>
  </div>
</template>

<style scoped>
.component-test {
  background-color: #f5f5f5;
  min-height: 100vh;
}
</style>