function solve(arr) { 
    arr = arr.split(' ').map(Number).sort((a, b) => b - a);
    let sum = arr.reduce((a, b) => a + b);
    let average = sum / arr.length;
    let biggest = [];

    for (let i = 0; i <= 4; i++) {
        if (arr[i] > average) {
            biggest.push(arr[i]);
        } else {
            break;
        }
    }

    if(biggest.length === 0) {
        console.log('No');
    } else {
        console.log(biggest.join(' '));
    }
}

solve('10 20 30 40 50');
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('1');
solve('-1 -2 -3 -4 -5 -6');