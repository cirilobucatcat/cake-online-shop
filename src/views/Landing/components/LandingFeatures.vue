<template>
    <section id="features" class="relative bg-rose-200 py-4">
        
        <h3 class="text-center text-rose-600 text-5xl my-12 font-bold font-bubblegum-sans tracking-wider">
            Featured Cakes
        </h3>

        <div class="w-full flex items-center justify-center">
            <div id="carousel-container" class="relative w-[90%] overflow-x-hidden">
                <div id="carousel" class="w-full flex gap-x-4 cursor-grab">
                    <ShopCard 
                        v-for="({ img, title, price }, index) in items" 
                        :key="index" 
                        :img 
                        :title
                        :price
                    />
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
import ShopCard from '@/components/ShopCard.vue'
import gsap from 'gsap'

const items = [
    {
        img: cake2,
        title: 'Classic Chocolate Truffle',
        description: 'Rich & moist, our customer favorite.',
        price: 100
    },
    {
        img: cake3,
        title: 'Red Velvet Dream',
        description: 'A Filipino classic with a modern twist.',
        price: 50
    },
    {
        img: cake4,
        title: 'Ube Supreme',
        description: 'Smooth cream cheese frosting, a true delight.',
        price: 250
    },
    {
        img: cake5,
        title: 'Custom Celebration Cakes',
        description: 'Personalized for birthdays, weddings, or any event.',
        price: 300
    },
    {
        img: cake2,
        title: 'Classic Chocolate Truffle 2',
        description: 'Rich & moist, our customer favorite.',
        price: 200
    },
    {
        img: cake3,
        title: 'Red Velvet Dream',
        description: 'A Filipino classic with a modern twist.',
        price: 50
    },
    {
        img: cake4,
        title: 'Ube Supreme',
        description: 'Smooth cream cheese frosting, a true delight.',
        price: 250
    },
    {
        img: cake5,
        title: 'Custom Celebration Cakes',
        description: 'Personalized for birthdays, weddings, or any event.',
        price: 300
    },
]

onMounted(() => {

    if(typeof window === 'undefined') return;

    const carousel = document.querySelector<HTMLElement>('#carousel');
    const container = document.querySelector<HTMLElement>('#carousel-container');

    if(!carousel || !container) return;
    
    const maxScroll = carousel.scrollWidth - container.offsetWidth;
    
    gsap.registerPlugin(Draggable)
    Draggable.create(carousel, {
        type: 'x',
        bounds: { minX: -maxScroll, maxX: 0 },
        inertia: true,
    })
})
</script>