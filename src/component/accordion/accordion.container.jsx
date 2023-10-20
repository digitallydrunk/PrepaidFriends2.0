import React, { useState } from "react";

const PFAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div>
      {items?.map((item, index) => (
        <div key={index}>
          <div className="flex border-b border-b-black">
            <p className="font-bold">{item.title}</p>
            <button onClick={() => handleClick(index)}>
              {activeIndex === index ? "Hide" : "Show"}
            </button>
          </div>

          {activeIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export { PFAccordion };
