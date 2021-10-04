export default function CreateForm(props) {
  
    return(
      <div className= "flex flex-col justify-center items-center p-3 mx-auto bg-indigo-600">
        <form onSubmit={ props.givenLocation }>
          <label for="location" className="p-2 text-gray-50">Location:</label>
          <input name="location" id="location"/>
          <label for="location" className="p-2 text-gray-50">Minimum Customers per Hour:</label>
          <input name="location" id="location"/>
          <label for="location" className="p-2 text-gray-50">Maximum Customers per Hour:</label>
          <input name="location" id="location"/>
          <label for="location" className="p-2 text-gray-50">Average Cookies per Sale:</label>
          <input name="location" id="location"/>
          <button className="px-2 py-1 bg-indigo-900 text-gray-50">Create</button>
        </form>
      </div>
      
    )
}
