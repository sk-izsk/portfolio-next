import { ContactForm, Layout, SocialContainer } from '../components'

interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <Layout>
      <div className='flex flex-wrap'>
        <ContactForm />
        <SocialContainer />
      </div>
    </Layout>
  )
}

export default Contact