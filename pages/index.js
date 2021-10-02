// import Head from 'next/head'
import Link from 'next/link'
import { replies } from '../data'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Head from '../components/Head/Head'

export default function Home() {

  return (
    <div>
      <Head />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
