// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { changeCount } from "../../redux-store/countSlice";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import { hours } from "../../data";
import useResource from "../../hooks/useResource";

export default function Main() {
  // const [reports, setReports] = useState([]);
  // const dispatch = useDispatch();

  const { resources, loading } = useResource();
  console.log("this is resources", resources);
  // const updateReport = (formObj) => {
  //   let result = calculate(formObj);
  //   let newReports = [...reports, result];
  //   dispatch(changeCount(newReports.length));
  //   setReports(newReports);
  // };

  return (
    <div>
      <CreateForm />
      <ReportTable hours={hours} sales={resources} />
    </div>
  );
}
