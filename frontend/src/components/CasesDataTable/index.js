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
      <div className='table-wrapper'>
         <table>
            <thead className='table_header'>
               <tr>
                  <th className='table_case' onClick={sortByCaseNumber}>Case no.</th>
                  <th className='table_name' onClick={() => sortBy("name")}>Name</th>
                  <th className='table_description' onClick={() => sortBy("description")}>Description</th>
                  <th className='table_deadline' onClick={() => sortBy("deadline")}>Deadline</th>
                  <th className='table_email' onClick={() => sortBy("email")}>Email</th>
                  <th className='table_phone' onClick={() => sortBy("phone")}>Phone</th>
               </tr>
            </thead>
            <tbody>
               {
                  casesData.map((caseItem, i) => (
                     <tr key={caseItem.id} style={{backgroundColor: i%2 === 0 ? "#F5F8F8" : "white"}}>
                        <td className='table_case'>{caseItem.id}</td>
                        <td className='table_name'>
                           <Link className='table_name_data' to='/documents' state={{ client: caseItem.name}}>
                              {caseItem.name}
                           </Link>
                        </td>
                        <td className='table_description'>{caseItem.description}</td>
                        <td className='table_deadline'>{caseItem.deadline}</td>
                        <td className='table_email'>{caseItem.email}</td>
                        <td className='table_phone'>{caseItem.phone}</td>
                     </tr>
                  ))
               }
            </tbody>
         </table>
      </div>
   );
}

export default CasesDataTable;