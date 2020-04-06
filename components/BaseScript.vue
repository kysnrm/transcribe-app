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
    <button @click="resetScript">最初の状態に戻す</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

import Amplify, { API, graphqlOperation } from 'aws-amplify'
// import awsconfig from '@/src/aws-exports.js'

import * as queries from '@/src/graphql/queries.ts'
import * as mutations from '@/src/graphql/mutations.ts'

import { segmentStore } from '~/store'

import Response from '@/assets/asrOutput.json'
import BaseSegment from '@/components/BaseSegment.vue'

Amplify.configure({
  "aws_project_region": "ap-northeast-1",
  "aws_appsync_graphqlEndpoint": process.env.APPSYNC_GRAPHQLENDPOINT,
  "aws_appsync_region": "ap-northeast-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": process.env.APPSYNC_APIKEY
})

type Segment = {
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
    // GraphQL で現在 DB に存在する Segment を全件取得
    const getlistSegments = await API.graphql(graphqlOperation(queries.listSegments, { limit: 10000 })) as any
    // 取得した Segment を data に格納
    this.storedata = getlistSegments.data.listSegments.items as Segment[]
    // 一旦ストアを空にする
    segmentStore.refleshScript()
    const segments = Response.results.segments
    // DB が空だった場合に Response の内容を格納する
    if (this.storedata.length === 0) {
      for (let i = 0; i < segments.length; i++) {
        const segment = {
          speaker: Response.results.speaker_labels.segments[i].speaker_label,
          startTime: Number(segments[i].start_time),
          endTime: Number(segments[i].end_time),
          script: segments[i].alternatives[0].transcript
        }
        await API.graphql(graphqlOperation(mutations.createSegment, { input: segment }))
      }
    }
    // storedata を startTime で昇順にソート
    const unSortedStore = this.storedata
    unSortedStore.sort((a, b) => {
      if (a.startTime < b.startTime) return -1
      if (a.startTime > b.startTime) return 1
      return 0
    })
    this.storedata = unSortedStore
    // storedata の内容を store に格納
    for (let i = 0; i < this.storedata.length; i++) {
      const data = this.storedata[i]
      const segment: Segment = {
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

  async resetScript() {
    const segments = segmentStore.segments
    for (let i = 0; i < segments.length; i++) {
      const script = Response.results.segments[i].alternatives[0].transcript
      const newSegment:Segment = {
        speaker: segments[i].speaker,
        startTime: segments[i].startTime,
        endTime: segments[i].endTime,
        script,
        id: segments[i].id
      }
      await API.graphql(graphqlOperation(mutations.updateSegment, { input: newSegment }))
      this.updateScript(script, i)
    }
  }

  async saveScript() {
    for (let i = 0; i < this.segments.length; i++) {
      const segment = this.segments[i]
      await API.graphql(graphqlOperation(mutations.updateSegment, { input: segment }))
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
