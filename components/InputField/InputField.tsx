import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface Props {
  value?: string
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange']
  placeholder?: string
  error?: string
  id?: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
}

const InputField: React.FC<Props> = ({ value, onChange, placeholder, error, id, type }) => {
  return (
    <div className='relative mt-3 w-full appearance-none label-floating'>
      <input
        className='tracking-wide flex-1 py-2 px-4 mb-2 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500'
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
      />
      {error && (
        <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
          {error}
        </span>
      )}
    </div>
  )
}

type TextAreaProps = Omit<Props, 'onChange'> & {
  onChange?: TextareaHTMLAttributes<HTMLTextAreaElement>['onChange']
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder, error, id }) => {
  return (
    <div className='relative w-full mt-3 appearance-none label-floating'>
      <textarea
        className='resize-none tracking-wide py-2 px-4  mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500 required'
        id={id}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      ></textarea>
      {error && (
        <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
          {error}
        </span>
      )}
    </div>
  )
}

export { InputField, TextArea }
