interface Props {
  children
}

const P: React.FC<Props> = ({ children }) => {
  return (
    <p className='max-w-4xl dark:text-white text-lg font-medium text-gray-600 sm:leading-9'>
      {children}
    </p>
  )
}

export { P }
