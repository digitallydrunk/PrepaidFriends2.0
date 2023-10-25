import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import LoginPage from "../pf-login";
import Radio from "../../pf-radio";
import { useState } from "react";
const Sample = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };
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
      {/* <LoginPage />
      <PFCheckbox /> */}
      <Radio label="Option 1" checked={selectedOption === "Option 1"} onChange={handleRadioChange} />
      <br/>
      <Radio label="Option 2" checked={selectedOption === "Option 2"} onChange={handleRadioChange} />
      <br/>
      <Radio label="Option 3" checked={selectedOption === "Option 3"} onChange={handleRadioChange} />
      
    </>
  );
};

export default Sample;
