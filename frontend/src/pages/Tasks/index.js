import "./index.css";
import { Link, useLocation } from 'react-router-dom';
import TASKS_DATA from './TASKS_DATA.json';

const Tasks = () => {
   const { client } = useLocation().state;
   const tasks_data = TASKS_DATA;

   return (
      <div className='layout'>
         <header className='header--section'>
            <Link to='/'>Back</Link>
         </header>
         <div className='main--section'>
            <div className='sidebar'>
               <h2>{client}</h2>
               <nav>
                  <Link to='/documents' state={{ client }}>Documents</Link>
                  <Link to='/tasks' state={{ client }}>Tasks</Link>
                  <Link  to='/billing' state={{ client }}>Billing</Link>
                  <Link to='/communications' state={{ client }}>Communications</Link>
                  <Link  to='/calendar' state={{ client }}>Calendar</Link>
               </nav>
            </div>
            <section className='content'>
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
            </section>
         </div>
      </div>
   );
}

export default Tasks;