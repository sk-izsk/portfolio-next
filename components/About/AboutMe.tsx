import { H1, P } from '../Layout'
interface Props {}

const AboutMe: React.FC<Props> = () => {
  return (
    <>
      <H1>About me</H1>
      <div className='max-w-4xl text-lg font-medium text-gray-600 sm:leading-9'>
        <P>
          I'm a full stack web developer. I love to create websites and mobile applications with
          beautiful and love to develop my own backend for it and then integrate the two
          (website/mobile and API) to create a full blown web/mobile application - usually, I prefer
          to both at the same time. This allows me to build almost any kind of web app or
          application very quickly.I always keep myself up to date with the ever changing tech
          industry. I can quickly integrate with any tech stack and have experience using all major
          state management and styling paradigms.
          <br />
          Apart from coding I am passionate about photography as well.
        </P>
      </div>
    </>
  )
}

export { AboutMe }
