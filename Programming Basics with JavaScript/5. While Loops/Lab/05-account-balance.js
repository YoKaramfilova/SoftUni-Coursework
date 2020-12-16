function accountBalance(input) {
    let index = 0;
    let sum = 0;

    while (true) {
        if (input[index] === 'NoMoreMoney') {
            break;
        } else if (Number(input[index]) >= 0) {
            console.log(`Increase: ${(Number(input[index])).toFixed(2)}`);
        } else {
            console.log('Invalid operation!');
            break;
        }
        sum += Number(input[index]);
        index++
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance(["5.51", 

"69.42",

"100",

"NoMoreMoney"])
