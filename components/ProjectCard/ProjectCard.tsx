import cls from 'classnames'
import { Information } from '../../axios'
import { LineClamp } from './LineClamp'
import { Link } from './Link'

interface Props {
  className?: string
  information: Information
}

const ProjectCard: React.FC<Props> = ({ className, information }) => {
  const { startYear, endYear, nameOfOrganization, link, demoLink, details } = information
  return (
    <article
      className={cls(
        'rounded-3xl max-w-md border-2 shadow-inner dark:shadow-none dark:border-purple-600',
        className,
      )}
    >
      <section className='p-6'>
        <h3 className='font-bold text-sm tracking-tight text-purple-800'>
          {`${startYear} - ${endYear}`}
        </h3>
        <h2 className='text-xl dark:text-white font-extrabold tracking-tight text-gray-900 mt-1 capitalize'>
          {nameOfOrganization}
        </h2>

        <LineClamp className='mt-3' text={details} />

        <footer className='mt-8'>
          <section className='flex items-center space-x-2 '>
            <Link href={link}>Link</Link>
            <Link href={demoLink}>Demo Link</Link>
          </section>
        </footer>
      </section>
    </article>
  )
}

export { ProjectCard }
