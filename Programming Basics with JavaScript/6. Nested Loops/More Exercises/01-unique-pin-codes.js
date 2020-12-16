function solve(input) {
    let firstLimit = Number(input[0]);
    let secondLimit = Number(input[1]);
    let thirdLimit = Number(input[2]);
    let limit = Number("" + firstLimit + secondLimit + thirdLimit)

    for (let i = 100; i <= limit; i++) {
        let printLine = "";
        let currentNum = "" + i;
        let firstDigit = Number(currentNum[0]);
        let secondDigit = Number(currentNum[1]);
        let thirdDigit = Number(currentNum[2]);
        let validity = false; 
        if (firstDigit > 0 && thirdDigit > 0 && firstDigit % 2 == 0 && thirdDigit % 2 == 0 && firstDigit <= firstLimit && thirdDigit <= thirdLimit) {
            validity = true;
        }

        if (secondDigit < 2 || secondDigit > secondLimit ||![2, 3, 5, 7].includes(secondDigit)) {
            validity = false;
        }

        if (validity == true) {
            console.log(firstDigit + " " + secondDigit + " " + thirdDigit);
        }
    }
}

solve([ '3', '5', '5', '' ])