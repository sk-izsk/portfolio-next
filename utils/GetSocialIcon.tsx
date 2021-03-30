import { IconType } from 'react-icons'
import {
  FaFacebookSquare,
  FaGithubAlt,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export type SocialMediaName =
  | 'Github'
  | 'LinkedIn'
  | 'Twitter'
  | 'Facebook'
  | 'Instagram'
  | 'Telegram'
  | 'Email'

export interface SocialIcon {
  Icon: IconType
  color: string
}

const GetSocialIcon = (name: SocialMediaName): SocialIcon => {
  switch (name) {
    case 'Github':
      return { Icon: FaGithubAlt, color: '#6e5494' }
    case 'LinkedIn':
      return { Icon: FaLinkedin, color: '#0a66c2' }
    case 'Twitter':
      return { Icon: FaTwitter, color: '#1da1f2' }
    case 'Facebook':
      return { Icon: FaFacebookSquare, color: '#1877f2' }
    case 'Instagram':
      return { Icon: FaInstagram, color: '#c32aa3' }
    case 'Telegram':
      return { Icon: FaTelegram, color: '#0088cc' }
    case 'Email':
      return { Icon: MdEmail, color: '#7C3AED' }
  }
}

export { GetSocialIcon }
