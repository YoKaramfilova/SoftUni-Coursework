function solve(num, precision) {
    if (precision > 15) {
        num = parseFloat(num.toFixed(15));
        console.log(num);
    } else {
        num = parseFloat(num.toFixed(precision));
        console.log(num);
    }
}

solve(10.5047439826809347872028349789287, 15)