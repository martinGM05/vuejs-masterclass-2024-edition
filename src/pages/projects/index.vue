<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';

const projects: any = ref(null);

(async () => {
  const { data, error } = await supabase.from('projects').select();

  if (error) console.error(error);

  projects.value = data;
  console.log('Projects:', projects);
})();

</script>

<template>
    <div>
      <h1>Projects page</h1>
      <RouterLink to="/">Go to home</RouterLink>
      <pre>{{ projects }}</pre>
    </div>
</template>
