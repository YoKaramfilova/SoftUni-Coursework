function solve(input) {
    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let day = 0;
    let totalBiscuits = 0;
    let eatenFood = 0;
    let eatenFoodPercentage = 0;
    let dogFood = 0;
    let catFood = 0;
    let dogPercentage = 0;
    let catPercentage = 0;

    for (let i = 2; (i + 1) < input.length; i += 2) {
        let dailyDogFood = Number(input[i]);
        let dailyCatFood = Number(input[i + 1]);
        dogFood += dailyDogFood;
        catFood += dailyCatFood;
        eatenFood += (dailyDogFood + dailyCatFood);
        day++;
        if (day % 3 == 0) {
            totalBiscuits += (dailyDogFood + dailyCatFood) * 0.10;
        }
    }

    eatenFoodPercentage = (eatenFood / totalFood) * 100;
    dogPercentage = (dogFood / eatenFood) * 100;
    catPercentage = (catFood / eatenFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(totalBiscuits)}gr.`);
    console.log(`${eatenFoodPercentage.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPercentage.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPercentage.toFixed(2)}% eaten from the cat.`);
}

solve([
    '6',   '1000',
    '100', '30',
    '110', '25',
    '120', '35',
    '100', '30',
    '110', '25',
    '120', '35'

  ])
solve