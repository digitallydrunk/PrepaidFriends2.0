
import { useState } from "react";
import PFSelect from "../../component/select";
import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import { FeaturesCard } from "../../component/features-card/features-card.container";
import LoginPage from "../pf-login";

const Sample = () => {
  const [selectedOption, setSelectedOption] = useState("IT");
  const Options = [
    { value: "IT", label: "Information Technology" },
    { value: "CSE", label: "Computer Science" },
    { value: "AI", label: "Artificail Intelligence" },
  ];

  return (
    <>

      <PFSelect
        label="Choose Your Branch"
        options={Options}
        value={selectedOption}
        onChange={setSelectedOption}
      />

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
