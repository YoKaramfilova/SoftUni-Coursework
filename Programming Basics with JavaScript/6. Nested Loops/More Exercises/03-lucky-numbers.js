function solve(input) {
    let n = Number(input[0]);
    let luckyNumbers = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if ((a + b) == (c + d) && n % (a + b) == 0) {
                        luckyNumbers += a + "" + b + "" + c + "" + d + " ";
                    }
            
                }            
            }
        }
    }

    console.log(luckyNumbers);

}
solve([ '3' ])
solve([ '7' ])
solve([ '24' ])
