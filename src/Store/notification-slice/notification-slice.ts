import { AlertColor } from '@mui/material'
import { createSlice } from '@reduxjs/toolkit'
import { store } from '../'

const notificationSlice = createSlice({
  name: 'notification-slice',
  initialState: {
    message: '',
    notificationType: 'info',
  },
  reducers: {
    addMessage: (state, payload) => {
      state.message = payload.payload.message
      state.notificationType = payload.payload.notificationType
    },
  },
})

export const notificationSliceReducer = notificationSlice.reducer
export const addMessage = (
  message: string,
  notificationType: AlertColor = 'info',
) =>
  store.dispatch(
    notificationSlice.actions.addMessage({
      message: message,
      notificationType: notificationType,
    }),
  )
export const useNotification = (state: any) => state.notificationSlice
