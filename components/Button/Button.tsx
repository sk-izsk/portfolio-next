import cls from 'classnames'
interface Props {
  onClick?: () => void
  className?: string
}

const Button: React.FC<Props> = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={cls(
        'flex-none m-2 bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl ring-2 ring-offset-2 ring-offset-white ring-gray-900 focus:outline-none transition-colors duration-200',
        className,
      )}
    >
      {children}
    </button>
  )
}

export { Button }
