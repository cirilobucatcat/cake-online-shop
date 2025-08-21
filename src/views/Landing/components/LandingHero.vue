<template>
    <section class="relative h-screen">
        <img class="size-[40rem] top-95 absolute-center" :src="heroImg" alt="Hero Master Caker">
        <template v-for="sparklesPlacement in sparklesPlacements">
            <Sparkle :class="`${sparklesPlacement}`" />
        </template>

        <h1 class="relative text-6xl font-bold font-bubblegum-sans text-shadow-md">
            <span class="text-rose-600 absolute left-130 top-60">Freshly Baked Cakes</span>
            <span class="text-yellow-800 absolute left-210 top-90">Delivered to Your Doorstep</span>
        </h1>
        <p class="text-yellow-700/75 font-medium absolute-center top-165">Indulge in handcrafted cakes made with love, perfect for every occasion.</p>
        <button class="absolute-center top-190 btn-hero animate-bounce">Shop Cakes Now</button>
    </section>
</template>
<script lang="ts" setup>
import heroImg from '@/assets/images/hero.png'
import Sparkle from '@/components/Sparkle.vue';

const sparklesPlacements: string[] = [
    'animate-ping absolute left-100 top-80',
    'animate-ping absolute left-150 top-100',
    'animate-ping absolute left-120 top-50',
    'animate-ping absolute left-140 top-150',
    'animate-ping absolute right-120 top-150',
    'animate-ping absolute left-1/2 top-10',
    'animate-ping absolute right-100 top-40',
    'animate-ping absolute right-160 top-50',
    'animate-ping absolute right-140 top-120',
]
</script>