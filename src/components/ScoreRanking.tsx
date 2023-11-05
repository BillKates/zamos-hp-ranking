// コンポーネントの説明を追加
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ScoreRanking: React.FC = () => {
  const scoreRanking = useSelector((state: RootState) => state.rankings.scoreRanking);

  return (
    <div>
      <ul>
        {scoreRanking.map((player: any) => (
          <li key={player.name}>
            {player.name}: {player.score}点
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreRanking;
