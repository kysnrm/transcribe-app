<template>
  <div>
    <div v-for="(item, index) in response.results.segments" :key="index">
      {{ response.results.speaker_labels.segments[index].speaker_label }}
      {{ item.alternatives[0].transcript }}
    </div>
  </div>
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
