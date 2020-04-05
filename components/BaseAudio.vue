<template>
  <audio
    ref="audio"
    controls
    src="../assets/test.mp3"
    @timeupdate="updateCurrentTime"
  ></audio>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch, Ref } from 'vue-property-decorator'

@Component
export default class BaseAudio extends Vue {
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
