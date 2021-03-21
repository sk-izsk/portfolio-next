import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Photo } from '../axios/api-types'

const initialState: Photo[] = []

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhotos: (state: Photo[], action: PayloadAction<Photo[]>) => {
      state = action.payload
      return state
    },
  },
})

export const { addPhotos } = photosSlice.actions

export default photosSlice.reducer
