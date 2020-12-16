function solve(minutes, walks, calories) {
    minutes = Number(minutes);
    walks = Number(walks);
    calories = Number(calories);
    let walkTime = minutes * walks;
    let caloriesBurned = walkTime * 5;
    let burnedPercentage = caloriesBurned / calories;
    if (burnedPercentage >= 0.50) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`)
    }

}
solve(30, 3, 600)