<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { checkHealth } from '@ranran/shared'

const healthStatus = ref<string>('Checking...')

onMounted(async () => {
  try {
    const res = await checkHealth()
    healthStatus.value = JSON.stringify(res.data)
  } catch (e) {
    healthStatus.value = `Error: ${e instanceof Error ? e.message : String(e)}`
  }
})
</script>

<template>
  <div>
    <h1>Ranran</h1>
    <p>Backend health: {{ healthStatus }}</p>
  </div>
</template>
