import { store, setLoader } from '@store'

class Loader {
  public enableLoader() {
    store.dispatch(setLoader({ loader: true }))
  }

  public disableLoader() {
    store.dispatch(setLoader({ loader: false }))
  }
}

export const loaderService = new Loader()
