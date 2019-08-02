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
    Emitter.emit('sendNumber', createRandomNumber());
  }
  delete() {
    Emitter.emit('deleteNumber', 'reStart');
  }
}
