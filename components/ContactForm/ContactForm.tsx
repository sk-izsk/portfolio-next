import React, { ChangeEventHandler, useState } from 'react'
import { Payload, sendEmail } from '../../axios'
import { useForm } from '../../hooks'
import { formSchema } from '../../validation/formSchema'
import { Button } from '../Button'
import { InputField, TextArea } from '../InputField/InputField'
import { H2 } from '../Layout'

interface Props {}

type ErrorType = keyof Omit<Payload, 'environment'>

interface Error {
  type?: ErrorType
  message?: string
}

const ContactForm: React.FC<Props> = () => {
  const [values, handleChange, reset] = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [error, setError] = useState<Error>({ type: undefined, message: undefined })

  const onSubmit = async (e) => {
    try {
      e.preventDefault()
      setError({ type: undefined, message: undefined })
      const validatedValues = await formSchema.validate(values)
      const payload: Payload = {
        ...validatedValues,
        environment: process.env.NODE_ENV,
      }
      await sendEmail(payload)
      reset()
    } catch (error) {
      const { type, message } = error
      error.name === 'ValidationError' && setError({ type, message })
    }
  }
  return (
    <div className='text-center flex-1 m-2 rounded-md border-2 p-4 shadow-inner dark:shadow-none dark:border-purple-600'>
      <form
        id='contact-me'
        className='w-full flex-1 flex flex-col items-center mx-auto max-w-3xl shadow p-8 text-gray-700 '
        onSubmit={onSubmit}
      >
        <H2>Contact form</H2>
        <InputField
          id='name'
          value={values.name}
          onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
          type='name'
          placeholder='Your name'
          error={error?.type === 'name' && error.message}
        />
        <InputField
          id='email'
          value={values.email}
          onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
          type='email'
          placeholder='Your email'
          error={error?.type === 'email' && error.message}
        />
        <InputField
          id='subject'
          value={values.subject}
          onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
          type='text'
          placeholder='Enter your subject'
          error={error?.type === 'subject' && error.message}
        />
        <TextArea
          id='message'
          value={values.message}
          onChange={handleChange as ChangeEventHandler<HTMLTextAreaElement>}
          type='text'
          placeholder='Enter your message'
          error={error?.type === 'message' && error.message}
        />

        <Button
          type='submit'
          className='w-full shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
        >
          Send
        </Button>
      </form>
    </div>
  )
}

export { ContactForm }
