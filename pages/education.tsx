import { FaUserGraduate } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Information } from '../axios'
import { Layout, ListItem } from '../components'
import { RootState } from '../redux/store'

interface Props {}

const Education: React.FC<Props> = () => {
  const education: Information[] = useSelector<RootState, Information[]>(
    (state: RootState) => state.educationInformations,
  )
  return (
    <Layout>
      <div className='container section-margin-top mb-5'>
        {education.map((information: Information, index: number) => (
          <ListItem key={index} {...information} Icon={FaUserGraduate} />
        ))}
      </div>
    </Layout>
  )
}

export default Education
