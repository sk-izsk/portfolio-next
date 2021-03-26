import Link from 'next/link'
import { FooterData, RouteLink } from '../../utils'

interface Props {
  footerData: FooterData
}

const FooterList: React.FC<Props> = ({ footerData }) => {
  const { outerLink, header, routeLinks }: FooterData = footerData
  return (
    <article className='space-y-5'>
      <h4 className='text-xs font-semibold tracking-wide dark:text-white text-gray-900 uppercase'>
        {header}
      </h4>
      <ul className='space-y-4'>
        {routeLinks.map((routeLink: RouteLink, index: number) => (
          <li
            className='hover:text-purple-500 dark:hover:text-purple-500 dark:text-white transition-colors duration-200 tracking-tight font-medium'
            key={index}
          >
            {outerLink ? (
              <a target='_blank' rel='noreferrer' href={routeLink.path}>
                {routeLink.name}
              </a>
            ) : (
              <Link href={routeLink.path}>{routeLink.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </article>
  )
}

export { FooterList }
