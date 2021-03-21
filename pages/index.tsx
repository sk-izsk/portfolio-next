import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Informations } from '../axios'
import { fetchInformation } from '../axios/api'
import {
  addAvatar,
  addExperienceInformations,
  addMyOffers,
  addPhotos,
  addSkillInformations,
} from '../redux'
import { addEducationInformations } from '../redux/educationInformationsSlice'
import { RootState } from '../redux/store'

interface Props {
  data: Informations
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const data = await fetchInformation()

  return {
    props: {
      data: data.data,
    },
  }
}

const Home: React.FC<Props> = ({ data }) => {
  console.log('data: ', data)
  const dispatch = useDispatch()
  const state = useSelector<any>((state: RootState) => state)
  console.log('state: ', state)

  const {
    avatar,
    educationInformations,
    experienceInformations,
    photos,
    skillsInformation,
    myOffers,
  } = data

  useEffect(() => {
    dispatch(addAvatar(avatar))
    dispatch(addEducationInformations(educationInformations))
    dispatch(addExperienceInformations(experienceInformations))
    dispatch(addPhotos(photos))
    dispatch(addSkillInformations(skillsInformation))
    dispatch(addMyOffers(myOffers))
  }, [])
  return <div>hello</div>
}

export default Home
