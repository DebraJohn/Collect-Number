import React from 'react';
import './index.css'

export default class CollectBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      blockNum: [
        [1, 0, 3],
        [0, 0, 0],
        [0, 0, 9]
      ]
    }
    this.chestState = []
  }
  render() {
    const { blockNum } = this.state;
    const blocks = blockNum.map((row, vIndex) => (
      row.map((item, hIndex) => (
        <div className="block" data-v={vIndex} data-h={hIndex} key={vIndex * 3 + hIndex} onClick={() => this.putDown(vIndex, hIndex)}>
          { item ? 
            <span className="number" tabIndex="-1" onClick={(e) => this.pickUp(vIndex, hIndex, e)}>
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
    // const {blockNum} = this.state;
    // blockNum[0][0] = 2
    // setTimeout(() => {

    //   this.setState({blockNum})
    // }, 2000)
  }
  pickUp(h, v, e) {
    e.stopPropagation()
    console.log('拿起: 坐标',h, v)
    this.chestState = [h, v]
  }
  putDown(v, h) {
    const { blockNum } = this.state;
    console.log('放下: 坐标',v, h)
    const newV = this.chestState[0];
    const newH = this.chestState[1]
    blockNum[v][h] = [blockNum[newV][newH], blockNum[newV][newH] = blockNum[v][h]][0]
    this.setState({
      blockNum
    })
    console.log(blockNum)
  }
}