function solve(arr) {
    let oddArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            oddArr.push(arr[i] * 2);
        }
    }

    console.log(oddArr.reverse().join(' '));

}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);