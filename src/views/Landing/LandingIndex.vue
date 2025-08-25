<script setup lang="ts">
import LandingHero from './components/LandingHero.vue'
import LandingFeatures from './components/LandingFeatures.vue';
import LandingTestimonials from './components/LandingTestimonials.vue';
import WaveBlob from '@/components/WaveBlob.vue';
</script>

<template>
    <LandingHero />
    <WaveBlob 
        svg-class="fill-rose-200 dark:fill-rose-600" 
        container-class="bg-rose-50" 
    />
    <LandingFeatures />
    <WaveBlob 
        svg-class="fill-teal-600 dark:fill-teal-50" 
        container-class="bg-rose-200" 
    />
    <LandingTestimonials />
</template>