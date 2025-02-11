<script setup lang="ts">
usePageStore().pageData.title = 'Home Page'
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink
      :to="{
        name: '/projects/[slug]',
        params: { slug: '1' },
      }"
      >Go to Projects</RouterLink
    >
  </div>
</template>
