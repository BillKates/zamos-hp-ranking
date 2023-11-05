// Ranking.tsx
import React from 'react';

interface RankingProps {
  title: string;
  rankingData: { name: string; value: number }[];
}

const Ranking: React.FC<RankingProps> = ({ title, rankingData }) => {
  return (
    <div className="ranking-container">
      <h2 className="ranking-title">{title}</h2>
      <ul className="ranking-list">
        {rankingData.map((player, index) => (
          <li key={index} className="ranking-item">
            <span className="player-name">{player.name}:</span>
            <span className="player-value">{player.value}点</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ranking;
