import cls from 'classnames'
interface Props {
  className?: string
}

const H1: React.FC<Props> = ({ className, children }) => {
  return (
    <h1
      className={cls(
        'text-4xl sm:text-6xl dark:text-white lg:text-7xl leading-none font-extrabold tracking-tight dark:text-white text-gray-900 mb-3 sm:mb-8',
        className,
      )}
    >
      {children}
    </h1>
  )
}

const H2: React.FC<Props> = ({ className, children }) => {
  return (
    <h2
      className={cls(
        'text-xl dark:text-white sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight',
        className,
      )}
    >
      {children}
    </h2>
  )
}
export { H1, H2 }
