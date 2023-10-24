<<<<<<< HEAD
import { useState } from "react";
=======

import { useState } from "react";
import PFSelect from "../../component/select";
>>>>>>> 3310a56caceb85282a3c8b65637a71b247bf942f
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
<<<<<<< HEAD
    
      <FeaturesCard
        imageSrc="https://templatekit.tokomoo.com/paymentkit2/wp-content/uploads/sites/112/2022/11/feature-1.png"
        title="Grow Your Business"
        description="If the distribution of letters and words is random, the reader will not be distracted from making."
      />
=======

      <PFSelect
        label="Choose Your Branch"
        options={Options}
        value={selectedOption}
        onChange={setSelectedOption}
      />

>>>>>>> 3310a56caceb85282a3c8b65637a71b247bf942f
      <PFInput
        name={"email"}
        id={"email"}
        addOnAfter="EML"
<<<<<<< HEAD
=======

      <GlobalComponentContainer label={"Click Me"} />
      <br />
      <PFInput
        name={"email"}
        addOnAfter="EML"
        id={"email"}
>>>>>>> 3310a56caceb85282a3c8b65637a71b247bf942f
        type="email"
        label={"Email"}
        placeholder={"Enter email address..."}
        htmlFor={"email"}
      />
<<<<<<< HEAD
      <LoginPage />
      <PFCheckbox />
=======

>>>>>>> 3310a56caceb85282a3c8b65637a71b247bf942f
    </>
  );
};

export default Sample;