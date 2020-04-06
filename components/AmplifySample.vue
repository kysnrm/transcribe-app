<template>
  <div>
    <button @click="getSegments">getSegments</button>
    <button @click="addSegments">addSegments</button>
    <button @click="deleteSegments">deleteSegments</button>
    <div v-for="(item, index) in segments" :key="index">{{ item }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { DataStore, Predicates } from '@aws-amplify/datastore'
import { Segment } from '@/src/models'

@Component
export default class AmplifySample extends Vue {
  segments: Segment[] = []

  mounted() {
    this.getSegments()
  }

  async getSegments() {
    this.segments = await DataStore.query(Segment)
  }

  async addSegments() {
    await DataStore.save(
      new Segment({
        speaker: 'test speaker',
        startTime: 0,
        endTime: 10,
        script: 'hoge'
      })
    )
  }

  async deleteSegments() {
    await DataStore.delete(Segment, Predicates.ALL)
  }
}
</script>
