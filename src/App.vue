<template>
  <TheHeader />
  <MainLayout>
    <LandingIndex />
  </MainLayout>
</template>
<script setup lang="ts">
import LandingIndex from '@/views/Landing/LandingIndex.vue';
import MainLayout from './views/Landing/components/MainLayout.vue';
import TheHeader from './components/TheHeader.vue';
</script>