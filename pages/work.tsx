import { useSelector } from 'react-redux'
import { Information } from '../axios'
import { Layout, ProjectCard } from '../components'
import { RootState } from '../redux/store'

interface Props {}

const Education: React.FC<Props> = () => {
  const education: Information[] = useSelector<RootState, Information[]>(
    (state: RootState) => state.experienceInformations,
  )
  return (
    <Layout>
      <div className='container section-margin-top mb-5'>
        <section className='mt-28 grid grid-cols-1 justify-items-center items-start lg:justify-items-start gap-y-10 md:gap-y-14 md:gap-x-10 md:grid-cols-2 lg:grid-cols-3'>
          {education.map((information: Information, index: number) => (
            <ProjectCard key={index} {...information} />
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default Education
