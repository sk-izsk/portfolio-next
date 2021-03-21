import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
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

interface Props {
  data: Informations
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const data = await fetchInformation()

  return {
    props: {
      data: data.data[0],
    },
  }
}

const Home: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch()

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
