import React from "react";

import SingleAccordion from "./single-accordion";

const PFAccordion = ({ data }) => {
  return data?.map((item) => <SingleAccordion key={item?.key} item={item} />);
};

export { PFAccordion };
