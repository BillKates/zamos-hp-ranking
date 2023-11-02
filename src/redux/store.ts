import { configureStore } from '@reduxjs/toolkit';
import rankingsReducer from './rankingsSlice';

const store = configureStore({
  reducer: {
    rankings: rankingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
