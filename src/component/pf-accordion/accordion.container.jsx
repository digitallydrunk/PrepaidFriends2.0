import React from "react";


import SingleAccordion from "./single-accordion";

const PFAccordion = ({ data }) => {
  return (
    <div>
      {data?.map((item) => (
        <SingleAccordion key={item?.title} item={item} />
      ))}
    </div>
  );
};

export { PFAccordion };
