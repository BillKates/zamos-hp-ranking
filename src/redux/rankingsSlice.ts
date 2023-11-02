// src/redux/rankingsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const scoreRankingData = [
  { name: 'プレイヤー1', score: 100 },
  { name: 'プレイヤー2', score: 90 },
  // 他のデータも続く
];

const lateRankingData = [
  { name: 'ユーザーA', lateCount: 5 },
  { name: 'ユーザーB', lateCount: 8 },
  // 他のデータも続く
];

const kindRankingData = [
  { name: 'ユーザーX', kindnessCount: 20 },
  { name: 'ユーザーY', kindnessCount: 15 },
  // 他のデータも続く
];

const initialState = {
  scoreRanking: scoreRankingData,
  lateRanking: lateRankingData,
  kindRanking: kindRankingData,
};

const rankingsSlice = createSlice({
  name: 'rankings',
  initialState,
  reducers: {},
});

export const { reducer, actions } = rankingsSlice;

export default rankingsSlice.reducer;
