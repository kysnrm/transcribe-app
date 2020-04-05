import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'

type Segment = {
  speaker: string
  startTime: number
  endTime: number
  script: string
}

@Module({
  name: 'mymodule',
  stateFactory: true,
  namespaced: true
})
class MyModule extends VuexModule {
  segments: Segment[] = []

  @Mutation
  updateScript(index: number, text: string) {
    this.segments[index].script = text
  }
}

export default getModule(MyModule)
