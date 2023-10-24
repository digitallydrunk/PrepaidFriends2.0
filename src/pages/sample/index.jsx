import PFAccordion from "../../component/accordion";
import { useState } from "react";
import PFSelect from "../../component/select";
import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import { FeaturesCard } from "../../component/features-card/features-card.container";
import LoginPage from "../pf-login";
const faqData = [
  {
    title: "What is the capital of France?",
    content: "The capital of France is Paris.",
  },
  {
    title: "How many continents are there on Earth?",
    content:
      "There are seven continents on Earth: Africa, Antarctica, Asia, Europe, North America, Australia (Oceania), and South America.",
  },
  {
    title: "What is the boiling point of water in Celsius?",
    content:
      "The boiling point of water at sea level is 100 degrees Celsius (212 degrees Fahrenheit).",
  },
  {
    title: "Who wrote the play 'Romeo and Juliet'?",
    content: "The play 'Romeo and Juliet' was written by William Shakespeare.",
  },
  {
    title: "What is the largest planet in our solar system?",
    content: "The largest planet in our solar system is Jupiter.",
  },
];

const Sample = () => {
  const [selectedOption, setSelectedOption] = useState("IT");
  const Options = [
    { value: "IT", label: "Information Technology" },
    { value: "CSE", label: "Computer Science" },
    { value: "AI", label: "Artificail Intelligence" },
  ];

  return (
    <>
      <PFAccordion data={faqData} />
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
