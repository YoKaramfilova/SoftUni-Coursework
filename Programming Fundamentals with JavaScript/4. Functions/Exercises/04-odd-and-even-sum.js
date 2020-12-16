function oddAndEvenCharSum(a) {
    let arrOfChar = a.toString().split('');
    let sumOfOdd = 0; 
    let sumOfEven = 0; 

    for (let i = 0; i < arrOfChar.length; i++) {
        if (arrOfChar[i] % 2 === 0) {
            sumOfEven += +arrOfChar[i];
        } else {
            sumOfOdd += +arrOfChar[i];
        }
    }

    console.log(`Odd sum = ${sumOfOdd}, Even sum = ${sumOfEven}`);

}

oddAndEvenCharSum(3495892137259234)