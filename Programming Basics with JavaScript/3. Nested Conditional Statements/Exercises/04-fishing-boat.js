function fishingBoatBudget(budget,season, fishermen) {
    budget = Number(budget);
    fishermen = Number(fishermen);
    rent = 0;
    discount = 0;
    additionalDiscount = 0;
    finalPrice = 0;
    switch (season) {
        case 'Spring':
            rent = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            rent = 4200;
            break;
        case 'Winter':
            rent = 2600;
            break;
    }
    if (fishermen <= 6) {
        discount = rent * 0.10;
    } else if (fishermen > 6 && fishermen <= 11) {
        discount = rent * 0.15;
    } else {
        discount = rent * 0.25;
    }

    if (fishermen % 2 == 0 && season !== 'Autumn'){
        additionalDiscount = (rent - discount) * 0.05;
    }

    finalPrice = (rent - discount) - additionalDiscount;

    if (budget >= finalPrice) {
        console.log(`Yes! You have ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva.`)
    }
}
fishingBoatBudget("3000",

"Summer",

"11")
fishingBoatBudget("3600",

"Autumn",

"6")
fishingBoatBudget(2000,

    "Winter",
    
    13)