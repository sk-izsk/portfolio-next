import { useState } from 'react'

interface Props {
  className?: string
  text: string
}

const LineClamp: React.FC<Props> = ({ className, text }) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <div className={className}>
      <p>{expanded ? text : `${text.slice(0, 170)}...`}</p>
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className='underline-effect outline-none focus:outline-none mt-1 text-purple-400 text-sm font-medium rounded'
      >
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  )
}

export { LineClamp }
