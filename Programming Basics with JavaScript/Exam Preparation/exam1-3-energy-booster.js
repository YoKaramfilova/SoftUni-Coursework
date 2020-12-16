function solve(fruit, size, count) {
    count = Number(count);
    let price = 0;
    if (size === "big") {
        count *= 5;
    } else if (size === "small") {
        count *= 2;
    }
    switch (fruit) {
        case 'Watermelon':
            if (size === "big") {
                price = 28.70;
            } else if (size === "small") {
                price = 56;
            }
            break;
        case 'Mango':
            if (size === "big") {
                price = 19.60;
            } else if (size === "small") {
                price = 36.66;
            }
            break;
        case 'Pineapple':
            if (size === "big") {
                price = 24.80;
            } else if (size === "small") {
                price = 42.10;
            }
            break;
        case 'Raspberry':
            if (size === "big") {
                price = 15.20;
            } else if (size === "small") {
                price = 20;
            }
            break;
    }

    let totalPrice = count * price;
    
    if (totalPrice > 1000) {
        console.log(`${(totalPrice * 0.50).toFixed(2)} lv.`);
    } else if (totalPrice >= 400) {
        console.log(`${(totalPrice * 0.85).toFixed(2)} lv.`);
    } else {
        console.log(`${totalPrice.toFixed(2)} lv.`);
    }

}
solve("Raspberry","small", "50")
// solve(Pineapple,
//     small,
//     1
//     )
// solve(Raspberry,
//     small,
//     50
//     )
// solve(Mango,
//     big,
//     8
//     )