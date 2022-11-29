import { useState } from 'react';
import DataTable from '../components/DataTable';
import BILLABLES from '../fake-api/BILLABLES.json';

const style = {
   padding: "1em"
}

const Billing = () => {
   const [billables, setBillables] = useState(BILLABLES);

   return (
      <div style={style}>
         <DataTable data={billables} setNewData={setBillables}/>
      </div>
   );
}

export default Billing;