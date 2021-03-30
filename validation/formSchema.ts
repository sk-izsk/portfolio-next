import * as yup from 'yup'
import { emailSchema, stringSchema } from './commonSchema'

export interface InputValues {
  name: string
  email: string
  subject: string
  message: string
  environment?: string
}
const formSchema: yup.SchemaOf<Omit<InputValues, 'environment'>> = yup.object().shape({
  name: stringSchema.required(),
  email: emailSchema.required(),
  subject: stringSchema.required(),
  message: stringSchema.required(),
})

export { formSchema }
