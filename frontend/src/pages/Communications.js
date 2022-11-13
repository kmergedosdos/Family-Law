import { useState } from 'react';
import DataTable from '../components/DataTable';
import COMMUNICATIONS from '../fake-api/COMMUNICATIONS.json';


const Communications = () => {

   const [communicationsData, setCommunicationsData] = useState(COMMUNICATIONS);

   return (
      <div>
         <DataTable data={communicationsData} />
      </div>
   );
}

export default Communications;