import React from 'react';
import './index.css'

export default class CollectBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      blockNum: [
        [1, 1, 2],
        [4, 0, 0],
        [0, 0, 8]
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
        <div className="block" key={vIndex * 3 + hIndex} onClick={() => this.handleChess(vIndex, hIndex)}>
          { item ? 
            <span className={`number${this.isArrayEqual(this.prevPos, [vIndex, hIndex]) && toggle ? ' lifted': ''}`}>
              {item}
            </span>
          : '' }
        </div>))
    ))
    return <div className="collect-board">
      {blocks}
    </div>
  }
  componentDidMount() {
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
  }

  isArrayEqual(arrA = [], arrB = []) {
    return arrA.toString() === arrB.toString()
  }
}