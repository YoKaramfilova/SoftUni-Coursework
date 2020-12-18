function solve(n, k) {
    let sequence = [];
    sequence.push(1);

    for (let i = 1; i < n; i++) {
        let previousK = sequence.slice(-k)
        let sum = previousK.reduce((a, b) => a + b);
        sequence.push(sum);
    }

    console.log(sequence.join(' '));

}

solve(6, 3);
solve(8, 2);