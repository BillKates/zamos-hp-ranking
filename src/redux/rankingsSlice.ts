// src/redux/rankingsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastActivityDate: 'yyyy/mm/dd',
  currentMonth: 'yyyy/mm',
  currentYear: 'yyyy',
  scoreRanking: [],  // 初期データを空の配列として設定
  lateRanking: [],   // 初期データを空の配列として設定
  kindRanking: [],   // 初期データを空の配列として設定
};

const rankingsSlice = createSlice({
  name: 'rankings',
  initialState,
  reducers: {
    updateLastActivityDate: (state, action) => {
      state.lastActivityDate = action.payload;
    },
    updateCurrentMonth: (state, action) => {
      state.currentMonth = action.payload;
    },
    updateCurrentYear: (state, action) => {
      state.currentYear = action.payload;
    },
  },
});

export const { reducer, actions } = rankingsSlice;

export default rankingsSlice.reducer;
