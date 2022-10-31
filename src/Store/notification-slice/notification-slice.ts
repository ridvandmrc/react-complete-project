import { createSlice } from '@reduxjs/toolkit'
import { store } from '../'

const notificationSlice = createSlice({
  name: 'notification-slice',
  initialState: {
    message: '',
  },
  reducers: {
    addMessage: (state, payload) => {
      state.message = payload.payload
    },
  },
})

export const notificationSliceReducer = notificationSlice.reducer
export const addMessage = (message: string) =>
  store.dispatch(notificationSlice.actions.addMessage(message))
export const useNotification = (state: any) => state.notificationSlice
