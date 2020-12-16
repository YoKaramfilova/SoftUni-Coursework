function solve(num) {
    num = Number(num);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    console.log(factorial);
}
solve(8)