import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

const useForm = <T>(initialValue: any) => {
  const [values, setValues] = useState(initialValue)

  const handleChange: InputHTMLAttributes<HTMLInputElement>['onChange'] = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    })
  }

  const reset = () => {
    setValues(initialValue)
  }

  return [values, handleChange, reset]
}

export { useForm }
