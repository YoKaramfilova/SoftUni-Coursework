function solve(num1, num2, num3) {
    let result = '';
    let positives = [];

    if (num1 >= 0) {
        positives.push(num1);
    }

    if (num2 >= 0) {
        positives.push(num2);
    }

    if (num3 >= 0) {
        positives.push(num3);
    }

    if (positives.length === 3 || positives.length === 1) {
        result = 'Positive';
    } else if (positives.length === 2 && positives.includes(0)) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }

    console.log(result);
}

solve(5,
    12,
    -15);
solve(-6,
    -12,
    14);
solve(-1,
    -2,
    -3);
solve(-1,
    0,
    1);