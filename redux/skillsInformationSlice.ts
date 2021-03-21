import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SkillsInformation } from '../axios/api-types'
const initialState: SkillsInformation[] = []

const skillInformations = createSlice({
  name: 'skillInformations',
  initialState,
  reducers: {
    addSkillInformations: (
      state: SkillsInformation[],
      action: PayloadAction<SkillsInformation[]>,
    ) => {
      state = action.payload
      return state
    },
  },
})

export const { addSkillInformations } = skillInformations.actions

export default skillInformations.reducer
