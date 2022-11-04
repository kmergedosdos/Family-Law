import "./index.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, emptyTasks } from '../../redux/tasksActions';
import DataTable from "../../components/DataTable";

// import TASKS_DATA from '../../fake-api/TASKS_DATA.json';

const Tasks = () => {
   const dispatch = useDispatch();
   const tasks_data = useSelector(store => store.tasks);
   
   useEffect(() => {
      dispatch(getTasks());
      
      return function cleanup() {
         dispatch(emptyTasks());
      }
   }, [dispatch]);

   return (
      <div className="tasks-page">
         <DataTable data={tasks_data}/>
         {/* <table>
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
         </table> */}
      </div>
   );
}

export default Tasks;