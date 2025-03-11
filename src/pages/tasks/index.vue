<script setup lang="ts">
import { useTasksStore } from '@/stores/loaders/tasks'
import { columns } from '@/utils/tableColumns/tasksColumns'

usePageStore().pageData.title = 'My Tasks'

const tasksLoader = useTasksStore()
const { tasks } = storeToRefs(tasksLoader)
const { getTasks } = tasksLoader

await getTasks()

const { getGroupedCollabs, groupedCollabs } = useCollabs()

getGroupedCollabs(tasks.value ?? [])

const columnsWithCollabs = columns(groupedCollabs)

useMeta({
  title: 'My Tasks | Pulse',
  description: {
    name: 'description',
    content: 'Pulse is a task management tool that helps you manage your tasks.',
  },
})
</script>

<template>
  <DataTable v-if="tasks" :columns="columnsWithCollabs" :data="tasks" />
</template>
