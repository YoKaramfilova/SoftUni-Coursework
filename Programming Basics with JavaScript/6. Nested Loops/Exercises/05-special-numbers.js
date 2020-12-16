function solve(input) {
    let n = input[0];
    let printLine = "";
    for (let i = 1111; i <= 9999; i++) {
        let currentNum = i + "";
        let specialNum = true;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);
            if (n % currentDigit !== 0) {
                specialNum = false;
                break;
            }
        }
        if (specialNum) {
            printLine += currentNum + " "

        }
    }
    console.log(printLine);
}
solve(["3"])
solve(["11"])
solve(["16"])