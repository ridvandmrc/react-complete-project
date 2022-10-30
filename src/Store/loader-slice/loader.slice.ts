import { createSlice } from '@reduxjs/toolkit'

const loaderState = {
  loader: 0,
}

const loaderStore = createSlice({
  name: 'loader-state',
  initialState: loaderState,
  reducers: {
    increaseLoader: (state) => {
      state.loader = state.loader += 1
    },
    decreaseLoader: (state) => {
      state.loader = state.loader -= 1
    },
  },
})

export const loaderReducer = loaderStore.reducer
export const increaseLoader = loaderStore.actions.increaseLoader
export const decreaseLoader = loaderStore.actions.decreaseLoader
export const useLoader = (state: any) => state.loader.loader
