import { useSelector } from 'react-redux'
import { Avatar } from '../../../axios/api-types'
import { RootState } from '../../../redux/store'
import Menu from './Menu'
import Name from './Name'
interface Props {}

const Header: React.FC<Props> = () => {
  const avatar: Avatar = useSelector<RootState, Avatar>((state: RootState) => state.avatar)
  return (
    <header className='pb-12 bg-gradient-to-b from-white to-transparent z-30 fixed w-full top-0 left-0'>
      <div className='container flex items-center justify-between py-4'>
        <Name url={avatar.avatarTwo} />
        <Menu />
      </div>
    </header>
  )
}

export default Header
