function solve(a, b, c) {
    let sum = a + b + c; 

    let result = sum % 1 === 0 ? " - Integer" : " - Float"; 

    console.log(sum + result);
}

solve(1, 110, 1.1);