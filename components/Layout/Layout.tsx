import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Avatar } from '../../axios'
import { RootState } from '../../redux'
interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  const avatar: Avatar = useSelector<RootState, Avatar>((state: RootState) => state.avatar)
  const router = useRouter()

  useEffect(() => {
    if (!avatar.avatarOne) {
      router.replace('/')
    }
  })

  if (avatar.avatarOne) {
    return <div className='dark:bg-gray-800'>{children}</div>
  }
  return null
}

export { Layout }
