<template>
  <audio
    ref="audio"
    controls
    :src="audioPath"
    @timeupdate="updateCurrentTime"
  ></audio>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch, Ref } from 'vue-property-decorator'

import { Storage } from 'aws-amplify'

import { audioStore } from '~/store'

@Component
export default class BaseAudio extends Vue {
  audioPath: object = {}

  mounted() {
    this.getAudio()
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'audio/updateUploaded' && mutation.payload) {
        setTimeout(this.getAudio() as any, 200)
      }
    })
  }

  getAudio() {
    Storage.get(`Audio/${audioStore.audio}`)
      .then((result) => (this.audioPath = result))
      .catch((err) => console.log(err))
  }

  @Prop() lastSettedTime!: number
  currentTime: number = 0

  @Ref() audio!: HTMLAudioElement

  @Watch('lastSettedTime')
  onChangeLastSettedTime() {
    this.audio.currentTime = this.lastSettedTime
    this.audio.play()
  }

  @Emit()
  updateCurrentTime() {
    return this.audio.currentTime
  }
}
</script>
