<script setup lang="ts">
import { useTemplateRef } from 'vue';
import MobileMenu from './MobileMenu.vue';
import TextLogo from './TextLogo.vue';

const mobileMenuRef = useTemplateRef('mobileMenu');
</script>

<template>
    <header v-bind:class="$attrs.class" class="fixed z-50 w-full bg-rose-50 h-[70px]">
        <nav 
            class="w-full h-screen bg-rose-50 z-50 transform transition-transform duration-500 ease-in-out translate-x-[500%]" 
            :class="{'!translate-x-0' : mobileMenuRef?.isActive}"
        >
            <ul class="h-full flex flex-col gap-y-5 justify-center items-center font-medium text-teal-600">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#testemonials">Testemonials</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#contact">Contact Us</a>
                </li>
                <li>
                    <button class="bg-rose-600 min-w-[200px] text-rose-50 py-2 rounded-md">Sign in</button>
                </li>
            </ul>
        </nav>
        <TextLogo class="absolute left-5 top-5 z-40" />
        <MobileMenu class="absolute right-5 top-5 z-50" ref="mobileMenu" />
    </header>
</template>