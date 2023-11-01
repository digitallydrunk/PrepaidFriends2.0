import PFAccordion from "../../component/pf-accordion";
import { useState } from "react";
import PFSelect from "../../component/select";
import PFCheckbox from "../../component/checkbox";
import PFInput from "../../component/input";
import { FeaturesCard } from "../../component/features-card/features-card.container";
import LoginPage from "../pf-login";
import Radio from "../../component/pf-radio";
import PFTag from "../../component/pf-tag";
import PFButton from "../../component/pf-button";
import Navbar from "../../component/navbar1";
import Carousel from "../../component/pf-carousel";
import imageP from '../../assets/images/client/01.jpg';
import image1 from '../../assets/images/client/02.jpg';
import image2 from '../../assets/images/client/03.jpg';
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

const carouselSettings = {
  container: '.tiny-three-item',
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  speed: 400,
  gutter: 12,
  responsive: {
      992: {
          items: 3
      },

      767: {
          items: 2
      },

      320: {
          items: 1
      },
  },
}
const carouselItems = [
  {
      description: '" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "',
      image: imageP,
      name: 'Calvin Carlo',
      role: 'Manager'
  },
  {
      description: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
      image: image1,
      name: 'Christa Smith',
      role: 'Manager'
  },
  {
      description: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
      image: image2,
      name: 'Jemina CLone',
      role: 'Manager'
  },
  {
    description: '" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "',
    image: imageP,
    name: 'Calvin Carlo',
    role: 'Manager'
  },
  {
  description: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
  image: image1,
  name: 'Christa Smith',
  role: 'Manager'
  },
  {
  description: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
  image: image2,
  name: 'Jemina CLone',
  role: 'Manager'
  },
]

const Sample = () => {
  const [selectedOption, setSelectedOption] = useState("option-1");
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <Navbar />
      <Carousel items={carouselItems} settings={carouselSettings} />
      <PFButton buttonText={"Button Test"} />
      <PFTag />
      <PFTag variant="primary" />
      <PFTag variant="error" />
      <PFTag variant="warning" />
      <PFTag variant="success" />
      <PFAccordion data={faqData} />
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
