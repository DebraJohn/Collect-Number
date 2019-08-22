const createChanceArr = (rule, basic = 100) => {
  let newArr = [];
  for (const item of rule) {
    const { num, chance } = item;
    for (let i = 0; i < chance * basic; i++) {
      newArr.push(num);
    }
  }
  return newArr[~~(Math.random() * newArr.length)];
};

export const primaryNumber = [1, 2, 4, 8];

export const createRandomNumber = (chanceNumbers = primaryNumber) => {
  const [ num1, num2, num3, num4 ] = chanceNumbers
  const chanceRule = [
    { num: num1, chance: 0.55 },
    { num: num2, chance: 0.3 },
    { num: num3, chance: 0.1 },
    { num: num4, chance: 0.05 }
  ];
  return createChanceArr(chanceRule);
};
