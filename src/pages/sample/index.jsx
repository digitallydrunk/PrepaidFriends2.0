import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import { LoginPage } from "../pf-login/login.container";

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
      <LoginPage/>
      <PFCheckbox/>
    </>
  );
};

export default Sample;
