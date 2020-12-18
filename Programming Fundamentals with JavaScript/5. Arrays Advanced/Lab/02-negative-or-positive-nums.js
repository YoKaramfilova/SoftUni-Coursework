function solve(arr) {
    let sorted = [];

    for (let element of arr) {
        if (element >= 0) {
            sorted.push(element);
        } else {
            sorted.unshift(element);
        }
    }

    sorted.forEach(element => console.log(element));

}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
