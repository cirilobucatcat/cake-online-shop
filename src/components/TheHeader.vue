<script setup lang="ts">
import TextLogo from './TextLogo.vue';

</script>

<template>
    <header class="bg-rose-50 z-50 sticky top-0 flex justify-between items-center px-4 py-4">
        <TextLogo />
        <nav>
            <ul class="flex gap-x-8 justify-center items-center font-medium text-teal-600">
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
            </ul>
        </nav>
        <button>Order Now</button>
    </header>
</template>