import CreateForm from './CreateForm'
import ReportTable from './ReportTable'

export default function Main(props) {

    return(
        <main>
        <div className="mb-7 justify-between p-4 bg-indigo-200 w-3/5 m-auto rounded-lg">
          <h1 className="text-center text-2xl mb-4">Create Cookie Stand</h1>
           <CreateForm givenLocation={props.givenLocation}/>
           <ReportTable />
         </div>
 
         <p className="text-center">Report Table Coming Soon...</p>
         <p className="text-center my-8">JSON Placeholder...</p>
 
      </main>
    )
}
