import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import LoginPage from "../pf-login";
import PFTag from "../../component/pf-tag";
const Sample = () => {
  return (
    <>
      <PFTag variant="Primary" label="Primary Tag" />
      <PFTag variant="Success" label="Success Tag" />
      <PFTag variant="Warning" label="Warning Tag" />
      <PFTag variant="Error" label="Error Tag" />
      <PFTag label="Default Tag" />
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
