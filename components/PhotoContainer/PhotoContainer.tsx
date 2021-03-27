import cls from 'classnames'
import { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import styles from './PhotoContainer.module.css'

interface Props {
  url: string
  className?: string
}

const PhotoContainer: React.FC<Props> = ({ url, className }) => {
  const [hovering, setHovering] = useState<boolean>(false)
  return (
    <article
      onMouseOver={() => setHovering(true)}
      onFocus={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onBlur={() => setHovering(false)}
      className={cls('rounded-3xl max-w-md', className)}
    >
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={7}
        perspective={800}
        transitionSpeed={1500}
        tiltReverse
        className={cls(styles.imgWrapper, 'rounded-md p-5 relative cursor-pointer')}
      >
        <div
          style={{
            transform: hovering ? 'translateZ(10px)' : 'translateZ(0)',
          }}
          className={cls(
            'w-1/4 sm:w-2/4 absolute z-0 -right-2 sm:right-6 -top-4 transition-all duration-500 ease-out',
            { 'sm:-right-2 -top-8': hovering },
          )}
        >
          <div className={cls(styles.imgBubble, 'rounded-full')} />
        </div>
        <div
          style={{
            transform: hovering ? 'translateZ(10px)' : 'translateZ(0)',
          }}
          className='w-2/12 absolute z-0 -left-2 bottom-16 transition-transform duration-500 ease-out'
        >
          <div className={cls(styles.imgBubble, 'rounded-full')} />
        </div>
        <div
          style={{
            transform: hovering ? 'translateZ(20px)' : 'translateZ(0)',
          }}
          className='w-5 absolute z-0 -left-6 bottom-11 transition-transform duration-500 ease-out'
        >
          <div className={cls(styles.imgBubble, 'rounded-full')} />
        </div>

        <img
          className='rounded-lg hover:shadow-2xl z-20 transition-all duration-500 ease-out'
          style={{
            transform: hovering ? 'translateZ(20px)' : 'translateZ(0)',
          }}
          src={url}
          onClick={() => window.open('https://www.instagram.com/sk_izsk/', '_blank')}
        />
      </Tilt>
    </article>
  )
}

export { PhotoContainer }
