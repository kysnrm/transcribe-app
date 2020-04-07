<template>
  <div>
    <input type="file" accept="audio/mp3" @change="selectFile" />
    <button @click="uploadAudio">音声をアップロード</button>
    <button @click="downloadAudio">音声をダウンロード</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Amplify, { Storage } from 'aws-amplify'
import awsmobile from '@/src/aws-exports'
Amplify.configure(awsmobile)

@Component
export default class BaseUploader extends Vue {
  uploadFile: string = ''
  selectFile(e: Event) {
    this.uploadFile = e.target.files[0]
  }

  uploadAudio() {
    Storage.put('test.mp3', this.uploadFile)
      .then((result) => console.log(result))
      .catch((err) => console.log(err))
  }

  downloadAudio() {
    Storage.get('test.mp3')
      .then((result) => console.log(result))
      .catch((err) => console.log(err))
  }
}
</script>
