import React from 'react';
import './index.css'
import Emitter from '../../core/event'
import { saveGame, getGame } from '../../core/storage'
import { createRandomNumber } from '../../core/chance'
import { numberToIcon } from './numberToIcon'

export default class CollectBoard extends React.Component {
  constructor() {
    super();
    this.colNum = 3
    this.vacentArea = this.colNum * this.colNum
    this.state = {
      blockNum: getGame('testPlayer1') || [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      toggle: 0
    }
    this.prevPos = []
    this.toggle = 0 // 1-拿起  0-放下
  }
  render() {
    const { blockNum, toggle } = this.state;
    const blocks = blockNum.map((row, vIndex) => (
      row.map((item, hIndex) => (
        <div className="block" key={vIndex * this.colNum + hIndex} onClick={() => this.handleChess(vIndex, hIndex)}>
          { item ? 
            <div>
              <span className={`number${this.isArrayEqual(this.prevPos, [vIndex, hIndex]) && toggle ? ' lifted': ''}`}>
                <i className={`icon ${numberToIcon[item]}`}></i>
              </span>
            </div>
          : '' }
        </div>))
    ))
    return <div className="collect-board">
      {blocks}
    </div>
  }
  componentDidMount() {
    this.eventEmitter = Emitter.addListener('sendNumber', val => {
      this.recievedNewNumber(val);
    });
    this.deleteListener = Emitter.addListener('deleteNumber', () => {
      this.setState({
        blockNum: [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]]
      })
    });

    // this.timer = setInterval(() => {
    //   this.vacentArea === 0 && clearInterval(this.timer)
    //   this.recievedNewNumber(createRandomNumber())
    // }, 1000)
  }
  handleChess(v, h) {
    const { toggle } = this.state;
    toggle ? this.switchChess(this.prevPos, [v, h]) : this.prevPos = [v, h]
    this.setState({ toggle: !toggle })
  }

  switchChess(currentPos, targetPos) {
    if (this.isArrayEqual(currentPos, targetPos)) return // 拿起和放下如果是相同位置 则不处理

    const { blockNum } = this.state;
    const cX = currentPos[0], cY = [currentPos[1]]
    const tX = targetPos[0], tY = [targetPos[1]]
    const currentValue = blockNum[cX][cY], targetValue = blockNum[tX][tY]

    // 相同数字合并，不同数字交换位置
    blockNum[cX][cY] = currentValue !== targetValue 
        ? [targetValue, blockNum[tX][tY] = currentValue][0]
        : [0, blockNum[tX][tY] = targetValue + currentValue][0]
    
    this.setState({ blockNum })
    saveGame(blockNum)
  }

  isArrayEqual(arrA = [], arrB = []) {
    return arrA.toString() === arrB.toString()
  }

  recievedNewNumber(val) {
    const { blockNum } = this.state
    const vacentPos = this.findVacentPos()
    if (vacentPos) {
      const x = this.findVacentPos()[0], y = this.findVacentPos()[1]
      blockNum[x][y] = val;
      this.setState({ blockNum })
    } else {
      // todo
      this.vacentArea = 0
    }
  }
  findVacentPos() {
    const { blockNum } = this.state
    for (let i in blockNum) {
      const result = blockNum[i].findIndex(value => value === 0)
      if(result !== -1) {
        return [i, result]
      }
    }
  }
}