<template>
  <div>
    <base-script />
    <base-audio />
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
  }
})
</script>
