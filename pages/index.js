// import Head from 'next/head'
import Link from 'next/link'
import { replies } from '../data'
import { useState } from 'react'
import Footer from '../components/Footer/footer'

export default function Home() {
  const[reply, setReply] = useState()

  function createbtnHandler(event){
    event.preventDefault();


    const randomReply = replies;

    setReply(randomReply);
  }

  return (
    <div>
      <head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <header className="flex items-center justify-between p-4 bg-indigo-900 text-gray-50 text-2xl mb-7">
          <h1>Cookie Stand Admin</h1>
          <nav className="flex items-center justify-left space-x-10">
          <Link href="/about">
            <a className="text-xl" href="about">Overview</a>
          </Link>
          </nav>
      </header>
     <main>
       <div className="mb-7 justify-between p-4 bg-indigo-200 w-3/5 m-auto rounded-lg">
         <h1 className="text-center text-2xl mb-4">Create Cookie Stand</h1>
          <form onSubmit={ createbtnHandler } className="flex w-1/2 p-2 mx-auto bg-indigo-600">
            <label for="location" className="p-2 text-gray-50">Location:</label>
            <input name="location" id="location"/>
            <button className="px-2 py-1 bg-indigo-900 text-gray-50">Create</button>
          </form>
          
          <table className="w-1/2 mx-auto my-4">
              <tr>
                <th>Minimum Customers per Hour</th>
                <th>Maximum Customers per Hour</th>
                <th>Average Cookies per Sale</th>
              </tr>
              <tr>
                <td className="text-center border border-indigo-300 bg-gray-50">x</td>
                <td className="text-center border border-indigo-300 bg-gray-50">x</td>
                <td className="text-center border border-indigo-300 bg-gray-50">x</td>
              </tr>
              </table>

        </div>

        <p className="text-center">Report Table Coming Soon...</p>
        <p className="text-center my-8">JSON Placeholder...</p>

     </main>

      <Footer />

    </div>
  )
}
