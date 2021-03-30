import ProgressBar from '@ramonak/react-progress-bar'
import cls from 'classnames'
import { SkillsInformation } from '../../axios'
import { H2, P } from '../Layout'
import styles from './SkillContainer.module.css'

interface Props {
  title: string
  skills: SkillsInformation[]
}

const SkillContainer: React.FC<Props> = ({ title, skills }) => {
  return (
    <div
      className={cls(
        'text-center flex-1 m-2 rounded-md border-2 p-4 shadow-inner dark:shadow-none dark:border-purple-600',
        styles.skillContainer,
      )}
    >
      <H2>{title}</H2>
      {skills.map((skill: SkillsInformation, index: number) => (
        <div className='text-left' key={index}>
          <P>{skill.name}</P>
          <ProgressBar
            key={index}
            completed={skill.progress}
            baseBgColor='#ffffff'
            bgcolor={skill.backgroundColor}
          />
        </div>
      ))}
    </div>
  )
}

export { SkillContainer }
