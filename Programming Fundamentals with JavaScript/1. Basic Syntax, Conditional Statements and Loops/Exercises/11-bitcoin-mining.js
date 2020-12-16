function solve(input) {
    let day = 0;
    let dailyGold = 0;
    let bgn = 0;
    let bitcoin = 0;
    let firstBitcoinDay = 0;
    
    for (let i = 0; i < input.length; i++) {
        day++
        if (day % 3 === 0) {
            dailyGold = input[i] * 0.70;
        } else {
            dailyGold = input[i];
        }
        bgn += dailyGold * 67.51;

        while (bgn >= 11949.16) {
            bitcoin++;
            if (bitcoin === 1) {
                firstBitcoinDay = day;
            }
            bgn -= 11949.16
        }
    }

    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin >= 1) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${bgn.toFixed(2)} lv.`);

}

solve([100,200,300]);
solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);
