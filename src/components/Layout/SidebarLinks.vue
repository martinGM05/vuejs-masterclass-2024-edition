<script setup lang="ts">
interface linkProp {
  title: string
  icon: string
  to: string
}

defineProps<{
  links: linkProp[]
}>()
</script>

<template>
  <RouterLink
    exact-active-class="text-primary bg-muted"
    v-for="link in links"
    :to="link.to"
    class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
  >
    <iconify-icon :icon="link.icon"></iconify-icon>
    <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
  </RouterLink>
</template>
