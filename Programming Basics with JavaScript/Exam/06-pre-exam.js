function solve(input) {
  let index = 0;
  let honeyNeeded = input[index++];
  let harvest = 0;

  while (input[index] !== "Winter has come") {
    let currentBee = input[index++];
    let currentBeeHarvest = 0; 
    let months = 0;

    while (months < 6) {
      currentBeeHarvest += Number(input[index++]);
      months++
    }

    harvest += currentBeeHarvest;

    if (harvest >= honeyNeeded) {
      console.log(`Well done! Honey surplus ${(harvest - honeyNeeded).toFixed(2)}.`);
      break;
    }

    if (currentBeeHarvest < 0) {
      console.log(`${currentBee} was banished for gluttony`);
    }  
  }

  if (harvest < honeyNeeded) {
    console.log(`Hard Winter! Honey needed ${(honeyNeeded - harvest).toFixed(2)}.`)
  }

}
solve([
    '1000',
    'Maya',
    '50',
    '10.5',
    '19.5',
    '30',
    '100',
    '100',
    'Winter has come'
  ])
  solve([
    '300',
    'Beeatrice',
    '50',
    '-10',
    '40',
    '30',
    '100',
    '100',
    'Winter has come'
  ])
  solve([
    '1000',   'Maya',
    '-50',    '-10',
    '-20.70', '20.40',
    '10.30',  '40',
    'Yama',   '50',
    '10',     '20',
    '30',     '100',
    '100',    'Winter has come'
  ])