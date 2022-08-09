import './index.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MOCK_DATA from './MOCK_DATA.json';

// Displays all the cases in a table

const CasesDataTable = () => {

   const [casesData, setCasesData] = useState(MOCK_DATA);
   const [sortOrder, setSortOrder] = useState(
      JSON.parse(localStorage.getItem("sortOrder")) || 
      {
         caseNo: "ASC",
         name: "DESC",
         description: "DESC",
         deadline: "DESC",
         email: "DESC",
         phone: "DESC"
      }
   );

   useEffect(() => {
      localStorage.setItem("sortOrder", JSON.stringify(sortOrder))
   }, [sortOrder]);

   function sortByCaseNumber() {
      setSortOrder(prevSortOrder => ({
         caseNo: prevSortOrder.caseNo === "ASC" ? "DESC" : "ASC",
         name: "DESC",
         description: "DESC",
         deadline: "DESC",
         email: "DESC",
         phone: "DESC"
      }));
      setCasesData(prevCasesData => {
         const sortedData = sortOrder.caseNo === "ASC" ?
            prevCasesData.sort((a, b) => (a.id < b.id) ? 1 : -1) :
            prevCasesData.sort((a, b) => (a.id < b.id) ? -1 : 1);
         return sortedData;
      });
   }

   function sortBy(key) {
      setSortOrder(prevSortOrder => ({
         caseNo: "DESC",
         name: "DESC",
         description: "DESC",
         deadline: "DESC",
         email: "DESC",
         phone: "DESC",
         [key]: prevSortOrder[key] === "DESC" ? "ASC" : "DESC"
      }));
      setCasesData(prevCasesData => {
         const sortedData = sortOrder[key] === "ASC" ?
            prevCasesData.sort((a, b) => (a[key] < b[key]) ? 1 : -1) :
            prevCasesData.sort((a, b) => (a[key] < b[key]) ? -1 : 1);
         return sortedData;
      });
   }

   return (
      <table>
         <thead>
            <tr>
               <th onClick={sortByCaseNumber}>Case no.</th>
               <th onClick={() => sortBy("name")}>Name</th>
               <th onClick={() => sortBy("description")}>Description</th>
               <th onClick={() => sortBy("deadline")}>Deadline</th>
               <th onClick={() => sortBy("email")}>Email</th>
               <th onClick={() => sortBy("phone")}>Phone</th>
            </tr>
         </thead>
         <tbody>
            {
               casesData.map(caseItem => (
                  <tr key={caseItem.id}>
                     <td>{caseItem.id}</td>
                     <td><Link to='/documents' state={{ client: caseItem.name }}>{caseItem.name}</Link></td>
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