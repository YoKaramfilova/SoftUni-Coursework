function birthdayCostCalculator(rent){
    let cake = Number(rent) * 0.2;
    let drinks = cake * 0.55;
    let animator = rent / 3;
    let totalCost = Number(rent) + cake + drinks + animator;
    console.log(totalCost);

    return totalCost;
}
birthdayCostCalculator('2250');
