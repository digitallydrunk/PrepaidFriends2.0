import React, { useState } from "react";


import SingleAccordion from "./SingleAccordion";

const PFAccordion = ({ data }) => {
  return (
    <main>
    {data?.map((item,i)=>{
        return <div key={item.content}>
            <SingleAccordion item={item} />
        </div>
    })}
</main>
  );
};

export { PFAccordion };
