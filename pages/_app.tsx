import type { AppProps } from 'next/app'
import { AppProvider } from '../AppProvider'
import '../styles/globals.css'

interface Props {}

const MyApp: React.FC<Props> = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
