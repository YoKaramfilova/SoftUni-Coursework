function solve(arr) {
    arr.sort( (a, b) => b - a );
    let newArr = [];

    for (let i = 0; i < arr.length / 2; i++) {
        newArr.push(arr[i]);

        if (i !== arr.length - 1 - i) {
        newArr.push(arr[arr.length - 1 - i]);
        }
    }

    console.log(newArr.join(' '));

}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 98]);