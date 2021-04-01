import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Avatar } from '../axios/api-types'

type InitialState = Avatar

const initialState: InitialState = {
  avatarOne: '',
  avatarTwo: '',
}

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    addAvatar: (state: InitialState, action: PayloadAction<Avatar>) => {
      state = action.payload
      return state
    },
  },
})

export const { addAvatar } = avatarSlice.actions

export default avatarSlice.reducer
