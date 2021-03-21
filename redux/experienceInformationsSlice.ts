import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Information } from '../axios/api-types'
const initialState: Information[] = []

const experienceInformations = createSlice({
  name: 'experienceInformations',
  initialState,
  reducers: {
    addExperienceInformations: (state: Information[], action: PayloadAction<Information[]>) => {
      state = action.payload
      return state
    },
  },
})

export const { addExperienceInformations } = experienceInformations.actions

export default experienceInformations.reducer
