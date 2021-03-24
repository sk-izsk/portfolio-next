import cls from 'classnames'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMoon, FiSun } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import styles from './Header.module.css'

interface Props {}

const Menu: React.FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(false)

  const [isMounted, setIsMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  const handleTheme = (e) => {
    e.preventDefault()
    switchTheme()
  }

  return (
    <nav className='flex justify-center'>
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
          className={`flex flex-col ${styles.menu} md:flex-row md:items-center`}
        >
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/education'>Education</Link>
          <Link href='/skill'>Skill</Link>
          <Link href='/work'>Work</Link>
          <Link href='/photos'>Photos</Link>
          <Link href='/contact'>Contact</Link>
          <a className={styles.themeLink} onClick={handleTheme}>
            {theme === 'light' ? (
              <FiMoon size={20} color='#000000' />
            ) : (
              <FiSun size={20} color='#ffffff' />
            )}
          </a>
        </section>
      </div>
    </nav>
  )
}

export { Menu }
