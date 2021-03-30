import * as yup from 'yup'

const stringSchema: yup.StringSchema<string | undefined> = yup.string().required('Required')
const emailSchema: yup.StringSchema<string | undefined> = yup
  .string()
  .email('Please provide valid email')

export { stringSchema, emailSchema }
