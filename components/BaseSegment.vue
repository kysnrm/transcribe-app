<template>
  <div class="base-segment" @click="setTime">
    {{ speaker }} {{ script }} {{ startTime }}~{{ endTime }}
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

<style lang="css" scoped>
.base-segment {
  padding: 0.25rem;
  background-color: #eee;
}
</style>
