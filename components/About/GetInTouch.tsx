import Link from 'next/link'
import { H2, P } from '../Layout'

interface Props {}

const GetInTouch: React.FC<Props> = () => {
  return (
    <>
      <H2>Get in touch</H2>
      <P>
        The easiest way is to send an e-mail with your queries to{' '}
        <a href='mailto:sk.zeeshan1992@gmail.com'>sk.zeeshan1992@gmail.com</a>. I'll usually respond
        <b> within 48 hours</b>. Otherwise <Link href='/contact'>{"here's"}</Link> all my social
        media links.
      </P>
    </>
  )
}

export { GetInTouch }
