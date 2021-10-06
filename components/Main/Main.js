import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCount } from "../../redux-store/countSlice";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import { hours } from "../../data";
// import { hourly_sales } from "../../data";

export default function Main() {
  const [reports, setReports] = useState([]);
  const dispatch = useDispatch();

  const updateReport = (formObj) => {
    let result = calculate(formObj);
    let newReports = [...reports, result];
    dispatch(changeCount(newReports.length));
    setReports(newReports);
  };

  const calculate = (obj) => {
    const result = {
      location: obj.location,
      hourly_sale: generateCookiePerHour(
        obj.minCust,
        obj.maxCust,
        obj.avgCookie
      ),
    };
    return result;
  };

  function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateCookiePerHour(minCust, maxCust, avgCookie) {
    let cookieSaleEveryHour = [];
    for (let i = 0; i < 14; i++) {
      cookieSaleEveryHour.push(generateRandomNum(minCust, maxCust) * avgCookie);
    }
    return cookieSaleEveryHour;
  }

  return (
    <div>
      <CreateForm updateReport={updateReport} />
      <ReportTable hours={hours} reports={reports} />
    </div>
  );
}
