import '../styles/globals.css'
import Head from 'next/head'
import PageLayout from '../styles/components/PageLayout'

function MyApp({ Component, pageProps }) {
  return <>
  <PageLayout></PageLayout>
    <main>
    <Component {...pageProps} />
    </main>
  </>
}

export default MyApp
