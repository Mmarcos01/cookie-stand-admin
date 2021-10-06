import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "'react-redux";
import { changeCount } from "../reduxStore/countSlice";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import { hours } from "../../data";
import { hourly_sales } from "../../data";

export default function Main() {
  const [reports, setReports] = useState([]);

  const updateReport = (obj) => {
    let outputResult = calculate(obj);
    let newReport = [...reports, outputResult];
    dispatch(changeCount(newReport.length));
    setReports(newReport);
  };

  const calculate = (obj) => {
    let outputResult = {
      location: obj.location,
      hourly_sales: generateCookiePerHour(
        obj.minCust,
        obj.maxCust,
        obj.avgCookie
      ),
    };
    return outputResult;
  };

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateCookiePerHour(minCust, maxCust, avgCookies) {
    let cookieSales = [];
    for (var i = 0; i < 14; i++) {
      cookieSales.push();
      Math.round(generateRandomNumber(minCust, maxCust) * avgCookies);
    }
    return cookieSales;
  }

  return (
    <main>
      <div className="justify-between w-3/5 p-4 m-auto bg-indigo-200 rounded-lg mb-7">
        <h1 className="mb-4 text-2xl text-center">Create Cookie Stand</h1>
        <CreateForm updateReport={updateReport} />
        <ReportTable
          hours={hours}
          hourly_sales={hourly_sales}
          reports={reports}
        />
      </div>
    </main>
  );
}
