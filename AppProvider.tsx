import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { store } from './redux'

interface Props {}

const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute='class'>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  )
}

export { AppProvider }
