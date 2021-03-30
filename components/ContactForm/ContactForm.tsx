import { InputField } from '../InputField/InputField'

interface Props {}

const ContactForm: React.FC<Props> = () => {
  return (
    <div className='text-center flex-8 m-2 rounded-md border-2 p-4 shadow-inner dark:shadow-none dark:border-purple-600'>
      <InputField />
    </div>
  )
}

export { ContactForm }
