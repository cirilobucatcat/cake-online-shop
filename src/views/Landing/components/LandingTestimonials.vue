<template>
    <section id="testimonials" class="bg-teal-600 py-4 w-full">
        <h3 class="text-center text-rose-200 text-5xl my-12 font-bold font-bubblegum-sans tracking-wider">
            Testimonials
        </h3>

        <div id="testimonials-container" class="relative flex items-center justify-center">
            <img :src="testimonialCake" class="2xl:w-[40%]" alt="Testimonial cake image" />
            <TestimonialCard 
                v-for="({ name, position, message, img, containerClass}, index) in testimonials"
                :id="`item-${index + 1}`"
                :name
                :position
                :message
                :img
                :class="containerClass"
            />
        </div>
    </section>
</template>
<script setup lang="ts">
import testimonialCake from '@/assets/images/testimonial.png'
import gsap from 'gsap';
import { onMounted } from 'vue';
import TestimonialCard from '@/components/TestimonialCard.vue';
import { testimonials } from '@/constants';

let timeline: GSAPTimeline;

onMounted(() => {
    timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#testimonials',
            pin: true,
            start: 'top top',
            scrub: 1,
		    snap: {
                snapTo:  'labels',
                duration: { min: 0.2, max: 3 }, 
                delay: 0.2,
                ease: 'power1.inOut'
		    }
        }
    })

    timeline.addLabel('start')
        .from('#testimonials-container img', { scale: 0, duration: 1, opacity: 0 })
        .addLabel('show')
        .from('#item-1', { scale: 0, opacity: 0 })
        .addLabel('show2')
        .from('#item-2', { scale: 0, opacity: 0 })
        .addLabel('show3')
        .from('#item-3', { scale: 0, opacity: 0 })
        .addLabel('show4')
        .from('#item-4', { scale: 0, opacity: 0 })
        .addLabel('show5');

})
</script>