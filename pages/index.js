// import Head from 'next/head'
import Link from 'next/link'
import { replies } from '../data'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

export default function Home() {

  return (
    <div>
      <head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Header />
      <Main />

      <Footer />

    </div>
  )
}
