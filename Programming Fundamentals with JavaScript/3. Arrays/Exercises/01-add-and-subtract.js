function solve(arr) {
    let newArr = [];
    let arrSum = 0; 
    let newArrSum = 0; 

    for (let i = 0; i < arr.length; i++) {
        current = arr[i];
        arrSum += current;
        let modifiedCurrent = 0;

        if (current % 2 === 0) {
            modifiedCurrent = current + i;
        } else {
            modifiedCurrent = current - i;
        }

        newArr.push(modifiedCurrent);

        newArrSum += modifiedCurrent;
    }

    console.log(newArr);
    console.log(arrSum);
    console.log(newArrSum);

}
solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2])