import "./index.css";
import { useLocation } from 'react-router-dom';
import TASKS_DATA from './TASKS_DATA.json';
import Sidebar from "../../components/Sidebar";

const Tasks = () => {
   const { client } = useLocation().state;
   const tasks_data = TASKS_DATA;

   return (
      <div className='layout'>
         <div className='main-section'>
            <Sidebar client={client}/>
            <section className='content'>
               <div className="billing">
                  <table>
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>Description</th>
                           <th>Date Due</th>
                           <th>Date Created</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           tasks_data.map((task, i) => (
                              <tr key={task + i}>
                                 <td>{task.name}</td>
                                 <td>{task.description}</td>
                                 <td>{task.date_due}</td>
                                 <td>{task.date_created}</td>
                              </tr>
                           ))
                        }
                     </tbody>
                  </table>
               </div>
            </section>
         </div>
      </div>
   );
}

export default Tasks;