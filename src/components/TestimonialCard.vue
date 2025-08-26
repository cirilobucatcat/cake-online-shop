<template>
    <article v-bind="$attrs" class="w-[500px] py-2 flex flex-col items-start justify-between bg-teal-50 rounded-lg p-4">
        <p class="line-clamp-3 my-4 text-teal-800">{{ message }}</p>
        <div class="flex items-center gap-x-4">
            <img :src="img" width="50" class="rounded-full border-2 border-teal-600" :alt="`${name}'s profile picture`">
            <div class="grow py-2">
                <h2 class="font-bubblegum-sans text-2xl text-teal-600 leading-5">{{ name }}</h2>
                <p class="text-slate-500 text-sm">{{ position }}</p>
            </div>
        </div>
    </article>
</template>
<script setup lang="ts">
import type { Testimonial } from '@/types';

defineProps<Omit<Testimonial, 'containerClass'>>()
</script>