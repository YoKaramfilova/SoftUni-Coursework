function solve(n) {
    n = Number(n)
    let num = 1;
    for (let i = 0; i <= n; i += 2) {
        console.log(num);
        num = num * Math.pow(2, 2);
            
    }

}
solve(9)