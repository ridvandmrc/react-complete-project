import { createSlice } from '@reduxjs/toolkit'

const loaderState = {
  loader: false,
}

const loaderStore = createSlice({
  name: 'loader-state',
  initialState: loaderState,
  reducers: {
    setLoader: (state, payload) => {
      state.loader = payload.payload.loader
    },
  },
})

export const loaderReducer = loaderStore.reducer
export const setLoader = loaderStore.actions.setLoader
export const useLoader = (state: any) => state.loader.loader
