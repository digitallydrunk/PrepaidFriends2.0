import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import LoginPage from "../pf-login";
import PFTag from "../../component/pf-tag";
const Sample = () => {
  return (
    <>
      <PFTag variant="primary" label="Primary Tag" />
      <PFTag variant="success" label="Success Tag" />
      <PFTag variant="warning" label="Warning Tag" />
      <PFTag variant="error" label="Error Tag" />
      <PFTag label="Default" />
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
    </>
  );
};

export default Sample;
