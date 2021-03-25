import { MyOffers } from '../../axios'
import { H2, P } from '../Layout'
import { Point } from './Point'
interface Props {
  frontEnd: MyOffers['frontEnd']
  backEnd: MyOffers['backEnd']
}

const TechStack: React.FC<Props> = ({ frontEnd, backEnd }) => {
  return (
    <>
      <H2>Tech stack</H2>
      <P>
        I prefer to work in <b>Typescript</b> and usually use <b>ReactJS</b> to create websites and
        Node for Backend work. My skills include -
      </P>
      <H2>What you can expect from me ?</H2>
      <P>In terms of Frontend</P>
      <ul>
        {frontEnd.offerings.map((offer: string, index: number) => (
          <Point key={index}>{offer}</Point>
        ))}
      </ul>
      <P>In terms of Backend</P>
      <ul>
        {backEnd.offerings.map((offer: string, index: number) => (
          <Point key={index}>{offer}</Point>
        ))}
      </ul>
      <P>You can also expect these from me</P>
      <ul>
        <li className='dark:text-white'>
          <strong className='dark:text-white'>Responsive website</strong> -{' '}
          <em>
            ~70% of traffic comes from mobile devices. Great mobile UX and fast loading speeds will
            have a positive impact on conversion rates. I build websites that are responsive and
            provide great user experience in almost all kinds of devices with various screen sizes.
          </em>
        </li>
        <li className='dark:text-white'>
          <strong className='dark:text-white'>Maintainable code</strong> -{' '}
          <em>
            Meticulously commented code, well-named variables and small components will allow your
            team to extend my work easily while also making the codebase maintainable in the long
            run.
          </em>
        </li>
      </ul>
    </>
  )
}

export { TechStack }
