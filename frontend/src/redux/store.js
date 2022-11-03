import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksReducer';

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
});

export default store;