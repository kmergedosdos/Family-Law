import { useState } from 'react';
import DataTable from '../components/DataTable';
import BILLABLES from '../fake-api/BILLABLES.json';

const style = {
   padding: "1em"
}

const Billing = () => {
   const [billables, setBillables] = useState(BILLABLES);
   const totals = ['hours', 'billable'];

   return (
      <div style={style}>
         <DataTable data={billables} setNewData={setBillables} totals={totals}/>
      </div>
   );
}

export default Billing;