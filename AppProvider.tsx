import { ThemeProvider } from 'next-themes'
import ReactGa from 'react-ga'
import { Provider } from 'react-redux'
import { store } from './redux'

interface Props {}

const AppProvider: React.FC<Props> = ({ children }) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGa.initialize(process.env.GOOGLE_ANALYTICS as string)
    ReactGa.pageview('/')
  }

  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  )
}

export { AppProvider }
