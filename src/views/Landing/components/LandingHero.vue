<template>
    <section class="relative h-screen overflow-x-hidden">
        <img id="img-hero" class="size-[40rem] top-95 absolute-center" :src="heroImg" alt="Hero Master Caker">
        <template v-for="sparklesPlacement in sparklesPlacements">
            <Sparkle :class="`${sparklesPlacement} stroke-rose-500`" />
        </template>

        <h1 class="relative text-6xl font-bold font-bubblegum-sans text-shadow-md">
            <span id="text-hero-1" class="text-rose-600 absolute top-60 bg-white/50 px-8 py-4 [clip-path:polygon(4%_0%,100%_1%,95%_100%,0%_100%)]">Freshly Baked Cakes</span>
            <span id="text-hero-2" class="text-yellow-800 absolute top-90 bg-white/50 px-8 py-4 [clip-path:polygon(4%_0%,100%_1%,95%_100%,0%_100%)]">Delivered to Your Doorstep</span>
        </h1>
        <p id="subtext-hero" class="text-rose-600/75 font-medium absolute-center">Indulge in handcrafted cakes made with love, perfect for every occasion.</p>
        <button id="btn-cta" class="absolute-center top-190 btn-hero flex justify-center items-center space-x-2">
            <ShoppingCartIcon class="size-6" />
            <span>Shop Now</span>
        </button>
    </section>
</template>
<script lang="ts" setup>
import heroImg from '@/assets/images/hero.png'
import Sparkle from '@/components/Sparkle.vue';
import { ShoppingCartIcon } from '@heroicons/vue/16/solid';
import gsap from 'gsap';
import { onMounted, onUnmounted } from 'vue';

const sparklesPlacements: string[] = [
    'animate-ping absolute left-100 top-80 !size-3',
    'animate-ping absolute left-150 top-100 !size-4',
    'animate-ping absolute left-120 top-50',
    'animate-ping absolute left-140 top-150 !size-8',
    'animate-ping absolute right-120 top-150 !size-3',
    'animate-ping absolute left-1/2 top-10',
    'animate-ping absolute right-100 top-40',
    'animate-ping absolute right-160 top-50',
    'animate-ping absolute right-140 top-120',
]

let timeline: GSAPTimeline;


onMounted(() => {
    timeline = gsap.timeline();
    timeline.fromTo('#text-hero-1', { opacity:0, x: '0%' }, { opacity: 1, duration: 2, x: '100%' })
        .fromTo('#text-hero-2', { x: '200%' }, { duration: 2, x: '110%'  }, '<')
        .fromTo('#img-hero', { scale: 0, display: 'block' }, { duration: 2, scale: 1  }, '<')
        .fromTo('#subtext-hero', { top: '75%', opacity: 0 }, { opacity: 1, top: '74%'})
        .fromTo('#btn-cta', { top: '82%', opacity: 0 }, { opacity: 1, top: '80%'})
})


onUnmounted(() => {
    timeline.kill()
})



</script>