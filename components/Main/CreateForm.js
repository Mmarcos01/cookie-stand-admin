import { useState } from "react";
import useResource from "../../hooks/useResource";

export default function CreateForm() {
  const [formItems, setFormItems] = useState({});
  const { createResource } = useResource();

  function handleChange(event) {
    const newFormItems = {
      ...formItems,
      [event.target.name]: event.target.value,
    };
    setFormItems(newFormItems);
  }

  function handleSubmit(event) {
    event.preventDefault();
    createResource(formItems);
  }

  return (
    <div className="flex flex-col justify-center items-center p-3 mx-auto bg-indigo-600">
      <form onSubmit={handleSubmit}>
        <label for="location" className="p-2 text-gray-50">
          Location:
        </label>
        <input name="location" type="text" onChange={handleChange} />

        <label for="minCust" className="p-2 text-gray-50">
          Minimum Customers per Hour:
        </label>
        <input name="minCust" type="number" onChange={handleChange} />

        <label for="maxCust" className="p-2 text-gray-50">
          Maximum Customers per Hour:
        </label>
        <input name="maxCust" type="number" onChange={handleChange} />

        <label for="avgCookies" className="p-2 text-gray-50">
          Average Cookies per Sale:
        </label>
        <input name="avgCookie" type="number" onChange={handleChange} />

        <button className="px-2 py-1 bg-indigo-900 text-gray-50">Create</button>
      </form>
    </div>
  );
}
