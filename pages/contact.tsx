import { ContactForm, Layout, SocialContainer } from '../components'

interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <Layout headTitle='Zeeshan Portfolio | Contact'>
      <div className='flex flex-wrap'>
        <ContactForm />
        <SocialContainer />
      </div>
    </Layout>
  )
}

export default Contact
