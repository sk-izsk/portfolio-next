import Link from 'next/link'
interface Props {
  url: string
}

const Name: React.FC<Props> = ({ url }) => {
  return (
    <Link aria-label='Go to homepage' href='/'>
      <div className='flex items-center justify-around'>
        <img className='rounded-full' src={url} width={50} height={50} />
        <span className='text-gray-900 font-bold tracking-tighter'>Zeeshan</span>
      </div>
    </Link>
  )
}

export default Name
