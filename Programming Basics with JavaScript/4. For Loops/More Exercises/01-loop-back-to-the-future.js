function solve(input) {
    let currentAge = 18;
    let inheritance = Number(input[0]);
    let finalYear = Number(input[1]); 

    for (let i = 1800; i <= finalYear; i++) {
        if (i % 2 == 0) {
            inheritance -= 12000;
        } else {
            inheritance -= 12000 + 50 * currentAge;
        }
        currentAge++
    }

    if (inheritance >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritance.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(0 - inheritance).toFixed(2)} dollars to survive.`)
    }
}
solve([ '50000', '1802' ])
solve([ '100000.15', '1808' ])