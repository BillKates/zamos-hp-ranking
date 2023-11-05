import React from 'react';
import { MONTHLY_TEXT } from './constants';
import './ActivityInfo.css';
import ScoreRanking from './ScoreRanking';
import LateRanking from './LateRanking';
import KindRanking from './KindRanking';

interface MonthlyInfoProps {
  currentMonth: string;
  MscoreRanking: { name: string; value: number }[];
  MlateRanking: { name: string; value: number }[];
  MkindRanking: { name: string; value: number }[];
}

const YearlyInfo: React.FC<MonthlyInfoProps> = ({
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
          <ScoreRanking rankingData={MscoreRanking} />
        </div>
        <div className="ranking-column">
          <LateRanking rankingData={MlateRanking} />
        </div>
        <div className="ranking-column">
          <KindRanking rankingData={MkindRanking} />
        </div>
      </div>
    </div>
  );
}

export default YearlyInfo;
