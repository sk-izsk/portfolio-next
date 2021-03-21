import cls from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

interface Props {}

const Menu: React.FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <nav>
      <button
        onClick={() => setOpen(!open)}
        className='w-auto bg-gray-900 rounded-full p-2 hover:bg-gray-700 transition-colors duration-100 focus-within:outline-none z-50 relative md:hidden'
      >
        {open ? (
          <GiHamburgerMenu className="w-8 text-gray-900'" />
        ) : (
          <AiOutlineClose className='w-8 text-white' />
        )}
      </button>

      <div
        className={cls(
          'fixed bg-black top-0 left-0 w-full h-full flex justify-center items-center md:relative md:flex md:bg-transparent z-40',
          { hidden: !open },
        )}
      >
        <section
          onClick={() => setOpen(false)}
          className={'flex flex-col  md:flex-row md:items-center'}
        >
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/work'>Work</Link>
          <Link href='/contact'>Contact</Link>
        </section>
      </div>
    </nav>
  )
}

export default Menu
