<script setup lang="ts">
import gsap from 'gsap';
import TextLogo from './TextLogo.vue';

const handleClick = (event: Event) => {
    let target = event.target as HTMLAnchorElement
    const yey = target.href.split('#')[1]
    const test = `#${yey || 'hero'}`;
    console.log(test)
    gsap.to(window, { duration: 1, scrollTo: { y: test, offsetY: 50 }})
}


</script>

<template>
    <header 
        v-bind:class="$attrs.class" 
        class="w-full flex flex-col fixed md:w-[unset] md:h-[unset] md:flex-row bg-rose-50 z-50 md:sticky md:top-0 md:justify-between md:items-center px-4 py-4"
    >
        <TextLogo />
        <nav>
            <ul class="flex gap-x-8 justify-center items-center font-medium text-teal-600">
                <li>
                    <a @click="handleClick" href="#">Home</a>
                </li>
                <li>
                    <a @click="handleClick" href="#features">Features</a>
                </li>
                <li>
                    <a @click="handleClick" href="#about">About</a>
                </li>
                <li>
                    <a @click="handleClick" href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a @click="handleClick" href="#contact">Contact Us</a>
                </li>
            </ul>
        </nav>
        <button>Sign in</button>
    </header>
</template>