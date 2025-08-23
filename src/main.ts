import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
createApp(App).mount('#app')
