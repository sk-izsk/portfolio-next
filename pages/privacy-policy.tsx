import React from 'react'
import { H1, H2, Layout } from '../components'

interface Props {}

const PrivacyPolicy: React.FC<Props> = () => {
  return (
    <Layout>
      <article className='prose prose-lg container prose-purple pt-16 section-margin-top'>
        <header className='text-center mb-20 md:mb-32'>
          <H1>Privacy Policy</H1>
          <p className='dark:text-white'>How do I handle your data ?</p>
        </header>

        <p className='dark:text-white'>
          This website does not collect any personal data. It does not set any cookies and it does
          not use any third-party tracking scripts. No user analytics or other metrics are processed
          during your visit, and the server does not write any log files, which means your IP
          address is not stored anywhere.
        </p>
        <p className='dark:text-white'>
          Basically, it’s just a free piece of content, no strings attached.
        </p>

        <H2>Secure Data Transfer</H2>
        <p className='dark:text-white'>
          This website transmits itself using HTTPS, encrypting all data between the browser and the
          server. Your network provider may still be able to see that you are loading files from
          this site, but not their content. This also protects you from third parties intercepting
          data e.g. while browsing on public WiFi, or network providers injecting ads into this
          site.
        </p>

        <H2>Responsible Data Controller</H2>
        <p className='dark:text-white'>
          <strong className='dark:text-white'>Zeeshan</strong>
          <br />
          Montreal
          <br />
          Quebec
          <br />
          Canada
        </p>

        <p className='dark:text-white pb-5'>
          If you have any questions or concerns about this,
          <br />
          please contact me at
          <a href='mailto:sk.zeeshan1992@gmail.com'> sk.zeeshan1992@gmail.com</a>
        </p>
      </article>
    </Layout>
  )
}

export default PrivacyPolicy
