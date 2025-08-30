<template>
    <article 
        data-testid="shop-card-item"
        class="grow-0 w-80 lg:w-92 py-8 shrink-0 rounded-md flex flex-col items-center justify-center"
    >
        <img 
            class="zig-zag-box bg-rose-100 object-contain !w-[230px]" 
            :src="img" 
            :alt="`Image for ${title}`"
        >
        <div class="w-full min-h-[60px] flex items-center justify-between mt-4">
            <h3 
                class="text-lg lg:text-xl grow text-teal-600 tracking-wider line-clamp-1 lg:line-clamp-2 font-bold font-bubblegum-sans ms-10"
                :title
            >
                {{ title }}
            </h3>
            <button class="bg-teal-600 p-2 rounded-md me-10 outline-none cursor-pointer">
                <ShoppingBagIcon data-testid="btn-icon" class="size-6 text-rose-100" />
            </button>
            <br>
        </div>
        <div class="w-full flex items-center justify-between">
            <p data-testid="test-price" class="font-bold grow font-bubblegum-sans tracking-wider text-rose-600 text-lg lg:text-3xl ms-10">{{ formattedPrice }}</p>
            <a data-testid="link-more-details" href="#" class="text-teal-600 underline me-10 text-xs">More details</a>
        </div>
    </article>
</template>
<script setup lang="ts">
import { ShoppingBagIcon } from '@heroicons/vue/16/solid';
import { computed } from 'vue';

const { price } = defineProps<{ title: string, img: string, price: number }>()

const formattedPrice = computed(() => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' }).format(price))

</script>