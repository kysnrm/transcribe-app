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
      @set-time="setTime"
      @update-script="updateScript($event, index)"
    />
    <button @click="saveScript">保存する</button>
    <!-- <button @click="resetScript">最初の状態に戻す</button> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

import { DataStore } from '@aws-amplify/datastore'
import { Segment } from '@/src/models'

import { segmentStore } from '~/store'

import Response from '@/assets/asrOutput.json'
import BaseSegment from '@/components/BaseSegment.vue'

type SegmentType = {
  speaker: string
  startTime: number
  endTime: number
  script: string
  id?: string
}

@Component({
  components: {
    BaseSegment
  }
})
export default class BaseScript extends Vue {
  response: object = Response
  storedata: Segment[] = []

  async mounted() {
    this.storedata = await DataStore.query(Segment)
    segmentStore.refleshScript()
    const segments = Response.results.segments
    if (this.storedata.length === 0) {
      for (let i = 0; i < segments.length; i++) {
        await DataStore.save(
          new Segment({
            speaker: Response.results.speaker_labels.segments[i].speaker_label,
            startTime: Number(segments[i].start_time),
            endTime: Number(segments[i].end_time),
            script: segments[i].alternatives[0].transcript
          })
        )
      }
    }
    const unSortedStore = await DataStore.query(Segment)
    unSortedStore.sort((a, b) => {
      if (a.startTime < b.startTime) return -1
      if (a.startTime > b.startTime) return 1
      return 0
    })
    this.storedata = unSortedStore
    for (let i = 0; i < this.storedata.length; i++) {
      const data = this.storedata[i]
      const segment: SegmentType = {
        speaker: data.speaker,
        startTime: data.startTime,
        endTime: data.endTime,
        script: data.script,
        id: data.id
      }
      segmentStore.importScript(segment)
    }
  }

  get segments() {
    return segmentStore.segments
  }

  updateScript(text: string, index: number) {
    segmentStore.updateScript({
      index,
      text
    })
  }

  async saveScript() {
    for (let i = 0; i < this.segments.length; i++) {
      const segment = this.segments[i]
      const original = await DataStore.query(Segment, segment.id)
      await DataStore.save(
        Segment.copyOf(original, (updated) => {
          updated.script = segment.script
        })
      )
    }
  }

  @Prop() currentTime!: number

  @Emit()
  setTime(time: number) {
    return time
  }
}
</script>

<style lang="css" scoped>
.base-segment + .base-segment {
  margin-top: 0.5rem;
}
</style>
