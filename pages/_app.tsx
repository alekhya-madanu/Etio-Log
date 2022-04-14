import '../styles/globals.css'
import '../node_modules/antd/dist/antd.css';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/DefaultLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
