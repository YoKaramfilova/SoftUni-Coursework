function minNumber(input) {
    let index = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;
    while (input[index] !== 'Stop') {
        if (minNumber > Number(input[index])) {
            minNumber = Number(input[index])
        }
        index++;
    }
    console.log(minNumber);
}
minNumber(["-10",

"20",

"-30",

"Stop"])
minNumber(["100",

"98",

"80",

"70",

"Stop"])
minNumber(["45",

"-20",

"7",

"99", "Stop"])