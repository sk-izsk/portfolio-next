import type { AppProps } from 'next/app'
import React from 'react'
import { AppProvider } from '../AppProvider'
import { Header } from '../components'
import '../styles/globals.css'

interface Props {}

const MyApp: React.FC<Props> = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Header />
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
