import GlobalComponentContainer from "../../component/Global-Component-Button/global.component.container";
import PFInput from "../../component/input";

const Sample = () => {
  return (
    <>
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
