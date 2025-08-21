<template>
    <section id="features" class="relative bg-rose-200 py-4 h-[70%]">
        
        <h3 class="text-center text-rose-600 text-5xl my-12 font-bold font-bubblegum-sans tracking-wider">
            Featured Cakes/Bestsellers
        </h3>

        <div class="flex w-full items-center justify-center gap-x-12">

            <article class="w-[200px]">
                <img :src="cake2" width="200" alt="">
                <h3>Classic Chocolate Truffle</h3>
                <p>Rich & moist, our customer favorite.</p>
            </article>
            <article class="w-[200px]">
                <img :src="cake3" width="200" alt="">
                <h3>Red Velvet Dream</h3>
                <p>Smooth cream cheese frosting, a true delight.</p>
            </article>
            <article class="w-[200px]">
                <img :src="cake4" width="200" alt="">
                <h3>Ube Supreme</h3>
                <p>A Filipino classic with a modern twist.</p>
            </article>
            <article class="w-[200px]">
                <img :src="cake5" width="200" alt="">
                <h3>Custom Celebration Cakes</h3>
                <p>Personalized for birthdays, weddings, or any event.</p>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
import cake2 from '@/assets/images/cake2.png'
import cake3 from '@/assets/images/cake3.png'
import cake4 from '@/assets/images/cake4.png'
import cake5 from '@/assets/images/cake5.png'
</script>