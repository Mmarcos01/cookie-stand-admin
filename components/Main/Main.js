import CreateForm from './CreateForm'

export default function Main() {

    return(
        <main>
        <div className="mb-7 justify-between p-4 bg-indigo-200 w-3/5 m-auto rounded-lg">
          <h1 className="text-center text-2xl mb-4">Create Cookie Stand</h1>
           <CreateForm />
           
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
    )
}
