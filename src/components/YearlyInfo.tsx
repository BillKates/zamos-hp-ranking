// YearlyInfo.tsx
import React from 'react';
import { YEARLY_TEXT } from './constants';
import './ActivityInfo.css';
import Ranking from './Ranking';

interface YearlyInfoProps {
  currentYear: string;
  YscoreRanking: { name: string; value: number }[];
  YlateRanking: { name: string; value: number }[];
  YkindRanking: { name: string; value: number }[];
}

const YearlyInfo: React.FC<YearlyInfoProps> = ({
  currentYear,
  YscoreRanking,
  YlateRanking,
  YkindRanking,
}) => {
  return (
    <div className="activity-info-container">
      <h1 className="info-title">{YEARLY_TEXT}({currentYear})</h1>
      <div className="rankings-container">
        <div className="ranking-column">
          <Ranking title="得点王ランキング" rankingData={YscoreRanking} />
        </div>
        <div className="ranking-column">
          <Ranking title="遅刻回数ランキング" rankingData={YlateRanking} />
        </div>
        <div className="ranking-column">
          <Ranking title="送迎回数ランキング" rankingData={YkindRanking} />
        </div>
      </div>
    </div>
  );
}

export default YearlyInfo;
