function fruitShop(fruit, day, quantity) {
    let bananaPrice = 0;
    let applePrice = 0;
    let orangePrice = 0;
    let grapefruitPrice = 0;
    let kiwiPrice = 0;
    let pineapplePrice = 0;
    let grapesPrice = 0;
    let totalPrice = 0;
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            bananaPrice = 2.50;
            applePrice = 1.20;
            orangePrice = 0.85;
            grapefruitPrice = 1.45;
            kiwiPrice = 2.70;
            pineapplePrice = 5.50;
            grapesPrice = 3.85;
            break;
        case 'Saturday':
        case 'Sunday':
            bananaPrice = 2.70;
            applePrice = 1.25;
            orangePrice = 0.90;
            grapefruitPrice = 1.60;
            kiwiPrice = 3;
            pineapplePrice = 5.60;
            grapesPrice = 4.20;
            break;
    }
     switch (fruit) {
        case 'banana':
            totalPrice = (bananaPrice * Number(quantity)).toFixed(2);
            break;
        case 'apple':
            totalPrice = (applePrice * Number(quantity)).toFixed(2);
            break;
        case 'orange':
            totalPrice = (orangePrice * Number(quantity)).toFixed(2);
            break;
        case 'grapefruit':
            totalPrice = (grapefruitPrice * Number(quantity)).toFixed(2);
            break;
        case 'kiwi':
            totalPrice = (kiwiPrice * Number(quantity)).toFixed(2);
            break;
        case 'pineapple':
            totalPrice = (pineapplePrice * Number(quantity)).toFixed(2);
            break;
        case 'grapes':
            totalPrice = (grapesPrice * Number(quantity)).toFixed(2);
            break;
     }
     if (totalPrice != 0) {
         console.log(totalPrice);
     } else {
         console.log('error');
     }
        
}
// fruitShop("apple", "Tuesday", "2");

function fruitShop2(fruit, day, quantity) {
    let prices = {
        'banana': [2.50, 2.70],
        'apple': [1.20, 1.25],
        'orange': [0.85, 0.90],
        'grapefruit': [1.45, 1.60],
        'kiwi': [2.70, 3],
        'grapes': [3.85, 4.20]
    }
    let total = 0;

    if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(day)) {
        let price = prices[fruit];
        if (price) total = quantity * price[0];
    } else if ('Sunday' == day) {
        let price = prices[fruit];
        if (price) total = quantity * price[1];
    }

    if (total != 0) {
         console.log(total);
     } else {
         console.log('error');
     }
        
}

fruitShop2("apple", "Tuesday", "2");
