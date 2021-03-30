import { ChangeEvent, useState } from 'react'

const useForm = <T>(initialValue: T) => {
  const [values, setValues] = useState<T>(initialValue)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const reset = () => {
    setValues(initialValue)
  }

  return [values, handleChange, reset]
}

export { useForm }
