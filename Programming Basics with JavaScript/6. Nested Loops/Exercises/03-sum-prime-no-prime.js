function solve(input) {
    let index = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;
        while (input[index] !== "stop") {
            let currentNum = Number(input[index++]);
            let nonPrime = false;
            let product = 0;
            if (currentNum < 0) {
                console.log("Number is negative.");
                continue;
            }
            for (let i = 0; i <= currentNum; i++) {
                if (currentNum % i == 0) {
                    product++;
                }
                if (product > 2) {
                    nonPrime = true;
                    break;
                }

            }
            if (nonPrime) {
                nonPrimeSum += currentNum;
            } else {
                primeSum += currentNum;
            }
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}
solve([
"33",

"-1",

"20",

"stop"])
