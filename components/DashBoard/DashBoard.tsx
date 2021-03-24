import cls from 'classnames'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { dashBoardLinkData, RouteLink } from '../../utils'
import styles from './DashBoard.module.css'
interface Props {}

const DashBoard: React.FC<Props> = () => {
  const router = useRouter()

  const handleContact = () => router.push('/contact')
  return (
    <section
      className={cls(
        'h-screen w-full flex items-center relative overflow-hidden',
        styles.dashboard,
      )}
    >
      <div className='container md:-mt-40'>
        <article className='flex flex-col'>
          <h1 className='text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mb-3 sm:mb-8'>
            {"I'm a Full stack web developer"}
          </h1>
          <h3 className='order-first sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 mb-3'>
            <Link href='/about'>HELLO, MY NAME IS Zeeshan</Link>
          </h3>
          <p className='max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-12 sm:mb-14 text-gray-500'>
            {`I'm a professional full stack web developer. I love to develop websites and mobile apps with beautiful
            and smooth user interfaces with a fast and scalable backend.`}
          </p>
        </article>

        <button
          onClick={handleContact}
          className='flex-none m-2 bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl ring-2 ring-offset-2 ring-offset-white ring-gray-900 focus:outline-none transition-colors duration-200'
        >
          <span className='hidden lg:inline'>{"Let's work together"}</span>
        </button>
        {dashBoardLinkData.map((data: RouteLink, index: number) => (
          <button
            key={index}
            className='flex-none m-2 bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl ring-2 ring-offset-2 ring-offset-white ring-gray-900 focus:outline-none transition-colors duration-200'
          >
            <a className='hidden lg:inline' rel='noreferrer' target='_blank' href={data.path}>
              {data.name}
            </a>
          </button>
        ))}
      </div>
    </section>
  )
}

export { DashBoard }
