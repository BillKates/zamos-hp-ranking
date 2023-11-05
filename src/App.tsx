import React from 'react';
import './App.css';
import LastActivityInfo from './components/LastActivityInfo';
import MonthlyInfo from './components/MonthlyInfo';
import YearlyInfo from './components/YearlyInfo';

function App() {
  const sampleData = {
    lastActivityDate: 'yyyy/mm/dd',
    scoreRanking: [
      { name: 'Player1', value: 100 },
      { name: 'Player2', value: 90 },
      { name: 'Player3', value: 80 },
    ],
    lateRanking: [
      { name: 'User1', value: 2 },
      { name: 'User2', value: 1 },
      { name: 'User3', value: 0 },
    ],
    kindRanking: [
      { name: 'Person1', value: 10 },
      { name: 'Person2', value: 8 },
      { name: 'Person3', value: 5 },
    ],
    currentMonth: 'yyyy/mm',
    MscoreRanking: [
      { name: 'Player1', value: 100 },
      { name: 'Player2', value: 90 },
      { name: 'Player3', value: 80 },
    ],
    MlateRanking: [
      { name: 'User1', value: 2 },
      { name: 'User2', value: 1 },
      { name: 'User3', value: 0 },
    ],
    MkindRanking: [
      { name: 'Person1', value: 10 },
      { name: 'Person2', value: 8 },
      { name: 'Person3', value: 5 },
    ],
    currentYear: 'yyyy',
    YscoreRanking: [
      { name: 'Player1', value: 100 },
      { name: 'Player2', value: 90 },
      { name: 'Player3', value: 80 },
    ],
    YlateRanking: [
      { name: 'User1', value: 2 },
      { name: 'User2', value: 1 },
      { name: 'User3', value: 0 },
    ],
    YkindRanking: [
      { name: 'Person1', value: 10 },
      { name: 'Person2', value: 8 },
      { name: 'Person3', value: 5 },
    ],
    updateLastActivityDate: () => {},
    updateCurrentMonth: () => {},
    updateCurrentYear: () => {},
  };

  return (
    <div className="App">
      <LastActivityInfo 
        lastActivityDate={sampleData.lastActivityDate}
        scoreRanking={sampleData.scoreRanking}
        lateRanking={sampleData.lateRanking}
        kindRanking={sampleData.kindRanking}
      />
      <MonthlyInfo
        currentMonth={sampleData.currentMonth}
        MscoreRanking={sampleData.MscoreRanking}
        MlateRanking={sampleData.MlateRanking}
        MkindRanking={sampleData.MkindRanking}
      />
      <YearlyInfo
        currentYear={sampleData.currentYear}
        YscoreRanking={sampleData.YscoreRanking}
        YlateRanking={sampleData.YlateRanking}
        YkindRanking={sampleData.YkindRanking}
      />
    </div>
  );
}

export default App;
