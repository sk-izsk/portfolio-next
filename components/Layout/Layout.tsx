import cls from 'classnames'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Avatar } from '../../axios'
import { RootState } from '../../redux'
interface Props {
  className?: string
  headTitle?: string
}

const Layout: React.FC<Props> = ({ className, headTitle, children }) => {
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
        {headTitle && (
          <Head>
            <title>{headTitle}</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
        )}

        <div className='container section-margin-top mb-8'>{children}</div>
      </div>
    )
  }
  return null
}

export { Layout }
