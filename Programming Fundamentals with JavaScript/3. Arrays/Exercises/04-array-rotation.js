function solve(arr, rotations) { 

    for (let i = 0; i < rotations; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }

    console.log(arr.join(" "));

}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);

// [51, 47, 32, 61, 21], 2	32 61 21 51 47
// [32, 21, 61, 1], 4	32 21 61 1
// [2, 4, 15, 31], 5	4 15 31 2
