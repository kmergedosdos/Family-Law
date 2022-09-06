import "./index.css";
import CasesDataTable from "../../components/CasesDataTable";
import Calendar from "../../components/Calendar";

const Overview = () => {

   return (
      <div className="overview">
         <div className="overview_cases-table">
            <div className="overview_cases-table_header">
               <h1>Cases</h1>
               <div className="overview_cases-table_header_tool-bar">
                  <input type="text" name="filter" placeholder="Search"/>
                  <button>View All</button>
                  <button>+ Add</button>
               </div>
            </div>
            <CasesDataTable />
         </div>
         <div className="overview_calendar">
            <Calendar />
         </div>
      </div>
   );
}

export default Overview;