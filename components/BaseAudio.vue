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

import Amplify, { Storage } from 'aws-amplify'
import awsmobile from '@/src/aws-exports'

import { audioStore } from '~/store'

Amplify.configure(awsmobile)

@Component
export default class BaseAudio extends Vue {
  audioPath: object = {}
  uploaded: boolean = false

  mounted() {
    Storage.get('test.mp3')
      .then((result) => (this.audioPath = result))
      .catch((err) => console.log(err))
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'audio/updateUploaded' && mutation.payload) {
        Storage.get(audioStore.audio)
          .then((result) => (this.audioPath = result))
          .catch((err) => console.log(err))
      }
    })
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
