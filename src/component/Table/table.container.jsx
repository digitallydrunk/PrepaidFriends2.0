import React from 'react';

import "./table.css";

function Table () {

    const data =[
        {
        Name:"rituraj",
        Email:"riturajsingh5454@gmail.com ",
        Order:"10",
        Paymentstatus:"success",
        Address:"bachhrawan raebareli",
        Contact:"6392665454",
        Businessdetails:"sailes",
        }
    ]
 
    return(
        <>
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Order</th>
                    <th>Paymentstatus</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Business details</th>
                    
                </tr>
            </thead>
            <tbody>
            {
              data.map((val,i)=>{
               return(
               <tr>
                        <td>{val.Name}</td>
                        <td>{val.Email}</td>
                        <td>{val.Order}</td>
                        <td>{val.Paymentstatus}</td>
                        <td>{val.Address}</td>
                        <td>{val.Contact}</td>
                        <td>{val.Businessdetails}</td>
                    </tr>
                    )
              })
              }
            </tbody>
        </table>
        </>
    )
}


export default Table;