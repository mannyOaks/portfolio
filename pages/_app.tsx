import 'public/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/dist/next-server/lib/router/router'

function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider attribute='class'>
    <Component {...pageProps}/>
  </ThemeProvider>
}

export default App