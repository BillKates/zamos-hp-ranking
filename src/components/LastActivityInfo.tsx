import React from 'react';
import { LAST_ACTIVITY_TEXT } from './constants';
import './ActivityInfo.css';
import ScoreRanking from './ScoreRanking';
import LateRanking from './LateRanking';
import KindRanking from './KindRanking';

interface LastActivityInfoProps {
  lastActivityDate: string;
  scoreRanking: { name: string; value: number }[];
  lateRanking: { name: string; value: number }[];
  kindRanking: { name: string; value: number }[];
}

const LastActivityInfo: React.FC<LastActivityInfoProps> = ({
  lastActivityDate,
  scoreRanking,
  lateRanking,
  kindRanking,
}) => {
  return (
    <div className="activity-info-container">
      <h1 className="info-title">{LAST_ACTIVITY_TEXT}({lastActivityDate})</h1>
      <div className="rankings-container">
        <div className="ranking-column">
          <ScoreRanking rankingData={scoreRanking} />
        </div>
        <div className="ranking-column">
          <LateRanking rankingData={lateRanking} />
        </div>
        <div className="ranking-column">
          <KindRanking rankingData={kindRanking} />
        </div>
      </div>
    </div>
  );
}

export default LastActivityInfo;
