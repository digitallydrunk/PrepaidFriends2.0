import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import LoginPage from "../pf-login";
import { jobGrid } from "../../data/data";
import PFTablecomp from "../../component/table";

const Sample = () => {
  const columns = [
    { field: "id", header: "ID" },
    { field: "name", header: "NAME" },
    { field: "company", header: "COMPANY" },
    { field: "title", header: "TITLE" },
    { field: "city", header: "CITY" },
    { field: "place", header: "PLACE" },
  ];
  return (
    <>
      <PFInput
        name={"email"}
        id={"email"}
        addOnAfter="EML"
        type="email"
        label={"Email"}
        placeholder={"Enter email address..."}
        htmlFor={"email"}
      />
      <LoginPage />
      <PFCheckbox />
      <PFTablecomp data={jobGrid} columns={columns} />
    </>
  );
};

export default Sample;
