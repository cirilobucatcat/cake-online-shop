<template>
    <section id="about" class="bg-teal-600 flex flex-col justify-center items-center pb-12">
        <article id="our-story" class="mt-12 max-w-3/4 2xl:max-w-1/2 flex flex-col justify-evenly items-center">
            <h4 class="text-5xl font-bold uppercase mb-12 font-bubblegum-sans text-rose-100">Our Story
            </h4>
            <div class="flex items-center justify-evenly gap-x-4">
                <img :src="shopStory" width="400" class="border-10 p-2 object-contain border-dotted border-rose-100"
                    alt="Master Baker's Story img">
                <p class="text-rose-100 text-md text-justify first-letter:text-4xl">Master Baker started as a small kitchen
                    experiment has grown into a community favorite. With years of dedication, love for baking, and
                    countless late nights perfecting recipes, MasterBaker has become more than just a cake shop — it’s a
                    place where memories are made and shared.
                </p>
            </div>
        </article>

        <article class="mt-24 min-w-[80%] flex flex-col justify-evenly items-center">
            <h4 class="text-5xl font-bold uppercase font-bubblegum-sans text-rose-100">Our Philosophy
            </h4>
            <p class="mb-12 mt-2 text-rose-100">We believe cakes aren’t just desserts — they’re experiences. That’s why we focus on:</p>
            <ul class="grid grid-cols-3 gap-x-12">
                <li class="flex flex-col items-center justify-center">
                    <img :src="person1" class="size-20 rounded-full">
                    <p class="text-center text-rose-100">
                        <strong>Fresh Ingredients</strong><br>
                        <span>Only the best, never shortcuts.</span>
                    </p>
                </li>
                <li class="flex flex-col items-center justify-center">
                    <img :src="person1" class="size-20 rounded-full">
                    <p class="text-center text-rose-100">
                        <strong>Custom Creations</strong><br>
                        <span>Cakes made to match your vision.</span>
                    </p>
                </li>
                <li class="flex flex-col items-center justify-center">
                    <img :src="person1" class="size-20 rounded-full">
                    <p class="text-center text-rose-100">
                        <strong>Quality & Care</strong><br>
                        <span>Every slice is baked with love.</span>
                    </p>
                </li>
            </ul>
        </article>

        <article class="mt-24 min-w-[80%] flex flex-col justify-evenly items-center">
            <h4 class="text-5xl mb-12 font-bold uppercase font-bubblegum-sans text-rose-100">Why Choose Master Baker?
            </h4>
            <ul class="grid grid-cols-3 gap-x-12">
                <li class="flex flex-col items-center justify-center">
                    <img :src="person1" class="h-[200px] w-[300px] object-contain border">
                    <p class="text-center text-rose-100">100+ unique flavors crafted to perfection</p>
                </li>
                <li class="flex flex-col items-center justify-center">
                    <img :src="person1" class="h-[200px] w-[300px] object-contain border">
                    <p class="text-center text-rose-100">Award-winning designs and decorations</p>
                </li>
                <li class="flex flex-col items-center justify-center">
                    <img :src="person1" class="h-[200px] w-[300px] object-contain border">
                    <p class="text-center text-rose-100">Trusted by families and event planners for over 13 years</p>
                </li>
            </ul>
        </article>
    </section>
</template>
<script setup lang="ts">
import shopStory from '@/assets/images/shop-story.jpg'
import person1 from '@/assets/images/cake1.jpg'
import { onMounted } from 'vue';

onMounted(() => {

})
</script>