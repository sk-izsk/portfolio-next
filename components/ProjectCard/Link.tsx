interface Props {
  href: string
}

const Link: React.FC<Props> = ({ href, children }) => {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      href={href}
      className='hover:text-purple-400 cursor-pointer py-1.5 px-3 bg-purple-200 rounded-md transition-colors font-bold text-purple-500 text-[13px]'
    >
      {children}
    </a>
  )
}

export { Link }
