import React from 'react'
import { FooterData, footerData } from '../../utils'
import { FooterList } from './FooterList'

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className='footer justify-self-start bg-gray-50 pb-12 pt-16 sm:pt-20 mt-8 sm:mt-10'>
      <div className='max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 container'>
        <section className='text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10'>
          {footerData.map((data: FooterData, index: number) => (
            <FooterList footerData={data} key={index} />
          ))}
        </section>
      </div>
    </footer>
  )
}

export { Footer }
