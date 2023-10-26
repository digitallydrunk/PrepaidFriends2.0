import { useState } from "react";
import PFSelect from "../../component/select";
import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import { FeaturesCard } from "../../component/features-card/features-card.container";
import BulkOrder from "../pf-bulkOrder";
import LoginPage from "../pf-login";
import Radio from "../../component/pf-radio";
import PFTag from "../../component/pf-tag";
import PFButton from "../../component/pf-button";

const Sample = () => {
  const [selectedOption, setSelectedOption] = useState("option-1");
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <PFButton buttonText={"Button Test"} />
      <PFTag />
      <PFTag variant="primary" />
      <PFTag variant="error" />
      <PFTag variant="warning" />
      <PFTag variant="success" />
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
