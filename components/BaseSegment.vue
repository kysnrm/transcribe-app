<template>
  <div class="base-segment" :class="{ playing: isPlaying }">
    <div class="base-segment--speaker">{{ speaker }}</div>
    <div class="base-segment--start-time" @click="setTime">{{ startTime }}</div>
    <input type="text" :value="script" @input="updateScript" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class BaseSegment extends Vue {
  @Prop() speaker!: string
  @Prop() script!: string
  @Prop() startTime!: number
  @Prop() endTime!: number
  @Prop() isPlaying!: boolean

  @Emit()
  setTime() {
    return this.startTime
  }

  @Emit()
  updateScript(e: Event) {
    return (e.target as HTMLInputElement).value
  }
}
</script>

<style lang="scss" scoped>
.base-segment {
  padding: 0.25rem;
  background-color: #eee;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
  &.playing {
    background-color: #ddd;
  }
}
.base-segment--speaker,
.base-segment--start-time {
  margin-right: 0.5rem;
  width: 4rem;
}
</style>
