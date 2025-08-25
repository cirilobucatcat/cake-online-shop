import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(ScrollTrigger, Draggable);
createApp(App).mount('#app')
