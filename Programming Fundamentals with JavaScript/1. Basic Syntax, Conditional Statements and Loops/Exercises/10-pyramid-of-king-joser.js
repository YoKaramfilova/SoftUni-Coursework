function solve(base, increment) {
    let stone = 0; 
    let marble = 0; 
    let lapisLazuli = 0; 
    let gold = 0; 
    let steps = 0;
    let pyramidHeight = 0;

    while(base >= 1) {
        steps++
        if (base <= 2) {
            gold += Math.pow(base,2) * increment;
            break;
        }
        stone += Math.pow((base - 2), 2) * increment;
        if (steps % 5 === 0) {
            lapisLazuli += ((4 * base) - 4) * increment;
        } else {
            marble += ((4 * base) - 4) * increment;
        }
        base -= 2;
    }
    pyramidHeight = steps * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}

solve(11, 1);
solve(11, 0.75);
solve(12, 1);