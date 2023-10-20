import PFSelect from "../../component/select";
import { useState } from "react";

const Sample = () => {
  const [selectedOption, setSelectedOption] = useState('IT');
  const Options = [
    { value: 'IT', label: 'Information Technology' },
    { value: 'CSE', label: 'Computer Science' },
    { value: 'AI', label: 'Artificail Intelligence' },
  ];
  
  return (
    <PFSelect
        label="Choose Your Branch"
        options={Options}
        value={selectedOption}
        onChange={setSelectedOption}
      />
  );
};

export default Sample;
