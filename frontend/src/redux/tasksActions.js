import { GET_TASKS, EMPTY_TASKS } from './constants';

export const getTasks = () => {
  return {type: GET_TASKS};
}

export const emptyTasks = () => {
  return {type: EMPTY_TASKS};
}