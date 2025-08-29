import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineCustomElements } from 'ui-library/loader'

import App from './App.vue'
import router from './router'

// Initialize Stencil web components with specific options
defineCustomElements(window, {
  resourcesUrl: '/ui-library/'
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
