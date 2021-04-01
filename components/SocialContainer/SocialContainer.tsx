import { useMediaQuery } from 'react-responsive'
import {
  footerData,
  FooterData,
  GetSocialIcon,
  RouteLink,
  SocialIcon,
  SocialMediaName,
} from '../../utils'
import { H2, P } from '../Layout'
interface Props {}

const SocialContainer: React.FC<Props> = () => {
  const socialLinks: RouteLink[] = footerData.find((data: FooterData) => data.header === 'SOCIAL')
    .routeLinks

  const isMobile = useMediaQuery({
    query: '(max-device-width: 471px)',
  })
  return (
    <div
      style={{ flex: isMobile && 1 }}
      className='text-center flex flex-col justify-evenly flex-2 m-2 rounded-md border-2 p-4 shadow-inner dark:shadow-none dark:border-purple-600'
    >
      <H2 className='sm:text-left'>Social Links</H2>
      {socialLinks.map((socialLink: RouteLink, index: number) => {
        const { Icon, color }: SocialIcon = GetSocialIcon(socialLink.name as SocialMediaName)
        return (
          <div
            className='flex items-center cursor-pointer m-2'
            key={index}
            onClick={() => window.open(socialLink.path, '_blank')}
          >
            <Icon size={25} color={color} />
            <P className='ml-3 text-lg'>{socialLink.name}</P>
          </div>
        )
      })}
    </div>
  )
}

export { SocialContainer }
