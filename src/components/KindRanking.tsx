import React from 'react';

interface KindRankingProps {
  rankingData: { name: string; value: number }[];
}

const KindRanking: React.FC<KindRankingProps> = ({ rankingData }) => {
  return (
    <div>
      <h2 className="ranking-title">送迎回数ランキング</h2>
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
export default KindRanking;
