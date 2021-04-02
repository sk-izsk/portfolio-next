import type { AppProps } from 'next/app'
import Router, { NextRouter, useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import React, { useEffect } from 'react'
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

  const handleRouteChange = (url: URL) => {
    if (isProduction) gtag.pageview(url)
  }

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
      <Footer />
    </AppProvider>
  )
}

export default MyApp
