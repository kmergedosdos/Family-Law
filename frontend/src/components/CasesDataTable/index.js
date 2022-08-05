import './index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MOCK_DATA from './MOCK_DATA.json';

// Displays all the cases in a table

const CasesDataTable = () => {

   const [casesData, setCasesData] = useState(MOCK_DATA);
   const [sortOrder, setSortOrder] = useState({
      caseNo: "ASC",
      name: "NONE",
      description: "NONE",
      deadline: "NONE",
      email: "NONE",
      phone: "NONE"
   })

   function sortByCaseNumber() {
      setSortOrder(prevSortOrder => ({
         ...sortOrder,
         caseNo: prevSortOrder.caseNo === "ASC" ? "DESC" : "ASC" 
      }))
      setCasesData(prevCasesData => {
         const sortedData = prevCasesData.sort((a, b) => {
            if(sortOrder.caseNo === "ASC") {
               return (a.id < b.id) ? -1 : 1;
            } else {
               return (a.id < b.id) ? 1 : -1;
            }
         })
         return sortedData.map(d => d);
      });
   }

   return (
      <table>
         <thead>
            <tr>
               <th onClick={sortByCaseNumber}>Case no.</th>
               <th>Name</th>
               <th>Description</th>
               <th>Deadline</th>
               <th>Email</th>
               <th>Phone</th>
            </tr>
         </thead>
         <tbody>
            {
               casesData.map(caseItem => (
                  <tr key={caseItem.id}>
                     <td>{caseItem.id}</td>
                     <td><Link to='/documents'>{caseItem.name}</Link></td>
                     <td>{caseItem.description}</td>
                     <td>{caseItem.deadline}</td>
                     <td>{caseItem.email}</td>
                     <td>{caseItem.phone}</td>
                  </tr>
               ))
            }
         </tbody>
      </table>
   );
}

export default CasesDataTable;