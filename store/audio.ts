import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'audio',
  stateFactory: true,
  namespaced: true
})
export default class Audio extends VuexModule {
  audio: string = 'test.mp3'
  uploaded: boolean = true

  @Mutation
  updateAudio(newName: string) {
    this.audio = newName
  }

  @Mutation
  updateUploaded(bool: boolean) {
    this.uploaded = bool
  }
}
