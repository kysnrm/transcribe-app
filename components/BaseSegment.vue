<template>
  <div>{{ speaker }} {{ script }} {{ startTime }}~{{ endTime }}</div>
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
  }
})
</script>
