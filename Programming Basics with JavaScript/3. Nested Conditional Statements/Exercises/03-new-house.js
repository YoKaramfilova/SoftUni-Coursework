function flowerBudget(flowers, quantity, budget) {
    quantity = Number(quantity);
    budget = Number(budget);
    let rosesPrice = 5;
    let dahliasPrice = 3.8;
    let tulipsPrice = 2.8;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.5;
    let price = 0;
    let finalPrice = 0;

    switch (flowers) {
        case 'Roses':
            price = rosesPrice * quantity;
            if (quantity > 80) {
                finalPrice = price * 0.9;
            } else {
                finalPrice = price;
            }
            break;
        case 'Dahlias':
            price = dahliasPrice * quantity;
            if (quantity > 90) {
                finalPrice = price * 0.85;
            } else {
                finalPrice = price;
            }
            break;
        case 'Tulips':
            price = tulipsPrice * quantity;
            if (quantity > 80) {
                finalPrice = price * 0.85;
            } else {
                finalPrice = price;
            }
            break;
        case 'Narcissus':
            price = narcissusPrice * quantity;
            if (quantity < 120) {
                finalPrice = price * 1.15;
            } else {
                finalPrice = price;
            }
            break;
        case 'Gladiolus':
            price = gladiolusPrice * quantity;
            if (quantity < 80) {
                finalPrice = price * 1.2;
            } else {
                finalPrice = price;
            }
            break; 
    }
    
    if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${quantity} ${flowers} and ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`);
    }

}
flowerBudget("Tulips",

"88",

"260")
flowerBudget("Narcissus",

119,

360)

flowerBudget("Roses",

"55",

"250")