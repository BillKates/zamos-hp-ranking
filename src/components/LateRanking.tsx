import React from 'react';

interface LateRankingProps {
  rankingData: { name: string; value: number }[];
}

const LateRanking: React.FC<LateRankingProps> = ({ rankingData }) => {
  return (
    <div>
      <h2 className="ranking-title">遅刻王ランキング</h2>
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

export default LateRanking;
