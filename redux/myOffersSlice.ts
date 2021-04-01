import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MyOffers } from '../axios/api-types'

type InitialState = MyOffers

const initialState: InitialState = {
  frontEnd: { name: '', offerings: [] },
  backEnd: { name: '', offerings: [] },
}

const myOffersSlice = createSlice({
  name: 'myOffers',
  initialState,
  reducers: {
    addMyOffers: (state: InitialState, action: PayloadAction<MyOffers>) => {
      state = action.payload
      return state
    },
  },
})

export const { addMyOffers } = myOffersSlice.actions

export default myOffersSlice.reducer
