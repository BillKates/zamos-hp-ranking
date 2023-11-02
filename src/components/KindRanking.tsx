import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const KindRanking: React.FC = () => {
  const kindRanking = useSelector((state: RootState) => state.rankings.kindRanking);

  return (
    <div>
      <h2>送迎してくれた優しい人ランキング</h2>
      <ul>
        {kindRanking.map((user: any) => (
          <li key={user.name}>
            {user.name}: 優しさ{user.kindnessCount}ポイント
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KindRanking;