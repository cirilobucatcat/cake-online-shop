<template>
    <section id="hero" class="relative h-full overflow-hidden">
        <img 
            id="img-hero" 
            class="size-[20rem] md:size-[25rem] 2xl:size-[30rem] top-50 md:top-50 lg:top-50 xl:top-50 2xl:top-60 absolute-center"
            :src="heroImg" 
            alt="Hero Master Caker"
        >
        <template v-for="sparklesPlacement in sparklesPlacements">
            <Sparkle :class="`${sparklesPlacement} stroke-rose-500`" />
        </template>
        <h1 class="relative text-xl text-nowrap md:text-3xl lg:text-5xl xl:text-5xl font-bold font-bubblegum-sans text-shadow-md">
            <span id="text-hero-1" class="text-rose-600 absolute top-30 sm:top-30 md:top-30 lg:top-30 xl:top-35 2xl:top-40 bg-white/50 px-8 py-4 [clip-path:polygon(4%_0%,100%_1%,95%_100%,0%_100%)]">Freshly Baked Cakes</span>
            <span id="text-hero-2" class="text-teal-600 absolute top-50 md:top-55 lg:top-55 xl:top-60 2xl:top-65 right-0 md:right-20 bg-white/50 px-8 py-4 [clip-path:polygon(4%_0%,100%_1%,95%_100%,0%_100%)]">Delivered to Your Doorstep</span>
        </h1>
        <p id="subtext-hero" class="text-teal-600/75 top-[75%] md:top-[65%] lg:top-[80%] xl:top-[70%] 2xl:top-[65%]  text-center text-sm md:text-base xl:text-xl font-medium absolute-center w-[85%] md:w-none">Indulge in handcrafted cakes made with love, perfect for every occasion.</p>
        <button data-testid="btn-cta" id="btn-cta" class="absolute-center btn-hero top-[90%] lg:top-[90%] md:top-[75%] xl:top-[80%] 2xl:top-[75%] flex justify-center items-center space-x-2 xl:w-[200px] xl:h-[55px]">
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
let mm = gsap.matchMedia();

const breakpoints = [
    { query: '(max-width: 425px)', left: '20%', right: '20%' },
    { query: '(width: 640px)', left: '20%', right: '15%' },
    { query: '(width: 768px)', left: '20%', right: '15%' },
    { query: '(width: 1024px)', left: '15%', right: '15%' },
    { query: '(width: 1024px)', left: '15%', right: '15%' },
    { query: '(width: 1280px)', left: '25%', right: '18%' },
    { query: '(width >= 1440px)', left: '25%', right: '25%' },
];

onMounted(() => {

    timeline = gsap.timeline();

    breakpoints.forEach(({ query, left, right }) => {
        mm.add(query, () => {
            timeline
            .fromTo('#text-hero-1', { opacity: 0 }, { opacity: 1, duration: 2, left })
            .fromTo('#text-hero-2', { opacity: 0 }, { opacity: 1, duration: 2, right }, '<')
            .fromTo(
                '#img-hero',
                { scale: 0, display: 'block' },
                { duration: 2, scale: 1, ease: 'back.out' },
                '<'
            );
        });
    });

    setTimeout(() => timeline.kill(), 10_000)
})
</script>