import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import { hours } from "../../data";
import useResource from "../../hooks/useResource";

export default function Main() {
  const { resources, loading } = useResource();
  console.log("this is resources", resources);

  return (
    <div>
      <CreateForm />
      <ReportTable hours={hours} sales={resources} />
    </div>
  );
}
