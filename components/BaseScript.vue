<template>
  <div>
    <base-segment
      v-for="(item, index) in response.results.segments"
      :key="index"
      :speaker="response.results.speaker_labels.segments[index].speaker_label"
      :script="item.alternatives[0].transcript"
      :start-time="Number(item.start_time)"
      :end-time="Number(item.end_time)"
      @click="setTime(Number(item.start_time))"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Response from '@/assets/asrOutput.json'
import BaseSegment from '@/components/BaseSegment.vue'

export default Vue.extend({
  components: {
    BaseSegment
  },
  data: () => {
    return {
      response: Response
    }
  },
  methods: {
    setTime(time: number) {
      this.$emit('setTime', time)
    }
  }
})
</script>
