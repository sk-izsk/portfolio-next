import type { AppProps } from 'next/app'
import { AppProvider } from '../AppProvider'
import '../styles/globals.css'
import Header from './components/Header/Index'

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
