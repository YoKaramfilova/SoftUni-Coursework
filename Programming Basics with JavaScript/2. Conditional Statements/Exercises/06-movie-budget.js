function movieBudget(budget, extras, clothingPrice) {
    decor = Number(budget) * 0.10;
    clothingBudget = Number(extras) * Number(clothingPrice);
    if (extras > 150) {
        clothingBudget = clothingBudget * 0.90;
    }
    
    if ((decor + clothingBudget) > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${((decor + clothingBudget) - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - (decor + clothingBudget)).toFixed(2)} leva left.`)
    }
}
movieBudget("15437.62", "186", "57.99")