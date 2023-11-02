import React from 'react';
import './App.css';
import ScoreRanking from './components/ScoreRanking';
import LateRanking from './components/LateRanking';
import KindRanking from './components/KindRanking';

function App() {
  return (
    <div className="App">
      <div className="ranking-column">
        <ScoreRanking />
      </div>
      <div className="ranking-column">
        <LateRanking />
      </div>
      <div className="ranking-column">
        <KindRanking />
      </div>
    </div>
  );
}

export default App;
