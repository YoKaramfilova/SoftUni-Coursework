function sumOf2Nums(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let magical = Number(input[2]);
    let combinationsCount = 0;
    let magicalFound = false;

    for (let i = x; i <= y; i++) {
        for (let n = x; n <= y; n++) {
            combinationsCount++;
            if ((i + n) == magical) {
                magicalFound = true;
                console.log(`Combination N:${combinationsCount} (${i} + ${n} = ${magical})`);
                break;
            }
        }
        if (magicalFound) {
            break;
        }
    }

    if (!magicalFound) {
        console.log(`${combinationsCount} combinations - neither equals ${magical}`);
    }

}
sumOf2Nums(["1",

"10",

"5"])

sumOf2Nums(["88",

"888",

"1000"])

sumOf2Nums(["23",

"24",

"20"])
sumOf2Nums(["88", 

"888", 

"2000"])