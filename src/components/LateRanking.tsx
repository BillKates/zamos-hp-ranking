// コンポーネントの説明を追加
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const LateRanking: React.FC = () => {
  const lateRanking = useSelector((state: RootState) => state.rankings.lateRanking);

  return (
    <div>
      <ul>
        {lateRanking.map((user: any) => (
          <li key={user.name}>
            {user.name}: 遅刻{user.lateCount}回
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LateRanking;
