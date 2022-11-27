import { useState } from 'react';
import DataTable from '../components/DataTable';
import COMMUNICATIONS from '../fake-api/COMMUNICATIONS.json';


const Communications = () => {

   const [communicationsData, setCommunicationsData] = useState(COMMUNICATIONS);

   return (
      <div>
         {
            communicationsData.length ?
            <DataTable data={communicationsData} setNewData={setCommunicationsData}/>
            :
            <p><br/>No data available.</p>
         }
      </div>
   );
}

export default Communications;