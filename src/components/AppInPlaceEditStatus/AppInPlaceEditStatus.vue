<script setup lang="ts">
const value = defineModel<'in-progress' | 'completed'>()
const emit = defineEmits<{
  (e: 'commit'): void
}>()

const props = withDefaults(
  defineProps<{
    readonly?: boolean
  }>(),
  {
    readonly: false,
  },
)

const toogleValue = () => {
  if (props.readonly) return
  value.value = value.value === 'completed' ? 'in-progress' : 'completed'
  emit('commit')
}
</script>

<template>
  <div class="text-2xl cursor-pointer" @click="toogleValue">
    <Transition mode="out-in" name="scale">
      <iconify-icon
        icon="lucide:circle-check"
        class="text-green-500"
        v-if="value === 'completed'"
      />
      <iconify-icon icon="lucide:circle-dot" class="text-yellow-500" v-else />
    </Transition>
  </div>
</template>
