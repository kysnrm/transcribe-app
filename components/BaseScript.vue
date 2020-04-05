<template>
  <div>
    <base-segment
      v-for="(item, index) in segments"
      :key="index"
      :speaker="item.speaker"
      :script="item.script"
      :start-time="item.startTime"
      :end-time="item.endTime"
      :is-playing="currentTime > item.startTime && currentTime < item.endTime"
      @setTime="setTime"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import Response from '@/assets/asrOutput.json'
import BaseSegment from '@/components/BaseSegment.vue'

type Segment = {
  speaker: string
  startTime: number
  endTime: Number
  script: string
}

@Component({
  components: {
    BaseSegment
  }
})
export default class BaseScript extends Vue {
  response: object = Response
  segments: Segment[] = []
  mounted() {
    const segments = Response.results.segments
    for (let i = 0; i < segments.length; i++) {
      const segment: Segment = {
        speaker: Response.results.speaker_labels.segments[i].speaker_label,
        startTime: Number(segments[i].start_time),
        endTime: Number(segments[i].end_time),
        script: segments[i].alternatives[0].transcript
      }
      this.segments.push(segment)
    }
  }

  @Prop() currentTime!: number
  setTime(time: number) {
    this.$emit('setTime', time)
  }
}
</script>

<style lang="css" scoped>
.base-segment + .base-segment {
  margin-top: 0.5rem;
}
</style>
