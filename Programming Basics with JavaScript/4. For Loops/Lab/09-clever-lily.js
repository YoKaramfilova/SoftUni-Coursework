function birthdayMoney([age, washerPrice, toyPrice]) {
    age = Number(age);
    washerPrice = Number(washerPrice);
    toyPrice = Number(toyPrice);
    let toys = 0;
    let yearlyMoneyGift = 0;
    let totalMoneyGifts = 0;
    
    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            yearlyMoneyGift = yearlyMoneyGift + 10;
            totalMoneyGifts = totalMoneyGifts + yearlyMoneyGift - 1; 
        } else if (i % 2 != 0) {
            toys = toys + 1;
        }
    }

    let totalSavings = totalMoneyGifts + (toys * toyPrice);
    
    if (totalSavings >= washerPrice) {
        console.log(`Yes! ${(totalSavings - washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice - totalSavings).toFixed(2)}`)
    }
}
birthdayMoney('10', '170', '6')
birthdayMoney('21', '1570.98', '3')