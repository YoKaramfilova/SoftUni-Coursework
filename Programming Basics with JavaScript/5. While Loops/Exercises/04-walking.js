function walking(input) {
    let goalSteps = 10000;
    let index = 0;
    let steps = 0;
    
    while (index < input.length) {
        if (input[index] !== 'Going home') {
        steps += Number(input[index]);
        }
        index++;
    }
    if (steps >= goalSteps) {
        console.log('Goal reached! Good job!');
        console.log(`${steps - goalSteps} steps over the goal!`);
    } else {
        console.log(`${goalSteps - steps} more steps to reach goal.`)
    }
   
}
walking(["1000",

"1500",

"2000",

"6500"])
walking(["1500",

"300",

"2500",

"3000",

"Going home",

"200"])
walking(["1500",

"3000",

"250",

"1548",

"2000",

"Going home",

"2000"])
walking(["125",

"250",

"4000",

"30",

"2678",

"4682"])