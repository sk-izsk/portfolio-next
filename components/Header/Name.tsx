import Link from 'next/link'
interface Props {
  url: string
}

const Name: React.FC<Props> = ({ url }) => {
  return (
    <div className='cursor-pointer'>
      <Link aria-label='Go to homepage' href='/'>
        <div className='flex items-center justify-around'>
          <img className='rounded-full mr-2' src={url} width={50} height={50} />
          <span className='dark:text-white text-gray-900 font-bold tracking-tighter'>Zeeshan</span>
        </div>
      </Link>
    </div>
  )
}

export { Name }
