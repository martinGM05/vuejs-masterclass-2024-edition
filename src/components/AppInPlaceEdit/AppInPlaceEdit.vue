<script setup lang="ts">
const value = defineModel()
const emit = defineEmits(['commit'])
</script>

<template>
  <input
    class="w-full p-1 bg-transparent focus:outline-none focus:border-none focus:bg-gray-800 focus:rounded-md"
    type="text"
    v-model="value"
    @blur="emit('commit')"
    @keydown.enter="($event.target as HTMLInputElement).blur()"
  />
</template>
