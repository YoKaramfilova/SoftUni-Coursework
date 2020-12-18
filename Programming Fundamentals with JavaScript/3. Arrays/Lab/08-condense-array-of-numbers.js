function solve(arr) {
    let condensed = [];

    while (arr.length >= 2) {
        for (let i = 0; i < arr.length - 1; i++) {
            condensed.push(arr[i] + arr[i + 1]);
        }

        for (let j = 0; j < condensed.length; j++) {
            arr[j] = condensed[j];
        }
        condensed = [];
        arr.pop();

    }

    console.log(arr[0]);

}

solve([2, 10, 3]);
solve([5, 0, 4, 1, 2]);
solve([1]);