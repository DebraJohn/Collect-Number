const createChanceArr = (rule, basic = 100) => {
  let newArr = [];
  for (const item of rule) {
    const { num, chance } = item;
    for (let i = 0; i < chance * basic; i++) {
      newArr.push(num);
    }
  }
  return newArr[~~(Math.random() * newArr.length)];
}

export const createRandomNumber = () => {
  const chanceRule = [
    { num: 1, chance: 0.55 },
    { num: 2, chance: 0.3 },
    { num: 4, chance: 0.1 },
    { num: 8, chance: 0.05 }
  ]
  return createChanceArr(chanceRule)
}