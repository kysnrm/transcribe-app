import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Segments from '~/store/segments'

// eslint-disable-next-line import/no-mutable-exports
let segmentStore: Segments

function initialiseStores(store: Store<any>) {
  segmentStore = getModule(Segments, store)
}

export { initialiseStores, segmentStore }
