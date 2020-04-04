<template>
  <div>
    <audio
      id="base-audio"
      ref="audio"
      controls
      src="../assets/test.mp3"
      @timeupdate="updateCurrentTime"
    ></audio>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => {
    return {
      currentTime: 0
    }
  },
  methods: {
    setTime(time: number) {
      const audio: HTMLAudioElement = this.$refs.audio as HTMLAudioElement
      audio.currentTime = time
      audio.play()
    },
    updateCurrentTime() {
      const audio: HTMLAudioElement = this.$refs.audio as HTMLAudioElement
      this.$emit('updateCurrentTime', audio.currentTime)
    }
  }
})
</script>
