import React from 'react';

interface ScoreRankingProps {
  rankingData: { name: string; value: number }[];
}

const ScoreRanking: React.FC<ScoreRankingProps> = ({ rankingData }) => {
  return (
    <div>
      <h2 className="ranking-title">得点王ランキング</h2>
      <ol className="ranking-list">
        {rankingData.map((player, index) => (
          <li key={player.name} className="ranking-item">
            {index + 1}位: {player.name} ({player.value}点)
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ScoreRanking;
