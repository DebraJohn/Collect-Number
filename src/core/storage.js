const saveRecord = (key, val) => {
  localStorage.setItem(`collectGame_${key}`, val)
}

const getRecord = (key) => {
  return localStorage.getItem(`collectGame_${key}`)
}

export const saveGame = (boardData) => {
  saveRecord('testPlayer1', JSON.stringify(boardData))
}

export const getGame = (key) => {
  return JSON.parse(getRecord(key))
}