
import { useState } from "react";
import PFSelect from "../../component/select";
import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import Dashboard from "../../component/pf-dashboard";
import LoginPage from "../pf-login";
import Radio from "../../component/pf-radio";
import PFTag from "../../component/pf-tag";
import PFButton from "../../component/pf-button";
 
const faqData = [
  {
    key: "1",
    title: "What is the capital of France?",
    content: "The capital of France is Paris.",
  },
  {
    key: "2",
    title: "How many continents are there on Earth?",
    content:
      "There are seven continents on Earth: Africa, Antarctica, Asia, Europe, North America, Australia (Oceania), and South America.",
  },
  {
    key: "3",
    title: "What is the boiling point of water in Celsius?",
    content:
      "The boiling point of water at sea level is 100 degrees Celsius (212 degrees Fahrenheit).",
  },
  {
    key: "4",
    title: "Who wrote the play 'Romeo and Juliet'?",
    content: "The play 'Romeo and Juliet' was written by William Shakespeare.",
  },
  {
    key: "5",
    title: "What is the largest planet in our solar system?",
    content: "The largest planet in our solar system is Jupiter.",
  },
];


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
      <Dashboard/>
    </>
  );
};

export default Sample;
