<template>
  <div class="base-segment" @click="setTime">
    <div class="base-segment--speaker">{{ speaker }}</div>
    <div class="base-segment--start-time">{{ startTime }}</div>
    <div class="base-segment--script">{{ script }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    speaker: {
      type: String,
      required: true
    },
    script: {
      type: String,
      required: true
    },
    startTime: {
      type: Number,
      required: true
    },
    endTime: {
      type: Number,
      required: true
    }
  },
  methods: {
    setTime() {
      this.$emit('setTime', this.startTime)
    }
  }
})
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
}
.base-segment--speaker, .base-segment--start-time {
  margin-right: 0.5rem;
  width: 4rem;
}
</style>
