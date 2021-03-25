interface Props {}

const Point: React.FC<Props> = ({ children }) => {
  return (
    <li>
      <em className='dark:text-white'>{children}</em>
    </li>
  )
}

export { Point }
