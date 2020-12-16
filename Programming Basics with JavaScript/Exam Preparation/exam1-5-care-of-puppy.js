function solve(input) {
    let index = 0;
    let foodQuantity = Number(input[index++]) * 1000;
        while (input[index] !== "Adopted") {
            let currentPortion = Number(input[index++]);
            foodQuantity -= currentPortion;
        }
    if (foodQuantity >= 0) {
        console.log(`Food is enough! Leftovers: ${foodQuantity} grams.`);
    } else {
        console.log(`Food is not enough. You need ${foodQuantity * (-1)} grams more.`);
    }

}
solve([
    '4',   '130',
    '345', '400',
    '180', '230',
    '120', 'Adopted'
  ])
  solve([ '3', '1000', '1000', '1000', 'Adopted' ])
  solve([
    '2',   '999',
    '456', '999',
    '999', '123',
    '456', 'Adopted'
  ])
