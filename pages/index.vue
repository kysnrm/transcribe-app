<template>
  <div>
    <base-script @setTime="setTime" />
    <base-audio ref="audio" />
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
  methods: {
    setTime(time: number) {
      this.$refs.audio.setTime(time)
    }
  }
})
</script>
