import PFAccordion from "../../component/accordion";
const faqData = [
  {
    title: "What is the capital of France?",
    content: "The capital of France is Paris."
  },
  {
    title: "How many continents are there on Earth?",
    content: "There are seven continents on Earth: Africa, Antarctica, Asia, Europe, North America, Australia (Oceania), and South America."
  },
  {
    title: "What is the boiling point of water in Celsius?",
    content: "The boiling point of water at sea level is 100 degrees Celsius (212 degrees Fahrenheit)."
  },
  {
    title: "Who wrote the play 'Romeo and Juliet'?",
    content: "The play 'Romeo and Juliet' was written by William Shakespeare."
  },
  {
    title: "What is the largest planet in our solar system?",
    content: "The largest planet in our solar system is Jupiter."
  }
];
const Sample = () => {
  return (
    <PFAccordion items={faqData}/>
  );
};

export default Sample;
