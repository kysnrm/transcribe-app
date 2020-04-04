<template>
  <audio
    ref="audio"
    controls
    src="../assets/test.mp3"
    @timeupdate="updateCurrentTime"
  ></audio>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    lastSettedTime: {
      type: Number,
      required: true
    }
  },
  data: () => {
    return {
      currentTime: 0
    }
  },
  watch: {
    lastSettedTime() {
      const audio: HTMLAudioElement = this.$refs.audio as HTMLAudioElement
      audio.currentTime = this.lastSettedTime
      audio.play()
    }
  },
  methods: {
    updateCurrentTime() {
      const audio: HTMLAudioElement = this.$refs.audio as HTMLAudioElement
      this.$emit('updateCurrentTime', audio.currentTime)
    }
  }
})
</script>
