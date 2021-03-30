import { useSelector } from 'react-redux'
import { SkillsInformation } from '../axios'
import { Layout, SkillContainer } from '../components'
import { RootState } from '../redux'
import { getSpecificSkills } from '../utils'

interface Props {}

const Skills: React.FC<Props> = () => {
  const skills: SkillsInformation[] = useSelector<RootState, SkillsInformation[]>(
    (state: RootState) => state.skillsInformation,
  )
  const frontEnd: SkillsInformation[] = getSpecificSkills('FRONTEND', skills)
  const backEnd: SkillsInformation[] = getSpecificSkills('BACKEND', skills)
  const misc: SkillsInformation[] = getSpecificSkills('MISC', skills)
  return (
    <Layout>
      <div className='flex flex-wrap'>
        <SkillContainer title='Frontend' skills={frontEnd} />
        <SkillContainer title='Backend' skills={backEnd} />
        <SkillContainer title='Misc' skills={misc} />
      </div>
    </Layout>
  )
}

export default Skills
