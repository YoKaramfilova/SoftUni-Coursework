function findSmallestNum(arr) {
    arr.map(Number);
    let daysToFinish = 30 - Math.min(...arr);
    let dailyConcrete = 0;
    let dailyConcreteList = [];

    for (let i = 1; i <= daysToFinish; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < 30) {
            let dailyMileIncrease = ++arr[j];
            arr.splice(j, 1, dailyMileIncrease);
            dailyConcrete += 195;  
            }      
        }
        dailyConcreteList.push(dailyConcrete);
        dailyConcrete = 0;         
    }

    let totalConcrete = dailyConcreteList.reduce((a, b) => a + b);
    let price = totalConcrete * 1900;

    console.log(dailyConcreteList.join(', '));
    console.log(price + ' pesos');
 
}

findSmallestNum([21, 25, 28]);
findSmallestNum([17]);
findSmallestNum([17, 22, 17, 19, 17]);
