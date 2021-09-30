// import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <header className="flex items-center justify-between p-4 bg-indigo-900 text-gray-50 text-2xl mb-7">
          <h1>Cookie Stand Admin</h1>
      </header>
     <main>
       <div className="mb-7 justify-between p-4 bg-indigo-200 w-3/5 m-auto">
          <form className="flex w-1/2 p-2 mx-auto bg-indigo-600">
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
     </main>

     <footer className="p-4 bg-indigo-900 text-gray-50">
      <p>2021</p>
      </footer>
    </div>
  )
}
