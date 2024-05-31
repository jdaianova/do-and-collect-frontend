import { configureStore } from '@reduxjs/toolkit';
import { tasksApi } from '../redux/tasksSlice';
import { coinsApi } from '../redux/coinsApi';
import coinsReducer from './coinsSlice';

const store = configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
    [coinsApi.reducerPath]: coinsApi.reducer,
    coins: coinsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware, coinsApi.middleware),
});

export default store;
