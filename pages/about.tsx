import cls from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, MyOffers } from '../axios'
import { AboutMe, GetInTouch, Layout, TechStack } from '../components'
import { RootState } from '../redux'
import styles from '../styles/About.module.css'

interface Props {}

const About: React.FC<Props> = () => {
  // const avatar: Avatar = useSelector<RootState, Avatar>((state: RootState) => state.avatar)
  const avatar: Avatar = useSelector<RootState, Avatar>((state: RootState) => state.avatar)
  const myOffers: MyOffers = useSelector<RootState, MyOffers>((state: RootState) => state.myOffers)

  return (
    <Layout>
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
    </Layout>
  )
}

export default About
