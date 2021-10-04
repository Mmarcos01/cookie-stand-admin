export default function ReportTable(props) {
    return(
        <table className="w-1/2 mx-auto my-4">
        <tr>
          <th>Minimum Customers per Hour</th>
          <th>Maximum Customers per Hour</th>
          <th>Average Cookies per Sale</th>
        </tr>
        {props.tableData.map(item => {
              return(<tr className="odd:bg-gray-200">
          <td className="text-center border border-indigo-300 bg-gray-50">x</td>
          <td className="text-center border border-indigo-300 bg-gray-50">x</td>
          <td className="text-center border border-indigo-300 bg-gray-50">x</td>
        </tr>)
        })}
        </table>
    )
}
