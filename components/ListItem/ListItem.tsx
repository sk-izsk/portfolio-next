import { IconType } from 'react-icons'
import { Button } from '../Button'
import { H2 } from '../Layout/'

interface Props {
  nameOfOrganization: string
  startYear: string
  endYear: string
  details: string
  Icon: IconType
  link?: string
  demoLink?: string
}

const ListItem: React.FC<Props> = ({
  nameOfOrganization,
  startYear,
  endYear,
  details,
  Icon,
  link,
  demoLink,
}) => {
  return (
    <div className='flex flex-row items-center dark:bg-gray-800 bg-blue-50 text-purple-600 rounded-md py-4 mb-4 border-2 shadow-inner dark:shadow-none dark:border-purple-600 text-sm'>
      <div className='text-white rounded-md  px-3 justify-center items-center text-'>
        <Icon size={35} color='#7C3AED' />
      </div>
      <div className='px-2 text-purple-600 border-l-2 border-purple-600'>
        <H2 className='text-purple-600 dark:text-white'>{nameOfOrganization}</H2>
        <div className='text-md my-2 dark:text-white'>{`${startYear} - ${endYear}`}</div>
        <div className='inline-flex text-lg dark:text-white'>{details}</div>
        <div className='flex flex-row'>
          {link && (
            <Button>
              <a target='_blank' rel='noreferrer' href={link}>
                Open
              </a>
            </Button>
          )}
          {demoLink && (
            <Button>
              <a target='_blank' rel='noreferrer' href={demoLink}>
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export { ListItem }
