import PFAccordion from "../../component/pf-accordion";
import { useState } from "react";
import PFSelect from "../../component/select";
import PFCheckbox from "../../component/checkbox";
import { jobGrid } from "../../data/data";
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
        value={selectedOption}
        onChange={setSelectedOption}
      />
      <FeaturesCard
        imageSrc="https://templatekit.tokomoo.com/paymentkit2/wp-content/uploads/sites/112/2022/11/feature-1.png"
        title="Grow Your Business"
        description="If the distribution of letters and words is random, the reader will not be distracted from making."
      />
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
      <PFCheckbox />
      <Radio
        label="Option 1"
        value={"option-1"}
        checked={selectedOption === "option-1"}
        onChange={handleRadioChange}
      />
      <br />
      <Radio
        label="Option 2"
        value={"option-2"}
        checked={selectedOption === "option-2"}
        onChange={handleRadioChange}
      />
      <br />
      <Radio
        label="Option 3"
        value={"option-3"}
        checked={selectedOption === "option-3"}
        onChange={handleRadioChange}
      />
    </>
  );
};

export default Sample;
