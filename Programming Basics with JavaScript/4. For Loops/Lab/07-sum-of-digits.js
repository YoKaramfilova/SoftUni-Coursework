function solve(num) {
    let digitsSum = 0;
    for (let i = 0; i < num.length; i++) {
        digitsSum = digitsSum + Number(num[i]);
    }

    console.log(`The sum of the digits is:${digitsSum}`);
}
solve('123456')