<template>
  <div>
    <amplify-sample />
    <base-script :current-time="currentTime" @set-time="setTime" />
    <base-audio
      ref="audio"
      :last-setted-time="lastSettedTime"
      @update-current-time="updateCurrentTime"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import BaseScript from '~/components/BaseScript.vue'
import BaseAudio from '~/components/BaseAudio.vue'
import AmplifySample from '~/components/AmplifySample.vue'

@Component({
  components: {
    BaseScript,
    BaseAudio,
    AmplifySample
  }
})
export default class Index extends Vue {
  currentTime: number = 0
  lastSettedTime: number = 0

  setTime(time: number) {
    this.lastSettedTime = time
  }

  updateCurrentTime(time: number) {
    this.currentTime = time
  }
}
</script>
