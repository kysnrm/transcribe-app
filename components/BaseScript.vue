<template>
  <div>
    <base-segment
      v-for="(item, index) in response.results.segments"
      :key="index"
      :speaker="response.results.speaker_labels.segments[index].speaker_label"
      :script="item.alternatives[0].transcript"
      :start-time="Number(item.start_time)"
      :end-time="Number(item.end_time)"
      :is-playing="
        currentTime > Number(item.start_time) &&
          currentTime < Number(item.end_time)
      "
      @setTime="setTime"
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
  props: {
    currentTime: {
      type: Number,
      required: true
    }
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

<style lang="css" scoped>
.base-segment + .base-segment {
  margin-top: 0.5rem;
}
</style>
