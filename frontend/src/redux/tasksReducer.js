import { GET_TASKS, EMPTY_TASKS } from './constants';

import tasksData from '../fake-api/TASKS_DATA.json';

const tasksReducer = (state = [], action) => {
  switch(action.type) {
    case GET_TASKS:
      return tasksData;
    case EMPTY_TASKS:
      return [];
    default:
      return state;
  }
}

export default tasksReducer;