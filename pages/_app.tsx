import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
        <title>Keen Slider</title>
        <meta name="description" content="Keen Slider"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Allura&family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
  <Component {...pageProps} /> 
  </>)
}

export default MyApp
