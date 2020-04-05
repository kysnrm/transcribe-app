import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

type Segment = {
  speaker: string
  startTime: number
  endTime: number
  script: string
}

type updateScriptPayload = {
  index: number
  text: string
}

@Module({
  name: 'segments',
  stateFactory: true,
  namespaced: true
})
export default class Segments extends VuexModule {
  segments: Segment[] = []

  @Mutation
  refleshScript() {
    this.segments.splice(0, this.segments.length)
  }

  @Mutation
  importScript(segment: Segment) {
    this.segments.push(segment)
  }

  @Mutation
  updateScript(payload: updateScriptPayload) {
    this.segments[payload.index].script = payload.text
  }
}
