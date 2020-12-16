function solve(n) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
        }
    }

    console.log(isPrime);    
}

solve(8);