function solve(vacationPrice, puzzles, dolls, bears, minions, trucks) {
    let puzzlePrice = 2.6;
    let dollPrice = 3;
    let bearPrice = 4.1;
    let minionPRice = 8.2;
    let truckPrice = 2;
    let order = (Number(puzzles) * puzzlePrice) + (Number(dolls) * dollPrice) + (Number(bears) * bearPrice) + (Number(minions) * minionPRice) + (Number(trucks) * truckPrice);
    let discount = 0;
    let toys = Number(puzzles) + Number(dolls) + Number(bears) + Number(minions) + Number(trucks);
    if (toys >= 50) {
        discount = order * 0.25;
    }
    let revenue = order - discount;
    let profit = revenue * 0.90;
    if (profit >= vacationPrice) {
        console.log(`Yes! ${(profit - Number(vacationPrice)).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(Number(vacationPrice) - profit).toFixed(2)} lv needed.`);
    }

}
solve('320', '6', '2', '5', '5', '1');