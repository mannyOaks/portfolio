import 'public/styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Manuel Robles</title>
    </Head>
    <Component {...pageProps} />
  </>
}