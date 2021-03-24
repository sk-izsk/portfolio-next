import { useSelector } from 'react-redux'
import { Avatar } from '../../axios'
import { RootState } from '../../redux'
import { Menu } from './Menu'
import { Name } from './Name'

interface Props {}

const Header: React.FC<Props> = () => {
  const avatarUrl: Avatar = useSelector<RootState, Avatar>((state: RootState) => state.avatar)
  return (
    <header className='pb-1 dark:bg-gray-800 bg-white z-30 fixed w-full top-0 left-0'>
      {avatarUrl && (
        <div className='container flex items-center justify-between py-4'>
          <Name url={avatarUrl.avatarTwo} />
          <Menu />
        </div>
      )}
    </header>
  )
}

export { Header }
