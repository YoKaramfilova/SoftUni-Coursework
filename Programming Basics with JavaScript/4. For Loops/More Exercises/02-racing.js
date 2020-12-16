function solve(fuel, consumptionPerLap, laps) {
    fuel = Number(fuel);
    consumptionPerLap = Number(consumptionPerLap);
    laps = Number(laps);
    let totalConsumption = consumptionPerLap; 
    let currentLap = 1;

    for (i = 1; i < laps && totalConsumption < fuel; i++) {
            totalConsumption = totalConsumption + consumptionPerLap - 0.1; 
            if (totalConsumption > fuel) {
                break;
            }  
            currentLap += 1;  
    }

    if (fuel >= totalConsumption) {
        console.log('Congrats! You won the race!');
    } else {
        console.log(`You are out of fuel in round ${currentLap}!`);
    }
}
solve(70, 6.6, 10);
solve(50, 4.3, 30);