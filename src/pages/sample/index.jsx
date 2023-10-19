import PFInput from "../../component/input";

const Sample = () => {
  return (
    <PFInput
      name={"email"}
      addOnAfter="EML"
      id={"email"}
      type="email"
      label={"Email"}
      placeholder={"Enter email address..."}
      htmlFor={"email"}
    />
  );
};

export default Sample;
