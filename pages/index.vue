<template>
  <div>
    <base-script :current-time="currentTime" @setTime="setTime" />
    <base-audio ref="audio" @updateCurrentTime="updateCurrentTime" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseScript from '~/components/BaseScript.vue'
import BaseAudio from '~/components/BaseAudio.vue'

export default Vue.extend({
  components: {
    BaseScript,
    BaseAudio
  },
  data: () => {
    return {
      currentTime: 0
    }
  },
  methods: {
    setTime(time: number) {
      this.$refs.audio.setTime(time)
    },
    updateCurrentTime(time: number) {
      this.currentTime = time
    }
  }
})
</script>
