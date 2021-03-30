interface Props {}

const InputField: React.FC<Props> = () => {
  return (
    <div className=''>
      <label className='block text-sm text-gray-00' htmlFor='cus_name'>
        Name
      </label>
      <input
        className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
        name='cus_name'
        type='text'
        placeholder='Your Name'
      />
      <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
        Invalid username field !
      </span>
    </div>
  )
}

export { InputField }
