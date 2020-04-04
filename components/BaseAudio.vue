<template>
  <div>
    <audio id="base-audio" controls src="../assets/test.mp3"></audio>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    setTime: (time: number) => {
      const audio = document.getElementById('base-audio')
      if (!(audio instanceof HTMLMediaElement)) {
        throw new TypeError('#base-audio is not an HTMLMediaElement')
      }
      audio.currentTime = time
      audio.play()
    }
  }
})
</script>
