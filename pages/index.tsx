import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchInformation, Informations } from '../axios'
import { DashBoard } from '../components'
import {
  addAvatar,
  addEducationInformations,
  addExperienceInformations,
  addMyOffers,
  addPhotos,
  addSkillInformations,
} from '../redux'

interface Props {
  data: Informations
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const data = await fetchInformation()

  return {
    props: {
      data: data.data[0],
      revalidate: 5,
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
  return (
    <div>
      <Head>
        <title>Zeeshan Portfolio | Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <DashBoard />
    </div>
  )
}

export default Home
