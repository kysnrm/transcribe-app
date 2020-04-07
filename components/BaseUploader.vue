<template>
  <div>
    <input type="file" accept="audio/mp3" @change="selectFile" />
    {{ uploadFile }}
    <button @click="uploadAudio">音声をアップロード</button>
    <button @click="downloadAudio">音声をダウンロード</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { Storage } from 'aws-amplify'

import { audioStore } from '~/store'

@Component
export default class BaseUploader extends Vue {
  uploadFile: string = ''
  selectFile(e: Event) {
    this.uploadFile = (e.target as any).files[0]
  }

  uploadAudio() {
    audioStore.updateUploaded(false)
    Storage.put((this.uploadFile as any).name, this.uploadFile, {
      progressCallback(progress: any) {
        if (progress.loaded === progress.total) {
          audioStore.updateUploaded(true)
        }
      }
    })
      .then((result) => console.log(result))
      .catch((err) => console.log(err))
    audioStore.updateAudio((this.uploadFile as any).name)
  }

  downloadAudio() {
    Storage.get(audioStore.audio)
      .then((result) => console.log(result))
      .catch((err) => console.log(err))
  }
}
</script>
