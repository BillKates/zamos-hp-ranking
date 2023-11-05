import React from 'react';
import { YEARLY_TEXT } from './constants';
import './ActivityInfo.css';
import ScoreRanking from './ScoreRanking';
import LateRanking from './LateRanking';
import KindRanking from './KindRanking';

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
          <ScoreRanking rankingData={YscoreRanking} />
        </div>
        <div className="ranking-column">
          <LateRanking rankingData={YlateRanking} />
        </div>
        <div className="ranking-column">
          <KindRanking rankingData={YkindRanking} />
        </div>
      </div>
    </div>
  );
}

export default YearlyInfo;
