function solve(arr) {
    let sumEven = 0; 
    let sumOdd = 0;
    arr.forEach(element => {
        if (element % 2 === 0) {
            sumEven += element;
        } else {
            sumOdd += element;
        }
    });

    let difference = sumEven - sumOdd;

    console.log(difference);

}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);