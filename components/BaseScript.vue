<template>
  <div>{{ response.results.transcripts[0].transcript }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Response from '@/assets/asrOutput.json'

export default Vue.extend({
  data: () => {
    return {
      response: Response
    }
  }
})
</script>
