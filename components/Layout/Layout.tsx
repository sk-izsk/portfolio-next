import cls from 'classnames'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Avatar } from '../../axios'
import { RootState } from '../../redux'
interface Props {
  className?: string
}

const Layout: React.FC<Props> = ({ className, children }) => {
  const avatar: Avatar = useSelector<RootState, Avatar>((state: RootState) => state.avatar)
  const router = useRouter()

  useEffect(() => {
    if (!avatar.avatarOne) {
      router.replace('/')
    }
  })

  if (avatar.avatarOne) {
    return (
      <div className={cls('dark:bg-gray-900', className)}>
        <div className='container section-margin-top mb-8'>{children}</div>
      </div>
    )
  }
  return null
}

export { Layout }
