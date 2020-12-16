function solve(input) {
    let firstLetter = input[0];
    let secondLetter = input[1];
    let invalidLetter = input[2];
    let firstNum = firstLetter.charCodeAt(0);
    let secondNum = secondLetter.charCodeAt(0);
    let invalidNum = invalidLetter.charCodeAt(0);
    let combinations = "";
    let combinationsCount = 0

    for (i = firstNum; i <= secondNum; i++) {
        for (j = firstNum; j <= secondNum; j++) {
            for (k = firstNum; k <= secondNum; k++)  {
                if (![i, j, k].includes(invalidNum)) {
                    combinations += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + " ";
                    combinationsCount++
                }
            }
        }
    }

    console.log(combinations + combinationsCount);
    
}
solve([ 'a', 'c', 'b', '' ])
solve([ 'f', 'k', 'h', '' ])