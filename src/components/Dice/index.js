import React from 'react';
import './index.css';
import { createRandomNumber } from '../../core/chance';
import Emitter from '../../core/event';

export default class Dice extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="dice" onClick={() => this.summon()}>
        <i className="icon weibolu" />
      </div>
    );
  }
  summon() {
    Emitter.emit('sendNumber', createRandomNumber());
  }
}
