<<<<<<< HEAD
import PFCheckbox from "../../component/checkbox";
=======
import GlobalComponentContainer from "../../component/Global-Component-Button/global.component.container";
>>>>>>> origin/global-component
import PFInput from "../../component/input";
import LoginPage from "../pf-login";

const Sample = () => {
  return (
    <>
<<<<<<< HEAD
      <PFInput
        name={"email"}
        id={"email"}
        addOnAfter="EML"
=======
      <GlobalComponentContainer label={"Click Me"} />
      <br />
      <PFInput
        name={"email"}
        addOnAfter="EML"
        id={"email"}
>>>>>>> origin/global-component
        type="email"
        label={"Email"}
        placeholder={"Enter email address..."}
        htmlFor={"email"}
      />
<<<<<<< HEAD
      <LoginPage />
      <PFCheckbox />
=======
>>>>>>> origin/global-component
    </>
  );
};

export default Sample;
