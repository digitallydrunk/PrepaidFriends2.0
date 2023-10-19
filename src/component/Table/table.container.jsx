import React ,{useState,useEffect} from 'react';
import DataTable from 'react-data-table-component';



import "./table.css";

const Tablecomp = ()=>{

     const columns =[
        {
            name:"NO.",
            selector:row =>row.id
        },
        {
            name:"ITEM",
            selector:row =>row.item
        },
         { 
            name:"QTY",
             selector: row =>row.qty
         },
         {
             name:"RATE($)",
             selector: row =>row.rate
         },
      
         {
             name:"TOTAL($)",
             selector: row =>row.total
         },
    ];

    const data = [
       {
        id:1,
        item:"musclegainer",
        qty:"1",
        rate:"5000",
        total:"5000",
       },
       {
        id:2,
        item:"skincare",
        qty:"2",
        rate:"250",
        total:"500",

       },
       {
        id:3,
        item:"suncream",
        qty:"1",
        rate:"79",
        total:"79",

       },
       {
        id:4,
        item:"dryfoot",
        qty:"2",
        rate:"300",
        total:"600",

       },
       {
        id:5,
        item:"toys",
        qty:"7",
        rate:"50",
        total:"350",

       }
       
    ];
 

    return(
  <div className='container mt-5'>
   <DataTable
       columns={columns}
       data={data}
        SelectableRows
        fixedHeader
        pagination
   ></DataTable>

  </div>
     );
};

export default Tablecomp;