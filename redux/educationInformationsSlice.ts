import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Information } from '../axios/api-types'
const initialState: Information[] = []

const educationInformations = createSlice({
  name: 'educationInformations',
  initialState,
  reducers: {
    addEducationInformations: (state: Information[], action: PayloadAction<Information[]>) => {
      state = action.payload
      return state
    },
  },
})

export const { addEducationInformations } = educationInformations.actions

export default educationInformations.reducer
