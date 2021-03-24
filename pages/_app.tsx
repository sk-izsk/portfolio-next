import type { AppProps } from 'next/app'
import React from 'react'
import { AppProvider } from '../AppProvider'
import { Footer, Header } from '../components'
import '../styles/globals.css'

interface Props {}

const MyApp: React.FC<Props> = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
  )
}

export default MyApp
