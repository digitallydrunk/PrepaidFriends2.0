
import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import { FeaturesCard } from "../../component/features-card/features-card.container";
import LoginPage from "../pf-login";

const Sample = () => {
  return (
    <>
      <PFInput
        name={"email"}
        id={"email"}
        addOnAfter="EML"

      <GlobalComponentContainer label={"Click Me"} />
      <br />
      <PFInput
        name={"email"}
        addOnAfter="EML"
        id={"email"}
        type="email"
        label={"Email"}
        placeholder={"Enter email address..."}
        htmlFor={"email"}
      />

    </>
  );
};

export default Sample;
