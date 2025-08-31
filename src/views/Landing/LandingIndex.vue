<script setup lang="ts">
import LandingHero from './components/LandingHero.vue'
import LandingFeatures from './components/LandingFeatures.vue';
import LandingTestimonials from './components/LandingTestimonials.vue';
import WaveBlob from '@/components/WaveBlob.vue';
import { ArrowUpIcon } from '@heroicons/vue/16/solid';
import { computed } from 'vue';
import { useScroll } from '@/composables/scroll';
import LandingAbout from './components/LandingAbout.vue';

const { scrollY } = useScroll();
const isBeyondHeroSection = computed<boolean>(() => scrollY.value > 1000)

</script>

<template>
    <div class="relative w-full h-screen">
        <a 
            href="#" 
            role="button"
            v-show="isBeyondHeroSection"
            class="transition-all duration-300 fixed bottom-10 right-10 z-50 bg-slate-50 p-2 rounded-full"
        >
            <ArrowUpIcon class="size-8" />
        </a>
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
        <LandingAbout />
        <WaveBlob 
            svg-class="fill-rose-600 dark:fill-rose-50" 
            container-class="bg-teal-600" 
        />
        <LandingTestimonials />
        <footer class="bg-teal-600 flex items-center justify-center">
            Master Baker &copy; {{ new Date().getFullYear() }}
        </footer>
    </div>
</template>