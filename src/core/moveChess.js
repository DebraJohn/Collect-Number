let chessMap = [
  [2, 2, 0],
  [0, 0, 0],
  [0, 0, 0]
]

/** 
 * @description 交换棋子两个
 * @param {Array} currentPos 当前位置
 * @param {Number} dir -1:左移, 1右移, 0下移, 2上移
 * @param {Array} targetPos 目标位置
 */
function switchChess(currentPos, targetPos, chess = chessMap) {
  if (currentPos.sort().toString() === targetPos.sort().toString()) return chessMap = chess
  const currentValue = chess[currentPos[0]][currentPos[1]]
  console.log('current:', currentValue)
  const targetValue = chess[targetPos[0]][targetPos[1]]
  console.log('targetValue:', targetValue)
  
  if (currentValue !== targetValue ) { // 不相等则交换
    chess[currentPos[0]][currentPos[1]] = [targetValue, chess[targetPos[0]][targetPos[1]] = currentValue][0]
  } else { // 相等则合并
    chess[currentPos[0]][currentPos[1]] = [0, chess[targetPos[0]][targetPos[1]] = targetValue + currentValue][0]
  }
  return chessMap = chess
}
console.log(switchChess([0, 0], [0, 1]))
// console.log(chessMap)
console.log(switchChess([0, 1], [0, 2]))

