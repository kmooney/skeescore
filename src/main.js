import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { gameState } from './models/gameState.js'

const app = createApp(App)
app.provide('gameState', gameState)
app.mount('#app')

import { colorCycle } from './colorCycle.js'

requestAnimationFrame(colorCycle);

