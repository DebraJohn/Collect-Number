import React from 'react';
import CollectBoard from './components/CollectBoard'
import Dice from './components/Dice'
import Footer from './components/Footer'
import './App.css'
import './assets/icon.css'

function App() {
  return (
    <div className="App">
      <Dice />
      <CollectBoard />
      <Footer />
      {/* TODO: 九宫格组件、抽奖、画册 */}
    </div>
  );
}

export default App;
