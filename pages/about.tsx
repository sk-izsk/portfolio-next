import cls from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, MyOffers } from '../axios'
import { AboutMe, GetInTouch, Layout } from '../components'
import { TechStack } from '../components/About/TechStack'
import { RootState } from '../redux'
import styles from '../styles/About.module.css'

interface Props {}

const About: React.FC<Props> = () => {
  const avatar: Avatar = useSelector<RootState, Avatar>((state: RootState) => state.avatar)
  const myOffers: MyOffers = useSelector<RootState, MyOffers>((state: RootState) => state.myOffers)

  return (
    <Layout>
      <div className='container section-margin-top'>
        <div className='flex justify-center'>
          <img
            placeholder='blurred'
            className={cls('shadow-md', styles.photo)}
            width={400}
            src={avatar.avatarOne}
          />
        </div>
        <article className='mb-10 mt-16 prose prose-lg prose-purple'>
          <AboutMe />
          <GetInTouch />
          <TechStack frontEnd={myOffers.frontEnd} backEnd={myOffers.backEnd} />
        </article>
      </div>
    </Layout>
  )
}

export default About
