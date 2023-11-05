import React from 'react';
import './App.css';
import LastActivityInfo from './components/LastActivityInfo';
import MonthlyInfo from './components/MonthlyInfo';
import YearlyInfo from './components/YearlyInfo';
import ActivityInfo from './components/ActivityInfo';
import sampledata from './components/sampledata';

function App() {
  return (
    <div className="App">
      <ActivityInfo
        lastActivityDate={sampledata.lastActivityDate}
        currentMonth={sampledata.currentMonth}
        currentYear={sampledata.currentYear}
        updateLastActivityDate={sampledata.updateLastActivityDate}
        updateCurrentMonth={sampledata.updateCurrentMonth}
        updateCurrentYear={sampledata.updateCurrentYear}
      >
        <LastActivityInfo 
          lastActivityDate={sampledata.lastActivityDate}
          scoreRanking={sampledata.scoreRanking}
          lateRanking={sampledata.lateRanking}
          kindRanking={sampledata.kindRanking}
        />
        <MonthlyInfo
          currentMonth={sampledata.currentMonth}
          MscoreRanking={sampledata.MscoreRanking}
          MlateRanking={sampledata.MlateRanking}
          MkindRanking={sampledata.MkindRanking}
        />
        <YearlyInfo
          currentYear={sampledata.currentYear}
          YscoreRanking={sampledata.YscoreRanking}
          YlateRanking={sampledata.YlateRanking}
          YkindRanking={sampledata.YkindRanking}
        />
      </ActivityInfo>
    </div>
  );
}

export default App;
