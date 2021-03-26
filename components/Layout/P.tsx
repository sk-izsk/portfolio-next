import cls from 'classnames'
interface Props {
  className?: string
}

const P: React.FC<Props> = ({ className, children }) => {
  return (
    <p
      className={cls(
        'max-w-4xl dark:text-white text-lg font-medium text-gray-600 sm:leading-9',
        className,
      )}
    >
      {children}
    </p>
  )
}

export { P }
