import { useState } from "react";
import PFSelect from "../../component/select";
import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import { FeaturesCard } from "../../component/features-card/features-card.container";
import LoginPage from "../pf-login";
import PFTag from "../../component/pf-tag";
import Button from "../../component/button/button.container";
const Sample = () => {
  const [selectedOption, setSelectedOption] = useState("IT");
  const Options = [
    { value: "IT", label: "Information Technology" },
    { value: "CSE", label: "Computer Science" },
    { value: "AI", label: "Artificail Intelligence" },
  ];

  return (
    <>
    <Button
    label="Click me"
    />
      <PFTag variant="primary" label="Primary Tag" />
      <PFTag variant="success" label="Success Tag" />
      <PFTag variant="warning" label="Warning Tag" />
      <PFTag variant="error" label="Error Tag" />
      <PFTag label="Default" />
      <PFSelect
        label="Choose Your Branch"
        options={Options}
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
    
    </>
  );
};

export default Sample;
