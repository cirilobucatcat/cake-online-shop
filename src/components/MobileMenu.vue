<template>
    <div 
        class="btn-menu" 
        :class="{ 'active': isActive }" 
        role="button" 
        @click="toggleMenu"
    >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref<boolean>(false)
const toggleMenu = () => {
    isActive.value = !isActive.value
}

defineExpose({ isActive })
</script>