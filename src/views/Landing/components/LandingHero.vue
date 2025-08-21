<template>
    <section class="relative h-[calc(100%-200px)] overflow-hidden">
        <img id="img-hero" class="size-[20rem] md:size-[30rem] xl:size-[35rem] top-90 absolute-center" :src="heroImg" alt="Hero Master Caker">
        <template v-for="sparklesPlacement in sparklesPlacements">
            <Sparkle :class="`${sparklesPlacement} stroke-rose-500`" />
        </template>
        <h1 class="relative text-2xl md:text-6xl font-bold font-bubblegum-sans text-shadow-md">
            <span id="text-hero-1" class="text-rose-600 absolute top-60 bg-white/50 px-8 py-4 [clip-path:polygon(4%_0%,100%_1%,95%_100%,0%_100%)]">Freshly Baked Cakes</span>
            <span id="text-hero-2" class="text-teal-600 absolute top-80 md:top-90 right-0 md:right-20  bg-white/50 px-8 py-4 [clip-path:polygon(4%_0%,100%_1%,95%_100%,0%_100%)]">Delivered to Your Doorstep</span>
        </h1>
        <p id="subtext-hero" class="text-teal-600/75 top-[85%] font-medium absolute-center">Indulge in handcrafted cakes made with love, perfect for every occasion.</p>
        <button data-testid="btn-cta" id="btn-cta" class="absolute-center btn-hero top-[93%] flex justify-center items-center space-x-2 w-[200px] h-[55px]">
            <ShoppingCartIcon class="size-6" />
            <span>Shop Now</span>
        </button>
    </section>
</template>
<script lang="ts" setup>
import gsap from 'gsap';
import heroImg from '@/assets/images/hero.png'
import Sparkle from '@/components/Sparkle.vue';
import { ShoppingCartIcon } from '@heroicons/vue/16/solid';
import { onMounted } from 'vue';

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

    timeline.fromTo('#text-hero-1', { opacity: 0 }, { opacity: 1, duration: 2, left: '25%' })
        .fromTo('#text-hero-2', { opacity: 0 }, { opacity: 1, duration: 2, right: '25%'  }, '<')
        .fromTo('#img-hero', { scale: 0, display: 'block' }, { duration: 2, scale: 1, ease: 'back.out'  }, '<')

    setTimeout(() => timeline.kill(), 10_000)

})
    
</script>