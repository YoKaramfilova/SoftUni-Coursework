function maxNumber(input) {
    let index = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    while (input[index] !== 'Stop') {
        if (maxNumber < Number(input[index])) {
            maxNumber = Number(input[index])
        }
        index++;
    }
    console.log(maxNumber);
}
maxNumber(["-10",

"20",

"-30",

"Stop"])
maxNumber(["100",

"98",

"80",

"70",

"Stop"])
maxNumber(["45",

"-20",

"7",

"99", "Stop"])