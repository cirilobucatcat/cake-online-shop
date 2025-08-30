<template>
  <TheHeader class="hidden md:flex" />
  <MTheHeader class="flex md:hidden" />
  <MainLayout>
    <LandingIndex />
  </MainLayout>
</template>
<script setup lang="ts">
import LandingIndex from '@/views/Landing/LandingIndex.vue';
import MainLayout from './views/Landing/components/MainLayout.vue';
import TheHeader from './components/TheHeader.vue';
import MTheHeader from './components/MTheHeader.vue';
</script>