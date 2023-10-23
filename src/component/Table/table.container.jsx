import React ,{useState,useEffect} from 'react';
import  styles from "./table.module.css";


const PFTablecomp = ({data,columns})=>{

   return(
    <div>
        <table className={styles.main}>
           <thead className={styles.heading}>
            <tr className={styles.data}>{columns.map((head)=>(
                <th>{head.header}</th>
            )
            )} </tr>
           </thead>


            <tbody className={styles}>
                { data.map((row)=>(
                    <tr>
                   {columns.map((col)=>(
                    <td className={styles.data}>{row[col.field]}</td>
                   ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
   )
};

export {PFTablecomp};