import cls from 'classnames'
import Link from 'next/link'
import { dashBoardLinkData, RouteLink } from '../../utils'
import { Button } from '../Button'
import styles from './DashBoard.module.css'
interface Props {}

const DashBoard: React.FC<Props> = () => {
  return (
    <section
      className={cls(
        'h-screen w-full flex items-center relative overflow-hidden dark:bg-gray-900',
        styles.dashboard,
      )}
    >
      <div className='container md:-mt-40'>
        <article className='flex flex-col'>
          <h1 className='text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight dark:text-white text-gray-900 mb-3 sm:mb-8'>
            I'm a full stack web developer
          </h1>
          <h3 className='order-first sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 mb-3'>
            <Link href='/about'>HELLO, MY NAME IS Zeeshan.</Link>
          </h3>
          <p className='max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-12 sm:mb-14 text-gray-500 dark:text-white'>
            I'm a professional full stack web developer. I love to develop websites and mobile apps
            with beautiful and smooth user interfaces with a fast and scalable backend.
          </p>
        </article>
        {dashBoardLinkData.map((data: RouteLink, index: number) => (
          <Button key={index}>
            <span className='lg:hidden'>{data.name}</span>
            <a className='hidden lg:inline' rel='noreferrer' target='_blank' href={data.path}>
              {data.name}
            </a>
          </Button>
        ))}
      </div>
    </section>
  )
}

export { DashBoard }
