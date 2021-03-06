import type { AppProps } from 'next/app'
import Router, { NextRouter, useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import React, { useEffect } from 'react'
import { PopupWidget } from 'react-calendly'
import { AppProvider } from '../AppProvider'
import { Footer, Header } from '../components'
import * as gtag from '../lib'
import '../styles/globals.css'
import { isProduction } from '../utils'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
})
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

interface Props {}

const MyApp: React.FC<Props> = ({ Component, pageProps }: AppProps) => {
  const router: NextRouter = useRouter()

  const handleRouteChange = (url: URL) => isProduction && gtag.pageview(url)

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <AppProvider>
      <Header />
      <Component {...pageProps} />
      <PopupWidget
        branding
        color='#7C3AED'
        pageSettings={{
          backgroundColor: '#ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '4d5055',
        }}
        text='Want to book a meeting ?'
        textColor='#ffffff'
        url='https://calendly.com/izsk/60min'
      />
      <Footer />
    </AppProvider>
  )
}

export default MyApp
