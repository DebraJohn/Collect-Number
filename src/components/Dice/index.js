import React from 'react';
import './index.css';
import { primaryNumber, createRandomNumber } from '../../core/chance';
import { getGame } from '../../core/storage'
import Emitter from '../../core/event';

export default class Dice extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="topActions">
        <div className="delete" onClick={() => this.delete()}>
          <i className="icon trashBin" />
          <span>重置</span>
        </div>
        <div className="dice" onClick={() => this.summon()}>
          <i className="icon weibolu" />
          <span>来一发</span>
        </div>
      </div>
    );
  }
  summon() {
    const maxNumber = getGame('testPlayer1') ? Math.max(...getGame('testPlayer1').flat()) : 8
    let chanceArray = primaryNumber
    if(maxNumber > 8) {
      const times = maxNumber / primaryNumber[3]
      chanceArray = primaryNumber.map(item => item * times)
    }
    Emitter.emit('sendNumber', createRandomNumber(chanceArray));
  }
  delete() {
    Emitter.emit('deleteNumber', 'reStart');
    localStorage.removeItem('collectGame_testPlayer1')
  }
}
