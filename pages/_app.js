import '@/styles/globals.css'
import Layout from "@/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

import "@/styles/styles.css"

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
