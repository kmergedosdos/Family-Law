import "./index.css";
import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTasks, emptyTasks } from '../../redux/tasksActions';
import DataTable from "../../components/DataTable";

import TASKS_DATA from '../../fake-api/TASKS_DATA.json';

const Tasks = () => {
   // const dispatch = useDispatch();
   // const tasks_data = useSelector(store => store.tasks);
   const [tasksData, setTasksData] = useState(TASKS_DATA);
   
   // useEffect(() => {
   //    dispatch(getTasks());
      
   //    return function cleanup() {
   //       dispatch(emptyTasks());
   //    }
   // }, [dispatch]);

   useEffect(() => {
      console.log('update store.tasks');
   }, [tasksData]);

   return (
      <div className="tasks-page">
         <DataTable data={tasksData} setNewData={setTasksData}/>
      </div>
   );
}

export default Tasks;