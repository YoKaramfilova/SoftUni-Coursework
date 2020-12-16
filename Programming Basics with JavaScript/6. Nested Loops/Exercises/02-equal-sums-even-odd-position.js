function solve(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let validNumbers = "";
    for (let i = x; i <= y; i++) {
        let currentNum = "" + i;
        let oddNumbersSum = 0;
        let evenNumbersSum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j])
            if (j % 2 == 0) {
                evenNumbersSum += currentDigit;
            } else {
                oddNumbersSum += currentDigit;
            }            
        }
        if (evenNumbersSum == oddNumbersSum) {
            validNumbers += currentNum + " ";
        }  
    }

    if (validNumbers !== "") {
        console.log(validNumbers)
    }
}
solve(["100000", "100050"])
solve(["123456", "124000"])
solve(["299900","300000"])
solve(["100115","100120"])