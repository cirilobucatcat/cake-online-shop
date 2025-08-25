<template>
    <section id="testimonials" class="bg-teal-600 py-4 w-full">
        <h3 class="text-center text-rose-200 text-5xl my-12 font-bold font-bubblegum-sans tracking-wider">
            Testimonials
        </h3>

        <div id="testimonials-container" class="relative flex items-center justify-center">
            <img :src="testimonialCake" class="2xl:w-[40%]" alt=""></img>

            <div id="item-1" class="absolute top-0 left-[30%] w-[500px] py-2 flex flex-col items-start justify-between bg-teal-50 rounded-lg p-4">
                <p class="line-clamp-3 my-2 text-teal-800">MasterCaker never disappoints. Their cakes are not only visually stunning but absolutely delicious. I recommend them to all my clients.</p>
                <div class="flex items-center gap-x-4">
                    <img :src="profile1" width="50" class="rounded-full border border-teal-600" alt="">
                    <div class="grow py-2">
                        <h2 class="font-bubblegum-sans text-2xl text-teal-600 leading-5">Emma Rodriguez</h2>
                        <p class="text-slate-500 text-sm">Event Planner</p>
                    </div>
                </div>
            </div>

            <div id="item-2" class="absolute top-45 right-[20%] w-[500px] py-2 flex flex-col items-start justify-between bg-teal-50 rounded-lg p-4">
                <p class="line-clamp-3 my-2 text-teal-800">"We order cakes from Sweet Delights for all our staff birthdays. Their consistency and quality are unmatched."</p>
                <div class="flex items-center gap-x-4">
                    <img :src="profile2" width="50" class="rounded-full border border-teal-600" alt="">
                    <div class="grow py-2">
                        <h2 class="font-bubblegum-sans text-2xl text-teal-600 leading-5">James Kim</h2>
                        <p class="text-slate-500 text-sm">Restaurant Manager</p>
                    </div>
                </div>
            </div>

            <div id="item-3" class="absolute top-85 left-[30%] w-[500px] py-2 flex flex-col items-start justify-between bg-teal-50 rounded-lg p-4">
                <p class="line-clamp-3 my-4 text-teal-800">My wedding cake was a dream come true. Elegant, perfectly moist, and everyone asked where it was from!</p>
                <div class="flex items-center gap-x-4">
                    <img :src="profile3" width="50" class="rounded-full border-2 border-teal-600" alt="">
                    <div class="grow py-2">
                        <h2 class="font-bubblegum-sans text-2xl text-teal-600 leading-5">Sophia Lee</h2>
                        <p class="text-slate-500 text-sm">Bride</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import testimonialCake from '@/assets/images/testimonial.png'
import profile1 from '@/assets/images/profile1.png'
import profile2 from '@/assets/images/profile2.png'
import profile3 from '@/assets/images/profile3.png'
import gsap from 'gsap';
import { onMounted } from 'vue';

let timeline: GSAPTimeline;

onMounted(() => {
    timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#testimonials',
            pin: true,
            start: 'top top',
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
		    snap: {
                snapTo:  'labels', // snap to the closest label in the timeline
                duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
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
        .addLabel('show4');

})
</script>