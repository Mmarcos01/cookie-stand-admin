export default function CreateForm(props) {
  
    return(
      <form onSubmit={ props.givenLocation } className="flex w-1/2 p-2 mx-auto bg-indigo-600">
        <label for="location" className="p-2 text-gray-50">Location:</label>
        <input name="location" id="location"/>
        <button className="px-2 py-1 bg-indigo-900 text-gray-50">Create</button>
      </form>
      
    )
}
