import React from 'react';
import CollectBoard from './components/CollectBoard'
import Dice from './components/Dice'
import './App.css'

function App() {
  return (
    <div className="App">
      <Dice />
      <CollectBoard />
      {/* TODO: 九宫格组件、抽奖、画册 */}
    </div>
  );
}

export default App;
