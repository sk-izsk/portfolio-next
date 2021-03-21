import { combineReducers } from '@reduxjs/toolkit'
import avatarSlice from './avatarSlice'
import educationInformationsSlice from './educationInformationsSlice'
import experienceInformationsSlice from './experienceInformationsSlice'
import myOffersSlice from './myOffersSlice'
import photosSlice from './photosSlice'
import skillsInformationSlice from './skillsInformationSlice'

const rootReducer = combineReducers({
  avatar: avatarSlice,
  educationInformations: educationInformationsSlice,
  experienceInformations: experienceInformationsSlice,
  photos: photosSlice,
  skillsInformation: skillsInformationSlice,
  myOffers: myOffersSlice,
})

export { rootReducer }
