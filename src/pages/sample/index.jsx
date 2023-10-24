import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import BulkOrder from "../pf-bulkOrder";
import LoginPage from "../pf-login";

const Sample = () => {
  return (
    <>
    <BulkOrder/>
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
