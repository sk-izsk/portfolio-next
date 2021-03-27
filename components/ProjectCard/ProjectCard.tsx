import cls from 'classnames'
import { LineClamp } from './LineClamp'
import { Link } from './Link'

interface Props {
  className?: string
  nameOfOrganization: string
  startYear: string
  endYear: string
  details: string
  link?: string
  demoLink?: string
}

const ProjectCard: React.FC<Props> = ({
  className,
  startYear,
  endYear,
  nameOfOrganization,
  link,
  demoLink,
  details,
}) => {
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
            {link && <Link href={link}>Link</Link>}
            {demoLink && <Link href={demoLink}>Demo Link</Link>}
          </section>
        </footer>
      </section>
    </article>
  )
}

export { ProjectCard }
