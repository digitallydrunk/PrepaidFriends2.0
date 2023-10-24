
import PFInput from "../../component/input";

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
    </>
  );
};

export default Sample;
