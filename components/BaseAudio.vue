<template>
  <div>
    <audio
      id="base-audio"
      ref="audio"
      controls
      src="../assets/test.mp3"
      @timeupdate="updateCurrentTime"
    ></audio>
    {{ currentTime }}
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
      this.$refs.audio.currentTime = time
      this.$refs.audio.play()
    },
    updateCurrentTime() {
      this.currentTime = this.$refs.audio.currentTime
    }
  }
})
</script>
