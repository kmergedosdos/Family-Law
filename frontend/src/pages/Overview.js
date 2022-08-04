import CasesDataTable from "../components/CasesDataTable";

const Overview = () => {

   const style = {
      display: "flex",
      flexDirection: "column"
   }

   return (
      <div style={style}>
         Overview here
         <div style={{
            // overflowX: "auto",
            // border: "1px solid black"
         }}>
            <CasesDataTable />
         </div>
      </div>
   );
}

export default Overview;