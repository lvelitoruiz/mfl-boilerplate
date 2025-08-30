import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Load CSS styles dynamically
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = '/ui-library/ui-library.css'
document.head.appendChild(link)

import App from './App.vue'
import router from './router'

// Load web components from static files
const script = document.createElement('script')
script.src = '/ui-library/ui-library.esm.js'
script.type = 'module'
document.head.appendChild(script)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
