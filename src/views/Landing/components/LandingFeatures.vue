<template>
    <section id="features" class="relative bg-rose-200 py-4">
        
        <h3 class="text-center text-rose-600 text-5xl my-12 font-bold font-bubblegum-sans tracking-wider">
            Featured Cakes/Bestsellers
        </h3>

        <div class="w-full flex items-center justify-center">
            <div id="carousel-container" class="relative w-[90%] overflow-x-hidden">
                <div id="carousel" class="w-full flex gap-x-4 cursor-grab">
                    <article id="item" v-for="{ img, title, description } in cakes" class="grow-0 bg-slate-50 w-96 h-[450px] shrink-0 shadow rounded-md p-6 flex flex-col items-center justify-center zig-zag-box">
                        <img :src="img" width="200" :alt="`Image for ${title}`">
                        <h3 class="text-2xl tracking-wider line-clamp-1 font-bold font-bubblegum-sans" :title>{{ title }} </h3>
                        <p class="line-clamp-3">{{ description }}</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import cake2 from '@/assets/images/cake2.png'
import cake3 from '@/assets/images/cake3.png'
import cake4 from '@/assets/images/cake4.png'
import cake5 from '@/assets/images/cake5.png'
import { Draggable } from 'gsap/Draggable'
import { onMounted } from 'vue'

const cakes = [
    {
        img: cake2,
        title: 'Classic Chocolate Truffle',
        description: 'Rich & moist, our customer favorite.'
    },
    {
        img: cake3,
        title: 'Red Velvet Dream',
        description: 'A Filipino classic with a modern twist.'
    },
    {
        img: cake4,
        title: 'Ube Supreme',
        description: 'Smooth cream cheese frosting, a true delight.'
    },
    {
        img: cake5,
        title: 'Custom Celebration Cakes',
        description: 'Personalized for birthdays, weddings, or any event.'
    },
    {
        img: cake2,
        title: 'Classic Chocolate Truffle',
        description: 'Rich & moist, our customer favorite.'
    },
    {
        img: cake3,
        title: 'Red Velvet Dream',
        description: 'A Filipino classic with a modern twist.'
    },
    {
        img: cake4,
        title: 'Ube Supreme',
        description: 'Smooth cream cheese frosting, a true delight.'
    },
    {
        img: cake5,
        title: 'Custom Celebration Cakes',
        description: 'Personalized for birthdays, weddings, or any event.'
    },
]

onMounted(() => {

    const carousel = document.querySelector<HTMLElement>('#carousel');
    const container = document.querySelector<HTMLElement>('#carousel-container');

    if(!carousel || !container) return;

    const maxScroll = carousel.scrollWidth - container.offsetWidth;

    Draggable.create(carousel, {
        type: 'x',
        bounds: { minX: -maxScroll, maxX: 0 },
        inertia: true,
    })
})
</script>