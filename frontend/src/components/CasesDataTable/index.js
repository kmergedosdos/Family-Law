import './index.css';
import { useState } from 'react';
import MOCK_DATA from './MOCK_DATA.json';

// Displays all the cases in a table

const CasesDataTable = () => {

   const [casesData, setCasesData] = useState(MOCK_DATA);

   return (
      <table>
         <thead>
            <tr>
               <th>Case no.</th>
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
                  <tr>
                     <td>{caseItem.id}</td>
                     <td>{caseItem.name}</td>
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