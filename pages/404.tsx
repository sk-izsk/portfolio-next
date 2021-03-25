import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface Props {}

const Custom404: React.FC<Props> = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
  })

  return null
}

export default Custom404
