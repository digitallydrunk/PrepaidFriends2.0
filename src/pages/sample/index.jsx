import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import Dashboard from "../../component/pf-dashboard";
import LoginPage from "../pf-login";


const Sample = () => {
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
      <Dashboard/>
    </>
  );
};

export default Sample;
