import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Segments from '~/store/segments'
import Audio from '~/store/audio'

// eslint-disable-next-line import/no-mutable-exports
let segmentStore: Segments
// eslint-disable-next-line import/no-mutable-exports
let audioStore: Audio

function initialiseStores(store: Store<any>) {
  segmentStore = getModule(Segments, store)
  audioStore = getModule(Audio, store)
}

export { initialiseStores, segmentStore, audioStore }
