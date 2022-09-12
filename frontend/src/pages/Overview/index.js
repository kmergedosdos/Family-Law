import "./index.css";
import { useState } from "react";
import CasesDataTable from "../../components/CasesDataTable";
import Calendar from "../../components/Calendar";

const Overview = () => {
   const [filter, setFilter] = useState("");

   function handleSearchInput(e) {
      if(e.key === "Enter") {
         e.target.blur();
      } else {
         setFilter(e.target.value);
      }
   }

   return (
      <div className="overview">
         <div className="overview_cases-table">
            <div className="overview_cases-table_header">
               <h1>Cases</h1>
               <div className="overview_cases-table_header_tool-bar">
                  <input
                     type="text"
                     name="filter"
                     value={filter}
                     onChange={(e) => handleSearchInput(e)}
                     onKeyDown={(e) => handleSearchInput(e)}
                     placeholder="Search by name"
                  />
                  <button>+ Add</button>
               </div>
            </div>
            <CasesDataTable filter={filter}/>
         </div>
         <div className="overview_calendar">
            <Calendar />
         </div>
      </div>
   );
}

export default Overview;