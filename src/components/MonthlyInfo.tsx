// MonthlyInfo.tsx
import React from 'react';
import { MONTHLY_TEXT } from './constants';
import './ActivityInfo.css';
import Ranking from './Ranking';

interface MonthlyInfoProps {
  currentMonth: string;
  MscoreRanking: { name: string; value: number }[];
  MlateRanking: { name: string; value: number }[];
  MkindRanking: { name: string; value: number }[];
}

const MonthlyInfo: React.FC<MonthlyInfoProps> = ({
  currentMonth,
  MscoreRanking,
  MlateRanking,
  MkindRanking,
}) => {
  return (
    <div className="activity-info-container">
      <h1 className="info-title">{MONTHLY_TEXT}({currentMonth})</h1>
      <div className="rankings-container">
        <div className="ranking-column">
          <Ranking title="得点王ランキング" rankingData={MscoreRanking} />
        </div>
        <div className="ranking-column">
          <Ranking title="遅刻回数ランキング" rankingData={MlateRanking} />
        </div>
        <div className="ranking-column">
          <Ranking title="送迎回数ランキング" rankingData={MkindRanking} />
        </div>
      </div>
    </div>
  );
}

export default MonthlyInfo;
