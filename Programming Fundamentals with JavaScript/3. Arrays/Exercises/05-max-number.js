function solve(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                break;
            }
            
            if (j === arr.length - 1 && arr[i] > arr[j]) {
                newArr.push(arr[i]);
            }
        }
        if (i === arr.length - 1) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr.join(" "));
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);

// [1, 4, 3, 2]	4 3 2
// [14, 24, 3, 19, 15, 17]	24 19 17
// [41, 41, 34, 20]	41 34 20
// [27, 19, 42, 2, 13, 45, 48]	48
