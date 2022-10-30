import { store, increaseLoader, decreaseLoader } from '@store'

class Loader {
  public increaseLoader() {
    store.dispatch(increaseLoader())
  }

  public decreaseLoader() {
    store.dispatch(decreaseLoader())
  }
}

export const loaderService = new Loader()
