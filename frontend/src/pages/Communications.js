import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Communications = () => {
   const { client } = useLocation().state;

   return (
      <div className='layout'>
         <div className='main-section'>
            <Sidebar client={client}/>
            <section className='content'>
               <div style={{padding: "1em"}}>
                  Commuincations
               </div>
            </section>
         </div>
      </div>
   );
}

export default Communications;