export default function ReportTable(props) {
  if (props.hourly_sales.length === 0) {
    return (
      <h2 className="my-8 text-xl text-center">No Cookie Stands Available</h2>
    );
  }
  return (
    <table className="w-1/2 mx-auto my-4">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="p-4 text-left">Location</th>
          {props.hours.map((hour) => {
            return <th className="px-3"> {hour} </th>;
          })}
          <th className="px-4">Totals</th>
        </tr>
      </thead>
      <tbody></tbody>
      {/* {props.hourly_sales.map(item => {
              return(<tr className="odd:bg-gray-400">
        </tr>)
        })} */}
    </table>
  );
}
