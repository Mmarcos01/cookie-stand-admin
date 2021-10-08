import { Button } from "react";
import React from "react";
import useResource from "../../hooks/useResource";

export default function ReportTable({ hours, sales }) {
  const { deleteResource, loading } = useResource();

  if (sales && sales.length === 0) {
    return <h2 className="text-center">No Cookie Stand Available</h2>;
  }

  return (
    <table className="w-1/2 mx-auto my-4 bg-gray-200">
      <thead className="bg-green-400">
        <tr>
          <th className="px-6">Location</th>
          {hours.map((hour) => {
            return (
              <th className="px-2" key={Math.random()}>
                {hour}
              </th>
            );
          })}
          <th className="px-4">Totals</th>
        </tr>
      </thead>
      <tbody>
        {sales &&
          sales.map((store) => {
            return (
              <tr className="odd:bg-gray-400" key={store.id}>
                <td>{store.location}</td>
                <Button
                  className="w-5"
                  onClick={() => deleteResource(store.id)}
                />
                <td>
                  {" "}
                  {store.hourly_sale.reduce((acc, cur) => {
                    return acc + cur;
                  }, 0)}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
