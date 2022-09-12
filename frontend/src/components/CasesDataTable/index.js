import './index.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MOCK_DATA from './MOCK_DATA.json';

// Displays all the cases in a table

const CasesDataTable = ({ filter }) => {

   const [casesData, setCasesData] = useState(MOCK_DATA);
   const [sortOrder, setSortOrder] = useState(
      JSON.parse(localStorage.getItem("sortOrder")) || 
      {
         caseNum: "ASC",
         name: "DESC",
         description: "DESC",
         deadline: "DESC",
         email: "DESC",
         phone: "DESC"
      }
   );
   const [editCaseId, setEditCaseId] = useState("");
   const [inputData, setInputData] = useState({});

   useEffect(() => {
      localStorage.setItem("sortOrder", JSON.stringify(sortOrder))
   }, [sortOrder]);

   useEffect(() => {
      setCasesData(MOCK_DATA.filter(caseItem => caseItem.name.toLocaleLowerCase().includes(filter.toLowerCase())));
   }, [filter])

   function sortByCaseNumber() {
      setSortOrder(prevSortOrder => ({
         caseNum: prevSortOrder.caseNum === "ASC" ? "DESC" : "ASC",
         name: "DESC",
         description: "DESC",
         deadline: "DESC",
         email: "DESC",
         phone: "DESC"
      }));
      setCasesData(prevCasesData => {
         const sortedData = sortOrder.caseNum === "ASC" ?
            prevCasesData.sort((a, b) => (a.num < b.num) ? 1 : -1) :
            prevCasesData.sort((a, b) => (a.num < b.num) ? -1 : 1);
         return sortedData;
      });
   }

   function sortBy(key) {
      setSortOrder(prevSortOrder => ({
         caseNum: "DESC",
         name: "DESC",
         description: "DESC",
         deadline: "DESC",
         email: "DESC",
         phone: "DESC",
         [key]: prevSortOrder[key] === "DESC" ? "ASC" : "DESC"
      }));
      setCasesData(prevCasesData => {
         const sortedData = sortOrder[key] === "ASC" ?
            prevCasesData.sort((a, b) => (a[key].toLowerCase() < b[key].toLowerCase()) ? 1 : -1) :
            prevCasesData.sort((a, b) => (a[key].toLowerCase() < b[key].toLowerCase()) ? -1 : 1);
         return sortedData;
      });
   }

   function editCase(caseItem) {
      setInputData(caseItem);
      setEditCaseId(caseItem.id);
   }

   function handleInputChange(e) {
      if(e.key === "Enter") {
         // save when Enter key is pressed
         saveCase();
      } else {
         const name = e.target.name;
         const value = e.target.value;
         setInputData(prevInputData => ({
            ...prevInputData,
            [name]: value
         }))
      }
   }

   function saveCase() {
      setEditCaseId("");
      setCasesData(prevCasesData => (
         prevCasesData.map(caseItem => {
            return caseItem.id === inputData.id ? inputData : caseItem;
         })
      ));
   }

   function deleteCase(caseId) {
      setCasesData(prevCasesData => (
         prevCasesData.filter(caseItem => caseItem.id !== caseId)
      ));
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
                  <th className='table_action'></th>
               </tr>
            </thead>
            <tbody>
               {
                  casesData.map((caseItem, i) => (
                     <tr
                        key={caseItem.id}
                        style={{
                           backgroundColor: caseItem.id === editCaseId ? "lightgray" : i%2 === 0 ? "#F5F8F8" : "white",
                           transition: "all 0.3s ease-in-out"
                        }}
                     >
                        <td className='table_case'>
                           {
                              caseItem.id === editCaseId ? 
                              <input
                                 type="text"
                                 name='num'
                                 value={inputData.num}
                                 onChange={(e) => handleInputChange(e)}
                                 onKeyDown={(e) => handleInputChange(e)}
                              /> 
                              :
                              caseItem.num
                           }
                        </td>
                        <td className='table_name'>
                           {
                              caseItem.id === editCaseId ?
                              <input
                                 type="text"
                                 name="name"
                                 value={inputData.name}
                                 onChange={(e) => handleInputChange(e)}
                                 onKeyDown={(e) => handleInputChange(e)}
                              />
                              :
                              <Link className='table_name_data' to='/documents' state={{ client: caseItem}}>
                                 {caseItem.name}
                              </Link>
                           }
                        </td>
                        <td className='table_description'>
                           {
                              caseItem.id === editCaseId ? 
                              <input
                                 type="text"
                                 name='description'
                                 value={inputData.description}
                                 onChange={(e) => handleInputChange(e)}
                                 onKeyDown={(e) => handleInputChange(e)}
                              /> 
                              :
                              caseItem.description
                           }
                        </td>
                        <td className='table_deadline'>
                           {
                              caseItem.id === editCaseId ? 
                              <input
                                 type="text"
                                 name='deadline'
                                 value={inputData.deadline}
                                 onChange={(e) => handleInputChange(e)}
                                 onKeyDown={(e) => handleInputChange(e)}
                              /> 
                              :
                              caseItem.deadline
                           }
                        </td>
                        <td className='table_email'>
                           {
                              caseItem.id === editCaseId ? 
                              <input type="text"
                              name='email'
                              value={inputData.email}
                              onChange={(e) => handleInputChange(e)}
                              onKeyDown={(e) => handleInputChange(e)}
                           /> 
                              :
                              caseItem.email
                           }
                        </td>
                        <td className='table_phone'>
                           {
                              caseItem.id === editCaseId ? 
                              <input
                                 type="text"
                                 name='phone'
                                 value={inputData.phone}
                                 onChange={(e) => handleInputChange(e)}
                                 onKeyDown={(e) => handleInputChange(e)}
                              /> 
                              :
                              caseItem.phone
                           }
                        </td>
                        <td className='table_action'>
                           {
                              caseItem.id === editCaseId ? 
                              <button title='Save' onClick={saveCase}>Save</button> 
                              :
                              <>
                                 <button title='Edit' onClick={() => editCase(caseItem)}>Edit</button>
                                 <button title='Delete' onClick={() => deleteCase(caseItem.id)}>Delete</button>
                              </>
                           }
                        </td>
                     </tr>
                  ))
               }
            </tbody>
         </table>
      </div>
   );
}

export default CasesDataTable;