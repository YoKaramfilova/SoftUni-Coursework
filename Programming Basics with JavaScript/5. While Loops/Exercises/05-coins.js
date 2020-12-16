function change(sum) {
    sum = Number(sum);
    let coinNumber = 0;
    while (sum > 0) {
        if (sum >= 2) {
            sum -= 2;
            coinNumber++;
        } else if (sum >= 1) {
            sum -= 1;
            coinNumber++;
        } else if (sum >= 0.50) {
            sum -= 0.50;
            coinNumber++;
        } else if (sum >= 0.20) {
            sum -= 0.20;
            coinNumber++;
        } else if (sum >= 0.10) {
            sum -= 0.10;
            coinNumber++;
        } else if (sum >= 0.05) {
            sum -= 0.05;
            coinNumber++;
        } else if (sum >= 0.02) {
            sum -= 0.02;
            coinNumber++;
        } else if (sum >= 0.01) {
            sum -= 0.01;
            coinNumber++;
        }
        sum = Number(sum.toFixed(2));
        
    }

    console.log(coinNumber);
}
change(["1.23"])
change(["2"])
change(["0.56"])
change(["2.73"])
change(["1.43"])
change(["2.02"])
change(["0.67"])
change(["6.73"])