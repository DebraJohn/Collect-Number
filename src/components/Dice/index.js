import React from 'react';
import './index.css';
import Emitter from '../../core/event'

export default class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    return <div className="dice" onClick={() => this.summon()}>+</div>
  }
  summon() {
    Emitter.emit('sendNumber', this.createRandomNumber());
  }
  createRandomNumber() {
    const chanceRule = [
      { num: 1, chance: 0.55 },
      { num: 2, chance: 0.3 },
      { num: 4, chance: 0.1 },
      { num: 8, chance: 0.05 }
    ]
    const chanceArr = this.createChanceArr(chanceRule)
    return chanceArr[~~(Math.random() * chanceArr.length)]
  }

  createChanceArr(rule, basic = 100) {
    let newArr = [];
    for (const item of rule) {
      const { num, chance } = item;
      for (let i = 0; i < chance * basic; i++) {
        newArr.push(num);
      }
    }
    return newArr;
  }
}